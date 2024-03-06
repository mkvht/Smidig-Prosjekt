/**
 * @swagger
 *  components:
 *    schemas:
 *      PaymentPlan:
 *        type: object
 *        properties:
 *          project_id:
 *            type: integer
 *          payment_plan_type:
 *            type: string
 *          payment_plan_method:
 *            type: string
 *          payment_plan_amount:
 *            type: integer
 */

/**
 * @swagger
 *  /api/paymentplan/plan/{id}:
 *  get:
 *    summary: This api returns all payment plans based on project_id
 *    description: Get all payment plans by project_id **REQUIRES USER TO BE LOGGED IN**
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
 *                $ref: '#/components/schemas/PaymentPlan'
 *      '500':
 *        description: A server error
 *      '401':
 *        description: Unauthorized
 */

/**
 * @swagger
 *  /api/paymentplan/active:
 *  get:
 *    summary: This api returns all active payment plans
 *    description: Get all active payment plans **REQUIRES USER TO BE LOGGED IN**
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
 *  /api/paymentplan/:
 *  post:
 *    summary: This api creates a new payment plan
 *    description: Create a new payment plan **REQUIRES USER TO BE LOGGED IN**
 *    requestBody:
 *      description: |
 *        **Project IDs** = 1, 2, 3, 4, 5, 6, 7, 8
 *        **Type objects** = annually, quarterly, monthly, single-payment
 *        **Type methods** =  company-card, company-invoice
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            items:
 *            $ref: '#/components/schemas/PaymentPlan'
 *    responses:
 *      '201':
 *        description: A successful response
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              items:
 *                $ref: '#/components/schemas/PaymentPlan'
 *      '500':
 *        description: A server error
 *      '401':
 *        description: Unauthorized
 *      '400':
 *        description: Bad request *fix your json request body*
 *
 */

/**
 * @swagger
 *  /api/paymentplan/inactive/{id}:
 *  patch:
 *    summary: This api updates a payment plan to be inactive
 *    description: Update a payment plan to be inactive **REQUIRES USER TO BE LOGGED IN**
 *    parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      description: The numeric id of the payment plan required
 *      schema:
 *        type: integer
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
 *  components:
 *    schemas:
 *      PaymentPlanPatch:
 *        type: object
 *        properties:
 *          payment_plan_method:
 *            type: string
 *          payment_plan_type:
 *            type: string
 *          payment_plan_amount:
 *            type: integer
 */

/**
 * @swagger
 *  /api/paymentplan/plan/{id}:
 *  patch:
 *    summary: This api updates a payment plan -does not work atm-
 *    description: Update a payment plan **REQUIRES USER TO BE LOGGED IN**
 *    parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      description: The numeric id of the payment plan required
 *      schema:
 *        type: integer
 *    requestBody:
 *      description: |
 *        **Type objects** = annually, quarterly, monthly, single-payment
 *        **Type methods** =  company-card, company-invoice
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: array
 *            items:
 *              $ref: '#/components/schemas/PaymentPlanPatch'
 *    responses:
 *      '200':
 *        description: A successful response
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              items:
 *                $ref: '#/components/schemas/PaymentPlanPatch'
 *      '500':
 *        description: A server error
 *      '401':
 *        description: Unauthorized
 *      '400':
 *        description: Bad request *fix your json request body*
 */
