const jwt = require('jsonwebtoken');







module.exports = (req, res, next) => {

    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, 'secret_this_should_be_longer');
        req.userData = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Authentication failed'
        });
    }
}


