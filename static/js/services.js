// Resources have the following methods by default:
// get(), query(), save(), remove(), delete()
"use strict";

angular.module('productApp.services', ['ngResource'])
  .factory('Product', function($resource) {
    return $resource('/api/products/:id/');
  })
  .factory('User', function($resource) {
    return $resource('/api/users/:id/');
  })
  .factory('Review', function($resource) {
    return $resource('/api/reviews/:id/');
  });

