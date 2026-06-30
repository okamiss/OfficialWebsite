# ── Stage 1: build the static site ──────────────────────────
FROM node:20-alpine AS build
WORKDIR /app
# install deps first (better layer caching)
COPY package.json package-lock.json ./
RUN npm ci
# build
COPY . .
RUN npm run build

# ── Stage 2: serve with nginx ───────────────────────────────
FROM nginx:alpine
# our server config (gzip, cache, SPA fallback)
COPY nginx.conf /etc/nginx/conf.d/default.conf
# the built static assets
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
