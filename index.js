const express = require('express');
const app = express();
const freeclimbSDK = require('@freeclimb/sdk');
var port = process.env.PORT || 80;

// your freeclimb API key (available in the Dashboard) - be sure to set up environment variables to store these values
const accountId = process.env.accountId;
const authToken = process.env.authToken;
const freeclimb = freeclimbSDK(accountId, authToken);

app.use(express.static("public"));


app.post("/submit", (req, res) => {
  console.log("req", req);
  console.log("res", res);
  return res.status(200);
});

app.listen(port);
