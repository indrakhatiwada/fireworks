class Firework{
    constructor(){
        this.hu = random(255);

        this.firework = new Particle(random(width), height,true, this.hu);
        this.exploded = false;
        this.particles = [];
        
    }
    update(){
        if(!this.exploded){
        this.firework.applyForce(gravity);
        this.firework.update();
        this.firework.show();
        if(this.firework.vel.y  >=0){
            this.exploded = true;
            this.explode();

        
        }


        }
        for(let i = this.particles.length -1; i >=0 ; i--){
            this.particles[i].applyForce(gravity);
            this.particles[i].update();
            if(this.particles[i].done()){
            this.particles.splice(i,1);
            }
        }
        
       
    }
    show(){
        colorMode(HSB); 
        if(!this.exploded){
            this.firework.show(); 
        }
        for(let i = 0; i< this.particles.length ; i++){
            this.particles[i].show();
        }
        
    }

    explode(){
        for (var i =0; i < 80; i++ ){
            let p = new Particle(this.firework.pos.x, this.firework.pos.y, this.hu , false) ;
            this.particles.push(p);
        }
    }
    done(){
        if(this.exploded && this.particles.length === 0){
            return true;
        }else{
            return false;
        }
    }
    
}