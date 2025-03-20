// Write your solution in this file!
var customerName = "bob";
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
  }
  function setBestCustomer() {
    bestCustomer = "not bob"; // Declared without `var`, `let`, or `const`, making it global
  }
  function overwriteBestCustomer() {
    bestCustomer = "maybe bob"; // Changes the global variable
  }
  const leastFavoriteCustomer = "Karen";
  function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "not Karen"; // This will throw an error
  }
  