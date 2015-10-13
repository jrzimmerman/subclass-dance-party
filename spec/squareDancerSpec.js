describe('SquareDancer class', function () {

     it('should be a function', function() {
     expect(SquareDancer).to.be.a('function');
   });

});

describe('Square Dancer object', function() {
  var square;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    square = new SquareDancer(10, 20, timeBetweenSteps);
  });

  it("dancer should be an object", function (){
    expect(square).to.be.an('object');
  });

  it("should have a jQuery $node object", function(){
    expect(square.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step property', function(){
    expect(square).to.have.a.property("step");
  });

  it('should have a setPosition property', function(){
    expect(square).to.have.a.property("setPosition");
  });

  // it('setPosition should assign top and left properties to dancer.$node', function(){
  //   expect(dancer.$node).should.have.property("top");
  //   expect(dancer.$node).to.have.property("left");
  // });

});

