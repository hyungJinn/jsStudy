const quotes = [
  {
    quote:
      "Fight the good fight of the faith. Take hold of the eternal life to which you were called when you made you made your good confession in the presence of many witnesses.",
    author: "1 Timothy 6:12",
  },
  {
    quote:
      "Command them to do good, to be rich in good deeds, and to be generous and willing to share.",
    author: "1 Timothy 6:18",
  },
  {
    quote: "I can do everything through him who gives me strength.",
    author: "Philippians 4:13",
  },
  {
    quote: "But now, Lord, what do I look for? My hope is in you.",
    author: "Psalms 39:7",
  },
  {
    quote: "Humble yourselves before the Lord, and he will lift you up.",
    author: "James 4:10",
  },
  {
    quote: "The Lord is my shepherd, I shall not be in want.",
    author: "Psalms 23:1",
  },
  {
    quote: "My soul finds rest in God alone: my salvation comes from him.",
    author: "Psalms 62:1",
  },
  {
    quote:
      "Come to me, all you are weary and burdened, and I will give you rest.",
    author: "Matthew 11:18",
  },
  {
    quote:
      "In his heart a man plans his course, but the Lord determines his steps.",
    author: "Proverbs 16:9",
  },
  {
    quote:
      "But he knows the way that I take; when he has tested me, I will come forth as gold.",
    author: "Job 23:10",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
