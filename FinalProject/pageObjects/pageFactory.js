const BasePage = require('./basePage');
const MainPage = require('./mainPage');
const LoginPage = require('./loginPage');
const ListOfGoodsPage = require('./listOfGoodsPage');
const ProductPage = require('./productPage');
const BasketPage = require('./basketPage');
const AccessoriesPage = require('./accessoriesPage');
const HairAccessoriesPage = require('./hairAccessoriesPage');
const BaseElement = require('../helpers/baseElements');
const Header = require('../pageObjects/pageComponents/header');
const Footer = require('../pageObjects/pageComponents/footer');
const Menu = require('../pageObjects/pageComponents/menu');
const Search = require('../pageObjects/pageComponents/search');
const SupportChat = require('../pageObjects/pageComponents/supportChat');

class PageFactory {
    constructor(page) {
        this.page = page;
        this.basePage = new BasePage(page);
        this.mainPage = new MainPage(page);
        this.loginPage = new LoginPage(page);
        this.listOfGoodsPage = new ListOfGoodsPage(page);
        this.productPage = new ProductPage(page);
        this.basketPage = new BasketPage(page);
        this.accessoriesPage = new AccessoriesPage(page);
        this.hairAccessoriesPage = new HairAccessoriesPage(page);
        this.baseElement = new BaseElement(page);
        this.header = new Header(page);
        this.footer = new Footer(page);
        this.menu = new Menu(page);
        this.search = new Search(page);
        this.supportChat = new SupportChat(page);
    }
}

module.exports = PageFactory;