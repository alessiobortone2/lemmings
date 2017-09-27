(function (exports){
// var Matter = require('../js/lib/matter.js')
// var Bodies = Matter.Bodies;

var Lemming = function(spawn){
  this.shape = Bodies.circle(spawn.x, spawn.y, 10);
  // this.shape = Bodies.circle(400, 0, 40);
  this.shape.restitution = 0;
  this.shape.friction = 0;
  console.log(this.shape);
  World.add(engine.world, [this.shape]);
};
// module.exports = Lemming;
exports.Lemming = Lemming;
})(this)
