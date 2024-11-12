// ** Optional Chaining '?.' **

// Creating an object named 'student' with nested properties
const student = {
  student_Name: 'Oscar',   // Property 'student_Name' with the value 'Oscar'
  subject: 'Programming',  // Property 'subject' with the value 'Programming'
  approved: true,          // Property 'approved' with the value true
  exams: {                 // Nested property 'exams'
    exam_1: 90             // Property 'exam_1' with the value 90
  }
};

// Accessing a nested property using optional chaining
// Replaces the need for an 'if' statement to check if 'exam_1' exists in 'exams'
console.log(student.exams?.exam_1);  // Outputs 90
console.log('Se ejecuta después');   // Confirms that code continues running

// ** Nullish Coalescing Operator '??' **

// Used to provide a default value if the left operand is null or undefined
// Here, 'page' is null, so it defaults to 1
const page = null ?? 1;
console.log(page);  // Outputs 1

// In this case, since 'ExamplePage' is not null or undefined, it retains its original value of 10
const ExamplePage = 10 ?? 1;
console.log(ExamplePage);  // Outputs 10
