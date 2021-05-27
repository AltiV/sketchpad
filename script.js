window.onload = () => {
  // Initial drawing settings
  let drawingLineWidth = 5;
  let drawingLineCap = "round";
  let drawingStrokeStyle = "black;";

  let drawingArea = document.getElementById("drawingArea");
  let ctx = drawingArea.getContext("2d");

  ctx.lineWidth = drawingLineWidth;
  ctx.lineCap = drawingLineCap;
  ctx.strokeStyle = drawingStrokeStyle;

  let pos = { x: 0, y: 0 };

  // Account for element offest to properly line up drawing
  setPosition = (e) => {
    pos.x = e.clientX - drawingArea.getBoundingClientRect().left;
    pos.y = e.clientY - drawingArea.getBoundingClientRect().top;
  };

  draw = (e) => {
    // If the left mouse button is not being held down, do not do anything
    if (e.buttons != 1) return;

    // Set position constantly while drawing
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
    setPosition(e);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
  };

  document.addEventListener("mousemove", draw);
  document.addEventListener("mousedown", setPosition);
  //   document.addEventListener("mouseenter", setPosition);
};
