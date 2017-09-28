(function(exports){

  function randomRange(max) {
    return Math.floor(Math.random() * max);
  }

  function createBlock(x, y, size, style = {}, sensor = false ) {

    block = Bodies.rectangle(x, y, size, size, { isStatic: true, render: style, isSensor: sensor });

    block.restitution = 0;
    block.friction = 0;
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
    this.spawn = null
    this.exit = null

    for (var i = 0; i < (this.layers * this.xNodes); i++) {
      this.nodes.push(null);
    }
  }

  Grid.prototype.entranceBlock = function(x, y) {
    var place = grid2Pix(x, y, this.blockSize)
    var block = createBlock(place.x, place.y, this.blockSize, { fillStyle: "red"}, true )
    this.setNode(x, y, block)
    this.spawn = place
  }

  Grid.prototype.exitBlock = function(x, y) {
    var place = grid2Pix(x, y, this.blockSize)
    var block = createBlock(place.x, place.y, this.blockSize, { fillStyle: "green"}, true)
    this.setNode(x, y, block)
    this.exit = place
  }

  Grid.prototype.generateBucket = function (arguments) {
    this.generateColumn(0);
    this.generateColumn(this.xNodes - 1);
    this.generateLine(0)
  }

  Grid.prototype.generateLevel1 = function (arguments) {
    this.generateColumn(0);
    this.generateColumn(this.xNodes - 1);
    this.generateLine(0);
    var place = grid2Pix(1, 5, this.blockSize);
    for (var i = 0; i < 15; i++) {
      var block = createBlock(place.x, place.y, this.blockSize);
      this.setNode(i, 5, block)
      place.x += this.blockSize
    };
    var place2 = grid2Pix(15, 6, this.blockSize);
    for (var i = 0; i < 5; i++) {
      if (this.getNode(15, 5 - i) === null) {
        var block = createBlock(place2.x, place2.y, this.blockSize);
        this.setNode(15, 5 - i, block)
      }
      place2.y -= this.blockSize;
    };
  }

  Grid.prototype.generateColumn = function (x) {
    var place = grid2Pix(x, 0, this.blockSize);
    for (var i = 0; i < this.layers; i++) {
      if (this.getNode(x, this.layers - i) === null) {
        var block = createBlock(place.x, place.y, this.blockSize);
        this.setNode(x, this.layers - i, block)
      }
      place.y -= this.blockSize
    }
  }

  Grid.prototype.generateLine = function (y) {
    var place = grid2Pix(0, y, this.blockSize);
    for (var i = 0; i < this.xNodes; i++) {
      var block = createBlock(place.x, place.y, this.blockSize);
      this.setNode(i, y, block)
      place.x += this.blockSize
    }
  }

  Grid.prototype.getNode = function (x, y) {
    var index = (this.xNodes*y) + x;
    return this.nodes[index];
  }

  Grid.prototype.setNode = function (x, y, value) {
    var index = (this.xNodes*y) + x;
    this.nodes[index] = value;
  }

  Grid.prototype.destroyNode = function (x, y) {
    if (x > 0 && x < this.xNodes-1 && y > 0 && y < this.layers) {
      World.remove(engine.world, [this.getNode(x,y)], true);
    }
  }

  // var randomGrid = function(xNodes, yNodes, cutOuts, minCutOutSize, maxCutOutSize){
  //   grid = new Grid(xNodes, yNodes);
  //   grid.generate();
  //   for (var i = 0; i < 5; i++) {
  //     x = randomRange(grid.xNodes);
  //     y = randomRange(grid.layers);
  //     xSize = randomRange(maxCutOutSize - minCutOutSize) + minCutOutSize;
  //     ySize = randomRange(maxCutOutSize - minCutOutSize) + minCutOutSize;
  //     grid.cutOut(x, y, xSize, ySize);
  //   }
  //   return grid;
  // }

  exports.Grid = Grid;

})(this);
