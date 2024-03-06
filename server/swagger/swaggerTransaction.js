// --Swagger--

/**
 * @swagger
 *  components:
 *    schemas:
 *      Transaction:
 *        type: object
 *        properties:
 *          transaction_id:
 *            type: integer
 *          user_id:
 *            type: integer
 *          project_id:
 *            type: integer
 *          transaction_amount:
 *            type: integer
 *          transaction_date:
 *            type: string
 *          transaction_type:
 *            type: string
 */

/**
 * @swagger
 *  /api/transaction:
 *  get:
 *    summary: This api returns transactions for a user
 *    description: This api returns transactions for the user who does the request **REQUIRES USER TO BE LOGGED IN**
 *    responses:
 *      '200':
 *        description: A successful response
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Transaction'
 *      '500':
 *        description: A server error
 *      '401':
 *        description: Unauthorized
 */

/**
 * @swagger
 *  /api/transaction/project/{id}:
 *  get:
 *    summary: This api returns transactions for a user based on project id
 *    description: This api returns transactions for the user who does the request based on project id **REQUIRES USER TO BE LOGGED IN**
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
 *                $ref: '#/components/schemas/Transaction'
 *      '500':
 *        description: A server error
 *      '401':
 *        description: Unauthorized
 */

/**
 * @swagger
 *  /api/transaction/statistics:
 *  get:
 *    summary: Returns general statistics about transactions
 *    description: Returns general statistics about transactions. Used on the frontpage
 *    responses:
 *      '200':
 *        description: A successful response
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Transaction'
 *      '500':
 *        description: A server error
 *      '401':
 *        description: Unauthorized
 */

/**
 * @swagger
 *  /api/transaction/projectDonated/{project_id}:
 *  get:
 *    summary: Returns info about a users donations to a project
 *    description: This api returns how much a user har donated to a project in total, last year and last two years  **REQUIRES USER TO BE LOGGED IN**
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
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Transaction'
 *      '500':
 *        description: A server error
 *      '401':
 *        description: Unauthorized
 */

/**
 * @swagger
 *  /api/transaction/all/{project_id}:
 *  get:
 *    summary: This api returns information about all transactions for a project
 *    description: This api returns information about all transactions for a project. Used on project page
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
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Transaction'
 *      '500':
 *        description: A server error
 *      '401':
 *        description: Unauthorized
 */
/**
 * @swagger
 *  /api/transaction/donated:
 *  get:
 *    summary: Returns projects a user has donated to
 *    description: This api returns all projects that the user has donated to  **REQUIRES USER TO BE LOGGED IN**
 *    responses:
 *      '200':
 *        description: A successful response
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Transaction'
 *      '500':
 *        description: A server error
 *      '401':
 *        description: Unauthorized
 */
