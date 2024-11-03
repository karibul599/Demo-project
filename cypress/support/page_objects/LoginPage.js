// cypress/support/page_objects/LoginPage.js

class LoginPage {
    // Define the elements
    getUsernameInput() {
      return cy.get('[name="name"]');
    }
    getUserEmailInput() {
        return cy.get('[name="email"]');
      }
    getPasswordInput() {
      return cy.get('[name="password"]');
    }
  
    getLoginButton() {
      return cy.get('[type="submit"]');
    }
  
    // Define the actions
    enterUsername(username) {
      this.getUsernameInput().type(username);
    }

    enterEmail(email) {
        this.getUserEmailInput().type(email);
      }

      enterPassword(password) {
        this.getPasswordInput().type(password);
      }

    clickLogin() {
      this.getLoginButton().click();
    }
  
    // Define a reusable login method
    login(username,email, password) {
      this.enterUsername(username);
      this.enterPassword(password);
      this.enterEmail(email);
      this.clickLogin();
    }
  }
  
  export default LoginPage;
  