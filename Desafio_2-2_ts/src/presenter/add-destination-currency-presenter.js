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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _AddDestinationCurrencyPresenter_controller, _AddDestinationCurrencyPresenter_view, _AddDestinationCurrencyPresenter_menuView;
Object.defineProperty(exports, "__esModule", { value: true });
const menu_view_1 = require("../view/menu-view");
const readlineModule_1 = require("../utils/readlineModule");
const errorView_1 = __importDefault(require("../view/errorView"));
class AddDestinationCurrencyPresenter {
    constructor(controller) {
        _AddDestinationCurrencyPresenter_controller.set(this, void 0);
        _AddDestinationCurrencyPresenter_view.set(this, void 0);
        _AddDestinationCurrencyPresenter_menuView.set(this, void 0);
        __classPrivateFieldSet(this, _AddDestinationCurrencyPresenter_controller, controller, "f");
        __classPrivateFieldSet(this, _AddDestinationCurrencyPresenter_view, new errorView_1.default(), "f");
        __classPrivateFieldSet(this, _AddDestinationCurrencyPresenter_menuView, new menu_view_1.MenuView(), "f");
    }
    run(converter) {
        return __awaiter(this, void 0, void 0, function* () {
            let failure = true;
            while (failure) {
                try {
                    const answer = yield (0, readlineModule_1.question)(__classPrivateFieldGet(this, _AddDestinationCurrencyPresenter_menuView, "f").destinationCurrency());
                    const validate = yield converter.validationDestinationCurrency(answer);
                    if (validate) {
                        yield __classPrivateFieldGet(this, _AddDestinationCurrencyPresenter_controller, "f").run(answer, converter);
                        failure = false;
                    }
                }
                catch (error) {
                    __classPrivateFieldGet(this, _AddDestinationCurrencyPresenter_view, "f").errorRender();
                    process.exit(1);
                }
            }
        });
    }
}
_AddDestinationCurrencyPresenter_controller = new WeakMap(), _AddDestinationCurrencyPresenter_view = new WeakMap(), _AddDestinationCurrencyPresenter_menuView = new WeakMap();
exports.default = AddDestinationCurrencyPresenter;
