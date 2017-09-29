(function (exports){


var Lemming = function(spawn){
  this.shape = Bodies.circle(spawn.x, spawn.y, 15, {collisionFilter: { category: lemmingCategory, mask: defaultCategory}} );
  this.state = "walking";
  this.shape.restitution = 0;
  this.shape.friction = 0;
  World.add(engine.world, [this.shape]);
};

exports.Lemming = Lemming;
})(this)
