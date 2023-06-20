const rates = {
  USD: 1,  // 1 USD = 1 USD (base currency)
  EUR: 0.91,  // 1 USD = 0.91 EUR
  BDT: 108.05, // 1 USD = 108.05 BDT
};

const dropdown = document.getElementById('currency-dropdown');
const prices = document.getElementsByClassName('price');

// Default currency
const defaultCurrency = 'USD';

// Function to update prices
function updatePrices() {
  const selectedCurrency = dropdown.value;
  for (let i = 0; i < prices.length; i++) {
    const originalPrice = parseFloat(prices[i].dataset.price);
    let convertedPrice;

    if (selectedCurrency === 'BDT') {
      convertedPrice = originalPrice * rates['BDT'];
    } else {
      convertedPrice = originalPrice * rates[selectedCurrency];
    }

    prices[i].innerText = convertedPrice.toFixed(2);
  }
}

dropdown.addEventListener('change', updatePrices);
dropdown.value = defaultCurrency;
updatePrices();

document.addEventListener('DOMContentLoaded', function () {
  // Get the currency selection element from your HTML
  const currencySelect = document.getElementById('currency-dropdown');

  // Add an event listener to the currency selection element
  currencySelect.addEventListener('change', function () {
    // Get the selected currency value
    const selectedCurrency = currencySelect.value;

    // Store the selected currency preference in local storage
    localStorage.setItem('currencyPreference', selectedCurrency);

    // Update prices based on the selected currency
    updatePrices();
  });

  // Retrieve the saved currency preference from local storage and apply it to the website
  const savedCurrencyPreference = localStorage.getItem('currencyPreference');
  if (savedCurrencyPreference) {
    // Apply the saved currency preference to the dropdown
    currencySelect.value = savedCurrencyPreference;

    // Update prices based on the saved currency preference
    updatePrices();
  }
});

//Dark Theme scripts
    var sun_moon = document.getElementById("sun_moon");
    sun_moon.onclick = function () {
      document.body.classList.toggle("dark-theme");
      if(
        document.body.classList.contains("dark-theme")) {
          sun_moon.src = "img/sun.png";
      } else {
          sun_moon.src = "img/moon.png";
        }
    }


