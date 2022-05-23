const db = require('../db');

module.exports = {

    pesquisar: (limit, offset) => {
        return new Promise((contatos, rejeitado) => {

            db.query(`SELECT * FROM agendas ORDER BY id DESC LIMIT ${limit} OFFSET ${offset}`, (error, results) => {
                if (error) { rejeitado(error); return; }
                contatos(results);
            })
        })
    },

    count: () => {
        return new Promise((quantidade, rejeitado) => {

            db.query(`SELECT COUNT(*) FROM agendas`, (error, results) => {
                console.log(results[0]["COUNT(*)"])
                if (error) { rejeitado(error); return; }
                quantidade(results[0]["COUNT(*)"]);
            })
        })

    },


    buscarUm: () => {
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM agendas WHERE id = ?', (error, results) => {
                if (error) { rejeitado(error); return; }
                if (results.length > 0) {
                    aceito(results[0]);
                } else {
                    aceito(false);
                }
            });
        });
    },

    inserir: (telefone, email, nome) => {
        return new Promise((aceito, rejeitado) => {

            db.query('INSERT INTO agendas (telefone, email, nome) VALUES (?, ?, ?)',
                [telefone, email, nome],
                (error, results) => {
                    if (error) { rejeitado(error); return; }
                    aceito(results.insertCodigo);
                }
            );
        });
    },


    alterar: (nome, telefone, email, telefoneIdentificador) => {
        return new Promise((aceito, rejeitado) => {

            db.query(`UPDATE agendas SET telefone = "${telefone}", nome = "${nome}", email = "${email}" WHERE telefone = ${telefoneIdentificador}`,
                (error, results) => {
                    if (error) { rejeitado(error); return; }
                    aceito(results);
                }
            );
        });
    },

    excluir: (telefone) => {
        return new Promise((aceito, rejeitado) => {

            db.query(`DELETE FROM agendas WHERE telefone = ${telefone}`, (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    }
};