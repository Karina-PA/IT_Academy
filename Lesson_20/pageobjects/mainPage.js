const BasePage = require('./basePage');

class MainPage extends BasePage {

    get getStartedButton () {
        return $('.buttons_pzbO>a:nth-child(1)')
    }
}

module.exports = new MainPage();