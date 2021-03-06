const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

const { authenticate } = require("./middlewares/jwt.middleware");
dotenv.config();


mongoose.connect(process.env.MONGO_DB_URL);

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello world')
})

const authRoute = require("./routes/auth.routes");
app.use("/auth", authRoute);

/*
const userRoute = require("./routes/user.routes");
app.use("/users", authenticate, userRoute); 
*/
const postRoute = require("./routes/post.routes");
app.use("/posts", postRoute);
app.listen(process.env.PORT);