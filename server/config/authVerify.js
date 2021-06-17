import {JWT_SECRET} from "./jwtConfig";
const jwt = require('jsonwebtoken');
//MIDDLEWARE TO AUTHENTICATE TOKEN BEFORE ACCESSING PROTECTED ROUTES
export const authenticateToken = async(req, res, next) => {
    const authHeader = req.headers['authorization'];

    const token = authHeader && authHeader.split(' ')[1];
    if (token == null)
        return res.sendStatus(401);

    jwt.verify(token, JWT_SECRET, async (err, payload) => {
        if (err)
            return res.sendStatus(403);
        req.user = payload;
        next();
    });

}

