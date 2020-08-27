var mongoose=require("mongoose");
var {Finance,Production,Sales,ResDev}=require("../models/crisis.Tata");
var router=require("express").Router();

router.route('/getfinance').get((req, res) => {
    Finance.find()
      .then(questions => res.json(questions))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/getproduction').get((req, res) => {
    Production.find()
      .then(questions => res.json(questions))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/getresdev').get((req, res) => {
    ResDev.find()
      .then(questions => res.json(questions))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/getsales').get((req, res) => {
    Sales.find()
      .then(questions => res.json(questions))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route("/getfinance").post(function(req,res){
    console.log(req.body)
    var passage=req.body.passage;
    var question =req.body.question;
    var option1=req.body.option1;
    var option2=req.body.option2;
    var option3=req.body.option3;
    var option4=req.body.option4;
   

    

    var newfinance=new Finance({
        passage:passage,
        question:question,
        option1:option1,
        option2:option2,
        option3:option3,
        option4:option4,
        
    });
    

    console.log(newfinance)

    newfinance.save();

    console.log("Data is added to finance-lnt database")
    res.redirect("/home")

})

router.route("/getproduction").post((req,res)=>{
    console.log(req.body)
    const passage=req.body.passage
    const question =req.body.question;
    const option1=req.body.option1;
    const option2=req.body.option2;
    const option3=req.body.option3;
    const option4=req.body.option4;
    

    const newproduction=new Production({
        passage:passage,
        question:question,
        option1:option1,
        option2:option2,
        option3:option3,
        option4:option4,
        
    });

    newproduction.save();
    console.log("Data is added to production-lnt database")
    res.redirect("/home")

})

router.route("/getsales").post((req,res)=>{
    console.log(req.body)
    const passage=req.body.passage
    const question =req.body.question;
    const option1=req.body.option1;
    const option2=req.body.option2;
    const option3=req.body.option3;
    const option4=req.body.option4;
    

    const newsales=new Sales({
        passage:passage,
        question:question,
        option1:option1,
        option2:option2,
        option3:option3,
        option4:option4,
        
    });

    newsales.save();
    console.log("Data is added to sales-lnt database")
    res.redirect("/home")

})

router.route("/getresdev").post((req,res)=>{
    console.log(req.body)
    const passage=req.body.passage
    const question =req.body.question;
    const option1=req.body.option1;
    const option2=req.body.option2;
    const option3=req.body.option3;
    const option4=req.body.option4;
    

    const newresdev=new ResDev({
        passage:passage,
        question:question,
        option1:option1,
        option2:option2,
        option3:option3,
        option4:option4,
    });

    newresdev.save();
    console.log("Data is added to resdev-lnt database")
    res.redirect("/home")


})

module.exports=router;