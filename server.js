var express = require("express")
var app = express();

app.get('/', function (req, res) {
    var ip = req.headers['x-forwarded-for'];
    var lang = (req.headers['accept-language'].split(","))[0];
    var str = req.headers['user-agent'];
    var soft = str.slice(str.indexOf("(") + 1, str.indexOf(")"))
    res.send(JSON.stringify({"ipaddress" : ip, "languague" : lang, "software" : soft}));
});

app.listen(process.env.PORT || 8080, function () {
  console.log('Whoami app running...');
});