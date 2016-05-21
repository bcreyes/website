var app = angular.module("myApp",[]);

app.controller("textArea", function($scope){
  $scope.text = "This is a very long paragraph" +
  "to show the extent of a text area" +
  "and demostrate scope in angular controllers."
  $scope.textClick = function(){
    $scope.text = "I just change the text";
  }
});
