var app = angular.module('myApp', [])
app.controller('myCtrl', function($scope, $http) {
  var vm = this;
  $http.get('topspots.json').success(function(data) {
    $scope.items = data;
    console.log($scope.items);
  });
});
