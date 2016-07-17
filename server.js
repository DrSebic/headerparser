var http = require("http");
var resultObject = {
    ipaddress: null,
    language: null,
    software: null
};

var server = http.createServer(function (req, res){
    
    //'accept-language': 'en-US,en;q=0.5'
    var languageInfo = req.headers["accept-language"];
    resultObject.language = languageInfo.slice(0, languageInfo.indexOf(","));
    
    resultObject.ipaddress = req.headers['x-forwarded-for'];
    
    resultObject.software = readOperatingSystem(req.headers['user-agent']);

    res.writeHead(200, {"Content-type": "application/json"});
    res.end(JSON.stringify(resultObject));
});

function readOperatingSystem(text) {
  var openParentheses = text.indexOf('(');
  var closeParentheses = text.indexOf(')');
  
  return text.slice(openParentheses + 1, closeParentheses);
}

server.listen(8080);