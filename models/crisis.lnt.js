var mongoose=require("mongoose");

var Schema = mongoose.Schema;

var sales=new Schema({
    passage:{
        type:String,
        unique:false,
        trim:true
    },
    question:{
        type:String,
        unique:false,
        trim:true
    },
    option1:{
        option:{
            type:String,
            unique:false,
            trim:true
        },

        rank:Number
    },
    option2:{
        option:{
            type:String,
            unique:false,
            trim:true
        },
        rank:Number
    },
    option3:{
        option:{
            type:String,
            unique:false,
            trim:true
        },
        rank:Number
    },
    option4:{
        option:{
            type:String,
            unique:false,
            trim:true
        },
        rank:Number
    },
   
});

const production=new Schema({
    passage:{
        type:String,
        unique:false,
        trim:true
    },
    question:{
        type:String,
        unique:false,
        trim:true
    },
    option1:{
        option:{
            type:String,
            unique:false,
            trim:true
        },
        rank:Number
    },
    option2:{
        option:{
            type:String,
            unique:false,
            trim:true
        },
        rank:Number
    },
    option3:{
        option:{
            type:String,
            unique:false,
            trim:true
        },
        rank:Number
    },
    option4:{
        option:{
            type:String,
            unique:false,
            trim:true
        },
        rank:Number
    },
    
});

const resdev=new Schema({
    passage:{
        type:String,
        unique:false,
        trim:true
    },
    question:{
        type:String,
        unique:false,
        trim:true
    },
    option1:{
        option:{
            type:String,
            unique:false,
            trim:true
        },
        rank:Number
    },
    option2:{
        option:{
            type:String,
            unique:false,
            trim:true
        },
        rank:Number
    },
    option3:{
        option:{
            type:String,
            unique:false,
            trim:true
        },
        rank:Number
    },
    option4:{
        option:{
            type:String,
            unique:false,
            trim:true
        },
        rank:Number
    },
    
});

const finance=new Schema({
    passage:{
        type:String,
        unique:false,
        trim:true
    },
    question:{
        type:String,
        unique:false,
        trim:true
    },
    option1:{
        option:{
            type:String,
            
        },
        rank:Number
    },
    option2:{
        option:{
            type:String,
            
        },
        rank:Number
    },
    option3:{
        option:{
            type:String,
            
        },
        rank:Number
    },
    option4:{
        option:{
            type:String,
           
        },
        rank:Number
    },
    
});

var Finance=mongoose.model("LNTcrisisfinance",finance);
var Sales=mongoose.model("LNTcrisissale",sales);
var ResDev=mongoose.model("LNTcrisisResDev",resdev);
var Production=mongoose.model("LNTcrisisProduction",production);

module.exports.Finance = Finance;
module.exports.Production = Production;
module.exports.ResDev = ResDev;
module.exports.Sales = Sales;