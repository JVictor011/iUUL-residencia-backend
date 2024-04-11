"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_controller_1 = __importDefault(require("./src/controller/main-controller"));
const menu_presenter_1 = __importDefault(require("./src/presenter/menu-presenter"));
(() => {
    const controller = new main_controller_1.default();
    const presenter = new menu_presenter_1.default(controller);
    presenter.run();
})();
