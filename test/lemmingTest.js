var assert = chai.assert;
describe('Lemming', function() {
  describe('when initialized', function() {
    beforeEach(function () {
      lemming = new Lemming(engine, {x: 400, y: 0});
    });
    it('should have equal height and width', function() {
      assert.equal(lemming.shape.height, lemming.shape.width);
    });
    it('should start at position x = 400 y = 0', function() {
      assert.equal(lemming.shape.position.x, 400);
      assert.equal(lemming.shape.position.y, 0);
    });
  });
});
