BasePage = require('./basePage');

class HairAccessoriesPage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
        this.combCategory = page.locator('//*[@data-value="1683"]');
    }
}

module.exports = HairAccessoriesPage;