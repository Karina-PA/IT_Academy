const BasePage = require('../basePage');

class SupportChat extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
        this.messageField = page.locator('.chat__textarea.j-chat-textarea');
        this.sendMessageButton = page.locator('.chat__btn-submit');
    }
}

module.exports = SupportChat;