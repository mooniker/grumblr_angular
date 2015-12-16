'use strict';

(function(){
  angular
    .module('grumbles')
    .controller('GrumbleShowController', [
      '$stateParams',
      GrumbleShowControllerFunction
    ]);
    function GrumbleShowControllerFunction($stateParams) {
      console.log("I'm a show controller! index:", $stateParams);
      this.grumble = grumbles[$stateParams.id];
      console.log(this.grumble);
    }
})();
