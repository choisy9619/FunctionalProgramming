const {
  sum,
  add_item,
  calc_tax,
  calc_total,
  check_total_price,
} = require("./index");

describe("test", () => {
  const shopping_cart = [];
  const item = { name: "포도", price: 1000 };

  it("basic - sum", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("add item to cart", () => {
    expect(add_item(shopping_cart, item.name, item.price)).toEqual([
      { name: "포도", price: 1000 },
    ]);
  });

  it("calculate total price", () => {
    expect(calc_total([1, 2, 3])).toBe(6);
  });

  it("calculate tax", () => {
    expect(calc_tax(100)).toBe(10);
  });

  it("check total price to show Icon", () => {
    expect(check_total_price(10, 20)).toBe(true);
  });

  it("check total price to hide Icon", () => {
    expect(check_total_price(1, 2)).toBe(false);
  });
});
