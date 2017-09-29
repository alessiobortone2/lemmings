
var viewSize = function(){
  var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return {width: width, height: height}
}

var canvasSize = viewSize()

var physics = new Physics();
var game = new Game(physics);
game.generateLevel(0);
game.generateLemmings()
physics.addGrid(game.grid);
physics.start();
