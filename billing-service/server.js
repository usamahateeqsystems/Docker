// imports
const express = require("express");
const morgan = require("morgan");

// init express app
const app = express();

// use morgan middleware
app.use(morgan("combined"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Billing World");
});

// ! USERS CRUD OPERATIONS
app.get("/billings", (req, res) => {
  res.send("GET BILLINGS");
});

app.post("/users", (req, res) => {
  res.send("POST BILLINGS");
});

app.put("/users", (req, res) => {
  res.send("PUT BILLINGS");
});

app.delete("/users", (req, res) => {
  res.send("DELETE BILLINGS");
});

app.listen(3000);
