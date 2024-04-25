"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import MainController from './src/controller/mainController.ts';
// import MenuPresenter from './src/presenter/menuPresenter.ts';
const db_1 = __importDefault(require("./src/db/db"));
const paciente_1 = __importDefault(require("./src/db/paciente"));
const consulta_1 = __importDefault(require("./src/db/consulta"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    const paciente = paciente_1.default;
    const consulta = consulta_1.default;
    yield db_1.default.sync();
    // const mainController = new MainController();
    // const menuPresenter = new MenuPresenter(mainController);
    // menuPresenter.present();
}))();
