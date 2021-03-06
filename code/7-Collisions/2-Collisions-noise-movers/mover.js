// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var Mover = function(mass, x, y) {
  this.noff = createVector(random(1000),random(1000));
  this.position = createVector(x, y);
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0);
  this.mass = mass;

  this.applyForce = function(force) {
    var f = p5.Vector.div(force,this.mass);
    this.acceleration.add(f);
  };



  this.update = function() {
    // this.velocity.add(this.acceleration);
    // this.position.add(this.velocity);
    // this.acceleration.mult(0);

    //these equations give noise movement
    this.position.x = map(noise(this.noff.x),0,1,0,width);
    this.position.y = map(noise(this.noff.y),0,1,0,height);
    this.noff.add(0.01,0.01,0);
  };

  this.display = function() {
    stroke(0);
    strokeWeight(2);
    fill(255, 175);
    ellipse(this.position.x, this.position.y, this.mass*16, this.mass*16);
  };

  this.checkEdges = function() {
    if (this.position.x > width) {
      this.position.x = width;
      this.velocity.x *= -1;
    } else if (this.position.x < 0) {
      this.velocity.x *= -1;
      this.position.x = 0;
    }
    if (this.position.y > height) {
      this.velocity.y *= -1;
      this.position.y = height;
    }
  };


};
