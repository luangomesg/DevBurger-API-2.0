module.exports = {
  development: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    host: process.env.POSTGRES_HOST,
    url: 'postgresql://devburger_api_d7u3_user:SdePiZ0LuUa3Q69V0Lyx5L8BFVDnqXgK@dpg-cru95ag8fa8c73cafbk0-a.oregon-postgres.render.com/devburger_api_d7u3',
    dialect: 'postgres',
    port: 5432,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // se necessário, dependendo da configuração de SSL
      },
    },
  },
  test: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    host: process.env.POSTGRES_HOST,
    url: 'postgresql://devburger_api_d7u3_user:SdePiZ0LuUa3Q69V0Lyx5L8BFVDnqXgK@dpg-cru95ag8fa8c73cafbk0-a.oregon-postgres.render.com/devburger_api_d7u3',
    dialect: 'postgres',
    port: 5432,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
  production: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres',
    url: 'postgresql://devburger_api_d7u3_user:SdePiZ0LuUa3Q69V0Lyx5L8BFVDnqXgK@dpg-cru95ag8fa8c73cafbk0-a.oregon-postgres.render.com/devburger_api_d7u3',
    port: 5432,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
