const express = require("express");
const app = express();
const db = require("./models");

const userRoutes = require("./routes/user");


const port = "8000";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/user", userRoutes)

app.listen(port, () => {
   console.log(`Server connected port ${port}`);
});

db.sequelize.sync()
  .then(() => {
    console.log("Database sync...");
  })
  .catch(err => {
    console.log(err);
  });
