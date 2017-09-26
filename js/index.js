
var viewSize = function(){
  var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return {width: width, height: height}
}

var run = function(){
  // run the engine
  Engine.run(engine);

  // run the renderer
  Render.run(render);
}

var canvasSize = viewSize()
