'use strict';
//console.log(window.location());
//console.log('\'Allo \'Allo! Popup');
angular.module('myApp', ['datePicker'])
    .directive('welcome', function() {
        return {
            restrict: 'CA',
            templateUrl: 'views/welcome.html'
        }
    }).directive('drawset', function() {
        return {
            restrict: 'CA',
            scope: true,
            templateUrl: 'views/drawset.html'
        }
    }).directive('drawshow', function() {
        return {
            restrict: 'CA',
            scope: true,
            templateUrl: 'views/drawshow.html'
        }
    }).controller('myController', ['$scope', function($scope) {
        $scope.st = 0;
        $scope.isDrawbody = false;
        $scope.now = new Date();
        $scope.toDrawSet = function() {
            $scope.st = 1;
            $scope.isDrawbody = true;
        };
        $scope.returnWelcome = function() {
            $scope.st = 0;
            $scope.isDrawbody = false;
        };
        $scope.toDrawShow = function(time) {
            console.log(time);
            $scope.st = 2;
            $scope.isDrawbody = true;
            $scope.time = time;
            $scope.monthSts = Array.apply(null, Array(900)).map(function(item, i) {
                item = (i > 300) ? 0 : 1;
                return item;
            })
        }
    }])
