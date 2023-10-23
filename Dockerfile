FROM node:18.18.2-alpine
WORKDIR /website-V4
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]