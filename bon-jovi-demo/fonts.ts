import localFont from "next/font/local";

const formulaCondensed = localFont({
  src: "./public/fonts/FormulaCondensed-Bold.otf",
  variable: "--font-formula",
  display: "block",
});

const founders = localFont({
  src: "./public/fonts/FoundersGrotesk-Regular.otf",
  variable: "--font-founders",
  display: "block",
});

const foundersMono = localFont({
  src: "./public/fonts/FoundersGroteskMono-Regular.otf",
  variable: "--font-founders-mono",
  display: "block",
});

export { formulaCondensed, founders, foundersMono };
