(function () {
  'use strict';

  angular
    .module('app.controllers')
    .controller('CardsController', CardsController);

  CardsController.$inject = ['$scope', '$timeout', 'CardGeneratorService'];

  function CardsController($scope, $timeout, CardGeneratorService) {
    /*jshint validthis: true*/
    var vm = this;
    vm.letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    
    vm.currentLevel = 0;
    
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
          this.reset();
        }

        vm.card = vm.cards[vm._index];
        vm.success = false;
      }, 1000);
    }

    function fail() {
      vm.fail = true;
      vm.timeout = $timeout(function () {
        vm.fail = false;
        vm.answer = null;
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

  CardsController.prototype.reset = function(){
    this.cards = this.generateCards();
    this._index = 0;
    this.card = this.cards[this._index];
  };
  
  CardsController.prototype.canPrevLevel = function(){
    return this.currentLevel > 0;
  };
  CardsController.prototype.prevLevel = function() {
    if(this.canPrevLevel()) {
      this.currentLevel--;
      this.reset();
    }
  };
  
  CardsController.prototype.canNextLevel =function(){
    return this.currentLevel < this.letters.length - 1;
  };
  CardsController.prototype.nextLevel = function() {
    
    if(this.canNextLevel()){
      this.currentLevel++;
      
      this.reset();
    }
    
  };
  
  CardsController.prototype.getCurrentLevel = function(){
    return this.letters[this.currentLevel];
  };
  CardsController.prototype.generateCards = function () {
    return this._cardService.generateCards(1, 10, '+', this.getCurrentLevel());
  };

})();