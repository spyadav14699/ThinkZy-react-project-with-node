const jwt = require('jsonwebtoken');

 const checkAuth = (req, res, next) => {
   try
    {
         const token = req.headers.authorization.split(" ")[1];
         const decoded = jwt.verify(token, 'secret key');
        
        console.log(decoded);

       if(decoded.usertype === 'admin'){
           next();
       }
       else{
              return res.status(404).json({
                message: 'Authentication failed not admin'
              });
         }

    }
    catch (error)
    {
        return res.status(401).json({
            message: 'Authentication failed invalid token'
        });
    }

}

module.exports = checkAuth;