/**
 * @swagger
 * tags:
 *   name: Wallets
 *   description: Các API liên quan đến ví của người dùng
 */

const express = require('express');
const router = express.Router();
const walletController = require('../controllers/walletController');

/**
 * @swagger
 * /wallets/{userId}:
 *   get:
 *     summary: Lấy thông tin ví của người dùng
 *     tags: [Wallets]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID của người dùng
 *     responses:
 *       200:
 *         description: Thông tin ví của người dùng
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 wallet:
 *                   type: object
 *                   properties:
 *                     mainWallet:
 *                       type: number
 *                     tradingWallet:
 *                       type: number
 */
router.get('/:userId', walletController.getWallet);

/**
 * @swagger
 * /wallets/{userId}/deposit:
 *   post:
 *     summary: Nạp tiền vào ví chính
 *     tags: [Wallets]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID của người dùng
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: number
 *                 example: 1000
 *     responses:
 *       200:
 *         description: Nạp tiền thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 wallet:
 *                   type: object
 */
router.post('/:userId/deposit', walletController.deposit);

/**
 * @swagger
 * /wallets/{userId}/withdraw:
 *   post:
 *     summary: Rút tiền từ ví chính
 *     tags: [Wallets]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID của người dùng
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: number
 *                 example: 500
 *     responses:
 *       200:
 *         description: Rút tiền thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 wallet:
 *                   type: object
 */
router.post('/:userId/withdraw', walletController.withdraw);

/**
 * @swagger
 * /wallets/{userId}/transfer:
 *   post:
 *     summary: Chuyển tiền từ ví chính sang ví giao dịch
 *     tags: [Wallets]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID của người dùng
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: number
 *                 example: 200
 *     responses:
 *       200:
 *         description: Chuyển tiền thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 wallet:
 *                   type: object
 */
router.post('/:userId/transfer', walletController.transfer);

module.exports = router;
