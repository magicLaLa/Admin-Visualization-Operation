FROM node
WORKDIR /ctapp

COPY package*.json ./
RUN npm install -g
COPY ./ ./ctapp
RUN npm run build
