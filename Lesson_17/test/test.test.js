const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');

describe(`chromedriver tests`, function() {
    let driver;

    beforeEach(async() => {
        driver = new Builder().forBrowser('chrome').build();
        driver.manage().window().setRect({ width: 1440, height: 900 });
    })

    afterEach(async() => {
        await driver.close()
    })

    it(`check "ChromeDriver" title`, async () => {
        await driver.get('https://chromedriver.chromium.org/home');
        const mainTitle = await driver.getTitle();
        expect(mainTitle).to.contain('ChromeDriver');
    })

    it('check "Chrome Extensions" title', async() => {
        await driver.get('https://chromedriver.chromium.org/home');
        const chromeExtencionsButton = await driver.findElement(By.xpath('//div[@class="PsKE7e qV4dIc Qrrb5 YSH9J"]//a[contains(@href,"extensions")]'));
        await chromeExtencionsButton.click();
        await driver.sleep(2000);
        const currentTitle = await driver.getTitle();
        expect(currentTitle).to.contain('Chrome Extensions');
    })

    it('check search result', async() => {
        await driver.get('https://chromedriver.chromium.org/home');
        const searchButton = await driver.findElement(By.css('.RBEWZc'));
        await searchButton.click();
        await driver.sleep(2000);
        const searchField = await driver.findElement(By.css('.whsOnd.zHQkBf'));
        await driver.wait(until.elementIsVisible(searchField), 5000);
        await searchField.sendKeys('driver');
        const startSearch = await driver.findElement(By.xpath('//*[@class="vu8Pwe"]'));
        await startSearch.click();
        await driver.sleep(2000);
        const searchResult = await driver.findElements(By.css('.vH0yjd'));
        expect(await searchResult[0].getText()).to.contain('driver');
    })
})