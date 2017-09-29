
var viewSize = function(){
  var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return {width: width, height: height}
}
var canvasSize = viewSize()
var physics = new Physics();
var game = new Game(physics.engine);
game.generateLevel(0);
game.generateLemmings(10, 1);
physics.setCollisionLogic(game.grid);
physics.runEngineAndRender();


Events.on(mouseConstraint, "startdrag", function(event) {
  console.log(mouse.position.x);
  console.log(event.body.position.x);

  bodies = Composite.allBodies(engine.world)
  var endPoint = {x: event.body.position.x, y: event.body.position.y-20}
  var diggings = Query.point(bodies, endPoint);
  console.log(diggings);
  if(diggings.length > 0) {
    World.remove(engine.world, [diggings[0]], true)
  }
})
