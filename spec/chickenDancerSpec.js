describe('ChickenDancer', function () {

     it('should be a function', function() {
     expect(ChickenDancer).to.be.a('function');
   });

});

describe('chicken dancer', function() {
  var dancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    dancer = new ChickenDancer(10, 20, timeBetweenSteps);
  });

  it("dancer should be an object", function (){
    expect(dancer).to.be.an('object');
  });

  it("should have a jQuery $node object", function(){
    expect(dancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step property', function(){
    expect(dancer).to.have.a.property("step");
  });

  it('should have a setPosition property', function(){
    expect(dancer).to.have.a.property("setPosition");
  });

  // it('setPosition should assign top and left properties to dancer.$node', function(){
  //   expect(dancer.$node).should.have.property("top");
  //   expect(dancer.$node).to.have.property("left");
  // });

});

//   describe("dance", function(){
//     it("should call step at least once per second", function(){
//       sinon.spy(squareDancer, "step");
//       expect(squareDancer.step.callCount).to.be.equal(0);
//       clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
//       clock.tick(timeBetweenSteps);

//       expect(squareDancer.step.callCount).to.be.equal(1);

//       clock.tick(timeBetweenSteps);
//       expect(squareDancer.step.callCount).to.be.equal(2);
//     });
//   });
// });
