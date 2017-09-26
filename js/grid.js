(function(exports){

  function randomRange(max) {
    return Math.floor(Math.random() * max);
  }

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

  Grid.prototype.cutOut = function (x, y, sizeX, sizeY) {

    if(sizeX % 2 === 0) {sizeX += 1}
    radX = (sizeX - 1)/2;

    if(sizeY % 2 === 0) {sizeY += 1}
    radY = (sizeY - 1)/2;

    for (var j = (y - radY); j <= (y + radY); j++) {
      for (var i = (x - radX); i <= (x + radX); i++) {
        this.destroyNode(i, j);
      }
    }
  }

  Grid.prototype.line = function() {
    var halfBlockSize = this.blockSize / 2;
    var startX = halfBlockSize;
    for (var i = 0; i < this.xNodes; i++) {
      block = Bodies.rectangle(startX, y, this.blockSize, this.blockSize, { isStatic: true });
      World.add(engine.world, [block]);
      this.nodes.push(block);
      startX += this.blockSize;
    }
  }

  Grid.prototype.getNode = function (x, y) {
    index = (this.xNodes*y) + x;
    return this.nodes[index];
  }

  Grid.prototype.destroyNode = function (x, y) {
    if (x > 0 && x < this.xNodes-1 && y > 0 && y < this.layers) {
      World.remove(engine.world, [this.getNode(x,y)], true);
    }
  }

  var randomGrid = function(xNodes, yNodes, cutOuts, minCutOutSize, maxCutOutSize){
    grid = new Grid(xNodes, yNodes);
    for (var i = 0; i < 5; i++) {
      x = randomRange(grid.xNodes);
      y = randomRange(grid.layers);
      xSize = randomRange(maxCutOutSize - minCutOutSize) + minCutOutSize;
      ySize = randomRange(maxCutOutSize - minCutOutSize) + minCutOutSize;
      grid.cutOut(x, y, xSize, ySize);
    }
    return grid;
  }

  exports.Grid = Grid;
  exports.randomGrid = randomGrid;

})(this);
