const jwt = require("jsonwebtoken");
require("dotenv/config");

module.exports = {
  getToken: (user) => {
    return jwt.sign(
      {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET || 'somethingsecret',
      {
        expiresIn: "24h",
      }
    );
  },

  isAuth : (req, res, next) => {
    const token = req.headers.authorization;
  
    if (token) {
      const onlyToken = token.slice(7, token.length);
      jwt.verify(onlyToken, process.env.JWT_SECRET, (err, decode) => {
        if (err) {
          return res.status(401).send({ msg: 'Invalid Token' });
        }
        req.user = decode;
        next();
        return
      });
    } else {
      return res.status(401).send({ msg: "Token is not supplied." });
    }
  },

  isAdmin : (req, res, next) => {
    console.log(req.user)
    if (req.user && req.user.isAdmin) {
      return next();
    }
    return res.status(401).send({ msg: 'Admin Token is not valid.' })
  },
};
