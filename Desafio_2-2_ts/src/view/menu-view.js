"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MenuView_menuId, _MenuView_output;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuView = exports.MenuOptions = void 0;
const readlineModule_1 = require("../utils/readlineModule");
class MenuOptions {
    static get CURRENCY_OF_ORIGIN() {
        return 1;
    }
    static get DESTINATION_CURRENCY() {
        return 2;
    }
    static get VALUE() {
        return 3;
    }
    static get OK() {
        return 4;
    }
    static get ERROR() {
        return 5;
    }
}
exports.MenuOptions = MenuOptions;
class MenuView {
    constructor() {
        _MenuView_menuId.set(this, void 0);
        _MenuView_output.set(this, void 0); // Você pode definir o tipo mais específico aqui
        __classPrivateFieldSet(this, _MenuView_menuId, MenuOptions.CURRENCY_OF_ORIGIN, "f");
        __classPrivateFieldSet(this, _MenuView_output, readlineModule_1.rl, "f");
    }
    errorRender() {
        console.log('Erro inesperado');
        __classPrivateFieldSet(this, _MenuView_menuId, MenuOptions.CURRENCY_OF_ORIGIN, "f");
    }
    get menuId() {
        return __classPrivateFieldGet(this, _MenuView_menuId, "f");
    }
    set menuId(value) {
        __classPrivateFieldSet(this, _MenuView_menuId, value, "f");
    }
    currencyOfOrigin() {
        return 'Moeda origem: ';
    }
    destinationCurrency() {
        return 'Moeda destino: ';
    }
    value() {
        return 'Valor: ';
    }
    print(currencyOfOrigin, destinationCurrency, value, valueDestinationCurrency, fee) {
        console.log(`
${currencyOfOrigin} ${value} => ${destinationCurrency} ${valueDestinationCurrency}

TAXA: ${fee}
        `);
    }
}
exports.MenuView = MenuView;
_MenuView_menuId = new WeakMap(), _MenuView_output = new WeakMap();
