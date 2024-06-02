import { addTask } from '@/actions/actions';
import prisma from '@/db/prisma';
import Link from 'next/link';
import { title } from 'process';

export type Task = {
  id: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
};

export default async function Home() {
  

  return (
    <main className='bg-zinc-200 flex flex-col items-center pt-10  min-h-screen text-black'>
      <h1 className='text-3xl font-medium'>Home page </h1>
      <h1 className='text-3xl font-medium'>All task </h1>
      <Link  href={'/user'} >user</Link>
    </main>
  );
}
