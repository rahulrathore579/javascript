// Q4: Academic Performance Evaluator
let marks = [85, 90, 88, 92, 80];
let totalMarks = marks.reduce((a, b) => a + b, 0);
let percentage = totalMarks / marks.length;
let detained = marks.some(mark => mark < 35);
if (detained) console.log("Detained (subject below 35).");
else if (percentage >= 85) console.log("Promoted with Distinction");
else if (percentage >= 50) console.log("Promoted");
else console.log("Detained");
console.log(`Average Percentage: ${percentage.toFixed(2)}%`);
