angular.module('productApp', [
  'ui.router',
  'ngResource',
  'productApp.services',
  'productApp.controllers',
  'ngMaterial',
  'mdRangeSlider',
])
  .config(function ($interpolateProvider, $httpProvider, $resourceProvider, $stateProvider, $urlRouterProvider) {
    // Force angular to use square brackets for template tag
    // The alternative is using {% verbatim %}
    $interpolateProvider.startSymbol('[[').endSymbol(']]');

    // CSRF Support
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

    // This only works in angular 3!
    // It makes dealing with Django slashes at the end of everything easier.
    $resourceProvider.defaults.stripTrailingSlashes = false;

    // Django expects jQuery like headers
    // $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

    // Routing
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('products', {
        url: '/',
        templateUrl: 'static/partials/product-list.html',
        controller: 'ProductCtrl'
      })
      .state('profile', {
        url: '/profile/',
        templateUrl: 'static/partials/profile.html',
        controller: 'UserCtrl'
      })
      .state('product', {
        url: '/product/:pr_id/',
        templateUrl: 'static/partials/product-detail.html',
        controller: 'DetailCtrl'
      })
  });
