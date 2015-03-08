(function () {
  'use strict';

  angular
    .module('app.controllers')
    .controller('CardsController', CardsController);

  CardsController.$inject = ['$scope', '$timeout', 'CardGeneratorService'];

  function CardsController($scope, $timeout, CardGeneratorService) {
    /*jshint validthis: true*/
    var vm = this;
    vm._cardService = CardGeneratorService;
    vm._timeout = $timeout;

    vm._index = 0;
    vm.cards = this.generateCards();

    vm.success = false;
    vm.fail = false;
    vm.card = vm.cards[vm._index];

    vm.timeout = null;

    function success() {
      vm.success = true;
      vm.timeout = $timeout(function () {
        vm.answer = null;
        vm._index += 1;
        if (vm._index >= vm.cards.length) {
          vm.cards = vm.generateCards();
          vm._index = 0;
        }

        vm.card = vm.cards[vm._index];
        vm.success = false;
      }, 1000);
    }

    function fail() {
      vm.fail = true;
      vm.timeout = $timeout(function () {
        vm.fail = false;
      }, 1000);
    }

    function validate(newValue, oldValue) {
      if (newValue) {

        var answer = vm.card.calculate().toString();
        if (newValue.length >= answer.length) {
          vm.success = false;
          vm.fail = false;
          if (vm.timeout) {
            $timeout.cancel(vm.timeout);
          }
          if (vm.card.validate(newValue)) {
            success();
          } else {
            fail();
          }
        }
      }
    }

    $scope.$watch(
      function () {
        return vm.answer;
      },
      validate);

  }

  CardsController.prototype.generateCards = function () {
    return this._cardService.generateCards(1, 10, '+', 1);
  };

})();