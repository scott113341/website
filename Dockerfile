FROM node:latest AS builder
WORKDIR /app
COPY package* ./
RUN npm ci
COPY ./css ./css
COPY ./html ./html
COPY ./scripts ./scripts
COPY ./static ./static
RUN bash scripts/build.sh

FROM ghcr.io/static-web-server/static-web-server:2
COPY --from=builder /app/build /public
