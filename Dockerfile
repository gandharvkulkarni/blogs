# # syntax=docker/dockerfile:1

# # Comments are provided throughout this file to help you get started.
# # If you need more help, visit the Dockerfile reference guide at
# # https://docs.docker.com/engine/reference/builder/

# ARG NODE_VERSION=18.18.0

# FROM node:${NODE_VERSION}-alpine

# # Use production node environment by default.
# ENV NODE_ENV production


# WORKDIR /usr/src/app

# # Download dependencies as a separate step to take advantage of Docker's caching.
# # Leverage a cache mount to /root/.npm to speed up subsequent builds.
# # Leverage a bind mounts to package.json and package-lock.json to avoid having to copy them into
# # into this layer.
# RUN --mount=type=bind,source=package.json,target=package.json \
#     --mount=type=bind,source=package-lock.json,target=package-lock.json \
#     --mount=type=cache,target=/root/.npm \
#     npm ci --omit=dev

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies including the new packages
# RUN npm install @tailwindcss/typography sharp

# # Install remaining dependencies
# RUN npm install

# # Run the application as a non-root user.
# USER node

# # Copy the rest of the source files into the image.
# COPY . .

# # Temporarily switch to root to create and set permissions for the .next directory
# USER root

# # Create the .next directory and set appropriate permissions for the node user
# RUN mkdir -p /usr/src/app/.next && chown -R node:node /usr/src/app/.next

# # Switch back to the non-root node user
# USER node

# # Expose the port that the application listens on.
# EXPOSE 3000

# # Run the application.
# CMD npm run build



# syntax=docker/dockerfile:1

# ARG NODE_VERSION=18.18.0

# FROM node:${NODE_VERSION}-alpine

# # Use production node environment by default.
# ENV NODE_ENV production

# WORKDIR /usr/src/app

# # Copy package.json and package-lock.json
# COPY package.json package-lock.json ./

# # Install dependencies including the new packages in one step
# RUN npm ci --omit=dev && npm install

# # Copy the rest of the source files into the image
# COPY . .

# # Temporarily switch to root to create and set permissions for the .next directory
# USER root

# # Create the .next directory and set appropriate permissions for the node user
# RUN mkdir -p /usr/src/app/.next && chown -R node:node /usr/src/app/.next

# # Switch back to the non-root node user
# USER node

# # Build the Next.js application
# RUN npm run build

# # Expose the port that the application listens on
# EXPOSE 3000

# # Run the application
# CMD ["npm", "run", "start"]





FROM node:latest

COPY . /home/app

WORKDIR /home/app

RUN npm install
RUN npm run build

CMD ["npm", "run", "start"]
EXPOSE 3000