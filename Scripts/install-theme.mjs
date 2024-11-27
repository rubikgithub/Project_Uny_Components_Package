import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Resolve paths dynamically for installed location
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Themes directory within the installed package
const themesPath = path.resolve(__dirname, "../Themes");
const themesDestination = path.resolve(__dirname, "../Themes");

// Check if the Themes directory exists
if (!fs.existsSync(themesPath)) {
  console.error(`Error: Themes directory not found at ${themesPath}`);
  process.exit(1);
}

// Get all available themes
const themes = fs.readdirSync(themesPath).filter(file => file.endsWith(".css"));

// Function to copy the selected theme
function applyTheme(selectedTheme) {
  const sourceTheme = path.join(themesPath, selectedTheme);
  const destination = path.resolve(themesDestination, "index.css"); // Outputs to the user's current working directory//process.cwd()


  // Check if the source theme exists
  if (fs.existsSync(sourceTheme)) {
    const themeContent = `@import '../package/index.css';\n@import './${selectedTheme}';`;

    // Write the combined CSS content to theme.css
    fs.writeFileSync(destination, themeContent, "utf8");
    console.log(`Theme "${selectedTheme}" successfully applied at ${destination}`);
  } else {
    console.error(`Error: Theme "${selectedTheme}" not found.`);
    console.log("Available themes:", fs.readdirSync(themesPath).filter(file => file.endsWith(".css")).join(", "));
    process.exit(1);
  }

  /*

  if (fs.existsSync(sourceTheme)) {
    fs.copyFileSync(sourceTheme, destination);
    console.log(`Theme "${selectedTheme}" successfully applied. at ${destination}`);
  } else {
    console.error(`Error: Theme "${selectedTheme}" not found.`);
    console.log("Available themes:", themes.join(", "));
    process.exit(1);
  }
  */
}

// Get the theme name from the command arguments
const args = process.argv.slice(2);
if (args.length === 0) {
  console.error("Error: No theme name provided.");
  console.log("Usage: npm run theme -- themename");
  process.exit(1);
}

const themeName = args[0] + ".css";
applyTheme(themeName);
