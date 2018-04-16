class Fish extends Sprite{

  constructor(type,x=0,y=0,rotation=0){
    if(type<1 || type>5){
      throw new Error('鱼的种类不对');
    }
    const SIZE=[
      null,
      {w:55,h:37,r:12},
      {w:78,h:64,r:18},
      {w:72,h:56,r:15},
      {w:77,h:59,r:15},
      {w:107,h:122,r:23},
    ];
    //父类
    super(new DrawRect(_imgs[`fish${type}`],0,0,SIZE[type].w,SIZE[type].h),x,y,rotation);
    //子类
    this.type=type;
    this.curFrame=0;
    this.MAX_FRAME=4;
    this.speed=rand(1,4);
    this.MAX_FRAME=4;
    this.frameRate=5;
    this.radius=SIZE[type].r;

    //isdead
    this.isDead=false;
  }
  draw(gd){
    if(this.rotation==-90){
      this.scaleY=-1;
    }
    this.rotation-=90;

    if(this.isDead){
        this.curFrame+=4;
    }

    super.draw(gd);

    if(this.isDead){
        this.curFrame-=4;
    }


    this.rotation+=90;
    if(this.rotation==-90){
      this.scaleY=1;
    }
  }

  // nextFrame(){
  //   this.curFrame++;
  //   if(this.curFrame>=this.MAX_FRAME){
  //     this.curFrame=0;
  //   }
  //   this.sy=this.height*this.curFrame;
  // }
}
