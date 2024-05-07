FROM node:16-alpine

WORKDIR /app

COPY . .

EXPOSE 8080

RUN npm install

CMD [ "npm", "start" ]

# Commands for running the app.
# To build the Docker image:            docker build -t nandynaren/sit725-2024-t1-prac8.2hd
# To view the Docker images:            docker images
# To run the Docker image:              docker run -d -p 5000:3003 nandynaren/sit725-2024-t1-prac8.2hd
# To see the running app and details:   docker ps -a
# This will list the details of the app and you can get the Container ID from these list of details.
# To stop the app:                      docker stop <continer_ID>
#                                       docker rm <container_ID>
