module.exports = class BasePage {
    
    navigate (path) {
        return browser.url(path)
    }
}
