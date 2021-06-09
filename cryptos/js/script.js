let crypto = [
  {
    name: "Bitcoin",
    price: 288.37
  },
  {
    name: "Ethereum",
    price: 1316
  },
  {
    name: "Litecoin",
    price: 700
  }
]


let orangeBar = document.querySelector('.orange');
let purpleBar = document.querySelector('.purple');
let greenBar = document.querySelector('.green');

orangeBar.style.width = crypto[0].price + 'px';
purpleBar.style.width = crypto[1].price + 'px';
greenBar.style.width = crypto[2].price + 'px';