class DrawRect{
  constructor(img,sx,sy,sw,sh){
    if(!img || !sw || !sh){
      throw new Error('需要img,sw,sh');
    }
    this.img=img;
    this.sx=sx;
    this.sy=sy;
    this.sw=sw;
    this.sh=sh;

  }
}
