const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const postRegister = async (req, res) => {
  try {
    const { mail, username, password } = req.body;

    // if user is already registered
    const userExists = await User.exists({ mail: mail.toLowerCase() });

    if (userExists) {
      return res.status(401).send("Email already registered");
    }

    //encrypt password
    const encryptPassword = await bcrypt.hash(password, 10);

    // create user object and save in database
    const user = await User.create({
      mail: mail.toLowerCase(),
      username,
      password: encryptPassword,
    });

    //JSW token
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

    res.status(201).json({
      userDetails: {
        mail: user.mail,
        token: token,
        username: user.username,
      },
    });
  } catch (err) {
    return res.status(500).send("Error occured. Please try again");
  }
};

module.exports = postRegister;
