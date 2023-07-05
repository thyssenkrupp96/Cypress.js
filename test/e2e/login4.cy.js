describe('Автотест на авторизацию', function () {
    it('Неверный логин, верный пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german22@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon').click();
     })
 })