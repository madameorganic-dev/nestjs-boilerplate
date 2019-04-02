"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const constants_1 = require("../constants");
exports.databaseProviders = [
    {
        provide: constants_1.DB_PROVIDER,
        useFactory: () => __awaiter(this, void 0, void 0, function* () {
            mongoose.Promise = global.Promise;
            return yield mongoose.connect("mongodb+srv://rwadmin:6cfzUQv4jYcWsb7@cluster0-8wrsa.mongodb.net/test?retryWrites=true");
        })
    }
];
//# sourceMappingURL=database.providers.js.map