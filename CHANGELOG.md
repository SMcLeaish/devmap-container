# Changelog - Louis
1. Changed port 5432 to port 5433 in [knexfile.js](server/knexfile.js) for my local testing.
2. Refactored [migrations file](server/migrations) into a file-per-table format.
3. Created [src folder](server/src) and a working [Express API](server/src/app.js).  Currently only works to [query the branch endpoint.](http://localhost:8081/branch)
4. Moved all other seed files to a [temp directory](temp/).  Express was throwing errors because the other seeds hadn't been built yet, so I just chucked them somewhere else for the time being.  

# Lessons learned - Louis
## Back-end
### Migrations
- I found out that chaining .then() doesn't work to drop tables.  It seemingly ignored everything after the first line.  I got around this by setting up migration files per table.
- Rollbacks execute in **reverse order** of rollouts (migrate:latest).  So we only need to tear down foreign keys if the table we're dropping is referenced by another table. Because we set them up sequentially, each table depending on the previous, we can tear them down in the same order without errors. If we *hadn't* done that, we could technically get away with just specifying the table at the end of the foreign key chain.
## Front-end
- After I made my branch, I couldn't run `npm start` in the frontend directory unless I first ran `npm i`.  I think this is how it's supposed to work?  ¯\\_(ツ)_/¯