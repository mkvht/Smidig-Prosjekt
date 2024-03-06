// --Swagger--

/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       properties:
 *         category_id:
 *           type: integer
 *         category_name:
 *           type: string
 */

/**
 * @swagger
 * /api/category/:
 *  get:
 *    summary: This api returns all categories
 *    description: Get all categories
 *    responses:
 *      '200':
 *        description: A successful response
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Category'
 *      '500':
 *        description: A server error
 */
