
(function(exports){

  var Grid = function(nodes, layers) {
    this.xNodes = nodes;
    this.layers = layers
    this.blockSize = canvasSize.width / this.xNodes;
    this.generate();
  }

  Grid.prototype.generate = function(){
    y = canvasSize.height - (this.blockSize/2)

    for (var i = 0; i < this.layers; i++) {
      this.line(y)
      y -= this.blockSize
    }
    // var boxA = Bodies.rectangle(400, 0, this.blockSize, this.blockSize);
    // World.add(engine.world, [boxA]);
  }

  Grid.prototype.line = function() {
    var halfBlockSize = this.blockSize / 2
    var startX = halfBlockSize;
    for (var i = 0; i < this.xNodes; i++) {
      block = Bodies.rectangle(startX, y, this.blockSize, this.blockSize, { isStatic: true, friction: 0, restitution: 0 });
      block.friction = 0;
      block.restitution = 0;
      World.add(engine.world, [block]);
      this.nodes += block;
      startX += this.blockSize
    }


  }

  exports.Grid = Grid

})(this);
