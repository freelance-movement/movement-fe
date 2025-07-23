#-------------------
# STAGE 1: Build
#-------------------
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

#-------------------
# STAGE 2: Run
#-------------------
FROM node:22-alpine
WORKDIR /app

# Chỉ sao chép các file cần thiết để chạy
COPY --from=build /app/package*.json ./
COPY --from=build /app/dist ./dist

# QUAN TRỌNG: Chỉ cài đặt production dependencies (như `serve`)
# Image sẽ nhẹ hơn rất nhiều vì không chứa devDependencies (vite, eslint,...)
RUN npm install --omit=dev

# Mở cổng mà `serve` sẽ lắng nghe (theo cấu hình trong package.json)
EXPOSE 8080

# Chạy lệnh start đã định nghĩa trong package.json
CMD ["npm", "run", "start"]
