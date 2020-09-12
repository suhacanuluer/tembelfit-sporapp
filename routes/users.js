const express = require("express");
const router = express.Router();
const { Users } = require("../Database/Database");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/register", (req, res) => {
  const { email, password, fullName, gender, age, height, weight, target, illness } = req.body;

  bcrypt.hash(password, 10).then(encryptedPassword => {
    Users.findOne({
      where: {
        email
      }
    }).then(searchedUser => {
      if ( searchedUser ) {
        res.status(409).json({
          status: "error",
          message: "email exists"
        });
      } else {
        Users.create({
          email,
          password: encryptedPassword,
          fullName,
          gender,
          age,
          height,
          weight,
          target,
          illness
        }).then(createdUser => {
          res.status(201).json({
            status: "success",
            message: "user created",
            data: createdUser
          });
        });
      };
    });
  });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  Users.findOne({
    where: {
      email: email
    }
  }).then((user) => {
    if (!user) {
      res.status(404).json({
        status: "error",
        message: "email not found"
      });
    } else {
      bcrypt.compare(password, user.password).then(unEncryptedPassword => {
        if (!unEncryptedPassword) {
          res.status(401).json({
            status: "error",
            message: "wrong password"
          });
        } else {
          const payload = {
            id: user.id,
            email: email
          };

          const token = jwt.sign(payload, "secret_key", {
            expiresIn: 120
          });

          res.status(200).json({
            status: "success",
            data: user,
            token: token
          });
        }
      });
    }
  });
});

module.exports = router;
