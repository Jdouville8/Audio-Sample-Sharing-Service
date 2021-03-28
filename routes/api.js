const router = require("express").Router();
const User = require("../models/User");

router.post("/api/users", ({ body }, res) => {
    User.create(body)
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.get("/api/users", (req, res) => {
    User.find({})
      .then(dbUsers => {
        res.json(dbUsers);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });