(function() {

  angular
  .module('app.free')
  .factory('FreeFactory', FreeFactory);

  function FreeFactory($http, $q, $timeout){

    var services = {
      play: play,
      createSeqArray: createSeqArray,
      cycleColumns: cycleColumns,
      findUnit: findUnit,
      timeout: timeout
    }

    ion.sound({
      sounds: [
        {
          name: "test",
          volume: 0.5,
          preload: false
        }
      ],
      volume: 0.5,
      path: "sounds/",
      preload: true
    });

    function play () {
      console.log('playing test');
      ion.sound.play("test");
    }

    function getFree(type, cb) {
      console.log('getting data...');
      $http.get('/' + type).success(function(data, status, headers, config) {
        console.log('data received', type);
        cb(data)
      }).error(function (data, status, headers, config) {
        console.log('Error! ', status);
      })
    }    

  }
})();



