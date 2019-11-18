var freeClimbSDK = require("@freeclimb/sdk");
require("dotenv").config();
const accountId = process.env.accountId;
const authToken = process.env.authToken;
var fc = freeClimbSDK(accountId, authToken);
var to = "+12156068579";
var from = "+12152406199";

fc.api.messages.create(from, to, "Welcome to FreeClimb!");
