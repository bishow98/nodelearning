import express from "express";

const app = express();
app.get("/home", (req, res) => {
  res.send("Welcome to home page");
});

app.listen(5500, () => {
  console.log("Server is running on port 5500");
});
