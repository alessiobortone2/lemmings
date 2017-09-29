
(function(exports){

  levels = [
    function (grid) {
      grid.generateBucket();
      grid.generateBlock(3, 7, 15, 1)
      grid.generateBlock(17, 7, 1, 10)
      grid.entranceBlock(2, 10);
      grid.exitBlock(37, 1);
    }
  ]
  
  exports.levels = levels;

})(this);
