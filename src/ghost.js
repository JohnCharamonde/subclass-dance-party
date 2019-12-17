var Ghost = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('ghost');
  // this.left = 100%;
  // this.slide = $(this.$node).animate({ "left": "-=10px" }, "slow" )
  // this.move();
};

Ghost.prototype = Object.create(Dancer.prototype);
Ghost.prototype.constructor = Ghost;

Ghost.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.animate({ 'left': '+=100px' }, 'linear' );
  // if(this.$node.left >= 2000px) {
  //   this.$node.remove();
  // }
};

Ghost.prototype.move = function () {
  setTimeout(this.move.bind(this), this.timeBetweenSteps);
};