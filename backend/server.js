const app = require("./app");

// Handling uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Handling uncaught exception...`);
});

// Handling unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Handling unhandled promise rejection...`);
});

// Local environment ke liye listen karega, Vercel standard export use karega
if (process.env.NODE_ENV !== "PRODUCTION") {
  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

// Vercel serverless function ke liye Export zaroori hai
module.exports = app;