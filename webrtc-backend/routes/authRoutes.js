const express = require("express");
const { model } = require("mongoose");
const router = express.Router();
const authController = require("../controllers/auth/authController");
const auth = require("../middleware/auth")

const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});

const registerSchema = Joi.object({
  mail: Joi.string().email().required(),
  username: Joi.string().min(3).max(12).required(),
  password: Joi.string().min(6).max(12).required(),
});

const loginSchema = Joi.object({
  password: Joi.string().min(6).max(12).required(),
  mail: Joi.string().email().required(),
});

router.post(
  "/register",
  validator.body(registerSchema),
  authController.controller.postRegister
);
router.post(
  "/login",
  validator.body(loginSchema),
  authController.controller.postLogin
);

// route for test the middleware and token

router.get("/test", auth , (req, res) => {
    res.send("request Passed")
})

module.exports = router;
