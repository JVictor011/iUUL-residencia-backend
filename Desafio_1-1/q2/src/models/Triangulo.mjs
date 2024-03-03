import { Vertice } from "../../../q1/src/models/Vertice.mjs";

class Triangulo {
  #vertice1;
  #vertice2;
  #vertice3;

  constructor(
    vertice1x,
    vertice1y,
    vertice2x,
    vertice2y,
    vertice3x,
    vertice3y
  ) {
    this.#vertice1 = new Vertice(vertice1x, vertice1y);
    this.#vertice2 = new Vertice(vertice2x, vertice2y);
    this.#vertice3 = new Vertice(vertice3x, vertice3y);
    if (!this.verificarTriangulo()) {
      return "Não é um triângulo!";
    }
  }

  clonarTriangulo(triangulo) {
    return new Triangulo(
      triangulo.getVertice1().getX(),
      triangulo.getVertice1().getY(),
      triangulo.getVertice2().getX(),
      triangulo.getVertice2().getY(),
      triangulo.getVertice3().getX(),
      triangulo.getVertice3().getY()
    );
  }

  verificarTriangulo() {
    const AB = Math.sqrt(
      (this.#vertice2.getX() - this.#vertice1.getX()) ** 2 +
        (this.#vertice2.getY() - this.#vertice1.getY()) ** 2
    );
    const BC = Math.sqrt(
      (this.#vertice3.getX() - this.#vertice1.getX()) ** 2 +
        (this.#vertice3.getY() - this.#vertice1.getY()) ** 2
    );
    const CA = Math.sqrt(
      (this.#vertice3.getX() - this.#vertice2.getX()) ** 2 +
        (this.#vertice3.getY() - this.#vertice2.getY()) ** 2
    );

    return AB + BC > CA && AB + CA > BC && BC + CA > AB;
  }

  ladosIguais(triangulo) {
    const vecTrianguloTam = [
      Math.sqrt(
        (this.#vertice2.getX() - this.#vertice1.getX()) ** 2 +
          (this.#vertice2.getY() - this.#vertice1.getY()) ** 2
      ),
      Math.sqrt(
        (this.#vertice1.getX() - this.#vertice1.getX()) ** 2 +
          (this.#vertice3.getY() - this.#vertice1.getY()) ** 2
      ),
      Math.sqrt(
        (this.#vertice1.getX() - this.#vertice2.getX()) ** 2 +
          (this.#vertice3.getY() - this.#vertice2.getY()) ** 2
      ),
    ];

    const vecTrianguloTam2 = [
      Math.sqrt(
        (triangulo.getVertice2().getX() - triangulo.getVertice1().getX()) ** 2 +
          (triangulo.getVertice2().getY() - triangulo.getVertice1().getY()) ** 2
      ),
      Math.sqrt(
        (triangulo.getVertice3().getX() - triangulo.getVertice1().getX()) ** 2 +
          (triangulo.getVertice3().getY() - triangulo.getVertice1().getY()) ** 2
      ),
      Math.sqrt(
        (triangulo.getVertice3().getX() - triangulo.getVertice2().getX()) ** 2 +
          (triangulo.getVertice3().getY() - triangulo.getVertice2().getY()) ** 2
      ),
    ];

    return vecTrianguloTam.every(
      (item, index) => item === vecTrianguloTam2[index]
    );
  }

  angulosIguais(triangulo) {
    const vecTrianguloDist = [
      this.#vertice1.distancia(this.#vertice2),
      this.#vertice2.distancia(this.#vertice3),
      this.#vertice3.distancia(this.#vertice1),
    ];

    const vecTrianguloDist2 = [
      triangulo.getVertice1().distancia(triangulo.getVertice2()),
      triangulo.getVertice2().distancia(triangulo.getVertice3()),
      triangulo.getVertice3().distancia(triangulo.getVertice1()),
    ];

    const cosA =
      (vecTrianguloDist[1] ** 2 +
        vecTrianguloDist[2] ** 2 -
        vecTrianguloDist[0] ** 2) /
      (2 * vecTrianguloDist[1] * vecTrianguloDist[2]);
    const cosB =
      (vecTrianguloDist[2] ** 2 +
        vecTrianguloDist[0] ** 2 -
        vecTrianguloDist[1] ** 2) /
      (2 * vecTrianguloDist[2] * vecTrianguloDist[0]);
    const cosC =
      (vecTrianguloDist[0] ** 2 +
        vecTrianguloDist[1] ** 2 -
        vecTrianguloDist[2] ** 2) /
      (2 * vecTrianguloDist[0] * vecTrianguloDist[1]);

    const cosA2 =
      (vecTrianguloDist2[1] ** 2 +
        vecTrianguloDist2[2] ** 2 -
        vecTrianguloDist2[0] ** 2) /
      (2 * vecTrianguloDist2[1] * vecTrianguloDist2[2]);
    const cosB2 =
      (vecTrianguloDist2[2] ** 2 +
        vecTrianguloDist2[0] ** 2 -
        vecTrianguloDist2[1] ** 2) /
      (2 * vecTrianguloDist2[2] * vecTrianguloDist2[0]);
    const cosC2 =
      (vecTrianguloDist2[0] ** 2 +
        vecTrianguloDist2[1] ** 2 -
        vecTrianguloDist2[2] ** 2) /
      (2 * vecTrianguloDist2[0] * vecTrianguloDist2[1]);

    const vecTrianguloAng = [
      (Math.acos(cosA) * 180) / Math.PI,
      (Math.acos(cosB) * 180) / Math.PI,
      (Math.acos(cosC) * 180) / Math.PI,
    ];

    const vecTrianguloAng2 = [
      (Math.acos(cosA2) * 180) / Math.PI,
      (Math.acos(cosB2) * 180) / Math.PI,
      (Math.acos(cosC2) * 180) / Math.PI,
    ];

    return vecTrianguloAng.every(
      (item, index) => item == vecTrianguloAng2[index]
    );
  }

  equals(triangulo) {
    return this.ladosIguais(triangulo) && this.angulosIguais(triangulo);
  }

  perimetro() {
    const vecTamLadoTriangulo = [
      this.#vertice1.distancia(this.#vertice2),
      this.#vertice2.distancia(this.#vertice3),
      this.#vertice3.distancia(this.#vertice1),
    ];

    let perimetro = 0;
    for (let i = 0; i < 3; ++i) {
      perimetro += vecTamLadoTriangulo[i];
    }

    return perimetro;
  }

  isEquilatero(lado1, lado2, lado3) {
    return lado1 == lado2 && lado2 == lado3;
  }

  isIsosceles(lado1, lado2, lado3) {
    return lado1 == lado2 || lado2 == lado3 || lado3 == lado1;
  }

  isEscaleno(lado1, lado2, lado3) {
    return lado1 != lado2 && lado2 != lado3 && lado3 != lado1;
  }

  tipoTriangulo() {
    const lado1 = this.#vertice1.distancia(this.#vertice2);
    const lado2 = this.#vertice2.distancia(this.#vertice3);
    const lado3 = this.#vertice3.distancia(this.#vertice1);

    if (this.isEquilatero(lado1, lado2, lado3)) {
      return "Equilatero";
    } else if (this.isIsosceles(lado1, lado2, lado3)) {
      return "Isosceles";
    } else if (this.tipoEscaleno(lado1, lado2, lado3)) {
      return "Escaleno";
    } else {
      return "Invalido";
    }
  }

  areaTriangulo() {
    return this.perimetro() / 2;
  }

  getVertice1() {
    return this.#vertice1;
  }
  getVertice2() {
    return this.#vertice2;
  }
  getVertice3() {
    return this.#vertice3;
  }
}

export { Triangulo };