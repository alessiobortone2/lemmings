(function(exports){
  var Physics = function() {
    this.exitArray = [];

    this.engine = Engine.create();
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

  Physics.prototype.setCollisionLogic = function(grid) {

    thisEngine = this.engine;
    thisExit = this.exitArray;
    Events.on(thisEngine, 'collisionStart', function(event){

      for (var i = 0; i < event.pairs.length; i++) {
        var lemming = null;
        if (event.pairs[i].bodyA.label === "Circle Body"){
          lemming = event.pairs[i].bodyA;
        } else if (event.pairs[i].bodyB.label === "Circle Body"){
          lemming = event.pairs[i].bodyB;
        }
        if (lemming != null){

          if (lemming.position.x >= grid.exit.x) {
            thisExit.push(1)
            World.remove(thisEngine.world, [lemming])
            document.getElementById("score").innerHTML = thisExit.length
            return
          }

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

  Physics.prototype.runEngineAndRender = function () {
    Engine.run(this.engine);
    Render.run(this.render);
  };

  exports.Physics = Physics;

})(this);
