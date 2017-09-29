(function (exports){

LEMMING_SIZE = 10

var Lemming = function(engine, spawn){
  var defaultCategory = 0x0001
  var lemmingCategory = 0x0002
  this.shape = Bodies.circle(spawn.x, spawn.y, LEMMING_SIZE, {collisionFilter: { category: lemmingCategory, mask: defaultCategory}} );
  this.shape.restitution = 0;
  this.shape.friction = 0;
  World.add(engine.world, [this.shape]);
};

exports.Lemming = Lemming;
})(this)
