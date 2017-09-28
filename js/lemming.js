(function (exports){
// var Matter = require('../js/lib/matter.js')
// var Bodies = Matter.Bodies;


var Lemming = function(spawn){
  this.shape = Bodies.rectangle(spawn.x, spawn.y, 30, 30)
  // this.state = "intheair";
  this.shape.restitution = 0;
  this.shape.friction = 0;
  World.add(engine.world, [this.shape]);

  Events.on(engine, 'collisionStart', function(event){
    if (lemming.shape.velocity.x >= 0) {
      Body.setVelocity(lemming.shape, { x: 4.5, y: -0.5 })
    };
    if (lemming.shape.velocity.x < 0) {
      Body.setVelocity(lemming.shape, { x: -4.5, y: -0.5})
    };
  });
  this.destroy();

};

Lemming.prototype.destroy = function () {
  var exitArray = []

  Events.on(engine, 'collisionStart', function(event){
    if (lemming.shape.position.x >= grid.exit.x) {
      exitArray.push(1)
      console.log(exitArray)
      World.remove(engine.world, [lemming.shape])
    }
  });

};

// module.exports = Lemming;
exports.Lemming = Lemming;
})(this)
