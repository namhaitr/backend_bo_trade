const walletService = require('../services/walletService');

// Lấy thông tin ví
const getWallet = (req, res) => {
    const { userId } = req.params;
    const wallet = walletService.getWalletByUserId(userId);

    if (!wallet) {
        return res.status(404).json({ message: 'Không tìm thấy ví của người dùng.' });
    }

    res.status(200).json({ message: 'Lấy thông tin ví thành công!', wallet });
};

// Nạp tiền vào ví chính
const deposit = (req, res) => {
    const { userId } = req.params;
    const { amount } = req.body;

    if (!amount || amount <= 0) {
        return res.status(400).json({ message: 'Số tiền không hợp lệ.' });
    }

    const result = walletService.depositToWallet(userId, amount);

    if (!result.success) {
        return res.status(400).json({ message: result.message });
    }

    res.status(200).json({ message: 'Nạp tiền thành công!', wallet: result.wallet });
};

// Rút tiền từ ví chính
const withdraw = (req, res) => {
    const { userId } = req.params;
    const { amount } = req.body;

    if (!amount || amount <= 0) {
        return res.status(400).json({ message: 'Số tiền không hợp lệ.' });
    }

    const result = walletService.withdrawFromWallet(userId, amount);

    if (!result.success) {
        return res.status(400).json({ message: result.message });
    }

    res.status(200).json({ message: 'Rút tiền thành công!', wallet: result.wallet });
};

// Chuyển tiền từ ví chính sang ví giao dịch
const transfer = (req, res) => {
    const { userId } = req.params;
    const { amount } = req.body;

    if (!amount || amount <= 0) {
        return res.status(400).json({ message: 'Số tiền không hợp lệ.' });
    }

    const result = walletService.transferToTradingWallet(userId, amount);

    if (!result.success) {
        return res.status(400).json({ message: result.message });
    }

    res.status(200).json({ message: 'Chuyển tiền thành công!', wallet: result.wallet });
};

module.exports = { getWallet, deposit, withdraw, transfer };
