require("dotenv").config();
const express = require("express");
const app = express();
const routing = require("./routes/customer.routes");
app.use(express.json());
//routing
app.use(routing);
//port config
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server runinng on  port ${PORT}`));
