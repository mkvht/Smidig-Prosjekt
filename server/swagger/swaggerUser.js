// --Swagger--

/**
 * @swagger
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        properties:
 *          user_company_name:
 *            type: string
 *          user_organization_number:
 *            type: integer
 *          user_email:
 *            type: string
 *          user_address:
 *            type: string
 *          user_city:
 *            type: string
 *          user_zip_code:
 *            type: string
 *          user_country:
 *            type: string
 *          user_phone:
 *            type: integer
 */

/**
 * @swagger
 *  /api/user/:
 *  get:
 *    summary: This api returns user information
 *    description: Get user information
 *    responses:
 *      '200':
 *        description: A successful response
 *      '500':
 *        description: A server error
 *      '401':
 *        description: Unauthorized
 */

/**
 * @swagger
 * /api/user/:
 *  patch:
 *    summary: This api updates user information
 *    description: Update user information
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            items:
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      '200':
 *        description: A successful response
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/User'
 *      '500':
 *        description: A server error
 *      '401':
 *        description: Unauthorized
 *
 */
