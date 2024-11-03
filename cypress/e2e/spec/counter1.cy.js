import { slowCypressDown } from 'cypress-slow-down'; // Corrected import name

slowCypressDown(1000); // Slow down all Cypress commands by 5000ms

describe('Counter1', () => {
  it('Counter1', () => {
    // Visit the login page
    cy.visit('http://127.0.0.1:5500/jeson-server/TokenLogin.html');
    
    // Fill in login details and submit
    cy.get('#name').type('Karibul Hasan');
    cy.get('#email').type('hasankaribul711@gmail.com');
    cy.get('#password').type('12345');
    cy.xpath('/html/body/div/form/button').click();
    
    cy.xpath('/html/body/div[1]/a').click();
    cy.get('#token-type').click();
    cy.get('#backButton').click();
    cy.get('#logoutBtn').click();
    cy.get('#yesBtn').click();
    
    // Re-enter login details
    cy.get('#name').type('Karibul Hasan');
    cy.get('#email').type('karibulhasan4@gmail.com');
    cy.get('#password').type('12345');
    cy.xpath('/html/body/div/form/button').click();
    
    // Continue with the test...
    cy.xpath('/html/body/div[1]/div[1]/button[1]').click();
    cy.get('#nextButton').click().click().click().click();
  });
});
