// const express = require('express');

const router = require("express").Router();

const Users = require('../users/users-model');

// const restricted = require("../auth/restricted-mw");

router.get("/", (req, res) => {
    Users.find()
      .then(users => {
        res.status(200).json({data:users, jwt:req.decodedToken});
      })
      .catch(err => res.send(err));
  });

module.exports = router;