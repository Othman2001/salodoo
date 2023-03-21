# Salodoo
this project is created with monoRepo concepts Using NX workspace https://nx.dev/
NX is simply monorepo tool that create scalable build system 
the project is dvided to sperate apps:
1. biker-portal
2. shipper-portal
3. backend using strapi


# to start the backend

cd apps
cd backend 
npm install
npm run develop


#to start any portal 
go to the project root
npm install
npx nx serve shipper-portal
npx nx serve biker-portal
