var ChickenDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);

  // this.$node.css("background-image","chicken.gif");
  this.$node.outerHTML = $('<img class="dancer" src="chicken.gif" />');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

ChickenDancer.prototype = Object.create(Dancer.prototype);
ChickenDancer.prototype.constructor = ChickenDancer;

ChickenDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  //oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};