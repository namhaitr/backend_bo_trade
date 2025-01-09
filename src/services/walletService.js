let wallets = [
    { userId: 1, mainWallet: 1000, tradingWallet: 200 },
    { userId: 2, mainWallet: 5000, tradingWallet: 1500 },
    { userId: 3, mainWallet: 10000, tradingWallet: 0 },
    { userId: 4, mainWallet: 0, tradingWallet: 100 }
];

const getWalletByUserId = (userId) => {
    return wallets.find(wallet => wallet.userId === parseInt(userId));
};

const depositToWallet = (userId, amount) => {
    const wallet = getWalletByUserId(userId);
    if (!wallet) return { success: false, message: 'Không tìm thấy ví của người dùng.' };

    wallet.mainWallet += amount;
    return { success: true, wallet };
};

const withdrawFromWallet = (userId, amount) => {
    const wallet = getWalletByUserId(userId);
    if (!wallet) return { success: false, message: 'Không tìm thấy ví của người dùng.' };

    if (wallet.mainWallet < amount) {
        return { success: false, message: 'Số dư không đủ để rút tiền.' };
    }

    wallet.mainWallet -= amount;
    return { success: true, wallet };
};

const transferToTradingWallet = (userId, amount) => {
    const wallet = getWalletByUserId(userId);
    if (!wallet) return { success: false, message: 'Không tìm thấy ví của người dùng.' };

    if (wallet.mainWallet < amount) {
        return { success: false, message: 'Số dư không đủ để chuyển tiền.' };
    }

    wallet.mainWallet -= amount;
    wallet.tradingWallet += amount;
    return { success: true, wallet };
};

module.exports = { getWalletByUserId, depositToWallet, withdrawFromWallet, transferToTradingWallet };
