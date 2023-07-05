describe('Автотест на авторизацию', function () {
    it('Логин без @, верный пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('germandolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.contains('Нужно исправить проблему валидации');
         cy.get('#exitMessageButton > .exitIcon').click();
     })
 })