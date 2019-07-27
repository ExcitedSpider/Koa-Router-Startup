## koa-router 示例架构

### 目录结构

```
.
├── config - 配置文件
├── controller - 控制器
├── index.js - 应用主类
├── node_modules
├── package-lock.json
├── package.json
├── readme.md
├── router - 路由
└── utils - 实用工具
```
### 运行

需求：node

```bash
$ npm install
$ npm run start
```

只配置了一条路由`/home/welcome`，浏览器访问`http://localhost:3000/home/welcome`