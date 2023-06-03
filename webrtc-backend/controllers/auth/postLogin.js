const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const postLogin = async (req, res) => {
    try {
        const {mail, password} = await req.body;
        const user = await User.findOne({mail: mail.toLowerCase()});

      

        if(user && await bcrypt.compare(password, user.password)){

            const token = jwt.sign(
                {
                  userId: user._id,
                  mail,
                },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "24h",
                }
              );

            return  res.status(200).json({
                userDetail:{
                    mail: user.mail.toLowerCase(),
                    token: token,
                    username: user.username
                }});
        }
        return res.status(401).send("Invalid credentials. Please check again")
       
    }
    catch(err){
        return res.status(500).send("Something went wrong. Please try again.");
    }  
}

module.exports = postLogin;