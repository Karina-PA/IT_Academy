class Search {
    get searchField() {
        return $('.DocSearch-Input');
    }

    get searchResults() {
        return $$('mark');
    }
}

module.exports = Search;