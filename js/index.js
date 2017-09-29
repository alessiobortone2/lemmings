
var viewSize = function(){
  var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return {width: width, height: height}
}
var canvasSize = viewSize()
var physics = new Physics();
var game = new Game(physics.engine);
game.generateLevel(0);
game.generateLemmings(1000, 1);
physics.setCollisionLogic(game.grid);
physics.runEngineAndRender();


function setup() {
  createCanvas(640, 480);
}

var mouse = Mouse.create(physics.render.canvas);

var mouseConstraint = MouseConstraint.create(physics.engine, {mouse: mouse, constraint: {stiffness: 0.2}});
var mouseIsDown = false;


World.add(physics.engine.world, [mouseConstraint]);

Events.on(mouseConstraint, "startdrag", function(event) {
  var endPoint = {x: event.body.position.x, y: event.body.position.y-25}
  var node = game.grid.pix2Grid(endPoint.x, endPoint.y)
  console.log(node);
  if (node !== null) {
    game.grid.destroyNode(node.x, node.y);
  }
})
