/**
 * @swagger
 *  components:
 *    schemas:
 *      PromoApiInput:
 *        type: object
 *        properties:
 *          userImpactId:
 *            type: integer
 *          size:
 *            type: string
 *          projectId:
 *            type: integer
 *          userId:
 */

/**
 * @swagger
 *  /api/promo:
 *  get:
 *    summary: This api returns an image
 *    description: Returns a promotional image based on the parameters. We couldnt figure out how to configure query parameters in Swagger. Please refer to the promo page on the website
 *    requestBody:
 *      required: true
 *      description: requires either a userImpactId or both userId and projectId
 *      parameters:
 *      - in: query
 *        name: projectId
 *        schema:
 *          type: integer
 *        description: The number of items to skip before starting to collect the result set
 *      - in: query
 *        name: userId
 *        schema:
 *          type: integer
 *        description: The numbers of items to return
 *    responses:
 *      '200':
 *        description: A successful response
 *      '500':
 *        description: A server error
 */
