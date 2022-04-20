const { Builder, By, until } = require('selenium-webdriver');
const BasePage = require('../basePage');

class TopNavMenu extends BasePage {
    get chromeExtencionsButton() {
        return driver.findElement(By.xpath('//div[@class="PsKE7e qV4dIc Qrrb5 YSH9J"]//a[contains(@href,"extensions")]'));
    }
}

module.exports = TopNavMenu