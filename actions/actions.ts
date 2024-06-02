'use server';

import prisma from '@/db/prisma';
import { revalidatePath } from 'next/cache';

export async function addTask(formData: FormData) {
  console.log(' addTask==>', formData);
  await prisma.task.create({
    data: {
      title: formData.get('title') as string
    }
  });
  revalidatePath('/');
}

export async function addUser(formData: FormData) {
  console.log(' addUser==>', formData);
  await prisma.zuser.create({
    data: {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    }
  });
  revalidatePath('/');
}

export async function deleteUser(formData: FormData) {
  console.log(' addUser==>', formData);
  await prisma.zuser.create({
    data: {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    }
  });
  revalidatePath('/');
}


export async function updateUser(formData: FormData) {
  console.log(' addUser==>', formData);
  await prisma.zuser.update({
    where: { id: formData.get('id') as string, },
    data: {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    }
  });
  revalidatePath('/user');
}




export async function addAccount(formData: FormData) {
  console.log(' addUser==>', formData);
  await prisma.zuser.create({
    data: {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    }
  });
  revalidatePath('/');
}
