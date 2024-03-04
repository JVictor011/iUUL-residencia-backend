import { Vertice } from "../q1/src/models/Vertice.mjs";
import { Poligono } from "./Poligono.mjs";

const vertice1 = new Vertice(1, 2);
const vertice2 = new Vertice(3, 4);
const vertice3 = new Vertice(5, 6);

const poligono = new Poligono(vertice1, vertice2, vertice3);

console.log(poligono.qtdVertices());
console.log(poligono.perimetro());
poligono.addVertice(1, 2);
console.log(poligono.qtdVertices());
