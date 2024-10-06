"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// For Js-doc
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const PORT = process.env.PORT || '3001';
const options = {
    definition: {
        openapi: '3.1.0',
        info: {
            title: 'Backend Express API with Swagger',
            version: '0.1.0',
            description: 'This is a simple template API application made with Express and documented with Swagger',
            license: {
                name: 'MIT',
                url: 'https://spdx.org/licenses/MIT.html'
            },
            contact: {
                name: 'Vladimir Bavtenko',
                url: 'https://bavtenko.ru',
                email: 'vladimir@bavtenko.ru'
            }
        },
        servers: [
            {
                url: `http://localhost:${PORT}`
                // url: 'http://localhost:3001'
            }
        ]
    },
    // apis: ['./server.js']
    apis: ['./routes/*.js', './server.js']
};
const specs = (0, swagger_jsdoc_1.default)(options);
exports.default = specs;
// JS-Doc examples
/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - finished
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The title of your book
 *         author:
 *           type: string
 *           description: The book author
 *         finished:
 *           type: boolean
 *           description: Whether you have finished reading the book
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the book was added
 *       example:
 *         id: d5fE_asz
 *         title: The New Turing Omnibus
 *         author: Alexander K. Dewdney
 *         finished: false
 *         createdAt: 2020-03-10T04:05:06.157Z
 */
/**
 * @swagger
 * tags:
 *   name: Books
 *   description: The books managing API
 * /books:
 *   get:
 *     summary: Lists all the books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 *   post:
 *     summary: Create a new book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       500:
 *         description: Some server error
 * /books/{id}:
 *   get:
 *     summary: Get the book by id
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 *     responses:
 *       200:
 *         description: The book response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       404:
 *         description: The book was not found
 *   put:
 *    summary: Update the book by the id
 *    tags: [Books]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The book id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Book'
 *    responses:
 *      200:
 *        description: The book was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Book'
 *      404:
 *        description: The book was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the book by id
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 *
 *     responses:
 *       200:
 *         description: The book was deleted
 *       404:
 *         description: The book was not found
 */
//
//
//
/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - finished
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the product
 *         title:
 *           type: string
 *           description: The title of your product
 *           minLength: 1
 *           maxLength: 250
 *         price:
 *            type: number
 *            description: price number > 0
 *            minimum: 0
 *            exclusiveMinimum: true
 *         author:
 *           type: string
 *           description: The product author
 *         finished:
 *           type: boolean
 *           description: Whether you have finished reading the product
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the product was added
 *       example:
 *         id: d5fE_asz
 *         title: The New Turing Omnibus
 *         author: Alexander K. Dewdney
 *         finished: false
 *         createdAt: 2020-03-10T04:05:06.157Z
 */
/**
 * @swagger
 * tags:
 *   name: Products
 *   description: The products managing API
 * /products:
 *   get:
 *     tags: [Products]
 *     summary: Returns a list of users.
 *     description: Optional extended description in CommonMark or HTML.
 *     responses:
 *       200:
 *         description: A array of products
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: The created product.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       500:
 *         description: Some server error
 *
 */
//
//
//
/**
 * @swagger
 * components:
 *   schemas:
 *     Main:
 *       type: string
 *       example: The New Turing Omnibus
 */
/**
 /**
 * @swagger
 * tags:
 *   name: Main
 *   description: The main API route
 * /:
 *   get:
 *     tags: [Main]
 *     summary: Return string.
 *     description: Optional extended description in CommonMark or HTML.
 *     responses:
 *       200:
 *         description: Some string
 *         content:
 *           text/plain:
 *             schema:
 *               $ref: '#/components/schemas/Main'
 *
 */
