module.exports = {
  development: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    host: process.env.POSTGRES_HOST,
    url: 'postgres://default:MYD6NjtKoXm0@ep-dark-band-a4fqqgt6-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require',
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
    url: 'postgres://default:MYD6NjtKoXm0@ep-dark-band-a4fqqgt6-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require',
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
    url: 'postgres://default:MYD6NjtKoXm0@ep-dark-band-a4fqqgt6-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require',
    port: 5432,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
