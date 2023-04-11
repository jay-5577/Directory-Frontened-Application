var express = require("express");
var cors = require("cors");

var mongoClient = require("mongodb").MongoClient;
var app = express();
app.use(cors());

app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());
app.get("/",(req, res)=>{
    res.send("<h2>welcome to api</h2>");
    res.end();
});
app.get("/products",(req, res)=>{
    mongoClient.connect("mongodb://127.0.0.1:27017").then(clientObject=>{
        var database = clientObject.db("ishop");
        database.collection("products").find({}).toArray().then(document=>{
            res.send(document);
            res.end();
        })
    })
})
app.get("/customers",(req, res)=>{
    mongoClient.connect("mongodb://127.0.0.1:27017").then(clientObject=>{
        var database = clientObject.db("ishop");
        database.collection("customers").find({}).toArray().then(document=>{
            res.send(document);
            res.end();
        })
    })
})
app.get("/vendors",(req, res)=>{
    mongoClient.connect("mongodb://127.0.0.1:27017").then(clientObject=>{
        var database = clientObject.db("ishop");
        database.collection("vendors").find({}).toArray().then(document=>{
            res.send(document);
            res.end();
        })
    })
})
app.post("/registerVendor",(req, res)=>{
    var data = {
        userId : parseInt(req.body.vendorId),
        userName : req.body.vendorName,
        city : req.body.city
    }
    mongoClient.connect("mongodb://127.0.0.1:27017").then(clientObject=>{
        var database = clientObject.db("ishop");
        database.collection("vendors").insertOne(data).then(()=>{
            console.log("recorde inserted");
            res.redirect("/vendors");
        })
    })
})
app.listen(2020);
console.log("server started : http://127.0.0.1.2020");