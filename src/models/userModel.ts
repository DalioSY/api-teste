import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getUsers = async () => {
  try {
    return await prisma.user.findMany();
  } catch (err) {
    console.error('✖️ Error fetching users:', err);
    throw new Error('❌ Could not fetch users');
  }
};

export const createUser = async (name: string, age: number) => {
  try {
    return await prisma.user.create({
      data: { name, age },
    });
  } catch (err) {
    console.error('✖️ Error creating user:', err);
    throw new Error('❌ Could not create user');
  }
};

export const updateUser = async (id: number, name?: string, age?: number) => {
  try {
    return await prisma.user.update({
      where: { id },
      data: { name, age },
    });
  } catch (err) {
    console.error(`✖️ Error updating user with id ${id}:`, err);
    throw new Error('❌ Could not update user');
  }
};

export const deleteUser = async (id: number) => {
  try {
    await prisma.user.delete({
      where: { id },
    });
    return `✔️ User with ID ${id} deleted successfully `;
  } catch (err) {
    console.error(`✖️ Error deleting user with id ${id}:`, err);
    throw new Error('❌ Could not delete user');
  }
};
