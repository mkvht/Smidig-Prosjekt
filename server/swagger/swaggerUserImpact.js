// --Swagger--

/**
 * @swagger
 * components:
 *   schemas:
 *     UserImpact:
 *       type: object
 *       properties:
 *         user_impact_id:
 *           type: integer
 *         user_impact_amount:
 *           type: integer
 *         project_name:
 *           type: string
 *         project_id:
 *           type: integer
 *         impact_description_past_tense:
 *           type: string
 *         impact_image_path:
 *           type: string
 *         impact_cost:
 *           type: integer
 *         impact_impact_text:
 *           type: string
 *     UserImpact2:
 *       type: object
 *       properties:
 *         user_impact_id:
 *           type: integer
 *         project_id:
 *           type: integer
 *         impact_name:
 *           type: string
 */

/**
 * @swagger
 * /api/userimpact/all:
 *  get:
 *    summary: This api returns all UserImpact data of the logged in user
 *    description: Get all UserImpact data **REQUIRES USER TO BE LOGGED IN**
 *    responses:
 *      '200':
 *        description: A successful response
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/UserImpact'
 *      '401':
 *        description: User is not logged in
 *      '500':
 *        description: A server error
 */

/**
 * @swagger
 * /api/userimpact/project/{id}:
 *  get:
 *    summary: This api returns all UserImpact data of the logged in user in a specific project
 *    description: Get all UserImpact data for a project **REQUIRES USER TO BE LOGGED IN**
 *    parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      description: The numeric id of the project required
 *      schema:
 *        type: integer
 *    responses:
 *      '200':
 *        description: A successful response
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/UserImpact2'
 *      '401':
 *        description: User is not logged in
 *      '500':
 *        description: A server error
 */
