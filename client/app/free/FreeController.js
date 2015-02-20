(function () {
  'use strict';
  //
  
  angular
  .module('app.free')
  .controller('FreeController', FreeController);

  FreeController.$inject = ['FreeFactory', 'MapFactory', '$scope', '$rootScope', '$stateParams', '$q', '$timeout', '$interval', '$http'];

  function FreeController(FreeFactory, MapFactory, $scope, $rootScope, $stateParams, $q, $timeout, $interval, $http){
    var vm = this;
    vm.free = [];
    vm.test = 'test'

    vm.select = function(obj) {
      var single = MapFactory.createMarker(obj,1);
      $rootScope.$broadcast('single', single);
    }

    vm.playSequence = function(time) {
      // goes through sequenceArray rows and invoke cycleColumns simultaneously
      // for each row...
      console.log(vm.seqArray);
      for (var i = 0; i < vm.seqArray.length; i++) {
        FreeFactory.cycleColumns(vm.seqArray[i], function(array, object, index) {
          FreeFactory.timeout(object, index, time, function() {
            console.log(object);
            if (object.hasOwnProperty('sound')) {
              FreeFactory.play();
            }
          })
        })

      }
    }   

    function init() {
      FreeFactory.createSeqArray(vm.seqArray, 3, 3);
    }

    init();
  }
})();
    

