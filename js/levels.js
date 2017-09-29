
(function(exports){

  levels = [
    function (grid) {
      grid.generateBucket();
      grid.generateBlock(0, 17, 37, 1)
      grid.generateBlock(38, 2, 1, 20)
      grid.generateBlock(15, 13, 23, 1)
      grid.generateBlock(10, 10, 10, 1)
      grid.generateBlock(10, 10, 1, 3)
      grid.generateBlock(15, 7, 20, 1)
      grid.generateBlock(3, 4, 40, 1)
      grid.generateBlock(3, 4, 1, 4)
      grid.entranceBlock(2, 19);
      grid.exitBlock(38, 1);
    }
  ]

  exports.levels = levels;

})(this);
