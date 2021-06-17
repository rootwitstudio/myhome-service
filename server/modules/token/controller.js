import {JWT_SECRET} from "../../config/jwtConfig";
const jwt = require('jsonwebtoken');

// Returns secret only known to server at runtime
export const getSecret = () => {
    const secret = JWT_SECRET;
    console.log('secret', secret);
    return secret;
};

// Returns token
export const getToken = (payload, secretOrPrivateKey, options) => {
    if (!options) {
        options = {};
    }
    return jwt.sign(payload, secretOrPrivateKey, options);
};

// Returns result of token validation
export const validateToken = (token, secretOrPrivateKey) => {
    try {
        return jwt.verify(token, secretOrPrivateKey);
    } catch (err) {
        return err;
    }
};

// Returns validation result of token
// exports.token_post = (req, res) => {
//     res.send(this.validateToken(req.header.Authorization, this.getSecret()));
// };
//
// exports.hasPermission = (token, resource) => {
//     const result = this.validateToken(token, this.getSecret());
//     console.log(result);
//     if (result.name === 'JsonWebTokenError') {
//         return false;
//     } else if (result.permissions) {
//         let permissionSet = new Set(result.permissions);
//         console.log('permissions in token', JSON.stringify(permissionSet));
//         return permissionSet.has(resource);
//     } else {
//         return false;
//     }
// };
