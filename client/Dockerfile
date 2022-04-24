FROM node:17.8-alpine as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

COPY ./ ./


# CMD ["npm", "start"]

RUN npm run build

# Expose production
FROM nginx:1.20.2-alpine as production


ENV NODE_ENV production

COPY --from=build-stage /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]