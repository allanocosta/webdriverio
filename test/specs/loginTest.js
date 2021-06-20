require('dotenv').config();
const assert = require('assert');

const elluxBRLoginPage = require('../pageobjects/ElluxBRLoginPage');
const elluxBRHomePage = require('../pageobjects/ElluxBRHomePage');

describe('My Account test', () => {
    const valid_usermane = process.env.ELLUXBR_USERNAME;
    const valid_password = process.env.ELLUXBR_PASSWORD;
    const invalid_usermane = 'invalid@test.com';
    const invalid_password = 'invalidP@ssw0rd';
    
    before('Should access home page and validate Home Page title', async () => {
        await elluxBRHomePage.open();
        await elluxBRHomePage.closeNewsletter();
        await expect(browser).toHaveTitle('Ofertas Eletro: geladeira, aspirador, fogão e mais | Electrolux');
    });
    
    it('Should login with valid email and password', async () => {
        await elluxBRLoginPage.open();
        await elluxBRLoginPage.loginWithEmailAndPassword(valid_usermane, valid_password);
        await elluxBRHomePage.validateUserLogged('logged');
    });
    
    /* it('Should login with valid email and invalid password', async () => {
        
        
        await browser.url('https://loja.electrolux.com.br/login');
        
        await myAccount_modal_vtexAuthSelector.waitForDisplayed({timeout: (20 * 1000)});
        await myAccount_btn_loginWithEmailAndPassword.click();
        await myAccount_modal_classicLogin.waitForDisplayed({timeout: (5 * 1000)});
        await myAccount_input_email.setValue(valid_usermane);
        await myAccount_input_password.setValue(valid_password);
        await myAccount_btn_classicLogin.click();
        // await browser.getCookies('VtexIdclientAutCookie_electrolux');
        await expect(homePage_btn_userModal).toBeDisplayed();
    }); */
    
    /* it('Should access the Who We Are page', async () => {
        const header_btn_aboutElectrolux = await $("div#btn-sobre button[class*='js-toggle']");
        
        await elluxBRPage.urlBase('home');
        await header_btn_aboutElectrolux.click();
        await header_link_aboutElectroluxMenu.$$(function() {
            return this.querySelectorAll('a');
        }).$("[alt='Quem Somos']").click();
        await browser.toHaveTitle('Transformar a vida para melhor');
    }); */
});


