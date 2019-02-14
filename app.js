var express = require("express");
var ejs = require("ejs");
const path = require('path');
var request = require('request');
var app = express();
var bodyParser = require("body-parser");
var router = express.Router();

var indexHtml = '/dist/index.html';

// this will let us get the data from a POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.NODE_PORT || 3000;
console.log("The value of PORT is:", port)

app.engine("html", ejs.renderFile);
app.get("/", function(req, res) {
    var data = {};
    res.render(__dirname + indexHtml, {
        data: JSON.stringify(data),
    });
});

var publicPath = path.join(__dirname, '/dist');
app.use('/dist', express.static(publicPath));

app.use("/assets",express.static(__dirname + "/dist/assets"));

// router.get("/", function(req, res) {
//     res.json({message: "hooray! welcome to our api!"});
// });

router.get("/get-coin-list", function(req, res) {
    request.get("https://api.coingecko.com/api/v3/coins/list", function (error, httpResponse, response) {
        if (error) {
            console.error(error);
            res.render(__dirname + indexHtml);
        } else if (httpResponse.statusCode === 200) {
            // response = JSON.parse(response);
            res.send(response)
        }
    })
})
router.post("/get-market-data", function(req, res) {
    var currency = req.body.currency;
    var coinIds = req.body.coinIds;
    var locale = req.body.locale;
    request.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=' + currency + '&ids=' + coinIds + '&locale=' + locale, function (error, httpResponse, response) {
        if (error) {
            console.error(error);
            res.render(__dirname + indexHtml);
        } else if (httpResponse.statusCode === 200) {
            // response = JSON.parse(response);
            res.send(response)
        }
    })
})
var addToHeader = function (req, res, next) {
    // res.header("charset", "utf-8")
    var allowedOrigins = '["http://localhost:3000" , "http://localhost:4200", "*"]';
    var origin = req.headers.origin;
    res.header("Access-Control-Allow-Origin", "*");
    if(allowedOrigins.indexOf(origin) > -1){
        res.header("Access-Control-Allow-Origin", origin);
    }
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Content-Type", "application/json");
    next();
};

app.use("/api", addToHeader, router);
var server = app.listen(port, errCallback);

function errCallback(err) {
    var host = server.address().address;
    var port = server.address().port;
    console.log("app listening at http://%s:%s", host, port);
    console.log("running server on port - " + port);
}

function errorHandler (err, req, res, next) {
    // if (res.headersSent) {
    //     return next(err)
    // }
    // res.status(500)
    // res.render("error", { error: err })
}

// var io = require("socket.io")(server);
// io.on("connection", function(socket){
//     console.log("a user connected");
//     // socket.on("chat message", function(msg){
//     //     io.emit("chat message", msg); // sending message to everyone include sender
//     // });
//     // setInterval(function(){
//     //     io.emit("newScan", true);
//     // },3000);
//
//     socket.on("disconnect", function(){
//         console.log("user disconnected");
//     });
// });

