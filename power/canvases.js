
$( document ).ready(function() {
  var body = $("body");

  var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');
  canvas.width = 300;
  canvas.height = 300;
  drawStuff();

  $("#download").click(function() {
    var outputCanvas = document.createElement("canvas");
    outputCanvas.width = canvas.width;
    outputCanvas.height = canvas.height + 60;

    var outputContext = outputCanvas.getContext("2d");
    drawBackground(outputContext);
    drawQuestionText(outputContext, $("#question").text());
    drawAttribution(outputContext, 'design.communicat.es/power');

    outputContext.drawImage(canvas, 0, 30);

    this.href = outputCanvas.toDataURL();
    this.download = "design.png";
  });

  function drawQuestionText(context, text) {
    context.font = "bold 12pt Helvetica";

    var textWidth = context.measureText(text).width;
    var textHeight = 12;

    context.fillStyle = "black";
    context.fillText(text, 5, 5 + textHeight);
  }

  function drawAttribution(context, text) {
    context.font = "bold 10pt Helvetica";

    var textWidth = context.measureText(text).width;
    var textHeight = 10;

    context.fillStyle = "black";
    context.fillText(text, 5, canvas.height + 50);
  }

  function drawBackground(context) {
    context.fillStyle = '#FFFFFF';
    context.fillRect(0, 0, canvas.width, canvas.height + 60);
  }

  function clearCanvas(_context, _canvas) {
    _context.clearRect(0, 0, _context.canvas.width, _context.canvas.height); // Clears the canvas
    context.beginPath();
  }



  function drawStuff() {

    $('#canvas').mousedown(function(e){
      var mouseX = e.pageX - this.offsetLeft;
      var mouseY = e.pageY - this.offsetTop;

      paint = true;
      addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
      redraw();
    });

    $('#canvas').mousemove(function(e){
      if(paint){
        addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
        redraw();
      }
    });

    $('#canvas').mouseup(function(e){
      paint = false;
    });

    $('#canvas').mouseleave(function(e){
      paint = false;
    });

    var clickX = new Array();
    var clickY = new Array();
    var clickDrag = new Array();
    var paint;

    function addClick(x, y, dragging)
    {
      clickX.push(x);
      clickY.push(y);
      clickDrag.push(dragging);
    }

    function redraw(){
      context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas

      context.strokeStyle = '#000000';
      context.lineJoin = "round";
      context.lineWidth = 5;
      context.globalAlpha = 0.5;

      for(var i=0; i < clickX.length; i++) {
        context.beginPath();
        if(clickDrag[i] && i){
          context.moveTo(clickX[i-1], clickY[i-1]);
         }else{
           context.moveTo(clickX[i]-1, clickY[i]);
         }
         context.lineTo(clickX[i], clickY[i]);
         context.closePath();
         context.stroke();
      }
    }

  }

  // you may notice at this stage that this javascript is not very dry
  // why yes u are correct
  var canvas_two = document.getElementById('canvas_two'),
    context_two = canvas_two.getContext('2d');
  canvas_two.width = 300;
  canvas_two.height = 300;
  drawStuff_two();

  $("#download_two").click(function() {
    var outputCanvas = document.createElement("canvas");
    outputCanvas.width = canvas_two.width;
    outputCanvas.height = canvas_two.height + 60;

    var outputContext = outputCanvas.getContext("2d");
    drawBackground(outputContext);
    drawQuestionText(outputContext, $("#question_two").text());
    drawAttribution(outputContext, 'design.communicat.es/power');

    outputContext.drawImage(canvas_two, 0, 30);

    this.href = outputCanvas.toDataURL();
    this.download = "design.png";
  });

  function drawStuff_two() {

    $('#canvas_two').mousedown(function(e){
      var mouseX = e.pageX - this.offsetLeft;
      var mouseY = e.pageY - this.offsetTop;

      paint = true;
      addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
      redraw_two();
    });

    $('#canvas_two').mousemove(function(e){
      if(paint){
        addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
        redraw_two();
      }
    });

    $('#canvas_two').mouseup(function(e){
      paint = false;
    });

    $('#canvas_two').mouseleave(function(e){
      paint = false;
    });

    var clickX = new Array();
    var clickY = new Array();
    var clickDrag = new Array();
    var paint;

    function addClick(x, y, dragging)
    {
      clickX.push(x);
      clickY.push(y);
      clickDrag.push(dragging);
    }

    function redraw_two(){
      context_two.clearRect(0, 0, context_two.canvas.width, context_two.canvas.height); // Clears the canvas

      context_two.strokeStyle = '#000000';
      context_two.lineJoin = "round";
      context_two.lineWidth = 5;
      context_two.globalAlpha = 0.5;

      for(var i=0; i < clickX.length; i++) {
        context_two.beginPath();
        if(clickDrag[i] && i){
          context_two.moveTo(clickX[i-1], clickY[i-1]);
         }else{
           context_two.moveTo(clickX[i]-1, clickY[i]);
         }
         context_two.lineTo(clickX[i], clickY[i]);
         context_two.closePath();
         context_two.stroke();
      }
    }

  }


  // it is only going to get worse
  var canvas_three = document.getElementById('canvas_three'),
    context_three = canvas_three.getContext('2d');
  canvas_three.width = 300;
  canvas_three.height = 300;
  drawStuff_three();

  $("#download_three").click(function() {
    var outputCanvas = document.createElement("canvas");
    outputCanvas.width = canvas_three.width;
    outputCanvas.height = canvas_three.height + 60;

    var outputContext = outputCanvas.getContext("2d");
    drawBackground(outputContext);
    drawQuestionText(outputContext, $("#question_three").text());
    drawAttribution(outputContext, 'design.communicat.es/power');

    outputContext.drawImage(canvas_three, 0, 30);

    this.href = outputCanvas.toDataURL();
    this.download = "design.png";
  });

  function drawStuff_three() {

    $('#canvas_three').mousedown(function(e){
      var mouseX = e.pageX - this.offsetLeft;
      var mouseY = e.pageY - this.offsetTop;

      paint = true;
      addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
      redraw_three();
    });

    $('#canvas_three').mousemove(function(e){
      if(paint){
        addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
        redraw_three();
      }
    });

    $('#canvas_three').mouseup(function(e){
      paint = false;
    });

    $('#canvas_three').mouseleave(function(e){
      paint = false;
    });

    var clickX = new Array();
    var clickY = new Array();
    var clickDrag = new Array();
    var paint;

    function addClick(x, y, dragging)
    {
      clickX.push(x);
      clickY.push(y);
      clickDrag.push(dragging);
    }

    function redraw_three(){
      context_three.clearRect(0, 0, context_three.canvas.width, context_three.canvas.height); // Clears the canvas

      context_three.strokeStyle = '#000000';
      context_three.lineJoin = "round";
      context_three.lineWidth = 5;
      context_three.globalAlpha = 0.5;

      for(var i=0; i < clickX.length; i++) {
        context_three.beginPath();
        if(clickDrag[i] && i){
          context_three.moveTo(clickX[i-1], clickY[i-1]);
         }else{
           context_three.moveTo(clickX[i]-1, clickY[i]);
         }
         context_three.lineTo(clickX[i], clickY[i]);
         context_three.closePath();
         context_three.stroke();
      }
    }

  }

  // if you are offended you are free to send a pull request
  var canvas_four = document.getElementById('canvas_four'),
    context_four = canvas_four.getContext('2d');
  canvas_four.width = 300;
  canvas_four.height = 300;
  drawStuff_four();

  $("#download_four").click(function() {
    var outputCanvas = document.createElement("canvas");
    outputCanvas.width = canvas_four.width;
    outputCanvas.height = canvas_four.height + 60;

    var outputContext = outputCanvas.getContext("2d");
    drawBackground(outputContext);
    drawQuestionText(outputContext, $("#question_four").text());
    drawAttribution(outputContext, 'design.communicat.es/power');

    outputContext.drawImage(canvas_four, 0, 30);

    this.href = outputCanvas.toDataURL();
    this.download = "design.png";
  });

  function drawStuff_four() {

    $('#canvas_four').mousedown(function(e){
      var mouseX = e.pageX - this.offsetLeft;
      var mouseY = e.pageY - this.offsetTop;

      paint = true;
      addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
      redraw_four();
    });

    $('#canvas_four').mousemove(function(e){
      if(paint){
        addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
        redraw_four();
      }
    });

    $('#canvas_four').mouseup(function(e){
      paint = false;
    });

    $('#canvas_four').mouseleave(function(e){
      paint = false;
    });

    var clickX = new Array();
    var clickY = new Array();
    var clickDrag = new Array();
    var paint;

    function addClick(x, y, dragging)
    {
      clickX.push(x);
      clickY.push(y);
      clickDrag.push(dragging);
    }

    function redraw_four(){
      context_four.clearRect(0, 0, context_four.canvas.width, context_four.canvas.height); // Clears the canvas

      context_four.strokeStyle = '#000000';
      context_four.lineJoin = "round";
      context_four.lineWidth = 5;
      context_four.globalAlpha = 0.5;

      for(var i=0; i < clickX.length; i++) {
        context_four.beginPath();
        if(clickDrag[i] && i){
          context_four.moveTo(clickX[i-1], clickY[i-1]);
         }else{
           context_four.moveTo(clickX[i]-1, clickY[i]);
         }
         context_four.lineTo(clickX[i], clickY[i]);
         context_four.closePath();
         context_four.stroke();
      }
    }

  }

  // it works and it is due tomorrow
  var canvas_five = document.getElementById('canvas_five'),
    context_five = canvas_five.getContext('2d');
  canvas_five.width = 300;
  canvas_five.height = 300;
  drawStuff_five();

  $("#download_five").click(function() {
    var outputCanvas = document.createElement("canvas");
    outputCanvas.width = canvas_five.width;
    outputCanvas.height = canvas_five.height + 60;

    var outputContext = outputCanvas.getContext("2d");
    drawBackground(outputContext);
    drawQuestionText(outputContext, $("#question_five").text());
    drawAttribution(outputContext, 'design.communicat.es/power');

    outputContext.drawImage(canvas_five, 0, 30);

    this.href = outputCanvas.toDataURL();
    this.download = "design.png";
  });

  function drawStuff_five() {

    $('#canvas_five').mousedown(function(e){
      var mouseX = e.pageX - this.offsetLeft;
      var mouseY = e.pageY - this.offsetTop;

      paint = true;
      addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
      redraw_five();
    });

    $('#canvas_five').mousemove(function(e){
      if(paint){
        addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
        redraw_five();
      }
    });

    $('#canvas_five').mouseup(function(e){
      paint = false;
    });

    $('#canvas_five').mouseleave(function(e){
      paint = false;
    });

    var clickX = new Array();
    var clickY = new Array();
    var clickDrag = new Array();
    var paint;

    function addClick(x, y, dragging)
    {
      clickX.push(x);
      clickY.push(y);
      clickDrag.push(dragging);
    }

    function redraw_five(){
      context_five.clearRect(0, 0, context_five.canvas.width, context_five.canvas.height); // Clears the canvas

      context_five.strokeStyle = '#000000';
      context_five.lineJoin = "round";
      context_five.lineWidth = 5;
      context_five.globalAlpha = 0.5;

      for(var i=0; i < clickX.length; i++) {
        context_five.beginPath();
        if(clickDrag[i] && i){
          context_five.moveTo(clickX[i-1], clickY[i-1]);
         }else{
           context_five.moveTo(clickX[i]-1, clickY[i]);
         }
         context_five.lineTo(clickX[i], clickY[i]);
         context_five.closePath();
         context_five.stroke();
      }
    }

  }

  // i am not that good at javascript
  var canvas_six = document.getElementById('canvas_six'),
    context_six = canvas_six.getContext('2d');
  canvas_six.width = 300;
  canvas_six.height = 300;
  drawStuff_six();

  $("#download_six").click(function() {
    var outputCanvas = document.createElement("canvas");
    outputCanvas.width = canvas_six.width;
    outputCanvas.height = canvas_six.height + 60;

    var outputContext = outputCanvas.getContext("2d");
    drawBackground(outputContext);
    drawQuestionText(outputContext, $("#question_six").text());
    drawAttribution(outputContext, 'design.communicat.es/power');

    outputContext.drawImage(canvas_six, 0, 30);

    this.href = outputCanvas.toDataURL();
    this.download = "design.png";
  });

  function drawStuff_six() {

    $('#canvas_six').mousedown(function(e){
      var mouseX = e.pageX - this.offsetLeft;
      var mouseY = e.pageY - this.offsetTop;

      paint = true;
      addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
      redraw_six();
    });

    $('#canvas_six').mousemove(function(e){
      if(paint){
        addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
        redraw_six();
      }
    });

    $('#canvas_six').mouseup(function(e){
      paint = false;
    });

    $('#canvas_six').mouseleave(function(e){
      paint = false;
    });

    var clickX = new Array();
    var clickY = new Array();
    var clickDrag = new Array();
    var paint;

    function addClick(x, y, dragging)
    {
      clickX.push(x);
      clickY.push(y);
      clickDrag.push(dragging);
    }

    function redraw_six(){
      context_six.clearRect(0, 0, context_six.canvas.width, context_six.canvas.height); // Clears the canvas

      context_six.strokeStyle = '#FF0000';
      context_six.lineJoin = "round";
      context_six.lineWidth = 5;
      context_six.globalAlpha = 0.5;

      for(var i=0; i < clickX.length; i++) {
        context_six.beginPath();
        if(clickDrag[i] && i){
          context_six.moveTo(clickX[i-1], clickY[i-1]);
         }else{
           context_six.moveTo(clickX[i]-1, clickY[i]);
         }
         context_six.lineTo(clickX[i], clickY[i]);
         context_six.closePath();
         context_six.stroke();
      }
    }

  }

  // i have promised myself to optimise for browsers and stuff later
  var canvas_seven = document.getElementById('canvas_seven'),
    context_seven = canvas_seven.getContext('2d');
  canvas_seven.width = 300;
  canvas_seven.height = 300;
  drawStuff_seven();

  $("#download_seven").click(function() {
    var outputCanvas = document.createElement("canvas");
    outputCanvas.width = canvas_seven.width;
    outputCanvas.height = canvas_seven.height + 60;

    var outputContext = outputCanvas.getContext("2d");
    drawBackground(outputContext);
    drawQuestionText(outputContext, $("#question_seven").text());
    drawAttribution(outputContext, 'design.communicat.es/power');

    outputContext.drawImage(canvas_seven, 0, 30);

    this.href = outputCanvas.toDataURL();
    this.download = "design.png";
  });

  function drawStuff_seven() {

    $('#canvas_seven').mousedown(function(e){
      var mouseX = e.pageX - this.offsetLeft;
      var mouseY = e.pageY - this.offsetTop;

      paint = true;
      addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
      redraw_seven();
    });

    $('#canvas_seven').mousemove(function(e){
      if(paint){
        addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
        redraw_seven();
      }
    });

    $('#canvas_seven').mouseup(function(e){
      paint = false;
    });

    $('#canvas_seven').mouseleave(function(e){
      paint = false;
    });

    var clickX = new Array();
    var clickY = new Array();
    var clickDrag = new Array();
    var paint;

    function addClick(x, y, dragging)
    {
      clickX.push(x);
      clickY.push(y);
      clickDrag.push(dragging);
    }

    function redraw_seven(){
      context_seven.clearRect(0, 0, context_seven.canvas.width, context_seven.canvas.height); // Clears the canvas

      context_seven.strokeStyle = '#000000';
      context_seven.lineJoin = "round";
      context_seven.lineWidth = 5;
      context_seven.globalAlpha = 0.5;

      for(var i=0; i < clickX.length; i++) {
        context_seven.beginPath();
        if(clickDrag[i] && i){
          context_seven.moveTo(clickX[i-1], clickY[i-1]);
         }else{
           context_seven.moveTo(clickX[i]-1, clickY[i]);
         }
         context_seven.lineTo(clickX[i], clickY[i]);
         context_seven.closePath();
         context_seven.stroke();
      }
    }

  }

  // why are you reading this anyway
  var canvas_eight = document.getElementById('canvas_eight'),
    context_eight = canvas_eight.getContext('2d');
  canvas_eight.width = 300;
  canvas_eight.height = 300;
  drawStuff_eight();

  $("#download_eight").click(function() {
    var outputCanvas = document.createElement("canvas");
    outputCanvas.width = canvas_eight.width;
    outputCanvas.height = canvas_eight.height + 60;

    var outputContext = outputCanvas.getContext("2d");
    drawBackground(outputContext);
    drawQuestionText(outputContext, $("#question_eight").text());
    drawAttribution(outputContext, 'design.communicat.es/power');

    outputContext.drawImage(canvas_eight, 0, 30);

    this.href = outputCanvas.toDataURL();
    this.download = "design.png";
  });

  function drawStuff_eight() {

    $('#canvas_eight').mousedown(function(e){
      var mouseX = e.pageX - this.offsetLeft;
      var mouseY = e.pageY - this.offsetTop;

      paint = true;
      addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
      redraw_eight();
    });

    $('#canvas_eight').mousemove(function(e){
      if(paint){
        addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
        redraw_eight();
      }
    });

    $('#canvas_eight').mouseup(function(e){
      paint = false;
    });

    $('#canvas_eight').mouseleave(function(e){
      paint = false;
    });

    var clickX = new Array();
    var clickY = new Array();
    var clickDrag = new Array();
    var paint;

    function addClick(x, y, dragging)
    {
      clickX.push(x);
      clickY.push(y);
      clickDrag.push(dragging);
    }

    function redraw_eight(){
      context_eight.clearRect(0, 0, context_eight.canvas.width, context_eight.canvas.height); // Clears the canvas

      context_eight.strokeStyle = '#FF0000';
      context_eight.lineJoin = "round";
      context_eight.lineWidth = 5;
      context_eight.globalAlpha = 0.5;

      for(var i=0; i < clickX.length; i++) {
        context_eight.beginPath();
        if(clickDrag[i] && i){
          context_eight.moveTo(clickX[i-1], clickY[i-1]);
         }else{
           context_eight.moveTo(clickX[i]-1, clickY[i]);
         }
         context_eight.lineTo(clickX[i], clickY[i]);
         context_eight.closePath();
         context_eight.stroke();
      }
    }

  }

  // how are you
  var canvas_nine = document.getElementById('canvas_nine'),
    context_nine = canvas_nine.getContext('2d');
  canvas_nine.width = 300;
  canvas_nine.height = 300;
  drawStuff_nine();

  $("#download_nine").click(function() {
    var outputCanvas = document.createElement("canvas");
    outputCanvas.width = canvas_nine.width;
    outputCanvas.height = canvas_nine.height + 60;

    var outputContext = outputCanvas.getContext("2d");
    drawBackground(outputContext);
    drawQuestionText(outputContext, $("#question_nine").text());
    drawAttribution(outputContext, 'design.communicat.es/power');

    outputContext.drawImage(canvas_nine, 0, 30);

    this.href = outputCanvas.toDataURL();
    this.download = "design.png";
  });

  function drawStuff_nine() {

    $('#canvas_nine').mousedown(function(e){
      var mouseX = e.pageX - this.offsetLeft;
      var mouseY = e.pageY - this.offsetTop;

      paint = true;
      addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
      redraw_nine();
    });

    $('#canvas_nine').mousemove(function(e){
      if(paint){
        addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
        redraw_nine();
      }
    });

    $('#canvas_nine').mouseup(function(e){
      paint = false;
    });

    $('#canvas_nine').mouseleave(function(e){
      paint = false;
    });

    var clickX = new Array();
    var clickY = new Array();
    var clickDrag = new Array();
    var paint;

    function addClick(x, y, dragging)
    {
      clickX.push(x);
      clickY.push(y);
      clickDrag.push(dragging);
    }

    function redraw_nine(){
      context_nine.clearRect(0, 0, context_nine.canvas.width, context_nine.canvas.height); // Clears the canvas

      context_nine.strokeStyle = '#FF0000';
      context_nine.lineJoin = "round";
      context_nine.lineWidth = 5;
      context_nine.globalAlpha = 0.5;

      for(var i=0; i < clickX.length; i++) {
        context_nine.beginPath();
        if(clickDrag[i] && i){
          context_nine.moveTo(clickX[i-1], clickY[i-1]);
         }else{
           context_nine.moveTo(clickX[i]-1, clickY[i]);
         }
         context_nine.lineTo(clickX[i], clickY[i]);
         context_nine.closePath();
         context_nine.stroke();
      }
    }

  }


  // there are twelve. you don't have to keep reading
  var canvas_ten = document.getElementById('canvas_ten'),
    context_ten = canvas_ten.getContext('2d');
  canvas_ten.width = 300;
  canvas_ten.height = 300;
  drawStuff_ten();

  $("#download_ten").click(function() {
    var outputCanvas = document.createElement("canvas");
    outputCanvas.width = canvas_ten.width;
    outputCanvas.height = canvas_ten.height + 60;

    var outputContext = outputCanvas.getContext("2d");
    drawBackground(outputContext);
    drawQuestionText(outputContext, $("#question_ten").text());
    drawAttribution(outputContext, 'design.communicat.es/power');

    outputContext.drawImage(canvas_ten, 0, 30);

    this.href = outputCanvas.toDataURL();
    this.download = "design.png";
  });

  function drawStuff_ten() {

    $('#canvas_ten').mousedown(function(e){
      var mouseX = e.pageX - this.offsetLeft;
      var mouseY = e.pageY - this.offsetTop;

      paint = true;
      addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
      redraw_ten();
    });

    $('#canvas_ten').mousemove(function(e){
      if(paint){
        addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
        redraw_ten();
      }
    });

    $('#canvas_ten').mouseup(function(e){
      paint = false;
    });

    $('#canvas_ten').mouseleave(function(e){
      paint = false;
    });

    var clickX = new Array();
    var clickY = new Array();
    var clickDrag = new Array();
    var paint;

    function addClick(x, y, dragging)
    {
      clickX.push(x);
      clickY.push(y);
      clickDrag.push(dragging);
    }

    function redraw_ten(){
      context_ten.clearRect(0, 0, context_ten.canvas.width, context_ten.canvas.height); // Clears the canvas

      context_ten.strokeStyle = '#FF0000';
      context_ten.lineJoin = "round";
      context_ten.lineWidth = 5;
      context_ten.globalAlpha = 0.5;

      for(var i=0; i < clickX.length; i++) {
        context_ten.beginPath();
        if(clickDrag[i] && i){
          context_ten.moveTo(clickX[i-1], clickY[i-1]);
         }else{
           context_ten.moveTo(clickX[i]-1, clickY[i]);
         }
         context_ten.lineTo(clickX[i], clickY[i]);
         context_ten.closePath();
         context_ten.stroke();
      }
    }

  }

  // i mean you are welcome to keep reading
  var canvas_eleven = document.getElementById('canvas_eleven'),
    context_eleven = canvas_eleven.getContext('2d');
  canvas_eleven.width = 300;
  canvas_eleven.height = 300;
  drawStuff_eleven();

  $("#download_eleven").click(function() {
    var outputCanvas = document.createElement("canvas");
    outputCanvas.width = canvas_eleven.width;
    outputCanvas.height = canvas_eleven.height + 60;

    var outputContext = outputCanvas.getContext("2d");
    drawBackground(outputContext);
    drawQuestionText(outputContext, $("#question_eleven").text());
    drawAttribution(outputContext, 'design.communicat.es/power');

    outputContext.drawImage(canvas_eleven, 0, 30);

    this.href = outputCanvas.toDataURL();
    this.download = "design.png";
  });

  function drawStuff_eleven() {

    $('#canvas_eleven').mousedown(function(e){
      var mouseX = e.pageX - this.offsetLeft;
      var mouseY = e.pageY - this.offsetTop;

      paint = true;
      addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
      redraw_eleven();
    });

    $('#canvas_eleven').mousemove(function(e){
      if(paint){
        addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
        redraw_eleven();
      }
    });

    $('#canvas_eleven').mouseup(function(e){
      paint = false;
    });

    $('#canvas_eleven').mouseleave(function(e){
      paint = false;
    });

    var clickX = new Array();
    var clickY = new Array();
    var clickDrag = new Array();
    var paint;

    function addClick(x, y, dragging)
    {
      clickX.push(x);
      clickY.push(y);
      clickDrag.push(dragging);
    }

    function redraw_eleven(){
      context_eleven.clearRect(0, 0, context_eleven.canvas.width, context_eleven.canvas.height); // Clears the canvas

      context_eleven.strokeStyle = '#FF0000';
      context_eleven.lineJoin = "round";
      context_eleven.lineWidth = 5;
      context_eleven.globalAlpha = 0.5;

      for(var i=0; i < clickX.length; i++) {
        context_eleven.beginPath();
        if(clickDrag[i] && i){
          context_eleven.moveTo(clickX[i-1], clickY[i-1]);
         }else{
           context_eleven.moveTo(clickX[i]-1, clickY[i]);
         }
         context_eleven.lineTo(clickX[i], clickY[i]);
         context_eleven.closePath();
         context_eleven.stroke();
      }
    }

  }
  // this is it! the last one!
  var canvas_twelve = document.getElementById('canvas_twelve'),
    context_twelve = canvas_twelve.getContext('2d');
  canvas_twelve.width = 300;
  canvas_twelve.height = 300;
  drawStuff_twelve();

  $("#download_twelve").click(function() {
    var outputCanvas = document.createElement("canvas");
    outputCanvas.width = canvas_twelve.width;
    outputCanvas.height = canvas_twelve.height + 60;

    var outputContext = outputCanvas.getContext("2d");
    drawBackground(outputContext);
    drawQuestionText(outputContext, $("#question_twelve").text());
    drawAttribution(outputContext, 'design.communicat.es/power');

    outputContext.drawImage(canvas_twelve, 0, 30);

    this.href = outputCanvas.toDataURL();
    this.download = "design.png";
  });

  function drawStuff_twelve() {

    $('#canvas_twelve').mousedown(function(e){
      var mouseX = e.pageX - this.offsetLeft;
      var mouseY = e.pageY - this.offsetTop;

      paint = true;
      addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
      redraw_twelve();
    });

    $('#canvas_twelve').mousemove(function(e){
      if(paint){
        addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
        redraw_twelve();
      }
    });

    $('#canvas_twelve').mouseup(function(e){
      paint = false;
    });

    $('#canvas_twelve').mouseleave(function(e){
      paint = false;
    });

    var clickX = new Array();
    var clickY = new Array();
    var clickDrag = new Array();
    var paint;

    function addClick(x, y, dragging)
    {
      clickX.push(x);
      clickY.push(y);
      clickDrag.push(dragging);
    }

    function redraw_twelve(){
      context_twelve.clearRect(0, 0, context_twelve.canvas.width, context_twelve.canvas.height); // Clears the canvas

      context_twelve.strokeStyle = '#FF0000';
      context_twelve.lineJoin = "round";
      context_twelve.lineWidth = 5;
      context_twelve.globalAlpha = 0.5;

      for(var i=0; i < clickX.length; i++) {
        context_twelve.beginPath();
        if(clickDrag[i] && i){
          context_twelve.moveTo(clickX[i-1], clickY[i-1]);
         }else{
           context_twelve.moveTo(clickX[i]-1, clickY[i]);
         }
         context_twelve.lineTo(clickX[i], clickY[i]);
         context_twelve.closePath();
         context_twelve.stroke();
      }
    }

  }

  // oh i counted wrong there are fourteen
  var canvas_thirteen = document.getElementById('canvas_thirteen'),
    context_thirteen = canvas_thirteen.getContext('2d');
  canvas_thirteen.width = 300;
  canvas_thirteen.height = 300;
  drawStuff_thirteen();

  $("#download_thirteen").click(function() {
    var outputCanvas = document.createElement("canvas");
    outputCanvas.width = canvas_thirteen.width;
    outputCanvas.height = canvas_thirteen.height + 60;

    var outputContext = outputCanvas.getContext("2d");
    drawBackground(outputContext);
    drawQuestionText(outputContext, $("#question_thirteen").text());
    drawAttribution(outputContext, 'design.communicat.es/power');

    outputContext.drawImage(canvas_thirteen, 0, 30);

    this.href = outputCanvas.toDataURL();
    this.download = "design.png";
  });

  function drawStuff_thirteen() {

    $('#canvas_thirteen').mousedown(function(e){
      var mouseX = e.pageX - this.offsetLeft;
      var mouseY = e.pageY - this.offsetTop;

      paint = true;
      addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
      redraw_thirteen();
    });

    $('#canvas_thirteen').mousemove(function(e){
      if(paint){
        addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
        redraw_thirteen();
      }
    });

    $('#canvas_thirteen').mouseup(function(e){
      paint = false;
    });

    $('#canvas_thirteen').mouseleave(function(e){
      paint = false;
    });

    var clickX = new Array();
    var clickY = new Array();
    var clickDrag = new Array();
    var paint;

    function addClick(x, y, dragging)
    {
      clickX.push(x);
      clickY.push(y);
      clickDrag.push(dragging);
    }

    function redraw_thirteen(){
      context_thirteen.clearRect(0, 0, context_thirteen.canvas.width, context_thirteen.canvas.height); // Clears the canvas

      context_thirteen.strokeStyle = '#FF0000';
      context_thirteen.lineJoin = "round";
      context_thirteen.lineWidth = 5;
      context_thirteen.globalAlpha = 0.5;

      for(var i=0; i < clickX.length; i++) {
        context_thirteen.beginPath();
        if(clickDrag[i] && i){
          context_thirteen.moveTo(clickX[i-1], clickY[i-1]);
         }else{
           context_thirteen.moveTo(clickX[i]-1, clickY[i]);
         }
         context_thirteen.lineTo(clickX[i], clickY[i]);
         context_thirteen.closePath();
         context_thirteen.stroke();
      }
    }

  }

  // oh i counted wrong there are fourteen
  var canvas_fourteen = document.getElementById('canvas_fourteen'),
    context_fourteen = canvas_fourteen.getContext('2d');
  canvas_fourteen.width = 300;
  canvas_fourteen.height = 300;
  drawStuff_fourteen();

  $("#download_fourteen").click(function() {
    var outputCanvas = document.createElement("canvas");
    outputCanvas.width = canvas_fourteen.width;
    outputCanvas.height = canvas_fourteen.height + 60;

    var outputContext = outputCanvas.getContext("2d");
    drawBackground(outputContext);
    drawQuestionText(outputContext, $("#question_fourteen").text());
    drawAttribution(outputContext, 'design.communicat.es/power');

    outputContext.drawImage(canvas_fourteen, 0, 30);

    this.href = outputCanvas.toDataURL();
    this.download = "design.png";
  });

  function drawStuff_fourteen() {

    $('#canvas_fourteen').mousedown(function(e){
      var mouseX = e.pageX - this.offsetLeft;
      var mouseY = e.pageY - this.offsetTop;

      paint = true;
      addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
      redraw_fourteen();
    });

    $('#canvas_fourteen').mousemove(function(e){
      if(paint){
        addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
        redraw_fourteen();
      }
    });

    $('#canvas_fourteen').mouseup(function(e){
      paint = false;
    });

    $('#canvas_fourteen').mouseleave(function(e){
      paint = false;
    });

    var clickX = new Array();
    var clickY = new Array();
    var clickDrag = new Array();
    var paint;

    function addClick(x, y, dragging)
    {
      clickX.push(x);
      clickY.push(y);
      clickDrag.push(dragging);
    }

    function redraw_fourteen(){
      context_fourteen.clearRect(0, 0, context_fourteen.canvas.width, context_fourteen.canvas.height); // Clears the canvas

      context_fourteen.strokeStyle = '#FF0000';
      context_fourteen.lineJoin = "round";
      context_fourteen.lineWidth = 5;
      context_fourteen.globalAlpha = 0.5;

      for(var i=0; i < clickX.length; i++) {
        context_fourteen.beginPath();
        if(clickDrag[i] && i){
          context_fourteen.moveTo(clickX[i-1], clickY[i-1]);
         }else{
           context_fourteen.moveTo(clickX[i]-1, clickY[i]);
         }
         context_fourteen.lineTo(clickX[i], clickY[i]);
         context_fourteen.closePath();
         context_fourteen.stroke();
      }
    }

  }
  //ok that is all! pull requests are really welcome at github.com/mermop/design-communicates <3
});
