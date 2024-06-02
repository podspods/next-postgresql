
# next-postgresql


[tuto ici](https://www.youtube.com/watch?v=tm70Xa6igbY)

user :postgres
pass :ma_mot_de_passe# next-from-scratch


# Prima
utlisation de Prisma pou acceder à la base de donnée PostgreSQL

[dc prisma ](https://www.prisma.io/docs/getting-started/quickstart)
install 
```sh
npm i prisma --save-dev 
```

init 
```sh
npx prisma init 
```

```sh
npm i @prisma/client 
```

```sh
npx prisma migrate dev --name init
```


```sh
npm i @auth/prisma-adapter
```

set schema 
copier de  https://authjs.dev/getting-started/adapters/prisma#schema
pour le schema de auth

créer (connexion db ) 
/lib/db.ts 

```js
import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
```

```sh
npx prisma db push 
```

manage data 
outil sur page web pour la visualisation de la base de donnée 

```sh
npx prisma studio
```

prisma client : pour acceder aux donnée



[best practice Prisma](https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices)


# install Prisma 

1. npx prisma init
    updatedAt: new Date()
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
3. Run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.

# next-prisma
