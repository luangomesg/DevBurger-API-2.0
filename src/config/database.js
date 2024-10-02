module.exports = {
  dialect: 'postgres',
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  username: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  url: process.env.PG_URL,
  define: {
    timespamps: true,
    underscored: true,
    underscoredAll: true,
  },
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // se necessário, dependendo da configuração de SSL
    },
  },
};
