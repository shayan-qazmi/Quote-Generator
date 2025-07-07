const quotes = [
  "Believe in yourself and all that you are.",
  "The best way to get started is to quit talking and begin doing.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Dream bigger. Do bigger.",
  "Great things never come from comfort zones.",
  "Push yourself, because no one else is going to do it for you.",
  "Sometimes later becomes never. Do it now.",
  "Success usually comes to those who are too busy to be looking for it.",
  "Your limitation—it's only your imagination.",
  "The harder you work for something, the greater you’ll feel when you achieve it."
];

const quoteEl = document.getElementById("quote");
const btn = document.getElementById("new-quote");
const themeToggle = document.getElementById("theme-toggle");

function getRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

function displayQuote() {
  quoteEl.classList.remove("opacity-100");
  quoteEl.classList.add("opacity-0");

  setTimeout(() => {
    quoteEl.innerText = getRandomQuote();
    quoteEl.classList.remove("opacity-0");
    quoteEl.classList.add("opacity-100");
  }, 300);
}

btn.addEventListener("click", displayQuote);
themeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  themeToggle.textContent =
    document.documentElement.classList.contains("dark") ? "☀️" : "🌙";
});

// Initial quote on load
displayQuote();
