require("dotenv").config();
const express = require("express");
const app = express();
const connection = require("./models/db");

app.use(express.json());

//route testing
app.get("/", (request, response) => {
  response.json({ message: "basic route welcome" });
  console.log(typeof process.env.DB_USER);
});

//port config
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server runinng on  port ${PORT}`));
