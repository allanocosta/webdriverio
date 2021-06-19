const assert = require('assert');

// const LoginPage = require('../pageobjects/login.page');
// const SecurePage = require('../pageobjects/secure.page');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        // await LoginPage.open();
        
        /* await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining('You logged into a secure area!'); */
        const modal_newsletter = await $("div#newsletter div.lightbox__modal");
        const btn_closeNewsletter = await $("div#newsletter button[class*='close lightbox']");
        
        await browser.url('https://loja.electrolux.com.br/');
        await btn_closeNewsletter.click();
        await expect(modal_newsletter).not.toBeDisplayed();
        await expect(browser).toHaveTitle('Ofertas Eletro: geladeira, aspirador, fogão e mais | Electrolux');
    });
});


