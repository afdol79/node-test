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
  res.json(department);
});

app.post("/department", (req, res) => {
  let newDepartment = {
    id: department.length + 1,
    name: req.body.name,
  };
  department.push(newDepartment);
  res.json(newDepartment);
});

app.put('/department/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let dept = department.findIndex(d => d.id === id);
  if (id !== -1) {
    department[dept].name = req.body.name;
    res.json(department[dept]);
  } else {
    res.status(404).send('Department not found');
  }
})

app.delete('department/:id',(req,res)=>{
  let id = parseInt(req.params.id);
  let deptIndex = department.findIndex(d => d.id === id);
  if(deptIndex !== -1){
    let deletedDept = department.splice(deptIndex, 1);
    res.json(deletedDept[0]);
  } else {
    res.status(404).send('Department not found');
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
