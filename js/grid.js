(function(exports){

  function randomRange(max) {
    return Math.floor(Math.random() * max);
  }

  function createBlock(x, y, size) {
    block = Bodies.rectangle(x, y, size, size, { isStatic: true });
    World.add(engine.world, [block]);
    return block;
  }

  function grid2Pix(xGrid, yGrid, blockSize) {
    halfBlock = blockSize / 2
    return {
      x: halfBlock + (xGrid * blockSize),
      y: canvasSize.height - (halfBlock + (yGrid * blockSize))
    }
  }

  var Grid = function(nodes, layers) {
    this.xNodes = nodes;
    this.layers = layers
    this.blockSize = canvasSize.width / this.xNodes;
    this.nodes = [];

    for (var i = 0; i < (this.layers * this.xNodes); i++) {
      this.nodes.push(null);
    }
  }

  Grid.prototype.generateBucket = function (arguments) {
    this.generateColumn(0);
    this.generateColumn(this.xNodes - 1);
    this.generateLine(0)
  }

  Grid.prototype.generateColumn = function (x) {
    place = grid2Pix(x, 0, this.blockSize);
    for (var i = 0; i < this.layers; i++) {
      if (this.getNode(x, this.layers - i) === null) {
        block = createBlock(place.x, place.y, this.blockSize);
        this.setNode(x, this.layers - i, block)
      }
      place.y -= this.blockSize
    }
  }

  Grid.prototype.generateLine = function (y) {
    place = grid2Pix(0, y, this.blockSize);
    for (var i = 0; i < this.xNodes; i++) {
      block = createBlock(place.x, place.y, this.blockSize);
      this.setNode(i, y, block)
      place.x += this.blockSize
    }
  }

  Grid.prototype.getNode = function (x, y) {
    index = (this.xNodes*y) + x;
    return this.nodes[index];
  }

  Grid.prototype.setNode = function (x, y, value) {
    index = (this.xNodes*y) + x;
    this.nodes[index] = value;
  }

  Grid.prototype.destroyNode = function (x, y) {
    if (x > 0 && x < this.xNodes-1 && y > 0 && y < this.layers) {
      World.remove(engine.world, [this.getNode(x,y)], true);
    }
  }

  var randomGrid = function(xNodes, yNodes, cutOuts, minCutOutSize, maxCutOutSize){
    grid = new Grid(xNodes, yNodes);
    grid.generate();
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
