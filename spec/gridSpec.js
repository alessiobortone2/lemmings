

describe ('Grid', function () {

  describe ('#constructor', function () {

    beforeEach(function () {
      nodes = 5;
      layers = 8;
      grid = new Grid(nodes, layers);
    });

    it ('assigns node count (.xNodes)', function () {
      expect(grid.xNodes).toEqual(nodes);
    });

    it ('assigns layer count (.layers)', function () {
      expect(grid.layers).toEqual(layers);
    });

    it ('assigns dynamic canvas size (width / xNodes)', function () {
      expect(grid.blockSize).toEqual(canvasSize.width / nodes);
    });

    it ('generates correct number of nodes (xNodes * layers)', function () {
      expect(grid.nodes.length).toEqual(nodes*layers);
    });

  });

  // describe ('#generate', function (){
  //
  //   beforeEach(function () {
  //     nodes = 5;
  //     layers = 8;
  //     grid = new Grid(nodes, layers);
  //     grid.generate();
  //   });
  //
  //   it ('generates correct number of nodes (xNodes * layers)', function () {
  //     expect(grid.nodes.length).toEqual(nodes*layers);
  //   });
  // });
  //
  // describe ('#cutOut', function (){
  //
  //   beforeEach(function () {
  //     nodes = 24;
  //     layers = 12;
  //     grid = new Grid(nodes, layers);
  //     grid.generate();
  //   });
  //
  //   it ('calls destroy node for each node in cut out', function () {
  //     var destroyed = 0;
  //     grid.destroyNode = function() { destroyed++ }
  //     grid.cutOut(10, 6, 3, 3)
  //     expect(destroyed).toEqual(9);
  //   });
  // });
  //
  // describe ('#line', function (){
  //
  //   beforeEach(function () {
  //     added = 0;
  //     World.add = function(){ added++; }
  //     Bodies.rectangle = function(){return "block"}
  //     nodes = 10;
  //     layers = 10;
  //     grid = new Grid(nodes, layers);
  //     grid.line();
  //   });
  //
  //   it ('creates correct number of nodes', function () {
  //     expect(added).toEqual(10);
  //   });
  //
  //   it ('adds all blocks to array', function () {
  //     expected = true;
  //     for (var i = 0; i < grid.nodes.length; i++) {
  //       if (grid.nodes[i] !== "block") { expected = false; }
  //     }
  //     expect(expected).toEqual(true);
  //   });
  // });
  //
  // describe ('#getNode', function (){
  //
  //   beforeEach(function () {
  //     nodes = 5;
  //     layers = 5;
  //     grid = new Grid(nodes, layers);
  //     grid.generate();
  //
  //     for (var i = 0; i < grid.nodes.length; i++) {
  //       grid.nodes[i] = i;
  //     }
  //   });
  //
  //   it ('returns correct node', function () {
  //     expect(grid.getNode(2, 3)).toEqual(17);
  //   });
  // });
  //
  // describe ('#destroyNode', function (){
  //
  //   beforeEach(function () {
  //     nodes = 5;
  //     layers = 5;
  //     grid = new Grid(nodes, layers);
  //     grid.generate();
  //   });
  //
  //   xit ('destroys correct node (providing they are not protected)', function () {
  //
  //   });
  //
  //   xit ('does not destroy protected nodes', function () {
  //
  //   });
  // });
});

// describe ('#randomGrid', function (){
//
//   beforeEach(function () {
//
//   });
//
//   xit ('calls generate', function () {
//
//   });
//
//   xit ('calls cut out method correct number of times', function () {
//
//   });
//
//   xit ('returns a grid', function () {
//
//   });
// });
