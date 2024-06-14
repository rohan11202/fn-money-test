const express = require('express');
const dotenv = require("dotenv");
const mainRouter = require("./src/routes/main")
const app = express();

app.use(express.json());
dotenv.config();

app.use('/api/v1',mainRouter);


app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
