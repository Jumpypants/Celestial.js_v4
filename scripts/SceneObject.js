class CLS_SceneObject {
  constructor(pos, layer, parentEntity = null, tags = []){
    this.pos = pos;
    
    this.#layer = layer;
    this.#parentEntity = parentEntity;
    this.#tags = tags;
  }

  get parentEntity() {
    return this.#parentEntity;
  }

  get layer() {
    return this.#layer;
  }

  get scene() {
    return this.#layer.scene;
  }

  get scenePos() {
    if(this.#parentEntity == null) {
      return this.pos;
    } else {
      return this.pos.add(this.#parentEntity.scenePos);
    }
  }

  hasTag(tag) {
    return this.#tags.includes(tag);
  }

  addTag(tag) {
    if(!this.#tags.includes(tag)) {
      this.#tags.push(tag);
    }
  }

  tick(dt) {}
}

console.log(new CLS_SceneObject({x: 0, y: 0}, null))