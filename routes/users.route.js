const usersController = require("../controllers/users.controller");

var express = require("express");

var router = express.Router();

router.post("/register", usersController.register);
/**
 * @swagger
 * /users/register:
 *   post:
 *      description: Used to register user
 *      tags:
 *          - users
 *      parameters:
 *          - in: body
 *            name: User
 *            description: User data
 *            schema:
 *              type: object
 *              required:
 *                 - firstName
 *                 - lastName
 *                 - emailId
 *                 - password
 *              properties:
 *                  firstName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: jayesh
 *                  lastName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: aherwal
 *                  emailId:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 100
 *                      example: aj@sample.com
 *                  password:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: abcd
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.post("/login", usersController.login);

/**
 * @swagger
 * /users/login:
 *   post:
 *      description: Used to login user
 *      tags:
 *          - users
 *      parameters:
 *          - in: body
 *            name: User
 *            description: User data
 *            schema:
 *              type: object
 *              required:
 *                 - emailId
 *                 - password
 *              properties:
 *                  emailId:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 100
 *                      example: jaa@sample.com
 *                  password:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: test
 *      responses:
 *          '200':
 *              description: Login successful
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

module.exports = router;
