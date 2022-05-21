const BasePage = require('./basePage');

class AccessoriesPage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
        this.goodsCategory = page.locator('.j-menu-item');
    }
}

module.exports = AccessoriesPage;