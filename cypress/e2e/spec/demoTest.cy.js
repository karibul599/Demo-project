import LoginPage from 'E:/New folder/cypress/support/page_objects/LoginPage';

describe('Login Tests', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    // Visit the login page before each test
    cy.visit('http://127.0.0.1:5500/jeson-server/TokenLogin.html');  // Replace with your actual login page URL
  });

  it('Should successfully login with valid credentials', () => {
    loginPage.login('Karibul Hasan', 'karibulhasan4@gmail.com', '12345');
    cy.wait(10001)
   
  });


});