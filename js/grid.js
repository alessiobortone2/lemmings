(function(exports){

  var Grid = function(columns, rows) {
    this.columns = columns;
    this.rows = rows
    this.blockSize = canvasSize.width / this.columns;
    this.nodeArray = [];
    this.spawn = null
    this.exit = null

    for (var i = 0; i < (this.rows * this.columns); i++) {
      this.nodeArray.push(null);
    }
  }

  Grid.prototype.entranceBlock = function(x, y) {
    var place = grid2Pix(x, y, this.blockSize)
    var block = generateGridNode(place.x, place.y, this.blockSize, { fillStyle: "red"}, true )
    this.setNode(x, y, block)
    this.spawn = place
  }

  Grid.prototype.exitBlock = function(x, y) {
    var place = grid2Pix(x, y, this.blockSize)
    var block = generateGridNode(place.x, place.y, this.blockSize, { fillStyle: "green"}, true)
    this.setNode(x, y, block)
    this.exit = place
  }

  Grid.prototype.generateBucket = function () {
    this.generateBlock(0, 0, this.columns, 1)
    this.generateBlock(0, 0, 1, this.rows)
    this.generateBlock(this.columns-1, 0, 1, this.rows)
  }

  Grid.prototype.generateBlock = function (x, y, sizeX, sizeY) {
    for (var j = 0; j < sizeY; j++) {
      for (var i = 0; i < sizeX; i++) {
        if (this.getNode(x+i, y+j) === null) {
          var place = grid2Pix(x + i, y + j, this.blockSize);
          var block = generateGridNode(place.x, place.y, this.blockSize);
          this.setNode(x + i, y + j, block)  
        }
      }
    }
  }

  Grid.prototype.getNode = function (x, y) {
    var index = (this.columns*y) + x;
    return this.nodeArray[index];
  }

  Grid.prototype.setNode = function (x, y, value) {
    var index = (this.columns*y) + x;
    this.nodeArray[index] = value;
  }

  Grid.prototype.destroyNode = function (x, y) {
    if (x > 0 && x < this.columns-1 && y > 0 && y < this.rows) {
      World.remove(engine.world, [this.getNode(x,y)], true);
      this.setNode(x, y, null)
    }
  }

  function generateGridNode(x, y, size, style = {}, sensor = false ) {
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
