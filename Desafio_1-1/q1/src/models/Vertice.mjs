import { Coordenadas } from "./Coordenadas.mjs";

class Vertice extends Coordenadas {

  constructor(x, y) {
    super(x, y);
    console.log("Vertice adicionado!");
  }

  distancia(vertice) {
    try {
      const x1 = this.getX();
      const x2 = vertice.getX();
      const y1 = this.getY();
      const y2 = vertice.getY();

      const distEuclidiana = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

      return distEuclidiana;
    } catch (error) {
      console.log(error);
    }
  }

  mover(x, y) {
    try {
      this.setX(x);
      this.setY(y);
      console.log("Vertice movido!");
    } catch (error) {
      console.log(error);
    }
  }

  equals(vertice) {
    try {
      if (this.getX() == vertice.getX() && this.getY() == vertice.getY()) {
        return console.log("Coordenas iguais!");
      } else {
        return console.log("Coordenas diferentes!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  getVertice() {
    return console.log(`Coordenas: X= ${this.getX()}, Y= ${this.getY()}`);
  }
}

export { Vertice };
