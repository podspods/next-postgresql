import { addUser } from '@/actions/actions';

export default function FormAddUser() {
  return (
   
    <form action={addUser} className='space-x-2 h4'>
    <input
      type='text'
      name='name'
      className='px-3 py-1 rounded'
      placeholder='name'
    />
    <input
      type='text'
      name='email'
      className='px-3 py-1 rounded'
      placeholder='email'
    />
    <input
      type='text'
      name='password'
      className='px-3 py-1 rounded'
      placeholder='password'
    />
    <button className='bg-blue-500 px-3 py-1 text-white rounded'>
      Add User
    </button>
  </form>
  )
}