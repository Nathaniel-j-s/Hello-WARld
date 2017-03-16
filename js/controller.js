angular.module('myApp').controller('mainCtrl', function($scope, mainSrvc) {

  $scope.convertSentence = function(kanjiSentence) {
    mainSrvc.convertSentence(kanjiSentence).then(function(response) {
      $scope.hira = response.data.converted.split(' ').join('');

      $scope.breakUp = function(hira) {
        mainSrvc.breakUp(hira).then(function(response) {
          $scope.almost = response.data.word_list;
          $scope.final = $scope.almost[0];
        });
      };
      $scope.breakUp($scope.hira);
    });
  };


console.log($scope.final);

});
