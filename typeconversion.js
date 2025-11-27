// Type Conversion in JavaScript
// ------------------------------------------

// 1️⃣ String Conversion
console.log("=== String Conversion ===");
let num = 123;
let strNum = String(num); // Explicit conversion
console.log(`Number: ${num} -> String: "${strNum}"`);
console.log("Type of strNum:", typeof strNum);

// Example with Boolean to String
let bool = true;
let strBool = String(bool);
console.log(`Boolean: ${bool} -> String: "${strBool}"`);

// ------------------------------------------

// 2️⃣ Number Conversion
console.log("\n=== Number Conversion ===");
let str = "456";
let numStr = Number(str); // Explicit conversion
console.log(`String: "${str}" -> Number: ${numStr}`);
console.log("Type of numStr:", typeof numStr);

// Example with invalid number
let invalidNum = Number("hello"); // NaN
console.log(`String: "hello" -> Number: ${invalidNum}`);

// Using parseInt() and parseFloat()
console.log("parseInt('42.9'):", parseInt("42.9"));
console.log("parseFloat('42.9'):", parseFloat("42.9"));

// ------------------------------------------

// 3️⃣ Boolean Conversion
console.log("\n=== Boolean Conversion ===");
console.log(Boolean(0), "-> false (0)");
console.log(Boolean(1), "-> true (1)");
console.log(Boolean(""), "-> false (empty string)");
console.log(Boolean("Hello"), "-> true (non-empty string)");
console.log(Boolean(null), "-> false (null)");
console.log(Boolean(undefined), "-> false (undefined)");

// ------------------------------------------

// 4️⃣ Implicit Conversion (Type Coercion)
console.log("\n=== Implicit Conversion ===");
console.log("'5' + 2 =", '5' + 2); // String concatenation
console.log("'5' - 2 =", '5' - 2); // String converted to Number
console.log("'5' * '2' =", '5' * '2'); // Both converted to Numbers
console.log("'10' / 2 =", '10' / 2);
console.log("10 + true =", 10 + true); // true → 1
console.log("10 + false =", 10 + false); // false → 0
console.log("10 + null =", 10 + null); // null → 0
console.log("'10' + null =", '10' + null); // String concatenation

// ------------------------------------------

// 5️⃣ Summary Table
console.log("\n=== Quick Summary ===");
let examples = [
  ["String(123)", String(123)],
  ["Number('123')", Number("123")],
  ["Boolean('Hello')", Boolean("Hello")],
  ["'5' + 5", '5' + 5],
  ["'5' - 2", '5' - 2],
  ["Number('abc')", Number("abc")]
];

examples.forEach(([expr, result]) => {
  console.log(`${expr} =>`, result, "Type:", typeof result);
});
