#-------------------
# STAGE 1: Build
#-------------------
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
# Cài đặt TẤT CẢ dependencies, bao gồm cả devDependencies
RUN npm install
COPY . .
RUN npm run build

#-------------------
# STAGE 2: Run
#-------------------
FROM node:22-alpine
WORKDIR /app

# Sao chép các tệp cần thiết từ giai đoạn build
COPY --from=build /app/package*.json ./
# QUAN TRỌNG: Sao chép node_modules đã được cài đặt ở stage 1
# Điều này đảm bảo `vite` tồn tại để chạy lệnh preview
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

# Mở cổng 4173 (cổng mặc định của `vite preview`)
EXPOSE 4173

# Lệnh để khởi động server preview, `--host` để truy cập từ bên ngoài container
CMD ["npm", "run", "preview", "--", "--host"]
