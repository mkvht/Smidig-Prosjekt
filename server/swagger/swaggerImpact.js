// --Swagger--

/**
 * @swagger
 *  components:
 *    schemas:
 *      Impact:
 *        type: object
 *        properties:
 *          impact_id:
 *            type: integer
 *          project_id:
 *            type: integer
 *          impact_cost:
 *            type: integer
 *          impact_description:
 *            type: string
 *          impact_description_past_tense:
 *            type: string
 *          impact_image_path:
 *            type: string
 */

/**
 * @swagger
 *  /api/impact/:
 *  get:
 *    summary: This api returns all impacts
 *    description: Get all impacts
 *    responses:
 *      '200':
 *        description: A successful response
 *      '500':
 *        description: A server error
 */

/**
 * @swagger
 *  /api/impact/project/{id}:
 *  get:
 *    summary: This api returns all impacts based on project_id
 *    description: Get all impacts by project_id
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
 *      '500':
 *        description: A server error
 */
