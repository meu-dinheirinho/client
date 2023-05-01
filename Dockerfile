# Use an official Node.js runtime as a parent image
FROM node:18.15.0-alpine

# Set the working directory to /app
WORKDIR /client

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application's code to the container
COPY . .

# Make the container's port 3000 available to the host
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
