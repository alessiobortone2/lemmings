var assert = chai.assert;

describe ('Grid', function () {

  describe ('#constructor', function () {

    beforeEach(function () {
      nodes = 5;
      layers = 8;
      grid = new Grid(nodes, layers);
    });

    it ('assigns node count (.xNodes)', function () {
      assert.equal(grid.xNodes, nodes);
    });

    it ('assigns layer count (.layers)', function () {
      assert.equal(grid.layers, layers);
    });

    it ('assigns dynamic canvas size (width / xNodes)', function () {
      assert.equal(grid.blockSize, canvasSize.width / nodes);
    });

    it ('generates correct number of nodes (xNodes * layers)', function () {
      assert.equal(grid.nodes.length, nodes*layers);
    });

  });

  describe ('#entranceBlock', function (){

    beforeEach(function () {

    });

    xit ('places in correct location', function () {
    });

    xit ('non-collidable', function () {
    });

    xit ('sets grid.spawn', function () {
    });
  });

  describe ('#exitBlock', function (){

    beforeEach(function () {

    });

    xit ('places in correct location', function () {
    });

    xit ('non-collidable', function () {
    });

    xit ('sets grid.exit', function () {
    });
  });

  describe ('#generateBucket', function (){

    beforeEach(function () {

    });

    xit ('creates correct number of nodes', function () {
    });

    xit ('adds all blocks to array', function () {
    });
  });

  describe ('#generateColumn', function (){

    beforeEach(function () {

    });

    xit ('creates correct number of nodes', function () {
    });

    xit ('adds all blocks to array', function () {
    });
  });

  describe ('#generateLine', function (){

    beforeEach(function () {
      added = 0;
      World.add = function(){ added++; }
      Bodies.rectangle = function(){return "block"}
      nodes = 10;
      layers = 10;
      grid = new Grid(nodes, layers);
      grid.generateLine(0);
    });

    it ('creates correct number of nodes', function () {
      assert.equal(added, 10);
    });

    it ('adds all blocks to array', function () {
      expected = true;
      for (var i = 0; i < nodes; i++) {
        if (grid.nodes[i] !== "block") { expected = false; }
      }
      assert.equal(expected, true);
    });
  });

  describe ('#getNode', function (){

    beforeEach(function () {
      nodes = 5;
      layers = 5;
      grid = new Grid(nodes, layers);

      for (var i = 0; i < grid.nodes.length; i++) {
        grid.nodes[i] = i;
      }
    });

    it ('returns correct node', function () {
      assert.equal(grid.getNode(2, 3), 17);
    });
  });

  describe ('#setNode', function (){

    beforeEach(function () {

    });

    xit ('', function () {
    });
  });

  describe ('#destroyNode', function (){

    beforeEach(function () {
      nodes = 5;
      layers = 5;
      grid = new Grid(nodes, layers);
      grid.generate();
    });

    xit ('destroys correct node (providing they are not protected)', function () {

    });

    xit ('does not destroy protected nodes', function () {

    });
  });
});
