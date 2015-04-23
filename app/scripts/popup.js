'use strict';
//console.log(window.location());
//console.log('\'Allo \'Allo! Popup');
angular.module('myApp',['datePicker'])
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
    $scope.isDrawbody=false;
    $scope.toDrawSet=function(){
        $scope.st=1;
        $scope.isDrawbody=true;
    };
    $scope.returnWelcome=function(){
        $scope.st=0;
        $scope.isDrawbody=false;
    }
    
}])
