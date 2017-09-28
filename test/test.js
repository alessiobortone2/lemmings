var assert = chai.assert;
describe('Lemming', function() {
  describe('when initialized', function() {
    it('should have equal height and width', function() {
      lemming = new Lemming({x: 400, y: 0});
      assert.equal(lemming.shape.height, lemming.shape.width);
    });
    it('should start at position x = 400 y = 0', function() {
      lemming = new Lemming({x: 400, y: 0});
      assert.equal(lemming.shape.position.x, 400);
      assert.equal(lemming.shape.position.y, 0);
    });
  });
});
