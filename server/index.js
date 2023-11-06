import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import loginApi from "./API/loginApi.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

mongoose
  .connect("mongodb+srv://TuriWael:TuriWael5549@cluster0.0qkhbet.mongodb.net/")
  .then(console.log("Mongo IS ON"))
  .catch((e) => {
    console.log("Mongo Is OFF : =>" + e.message);
  });

app.use("/api/account", loginApi);

app.listen("3000", (req, res) => {
  console.log("Server IS ON Port 3000");
});
