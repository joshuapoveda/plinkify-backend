const jwt = require("jsonwebtoken");
const User = require('../models/userModel')

const requireAuth = async (req, res, next) => {
  //checking user auth
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Needs auth token" });
  }

  const token = authorization.split(" ")[1];

  try {
    // destructuring id from payload sent from token
    const {_id} = jwt.verify(token, process.env.SECRET);
    //sets user id in req body
    req.user = await User.findOne({_id}).select('_id')
    next()

  } catch (error) {
    console.log(error)
    res.status(401).json({error: 'Req not authorized'})
  }
  
};

module.exports = requireAuth
