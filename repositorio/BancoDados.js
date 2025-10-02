// Importando a variável para a biblioteca promise
const mysql = require('mysql2/promise');

// Parâmetros básicos para se conectar com o banco de dados
const connection = mysql.createPool({
    host: '10.111.9.158',
    user: 'dev1b',
    database: 'plantio', // nome do banco
    password: 'dev1b'
});

// plantio
async function obterPlantios() {
    const sql = 'SELECT * FROM Plantio';
    const [rows] = await connection.execute(sql);
    return rows;
}

async function incluirPlantio(Data_Plantio, Variedade, Quantidade_Plantada, Localizacao) {
    const sql = 'INSERT INTO Plantio (Data_Plantio, Variedade, Quantidade_Plantada, Localizacao) VALUES (?, ?, ?, ?)';
    const [result] = await connection.execute(sql, [
        Data_Plantio,
        Variedade,
        Quantidade_Plantada,
        Localizacao
    ]);
    return result;
}

// irrigacoes
async function obterIrrigacoes() {
    const sql = 'SELECT * FROM Irrigacao';
    const [rows] = await connection.execute(sql);
    return rows;
}

async function incluirIrrigacao(Horario_Inicial, Horario_Final, Plantio_idPlantio) {
    const sql = 'INSERT INTO Irrigacao (Horario_Inicial, Horario_Final, Plantio_idPlantio) VALUES (?, ?, ?)';
    const [result] = await connection.execute(sql, [Horario_Inicial, Horario_Final, Plantio_idPlantio]);
    return result;
}

// colheitas
async function obterColheitas() {
    const sql = 'SELECT * FROM Colheita';
    const [rows] = await connection.execute(sql);
    return rows;
}

async function incluirColheita(Plantio_IdPlantio, Data_colheita, Quantidade_colhida, Qualidade) {
    const sql = 'INSERT INTO Colheita (Plantio_IdPlantio, Data_colheita, Quantidade_colhida, Qualidade) VALUES (?, ?, ?, ?)';
    const [result] = await connection.execute(sql, [Plantio_IdPlantio, Data_colheita, Quantidade_colhida, Qualidade]);
    return result;
}

async function obterTotalMudas() {
    const sql = 'SELECT SUM(Quantidade_Plantada) AS TotalMudas FROM Plantio';
    const [rows] = await connection.execute(sql);
    return rows[0].TotalMudas || 0;
}

module.exports = {
    obterPlantios,
    incluirPlantio,

    obterIrrigacoes,
    incluirIrrigacao,
  
    obterColheitas,
    incluirColheita
};
