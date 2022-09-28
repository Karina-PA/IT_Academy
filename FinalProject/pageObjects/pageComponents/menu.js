const BasePage = require('../basePage');

class Menu extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
        this.beautyButton = page.locator('.menu-burger__main-list-link.menu-burger__main-list-link--543');
        this.accessoriesButton = page.locator('.menu-burger__main-list-link.menu-burger__main-list-link--1');
        this.brandButton = page.locator('.menu-burger__main-list-link.menu-burger__main-list-link--4853');
        this.asicsBrandButton = page.locator('//*[@href="/brands/asics"]');
    }
}

module.exports = Menu;