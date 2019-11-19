const express = require('express');
const app = express();
require("dotenv").config();
const freeclimbSDK = require('@freeclimb/sdk');
const bodyParser = require("body-parser");
const port = process.env.PORT || 80;

const accountId = process.env.accountId;
const authToken = process.env.authToken;
const fc = freeclimbSDK(accountId, authToken);

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/submit", (req, res) => {
  sendTextMessage(req.body.name, req.body.number, req.body.message);
  return res.redirect('/');
});

app.post("/sms", (req, res) => {
  return res.status(200);
})

function sendTextMessage(name, number, message) {
  var message = name + ' has contacted you. ' + 'Message: ' + message + ". Please contact them at " + number + "."
  var to = "+12156068579";
  var from = "+12152406199";
  return fc.api.messages.create(from, to, message);
}

app.listen(port);
