const quotes = [
{
    quote: " “Live as if you were to die tomorrow. Learn as if you were to live forever.”",
    author:"Mahatma Gandhi",
},
{
    quote:"That which does not kill us makes us stronger.",
    author: "Friedrich Nietzsche",
},
{
    quote: "Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.",
    author: "Bernard M. Baruch",
},
{
    quote: "We must not allow other people’s limited perceptions to define us.",
    author: "Virginia Satir",
},
{
    quote: "Do what you can, with what you have, where you are. Satir",
    author: "Theodore Roosevelt",
},
{
    quote: " “Live as if you were to die tomorrow. Learn as if you were to live forever.”",
    author:"Mahatma Gandhi",
},
{
    quote:"That which does not kill us makes us stronger.",
    author: "Friedrich Nietzsche",
},
{
    quote: "Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.",
    author: "Bernard M. Baruch",
},
{
    quote: "We must not allow other people’s limited perceptions to define us.",
    author: "Virginia Satir",
},
{
    quote: "Do what you can, with what you have, where you are. Satir",
    author: "Theodore Roosevelt",
},

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText=todaysQuote.quote;
author.innerText=todaysQuote.author;