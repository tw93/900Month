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
        scope:true,
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
    };
    $scope.toDrawShow=function(){
        $scope.st=2;
        $scope.isDrawbody=true;
        $scope.isDrawbody=true;
        $scope.monthSts=Array.apply(null,Array(900)).map(function(item,i){
            return 0;
        })
    }
    
}])
