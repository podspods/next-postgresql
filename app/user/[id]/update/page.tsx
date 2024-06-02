import { updateUser } from '@/actions/actions';
import { User } from '../../page';
import prisma from '@/db/prisma';
import { useCallback, useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import FormUpdateUser from '@/components/FormUpdateUser';


// type UpdateProps = {
//   userId: string;
// };

type UpdateProps = {
  params: {
    id: string;
  };
};



export default async function Update({ ...props }: UpdateProps ) {

  console.log(' Update props==>', props);
  

  if (!props.params.id ) {
    notFound();
  }

  console.log(' Update props==>', props);

  const id: string = props.params.id;

  const user = await prisma.zuser.findFirst({
    where: { id: id }
  });

  if (!user ) {
    notFound();
  }
  console.log('Update  findFirst params.id==>',props.params.id );
console.log('Update  findFirst id==>',id );
console.log('Update  findFirst user==>',user );

  return (
    <>
      <FormUpdateUser user={user} />
    </>
  );
}
