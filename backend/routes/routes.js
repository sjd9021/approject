const { Router, request, response } = require("express");
const router = Router();
const usercopy = require("../models/user");

router.post("/signup", (request, response) => {
  const user = new usercopy({
    username: request.body.username,
    email: request.body.email,
    password: request.body.password,
    mobile: request.body.mobile,
  });
  user
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});

module.exports = router;