import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import inquirer from "inquirer";

// Convert `import.meta.url` to a proper file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Themes directory
const themesPath = path.resolve(__dirname, "../Themes");

// Check if the Themes directory exists
if (!fs.existsSync(themesPath)) {
  console.error(`Error: Themes directory not found at ${themesPath}`);
  process.exit(1);
}

// Get all available themes
const themes = fs.readdirSync(themesPath).filter(file => file.endsWith(".css"));

// Check if themes are available
if (themes.length === 0) {
  console.error("No themes found in the Themes directory.");
  process.exit(1);
}

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

// Interactive prompt using inquirer
inquirer
  .prompt([
    {
      type: "list",
      name: "selectedTheme",
      message: "Select a theme to apply:",
      choices: themes
    }
  ])
  .then((answers) => {
    applyTheme(answers.selectedTheme);
  })
  .catch((error) => {
    console.error("Error during theme selection:", error);
    process.exit(1);
  });
