function addToTotal() {
  let price = document.querySelectorAll(".price");
  let totalHtml = document.querySelector(".total");

  for (let i = 0; i < price.length; i++) {
    let sum = 0;
    total = sum + price[i];
    totalHtml.innerHtml = "£" + total;
  }
}

let addBtn = document.querySelectorAll(".add");
for (let i = 0; i < addBtn.length; i++) {
  addBtn[i].addEventListener("click", addToTotal());
}

/* function Basket() {
  let sum = 0;
  for (let i = 0; i )
}; */

/* const basket = {
  apple: {
    name: "Apple",
    img: "",
    price: 0.5,
  },
  orange: {
    name: "Orange",
    img: "",
    price: 0.5,
  },
  banana: {
    name: "",
    img: "",
    price: 0.5,
  },
  strawberries: {
    name: "",
    img: "",
    price: 0.5,
  },
  raspberries: {
    name: "",
    img: "",
    price: 0.5,
  },
  blueberries: {
    name: "",
    img: "",
    price: 0.5,
  },
};

console.log(typeof basket);
 */
