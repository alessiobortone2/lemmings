(function (exports){

var Physics = function(){
  this.exitArray = []
  this.grid = null;

  this.engine = Engine.create();

  // create a renderer
  this.render = Render.create({
      element: document.body,
      engine: this.engine,
      options: {
        width: canvasSize.width,
        height: canvasSize.height,
        wireframes: false
    }
  });
}

Physics.prototype.setCollisionLogic = function(){

  Events.on(this.engine, 'collisionStart', function(event){
    // console.log(event);

    for (var i = 0; i < event.pairs.length; i++) {
      var lemming = null;
      if (event.pairs[i].bodyA.label === "Circle Body"){
        lemming = event.pairs[i].bodyA;
      } else if (event.pairs[i].bodyB.label === "Circle Body"){
        lemming = event.pairs[i].bodyB;
      }
      if (lemming != null){

        // if (lemming.position.x >= this.grid.exit.x) {
        //   this.exitArray.push(1)
        //   World.remove(this.engine.world, [lemming])
        //   document.getElementById("score").innerHTML = this.exitArray.length
        //   return
        // }

        if (lemming.velocity.x >= 0) {
          Matter.Body.setVelocity(lemming, { x: 3, y: -1 })
        }
        else if (lemming.velocity.x < 0) {
          Matter.Body.setVelocity(lemming, { x: -3, y: -1})
        };
      };
    };
  });
};

Physics.prototype.runEngineAndRender = function(){

  // run the engine
  Engine.run(this.engine);

  // run the renderer
  Render.run(this.render);
};

Physics.prototype.addGrid = function (grid) {
  this.grid = grid
};

Physics.prototype.start = function () {
  physics.setCollisionLogic();
  physics.runEngineAndRender();
};

exports.Physics = Physics;
})(this)
