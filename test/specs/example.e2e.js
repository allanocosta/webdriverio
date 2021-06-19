// const LoginPage = require('../pageobjects/login.page');
// const SecurePage = require('../pageobjects/secure.page');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        // await LoginPage.open();
        
        /* await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining('You logged into a secure area!'); */
        const btn_closeNewsletter = await $("div#newsletter button[class*='close lightbox']");
        const modal_newsletter = await $("div#newsletter div.lightbox__modal");
        
        await browser.url('https://loja.electrolux.com.br/');
        btn_closeNewsletter.click();
        if(modal_newsletter.isEnabled() == true) {
            return false;
        } else {
            return true;
        };
        expect(browser).toHaveTitle('Electrolux | Loja Oficial com os melhores eletrodomésticos do mercado');
    });
});


