module.exports = class ElluxBRPage {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    urlBase (path) {
        return browser.url(`https://loja.electrolux.com.br/${path}`);
    };

    closeWindow () {
        return browser.closeWindow();
    };
};