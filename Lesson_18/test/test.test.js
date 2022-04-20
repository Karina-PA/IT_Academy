const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');
const BaseElements = require('../helpers/baseElements');
const SearchComponent = require('../pageObject/pageComponents/searchComponent');
const TopNavMenu = require('../pageObject/pageComponents/topNavMenu');
const BasePage = require('../pageObject/basePage');

const baseElements = new BaseElements();
const topNavMenu = new TopNavMenu();
const searchComponent = new SearchComponent();

describe(`chromedriver tests`, function() {

    after(async() => {
        await BasePage.close()
    })

    it(`check "ChromeDriver" title`, async () => {
        await BasePage.goTo('https://chromedriver.chromium.org/home');
        expect(await BasePage.getCurrentTitle()).to.contain('ChromeDriver');
    })

    it('check "Chrome Extensions" title', async() => {
        await BasePage.goTo('https://chromedriver.chromium.org/home');
        await baseElements.click(topNavMenu.chromeExtencionsButton, 2000);
        expect(await BasePage.getCurrentTitle()).to.contain('Chrome Extensions');
    })

    it('check search result', async() => {
        await BasePage.goTo('https://chromedriver.chromium.org/home');
        await baseElements.click(searchComponent.searchButton, 2000);
        await baseElements.sendKeys(searchComponent.searchField, 'driver', 2000);
        await baseElements.click(searchComponent.startSearch);
        await driver.sleep(2000);
        const searchResults = await searchComponent.searchResults;
        expect(await searchResults[0].getText()).to.contain('driver');
    })
})