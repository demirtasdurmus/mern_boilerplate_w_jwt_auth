const express = require('express');
var bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config/auth.config")
const router = express.Router();
const User = require("../db/models/user");


router.post("/register", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.find({ email: email });
    if (user.length == 0) {
      const newPass = bcrypt.hashSync(password, 8)
      const newUser = new User(
        {
          name: name,
          email: email,
          password: newPass
        })
      await newUser.save();
      res.status(200).send({
        message: "You have been successfully registered!"
      });
    } else {
      res.status(401).send({
        message: "This email has already been taken..!"
      });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (user.length != 0) {
      const isPasswordCorrect = bcrypt.compareSync(password, user.password);
      if (isPasswordCorrect == true) {
        var token = jwt.sign({ id: user.id, email: user.email }, config.authSecKey);
        res.status(200).send({
          message: "success",
          token: token,
        });

      } else {
        res.status(401).send({
          message: "Your password or username is incorrect!!!"
        });
      }
    } else {
      res.status(401).send({
        message: "Your password or username is incorrect!!!"
      });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
});



module.exports = router;
