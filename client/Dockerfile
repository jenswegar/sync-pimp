FROM node:8.7.0
LABEL maintainer="jens.wegar@gmail.com"

EXPOSE 3000

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Install app dependencies
COPY ./src/package.json /app
RUN npm install

# Bundle app source
COPY ./src/. /app

CMD [ "npm", "start" ]