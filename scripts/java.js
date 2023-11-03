const quotes = [
    {
      text: "The best way to predict the future is to create it.",
      author: "Peter Drucker",
    },
    {
      text: "In the middle of every difficulty lies opportunity.",
      author: "Albert Einstein",
    },
    {
      text: "Change your thoughts and you change your world.",
      author: "Norman Vincent Peale",
    },
    {
      text: "Helping one person might not change the world, but it could change the world for one person.",
      author: "Anonymous",
    },
    {
      text:"Take one step at a time.",
      author:"Ethan Grunewald",
    },
    {
        text:"Poverty is the parent of revolution and crime.",
        author:"Aristotle"
    },
  ];

  function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById("quote-text").textContent = `"${quote.text}"`;
    document.getElementById("quote-author").textContent = `- ${quote.author}`;
  }

  generateRandomQuote();

  