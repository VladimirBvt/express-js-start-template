"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.send('это пользовательский маршрут'); // http://localhost:3000/user
});
router.get('/101', (req, res) => {
    res.send('это пользовательский маршрут 101'); //  http://localhost:3000/user/101
});
router.get('/102', (req, res) => {
    res.send('это пользовательский маршрут 102'); // http://localhost:3000/user/102
});
exports.default = router;
