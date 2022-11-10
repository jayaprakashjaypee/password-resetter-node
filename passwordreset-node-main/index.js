import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import { userRouter } from "./routes/users.js";
const app = express();
const PORT = process.env.PORT || 9000;

// mongo db connection
const url = "mongodb+srv://monisha:monisha@cluster0.xcnrz.mongodb.net/passwordreset?retryWrites=true&w=majority";


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const con = mongoose.connection;
con.on("open", () => console.log("MongoDB is connected"));

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (request, respone) => {
  respone.send("Welcome to node app!!!! Hi Guys");
});

app.use("/users", userRouter);

app.listen(PORT, () => console.log("The server is started in " + PORT));
