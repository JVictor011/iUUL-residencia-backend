import { Vertice } from "../q1/src/models/Vertice.mjs";

class Poligono {
  #vertices = [];

  constructor(...vecVertices) {
    if (vecVertices.length < 3) {
      return "Numero de vertices insufucientes!";
    }
    this.#vertices = vecVertices.map((v) => new Vertice(v.x, v.y));
  }

  addVertice(x, y) {
    for (let i = 0; i < this.#vertices.length; ++i) {
      if (this.#vertices[i].getX() == x && this.#vertices[i].getY() == y) {
        return false;
      }
    }
    this.#vertices.push(new Vertice(x, y));
    return true;
  }

  perimetro() {
    let perimetro = 0;
    for (let i = 0; i < this.#vertices.length; ++i) {
      if (i == this.#vertices.length - 1) {
        perimetro += this.#vertices[i].distancia(this.#vertices[0]);
      }
      perimetro += this.#vertices[i].distancia(this.#vertices[i + 1]);
    }
    return perimetro;
  }

  qtdVertices() {
    return this.#vertices.length;
  }
}

export { Poligono };
