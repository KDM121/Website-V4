FROM node:18
WORKDIR /THE-WEBSITE/pages
COPY package*.json./
RUN npm install
COPY ..
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]