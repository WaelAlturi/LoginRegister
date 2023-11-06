import express from "express";
import login from "../models/loginModels.js";
const router = express.Router();

router.post("/createAccount", (req, res) => {
  const newAccount = new login({
    firstName: req.body.user.firstName,
    lastName: req.body.user.lastName,
    email: req.body.user.email,
    password: req.body.user.password,
  });
  newAccount
    .save()
    .then(() => {
      console.log("Add New Account @%");
    })
    .catch((e) => {
      console.log(e.message);
    });
});
export default router;
