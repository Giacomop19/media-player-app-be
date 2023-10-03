
const cors = require("cors");
import { json } from 'body-parser';
import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';


const app = express();
const cookieSession = require("cookie-session");
const db = require("./app/models")
const Role = db.role;
const dbConfig = require("./app/config/db.config")
app.use(json())
var corsOptions = {
  origin: process.env.CLIENT
};
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(
  cookieSession({
    name: "media-player-session",
    keys: ["COOKIE_SECRET"], // should use as secret environment variable
    httpOnly: true
  })
);
dotenv.config()
const PORT = process.env.PORT;
app.listen(8080, () => {
  console.log(`Server is running on port ${PORT}.`);
});
// db.mongoose
//   .connect(dbConfig.uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => {
//     console.log("Successfully connect to MongoDB.");
//     initial();
//   })
//   .catch((err:Response) => {
//     console.error("Connection error", err);
//     process.exit();
//   });

// function initial() {
//   Role.estimatedDocumentCount((err:any, count:any) => {
//     if (!err && count === 0) {
//       new Role({
//         name: "user"
//       }).save((err:any) => {
//         if (err) {
//           console.log("error", err);
//         }

//         console.log("added 'user' to roles collection");
//       });

//       new Role({
//         name: "moderator"
//       }).save((err:any) => {
//         if (err) {
//           console.log("error", err);
//         }

//         console.log("added 'moderator' to roles collection");
//       });

//       new Role({
//         name: "admin"
//       }).save((err:any) => {
//         if (err) {
//           console.log("error", err);
//         }

//         console.log("added 'admin' to roles collection");
//       });
//     }
//   });
// }


//entry route
app.get("/", (req:Request, res:Response) => {
  res.json({message: "Welcome to media player project"})
});

// set port, listen for requests
