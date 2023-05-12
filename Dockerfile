FROM node:16.15.1 as builder

WORKDIR /app

COPY package.json  ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build


FROM nginx:alpine

COPY ./nginx.conf /etc/nginx/nginx.conf

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
