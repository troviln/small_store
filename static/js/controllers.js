var productControllers = angular.module('productApp.controllers', []);

productControllers.controller('ProductCtrl', function ProductCtrl($scope, Product) {
  $scope.products = [];

    Product.query(function (response) {
      $scope.products = response;

    });
     //$scope.products = Product.query();

   //range-price filter
   $scope.pr = [];
   $scope.$watch('products.length', function(length) {
      if(length) { // <= first time length is changed from undefined to 0
        //console.log('(watch) read more ' + $scope.products.length); // <= will log correct length
           angular.forEach($scope.products, function(product){
           $scope.pr.push(product.price);
         });
           //console.log('(watch) as ' + $scope.pr);
           //console.log('(watch) read more ' + $scope.products.length);
           $scope.max = Math.max.apply(Math, $scope.pr);
           $scope.min = Math.min.apply(Math, $scope.pr);
           //console.log('(watch) max ' + $scope.max);
           //console.log('(watch) min ' + $scope.min);
      }
    });
      $scope.lower = $scope.min;
      $scope.upper = $scope.max;

      $scope.byRange = function (fieldName, minValue, maxValue) {
        if (minValue === undefined) minValue = Number.MIN_VALUE;
        if (maxValue === undefined) maxValue = Number.MAX_VALUE;

        return function predicateFunc(item) {
          return minValue <= item[fieldName] && item[fieldName] <= maxValue;
        };
      };
});


productControllers.controller('UserCtrl', function UserCtrl($scope, Product, User, AuthUser) {
  $scope.products = {};
  id = AuthUser.id;
  User.get({id:id}, function(response) {
    $scope.user = response;
    $scope.products = response.products;
  });

});


productControllers.controller('DetailCtrl', function DetailCtrl($scope,$stateParams,Product)
{
  Product.get({id:$stateParams.pr_id}, function(response) {
    $scope.product = response;
  });

});

