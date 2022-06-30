FROM node:16.15-alpine as build-stage

LABEL version="1.0" 
LABEL description="LandingPage-react"
LABEL maintainer="alexcamposwd@gmail.com"

WORKDIR /usr/src/client

COPY package.json ./

RUN yarn

COPY . ./

EXPOSE $REACT_LOCAL_PORT

CMD [ "yarn", "start" ]