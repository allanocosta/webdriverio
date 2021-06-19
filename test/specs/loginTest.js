const assert = require('assert');

describe('My Account test', () => {
    before('Should login with valid email and password', async () => {
        const modal_newsletter = await $("div#newsletter div.lightbox__modal");
        const btn_closeNewsletter = await $("div#newsletter button[class*='close lightbox']");
        
        const myAccount_btn_loginWithEmailAndPassword = await $("button#loginWithUserAndPasswordBtn");

        await browser.url('https://loja.electrolux.com.br/');
        await btn_closeNewsletter.click();
        await expect(modal_newsletter).not.toBeDisplayed();
        await expect(browser).toHaveTitle('Ofertas Eletro: geladeira, aspirador, fogão e mais | Electrolux');
        
        
    });
    
    it('', async () => {
        
    });
});


