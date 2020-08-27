var mongoose=require("mongoose");
var express=require("express");
var app=express();
var bodyParser=require("body-parser")
const dotenv = require('dotenv');

dotenv.config();
const port = process.env.PORT || 5000;
const open="open";
const uri = process.env.ATLAS_USER
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})



app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true}))


var crisisLnt=require("./routes/crisis.lnt")
app.use("/crisislnt",crisisLnt)

var crisisTata=require("./routes/crisis.Tata")
app.use("/crisisTata",crisisTata)

var crisisReliance=require("./routes/crisis.Reliance")
app.use("/crisisReliance",crisisReliance)

var crisisSony=require("./routes/crisis.Sony")
app.use("/crisisSony",crisisSony)



app.get("/home",function(req,res){
    res.send("home page")
})


app.listen( port, ()=> console.log(`Server is connected in port ${port}`));