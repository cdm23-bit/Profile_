# My Profile

So uh, this is my first GitHub repository and also my first proper web project.

it's just a simple profile page I made for school while trying to figure out how all this GitHub stuff works.

the project was made with the help of ChatGPT

## Profile content

Profile content lives in `data/profile.json` and is loaded through the typed
data-access function in `lib/profile-data.ts`. The page renders from that data
file at build time, so deployment does not require a database, credentials, or
runtime data service.

```sh
npm install
npm run dev
```

## what's here?

a profile page.

that's pretty much it.

nothing groundbreaking. 

## tech stuff

- Next.js 16 (App Router)
- React 19
- TypeScript / TSX
- CSS
- JSON profile data with a TypeScript data-access layer
- Tabler Icons React
- Node.js and npm

## why this repository exists

mostly so I can look back at it later and see how bad my first project was.