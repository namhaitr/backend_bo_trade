const express = require('express');
const router = express.Router();
const { getUsers, addUser, updateUser, deleteUser, login } = require('../controllers/authController');

/**
 * @swagger
 * /auth/users:
 *   get:
 *     summary: Lấy danh sách người dùng
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   username:
 *                     type: string
 *                     example: trader1
 *                   role:
 *                     type: string
 *                     example: Trader
 */
router.get('/users', getUsers);

/**
 * @swagger
 * /auth/users:
 *   post:
 *     summary: Thêm người dùng mới
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: newUser
 *               password:
 *                 type: string
 *                 example: newPass
 *               role:
 *                 type: string
 *                 example: Support
 *               description:
 *                 type: string
 *                 example: Người dùng mới
 *     responses:
 *       201:
 *         description: Thêm người dùng thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Thêm người dùng thành công!
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 5
 *                     username:
 *                       type: string
 *                       example: newUser
 *                     role:
 *                       type: string
 *                       example: Support
 */
router.post('/users', addUser);

/**
 * @swagger
 * /auth/users/{id}:
 *   put:
 *     summary: Cập nhật thông tin người dùng
 *     tags: [Auth]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID của người dùng cần cập nhật
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: updatedUser
 *               password:
 *                 type: string
 *                 example: updatedPass
 *               role:
 *                 type: string
 *                 example: Admin
 *               description:
 *                 type: string
 *                 example: Cập nhật mô tả
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Cập nhật người dùng thành công!
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     username:
 *                       type: string
 *                       example: updatedUser
 */
router.put('/users/:id', updateUser);

/**
 * @swagger
 * /auth/users/{id}:
 *   delete:
 *     summary: Xóa người dùng
 *     tags: [Auth]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID của người dùng cần xóa
 *     responses:
 *       200:
 *         description: Xóa thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Xóa người dùng thành công!
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     username:
 *                       type: string
 *                       example: deletedUser
 */
router.delete('/users/:id', deleteUser);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Đăng nhập
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: Tên đăng nhập
 *                 example: trader1
 *               password:
 *                 type: string
 *                 description: Mật khẩu
 *                 example: 123456
 *     responses:
 *       200:
 *         description: Đăng nhập thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Đăng nhập thành công!
 *                 user:
 *                   type: object
 *                   properties:
 *                     username:
 *                       type: string
 *                       example: trader1
 *                     role:
 *                       type: string
 *                       example: Trader
 *       401:
 *         description: Đăng nhập thất bại
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Tên đăng nhập hoặc mật khẩu không đúng.
 */
router.post('/login', login);

module.exports = router;
