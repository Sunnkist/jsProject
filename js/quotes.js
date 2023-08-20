const quotes = [
    {
        quote: "The only way to do great work is to love what you do",
        author: "Steve Jobs",
    },
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt",
    },
    {
        quote:
            "The future belongs to those who believe in the beauty of their dreams",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going",
        author: "Sam Levenson",
    },
    {
        quote: "Only a life lived for others is a life worthwhile.",
        author: "Albert Einstein",
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West",
    },
    {
        quote: "Never go on trips with anyone you do not love.",
        author: "Hemmingway",
    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill",
    },
    {
        quote: "A person who never made a mistake never tried anything new.",
        author: "Albert Einstein",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;