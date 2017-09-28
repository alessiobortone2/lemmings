(function(exports){

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

  Grid.prototype.generateBucket = function () {
    this.generateColumn(0);
    this.generateColumn(this.xNodes - 1);
    this.generateLine(0)
  }

  Grid.prototype.generateBlock = function (x, y, sizeX, sizeY) {
    for (var j = 0; j < sizeY; j++) {
      for (var i = 0; i < sizeX; i++) {
        var place = grid2Pix(x + i, y + j, this.blockSize);
        var block = createBlock(place.x, place.y, this.blockSize);
        this.setNode(x + i, y + j, block)
      }
    }
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
      block.restitution = 0;
      block.friction = 0;
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
      this.setNode(x, y, null)
    }
  }

  function randomRange(max) {
    return Math.floor(Math.random() * max);
  }

  function createBlock(x, y, size, style = {}, sensor = false ) {
    block = Bodies.rectangle(x, y, size, size, { isStatic: true, render: style, isSensor: sensor });
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

  exports.Grid = Grid;

})(this);
