describe('Counter1', () => {
  it('Counter1', () => {
    // Intercept a network request and apply throttling
    cy.intercept('GET', 'http://127.0.0.1:5500/jeson-server/service.html', (req) => {
      req.reply((res) => {
        // Simulate network throttling by delaying the response
        res.setThrottle(100); // Delay response by 500ms
        res.send({ message: 'Response with throttling' });
      });
    }).as('getData');

    // Visit the login page
    cy.visit('http://127.0.0.1:5500/jeson-server/TokenLogin.html');
    cy.wait(500); // Wait for the throttled response

    // Fill in login details and submit
    cy.get('#name').type('Karibul Hasan');
    cy.get('#email').type('hasankaribul711@gmail.com');
    cy.get('#password').type('12345');
    cy.xpath('/html/body/div/form/button').click();
    cy.wait(500); // Wait for the throttled response
    cy.xpath('/html/body/div[1]/a').click();
  cy.wait(500);
  cy.get('#token-type').click();
  cy.wait(500);
  cy.get('#backButton').click();
  cy.wait(500);
  cy.get('#logoutBtn').click();
  cy.wait(500);
  cy.get('#yesBtn').click();
  cy.wait(500);
  cy.get('#name').type('Karibul Hasan');
  cy.get('#email').type('karibulhasan4@gmail.com');
  cy.get('#password').type('12345');
  cy.xpath('/html/body/div/form/button').click();
  cy.wait(500);
  cy.xpath('/html/body/div[1]/div[1]/button[1]').click();
  cy.get('getData')
  cy.wait(500);

 cy.get('#nextButton')
  .should('be.visible') 
  .should('exist')      
  .click()             
  .click()             
  .click()            
  .click()            
  .click();            

  cy.wait(2000);


    // Continue with the test...
  });
});
