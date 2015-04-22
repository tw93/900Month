'use strict';
//console.log(window.location());
//console.log('\'Allo \'Allo! Popup');
angular.module('myApp',[])
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
    $scope.come=1;
    $scope.set=0;
    $scope.show=0;
    $scope.toDrawSet=function(){
        $scope.come=0;
        $scope.set=1;
    }
    
}])
