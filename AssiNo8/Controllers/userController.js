let users = [
    { id: 1, name: "Ali", email: "ali@email.com" },
    { id: 2, name: "Ahmed", email: "ahmed@email.com" }
];

const getUsers = (req, res) => {
    res.json(users);
};

const createUser = (req, res) => {

    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: "Name and email are required" });
    }

    const newUser = {
        id: Date.now(),
        name,
        email
    };

    users.push(newUser);

    res.status(201).json(newUser);
};

const updateUser = (req, res) => {

    const id = parseInt(req.params.id);
    const { name, email } = req.body;

    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    user.name = name || user.name;
    user.email = email || user.email;

    res.json(user);
};

const deleteUser = (req, res) => {

    const id = parseInt(req.params.id);

    users = users.filter(user => user.id !== id);

    res.json({ message: "User deleted successfully" });
};

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
};