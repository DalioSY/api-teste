import * as userService from '../services/userService';

export const getUsers = async () => {
  return await userService.findAllUsers();
};

export const createUser = async ({
  name,
  age,
}: {
  name: string;
  age: number;
}) => {
  return await userService.createNewUser(name, age);
};

export const updateUser = async ({
  id,
  name,
  age,
}: {
  id: number;
  name?: string;
  age?: number;
}) => {
  return await userService.modifyUser(id, name, age);
};

export const deleteUser = async ({ id }: { id: number }) => {
  return await userService.removeUser(id);
};
