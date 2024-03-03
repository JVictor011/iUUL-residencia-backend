class Coordenadas {
  #x;
  #y;

  constructor(x, y) {
    this.#x = x || 0;
    this.#y = y || 0;
  }

  getX() {
    return this.#x;
  }
  getY() {
    return this.#y;
  }

  setX(newX) {
    this.#x = newX;
  }
  setY(newY) {
    this.#y = newY;
  }
}

export { Coordenadas };
