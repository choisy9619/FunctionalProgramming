var shopping_cart = [];
var shopping_cart_total = 0;

function add_item_to_cart(name, price) {
  shopping_cart = add_item(shopping_cart, name, price);
  calc_cart_total();
}

function calc_cart_total() {
  shopping_cart_total = calc_total(shopping_cart);
  set_cart_total_dom();
  update_shipping_icons();
  update_tax_dom();
}

function update_shipping_icons() {
  var buy_buttons = get_buy_buttons_dom();
  for (var i = 0; i < buy_buttons.length; i++) {
    var button = buy_buttons[i];
    var item = button.item;

    check_total_price(item.pice, shopping_cart_total)
      ? button.show_free_shipping_icon()
      : button.hide_free_shipping_icon();
  }
}

function update_tax_dom() {
  set_tax_dom(calc_tax(shopping_cart_total));
}

// C - 계산 로직
const sum = (num1, num2) => {
  return num1 + num2;
};

const add_item = (arr, name, price) => {
  arr.push({ name: name, price: price });
  return arr;
};

const check_total_price = (price, total) => price + total >= 20;

const calc_tax = (price) => price * 0.1;

const calc_total = (arr) => {
  return arr.reduce(sum, 0);
};

module.exports = {
  sum,
  add_item,
  calc_tax,
  calc_total,
  calc_cart_total,
  add_item_to_cart,
  check_total_price,
};
