let s,slider,playb,paused=1;


function setup(){
    createCanvas(350, 300)
    slider=createSlider(0, 100, 0, 1)
    s=new Sun(50,50,50,50);  
    playb=createButton('play')
    playb.mousePressed(()=>{
        if(paused==0){
            playb.elt.textContent='play'
            paused=1 
        }
        else{
            playb.elt.textContent='pause'
            paused=0
            if(slider.value()==100){
                s.reset()
                slider.value(0)
            }
        }
    });
}


function draw(){
    background('black')
    if(slider.value()==100){
        playb.elt.textContent='play'
        paused=1
    }
        if(!paused){
            slider.value(slider.value()+1);
            s.update();
        }else{ 
            s.update();
        }
    
    s.show();
}


class Sun{

    constructor(x,y,h,w){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.vx=2;
        this.vy=2;
        this.expand=1;
        this.frame=0;
        this.originalval=[x,y,h,w];
    }

    show(){
        fill('red')
        ellipse(this.x,this.y , this.w,this.h);
    }

    reset(){
        this.x=this.originalval[0];
        this.y=this.originalval[1];
        this.w=this.originalval[2];
        this.h=this.originalval[3];
        this.frame=0;
    }

    update(){
        let a=slider.value();
        if(this.frame<a){
            this.x+=this.vx
            this.y+=this.vy
            this.w+=this.expand
            this.h+=this.expand
            this.frame++;
        }
        if(this.frame>a){
            this.x-=this.vx
            this.y-=this.vy
            this.w-=this.expand
            this.h-=this.expand
            this.frame--;
        }
    }

}