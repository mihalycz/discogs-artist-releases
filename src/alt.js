var Alt = require("alt");
var chromeDebug = require("alt/utils/chromeDebug");
var altInstance = new Alt();
chromeDebug(altInstance);
exports.alt = altInstance;
