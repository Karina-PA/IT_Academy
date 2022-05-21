class SellerLoginPage {
    constructor(page) {
        this.phoneField = page.locator('//*[@class="SimpleInput--vVIag Login-phone__masked-input--nPE+0"]');
        this.requestCodeButton = page.locator('.Button--YsZv8.Button--main---tdBh.size-big--DqMCh');
        this.messageField = page.locator('//*[@class="Login-phone__input-error--G4jI5"]/span');
    }
}

module.exports = SellerLoginPage;