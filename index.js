const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let department = [
  { id: 1, name: "IT" },
  { id: 2, name: "DBT" },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/department", (req, res) => {
  res.send(department);
});

app.post("/department", (req, res) => {
  let newDepartment = {
    id: department.length + 1,
    name: req.body.name,
  };
  department.push(newDepartment);
  res.send(newDepartment);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
