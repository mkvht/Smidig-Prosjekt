// --Swagger--

/**
 * @swagger
 *  components:
 *    schemas:
 *      Consent:
 *        type: object
 *        properties:
 *          consent:
 *            type: string
 *          value:
 *            type: boolean
 */

/**
 * @swagger
 *  /api/consent/user/:
 *  get:
 *    summary: This api returns user consent
 *    description: Get user consent **REQUIRES USER TO BE LOGGED IN**
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
 *  /api/consent:
 *  put:
 *    summary: This api updates user consent
 *    description: Update user consent **REQUIRES USER TO BE LOGGED IN**
 *    requestBody:
 *      description: Consent objects = [consent_terms], [consent_privacy_policy], [consent_newsletter],[consent_logo_rights]
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            items:
 *            $ref: '#/components/schemas/Consent'
 *    responses:
 *      '200':
 *        description: A successful response
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Consent'
 *      '500':
 *        description: A server error
 *      '401':
 *        description: Unauthorized
 *      '400':
 *        description: A bad request *fix your json request body*
 */
