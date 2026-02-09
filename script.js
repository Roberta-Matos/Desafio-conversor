const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value
  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  ); // Valor em real
  const currencyValueConverted = document.querySelector(".currency-value")
  // Outras moedas
  const dolarToday = 5.21;
  const euroToday = 6.17;
  const libraToday = 7.1;
  //Exibe o valor em real e o valor convertido para a moeda selecionada
  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);

  if (currencySelect.value == "dolar") {
    //Se o select selecionado for o dólar, faça a conversão para dólar
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }
  if (currencySelect.value == "euro") {
    //Se o select selecionado for o euro, faça a conversão para euro
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }
  if (currencySelect.value == "libra") {
    //Se o select selecionado for a libra, faça a conversão para libra
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / libraToday);

  }
}
function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImage = document.querySelector(".currency-image");

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar";
    currencyImage.src = "./assets/usa.png";
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro";
    currencyImage.src = "./assets/euro.png"
  }
  if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra";
    currencyImage.src = "./assets/Libra.png";
  }
  convertValues();
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
