import { addTask } from '@/actions/actions';
import prisma from '@/lib/db';
import { title } from 'process';

export type Task = {
  id: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
};

export default async function Home() {
  const taskList: Task[] = await prisma.task.findMany();
  // const taskList: Task[] = [
  //   {
  //     id: 1,
  //     title: 'Task 1'
  //   },
  //   {
  //     id: 2,
  //     title: 'Task 2'
  //   }
  // ];

  return (
    <main className='bg-zinc-200 flex flex-col items-center pt-10  min-h-screen text-black'>
      <h1 className='text-3xl font-medium'>Home page </h1>
      <h1 className='text-3xl font-medium'>All task </h1>
      <ul className='my-10 text-center'>
        {taskList.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>

      <form action={addTask} className='space-x-2 h4'>
        <input type='text' name='title' className='px-3 py-1 rounded' />
        <button className='bg-blue-500 px-3 py-1 text-white rounded'>
          Add Task
        </button>
      </form>
    </main>
  );
}
