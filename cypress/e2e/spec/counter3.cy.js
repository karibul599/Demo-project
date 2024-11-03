describe('Counter1', () => {
    it('Counter1', () => {
        cy.visit('http://127.0.0.1:5500/jeson-server/TokenLogin.html');
        cy.wait(500);
        cy.get('#name').type('Karibul Hasan');
        cy.get('#email').type('hasankaribul711@gmail.com');
        cy.get('#password').type('12345');
        cy.xpath('/html/body/div/form/button').click();
        cy.wait(500);
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
        cy.wait(100);
        cy.xpath('/html/body/div[1]/div[1]/button[3]').click();
        cy.wait(100);

        // Intercept the request triggered by #nextButton
        cy.intercept('POST', 'http://127.0.0.1:5500/jeson-server/service.html', (req) => {
            req.reply((res) => {
                // Introduce a delay of 2000ms (2 seconds)
                res.delay(20000);
            });
        }).as('nextButtonRequest');
       

        // Click the button multiple times
        for (let i = 0; i < 5; i++) {
            cy.get('#nextButton')
                .should('be.visible')
                .should('exist')
                .click();
        }
        
        cy.wait(2000); // Wait for any remaining operations
    });
});
