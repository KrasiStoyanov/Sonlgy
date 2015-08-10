'use strict';

var app = angular.module('myApp', ['ngRoute', 'ngResource', 'ngCookies']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'views/partials/home.html',
                controller: 'HomeController'
            })
            .otherwise({ redirectTo: '/home' });
    }])
    .value('toastr', toastr);