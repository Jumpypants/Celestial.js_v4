class CLS_Image {
  constructor(src, crop = false, cropPos = null, cropSize = null) {
    this.src = src;
    this.crop = crop;
    this.cropPos = cropPos;
    this.cropSize = cropSize;
  }

  draw(ctx, size) {
    if(this.crop) {
      ctx.drawImage(this.src, -size.x / 2, -size.y / 2, size.x, size.y, this.cropPos.x, this.cropPos.y, this.cropSize.x, this.cropSize.y);
    } else {
      ctx.drawImage(this.src, -size.x / 2, -size.y / 2, size.x, size.y);
    }
  }
}