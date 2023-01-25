const express=require("express");
const mysql=require("mysql");
var bodyParser=require("body-parser");
const cors=require("cors");

const db=mysql.createPool({
    connectionLimit: 15,
    host:"localhost",
    user:"root",
    password:"",
    database:"student",
});

db.getConnection((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("database connected...");
    }
});

app=express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    console.log("server is started...");
});

app.get("/report",(req,res)=>{
    console.log("getting hack from db.");
    db.query("select * from hack",(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(result);
            res.send(result);
        }
    });
});

app.post("/signup",(req,res)=>{
    const Regno=req.body.reg;
    const Name=req.body.firstname;
    const sqlInsert="INSERT INTO hack (Regno,Name) VALUES(?,?)";
    db.query(sqlInsert,[Regno,Name],(err,result)=>{
        if (err){
            console.log(err);
        }
        else{
            console.log("inserted..");
        }
    });
});

app.post("/delete",(req,res)=>{

    const Reg=req.body.Regno;
  
    const sqlDelete = "DELETE FROM hack WHERE hack.Regno=?";
    
    db.query(sqlDelete,[Reg],(err)=>{
      if(err){
        console.log(err);
      } else{
        console.log("Deleted...");
      }
    })
  });


app.post("/delete/:Regno",(req,res)=>{
    const regno=req.params.Regno;
    const mysql= `DELETE FROM hack WHERE hack.Regno=(?)`;
    db.query(mysql,[regno],(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("Deleted sucessfully..");
            res.send("delete")
        }
    })
});


app.post("/update",(req,res)=>{
    const {Regno,name,mail}=req.body
    const sql=`UPDATE hack SET name=(?) WHERE hack.Regno=(?);`
    db.query(sql,[name,Regno,mail],(error)=>{
      if(error){
        console.log(error);
      }
      else{
        console.log("updated....");
        res.send("updated...")
      }
    })
  })

app.listen(8080,()=>{
    console.log("server is listening..");
});