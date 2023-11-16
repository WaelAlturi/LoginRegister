import express from "express";
import login from "../models/loginModels.js";
const router = express.Router();
router.post("/createAccount", (req, res) => {
  login.findOne({ email: req.body.user.email }).then((cheack) => {
    if (cheack) {
      res.status(401).json({
        message: "This Email IS USED",
      });
    } else {
      const newAccount = new login({
        firstName: req.body.user.firstName,
        lastName: req.body.user.lastName,
        email: req.body.user.email,
        password: req.body.user.password,
      });
      newAccount
        .save()
        .then((accountCreated) => {
          return res.status(200).json({
            message: accountCreated,
          });
        })
        .catch((error) => {
          return res.status(500).json({
            message: error.message,
          });
        });
    }
  });
});

router.post("/login", (req, res) => {
  login
    .findOne({ email: req.body.user.email })
    .then((account) => {
      if (account) {
        if (account.password === req.body.user.password) {
          return res.status(200).json({
            message: account,
          });
        } else {
          return res.status(401).json({
            message: "Password not match or account not verified yet",
          });
        }
      } else {
        return res.status(401).json({
          message: "Account Not Exist",
        });
      }
    })
    .catch((e) => {
      return res.status(500).json({
        message: e.message,
      });
    });
});
export default router;
