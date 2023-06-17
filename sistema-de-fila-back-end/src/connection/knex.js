const knex = require("knex")({
    client: "postgres",
    connection: {
        host: "127.0.0.1",
        port: 5432,
        user: "postgres",
        password: "postgres",
        database: "fila_hospital",
    },
    pool: { min: 0, max: 7 },
});

module.exports = { knex };
