const fs = require("fs");
const path = require("path");

const theme = process.env.UNYGC_THEME || "default"; // Default to "default.css"
const themesPath = path.resolve(__dirname, "Themes");
const targetTheme = path.join(themesPath, `${theme}.css`);
const destination = path.resolve(__dirname, "package", "theme.css");

if (fs.existsSync(targetTheme)) {
  fs.copyFileSync(targetTheme, destination);
  console.log(`Theme ${theme}.css installed successfully!`);
} else {
  console.error(`Theme ${theme}.css not found!`);
  process.exit(1);
}
 