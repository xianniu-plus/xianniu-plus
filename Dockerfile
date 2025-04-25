FROM {REGISTRY_URL}/docker/node:{version}-alpine AS node-build

# 安装git
RUN apk add --no-cache git

WORKDIR /app

COPY . .
RUN npm install -g pnpm@{pnpm_version}


RUN pnpm install
RUN pnpm run --filter @xianniu-plus/docs gen-locale
RUN pnpm run --filter @xianniu-plus/docs build

ENV TZ=Asia/Shanghai
#建立timezone软链接
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# 添加启动命令
# CMD ["pnpm", "run", "--filter", "@xianniu-plus/docs", "dev", "--host", "0.0.0.0", "--port", "{port}"]

FROM {REGISTRY_URL}/web/nginx:latest


COPY --from=node-build /app/docs/.vitepress/dist /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf

RUN chmod -R 777 /usr/share/nginx/html
RUN chmod -R 777 /etc/nginx
RUN chmod -R 777 /var/log/nginx
CMD ["nginx", "-g", "daemon off;"]
