angular.module('productApp')
.directive('nwBuy', function() {
  return {
    replace: true,
    restrict: "E",
    scope: {
        product: "=" ,
    },
    controller: function($scope) {
        $scope.current = 0;
        $scope.setCurrent = function(imageNumber){
            $scope.current = imageNumber || 0;
        };
    },
    templateUrl: "static/partials/directive/nw-gallery.html",

  };
});

