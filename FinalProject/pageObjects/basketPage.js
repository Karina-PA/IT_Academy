const BasePage = require('./basePage');

class BasketPage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
        this.productBrand = page.locator('.good-info__title.j-product-popup span:last-child');
        this.sizeOfProduct = page.locator('span.good-info__item:last-child').nth(0);
        this.deleteButton = page.locator('.btn__del.j-basket-item-del');
        this.orderButton = page.locator('.b-btn-do-order.btn-main.j-btn-confirm-order');
        this.basketEmpty = page.locator('.basket-page__basket-empty.basket-empty>h1');
        this.nameField = page.locator('//*[@id="1"]');
    }
}

module.exports = BasketPage;