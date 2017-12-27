# LeetCode
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FKravisII%2FLeetCode.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FKravisII%2FLeetCode?ref=badge_shield)


## How to Debug

修改文件 [`webpack.config.js`](https://github.com/KravisII/LeetCode/blob/master/webpack.config.js) 下的变量 [`itemNumber`](https://github.com/KravisII/LeetCode/blob/master/webpack.config.js#L21).

如需要调试编号为 1 的 `Two Sum` 的代码, 只需要将其修改变量 `itemNumber` 为 `1` 后保存, 在终端中执行 `npm run server` 后即可在 Google Chrome 中调试.

该项目的默认 IP 地址是 `0.0.0.0:10080`, 可在文件 [`webpack.config.js`](https://github.com/KravisII/LeetCode/blob/master/webpack.config.js) 内修改. 

## Problems:

1. `eslint-loader` 加入后, webpack 构建时间明显变长, 暂时取消引入该 loader.

[Webpack 性能优化](http://www.ituring.com.cn/article/200534)

## TODO:

1. 保持代码风格和注释样式统一

## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FKravisII%2FLeetCode.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FKravisII%2FLeetCode?ref=badge_large)