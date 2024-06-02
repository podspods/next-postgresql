
import { addUser } from '@/actions/actions';
import prisma from '@/db/prisma';
import FormAddUser from '../../components/FormAddUser';
import Link from 'next/link';

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
};

export default async function User() {
  const userList: User[] = await prisma.zuser.findMany();

  return (
    <main className='bg-zinc-200 flex flex-col items-center pt-10  min-h-screen text-black'>
      <h1 className='text-3xl font-medium'>Home page </h1>
      <h1 className='text-3xl font-medium'>All task </h1>
      <ul className='my-10 text-center'>
        {userList.map((user) => (
          <li key={user.id}>
            {user.name} : {user.email}: {user.password}
            <Link href={`user/${user.id}/update`}>{'Update '}</Link>
            <Link href={`user/${user.id}/delete`}>delete</Link>
          </li>
        ))}
      </ul>
        <FormAddUser />
    </main>
  );
}

