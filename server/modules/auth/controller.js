import models from '../../../database/models';
import { errorHandling } from '../utils/errorHandling';
import {getSecret, getToken} from "../token/controller";
const accountSid = 'ACf3bce2a0bf71b78c4e097554d077e736';
const authToken = '928012e770128d97acc5ee95503e4d19';
const client = require('twilio')(accountSid, authToken);
export const login = async (req, res) => {
  try {
    const user = await models.User.findOne({ where: {
        mobile: req.body.mobile,
      }});
    if (!user) {
      res.status(400);
      res.json({err: 'No user found'});
    }
    assignToken(user, res);
  } catch (error) {
    return res.status(500).json(errorHandling(error.message));
  }
};

export const assignToken = (user, res) => {
  const payload = {
    userId: user.id
  };
  const secret = getSecret();
  const token = getToken(payload, secret);
  client.api.messages
      .create({
        body: "Test OTP",
        to: "+919597045243",
        from: "+14155131195",
      }).then(function(data) {
            console.log('OTP sent');
  }).catch(function(err) {
    console.error('Could not notify administrator');
    console.error(err);
  });
  res.json({token: token});
};


