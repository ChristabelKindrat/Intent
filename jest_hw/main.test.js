const sum = require('./main');
const Shop = require("./main");


test('getBalance',()=>{
    expect(Shop.getBalance()).toBeGreaterThan(2);
    expect(Shop.getBalance()).toBeLessThan(60);
});
