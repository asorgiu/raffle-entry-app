FROM node:17

ENV NODE_ENV=production

# Create app directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install --production
RUN npm install react-scripts@5.0.0 -g --silent


# Bundle app source
COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]