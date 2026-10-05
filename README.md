# My Profile

So uh, this is my first GitHub repository and also my first proper web project.

it's just a simple profile page I made for school while trying to figure out how all this GitHub stuff works.

the project was made with the help of ChatGPT

## Database setup

Profile content is stored in PostgreSQL and queried on the server for each
page request. Create a PostgreSQL database with a provider of your choice, then
set `DATABASE_URL` to its connection string. Copy `.env.example` to `.env` and
replace the placeholder connection string with your database credentials.

Install the dependencies, apply the migrations, seed the initial profile, and
start the app:

```sh
npm install
npm run db:migrate
npm run db:seed
npm run dev
```

For Vercel, configure `DATABASE_URL` in the project's Environment Variables for
the environments you deploy, then run `npm run db:migrate` and `npm run db:seed`
against that hosted database before serving the site. Prisma Client is
generated automatically during installation; building the app does not
require a database connection.

## what's here?

a profile page.

that's pretty much it.

nothing groundbreaking. 

## tech stuff

- Next.js 16 (App Router)
- React 19
- TypeScript / TSX
- CSS
- PostgreSQL with Prisma ORM
- Tabler Icons React
- Node.js and npm

## why this repository exists

mostly so I can look back at it later and see how bad my first project was.