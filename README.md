bmaplib
=========

百度地图API及开源库中“抽取”的对象及几何运算开源库。

Usage
-----------

安装

    $ npm install bmaplib

使用

```javascript
var BMap = require('bmaplib').BMap;
var BMapLib = require('bmaplib').BMapLib;
var bp1 = new BMap.Point(114.23075520112,28.578514731829);  // sw 西南
var bp2 = new BMap.Point(114.24063602435,29.579081890341);  // ne 东北

var mid = new BMap.Point((bp1.lng+bp2.lng)/2,(bp1.lat+bp2.lat)/2);  // 中点

console.log(BMapLib.GeoUtils.getDistance(bp1, bp2));        // 距离

var bounds1 = new BMap.Bounds(bp1, bp2);
console.log(bounds1.getSouthWest());
console.log(BMapLib.GeoUtils.isPointInRect(mid, bounds1));  // 点在矩形内

// 另见demo.js

```

相关资源
-----------

- [百度地图Javascript API](http://developer.baidu.com/map/index.php?title=jspopular)
- [百度地图开源库](http://developer.baidu.com/map/index.php?title=open/library)
- [百度地图开源库 - 几何运算示例](http://api.map.baidu.com/library/GeoUtils/1.2/examples/simple.html)