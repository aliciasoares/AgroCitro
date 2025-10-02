const express = require('express');
const {
    obterPlantios, incluirPlantio,
    obterIrrigacoes, incluirIrrigacao,
    obterColheitas, incluirColheita, obterTotalMudas
} = require('../repositorio/BancoDados'); 
const path = require('path');

const server = express();
server.use(express.json());
server.use(express.static(path.join(__dirname, '../public'))); // Caminho ajustado
const cors = require('cors');
server.use(cors());

server.get('/plantios', async (req, res) => {
    const plantios = await obterPlantios();
    res.json(plantios);
});

server.post('/postplantios', (req, res) => {
    //console.log(req.body);
    
    const { Data_plantio, Variedade, Quantidade_plantada, Localizacao } = req.body;
    
    // Validação do corpo da requisição
    if (!Data_plantio || !Variedade || !Quantidade_plantada || !Localizacao) {
        return res.status(400).json({ msg: 'Todos os campos são obrigatórios!' });
    }

    incluirPlantio(Data_plantio, Variedade, Quantidade_plantada, Localizacao)
        .then((resposta) => {
            if (resposta.affectedRows > 0) {
                res.json({ msg: 'Plantio cadastrado com sucesso' });
            } else {
                res.json({ msg: 'Falha no cadastro do plantio!' });
            }
        })
        .catch((error) => {
            console.error('Erro ao cadastrar plantio:', error);
            res.status(500).json({ msg: 'Erro interno no servidor' });
        });
});

server.get('/irrigacoes', async (req, res) => {
    const irrigacoes = await obterIrrigacoes();
    res.json(irrigacoes);
});

server.post('/postirrigacoes', (req, res) => {
    const { Horario_Inicial, Horario_Final, Plantio_idPlantio } = req.body;

    if (!Horario_Inicial || !Horario_Final || !Plantio_idPlantio) {
        return res.status(400).json({ msg: 'Todos os campos são obrigatórios!' });
    }

    incluirIrrigacao(Horario_Inicial, Horario_Final, Plantio_idPlantio)
        .then((resposta) => {
            if (resposta.affectedRows > 0) {
                res.json({ msg: 'Irrigação cadastrada com sucesso' });
            } else {
                res.json({ msg: 'Falha no cadastro da irrigação!' });
            }
        })
        .catch((error) => {
            console.error('Erro ao cadastrar irrigação:', error);
            res.status(500).json({ msg: 'Erro interno no servidor' });
        });
});

server.get('/colheitas', async (req, res) => {
    const colheitas = await obterColheitas();
    res.json(colheitas);
});

server.post('/postcolheitas', (req, res) => {
    const { Plantio_IdPlantio, Data_colheita, Quantidade_colhida, Qualidade } = req.body;

    if (!Plantio_IdPlantio || !Data_colheita || !Quantidade_colhida || !Qualidade) {
        return res.status(400).json({ msg: 'Todos os campos são obrigatórios!' });
    }

    incluirColheita(Plantio_IdPlantio, Data_colheita, Quantidade_colhida, Qualidade)
        .then((resposta) => {
            if (resposta.affectedRows > 0) {
                res.json({ msg: 'Colheita cadastrada com sucesso' });
            } else {
                res.json({ msg: 'Falha no cadastro da colheita!' });
            }
        })
        .catch((error) => {
            console.error('Erro ao cadastrar colheita:', error);
            res.status(500).json({ msg: 'Erro interno no servidor' });
        });
});
server.get('/total-mudas', async (req, res) => {
    const totalMudas = await obterTotalMudas();
    res.json({ total: totalMudas });
});


server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Servir o arquivo index.html
});

// Iniciar o servidor
server.listen(3000, '0.0.0.0', () => {
    console.log('Servidor Online');
});