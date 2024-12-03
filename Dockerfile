#official Node.js image
FROM node:18-slim

#working directory
WORKDIR /app

# Update and install nmap
RUN apt-get update && apt-get install -y nmap

# Copy package.json and package-lock.json
COPY package*.json ./

RUN npm install --registry=https://registry.npmjs.org

COPY . .

EXPOSE 3000

CMD ["npm", "start"]