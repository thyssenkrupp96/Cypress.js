describe('Автотест на авторизацию', function () {
  it('Верный логин c капсом, верный пароль', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('GerMan@Dolnikov.ru'.toLowerCase());
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.contains('Авторизация прошла успешно');
       cy.get('#exitMessageButton > .exitIcon').click();
   })
})