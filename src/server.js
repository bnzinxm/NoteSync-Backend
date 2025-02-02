import express from 'express';
import cors from 'cors';
import router from './routes/auth/authRoutes.js';

const app = express();

app.use(cors({
    credentials: true,
}));
app.use(express.json());

app.get("/api", (res) => {
    res.json("Servidor rodando aqui!");
})

app.use("/api/auth", router);

const PORT = process.env.PORT || 5040;

const start = () => {
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta: ${PORT}`);
    });
};

start();