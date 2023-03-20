const Shop = (function fn() {
    let balance = 0;
    let waterCount = 10;
    let coffeeCount = 10;
    let waterPrice = 2;
    let coffeePrice = 3;

    function getBalance() {
        return balance;
    }

    function sellWater(n) {
        if (n <= waterCount) {
            waterCount -= n;
            balance =  waterPrice + (balance * n);
            console.log('Thanks for visiting! Have a good day!');
        } else {
           console.log("we don't have water anymore!");
        }
    }

    function buyWater(n = 1) {
      return sellWater(n);
    }

    function sellCoffee(n) {
        if (n <= coffeeCount) {
            coffeeCount -= n;
            balance =  coffeePrice + (balance * n);
            return 'Thanks for visiting! Have a good day!';
        } else {
            return "we don't have coffee anymore!";
        }
    }

    function buyCoffee(n = 1) {
     return  sellCoffee(n);
    }

    return {
        getBalance: getBalance,
        buyWater: buyWater,
        byeCoffee: buyCoffee,
    }
})();

Shop.buyWater(1); //Thanks for visiting! Have a good day!
console.log(Shop.getBalance()); //2

Shop.buyWater(12); //we don't have water anymore!

Shop.buyWater(6); //Thanks for visiting! Have a good day!
Shop.byeCoffee(4); //Thanks for visiting! Have a good day!
console.log(Shop.getBalance()); //59

module.exports = Shop;

