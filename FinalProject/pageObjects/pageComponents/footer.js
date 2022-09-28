const BasePage = require('../basePage');

class Footer extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
        this.vkLink = '.icon-vk';
        this.sellerPageLink = '//*[@data-wba-footer-name="Seller"]/a';
    }
}

module.exports = Footer;