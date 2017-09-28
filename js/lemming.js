(function (exports){
// var Matter = require('../js/lib/matter.js')
// var Bodies = Matter.Bodies;

var Lemming = function(spawn){
  this.shape = Bodies.rectangle(spawn.x, spawn.y, 20, 20);
  this.state = "intheair";
  // this.shape = Bodies.circle(400, 0, 40);
  this.shape.restitution = 0;
  this.shape.friction = 0;
  World.add(engine.world, [this.shape]);
};
// module.exports = Lemming;
exports.Lemming = Lemming;
})(this)
