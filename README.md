# freeCodeCamp Data Visualization Projects

All the data visualization projects in one place. 

## Development

This project uses `docker` to maintain development environment. Hence, `docker` community edition and `docker-compose` are dependencies to get the dev server up and running.

Command | Description
------- | -----------
`docker-compose up --build` | Build the image first and then run the command from `docker-compose.yml`. Currently, the default command is to run `npm run dev`, which in turn springs `light-server` up to serve static files.
`docker-compose up` | If there are no changes to `package.json`.
`docker-compose down` | To stop the container
`docker-compose exec` | To execute commands on a running container service.


## TODO

## DONE
- [ ] There was this warning during `docker-compose up --build`. Need to bring the `lock` file back to host system and commit it. `npm notice created a lockfile as package-lock.json. You should commit this file.`

Exposing the local directory as a volume helps write files back from commands run on container. `node_modules` was exposed as a volume without a local reference, which leaves all node_modules inside the container and doesn't write back. This is good as the node_modules are not required in local file system. Only a ghost empty node_modules folder is created in local file system.