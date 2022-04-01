// 1.	Новогодний подарок. Определить иерархию конфет и прочих сладостей. 
// Создать несколько объектов-конфет. Собрать детский подарок с определением его веса. 
// Провести сортировку конфет в подарке на основе одного из параметров. 
// Найти конфету в подарке, соответствующую заданному диапазону параметров.


class NewYearGift {
    constructor () {
        this.sweets = [];
    }

    addProduct(product) {
        this.sweets.push(product);
    }

    getCommonWeight() {
        return this.sweets.map(product => product.weight)
            .reduce((a, b) => a + b);
    }

    getCommonPrice() {
        return this.sweets.map(product => product.price)
            .reduce((a, b) => a + b);
    }

    sortByWeight() {
        return this.sweets.sort((a, b) => a.weight - b.weight)
    }

    filterByPrice(minPrice, maxPrise) {
        return this.sweets.filter(product => {
            if (product.price >= minPrice && product.price <= maxPrise) {
                return product;
            }
        })
    }
}

class Product {
    constructor (name, weight, price) {
        this.name = name;
        this.weight = weight;
        this.price = price;
    }
    init() {
        return new Product (this.name, this.weight, this.price)
    }
}

class Drink extends Product {
    constructor (name, weight, price, taste) {
        super(name, weight, price);
        this.taste = taste;
    }
}

class Candy extends Product {
    constructor (name, weight, price, sugar) {
        super(name, weight, price);
        this.sugar = sugar;
    }
}

class Cookie extends Product {
    constructor (name, weight, price, filling) {
        super(name, weight, price);
        this.filling = filling;
    }
}

const firstNewYearGift = new NewYearGift();
firstNewYearGift.addProduct(new Drink('Juice', 200, 3, 'apple'));
firstNewYearGift.addProduct(new Candy('Chocolate candies', 500, 14, 'without sugar'));
firstNewYearGift.addProduct(new Candy('Jellybeans', 150, 8, 'without sugar'));
firstNewYearGift.addProduct(new Cookie('Cracker', 50, 2, 'cheese'));

const secondNewYearGift = new NewYearGift();
secondNewYearGift.addProduct(new Drink('Coke', 250, 5, 'vanilla'));
secondNewYearGift.addProduct(new Candy('Chocolate candies', 400, 10, 'with sugar'));
secondNewYearGift.addProduct(new Candy('Jellybeans', 150, 8, 'with sugar'));
secondNewYearGift.addProduct(new Candy('Lollipops', 50, 4, 'with sugar'));
secondNewYearGift.addProduct(new Cookie('Sandwich', 60, 4, 'huzelnut'));

console.log(`First New Year gift weight is ${firstNewYearGift.getCommonWeight()} grams and price is ${firstNewYearGift.getCommonPrice()} $`);
console.log(firstNewYearGift.sortByWeight());
console.log(firstNewYearGift.filterByPrice(3, 10));

console.log(`Second New Year gift weight is ${secondNewYearGift.getCommonWeight()} grams and price is ${secondNewYearGift.getCommonPrice()} $`);
console.log(secondNewYearGift.sortByWeight());
console.log(secondNewYearGift.filterByPrice(4, 5));