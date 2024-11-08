# --- base images -------------
FROM node:20.15.1-alpine  AS base
# --- run images -----------
FROM nginx:1.27.0-alpine AS run

# --- dependencies images -------------
FROM base AS dependencies

WORKDIR /workdir
COPY ./package.json /workdir
COPY ./yarn.lock /workdir
RUN yarn config set registry https://registry.npmmirror.com/
RUN yarn
ADD . /workdir
RUN yarn build
FROM run AS release

COPY --from=dependencies /workdir/dist  /usr/share/nginx/html
COPY --from=dependencies /workdir/nginx.conf  /etc/nginx/conf.d/my.conf

EXPOSE 8080
