const { Builder, By, until } = require('selenium-webdriver');
let driver = new Builder().forBrowser('chrome').build();
driver.manage().window().setRect({ width: 1440, height: 900 });

class BasePage {
    constructor () {
        global.driver = driver;
    }

    static async goTo(url) {
        await driver.get(url);
    }

    static async getCurrentTitle() {
        return await driver.getTitle();
    }

    static async close() {
        await driver.close();
    }
}

module.exports = BasePage;