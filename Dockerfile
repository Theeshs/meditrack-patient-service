# Base image
FROM node:16-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy application code
COPY . .

# Expose the application port
EXPOSE 3000

# Start the application in development mode with hot reload
CMD ["npm", "run", "start:dev"]
