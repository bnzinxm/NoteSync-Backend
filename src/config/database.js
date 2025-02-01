import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: ""
})

function connectToSchema(schemaName) {
    if (db) {
        db.end();
    }

    db.config.database = schemaName;


    db.connect((err) => {
        if (err) {
            console.error("Erro ao conectar com o bando de dados: " + err.stack);
            process.exit(1);
        }
        console.log("Conectado ao banco de dados" + schemaName + "com sucesso!");
    });

    return db;
};

// db.connectToSchema("schemaName");

export default db;