import express from "express";
import {PORT, mongoDBURL} from "./config.js";
import { Mongoose } from "mongoose";

const app = express();

app.get('/', (request, response) => {
  console.log(request)
  return response.status(234).send('Welcome to ')
});

app.listen(PORT, () => {
  console.log(`App is listening to port: ${PORT}`);
});

Mongoose
  .connect(mongoDBURL)
  .then