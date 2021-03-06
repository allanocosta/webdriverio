const ElluxBRPage = require('../pageobjects/ElluxBRPage');

class ElluxBRLoginPage extends ElluxBRPage {
    get login_modal_vtexAuthSelector () {return $("div#vtexIdUI-auth-selector")};
    get login_btn_loginWithEmailAndPassword () {return $("button#loginWithUserAndPasswordBtn")};
    get login_modal_classicLogin () {return $("form#vtexIdUI-form-classic-login")};
    get login_input_email () {return $("input#inputEmail")};
    get login_input_password () {return $("input#inputPassword")};
    get login_btn_classicLogin () {return $("div#vtexIdUI-classic-login button#classicLoginBtn")};
    
    async loginWithEmailAndPassword(username, password) {
        await (await this.login_modal_vtexAuthSelector).waitForDisplayed({timeout: (20 * 1000)});
        await (await this.login_btn_loginWithEmailAndPassword).click();
        await (await this.login_modal_classicLogin).waitForDisplayed({timeout: (10 * 1000)});
        await (await this.login_input_email).setValue(username);
        await (await this.login_input_password).setValue(password);
        await (await this.login_btn_classicLogin).click();
    };
    
    open () {
        return super.urlBase('login');
    };
};

module.exports = new ElluxBRLoginPage();