FROM node:14.5.0 AS builder

WORKDIR /code

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .
RUN npm run build

FROM alpine
COPY --from=builder /code/build /build