import express from "express";
const app = express();

const port = 2000;

app.get("/",(req,res)=>{
  res.send("Hello World")
});

app.post("/index.html",(req,res)=>{
  res.sendStatus(201);
});

app.listen(port, ()=>{
  console.log(`server started on port ${port}`);
});

