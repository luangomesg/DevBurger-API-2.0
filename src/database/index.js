import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import Product from '../app/models/Product';
import User from '../app/models/User';
import Category from '../app/models/Category';

import dotenv from 'dotenv';

const models = [User, Product, Category];
dotenv.config();

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(
      'postgres://default:MYD6NjtKoXm0@ep-dark-band-a4fqqgt6-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require',
    );
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models),
      );
    console.log(
      'Conexão com o banco de dados PostgreSQL estabelecida com sucesso',
    );
  }

  mongo() {
    this.mongoConnection = mongoose.connect(process.env.MONGO_URL);
  }
}

export default new Database();
