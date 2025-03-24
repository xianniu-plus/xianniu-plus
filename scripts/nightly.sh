sed -i 's/"name": "element-plus",/"name": "@xianniu-plus\/nightly",/' packages/element-plus/package.json
sed -i '2s/element-plus/@xianniu-plus\/nightly/' internal/build-constants/src/pkg.ts