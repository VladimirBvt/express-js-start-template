"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.send('это маршрут продуктов'); // http://localhost:3000/products
});
router.get('/101', (req, res) => {
    res.send('это маршрут продукта 101'); // http://localhost:3000/product/101
});
router.get('/102', (req, res) => {
    res.send('это маршрут продукта 102'); // http://localhost:3000/product/102
});
exports.default = router;
