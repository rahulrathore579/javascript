// Q3: Monthly Expense Tracker
let expenses = [12000, 3000, 8000, 4000, 2000];
let total = expenses.reduce((sum, val) => sum + val, 0);
let average = total / expenses.length;
let tax = total * 0.10;
let finalAmount = total + tax;
console.log(`Total: ₹${total.toFixed(2)}`);
console.log(`Average: ₹${average.toFixed(2)}`);
console.log(`Final (with tax): ₹${finalAmount.toFixed(2)}`);
