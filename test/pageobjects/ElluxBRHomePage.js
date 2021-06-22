const ElluxBRPage = require('../pageobjects/ElluxBRPage');

class ElluxBRHomePage extends ElluxBRPage {
    
    get modal_newsletter () {return $("#newsletter div.lightbox__modal")};
    get btn_closeNewsletter () {return $("#newsletter button[class*='lightbox__close']")};
    get homePage_btn_userModal () {return $("header[class*='header js-ready'] div.user__actions > button")};
    
    async closeNewsletter() {
        if(await (await this.modal_newsletter).isDisplayed() === true) {
            await (await this.btn_closeNewsletter).click();
            await (await expect(this.modal_newsletter)).not.toBeDisplayed();
        };
    };
    
    async validateUserLogged(status) {
        switch (status){
            case 'logged':
            await (await expect(this.homePage_btn_userModal)).toBeDisplayed();
            break;
            case 'not logged':
            await (await expect(this.homePage_btn_userModal)).not.toBeDisplayed();
            break;
        };
    };
    
    open () {
        return super.urlBase('');
    };
    
    close () {
        return super.closeWindow();
    };
};

module.exports = new ElluxBRHomePage();