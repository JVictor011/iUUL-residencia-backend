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
const add_currency_of_origin_presenter_1 = __importDefault(require("../presenter/add-currency-of-origin-presenter"));
const add_currency_of_origin_controller_1 = __importDefault(require("./add-currency-of-origin-controller"));
const add_destination_currency_controller_1 = __importDefault(require("./add-destination-currency-controller"));
const add_destination_currency_presenter_1 = __importDefault(require("../presenter/add-destination-currency-presenter"));
const add_value_controller_1 = __importDefault(require("./add-value-controller"));
const add_value_presenter_1 = __importDefault(require("../presenter/add-value-presenter"));
const convert_currency_controller_1 = __importDefault(require("./convert-currency-controller"));
const convert_currency_presenter_1 = __importDefault(require("../presenter/convert-currency-presenter"));
class MainController {
    addCurrencyOfOrigin(converter) {
        return __awaiter(this, void 0, void 0, function* () {
            const controller = new add_currency_of_origin_controller_1.default();
            const presenter = new add_currency_of_origin_presenter_1.default(controller);
            yield presenter.run(converter);
        });
    }
    addDestinationCurrency(converter) {
        return __awaiter(this, void 0, void 0, function* () {
            const controller = new add_destination_currency_controller_1.default();
            const presenter = new add_destination_currency_presenter_1.default(controller);
            yield presenter.run(converter);
        });
    }
    addValue(converter) {
        return __awaiter(this, void 0, void 0, function* () {
            const controller = new add_value_controller_1.default();
            const presenter = new add_value_presenter_1.default(controller);
            yield presenter.run(converter);
        });
    }
    convertCurrency(converter) {
        return __awaiter(this, void 0, void 0, function* () {
            const controller = new convert_currency_controller_1.default();
            const presenter = new convert_currency_presenter_1.default(controller);
            yield presenter.run(converter);
        });
    }
}
exports.default = MainController;
