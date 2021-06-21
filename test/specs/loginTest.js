require('dotenv').config();
const assert = require('assert');

const elluxBRLoginPage = require('../pageobjects/ElluxBRLoginPage');
const elluxBRHomePage = require('../pageobjects/ElluxBRHomePage');

describe('Login test', () => {
    const valid_usermane = process.env.ELLUXBR_USERNAME;
    const valid_password = process.env.ELLUXBR_PASSWORD;
    const invalid_usermane = 'invalid@test.com';
    const invalid_password = 'invalidP@ssw0rd';
    
    before('Should access home page and validate Home Page title', async () => {
        await elluxBRHomePage.open();
        await elluxBRHomePage.closeNewsletter();
        await expect(browser).toHaveTitle('Ofertas Eletro: geladeira, aspirador, fogão e mais | Electrolux');
    });

    after('Should delete all sessions', async () =>{
        await elluxBRHomePage.close();
    });
    
    it('Should login with valid email and password', async () => {
        await elluxBRLoginPage.open();
        await elluxBRLoginPage.loginWithEmailAndPassword(valid_usermane, valid_password);
        await elluxBRHomePage.validateUserLogged('logged');
    });
    
    it('Should login with valid email and invalid password', async () => {
        await elluxBRLoginPage.open();
        await elluxBRLoginPage.loginWithEmailAndPassword(valid_usermane, invalid_password);
        await elluxBRLoginPage.validateMsgLogin('Usuário e/ou senha errada');
        await elluxBRHomePage.validateUserLogged('not logged');
    });
    
    it('Should login with invalid email and valid password', async () => {
        await elluxBRLoginPage.open();
        await elluxBRLoginPage.loginWithEmailAndPassword(invalid_usermane, valid_password);
        await elluxBRLoginPage.validateMsgLogin('Usuário e/ou senha errada');
        await elluxBRHomePage.validateUserLogged('not logged');
    });
    
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


