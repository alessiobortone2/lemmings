(function (exports){
// var Matter = require('../js/lib/matter.js')
// var Bodies = Matter.Bodies;


var Lemming = function(spawn, engine){
  var defaultCategory = 0x0001;
  var lemmingCategory = 0x0002;

  this.shape = Bodies.circle(spawn.x, spawn.y, 10, {collisionFilter: { category: lemmingCategory, mask: defaultCategory}} );
  // this.state.collisionFilter= -1;
  this.shape.restitution = 0;
  this.shape.friction = 0;
  World.add(engine.world, [this.shape]);
};
// module.exports = Lemming;
exports.Lemming = Lemming;
})(this)
