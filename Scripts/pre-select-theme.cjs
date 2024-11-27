const fs = require("fs");
const path = require("path");
const readline = require("readline");

// Themes directory
const themesPath = path.resolve(__dirname, "../Themes");

// Get all available themes
const themes = fs.readdirSync(themesPath).filter(file => file.endsWith(".css"));

// Setup readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to copy the selected theme
function applyTheme(selectedTheme) {
  const sourceTheme = path.join(themesPath, selectedTheme);
  const destination = path.resolve(__dirname, "../package/theme.css");

  if (fs.existsSync(sourceTheme)) {
    fs.copyFileSync(sourceTheme, destination);
    console.log(`Theme "${selectedTheme}" successfully applied.`);
  } else {
    console.error(`Error: Theme "${selectedTheme}" not found.`);
    process.exit(1);
  }
}

// Prompt user for theme selection
console.log("Please select a theme from the options below:");
themes.forEach((theme, index) => console.log(`${index + 1}. ${theme}`));

rl.question("Enter the number corresponding to your theme: ", (answer) => {
  const index = parseInt(answer, 10) - 1;

  if (index >= 0 && index < themes.length) {
    applyTheme(themes[index]);
    rl.close();
  } else {
    console.error("Invalid selection. Installation aborted.");
    rl.close();
    process.exit(1);
  }
});
