'use strict';

(function(){
  angular
    .module('grumbles')
    .controller('GrumbleIndexController', [
      GrumbleIndexControllerFunction
    ]);
    function GrumbleIndexControllerFunction() {
      console.log("I'm the index controller!");
      this.grumbles = grumbles;
      this.newGrumble = {};
      this.create = function(){
        grumbles.unshift(this.newGrumble);
        this.newGrumble = {};
      }
      this.delete = function(id){
        grumbles.splice(id, 1);
      }
    }
})();
