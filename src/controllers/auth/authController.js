import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../../config/database.js';

export const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const [userExists] = await db.query("SELECT * FROM users WHERE email = ?", [email]);

        if (!userExists.length === 0) {
            return res.status(404).json({ message: "O email já está em uso." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await db.query("INSERT INTO users (username, email, password) VALUES (?, ?, ?)", [
            username, email, hashedPassword
        ]);

        res.status(201).json({ message: "Usuário registrado com sucesso!" });
    } catch (err) {
        console.error("Erro no registro: " + err);
        res.status(500).json({ message: "Erro ao registrar usuário.", err});
    }
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
        const user = rows[0];

        if (!user) {
            return res.status(404).json({ message: "Usuário não encontrado." });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Senha incorreta!" });
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '3d' });

        res.status(200).json({
            message: "Login realizado com sucesso!",
            token
        })
    } catch (err) {
        console.error("Erro ao logar usuário: " + err)
        res.status(500).json({ message: "Erro ao logar usuário.", err});
    }
}