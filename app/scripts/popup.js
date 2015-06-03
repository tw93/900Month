/* global angular */
/* global chrome */
'use strict';
angular.module('myApp', ['datePicker'])
    .directive('welcome', function () {
    return {
        restrict: 'CA',
        templateUrl: 'views/welcome.html'
    };
}).directive('drawset', function () {
    return {
        restrict: 'CA',
        scope: true,
        templateUrl: 'views/drawset.html'
    };
}).directive('drawshow', function () {
    return {
        restrict: 'CA',
        scope: true,
        templateUrl: 'views/drawshow.html'
    };
}).controller('myController', ['$scope', function ($scope) {
    $scope.now = new Date();
    $scope.st = 0;
    $scope.isDrawbody = false;
    chrome.storage.local.get('900MonthBirthday', function (result) {
        var saveTime = result['900MonthBirthday'];
        if (saveTime) {
            $scope.st = 2;
            $scope.isDrawbody = true;
            $scope.time = new Date(saveTime);
            var birYear = $scope.time.getFullYear(),
                birMonth = $scope.time.getMonth(),
                nowYear = $scope.now.getFullYear(),
                nowMonth = $scope.now.getMonth();
            $scope.haveMonth = 12 - birMonth + (nowYear - birYear) * 12 + nowMonth + 1;
            $scope.day = Math.floor(($scope.now - $scope.time) / 86400000);
            $scope.monthSts = Array.apply(null, Array(900)).map(function (item, i) {
                item = (i > $scope.haveMonth) ? 0 : 1;
                if (i < $scope.haveMonth) {
                    return 0;
                } else if (i === $scope.haveMonth) {
                    return 1;
                } else {
                    return 2;
                }
            });
        } 
        $scope.returnWelcome = function () {
            $scope.st = 0;
            $scope.isDrawbody = false;
            chrome.storage.local.remove('900MonthBirthday', function () {
                console.log("remove!");
            });
        };
        $scope.toDrawSet = function () {
            $scope.st = 1;
            $scope.must = false;
            $scope.isDrawbody = true;
        };
        $scope.toDrawShow = function (time) {
            $scope.must = true;
            if ((time == undefined) || (time >= $scope.now)) {
                return false;
            }
            $scope.st = 2;
            $scope.isDrawbody = true;
            $scope.time = time;
            var dataObj = {};
            dataObj['900MonthBirthday'] = $scope.time.toString();
            chrome.storage.local.set(dataObj, function () {
                console.log('birthday has saved!');
            });
            var birYear = $scope.time.getFullYear(),
                birMonth = $scope.time.getMonth(),
                nowYear = $scope.now.getFullYear(),
                nowMonth = $scope.now.getMonth();
            $scope.haveMonth = 12 - birMonth + (nowYear - birYear) * 12 + nowMonth + 1;
            $scope.day = Math.floor(($scope.now - $scope.time) / 86400000);
            $scope.monthSts = Array.apply(null, Array(900)).map(function (item, i) {
                item = (i > $scope.haveMonth) ? 0 : 1;
                if (i < $scope.haveMonth) {
                    return 0;
                } else if (i === $scope.haveMonth) {
                    return 1;
                } else {
                    return 2;
                }
            });
        };
    });
}]);

