const BasePage = require('../basePage');

class Search extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
        this.searchField = page.locator('#searchInput');
        this.photoSearchButton = page.locator('.search-catalog__btn--photo');
        this.uploadPhotoButton = page.locator('.upload-photo-btn');
    }

    async searchProduct (text) {
        await this.searchField.fill(text);
        await this.searchField.press('Enter');
    }
}

module.exports = Search;