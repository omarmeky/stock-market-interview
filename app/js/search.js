var app = angular.module('myApp', []);

function SearchCtrl($scope, $http) {
  $scope.url = 'http://cors-anywhere-eu.herokuapp.com/http://dev.markitondemand.com/Api/v2/Quote/json'; 
    
  // serch button click function (ng-click="search()")
  $scope.search = function() {
    $http.get($scope.url, {params:{symbol: $scope.keywords}}).
    success(function(data, status) {
      
        $scope.change = data.Change;
        $scope.data = data;
        $scope.Name = data.Name;
        $scope.result = data.Message; // Show result if no symbol match
        $scope.latestprice = data.LastPrice;
        
        
      //console.log($scope.data);
      //console.log($scope.change);
     // console.log($scope.latestprice);
    })
    .error(function(data, status) {
      $scope.data = data || "Request failed";
      $scope.result = status;     
    });
  };
}
