const { exec } = require('child_process');

// List of test cases to run
const testCases = [
  'cypress/e2e/spec/counter2.cy.js',
  'cypress/e2e/spec/counter3.cy.js',
  'cypress/e2e/spec/counter4.cy.js',
  'cypress/e2e/spec/counter5.cy.js',
  'cypress/e2e/spec/counter1.cy.js',
];

// Command to open a new terminal and run a Cypress test
const runTestInTerminal = (testCase) => {
  const command = `start cmd /k "npx cypress run --spec ${testCase}"`;
  exec(command, (error) => {
    if (error) {
      console.error(`Error opening terminal for ${testCase}:`, error);
    }
  });
};

// Open a terminal for each test case
testCases.forEach((testCase) => {
  runTestInTerminal(testCase);
});
