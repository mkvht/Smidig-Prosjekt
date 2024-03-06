// --Swagger--

/**
 * @swagger
 *  components:
 *    schemas:
 *      Project:
 *        type: object
 *        properties:
 *          project_id:
 *            type: integer
 *          project_name:
 *            type: string
 *          project_description:
 *            type: string
 *          project_statement:
 *            type: string
 *          project_description_image_path:
 *            type: string
 *          project_what_we_do_text:
 *            type: string
 *          project_what_we_do_image_path:
 *            type: string
 *          project_how_it_works_text:
 *            type: string
 *          project_how_it_works_image_path:
 *            type: string
 *          project_why_text:
 *            type: string
 *          project_why_image_path:
 *            type: string
 *          project_promo_background_path:
 *            type: string
 *          project_your_impact_1_image_path:
 *            type: string
 *          project_your_impact_2_image_path:
 *            type: string
 *          project_your_impact_text:
 *            type: string
 */

/**
 * @swagger
 *  /api/project/:
 *  get:
 *    summary: This api returns all projects
 *    description: Get all projects
 *    responses:
 *      '200':
 *        description: A successful response
 *      '500':
 *        description: A server error
 */
// --Swagger--
/**
 * @swagger
 * /api/project/{project_id}:
 *  get:
 *    summary: This api returns 1 project based on project_id
 *    description: Get project by project_id
 *    parameters:
 *    - in: path
 *      name: project_id
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

// --Swagger--
/**
 * @swagger
 * /api/project/category/{id}:
 *  get:
 *    summary: This api returns all projects based on category_id
 *    description: Get all projects by category_id
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
