describe('Автотест на Пони', function () {
    it('Автотест на Пони', function () {
         cy.visit('https://huntingpony.com/');
         cy.wait(5000);
         cy.get('[data-index="4"] > .header__collections-controls > .header__collections-link').click();
         cy.wait(5000);
         cy.get('[data-product-id="353759308"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
         cy.wait(5000);
         cy.get('.add-cart-counter__btn-label').click();
         cy.wait(5000);
         cy.get('.header__cart > .icon').click();
         cy.wait(5000);
         cy.get('.is-count-up').click();
         cy.get('.cart-controls > .button').click();
         cy.contains('Оформление заказа');
        })
    })