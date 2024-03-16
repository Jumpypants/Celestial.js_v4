class CLS_Camera extends CLS_SceneObject {
  constructor(pos, layer, name, scale = new V2(1, 1), rotation = 0, parentEntity = null, tags = []){
    super(pos, layer, parentEntity, ["Camera", ...tags]);
    this.#scale = scale;
    this.#rotation = rotation;
    this.#name = name;

    this.scene.cameras.set(name, this);
  }

  get name(){
    return this.#name;
  }

  get scale() {
    return this.#scale;
  }

  get rotation(){
    return this.#rotation;
  }
}