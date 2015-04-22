'use strict';
//console.log(window.location());
//console.log('\'Allo \'Allo! Popup');
angular.module('myApp',['angular-datepicker'])
.directive('welcome',function(){
    return {
        restrict:'CA',
        templateUrl:'views/welcome.html'
    }
}).directive('drawset',function(){
    return {
        restrict:'CA',
        templateUrl:'views/drawset.html'
    }
}).directive('drawshow',function(){
    return {
        restrict:'CA',
        templateUrl:'views/drawshow.html'
    }
}).controller('myController',['$scope',function($scope){
    $scope.st=0;
    $scope.toDrawSet=function(){
        $scope.st=1;
    }
    
}])
