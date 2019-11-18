const express = require('express');
const app = express();
const freeclimbSDK = require('@freeclimb/sdk');
const bodyParser = require("body-parser");
var port = process.env.PORT || 80;

// your freeclimb API key (available in the Dashboard) - be sure to set up environment variables to store these values
const accountId = process.env.accountId;
const authToken = process.env.authToken;
const freeclimb = freeclimbSDK(accountId, authToken);

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/submit", (req, res) => {
  console.log("req", req.body);
  sendTextMessage(req.body.name, req.body.number, req.body.message);
  return res.status(200);
});

function sendTextMessage(name, number, message) {
  var message = name + ' has contacted you. ' + 'Message: ' + message + ". Please contact them at " + number + "."
  //Need to send a text with all the info to my phone number from bought number
  console.log(message);
 /* app.post("/submit", (req, res) => {
    console.log("req", req.body);
    //console.log("res", res);
    return res.status(200);
  }); */
}

app.listen(port);
