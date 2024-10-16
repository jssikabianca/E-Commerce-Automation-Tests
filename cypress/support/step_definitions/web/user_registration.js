import { Given } from '@badeball/cypress-cucumber-preprocessor';
import RegisterPage from '../../pages/web/RegisterPage';

const username = 'user_teste';
const email = 'user_teste@teste.com.br';
const password = 'Teste@123';

Given('if necessary, register a new user', () => {
  RegisterPage.visitRegisterPage();
  RegisterPage.fillRegistrationForm(username, email, password);
  RegisterPage.submitRegistration();
  RegisterPage.checkUserRegistration();
});
