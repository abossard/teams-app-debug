FROM node:lts as BUILD
WORKDIR /app/client
COPY client/package.json ./
RUN npm install
COPY client /app/client
RUN npm run build

FROM node:lts as RUN
WORKDIR /app/server
COPY --from=BUILD /app/client /app/client
COPY package.json .
RUN npm install
COPY . /app/server
EXPOSE 3000
CMD ["npm", "start"]