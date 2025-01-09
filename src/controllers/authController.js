let users = [
    {
        id: 1,
        username: 'trader1',
        password: '123456',
        role: 'Trader',
        description: 'Nhà Đầu Tư Cá Nhân'
    },
    {
        id: 2,
        username: 'proTrader',
        password: 'abcdef',
        role: 'Trader',
        description: 'Trader Chuyên Nghiệp'
    },
    {
        id: 3,
        username: 'admin',
        password: 'admin123',
        role: 'Admin',
        description: 'Quản trị viên'
    },
    {
        id: 4,
        username: 'support1',
        password: 'support123',
        role: 'Support',
        description: 'Hỗ trợ khách hàng về tài khoản và giao dịch'
    }
];

// Lấy danh sách user
const getUsers = (req, res) => {
    res.status(200).json(users);
};

// Thêm user mới
const addUser = (req, res) => {
    const { username, password, role, description } = req.body;

    if (!username || !password || !role) {
        return res.status(400).json({ message: 'Vui lòng cung cấp đầy đủ thông tin.' });
    }

    const newUser = {
        id: users.length + 1,
        username,
        password,
        role,
        description: description || ''
    };

    users.push(newUser);
    res.status(201).json({ message: 'Thêm người dùng thành công!', user: newUser });
};

// Sửa thông tin user
const updateUser = (req, res) => {
    const { id } = req.params;
    const { username, password, role, description } = req.body;

    const user = users.find((u) => u.id === parseInt(id));
    if (!user) {
        return res.status(404).json({ message: 'Không tìm thấy người dùng.' });
    }

    user.username = username || user.username;
    user.password = password || user.password;
    user.role = role || user.role;
    user.description = description || user.description;

    res.status(200).json({ message: 'Cập nhật người dùng thành công!', user });
};

// Xóa user
const deleteUser = (req, res) => {
    const { id } = req.params;

    const userIndex = users.findIndex((u) => u.id === parseInt(id));
    if (userIndex === -1) {
        return res.status(404).json({ message: 'Không tìm thấy người dùng.' });
    }

    const deletedUser = users.splice(userIndex, 1);
    res.status(200).json({ message: 'Xóa người dùng thành công!', user: deletedUser[0] });
};

// Đăng nhập
const login = (req, res) => {
    const { username, password } = req.body;

    const user = users.find((u) => u.username === username && u.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Tên đăng nhập hoặc mật khẩu không đúng.' });
    }

    res.status(200).json({
        message: 'Đăng nhập thành công!',
        user: {
            username: user.username,
            role: user.role,
            description: user.description
        }
    });
};

module.exports = { getUsers, addUser, updateUser, deleteUser, login };
