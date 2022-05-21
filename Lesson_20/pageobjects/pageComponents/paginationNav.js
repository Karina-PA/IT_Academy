class PaginationNavButton {
    get nextPageButton () {
        return $('.pagination-nav__item.pagination-nav__item--next')
    }

    get previousPageButton () {
        return $('//div[@class="pagination-nav__item"]')
    }

    async urlNextPage () {
        let urlNextPage = await $('//a[@class="pagination-nav__link"]').getAttribute('href');
        return urlNextPage;
    }
}

module.exports = PaginationNavButton;