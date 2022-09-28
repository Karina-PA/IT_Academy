const BasePage = require('../basePage');

class Header extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
        this.menuButton = page.locator('.nav-element__burger.j-menu-burger-btn.j-wba-header-item');
        this.mainPageButton = page.locator('.nav-element__logo.j-wba-header-item');
        this.loginButton = page.locator('.j-main-login');
        this.basketButton = page.locator('.navbar-pc__icon.navbar-pc__icon--basket');
        this.supportChatButton = page.locator('.header__btn-chat.btn-chat.j-btn-chat-open');
        this.countryButton = page.locator('.simple-menu__link.simple-menu__link--country.j-wba-header-item');
        this.countryAm = page.locator('.radio-with-text__country').nth(1);
    }
}

module.exports = Header;