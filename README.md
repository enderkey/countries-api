# countries-api
API to get information about countries.

## How to run
```
docker compose up -d
docker exec -it app-database bash
knex migrate:latest
knex seed:run
exit
```
