# ---- Build stage ----
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci --no-audit --no-fund
COPY . .
# For Vite/CRA ensure the right build command:
# If Vite:
RUN npm run build
# If CRA:
# RUN npm run build

# ---- Runtime stage ----
FROM nginx:stable-alpine
# Replace default nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copy built static files
COPY --from=build /app/dist /usr/share/nginx/html
# (For CRA, output is /app/build instead of /app/dist)
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget -qO- http://localhost/ || exit 1

