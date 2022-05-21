const { test, expect } = require('@playwright/test');
const PageFactory = require('../pageObjects/pageFactory');
const SellerLoginPage = require('../pageObjects/selleLoginPage');

test.beforeEach(async ({ page }) => {
    const I = new PageFactory(page);
    await I.mainPage.navigate('https://by.wildberries.ru/');    
});

test.describe('wildberries.ru tests', () => {

    test('check login', async ({page}) => {
        const I = new PageFactory(page);
        await I.baseElement.click(I.header.loginButton);
        await I.loginPage.phoneField.fill('999999999');
        await expect(I.loginPage.requestCodeButton).toBeEnabled();
    })

    test('check login with incorrect number', async ({page}) => {
        const I = new PageFactory(page);
        await I.baseElement.click(I.header.loginButton);
        await I.loginPage.phoneField.fill('999');
        await expect(I.loginPage.requestCodeButton).toHaveAttribute('class', "login__btn btn-main-lg disabled");
    })

    test('check Homepage button', async ({page}) => {
        const I = new PageFactory(page);
        await I.baseElement.click(I.header.menuButton);
        await I.baseElement.click(I.menu.beautyButton);
        await I.baseElement.click(I.header.mainPageButton);
        await expect(page).toHaveURL('https://by.wildberries.ru/');
    })

    test('check the country change', async ({page}) => {
        const I = new PageFactory(page);
        await I.header.countryButton.hover();
        await I.baseElement.click(I.header.countryAm);
        await expect(I.header.countryButton).toHaveText('Am');
        await expect(page).toHaveURL('https://am.wildberries.ru/');
    })

    test('check support chat', async ({page}) => {
        const I = new PageFactory(page);
        await I.baseElement.click(I.header.supportChatButton);
        await I.supportChat.messageField.fill('Здравствуйте!');
        await expect(I.supportChat.sendMessageButton).toBeEnabled();
    })

    test('check support chat for empty messages', async ({page}) => {
        const I = new PageFactory(page);
        await I.baseElement.click(I.header.supportChatButton);
        await expect(I.supportChat.sendMessageButton).toBeDisabled();
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
        await expect(I.listOfGoodsPage.goodsName.nth(0)).toContainText(/платье/i);
    })

    test('check photo search', async ({page}) => {
        const I = new PageFactory(page);
        await I.baseElement.click(I.search.photoSearchButton);
        await expect(I.search.uploadPhotoButton).toBeEnabled();
    })

    test('check adding goods to favorites without login', async ({page}) => {
        const I = new PageFactory(page);
        await I.baseElement.click(I.mainPage.recommendedGoods.nth(0));
        await I.baseElement.click(I.productPage.heartButton);
        await expect(I.loginPage.pageTitle).toHaveText('Войти или создать профиль');
    })

    test('check goods filter', async ({page}) => {
        const I = new PageFactory(page);
        await I.baseElement.click(I.header.menuButton);
        await I.baseElement.click(I.menu.accessoriesButton);
        await I.baseElement.click(I.accessoriesPage.goodsCategory.nth(0));
        await I.baseElement.click(I.hairAccessoriesPage.combCategory);
        await expect(I.listOfGoodsPage.goodsName.nth(0)).toHaveText('Гребень');
    })

    test('check to selected brand', async ({page}) => {
        const I = new PageFactory(page);
        await I.baseElement.click(I.header.menuButton);
        await I.menu.brandButton.hover();
        await I.baseElement.click(I.menu.asicsBrandButton);
        await expect(I.listOfGoodsPage.sectionName.nth(2)).toHaveText('ASICS');
    })

    test('check adding goods to basket', async ({page}) => {
        const I = new PageFactory(page);
        await I.search.searchProduct('платье');
        await I.baseElement.click(I.listOfGoodsPage.goodsName.nth(0));
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

    test('check order error without login', async ({page}) => {
        const I = new PageFactory(page);
        await I.baseElement.click(I.mainPage.recommendedGoods.nth(0));
        await I.baseElement.click(I.productPage.addToCartButton);
        await page.waitForTimeout(1000);
        await I.baseElement.click(I.header.basketButton);
        await I.baseElement.click(I.basketPage.orderButton);
        await expect(I.basketPage.nameField).toHaveAttribute('class', 'val-msg input-validation-error');
    })

    test('check vk.com link', async ({page, context}) => {
        const I = new PageFactory(page);
        const [vkPage] = await Promise.all([
            context.waitForEvent('page'),
            page.click(I.footer.vkLink)
          ])
        await expect(vkPage).toHaveURL('https://vk.com/public42631504');
    })

    test('check transition to seller page', async ({page, context}) => {
        const I = new PageFactory(page);
        const [sellerPage] = await Promise.all([
            context.waitForEvent('page'),
            page.click(I.footer.sellerPageLink)
          ])
        await expect(sellerPage).toHaveURL(/.*seller.wildberries.ru.*/);
    })

    test('check login on seller page', async ({page, context}) => {
        const I = new PageFactory(page);
        const [sellerPage] = await Promise.all([
            context.waitForEvent('page'),
            page.click(I.footer.sellerPageLink)
          ])
        const sellerLoginPage = new SellerLoginPage(sellerPage);
        await sellerLoginPage.phoneField.fill('9999999999');
        await expect(sellerLoginPage.requestCodeButton).toBeEnabled();
    })

    test('check error login on seller page', async ({page, context}) => {
        const I = new PageFactory(page);
        const [sellerPage] = await Promise.all([
            context.waitForEvent('page'),
            page.click(I.footer.sellerPageLink)
          ])
        const sellerLoginPage = new SellerLoginPage(sellerPage);
        await sellerLoginPage.phoneField.fill('999');
        await sellerLoginPage.requestCodeButton.click();
        await expect(sellerLoginPage.messageField).toHaveAttribute('data-find', 'phone-error');
    })
})