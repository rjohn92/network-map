FROM node:18

# Set the working directory
WORKDIR /app

# Install nmap
RUN apt-get update && \
    apt-get install -y nmap \
    iproute2 \
    iputils-ping

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Expose the application port
EXPOSE 5000

# Start the application
CMD ["node", "index.js"]