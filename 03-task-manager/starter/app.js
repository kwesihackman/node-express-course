require("./db/connect");
const express = require("express");

const app = express();
const tasks = require("./routes/tasks");

//midleware
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
