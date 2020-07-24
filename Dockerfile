FROM node:14.5.0 AS builder

WORKDIR /code

COPY package.json .
COPY package-lock.json .
RUN npm install

ARG REACT_APP_BACKEND_URL
RUN echo $REACT_APP_BACKEND_URL
COPY . .
RUN npm run build

FROM alpine
COPY --from=builder /code/build /build