const BasePage = require('./basePage');

class ListOfGoodsPage extends BasePage {
    constructor (page) {
        super(page);
        this.page = page;
        this.goodsName = page.locator('.goods-name');
        this.sectionName = page.locator('.breadcrumbs__item');
    }
}

module.exports = ListOfGoodsPage;