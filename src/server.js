import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({
    credentials: true,
}));

const PORT = process.env.PORT || 5040;

const start = () => {
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta: ${PORT}`);
    });
};

start();