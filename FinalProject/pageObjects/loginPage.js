const BasePage = require('./basePage');

class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
        this.phoneField = page.locator('.input-item');
        this.requestCodeButton = page.locator('#requestCode');
        this.pageTitle = page.locator('.sign-in-page__title');
    }
}

module.exports = LoginPage;