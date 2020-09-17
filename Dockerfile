# pull official base image
FROM node:13.12.0-alpine

# Add metadata to an image 
LABEL app="react-base-template"

# set working directory
WORKDIR /src

# add `/node_modules/.bin` to $PATH
ENV PATH /node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm i

# add app
COPY . ./

# Define the network ports that this container will listen on at runtime.
EXPOSE 3000

# start app
CMD ["npm run-script", "start"]
