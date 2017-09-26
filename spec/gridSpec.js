

describe ('Grid', function () {

  describe ('constructor', function () {

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

    it ('generates correct number of nodes (xNodes * layers)', function () {
      expect(grid.nodes.length).toEqual(nodes*layers);
    });
  });
});
