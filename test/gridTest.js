var assert = chai.assert;

describe ('Grid', function () {

  describe ('#constructor', function () {

    beforeEach(function () {
      nodes = 5;
      layers = 8;
      grid = new Grid(engine, nodes, layers);
    });

    it ('assigns node count (.columns)', function () {
      assert.equal(grid.columns, nodes);
    });

    it ('assigns layer count (.layers)', function () {
      assert.equal(grid.rows, layers);
    });

    it ('assigns dynamic canvas size (width / columns)', function () {
      assert.equal(grid.blockSize, canvasSize.width / nodes);
    });

    it ('generates correct number of nodes (columns * layers)', function () {
      assert.equal(grid.nodeArray.length, nodes*layers);
    });

  });

  describe ('#entranceBlock', function (){

    beforeEach(function () {
      nodes = 5;
      layers = 8;
      grid = new Grid(engine, nodes, layers);
    });

    it ('places in correct location', function () {
      grid.entranceBlock(3, 3);
      assert.notEqual(grid.getNode(3, 3), null);
    });

    it ('non-collidable', function () {
      grid.entranceBlock(3, 3);
      var node = grid.getNode(3, 3)
      assert.equal(node.isSensor, true);
    });

    it ('sets grid.spawn', function () {
      grid.entranceBlock(3, 3);
      assert.notEqual(grid.spawn, null);
    });
  });

  describe ('#exitBlock', function (){

    beforeEach(function () {
      nodes = 5;
      layers = 8;
      grid = new Grid(engine, nodes, layers);
    });

    it ('places in correct location', function () {
      grid.exitBlock(3, 3);
      assert.notEqual(grid.getNode(3, 3), null);
    });

    it ('non-collidable', function () {
      grid.exitBlock(3, 3);
      var node = grid.getNode(3, 3)
      assert.equal(node.isSensor, true);
    });

    it ('sets grid.exit', function () {
      grid.exitBlock(3, 3);
      assert.notEqual(grid.exit, null);
    });
  });

  describe ('#generateBucket', function (){

    beforeEach(function () {
      added = 0;
      World.add = function(){ added++; }
      Bodies.rectangle = function(){return "block"}

      nodes = 5;
      layers = 8;
      grid = new Grid(engine, nodes, layers);
      grid.generateBucket()
    });

    it ('creates correct number of nodes', function () {
      assert.equal(added, (layers * 2) + (nodes - 2));
    });
  });

  describe ('#generateBlock', function (){

    beforeEach(function () {
      added = 0;
      World.add = function(){ added++; }
      Bodies.rectangle = function(){return "block"}

      nodes = 5;
      layers = 8;
      grid = new Grid(engine, nodes, layers);
      grid.generateBlock(2, 2, 2, 2)
    });

    it ('creates correct number of nodes', function () {
      assert.equal(added, 4);
    });
  });

  describe ('#getNode', function (){

    beforeEach(function () {
      nodes = 5;
      layers = 5;
      grid = new Grid(engine, nodes, layers);

      for (var i = 0; i < grid.nodeArray.length; i++) {
        grid.nodeArray[i] = i;
      }
    });

    it ('returns correct node', function () {
      assert.equal(grid.getNode(2, 3), 17);
    });
  });

  describe ('#setNode', function (){

    beforeEach(function () {
      nodes = 5;
      layers = 5;
      grid = new Grid(engine, nodes, layers);
    });

    it ('sets the correct node', function () {
      grid.setNode(2, 2, "node")
      assert.equal(grid.getNode(2, 2), "node");
    });
  });

  describe ('#destroyNode', function (){

    beforeEach(function () {
      nodes = 5;
      layers = 5;
      grid = new Grid(engine, nodes, layers);

      for (var i = 0; i < grid.nodeArray.length; i++) {
        grid.nodeArray[i] = i;
      }
    });

    it ('destroys correct node (providing they are not protected)', function () {
      grid.destroyNode(2, 2);
      assert.equal(grid.getNode(2, 2), null);
    });

    it ('does not destroy protected nodes', function () {
      grid.destroyNode(0, 0);
      assert.notEqual(grid.getNode(0, 0), null);
    });
  });
});
