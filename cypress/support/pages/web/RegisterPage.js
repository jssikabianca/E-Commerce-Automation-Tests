class RegisterPage {
    visitRegisterPage() {
      cy.visit('https://www.advantageonlineshopping.com/#/register?viewAll=head');
    }
  
    fillRegistrationForm(username, email, password) {
      cy.get('input[name="usernameRegisterPage"]').type(username);
      cy.get('input[name="emailRegisterPage"]').type(email);
      cy.get('input[name="passwordRegisterPage"]').click().type(password);
      cy.get('input[name="confirm_passwordRegisterPage"]').type(password, { force: true });
      cy.contains(
        'label',
        'I agree to the www.AdvantageOnlineShopping.com Conditions of Use and Privacy Notice'
      ).click();
    }
  
    submitRegistration() {
      cy.get('#register_btn').click();
    }
  
    checkUserRegistration() {
      cy.get('body').then(($body) => {
        if ($body.text().includes('User name already exists')) {
          cy.contains('User name already exists').should('be.visible');
          cy.log('Usuário já cadastrado!');
        } else {
          cy.log('Usuário cadastrado com sucesso!');
        }
      });
    }
  }
  
  export default new RegisterPage();
  