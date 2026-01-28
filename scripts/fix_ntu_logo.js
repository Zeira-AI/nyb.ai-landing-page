const fs = require("fs");
const path = require("path");

const inputPath = path.join(process.cwd(), "public/logo-ntu.txt");
const outputPath = path.join(process.cwd(), "public/ntu.svg");

try {
  let svgContent = fs.readFileSync(inputPath, "utf8");

  // Strategy:
  // 1. Replace fill="#fff" and fill="#ffffff" with a placeholder TOKEN_BLACK
  // 2. Replace fill="#[any other hex]" with fill="#ffffff" (White)
  // 3. Replace TOKEN_BLACK with fill="#000000" (Black)

  // Note: Regex to match hex colors.

  // Step 1: Protect white fills
  svgContent = svgContent.replace(/fill="#fff"/gi, 'fill="TOKEN_BLACK"');
  svgContent = svgContent.replace(/fill="#ffffff"/gi, 'fill="TOKEN_BLACK"');

  // Step 2: Turn all other fills to White
  // Matches fill="# followed by 3 or 6 hex chars"
  svgContent = svgContent.replace(
    /fill="#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})"/g,
    'fill="#ffffff"',
  );

  // Step 3: Turn protected white (now negative space) to Black (to match dark mode bg)
  // We use opacity slightly less than 1 if we want to be fancy, but solid black is safest visually on black bg.
  // Actually, let's make it fully transparent?
  // If the white parts are overlays covering things, making them transparent shows the things underneath (now white).
  // Use Black to obscure.
  // Better yet, use the exact background color of the site? #050505.
  // Let's stick to #000000 for generic dark mode compatibility.
  svgContent = svgContent.replace(/fill="TOKEN_BLACK"/g, 'fill="#000000"');

  fs.writeFileSync(outputPath, svgContent);
  console.log("Successfully processed NTU logo to public/ntu.svg");
} catch (err) {
  console.error("Error processing logo:", err);
  process.exit(1);
}
