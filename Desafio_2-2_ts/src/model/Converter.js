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
var _Converter_currencyOfOrigin, _Converter_destinationCurrency, _Converter_value, _Converter_valueDestinationCurrency, _Converter_fee, _Converter_currency_codes;
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const Dictionary_1 = __importDefault(require("./Dictionary"));
class Converter {
    constructor() {
        _Converter_currencyOfOrigin.set(this, void 0);
        _Converter_destinationCurrency.set(this, void 0);
        _Converter_value.set(this, void 0);
        _Converter_valueDestinationCurrency.set(this, void 0);
        _Converter_fee.set(this, void 0);
        _Converter_currency_codes.set(this, void 0);
        __classPrivateFieldSet(this, _Converter_currencyOfOrigin, '', "f");
        __classPrivateFieldSet(this, _Converter_destinationCurrency, '', "f");
        __classPrivateFieldSet(this, _Converter_value, '', "f");
        __classPrivateFieldSet(this, _Converter_valueDestinationCurrency, '', "f");
        __classPrivateFieldSet(this, _Converter_fee, '', "f");
        __classPrivateFieldSet(this, _Converter_currency_codes, new Dictionary_1.default().currency_codes, "f");
    }
    validationCurrencyOfOrigin(answer) {
        return __classPrivateFieldGet(this, _Converter_currency_codes, "f").includes(answer.toUpperCase());
    }
    validationDestinationCurrency(answer) {
        return __classPrivateFieldGet(this, _Converter_currency_codes, "f").includes(answer.toUpperCase());
    }
    validationValue(answer) {
        if (answer.includes(',')) {
            answer = answer.replace(',', '.');
        }
        if (isNaN(parseFloat(answer)) || parseFloat(answer) <= 0) {
            return false;
        }
        return answer;
    }
    addCurrencyOfOrigin(answer) {
        __classPrivateFieldSet(this, _Converter_currencyOfOrigin, answer.toUpperCase(), "f");
    }
    addDestinationCurrency(answer) {
        __classPrivateFieldSet(this, _Converter_destinationCurrency, answer.toUpperCase(), "f");
    }
    addValue(answer) {
        __classPrivateFieldSet(this, _Converter_value, answer, "f");
    }
    convertCurrency() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get(`https://v6.exchangerate-api.com/v6/74f0ce3ac22fa2cec16bf5c8/latest/${__classPrivateFieldGet(this, _Converter_currencyOfOrigin, "f")}`);
            const conversionRate = response.data.conversion_rates[__classPrivateFieldGet(this, _Converter_destinationCurrency, "f")];
            const convertedAmount = parseFloat(__classPrivateFieldGet(this, _Converter_value, "f")) * conversionRate;
            __classPrivateFieldSet(this, _Converter_valueDestinationCurrency, convertedAmount.toString(), "f");
            __classPrivateFieldSet(this, _Converter_fee, conversionRate.toString(), "f");
        });
    }
    get currencyOfOrigin() {
        return __classPrivateFieldGet(this, _Converter_currencyOfOrigin, "f");
    }
    get destinationCurrency() {
        return __classPrivateFieldGet(this, _Converter_destinationCurrency, "f");
    }
    get value() {
        return __classPrivateFieldGet(this, _Converter_value, "f");
    }
    get valueDestinationCurrency() {
        return __classPrivateFieldGet(this, _Converter_valueDestinationCurrency, "f");
    }
    get fee() {
        return __classPrivateFieldGet(this, _Converter_fee, "f");
    }
    get currency_codes() {
        return __classPrivateFieldGet(this, _Converter_currency_codes, "f");
    }
}
_Converter_currencyOfOrigin = new WeakMap(), _Converter_destinationCurrency = new WeakMap(), _Converter_value = new WeakMap(), _Converter_valueDestinationCurrency = new WeakMap(), _Converter_fee = new WeakMap(), _Converter_currency_codes = new WeakMap();
exports.default = Converter;
