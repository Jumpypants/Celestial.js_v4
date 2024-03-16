class CLS_Enity extends CLS_SceneObject {
  constructor(pos, layer, objects, parentEntity = null, tags = []){
    super(pos, layer, parentEntity, ["Entity", ...tags]);
    this.#objects = [];
    for(var obj of objects) {
      this.addObject(obj);
    }
  }

  get objects() {
    return this.#objects;
  }

  draw(ctx) {
    ctx.translate(this.pos.x, this.pos.y);
    for(var obj of this.#objects) {
      if (obj.hasTag("Sprite") || obj.hasTag("Entity")) {
        ctx.save();
        obj.draw(ctx);
        ctx.restore();
      }
    }
  }

  addObject(object) {
    object.parentEntity = this;
    this.#objects.push(object);
  }
}