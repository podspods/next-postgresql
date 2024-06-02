import prisma from '@/db/prisma';



export default async function Delete({ params }: { params: { userId: string } }) {
  const id: string = params.userId;
  const deletedUser = await prisma.zuser.delete({
    where: { id: id },
  });

  return (
    <>
    {
      deletedUser && (<p>user : {id } is deleted</p>)
    }
    </>
  );
}
