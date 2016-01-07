/**
 * 从百度地图API页面源代码“抽取”的几何对象类，为方便跟页面代码对照，保留了一些语句
 * (Baidu Map Javascript API v2.0)
 * Point
 * Bounds
 * Circle
 * Polyline
 * Polygon
 */

module.exports = (function() {
// common stuffs
    function S(a, b) {
        for (var c in b)a[c] = b[c]
    }
//////////////////////////////////////////////
    function aa(a) {
        throw a;
    }

    var j = void 0, o = !0, p = null, q = !1;

    function s() {
        return function () {
        }
    }

    function ba(a) {
        return function (b) {
            this[a] = b
        }
    }

    function t(a) {
        return function () {
            return this[a]
        }
    }

    function ca(a) {
        return function () {
            return a
        }
    }

    var da, ea = [];

    function fa(a) {
        return function () {
            return ea[a].apply(this, arguments)
        }
    }

    function ga(a, b) {
        return ea[a] = b
    }
    var ha, x = ha = x || {version: "1.3.4"};
    x.ca = "$BAIDU$";
//window[x.ca] = window[x.ca] || {};
    x.object = x.object || {};
    x.extend = x.object.extend = function (a, b) {
        for (var c in b)b.hasOwnProperty(c) && (a[c] = b[c]);
        return a
    };
// 继承链
    x.lang = x.lang || {};
    x.lang.sa = function (a, b, c) {
        var d, e, f = a.prototype;
        e = new Function;
        e.prototype = b.prototype;
        e = a.prototype = new e;
        for (d in f)e[d] = f[d];
        a.prototype.constructor = a;
        a.k_ = b.prototype;
        if ("string" == typeof c)e.lQ = c
    };
    x.sa = x.lang.sa;

    x.jc = x.jc || {};
    x.jc.Eb = function (a, b) {
        var c, d, e = a.length;
        if ("function" == typeof b)for (d = 0; d < e; d++) {
            c = a[d];
            c = b.call(a, c, d);
            if (c === q)break
        }
        return a
    };
    x.Eb = x.jc.Eb;
    x.lang.Ba = function (a) {
        this.ca = a || x.lang.ca();
    };
//////////////////////////////////////////////
    var Hb = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    function Xa(a) {
        return "string" == typeof a
    }
    function Ib(a) {
        var b = "", c, d, e = "", f, g = "", i = 0;
        f = /[^A-Za-z0-9\+\/\=]/g;
        if (!a || f.exec(a))return a;
        a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        do c = Hb.indexOf(a.charAt(i++)), d = Hb.indexOf(a.charAt(i++)), f = Hb.indexOf(a.charAt(i++)), g = Hb.indexOf(a.charAt(i++)), c = c << 2 | d >> 4, d = (d & 15) << 4 | f >> 2, e = (f & 3) << 6 | g, b += String.fromCharCode(c), 64 != f && (b += String.fromCharCode(d)), 64 != g && (b += String.fromCharCode(e)); while (i < a.length);
        return b
    }
//////////////////////////////////////////////
// Point
    function H(a, b) {
        isNaN(a) && (a = Ib(a), a = isNaN(a) ? 0 : a);
        Xa(a) && (a = parseFloat(a));
        isNaN(b) && (b = Ib(b), b = isNaN(b) ? 0 : b);
        Xa(b) && (b = parseFloat(b));
        this.lng = a;
        this.lat = b
    }
    H.TL = function (a) {
        return a && 180 >= a.lng && -180 <= a.lng && 74 >= a.lat && -74 <= a.lat
    };
    H.prototype.lb = function (a) { // equals
        return a && this.lat == a.lat && this.lng == a.lng
    };
    H.prototype.equals = H.prototype.lb;
// Bounds
    function eb(a, b) {
        a && !b && (b = a);
        this.De = this.Ce = this.Je = this.Ie = this.Ll = this.ul = p;
        a && (this.Ll = new H(a.lng, a.lat), this.ul = new H(b.lng, b.lat), this.Je = a.lng, this.Ie = a.lat, this.De = b.lng, this.Ce = b.lat)
    }
    x.object.extend(eb.prototype, {
        yj: function () {
            return !this.Ll || !this.ul
        }, lb: function (a) {
            return !(a instanceof eb) || this.yj() ? q : this.qe().lb(a.qe()) && this.kf().lb(a.kf())
        }, qe: t("Ll"), kf: t("ul"), uV: function (a) {
            return !(a instanceof eb) || this.yj() || a.yj() ? q : a.Je > this.Je && a.De < this.De && a.Ie > this.Ie && a.Ce < this.Ce
        }, Ja: function () {
            return this.yj() ? p : new H((this.Je + this.De) / 2, (this.Ie + this.Ce) / 2)
        }, ft: function (a) {
            if (!(a instanceof eb) || Math.max(a.Je, a.De) < Math.min(this.Je, this.De) || Math.min(a.Je, a.De) > Math.max(this.Je, this.De) || Math.max(a.Ie, a.Ce) < Math.min(this.Ie, this.Ce) || Math.min(a.Ie, a.Ce) > Math.max(this.Ie, this.Ce))return p;
            var b = Math.max(this.Je, a.Je), c = Math.min(this.De, a.De), d = Math.max(this.Ie, a.Ie), a = Math.min(this.Ce, a.Ce);
            return new eb(new H(b, d), new H(c, a))
        }, bs: function (a) {
            return !(a instanceof H) || this.yj() ? q : a.lng >= this.Je && a.lng <= this.De && a.lat >= this.Ie && a.lat <= this.Ce
        }, extend: function (a) {
            if (a instanceof H) {
                var b = a.lng, a = a.lat;
                this.Ll || (this.Ll = new H(0, 0));
                this.ul || (this.ul = new H(0, 0));
                if (!this.Je || this.Je > b)this.Ll.lng = this.Je = b;
                if (!this.De || this.De < b)this.ul.lng = this.De = b;
                if (!this.Ie || this.Ie > a)this.Ll.lat = this.Ie = a;
                if (!this.Ce || this.Ce < a)this.ul.lat = this.Ce = a
            }
        }, EF: function () {
            return this.yj() ? new H(0, 0) : new H(Math.abs(this.De - this.Je), Math.abs(this.Ce - this.Ie))
        }
    });
    var Le = eb.prototype;
    S(Le, {
        equals: Le.lb,
        containsPoint: Le.bs,
        containsBounds: Le.uV,
        intersects: Le.ft,
        extend: Le.extend,
        getCenter: Le.Ja,
        isEmpty: Le.yj,
        getSouthWest: Le.qe,
        getNorthEast: Le.kf,
        toSpan: Le.EF
    });

// Circle
    function Ac(a, b, c) {
        this.point = a;
        this.wa = Math.abs(b);
    }
    Ac.KE = [0.01, 1.0E-4, 1.0E-5, 4.0E-6];
    x.extend(Ac.prototype, {
        initialize: function (a) {
            this.map = a;
            this.ia = this.ev(this.point, this.wa);
            this.Eh();
            return p
        }, Ja: t("point"), Vf: function (a) {
            a && (this.point = a)
        }, oL: t("wa"), qf: function (a) {
            this.wa = Math.abs(a)
        }, ev: function (a, b) {
            if (!a || !b || !this.map)return [];
            for (var c = [], d = b / 6378800, e = Math.PI / 180 * a.lat, f = Math.PI / 180 * a.lng, g = 0; 360 > g; g += 9) {
                var i = Math.PI / 180 * g, k = Math.asin(Math.sin(e) * Math.cos(d) + Math.cos(e) * Math.sin(d) * Math.cos(i)), i = new H(((f - Math.atan2(Math.sin(i) * Math.sin(d) * Math.cos(e), Math.cos(d) - Math.sin(e) * Math.sin(k)) + Math.PI) % (2 * Math.PI) - Math.PI) * (180 / Math.PI), k * (180 / Math.PI));
                c.push(i)
            }
            d = c[0];
            c.push(new H(d.lng, d.lat));
            return c
        }
    });
    var Ve = Ac.prototype;
    S(Ve, {setCenter: Ve.Vf, getCenter: Ve.Ja, getRadius: Ve.oL, setRadius: Ve.qf});


// common overlay library
    function ic() {
        this.Lb = "overlay"
    }

    x.lang.sa(ic, x.lang.Ba, "Overlay");
    ic.ym = function (a) {
        a *= 1;
        return !a ? 0 : -1E5 * a << 1
    };

    function fb() {
        this.Pa = o;
        this.yb = p;
        this.YG = 0
    }
    x.lang.sa(fb, ic, "OverlayInternal");
    x.extend(fb.prototype, {
        initialize: function (a) {
            this.map = a;
            x.lang.Ba.call(this, this.ca);
            return p
        }, lx: t("map"), draw: s(), Hj: s(), remove: function () {
            this.map = p;
            x.lang.Pw(this.ca);
            ic.prototype.remove.call(this)
        }, U: function () {
            this.Pa !== q && (this.Pa = q)
        }, show: function () {
            this.Pa !== o && (this.Pa = o)
        }, mh: function () {
            return !this.V ? q : !!this.Pa
        }, Na: t("V"), CN: function (a) {
            var a = a || {}, b;
            for (b in a)this.z[b] = a[b]
        }, St: ba("zIndex"), ii: function () {
            this.z.ii = o
        }, VV: function () {
            this.z.ii = q
        }, uo: ba("hg"), zp: function () {
            this.hg = p
        }
    });
    function kc(a) {
        fb.call(this);
        a = a || {};
        this.z = {
            strokeColor: a.strokeColor || "#3a6bdb",
            lc: a.strokeWeight || 5,
            sd: a.strokeOpacity || 0.65,
            strokeStyle: a.strokeStyle || "solid",
            ii: a.enableMassClear === q ? q : o,
            wk: p,
            sm: p,
            Nf: a.enableEditing === o ? o : q,
            EM: 5,
            L_: q,
            ff: a.enableClicking === q ? q : o,
            ni: a.icons && 0 < a.icons.length ? a.icons : p
        };
        0 >= this.z.lc && (this.z.lc = 5);
        if (0 > this.z.sd || 1 < this.z.sd)this.z.sd = 0.65;
        if (0 > this.z.qg || 1 < this.z.qg)this.z.qg = 0.65;
        "solid" != this.z.strokeStyle && "dashed" != this.z.strokeStyle && (this.z.strokeStyle = "solid");
        this.V = p;
        this.Mu = new eb(0, 0);
        this.bf = [];
        this.mc = [];
        this.Qa = {}
    }
    x.lang.sa(kc, fb, "Graph");
    kc.gx = function (a) {
        var b = [];
        if (!a)return b;
        Xa(a) && x.jc.Eb(a.split(";"), function (a) {
            a = a.split(",");
            b.push(new H(a[0], a[1]))
        });
        "[object Array]" == Object.prototype.toString.apply(a) && 0 < a.length && (b = a);
        return b
    };
    kc.KE = [0.09, 0.0050, 1.0E-4, 1.0E-5];
    x.extend(kc.prototype, {
        initialize: function (a) {
            this.map = a;
            return p
        }, draw: s(), Ir: function (a) {
            this.bf.length = 0;
            this.ia = kc.gx(a).slice(0);
            this.Eh()
        }, ge: function (a) {
            this.Ir(a)
        }, Eh: function () {
            if (this.ia) {
                var a = this;
                a.Mu = new eb;
                x.jc.Eb(this.ia, function (b) {
                    a.Mu.extend(b)
                })
            }
        }, oe: t("ia"), hn: function (a, b) {
            b && this.ia[a] && (this.bf.length = 0, this.ia[a] = new H(b.lng, b.lat), this.Eh())
        }, setStrokeColor: function (a) {
            this.z.strokeColor = a
        }, rX: function () {
            return this.z.strokeColor
        }, Op: function (a) {
            0 < a && (this.z.lc = a)
        }, tL: function () {
            return this.z.lc
        }, Mp: function (a) {
            a == j || (1 < a || 0 > a) || (this.z.sd = a)
        }, sX: function () {
            return this.z.sd
        }, Lt: function (a) {
            1 < a || 0 > a || (this.z.qg = a)
        }, PW: function () {
            return this.z.qg
        }, Np: function (a) {
            "solid" != a && "dashed" != a || (this.z.strokeStyle = a)
        }, sL: function () {
            return this.z.strokeStyle
        }, setFillColor: function (a) {
            this.z.fillColor = a || ""
        }, OW: function () {
            return this.z.fillColor
        }, Gd: t("Mu"), remove: function () {
            this.map && this.map.removeEventListener("onmousemove", this.iv);
            fb.prototype.remove.call(this);
            this.bf.length = 0
        }, Nf: function () {
            if (!(2 > this.ia.length)) {
                this.z.Nf = o;
                var a = this;
                I.load("poly", function () {
                    a.Rl()
                }, o)
            }
        }, UV: function () {
            this.z.Nf = q;
            var a = this;
            I.load("poly", function () {
                a.mk()
            }, o)
        }
    });
    var Ue = kc.prototype;
    S(Ue, {
        getPath: Ue.oe,
        setPath: Ue.ge,
        setPositionAt: Ue.hn,
        getStrokeColor: Ue.rX,
        setStrokeWeight: Ue.Op,
        getStrokeWeight: Ue.tL,
        setStrokeOpacity: Ue.Mp,
        getStrokeOpacity: Ue.sX,
        setFillOpacity: Ue.Lt,
        getFillOpacity: Ue.PW,
        setStrokeStyle: Ue.Np,
        getStrokeStyle: Ue.sL,
        getFillColor: Ue.OW,
        getBounds: Ue.Gd,
        enableEditing: Ue.Nf,
        disableEditing: Ue.UV
    });

// Polyline
    function zc(a, b) {
        kc.call(this, b);
        this.Ir(a);
        var c = this;
    }
    x.lang.sa(zc, kc, "Polyline");

// Polygon
    function yc(a, b) {
        kc.call(this, b);
        this.ge(a);
    }
    x.lang.sa(yc, kc, "Polygon");
    x.extend(yc.prototype, {
        ge: function (a, b) {
            this.ro = kc.gx(a).slice(0);
            var c = kc.gx(a).slice(0);
            1 < c.length && c.push(new H(c[0].lng, c[0].lat));
            kc.prototype.ge.call(this, c, b)
        }, hn: function (a, b) {
            this.ro[a] && (this.ro[a] = new H(b.lng, b.lat), this.ia[a] = new H(b.lng, b.lat), 0 == a && !this.ia[0].lb(this.ia[this.ia.length - 1]) && (this.ia[this.ia.length - 1] = new H(b.lng, b.lat)), this.Eh())
        }, oe: function () {
            var a = this.ro;
            0 == a.length && (a = this.ia);
            return a
        }
    });
    var We = yc.prototype;
    S(We, {getPath: We.oe, setPath: We.ge, setPositionAt: We.hn});

// holy BMap
    return {
        Point: H,
        Bounds: eb,
        Circle: Ac,
        Polyline: zc,
        Polygon: yc
    };

})();