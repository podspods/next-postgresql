'use client'

import {  updateUser } from '@/actions/actions';
import { User } from '@/app/user/page';


type FormUpdateUserProps ={
  user : User 
}

export default function FormUpdateUser({...props} : FormUpdateUserProps) {
  return (
   
    <form action={updateUser} className='space-x-2 h4'>
    <input
      type='text'
      name='id'
      defaultValue={props.user.id}
      className='px-3 py-1 rounded'
      readOnly
    />
    <input
      type='text'
      defaultValue={props.user.name}
      name='name'
      className='px-3 py-1 rounded'
    />
    <input
      type='text'
      defaultValue={props.user.email}
      name='email'
      className='px-3 py-1 rounded'
    />
    <input
      type='text'
      defaultValue={props.user.password}
      name='password'
      className='px-3 py-1 rounded'
    />
    <button className='bg-blue-500 px-3 py-1 text-white rounded'>
      update User
    </button>
  </form>
  )
}