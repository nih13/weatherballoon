FROM node:14
WORKDIR niharika/Desktop/weatherApp/backend
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4000
CMD [ "node", "index.js"]


