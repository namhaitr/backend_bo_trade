const express = require('express');
const router = express.Router();
const tradeController = require('../controllers/tradeController');

/**
 * @swagger
 * /trades/{userId}/bet:
 *   post:
 *     summary: Đặt cược tăng/gảm
 *     tags: [Trades]
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
 *               direction:
 *                 type: string
 *                 enum: [up, down]
 *                 description: "Tăng (up) hoặc Giảm (down)"
 *               pair:
 *                 type: string
 *                 example: "BTC-USDT"
 *               timestamp:
 *                 type: string
 *                 example: "2025-01-09T12:00:00Z"
 *     responses:
 *       200:
 *         description: Đặt cược thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 trade:
 *                   type: object
 *                   properties:
 *                     userId:
 *                       type: integer
 *                     amount:
 *                       type: number
 *                     direction:
 *                       type: string
 *                     pair:
 *                       type: string
 *                     timestamp:
 *                       type: string
 */
router.post('/:userId/bet', tradeController.placeBet);

/**
 * @swagger
 * /trades/{userId}/history:
 *   get:
 *     summary: Xem lịch sử giao dịch của người dùng
 *     tags: [Trades]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID của người dùng
 *     responses:
 *       200:
 *         description: Lịch sử giao dịch của người dùng
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 trades:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       amount:
 *                         type: number
 *                       direction:
 *                         type: string
 *                       pair:
 *                         type: string
 *                       timestamp:
 *                         type: string
 */
router.get('/:userId/history', tradeController.getTradeHistory);

/**
 * @swagger
 * /trades/{userId}/stats:
 *   get:
 *     summary: Thống kê giao dịch của người dùng
 *     tags: [Trades]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID của người dùng
 *     responses:
 *       200:
 *         description: Thống kê giao dịch của người dùng
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalTrades:
 *                   type: integer
 *                 totalWins:
 *                   type: integer
 *                 totalLosses:
 *                   type: integer
 *                 winRate:
 *                   type: number
 *                   example: 75
 *                 totalProfit:
 *                   type: number
 *                   example: 5000
 */
router.get('/:userId/stats', tradeController.getTradeStats);

module.exports = router;
