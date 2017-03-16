angular.module('myApp').service('mainSrvc', function($http) {

  this.convertSentence = function(kanjiSentence) {
    return $http( {
      method: 'POST',
      url: 'https://labs.goo.ne.jp/api/hiragana',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: $.param({
        "app_id": 'ca81727daf11523cc1c1a3e235f3c1767c4a1c1b68aec6640347ebf13d59669c',
        "sentence": kanjiSentence,
        "output_type":'hiragana'
      })
    });
  };

  this.breakUp = function(hira) {
    return $http( {
      method: 'POST',
      url: 'https://labs.goo.ne.jp/api/morph',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: $.param({
        "app_id": 'ca81727daf11523cc1c1a3e235f3c1767c4a1c1b68aec6640347ebf13d59669c',
        "sentence": hira,
        "info_filter": "form"
      })
    });
  };

});
