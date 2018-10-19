function MotionGraphic(){
  var mG = document.getElementById("MGraphic");
  var canvas = document.createElement('canvas');
  canvas.id = "CCcanvas";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  mG.appendChild(canvas);
  ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(100,75,50,0*Math.PI,2*Math.PI);
  ctx.lineWidth = 10;
  ctx.stroke();
}
