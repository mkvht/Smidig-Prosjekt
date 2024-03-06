// --Swagger--

/**
 * @swagger
 *  /api/testimonial:
 *  get:
 *    summary: This api all testimonials
 *    description: Get all testimonials
 *    responses:
 *      '200':
 *        description: A successful response
 *      '500':
 *        description: A server error
 */

/**
 * @swagger
 * /api/testimonial/{id}:
 *  get:
 *    summary: This api returns 1 testimonial based on testimonial_id
 *    description: Get testimonial by testimonial_id
 *    parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      description: The numeric id of the testimonial required
 *      schema:
 *        type: integer
 *    responses:
 *      '200':
 *        description: A successful response
 *      '500':
 *        description: A server error
 */
