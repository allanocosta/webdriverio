require('dotenv').config();
const assert = require('assert');

describe('My Account test', () => {
    const user_email = process.env.ELLUXBR_USERNAME;
    const user_password = process.env.ELLUXBR_PASSWORD;
    
    before('Should access home page and validate', async () => {
        const modal_newsletter = await $("div#newsletter div.lightbox__modal");
        const btn_closeNewsletter = await $("div#newsletter button[class*='close lightbox']");
        
        await browser.setWindowSize(1920, 1080);
        await browser.url('https://loja.electrolux.com.br/');
        await btn_closeNewsletter.click();
        await expect(modal_newsletter).not.toBeDisplayed();
        await expect(browser).toHaveTitle('Ofertas Eletro: geladeira, aspirador, fogão e mais | Electrolux');
    });
    
    it('Should login with valid email and password', async () => {
        const myAccount_modal_vtexAuthSelector = await $("div#vtexIdUI-auth-selector");
        const myAccount_btn_loginWithEmailAndPassword = await $("button#loginWithUserAndPasswordBtn");
        const myAccount_modal_classicLogin = await $("form#vtexIdUI-form-classic-login");
        const myAccount_input_email = await $("input#inputEmail");
        const myAccount_input_password = await $("input#inputPassword");
        const myAccount_btn_classicLogin = await $("div#vtexIdUI-classic-login button#classicLoginBtn");

        await browser.url('https://loja.electrolux.com.br/login');
        
        await myAccount_modal_vtexAuthSelector.waitForDisplayed({timeout: (20 * 1000)});
        await myAccount_btn_loginWithEmailAndPassword.click();
        await myAccount_modal_classicLogin.waitForDisplayed({timeout: (5 * 1000)});
        await myAccount_input_email.setValue(user_email);
        await myAccount_input_password.setValue(user_password);
        await myAccount_btn_classicLogin.click();
        await browser.getCookies('VtexIdclientAutCookie_electrolux');

    });
});


