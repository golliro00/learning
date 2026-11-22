import assert from "node:assert";

console.log("xxxxxx");
// The data: values to inspect. Do NOT change these.
const label: string = "widget";
const price: number = 12;
const stock: number = 3;

// TODO 1: the type of price as a string, using typeof.
//   typeof price -> "number"
const priceType: string = typeof price; // replace undefined with your code

// TODO 2: a one-line summary from label and price, using a template literal.
//   "widget" and 12 -> "widget costs 12"
const summary: string = `${label} costs ${price}`; // replace undefined with your code

// TODO 3: whether stock is greater than 0, as a boolean.
//   3 > 0 -> true
const inStock: boolean = stock > 0; // replace undefined with your code

// --- Build checks: these must all pass. Do not edit below this line. ---
assert.strictEqual(
  priceType,
  "number",
  "priceType should be the type of price as reported by typeof",
);
assert.strictEqual(
  summary,
  "widget costs 12",
  "summary should combine label and price into one string via a template literal",
);
assert.strictEqual(
  inStock,
  true,
  "inStock should be a boolean for whether stock is greater than 0",
);

console.log("All checks passed.");
console.log("Type of price:", priceType);
console.log("Summary:", summary);
console.log("In stock:", inStock);
