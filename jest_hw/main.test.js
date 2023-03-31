const Shop = require("./main");

test('getBalance',()=>{
    expect(Shop.getBalance()).toBeGreaterThan(2);
    expect(Shop.getBalance()).toBeLessThan(60);
});

test('buyWater should decrease waterCount and increase balance', () => {
    const initialBalance = Shop.getBalance();
    const initialWaterCount = 10;

    // buy 2 bottles of water
    Shop.buyWater(2);

    expect(Shop.getBalance()).toBeGreaterThan(initialBalance);
    expect(8).toEqual(initialWaterCount - 2);
});

test('buyWater should return correct message when water is sold out', () => {
    // buy more than all water
    Shop.buyWater(11);

    expect(Shop.buyWater(11)).toBe("we don't have water anymore!");
});

test('buyCoffee should decrease coffeeCount and increase balance', () => {
    const initialBalance = Shop.getBalance();
    const initialCoffeeCount = 10;

    // buy 2 cups of coffee
    Shop.buyCoffee(2);

    expect(Shop.getBalance()).toBeGreaterThan(initialBalance);
    expect(8).toEqual(initialCoffeeCount - 2);
});

test('buyCoffee should return correct message when coffee is sold out', () => {
    // buy more than all coffee
    Shop.buyCoffee(12);

    expect(Shop.buyCoffee(12)).toBe("we don't have coffee anymore!");
});
