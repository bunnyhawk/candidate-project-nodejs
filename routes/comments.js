const express = require('express');
const commentService = require('../services/comments');

const router = new express.Router();

/**
 * @swagger
 *
 * components:
 *  parameters:
 *     commentId:
 *       name: comment id
 *       description: The comment id number.
 *       in: path
 *       required: true
 *       schema:
 *         type: string
 *
 *  schemas:
 *    Comment:
 *      type: object
 *      properties:
 *        userId:
 *          type: integer
 *        id:
 *          type: integer
 *        name:
 *          type: string
 *        email:
 *          type: string
 *        body:
 *          type: string
 *    CommentResponse:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/Comment'
 */

/**
 * @swagger
 *
 * /comments/post/:postId:
 *  get:
 *    summary: Get comments by post ID
 *    description: Retrieve comments by a post ID.
 *    tags:
 *      - comments
 *    parameters:
 *      - $ref: '#/components/parameters/postId'
 *    responses:
 *      200:
 *        description: OK
 *        content:
 *          application/json; charset=UTF-8:
 *            schema:
 *             $ref: '#/components/schemas/CommentResponse'
 *      400:
 *        $ref: '#/components/responses/BadRequest'
 *      401:
 *        $ref: '#/components/responses/Unauthorized'
 *      403:
 *        $ref: '#/components/responses/Forbidden'
 *      404:
 *        $ref: '#/components/responses/NotFound'
 *    security:
 *      - bearerAuth: []
 */
router.get('/post/:postId', commentService.getCommentsByPostId);

/**
 * @swagger
 *
 * /comments/:commentId:
 *  delete:
 *    summary: Delete user
 *    description: Remove a user by their ID.
 *    tags:
 *      - comments
 *    parameters:
 *      - $ref: '#/components/parameters/commentId'
 *    responses:
 *      200:
 *        description: OK
 *        content:
 *          application/json; charset=UTF-8:
 *            schema:
 *             $ref: '#/components/schemas/Success'
 *      400:
 *        $ref: '#/components/responses/BadRequest'
 *      401:
 *        $ref: '#/components/responses/Unauthorized'
 *      403:
 *        $ref: '#/components/responses/Forbidden'
 *      404:
 *        $ref: '#/components/responses/NotFound'
 *    security:
 *      - bearerAuth: []
 */
router.delete('/:commentId', commentService.deleteCommentById);

module.exports = router;
