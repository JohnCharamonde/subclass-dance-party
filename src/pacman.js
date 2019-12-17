var PacMan = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('pacman');
};

PacMan.prototype = Object.create(Dancer.prototype);
PacMan.prototype.constructor = PacMan;

PacMan.prototype.step = function() {
  Dancer.prototype.step.call(this);
};

PacMan.prototype.move = function () {
  setTimeout(this.move.bind(this), this.timeBetweenSteps);
};