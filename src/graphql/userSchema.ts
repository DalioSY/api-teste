import { buildSchema } from 'graphql';
import * as userController from '../controllers/userController';

export const schema = buildSchema(`
  type User {
    id: ID
    name: String
    age: Int
  }

  type Query {
    users: [User]
  }

  type Mutation {
    createUser(name: String!, age: Int!): User
    updateUser(id: Int!, name: String, age: Int): User
    deleteUser(id: Int!): String
  }
`);

export const root = {
  users: userController.getUsers,
  createUser: userController.createUser,
  updateUser: userController.updateUser,
  deleteUser: userController.deleteUser,
};
