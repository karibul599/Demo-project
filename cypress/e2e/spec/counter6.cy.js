describe('google test', ()=>{
   
    it('visit google',()=>{
   
     cy.visit('http://127.0.0.1:5500/jeson-server/TokenLogin.html');
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
    cy.wait(500);
    cy.xpath('/html/body/div[1]/div[1]/button[6]').click();
    cy.wait(2000);
    cy.get('#nextButton').click();
    cy.wait(2000);


    });
});