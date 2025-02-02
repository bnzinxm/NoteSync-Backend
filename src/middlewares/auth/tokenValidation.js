import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const tokenValidation = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Acesso negado! Token não fornecido ou mal formatado." });
    }

    const token = authHeader.split(" ")[1]; // Pegando apenas o token, sem o "Bearer"

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        req.user = decoded;
        next();
    } catch (error) {
        console.error("Erro ao verificar token:", error.message);
        return res.status(403).json({ message: "Token inválido ou expirado!" });
    }
};

export default tokenValidation;