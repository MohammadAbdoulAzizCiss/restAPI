require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());

//route testing
app.get("/", (request, response) => {
  response.json({ message: "basic route welcome" });
});

//port config
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server runinng on  port ${PORT}`));
