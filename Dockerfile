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

