class Header {
    get searchButton() {
        return $('.DocSearch.DocSearch-Button');
    }

    get toggleButton() {
        if ($('.lightToggleIcon_v35p').isDisplayed() === true) {
            return $('.lightToggleIcon_v35p')
        } else {
            return $('.darkToggleIcon_nQuB')
        }
    }

    get apiButton() {
        return $('//a[@class="navbar__item navbar__link"][2]');
    }
}

module.exports = Header;