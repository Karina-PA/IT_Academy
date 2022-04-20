const { Builder, By, until } = require('selenium-webdriver');
const BasePage = require('../basePage');

class SearchComponent extends BasePage {
    get searchButton() {
        return driver.findElement(By.css('.RBEWZc'))
    }

    get searchField() {
        return driver.findElement(By.css('.whsOnd.zHQkBf'))
    } 

    get startSearch() {
        return driver.findElement(By.xpath('//*[@class="vu8Pwe"]'));
    }

    get searchResults() {
        return driver.findElements(By.css('.vH0yjd'))
    }
}

module.exports = SearchComponent