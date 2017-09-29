
(function(exports){

  var Game = function(engine){
    layerNodes = 40;
    layers = 20;

    this.engine = engine
    this.grid = new Grid(engine, layerNodes, layers);
  }

  Game.prototype.generateLemmings = function (count, delay) {
    currentGrid = this.grid
    thisEngine = this.engine
    for (var i = 0; i < count; i++) {
      setTimeout(function(){
        new Lemming(thisEngine, currentGrid.spawn);
      }, i * (delay * 1000));
    };
  }

  Game.prototype.generateLevel = function(levelNumber) {
    levels[levelNumber](this.grid);
  }

  exports.Game = Game

})(this);
