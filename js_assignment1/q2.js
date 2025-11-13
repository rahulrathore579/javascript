// Q2: Multi-Type Data Summary
let name = "Rahul";
let age = 22;
let isStudent = true;
let hobbies = ["reading", "coding", "music"];
let details = { city: "Indore", country: "India" };
let noValue = null;
let notAssigned;
const summary = [
  { Label: "Name", Value: name, Type: typeof name },
  { Label: "Age", Value: age, Type: typeof age },
  { Label: "Is Student", Value: isStudent, Type: typeof isStudent },
  { Label: "Hobbies", Value: hobbies, Type: Array.isArray(hobbies) ? "array" : typeof hobbies },
  { Label: "Details", Value: JSON.stringify(details), Type: typeof details },
  { Label: "Null Example", Value: noValue, Type: typeof noValue },
  { Label: "Undefined Example", Value: notAssigned, Type: typeof notAssigned }
];
console.table(summary);
