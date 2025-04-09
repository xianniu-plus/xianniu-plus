FROM {REGISTRY_URL}/docker/node:{version}-alpine AS node-build

WORKDIR /app

COPY . ./source
RUN npm install -g pnpm@{pnpm_version} http-server

WORKDIR /app/source
RUN pnpm install
RUN pnpm run build
RUN pnpm run --filter @xianniu-plus/docs gen-locale
RUN pnpm run --filter @xianniu-plus/docs build
WORKDIR /app

# 移动构建产物到指定目录
RUN mkdir -p /app/dist && mv /app/source/docs/dist/* /app/dist/

# 清理源代码目录
RUN rm -rf /app/source

ENV TZ=Asia/Shanghai
#建立timezone软链接
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# 添加启动命令
CMD ["http-server", "/app/dist", "-p", "9974", "--cors", "-c-1", "-g", "-b", "-e"]
