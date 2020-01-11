// BUDGET CONTROLLER
var budgetController = (function() {

})();

// UI CONTROLLER
var UIController = (function() {

})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
  var ctrlAddItem = function() {

  };
  
  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function(event) {
    // event.which for older browsers
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(budgetController, UIController);