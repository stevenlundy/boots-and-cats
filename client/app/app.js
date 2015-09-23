var app = angular.module('bootsAndCats', [])
  .config(function($locationProvider) {
      $locationProvider.html5Mode(true);
  });