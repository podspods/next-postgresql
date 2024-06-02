import { updateUser } from '@/actions/actions';
import { User } from '../../page';
import prisma from '@/db/prisma';
import { useCallback, useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import FormUpdateUser from '@/components/FormUpdateUser';


// type UpdateProps = {
//   userId: string;
// };

export default async function Update({ params }: { params: { userId: string } }) {
  const id: string = params.userId;

  const user = await prisma.zuser.findFirst({
    where: { id: id }
  });

  if (!user) {
    notFound();
  }

  return (
    <>
      <FormUpdateUser user={user} />
    </>
  );
}
