const tradeService = require('../services/tradeService');

// Đặt cược
const placeBet = (req, res) => {
    const { userId } = req.params;
    const { amount, direction, pair } = req.body;

    if (!amount || !direction || !pair) {
        return res.status(400).json({ message: 'Vui lòng cung cấp đầy đủ thông tin.' });
    }

    const newTrade = tradeService.placeBet(userId, { amount, direction, pair });

    res.status(201).json({
        message: 'Đặt cược thành công!',
        trade: newTrade,
    });
};

// Lấy lịch sử giao dịch
const getTradeHistory = (req, res) => {
    const { userId } = req.params;

    const history = tradeService.getTradeHistory(userId);

    res.status(200).json({
        trades: history,
    });
};

// Thống kê giao dịch
const getTradeStats = (req, res) => {
    const { userId } = req.params;

    const stats = tradeService.getTradeStats(userId);

    res.status(200).json(stats);
};

module.exports = {
    placeBet,
    getTradeHistory,
    getTradeStats,
};
