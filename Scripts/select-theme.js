const fs = require("fs");
const path = require("path");

// Themes directory
const themesPath = path.resolve(__dirname, "../Themes");

// Get theme from command line argument
const selectedTheme = process.argv[2] || "default";

// Resolve theme paths
const sourceTheme = path.join(themesPath, `${selectedTheme}.css`);
const destination = path.resolve(__dirname, "../package/theme.css");

// Check if the selected theme exists
if (!fs.existsSync(sourceTheme)) {
  console.error(`Error: Theme "${selectedTheme}" not found in Themes directory.`);
  console.log("Available themes:", fs.readdirSync(themesPath).filter(file => file.endsWith(".css")));
  process.exit(1);
}

// Copy the selected theme to the `package` directory
fs.copyFileSync(sourceTheme, destination);
console.log(`Theme "${selectedTheme}" successfully applied.`);
