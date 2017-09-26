
(function(exports){

  var Grid = function(nodes, layers) {
    this.xNodes = nodes;
    this.layers = layers
    this.blockSize = canvasSize.width / this.xNodes;
    this.nodes = []
    this.generate();
  }

  Grid.prototype.generate = function(){
    y = canvasSize.height - (this.blockSize/2)
    for (var i = 0; i < this.layers; i++) {
      this.line(y)
      y -= this.blockSize
    }
  }

  Grid.prototype.line = function() {
    var halfBlockSize = this.blockSize / 2
    var startX = halfBlockSize;
    for (var i = 0; i < this.xNodes; i++) {
      block = Bodies.rectangle(startX, y, this.blockSize, this.blockSize, { isStatic: true });
      World.add(engine.world, [block]);
      this.nodes.push(block)
      startX += this.blockSize
    }
  }

  Grid.prototype.getNode = function (x, y) {
    index = (this.xNodes*y) + x
    return this.nodes[index]
  }

  Grid.prototype.destroyNode = function (x, y) {
    World.remove(engine.world, [this.getNode(x,y)], true)
  }

  exports.Grid = Grid

})(this);
