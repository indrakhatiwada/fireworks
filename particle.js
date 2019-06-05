class Particle {
    constructor(x,y,hu,firework){


        this.pos = createVector(x,y);
        this.firework = firework;
        this.lilfespan = 255 ; 
        this.hu = hu;
        if(firework){
            this.vel = createVector(0,random(-12,-5));

        }else{
            this.vel = p5.Vector.random2D();
            this.vel.mult(random(2,10));
        }
       
        this.acc = createVector(0,0);
    }

    update(){
        if(!this.firework){
            this.vel.mult(0.9);
            this.lilfespan -=4 

        }
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }
    applyForce(force){
        this.acc.add(force);

    }

    show(){
        colorMode(HSB);
        if(!this.firework){
            strokeWeight(2);
            stroke(this.hu,255,255);
        }else{
            strokeWeight(4);
            stroke(this.hu,255,255);
        }
        point(this.pos.x,this.pos.y)
    }
    done(){
        if(this.lifespan < 0 ){
            return true;
        }else{
            return false;
        }
     }
}