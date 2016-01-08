bmaplib
=========

百度地图API及几何运算开源库中“抽取”的对象及计算逻辑。

- Point
- Bounds
- Circle
- Polyline
- Polygon

Usage
-----------

安装

    $ npm install bmaplib

使用

```javascript
var BMap = require('bmaplib').BMap;
var BMapLib = require('bmaplib').BMapLib;

var pts = [];
var pt1 = new BMap.Point(116.395, 39.910);
var pt2 = new BMap.Point(116.394, 39.914);
var pt3 = new BMap.Point(116.403, 39.920);
var pt4 = new BMap.Point(116.402, 39.914);
var pt5 = new BMap.Point(116.410, 39.913);

pts.push(pt1);
pts.push(pt2);
pts.push(pt3);
pts.push(pt4);
pts.push(pt5);
var ply = new BMap.Polygon(pts);

var pt =new BMap.Point(116.400, 39.914);

var result = BMapLib.GeoUtils.isPointInPolygon(pt, ply);    //点在多边形内

var bp1 = new BMap.Point(114.23075520112,28.578514731829);
var bp2 = new BMap.Point(114.24063602435,29.579081890341);

var mid = new BMap.Point((bp1.lng+bp2.lng)/2,(bp1.lat+bp2.lat)/2);

console.log(BMapLib.GeoUtils.getDistance(bp1, bp2));        // 距离

var bounds1 = new BMap.Bounds(bp1, bp2);                    // Bounds

console.log(bounds1.getSouthWest());
console.log(BMapLib.GeoUtils.isPointInRect(mid, bounds1));  // 点在矩形内

// 另见demo.js

```

相关资源
-----------

- [百度地图Javascript API](http://developer.baidu.com/map/index.php?title=jspopular)
- [百度地图开源库](http://developer.baidu.com/map/index.php?title=open/library)
- [百度地图开源库 - 几何运算示例](http://api.map.baidu.com/library/GeoUtils/1.2/examples/simple.html)