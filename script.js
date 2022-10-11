var total = 0; //initialize total

function addToTotal(event) {
  const mapPricesId = `price-${event.target.id.slice(-1)}`; // map all prices
  const prices = document.getElementById(mapPricesId); // get all mapped prices
  const totalInPage = document.getElementById("total");
  total += parseFloat(prices.innerHTML.slice(1)); //take off £ from html for conversion
  totalInPage.innerHTML = "Your total is:" + "£" + total.toFixed(2);
}
const addBtns = document.querySelectorAll(".btn-add");
for (let i = 0; i < addBtns.length; i++) {
  addBtns[i].addEventListener("click", addToTotal);
}

function removeFromTotal(event) { //inverse of addToTotal
  const mapPricesId = `price-${event.target.id.slice(-1)}`;
  const prices = document.getElementById(mapPricesId);
  const totalInPage = document.getElementById("total");
  total -= parseFloat(prices.innerHTML.slice(1));
  totalInPage.innerHTML = "Your total is:" + "£" + total.toFixed(2);
}
const removeBtns = document.querySelectorAll(".btn-remove");
for (let i = 0; i < removeBtns.length; i++) {
  removeBtns[i].addEventListener("click", removeFromTotal);
}

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
