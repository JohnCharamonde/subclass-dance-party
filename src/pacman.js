var PacMan = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('pacman');
  // this.slide = $(this.$node).animate({ "left": "-=10px" }, "slow" )
  // this.move();
};

PacMan.prototype = Object.create(Dancer.prototype);
PacMan.prototype.constructor = PacMan;

PacMan.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.animate({ 'left': '+=100px' }, 'linear' );
  // if(this.$node.left >= 2000px) {
  //   this.$node.remove();
  // }
};

PacMan.prototype.move = function () {
  setTimeout(this.move.bind(this), this.timeBetweenSteps);
};



// <!doctype html>
// <html lang="en">
// <head>
//   <meta charset="utf-8">
//   <title>animate demo</title>
//   <style>
//   div {
//     position: absolute;
//     background-color: #abc;
//     left: 50px;
//     width: 90px;
//     height: 90px;
//     margin: 5px;
//   }
//   </style>
//   <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
// </head>
// <body>

// <button id="left">&laquo;</button>
// <button id="right">&raquo;</button>
// <div class="block"></div>

// <script>
// $( "#right" ).click(function() {
//   $( ".block" ).animate({ "left": "+=50px" }, "slow" );
// });

// $( "#left" ).click(function(){
//   $( ".block" ).animate({ "left": "-=50px" }, "slow" );
// });
// </script>

// </body>
// </html>