# 优化方法

1. `useFetch` 设置 `lazy` 延缓 `ssr` 水合，让 `LCP` 变小
2. 通过 `nuxi analyze` 进行bundle分析
3. tree-shaking 
4. 代码分割



# 部署 deploy

1. `nuxi cleanup` 清理掉cache 再 `build`
2. 通过 `ecosystem` 配置 `port` 和 `pm2` 部署 `dist` 目录
3. 用 `gzip` 进行压缩


# Attension

1. `v-for` 别跟 `v-if` 一起用
2. 某些情况要立马获取更新后的dom，用nextTick



