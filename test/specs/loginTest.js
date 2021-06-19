const assert = require('assert');

describe('My Account test', () => {
    before('Should access home page and validate', async () => {
        const modal_newsletter = await $("div#newsletter div.lightbox__modal");
        const btn_closeNewsletter = await $("div#newsletter button[class*='close lightbox']");
        
        await browser.url('https://loja.electrolux.com.br/');
        await btn_closeNewsletter.click();
        await expect(modal_newsletter).not.toBeDisplayed();
        await expect(browser).toHaveTitle('Ofertas Eletro: geladeira, aspirador, fogão e mais | Electrolux');
    });
    
    it('Should login with valid email and password', async () => {
        await browser.url('https://loja.electrolux.com.br/login');

        const myAccount_modal_vtexAuthSelector = await $("div#vtexIdUI-auth-selector");
        const myAccount_btn_loginWithEmailAndPassword = await $("button#loginWithUserAndPasswordBtn");
        const myAccount_modal_classicLogin = await $("form#vtexIdUI-form-classic-login");
        const myAccount_input_email = await $("input#inputEmail");
        const myAccount_input_password = await $("input#inputPassword");
        const myAccount_btn_classicLogin = await $("div#vtexIdUI-classic-login button#classicLoginBtn");
    });
});


