import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import { getHome } from "./getHome.js";
import { signIn } from "./signIn.js";

const app = express();

const PORT = 5000;

app.use(bodyParser.json());
app.use(cookieParser());

app.get("/home", getHome);
app.get("/sign-in", signIn);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
