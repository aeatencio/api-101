# MariaDB + Adminer

```bash
git clone https://github.com/aeatencio/mariadb-101
cd mariadb-101
docker-compose up
```

Wait for it to initialize (the first time it takes longer)

## Access your DB

Visit <http://localhost:8080>

Use these credentials:

- Username: `root`
- Password: `example`

## Share your DB

Visit <http://localhost:4040>

`ngrok` will provide you a public url to share your `Adminer`

## Stop your servers

Type `Ctrl-c`

Wait for them to finish and then run

```bash
docker-compose down
```
