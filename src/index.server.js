const express = require("express");
const env = require("dotenv");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//routes
const userRoutes = require("./routers/user");

//environment variable or you can sya constants
env.config();

//mongodb+srv://root:<password>@cluster0.8pl1w.mongodb.net/<dbname>?retryWrites=true&w=majority
//mongodb+srv://yandys03:<password>@cluster0.sjmj1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.0nsfn.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("몽고 데이터베이스에 접속하엿습니다.!!ㅌㅌㅌ");
  })
  .catch((err) => console.log(err));

// mongoose local
//   .connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     //  useFindAndModify: false,
//     // useCreateIndex: true,
//   })
//   .then(() => {
//     console.log("Database connected");
//   });

app.use(express.json());
app.use("/api", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server s running on port ${process.env.PORT}`);
});
