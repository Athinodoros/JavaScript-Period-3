/**
 * Created by Athinodoros on 8/3/2016.
 */
var jokes = require("./model/jokes");
var connection = require("./db/db");

connection.connect("mongodb://localhost:27017/test",function(){
   jokes.allJokes(function(err,data){
       if(err){
           console.log("Uppppps");
       }
       console.log(data);
   })  ;
});