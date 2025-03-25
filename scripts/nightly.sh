sed -i 's/"name": "xianniu-plus",/"name": "@xianniu-plus\/nightly",/' packages/xianniu-plus/package.json
sed -i '2s/xianniu-plus/@xianniu-plus\/nightly/' internal/build-constants/src/pkg.ts
