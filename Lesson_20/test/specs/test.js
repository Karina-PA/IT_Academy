const MainPage = require('../../pageobjects/mainPage');
const Search = require('../../pageobjects/pageComponents/search');
const Header = require('../../pageobjects/pageComponents/header');
const Footer = require('../../pageobjects/pageComponents/footer');
const PaginationNavButton = require('../../pageobjects/pageComponents/paginationNav')
const header = new Header();
const search = new Search();
const footer = new Footer();
const paginationNavButton = new PaginationNavButton();


describe('Webdriver IO Tests', () => {
    it('check title', async () => {
        await MainPage.navigate('https://webdriver.io/');
        await MainPage.getStartedButton.click()
        await expect(browser).toHaveTitleContaining('Getting Started');
    })

    it('check search result', async () => {
        await MainPage.navigate('https://webdriver.io/');
        await header.searchButton.click();
        await search.searchField.setValue('WebdriverIO');
        await expect(await search.searchResults[0]).toHaveTextContaining('WebdriverIO');
    })

    it('check light/dark mode', async () => {
        await MainPage.navigate('https://webdriver.io/');
        const currentMode = await header.toggleButton;
        await currentMode.click();
        const newCurrentMode = await header.toggleButton;
        await expect(await newCurrentMode.isDisplayed()).toBe(await currentMode.isDisplayed());
    })

    it('check twitter link', async () => {
        await MainPage.navigate('https://webdriver.io/');
        await expect(await footer.twitterLink).toHaveLink('https://twitter.com/webdriverio');
    })

    it('check transition to page', async () => {
        await MainPage.navigate('https://webdriver.io/');
        await header.apiButton.click();
        let urlNextPage = await paginationNavButton.urlNextPage();
        await paginationNavButton.nextPageButton.click();
        await expect(browser).toHaveUrlContaining(urlNextPage);
    })
})