angular.module('productApp')
.directive('nwReviews', function() {
  return {
    replace: true,
    restrict: "E",
    scope: {
        product: "=" ,
    },
    controller: function($scope, Review) {
       $scope.add_review = null;
       $scope.addReview = function() {
           var id = $scope.product.id;
           var new_review = new Review(
               {   "product_id": id,
                   "review": $scope.add_review}
           );
           new_review.$save(function(){
              $scope.product.reviews.push(new_review); //.unshift
              $scope.add_review = null;

            });
       };

    },
    templateUrl: "static/partials/directive/nw-reviews.html",

  };
});
