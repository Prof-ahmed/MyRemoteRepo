const readline = require('readline');

// Create an interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to perform calculation
const calculator = () => {
  rl.question("Choose an operation (+, -, *, /, %, **): ", (operation) => {
    rl.question("Enter the first number: ", (num1) => {
      rl.question("Enter the second number: ", (num2) => {
        const a = parseFloat(num1);
        const b = parseFloat(num2);
        let result;

        switch (operation) {
          case "+":
            result = a + b;
            break;
          case "-":
            result = a - b;
            break;
          case "*":
            result = a * b;
            break;
          case "/":
            result = b !== 0 ? a / b : "Cannot divide by zero!";
            break;
          case "%":
            result = a % b;
            break;
          case "**":
            result = a ** b;
            break;
          default:
            result = "Invalid operation!";
        }

        console.log(`Result: ${result}`);
        rl.close();
      });
    });
  });
};

// Run the calculator
calculator();
