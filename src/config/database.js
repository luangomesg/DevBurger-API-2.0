module.exports = {
  development: {
    url: 'postgresql://devburger_api_d7u3_user:SdePiZ0LuUa3Q69V0Lyx5L8BFVDnqXgK@dpg-cru95ag8fa8c73cafbk0-a.oregon-postgres.render.com/devburger_api_d7u3', // Use a URL completa
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
  test: {
    url: 'postgresql://devburger_api_d7u3_user:SdePiZ0LuUa3Q69V0Lyx5L8BFVDnqXgK@dpg-cru95ag8fa8c73cafbk0-a.oregon-postgres.render.com/devburger_api_d7u3',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
  production: {
    url: 'postgresql://devburger_api_d7u3_user:SdePiZ0LuUa3Q69V0Lyx5L8BFVDnqXgK@dpg-cru95ag8fa8c73cafbk0-a.oregon-postgres.render.com/devburger_api_d7u3',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
