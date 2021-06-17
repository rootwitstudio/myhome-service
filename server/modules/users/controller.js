import models from '../../../database/models';
import { errorHandling } from '../utils/errorHandling';

export const getAllUsers = async (req, res) => {
  try {
    const users = await models.User.findAll({});
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).json(errorHandling(error.message));
  }
};
