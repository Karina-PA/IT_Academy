const { test, expect } = require('@playwright/test');
const PageFactory = require('../pageObjects/pageFactory');


test.beforeEach(async ({ page }) => {
    const I = new PageFactory(page);
    await I.mainPage.navigate('https://by.wildberries.ru/');    
});

test.describe('wildberries.ru tests', () => {
    test('check Homepage button', async ({page}) => {
        const I = new PageFactory(page);
        await I.baseElement.click(I.header.menuButton);
        await I.baseElement.click(I.menu.beautyButton);
        await I.baseElement.click(I.header.mainPageButton);
        await expect(page).toHaveURL('https://by.wildberries.ru/');
    })

    test('check title', async ({page}) => {
        const I = new PageFactory(page);
        await I.baseElement.click(I.header.menuButton);
        await I.baseElement.click(I.menu.accessoriesButton);
        await expect(page).toHaveTitle(/.*аксессуары.*/);
    })

    test('check search results', async ({page}) => {
        const I = new PageFactory(page);
        await I.search.searchProduct('платье');
        await expect(I.searchResultsPage.goodsName.nth(0)).toContainText(/платье/i);
    })

    test('check adding goods to basket', async ({page}) => {
        const I = new PageFactory(page);
        await I.search.searchProduct('платье');
        await I.baseElement.click(I.searchResultsPage.firstResult);
        await I.baseElement.click(I.productPage.sizeButton.nth(0));
        const brandNameOfGoods = await I.productPage.productBrand.nth(0).textContent();
        const sizeOfGoods = await I.productPage.selectedSize.textContent();
        await I.baseElement.click(I.productPage.addToCartButton);
        await page.waitForTimeout(1000);
        await I.baseElement.click(I.header.basketButton);
        await expect(await I.basketPage.productBrand).toContainText(brandNameOfGoods);
        await expect(await I.basketPage.sizeOfProduct).toContainText(sizeOfGoods);
    })

    test('check removal of goods from basket', async ({page}) => {
        const I = new PageFactory(page);
        await I.baseElement.click(I.mainPage.recommendedGoods.nth(0));
        await I.baseElement.click(I.productPage.addToCartButton);
        await page.waitForTimeout(1000);
        await I.baseElement.click(I.header.basketButton);
        await I.basketPage.deleteButton.click();
        await expect(await I.basketPage.basketEmpty).toHaveText('В корзине пока ничего нет')
    })
})