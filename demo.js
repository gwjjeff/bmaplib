/**
 * 来自百度地图 Javascript 开源库中的几何运算示例，结果和网页结果应保持一致，代码中注释了用于在页面上演示的地图操作
 * http://api.map.baidu.com/library/GeoUtils/1.2/examples/simple.html
 */
(function(){

    var BMap = require('./BMap');
    var BMapLib = require('./BMapLib');
    var alert = console.log;

//点在矩形内
function ptInRect(){
    var pt = new BMap.Point(116.404, 39.915);//测试点

    var pt1 = new BMap.Point(116.400, 39.910);//西南脚点
    var pt2 = new BMap.Point(116.410, 39.920);//东北脚点
    var bds = new BMap.Bounds(pt1, pt2); //测试Bounds对象

    var result = BMapLib.GeoUtils.isPointInRect(pt, bds);
    if(result == true){
        alert("点在矩形内");
    } else {
        alert("点在矩形外")
    }

    ////演示：将点与矩形添加到地图上
    //map.clearOverlays();
    //var mkr = new BMap.Marker(pt);
    //var pts = [];
    ////bds的四个脚点坐标
    //var leftTop = new BMap.Point(pt1.lng, pt2.lat);
    //var rightTop = new BMap.Point(pt2.lng, pt2.lat);
    //var leftBottom = new BMap.Point(pt1.lng, pt1.lat);
    //var rightBottom = new BMap.Point(pt2.lng, pt1.lat);
    //pts.push(leftTop);
    //pts.push(rightTop);
    //pts.push(rightBottom);
    //pts.push(leftBottom);
    //var rect = new BMap.Polygon(pts);
    //map.addOverlay(mkr);//添加测试点
    //map.addOverlay(rect);//添加测试矩形

}

//点在矩形外
function ptOutRect(){
    var pt = new BMap.Point(116.398, 39.915);//测试点

    var pt1 = new BMap.Point(116.400, 39.910);//西南脚点
    var pt2 = new BMap.Point(116.410, 39.920);//东北脚点
    var bds = new BMap.Bounds(pt1, pt2); //测试Bounds对象

    var result = BMapLib.GeoUtils.isPointInRect(pt, bds);
    if(result == true){
        alert("点在矩形内");
    } else {
        alert("点在矩形外")
    }

    ////演示：将点与矩形添加到地图上
    //map.clearOverlays();
    //var mkr = new BMap.Marker(pt);
    //var pts = [];
    ////bds的四个脚点坐标
    //var leftTop = new BMap.Point(pt1.lng, pt2.lat);
    //var rightTop = new BMap.Point(pt2.lng, pt2.lat);
    //var leftBottom = new BMap.Point(pt1.lng, pt1.lat);
    //var rightBottom = new BMap.Point(pt2.lng, pt1.lat);
    //pts.push(leftTop);
    //pts.push(rightTop);
    //pts.push(rightBottom);
    //pts.push(leftBottom);
    //var rect = new BMap.Polygon(pts);
    //map.addOverlay(mkr);//添加测试点
    //map.addOverlay(rect);//添加测试矩形
}

//点在圆内
function ptInCircle(){
    var pt = new BMap.Point(116.404, 39.915);//测试点
    var c = new BMap.Point(116.404, 39.915); //圆心
    var circle = new BMap.Circle(c, 500);//测试圆

    var result = BMapLib.GeoUtils.isPointInCircle(pt, circle);
    if(result == true){
        alert("点在圆形内");
    } else {
        alert("点在圆形外")
    }

    ////演示：将点与圆形添加到地图上
    //map.clearOverlays();
    //var mkr = new BMap.Marker(pt);
    //map.addOverlay(mkr);
    //map.addOverlay(circle);
}

//点在圆外
function ptOutCircle(){
    var pt = new BMap.Point(116.396, 39.915);//测试点
    var c = new BMap.Point(116.404, 39.915); //圆心
    var circle = new BMap.Circle(c, 500);//测试圆

    var result = BMapLib.GeoUtils.isPointInCircle(pt, circle);
    if(result == true){
        alert("点在圆形内");
    } else {
        alert("点在圆形外")
    }

    ////演示：将点与圆形添加到地图上
    //map.clearOverlays();
    //var mkr = new BMap.Marker(pt);
    //map.addOverlay(mkr);
    //map.addOverlay(circle);
}

//计算长度，参数为折线
function computeLenByPolyine(){
    var pts = [];
    var pt1 = new BMap.Point(116.400,39.910);
    var pt2 = new BMap.Point(116.402,39.912);
    var pt3 = new BMap.Point(116.403,39.914);
    var pt4 = new BMap.Point(116.404,39.917);
    var pt5 = new BMap.Point(116.406,39.918);

    pts.push(pt1);
    pts.push(pt2);
    pts.push(pt3);
    pts.push(pt4);
    pts.push(pt5);

    var ply = new BMap.Polyline(pts);
    var dis = BMapLib.GeoUtils.getPolylineDistance(ply);
    alert("共" + dis.toFixed(2) + "米");

    ////演示：将线添加到地图上
    //map.clearOverlays();
    //map.addOverlay(ply);
}

//计算长度，参数为点数组
function computeLenByArray(){
    var pts = [];
    var pt1 = new BMap.Point(116.400,39.910);
    var pt2 = new BMap.Point(116.402,39.912);
    var pt3 = new BMap.Point(116.403,39.914);
    var pt4 = new BMap.Point(116.404,39.917);
    var pt5 = new BMap.Point(116.406,39.918);

    pts.push(pt1);
    pts.push(pt2);
    pts.push(pt3);
    pts.push(pt4);
    pts.push(pt5);

    var dis = BMapLib.GeoUtils.getPolylineDistance(pts);
    alert("共" + dis.toFixed(2) + "米");

    ////演示：将线添加到地图上
    //var ply = new BMap.Polyline(pts, {strokeColor: "red", strokeStyle:"dashed"});
    //map.clearOverlays();
    //map.addOverlay(ply);
}

//计算面积，参数为多边形
function computeAreaByPolygon(){
    var pts = [];
    var pt1 = new BMap.Point(116.395, 39.910);
    var pt2 = new BMap.Point(116.394, 39.918);
    var pt3 = new BMap.Point(116.396, 39.919);
    var pt4 = new BMap.Point(116.404, 39.920);
    var pt5 = new BMap.Point(116.406, 39.913);

    pts.push(pt1);
    pts.push(pt2);
    pts.push(pt3);
    pts.push(pt4);
    pts.push(pt5);

    var ply = new BMap.Polygon(pts);
    //console.log('pts: ', ply.getPath());
    var area = BMapLib.GeoUtils.getPolygonArea(ply);
    alert("共" + area.toFixed(2) + "平方米");

    ////演示：将面添加到地图上
    //map.clearOverlays();
    //map.addOverlay(ply);
}

//计算面积，参数为数组
function computeAreaByArray(){
    var pts = [];
    var pt1 = new BMap.Point(116.395, 39.910);
    var pt2 = new BMap.Point(116.394, 39.918);
    var pt3 = new BMap.Point(116.396, 39.919);
    var pt4 = new BMap.Point(116.404, 39.920);
    var pt5 = new BMap.Point(116.406, 39.913);

    pts.push(pt1);
    pts.push(pt2);
    pts.push(pt3);
    pts.push(pt4);
    pts.push(pt5);

    var area = BMapLib.GeoUtils.getPolygonArea(pts);
    alert("共" + area.toFixed(2) + "平方米");

    ////演示：将面添加到地图上
    //var ply = new BMap.Polygon(pts, {strokeColor: "red", strokeStyle:"dashed", fillColor:"gray"});
    //map.clearOverlays();
    //map.addOverlay(ply);
}

//点在折线上
function ptOnPolyline(){
    var pts = [];
    var pt1 = new BMap.Point(116.395, 39.910);
    var pt2 = new BMap.Point(116.405, 39.920);
    var pt3 = new BMap.Point(116.410, 39.920);

    pts.push(pt1);
    pts.push(pt2);
    pts.push(pt3);
    var ply = new BMap.Polyline(pts);

    var pt = new BMap.Point(116.400, 39.915);

    var result = BMapLib.GeoUtils.isPointOnPolyline(pt, ply);
    if(result == true){
        alert("点在折线上");
    } else {
        alert("点在折线外")
    }

    //map.clearOverlays();
    //var mkr = new BMap.Marker(pt);
    //map.addOverlay(mkr);
    //map.addOverlay(ply);
}

//点在折线外
function ptOutPolyline(){
    var pts = [];
    var pt1 = new BMap.Point(116.395, 39.910);
    var pt2 = new BMap.Point(116.405, 39.920);
    var pt3 = new BMap.Point(116.410, 39.920);

    pts.push(pt1);
    pts.push(pt2);
    pts.push(pt3);
    var ply = new BMap.Polyline(pts);

    var pt = new BMap.Point(116.401, 39.915);

    var result = BMapLib.GeoUtils.isPointOnPolyline(pt, ply);
    if(result == true){
        alert("点在折线上");
    } else {
        alert("点在折线外")
    }

    //map.clearOverlays();
    //var mkr = new BMap.Marker(pt);
    //map.addOverlay(mkr);
    //map.addOverlay(ply);
}

//点在多边形内
function ptInPolygon(){
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

    var result = BMapLib.GeoUtils.isPointInPolygon(pt, ply);
    if(result == true){
        alert("点在多边形内");
    } else {
        alert("点在多边形外")
    }

    ////演示：将面添加到地图上
    //map.clearOverlays();
    //var mkr = new BMap.Marker(pt);
    //map.addOverlay(mkr);
    //map.addOverlay(ply);
}

//点在多边形外
function ptOutPolygon(){
    var pts = [];
    var pt1 = new BMap.Point(116.395, 39.910);
    var pt2 = new BMap.Point(116.394, 39.914);
    var pt3 = new BMap.Point(116.396, 39.919);
    var pt4 = new BMap.Point(116.406, 39.920);
    var pt5 = new BMap.Point(116.410, 39.913);

    pts.push(pt1);
    pts.push(pt2);
    pts.push(pt3);
    pts.push(pt4);
    pts.push(pt5);
    var ply = new BMap.Polygon(pts);

    var pt =new BMap.Point(116.410, 39.915);

    var b = ply.getBounds();
    console.log('sw: ', b.getSouthWest());
    console.log('ne: ', b.getNorthEast());
    var result = BMapLib.GeoUtils.isPointInPolygon(pt, ply);
    if(result == true){
        alert("点在多边形内");
    } else {
        alert("点在多边形外")
    }

    ////演示：将面添加到地图上
    //map.clearOverlays();
    //var mkr = new BMap.Marker(pt);
    //map.addOverlay(mkr);
    //map.addOverlay(ply);
}

ptInRect();
ptOutRect();
ptInCircle();
ptOutCircle();
computeLenByPolyine();
computeLenByArray();
computeAreaByPolygon();
computeAreaByArray();
ptOnPolyline();
ptOutPolyline();
ptInPolygon();
ptOutPolygon();

})();