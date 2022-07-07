const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  console.log("In middleware 1");
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Press</button></input></form>'
  );
});

router.post("/product", (req, res, next) => {
  console.log(req.body); // will log the key value entered in the form
  res.redirect("/");
});

module.exports = router;
