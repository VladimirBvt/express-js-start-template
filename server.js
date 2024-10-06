"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const users_1 = __importDefault(require("./routes/users"));
const products_1 = __importDefault(require("./routes/products"));
const output_json_1 = __importDefault(require("./docs/output.json"));
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT) || 3001;
app.get('/', (req, res) => {
    res.send('Welcome to typescript backend!!');
});
app.use('/users', users_1.default);
app.use('/products', products_1.default);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(output_json_1.default));
app.listen(PORT, () => {
    console.log('The application is listening ' + 'on port http://localhost:' + PORT);
});
