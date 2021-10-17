require('dotenv').config();

const express = require("express");
// const morgan = require("morgan");
const db = require("./db");
const cors = require("cors");
const path = require("path");

const app = express();






app.use(cors());
app.use(express.json());

// app.use(express.static(path.join(__dirname, "client/build")));
app.use(express.static("./client/build"));

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "client/build")));
}

console.log(__dirname)
console.log(path.join(__dirname, "client/build"))



app.get("/bank", async function(req, res){
try{
  const results = await db.query("SELECT * FROM details");

    res.status(200).json({
      status:"success",
      results: results.rows.length,
      data:{
        name: results.rows
      }
    })
}catch(err){
 console.log(err);
}

});





app.get("/bank/:id", async function(req, res){
  // console.log(req.params.id);
try{
  const resultes = await db.query("SELECT * FROM details where id = $1",[req.params.id]);

  res.status(200).json({
    status:"success",
    data:{
      name: resultes.rows[0]
    }
  })
}catch(err){
  console.log(err);
}

});


app.get("/bank/name/:name", async function(req, res){
  // console.log(req.params.name);
try{
  const resultes = await db.query("SELECT balance FROM details where name = $1",[req.params.name]);

  res.status(200).json({
    status:"success",
    data:{
      name: resultes.rows[0]
    }
  })
}catch(err){
  console.log(err);
}

});





app.get("/bank/contact/:id", async function(req, res){
//   console.log(req.params.id);
try{
  const resultees = await db.query("SELECT * FROM details where id != $1",[req.params.id]);

  res.status(200).json({
    status:"success",
    results: resultees.rows.length,
      data:{
        name: resultees.rows
      }
  })
}catch(err){
  console.log(err);
}

});




app.put("/bank/post/:name",async function(req, res){

  try{
    const results = await db.query("UPDATE details SET  balance = $1 where name = $2 returning *",[req.body.balance, req.params.name]);
  
     res.status(200).json({
       status:"success",
       data:{
         name: results.rows[0]
       }
     })
  }catch(err){
    console.log(err);
  }
  
  
  });

  













app.get("*", (req, res) =>{
  res.sendFile(path.join(__dirname, "client/build/index.html"))
})







const port = process.env.PORT || 3002;
app.listen(port, ()=>{
  console.log(`server is up and listening on port ${port}`);
});
