
(function(exports){

  COLUMNS = 40;
  ROWS = 20;

  LEMMINGS = 10;
  SPAWN_DELAY = 1;

  var Game = function(physics) {
    this.grid = new Grid(COLUMNS, ROWS, physics.engine);
    this.physics = physics;

    console.log("created grid:" + this.grid);

  }

  Game.prototype.generateLevel = function(level) {
    console.log("referencing grid from generateLevel: " + this.grid);
    // this.levels[level]()

    this.grid.generateBucket();
    this.grid.generateBlock(3, 7, 15, 1)
    this.grid.generateBlock(17, 7, 1, 10)
    this.grid.entranceBlock(2, 10);
    this.grid.exitBlock(37, 1);
  };

  Game.prototype.generateLemmings = function() {
    console.log("referencing grid.spawn from generateLemmings: " + this.grid.spawn);

    var grid = this.grid;
    var physics = this.physics;
    for (var i = 0; i < LEMMINGS; i++) {
      setTimeout(function(){
        new Lemming(grid.spawn, physics.engine);
      }, i * (SPAWN_DELAY * 1000));
    };
  };

  Game.prototype.levels = [
    function(){
      console.log("referencing grid from levels: " + this.grid);
      this.grid.generateBucket();
      this.grid.generateBlock(3, 7, 15, 1)
      this.grid.generateBlock(17, 7, 1, 10)
      this.grid.entranceBlock(2, 10);
      this.grid.exitBlock(37, 1);
    }
  ]

  exports.Game = Game;

})(this);
