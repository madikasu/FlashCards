(function () {
  'use strict';

  angular
    .module('app.controllers')
    .controller('CardsController', CardsController);

  CardsController.$inject = ['$scope', 'CardGeneratorService'];

  function CardsController($scope, CardGeneratorService) {
    /*jshint validthis: true*/
    var vm = this;
    vm._cardService = CardGeneratorService;

    vm._index = 0;
    vm.cards = this.generateCards();

    vm.card = vm.cards[vm._index];


    $scope.$watch(
      function () {
        return vm.answer;
      },
      function (newValue, oldValue) {

        if (vm.card.validate(newValue)) {
          vm.answer = null;
          vm._index += 1;
          if (vm._index >= vm.cards.length) {
            vm._index = 0;
          }
          vm.cards = vm.generateCards();
          vm.card = vm.cards[vm._index];
        }

      });
  };

  CardsController.prototype.generateCards = function () {
    return this._cardService.generateCards(1, 10, '+', 3);
  }

})();