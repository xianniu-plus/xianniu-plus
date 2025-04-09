FROM {REGISTRY_URL}/docker/node:{version}-alpine AS node-build

WORKDIR /app

COPY pnpm-lock.yaml package.json ./
RUN npm install -g pnpm@{pnpm_version}
RUN pnpm config set registry https://registry.npmmirror.com/
RUN pnpm install

COPY . .

ENV TZ=Asia/Shanghai
#建立timezone软链接
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# 添加启动命令
CMD ["pnpm", "run", "--filter", "@xianniu-plus/docs", "dev", "--host", "0.0.0.0", "--port", "{port}"]
