"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const js_yaml_1 = __importDefault(require("js-yaml"));
const node_fs_1 = __importDefault(require("node:fs"));
const inputFile = 'spec.yaml';
const outputFile = 'output.json';
const obj = js_yaml_1.default.load(node_fs_1.default.readFileSync(inputFile, { encoding: 'utf-8' }));
node_fs_1.default.writeFileSync(outputFile, JSON.stringify(obj, null, 2));
// run node convert.js
