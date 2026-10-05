# My Profile

So uh, this is my first GitHub repository and also my first proper web project.

it's just a simple profile page I made for school while trying to figure out how all this GitHub stuff works.

the project was made with the help of ChatGPT

## Local development

The profile content is stored in a SQLite database and queried on the server
for each page request. To initialize the local database:

1. Copy `.env.example` to `.env`.
2. Install dependencies with `npm install`.
3. Run `npm run db:migrate`.
4. Run `npm run db:seed` to add the initial profile records.
5. Start the app with `npm run dev`.

The seed command only creates the initial profile if it does not already exist;
it does not overwrite records that have since been edited in the database.
Set `DATABASE_URL` to a SQLite connection URL for a different database file if
needed.

## what's here?

a profile page.

that's pretty much it.

nothing groundbreaking. 

## tech stuff

- Next.js 16 (App Router)
- React 19
- TypeScript / TSX
- CSS
- SQLite with Prisma ORM
- Tabler Icons React
- Node.js and npm

## why this repository exists

mostly so I can look back at it later and see how bad my first project was.