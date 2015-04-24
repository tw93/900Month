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
        $scope.must = false;
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
            if(time==undefined){
                $scope.must=true;
                return false;
            }else{
                $scope.must=false;
            }
            $scope.st = 2;
            $scope.isDrawbody = true;
            $scope.time = time;
            var birYear = $scope.time.getFullYear(),
                birMonth = $scope.time.getMonth(),
                nowYear = $scope.now.getFullYear(),
                nowMonth = $scope.now.getMonth();
            $scope.haveMonth = 12 - birMonth + (nowYear - birYear) * 12 + nowMonth + 1;
            $scope.day = Math.floor(($scope.now - $scope.time) / 86400000);
            $scope.monthSts = Array.apply(null, Array(900)).map(function(item, i) {
                item = (i > $scope.haveMonth) ? 0 : 1;
                if (i < $scope.haveMonth) {
                    return 0;
                } else if (i === $scope.haveMonth) {
                    return 1;
                } else {
                    return 2;
                }
            })
        }
    }])
