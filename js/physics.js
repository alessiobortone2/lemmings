(function(exports){
  var Physics = function() {
  }

  Physics.prototype.setCollisionLogic = function() {

    Events.on(engine, 'collisionStart', function(event){
      // console.log(event);

      for (var i = 0; i < event.pairs.length; i++) {
        var lemming = null;
        if (event.pairs[i].bodyA.label === "Circle Body"){
          lemming = event.pairs[i].bodyA;
        } else if (event.pairs[i].bodyB.label === "Circle Body"){
          lemming = event.pairs[i].bodyB;
        }
        if (lemming != null){

          if (lemming.position.x >= grid.exit.x) {
            exitArray.push(1)
            console.log(exitArray)
            World.remove(engine.world, [lemming])
            document.getElementById("score").innerHTML = exitArray.length
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
    Engine.run(engine);
    Render.run(render);
  };



  exports.Physics = Physics;

})(this);
