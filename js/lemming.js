// (function (exports){
var Matter = require('../js/lib/matter.js')
var Bodies = Matter.Bodies;

var Lemming = function(){
  this.shape = Bodies.rectangle(400, 0, 80, 80);
  console.log(this.shape);
};
module.exports = Lemming;
// exports.Lemming = Lemming;
// })(this)
