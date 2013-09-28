var app = angular.module("myApp",[]);

app.controller('PeopleController', function($scope) {
  $scope.people = [
    { name: "Fred"   , body: "blah blah"   },
    { name: "George" , body: "quite, Fred" }
  ];
});

app.controller('XDisplayController', function($scope) {
  $scope.text = "blah blah blah";
});
