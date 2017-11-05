# freeCodeCamp Data Visualization Projects

All the data visualization projects in one place. 

## Development

This project uses `docker` to maintain development environment. Hence, `docker` community edition and `docker-compose` are dependencies to get the dev server up and running.

Command | Description
------- | -----------
`docker-compose up --build` | Build the image first and then run the command from `docker-compose.yml`. Currently, the default command is to run `npm run dev`, which in turn springs `light-server` up to serve static files.
`docker-compose up` | If there are no changes to `package.json`.

## TODO
- [ ] There was this warning during `docker-compose up --build`. Need to bring the `lock` file back to host system and commit it. `npm notice created a lockfile as package-lock.json. You should commit this file.`
