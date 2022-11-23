const cowsay = require("cowsay");
const Quote = require('inspirational-quotes');
console.log(cowsay.say({text:Quote.getQuote().text, 
e:"00",
T:"U"}))


console.log(Quote.getQuote().text)