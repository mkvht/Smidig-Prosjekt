// --Swagger--

/**
 * @swagger
 *  /api/support/{project_id}:
 *  get:
 *    summary: This api returns all supporters based on project_id
 *    description: Get all supporters by project_id
 *    parameters:
 *    - in: path
 *      name: project_id
 *      required: true
 *      description: The numeric id of the project required
 *    responses:
 *      '200':
 *        description: A successful response
 *      '500':
 *        description: A server error
 */
