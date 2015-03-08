(function () {

  angular.module('lodash', [])
    .factory("_", LodashFactory)
    .run(function (_) {});



  LodashFactory.$inject = ['$window'];

  function LodashFactory($window) {
    var _ = $window._;
    delete($window._);

    return _;
  }

})();