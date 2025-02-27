import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

const corsOptions = {
    origin: process.env.CORS_ORIGIN,
    credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());

app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("pulic"));
app.use(express.json());

export { app };
