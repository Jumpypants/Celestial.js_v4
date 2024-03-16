class CLS_Hitbox extends CLS_SceneObject {
  constructor(pos, layer, size, parentEntity = null, tags = []) {
    super(pos, layer, parentEntity, ["Hitbox", ...tags]);
    this.#size = size;
  }
  
  get size() {
    return this.#size;
  }

  collision(dt, hitbox) {}
}