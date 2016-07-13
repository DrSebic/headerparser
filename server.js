var browser = require("bowser");
var http = require("http");

var server = http.createServer(function (req, res){
    console.log(browser.name);
   res.end("Name: " + browser.name + "   version" + browser.version);
    
});

server.listen(8080);