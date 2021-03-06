import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


mongoose.connect(process.env.MONGO_URL,
    {//configuration
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true// to avoid DeprecationWarning
    }
);

const db = mongoose.connection;


const handleOpen = () => console.log("✌ connected to db");
const handleError = () => error => console.log("error on DB connection!");

db.once("open", handleOpen);
db.on("error", handleError);