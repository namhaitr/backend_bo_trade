// Giả lập cơ sở dữ liệu giao dịch
let trades = [
    {
        userId: 1,
        amount: 1000,
        direction: 'up',
        pair: 'BTC-USDT',
        timestamp: '2025-01-09T12:00:00Z',
    },
    {
        userId: 1,
        amount: 500,
        direction: 'down',
        pair: 'ETH-USDT',
        timestamp: '2025-01-10T14:30:00Z',
    },
];

// Đặt cược
const placeBet = (userId, { amount, direction, pair }) => {
    const newTrade = {
        userId,
        amount,
        direction,
        pair,
        timestamp: new Date().toISOString(),
    };
    trades.push(newTrade);
    return newTrade;
};

// Lấy lịch sử giao dịch
const getTradeHistory = (userId) => {
    return trades.filter((trade) => trade.userId === userId);
};

// Thống kê giao dịch
const getTradeStats = (userId) => {
    const userTrades = trades.filter((trade) => trade.userId === userId);

    const totalTrades = userTrades.length;
    const totalWins = userTrades.filter((trade) => trade.direction === 'up').length;  // Giả lập tỷ lệ thắng
    const totalLosses = totalTrades - totalWins;
    const winRate = totalTrades > 0 ? (totalWins / totalTrades) * 100 : 0;
    const totalProfit = totalWins * 1000 - totalLosses * 500; // Giả lập lợi nhuận

    return {
        totalTrades,
        totalWins,
        totalLosses,
        winRate,
        totalProfit,
    };
};

module.exports = {
    placeBet,
    getTradeHistory,
    getTradeStats,
};
