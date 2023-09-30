const cors = require("cors");
import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';

dotenv.config()
const app: Express = express();
const cookieSession = require("cookie-session");

var corsOptions = {
  origin: process.env.CLIENT
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "media-player-session",
    keys: ["COOKIE_SECRET"], // should use as secret environment variable
    httpOnly: true
  })
);

//entry route
app.get("/", (req:Request, res:Response) => {
  res.json({message: "Welcome to media player project"})
});

// set port, listen for requests
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});