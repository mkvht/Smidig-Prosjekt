// --Swagger--

/**
 * @swagger
 * components:
 *   schemas:
 *     Follows:
 *       type: object
 *       properties:
 *         user_id:
 *           type: integer
 *         project_id:
 *           type: integer
 */

/**
 * @swagger
 * /api/follow/:
 *  get:
 *    summary: This api returns all id's of projects currently followed by the user
 *    description: Get all project_id's of followed projects **REQUIRES USER TO BE LOGGED IN**
 *    responses:
 *      '200':
 *        description: A successful response
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Follows'
 *      '401':
 *        description: User is not logged in
 *      '500':
 *        description: A server error
 */

/**
 * @swagger
 * /api/follow:
 *  delete:
 *    summary: This api unfollows a project based on project_id
 *    description: Unfollows a followed project **REQUIRES USER TO BE LOGGED IN**
 *    requestBody:
 *      required: true
 *      description: The numeric id of the project required
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              project_id:
 *                type: integer
 *                default: 1
 *    responses:
 *      '200':
 *        description: A successful response
 *      '401':
 *        description: User is not logged in
 *      '500':
 *        description: A server error
 */

/**
 * @swagger
 * /api/follow:
 *  post:
 *    summary: This api follows a project based on a project_id
 *    description: Follows a unfollowed project **REQUIRES USER TO BE LOGGED IN**
 *    requestBody:
 *      required: true
 *      description: The numeric id of the project required
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              project_id:
 *                type: integer
 *                default: 1
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400':
 *        description: Bad request (already following project)
 *      '401':
 *        description: User is not logged in
 *      '500':
 *        description: A server error
 */
