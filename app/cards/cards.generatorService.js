(function () {
  'use strict';

  angular.module('app.factories')
    .service('CardGeneratorService', CardGeneratorService);


  CardGeneratorService.$inject = ['_', 'AdditionFactsGeneratorService'];

  function CardGeneratorService(_, AdditionFactsGeneratorService) {
    function randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function generateCards(min, max, op, level) {
      var _this = this;

      var levelFacts = AdditionFactsGeneratorService.generateFactsForLevel(level);

      var cards = _.map(levelFacts.facts, function (fact) {
        return new Card(fact[0], fact[1], levelFacts.op);
      });
      return _.shuffle(cards);

      //      return _.times(numCards, function () {
      //        var a = randomIntFromInterval(1, 10);
      //        var b = randomIntFromInterval(1, 10);
      //        return new Card(a, b, op);
      //      });
    }


    return {
      generateCards: generateCards
    };


  }


  var Card = (function () {

    function Card(a, b, op) {
      this.a = a;
      this.b = b;
      this.op = op;


      this.operators = {
        '+': function (a, b) {
          return a + b;
        },
        '-': function (a, b) {
          return a - b;
        }
      };
    }

    Card.prototype.validate = function (input) {
      return +(input) === this.calculate();
    };

    Card.prototype.calculate = function () {
      return this.operators[this.op](this.a, this.b);
    };

    return Card;

  })();

})();