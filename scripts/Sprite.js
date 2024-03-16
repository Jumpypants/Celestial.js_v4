class CLS_Sprite extends CLS_SceneObject {
  construtor(pos, layer, image, size, rotation = 0, parentEntity = null, tags = []){
    super(pos, layer, parentEntity, ["Sprite", ...tags]);
    this.#image = image;
    this.#size = size;
    this.#rotation = rotation;
  }

  get image() {
    return this.#image;
  }

  get size() {
    return this.#size;
  }

  get rotation() {
    return this.#rotation;
  }

  draw(ctx) {
    ctx.translate(this.pos.x, this.pos.y);
    ctx.rotate(this.#rotation);
    this.#image.draw(ctx, this.size);
  }
}