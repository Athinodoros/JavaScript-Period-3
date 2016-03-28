/**
 * Created by Athinodoros on 8/3/2016.
 */
var expect = require("chai").expect;
var jokes = require("../model/jokes");
var connection = require("../db/db");

var testJokes = [{
     "joke": "aaa",
    "type": [
        "short",
        "joke",
        "riddle"
    ],
    "reference": {
        "author": "Unknown",
        "link": "http://thoughtcatalog.com/christopher-hudspeth/2013/09/50-terrible-quick-jokes-thatll-get-you-a-laugh-on-demand/"
    },
    "lastEdited": "2016-03-08T13:34:56.227Z"
},{
    "joke": "bbbb",
        "type": [
    "short",
    "joke",
    "riddle"
],
    "reference": {
    "author": "Unknown",
        "link": "http://thoughtcatalog.com/christopher-hudspeth/2013/09/50-terrible-quick-jokes-thatll-get-you-a-laugh-on-demand/"
},
"lastEdited": "2016-03-08T13:34:56.227Z"
}

];

describe("The jokes factory",function(){
   before(function(done){
       connection.connect("mongodb://localhost:27017/test",function(){
           done();
       });
   });

    beforeEach(function(done){
        var db = connection.get();
        db.collection("jokes").deleteMany({},function(err,data){
            if(err){
                throw new Error("ERRRRRROOOOOOOOOORRRRRR!!!!!!!!!!!"+err);
            }
            db.collection("jokes").insertMany(testJokes,function(err,data){
                if(err){
                    throw new Error("ERRRRRROOOOOOOOOORRRRRR!!!!!!!!!!!"+err);
                }
                done();
            });
        });
    });

    it("should find two jokes",function(done){
        jokes.allJokes(function(err,data){
            if(err){
                throw new Error("FUCKKK");
            }
            expect(data.length).to.be.equal(2);
            done();
        })
    })

});


