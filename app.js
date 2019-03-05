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
            res.send(error);
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
            res.send(error);
        } else if (httpResponse.statusCode === 200) {
            // response = JSON.parse(response);
            res.send(response)
        }
    })
})
router.post("/ajax-get-market-chart", function(req, res) {
    var currency = req.body.currency;
    var days = req.body.days;
    request.get('https://api.coingecko.com/api/v3/coins/win-win/market_chart?vs_currency=' + currency + '&days=' + days, function (error, httpResponse, response) {
        if (error) {
            console.error(error);
            res.send(error);
        } else if (httpResponse.statusCode === 200) {
            response = JSON.parse(response);
            var new_prices = [];
            var new_market_caps = [];
            var new_total_volumes = [];
            var tempObj = {};
            for(var i = response.prices.length - 1; i >= 0; i--){
                tempObj = {};
                tempObj['timestamp'] = response.prices[i][0];
                tempObj['date'] = new Date(response.prices[i][0]).toLocaleString();
                tempObj[currency] = response.prices[i][1];
                new_prices.push(tempObj)
            }
            for(var i = response.market_caps.length - 1; i >= 0; i--){
                tempObj = {};
                tempObj['timestamp'] = response.market_caps[i][0];
                tempObj['date'] = new Date(response.market_caps[i][0]).toLocaleString();
                tempObj[currency] = response.market_caps[i][1];
                new_market_caps.push(tempObj)
            }
            for(var i = response.total_volumes.length - 1; i >= 0; i--){
                tempObj = {};
                tempObj['timestamp'] = response.total_volumes[i][0];
                tempObj['date'] = new Date(response.total_volumes[i][0]).toLocaleString();
                tempObj[currency] = response.total_volumes[i][1];
                new_total_volumes.push(tempObj)
            }
            var obj = {
                prices: new_prices,
                market_caps: new_market_caps,
                total_volumes: new_total_volumes,
            }
            res.send(obj)
        }
    })
})
router.get("/get-market-chart/:currency/:days", function(req, res) {
    var currency = req.params.currency;
    var days = req.params.days;
    request.get('https://api.coingecko.com/api/v3/coins/win-win/market_chart?vs_currency=' + currency + '&days=' + days, function (error, httpResponse, response) {
        if (error) {
            console.error(error);
            res.send(error);
        } else if (httpResponse.statusCode === 200) {
            response = JSON.parse(response);
            var new_prices = [];
            var new_market_caps = [];
            var new_total_volumes = [];
            var tempObj = {};
            for(var i = response.prices.length - 1; i >= 0; i--){
                tempObj = {};
                tempObj['timestamp'] = response.prices[i][0];
                tempObj['date'] = new Date(response.prices[i][0]).toLocaleString();
                tempObj[currency] = response.prices[i][1];
                new_prices.push(tempObj)
            }
            for(var i = response.market_caps.length - 1; i >= 0; i--){
                tempObj = {};
                tempObj['timestamp'] = response.market_caps[i][0];
                tempObj['date'] = new Date(response.market_caps[i][0]).toLocaleString();
                tempObj[currency] = response.market_caps[i][1];
                new_market_caps.push(tempObj)
            }
            for(var i = response.total_volumes.length - 1; i >= 0; i--){
                tempObj = {};
                tempObj['timestamp'] = response.total_volumes[i][0];
                tempObj['date'] = new Date(response.total_volumes[i][0]).toLocaleString();
                tempObj[currency] = response.total_volumes[i][1];
                new_total_volumes.push(tempObj)
            }
            var obj = {
                prices: new_prices,
                market_caps: new_market_caps,
                total_volumes: new_total_volumes,
            }
            // res.send(JSON.stringify(obj, undefined, ' '))
            res.send(obj);
            // res.set({'Content-Type': 'application/json; charset=utf-8'}).send(200, JSON.stringify(obj, undefined, ' '));
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

