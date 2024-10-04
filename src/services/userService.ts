import * as userModel from '../models/userModel';

export const findAllUsers = async () => {
  const users = await userModel.getUsers();
  if (users.length === 0) {
    return { id: 0, name: 'Dalio', age: 39 };
  }
  return users;
};

export const createNewUser = async (name: string, age: number) => {
  return await userModel.createUser(name, age);
};

export const modifyUser = async (id: number, name?: string, age?: number) => {
  return await userModel.updateUser(id, name, age);
};

export const removeUser = async (id: number) => {
  return await userModel.deleteUser(id);
};
