import prisma from '@/db/prisma';


type DeleteProps = {
  params: {
    id: string;
  };
};

export default async function Delete({ ...props }: DeleteProps ) {


  const id: string = props.params.id;
  let deleteok: boolean = false;

  try {
    const deletedUser = await prisma.zuser.delete({
      where: { id: id, }
    });
    // res.status(200).json(deletedUser);
    console.log('delete ==>', deletedUser);
    deleteok = true;
  } catch (error) {
    console.log('delete error==>', error);
  }

  return <>{deleteok && <p>user : {id} is deleted</p>}</>;
}
