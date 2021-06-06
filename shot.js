class Shot{
    constructor(bodyA, pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.03,
            length: 1
        }
        this.bodyA=bodyA;
        this.pointB = pointB;
        this.shot = Constraint.create(options);
        World.add(world, this.shot);
    }
    attach(body){
		this.shot.bodyA=bodyA;
	}
    
    fly(){
        this.shot.bodyA = null;
    }
    display(){
        if(this.shot.bodyA){
        var pointA = this.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(2);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}