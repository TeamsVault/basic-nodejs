const https = require('https');
const fs = require('fs');
const https_options = {
 key: fs.readFileSync("/etc/letsencrypt/live/restapis.startupwavez.com/privkey.pem"),
 cert: fs.readFileSync("/etc/letsencrypt/live/restapis.startupwavez.com/fullchain.pem")
};
https.createServer(https_options, function (req, res) {
 res.writeHead(200);
 res.end("Welcome to Node.js HTTPS Server");
}).listen(8443)