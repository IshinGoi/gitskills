/* 
* source code that directly copied from a5f74876.js on APR website.
* a5f74876.js中拷贝过来的源代码 
*/
var Yr = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
function Zr(r) {
    return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r
}
function et(r) {
    if (r.__esModule)
        return r;
    var e = Object.defineProperty({}, "__esModule", {
        value: !0
    });
    return Object.keys(r).forEach(function(t) {
        var i = Object.getOwnPropertyDescriptor(r, t);
        Object.defineProperty(e, t, i.get ? i : {
            enumerable: !0,
            get: function() {
                return r[t]
            }
        })
    }),
    e
}
var X = {
    exports: {}
}
  , ve = function(e, t) {
    return function() {
        for (var n = new Array(arguments.length), a = 0; a < n.length; a++)
            n[a] = arguments[a];
        return e.apply(t, n)
    }
}
  , $e = ve
  , K = Object.prototype.toString
  , Q = function(r) {
    return function(e) {
        var t = K.call(e);
        return r[t] || (r[t] = t.slice(8, -1).toLowerCase())
    }
}(Object.create(null));
function A(r) {
    return r = r.toLowerCase(),
    function(t) {
        return Q(t) === r
    }
}
function G(r) {
    return Array.isArray(r)
}
function B(r) {
    return typeof r == "undefined"
}
function Ue(r) {
    return r !== null && !B(r) && r.constructor !== null && !B(r.constructor) && typeof r.constructor.isBuffer == "function" && r.constructor.isBuffer(r)
}
var me = A("ArrayBuffer");
function Be(r) {
    var e;
    return typeof ArrayBuffer != "undefined" && ArrayBuffer.isView ? e = ArrayBuffer.isView(r) : e = r && r.buffer && me(r.buffer),
    e
}
function Le(r) {
    return typeof r == "string"
}
function je(r) {
    return typeof r == "number"
}
function Ee(r) {
    return r !== null && typeof r == "object"
}
function $(r) {
    if (Q(r) !== "object")
        return !1;
    var e = Object.getPrototypeOf(r);
    return e === null || e === Object.prototype
}
var Fe = A("Date")
  , qe = A("File")
  , Ie = A("Blob")
  , Me = A("FileList");
function Y(r) {
    return K.call(r) === "[object Function]"
}
function ke(r) {
    return Ee(r) && Y(r.pipe)
}
function He(r) {
    var e = "[object FormData]";
    return r && (typeof FormData == "function" && r instanceof FormData || K.call(r) === e || Y(r.toString) && r.toString() === e)
}
var Je = A("URLSearchParams");
function Ve(r) {
    return r.trim ? r.trim() : r.replace(/^\s+|\s+$/g, "")
}
function We() {
    return typeof navigator != "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window != "undefined" && typeof document != "undefined"
}
function Z(r, e) {
    if (!(r === null || typeof r == "undefined"))
        if (typeof r != "object" && (r = [r]),
        G(r))
            for (var t = 0, i = r.length; t < i; t++)
                e.call(null, r[t], t, r);
        else
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && e.call(null, r[n], n, r)
}
function W() {
    var r = {};
    function e(n, a) {
        $(r[a]) && $(n) ? r[a] = W(r[a], n) : $(n) ? r[a] = W({}, n) : G(n) ? r[a] = n.slice() : r[a] = n
    }
    for (var t = 0, i = arguments.length; t < i; t++)
        Z(arguments[t], e);
    return r
}
function ze(r, e, t) {
    return Z(e, function(n, a) {
        t && typeof n == "function" ? r[a] = $e(n, t) : r[a] = n
    }),
    r
}
function Xe(r) {
    return r.charCodeAt(0) === 65279 && (r = r.slice(1)),
    r
}
function Ke(r, e, t, i) {
    r.prototype = Object.create(e.prototype, i),
    r.prototype.constructor = r,
    t && Object.assign(r.prototype, t)
}
function Qe(r, e, t) {
    var i, n, a, s = {};
    e = e || {};
    do {
        for (i = Object.getOwnPropertyNames(r),
        n = i.length; n-- > 0; )
            a = i[n],
            s[a] || (e[a] = r[a],
            s[a] = !0);
        r = Object.getPrototypeOf(r)
    } while (r && (!t || t(r, e)) && r !== Object.prototype);
    return e
}
function Ge(r, e, t) {
    r = String(r),
    (t === void 0 || t > r.length) && (t = r.length),
    t -= e.length;
    var i = r.indexOf(e, t);
    return i !== -1 && i === t
}
function Ye(r) {
    if (!r)
        return null;
    var e = r.length;
    if (B(e))
        return null;
    for (var t = new Array(e); e-- > 0; )
        t[e] = r[e];
    return t
}
var Ze = function(r) {
    return function(e) {
        return r && e instanceof r
    }
}(typeof Uint8Array != "undefined" && Object.getPrototypeOf(Uint8Array))
  , h = {
    isArray: G,
    isArrayBuffer: me,
    isBuffer: Ue,
    isFormData: He,
    isArrayBufferView: Be,
    isString: Le,
    isNumber: je,
    isObject: Ee,
    isPlainObject: $,
    isUndefined: B,
    isDate: Fe,
    isFile: qe,
    isBlob: Ie,
    isFunction: Y,
    isStream: ke,
    isURLSearchParams: Je,
    isStandardBrowserEnv: We,
    forEach: Z,
    merge: W,
    extend: ze,
    trim: Ve,
    stripBOM: Xe,
    inherits: Ke,
    toFlatObject: Qe,
    kindOf: Q,
    kindOfTest: A,
    endsWith: Ge,
    toArray: Ye,
    isTypedArray: Ze,
    isFileList: Me
}
  , C = h;
function ie(r) {
    return encodeURIComponent(r).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
var ye = function(e, t, i) {
    if (!t)
        return e;
    var n;
    if (i)
        n = i(t);
    else if (C.isURLSearchParams(t))
        n = t.toString();
    else {
        var a = [];
        C.forEach(t, function(f, d) {
            f === null || typeof f == "undefined" || (C.isArray(f) ? d = d + "[]" : f = [f],
            C.forEach(f, function(l) {
                C.isDate(l) ? l = l.toISOString() : C.isObject(l) && (l = JSON.stringify(l)),
                a.push(ie(d) + "=" + ie(l))
            }))
        }),
        n = a.join("&")
    }
    if (n) {
        var s = e.indexOf("#");
        s !== -1 && (e = e.slice(0, s)),
        e += (e.indexOf("?") === -1 ? "?" : "&") + n
    }
    return e
}
  , er = h;
function L() {
    this.handlers = []
}
L.prototype.use = function(e, t, i) {
    return this.handlers.push({
        fulfilled: e,
        rejected: t,
        synchronous: i ? i.synchronous : !1,
        runWhen: i ? i.runWhen : null
    }),
    this.handlers.length - 1
}
;
L.prototype.eject = function(e) {
    this.handlers[e] && (this.handlers[e] = null)
}
;
L.prototype.forEach = function(e) {
    er.forEach(this.handlers, function(i) {
        i !== null && e(i)
    })
}
;
var rr = L
  , tr = h
  , nr = function(e, t) {
    tr.forEach(e, function(n, a) {
        a !== t && a.toUpperCase() === t.toUpperCase() && (e[t] = n,
        delete e[a])
    })
}
  , be = h;
function x(r, e, t, i, n) {
    Error.call(this),
    this.message = r,
    this.name = "AxiosError",
    e && (this.code = e),
    t && (this.config = t),
    i && (this.request = i),
    n && (this.response = n)
}
be.inherits(x, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        }
    }
});
var Re = x.prototype
  , we = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED"].forEach(function(r) {
    we[r] = {
        value: r
    }
});
Object.defineProperties(x, we);
Object.defineProperty(Re, "isAxiosError", {
    value: !0
});
x.from = function(r, e, t, i, n, a) {
    var s = Object.create(Re);
    return be.toFlatObject(r, s, function(f) {
        return f !== Error.prototype
    }),
    x.call(s, r.message, e, t, i, n),
    s.name = r.name,
    a && Object.assign(s, a),
    s
}
;
var N = x
  , Oe = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
}
  , b = h;
function ir(r, e) {
    e = e || new FormData;
    var t = [];
    function i(a) {
        return a === null ? "" : b.isDate(a) ? a.toISOString() : b.isArrayBuffer(a) || b.isTypedArray(a) ? typeof Blob == "function" ? new Blob([a]) : Buffer.from(a) : a
    }
    function n(a, s) {
        if (b.isPlainObject(a) || b.isArray(a)) {
            if (t.indexOf(a) !== -1)
                throw Error("Circular reference detected in " + s);
            t.push(a),
            b.forEach(a, function(f, d) {
                if (!b.isUndefined(f)) {
                    var o = s ? s + "." + d : d, l;
                    if (f && !s && typeof f == "object") {
                        if (b.endsWith(d, "{}"))
                            f = JSON.stringify(f);
                        else if (b.endsWith(d, "[]") && (l = b.toArray(f))) {
                            l.forEach(function(m) {
                                !b.isUndefined(m) && e.append(o, i(m))
                            });
                            return
                        }
                    }
                    n(f, o)
                }
            }),
            t.pop()
        } else
            e.append(s, i(a))
    }
    return n(r),
    e
}
var Ae = ir
  , k = N
  , ar = function(e, t, i) {
    var n = i.config.validateStatus;
    !i.status || !n || n(i.status) ? e(i) : t(new k("Request failed with status code " + i.status,[k.ERR_BAD_REQUEST, k.ERR_BAD_RESPONSE][Math.floor(i.status / 100) - 4],i.config,i.request,i))
}
  , g = h
  , sr = g.isStandardBrowserEnv() ? function() {
    return {
        write: function(t, i, n, a, s, u) {
            var f = [];
            f.push(t + "=" + encodeURIComponent(i)),
            g.isNumber(n) && f.push("expires=" + new Date(n).toGMTString()),
            g.isString(a) && f.push("path=" + a),
            g.isString(s) && f.push("domain=" + s),
            u === !0 && f.push("secure"),
            document.cookie = f.join("; ")
        },
        read: function(t) {
            var i = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
            return i ? decodeURIComponent(i[3]) : null
        },
        remove: function(t) {
            this.write(t, "", Date.now() - 864e5)
        }
    }
}() : function() {
    return {
        write: function() {},
        read: function() {
            return null
        },
        remove: function() {}
    }
}()
  , or = function(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
  , ur = function(e, t) {
    return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
}
  , fr = or
  , lr = ur
  , Se = function(e, t) {
    return e && !fr(t) ? lr(e, t) : t
}
  , H = h
  , cr = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]
  , dr = function(e) {
    var t = {}, i, n, a;
    return e && H.forEach(e.split(`
`), function(u) {
        if (a = u.indexOf(":"),
        i = H.trim(u.substr(0, a)).toLowerCase(),
        n = H.trim(u.substr(a + 1)),
        i) {
            if (t[i] && cr.indexOf(i) >= 0)
                return;
            i === "set-cookie" ? t[i] = (t[i] ? t[i] : []).concat([n]) : t[i] = t[i] ? t[i] + ", " + n : n
        }
    }),
    t
}
  , ae = h
  , hr = ae.isStandardBrowserEnv() ? function() {
    var e = /(msie|trident)/i.test(navigator.userAgent), t = document.createElement("a"), i;
    function n(a) {
        var s = a;
        return e && (t.setAttribute("href", s),
        s = t.href),
        t.setAttribute("href", s),
        {
            href: t.href,
            protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
            host: t.host,
            search: t.search ? t.search.replace(/^\?/, "") : "",
            hash: t.hash ? t.hash.replace(/^#/, "") : "",
            hostname: t.hostname,
            port: t.port,
            pathname: t.pathname.charAt(0) === "/" ? t.pathname : "/" + t.pathname
        }
    }
    return i = n(window.location.href),
    function(s) {
        var u = ae.isString(s) ? n(s) : s;
        return u.protocol === i.protocol && u.host === i.host
    }
}() : function() {
    return function() {
        return !0
    }
}()
  , z = N
  , pr = h;
function Ce(r) {
    z.call(this, r == null ? "canceled" : r, z.ERR_CANCELED),
    this.name = "CanceledError"
}
pr.inherits(Ce, z, {
    __CANCEL__: !0
});
var j = Ce
  , vr = function(e) {
    var t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}
  , D = h
  , mr = ar
  , Er = sr
  , yr = ye
  , br = Se
  , Rr = dr
  , wr = hr
  , Or = Oe
  , R = N
  , Ar = j
  , Sr = vr
  , se = function(e) {
    return new Promise(function(i, n) {
        var a = e.data, s = e.headers, u = e.responseType, f;
        function d() {
            e.cancelToken && e.cancelToken.unsubscribe(f),
            e.signal && e.signal.removeEventListener("abort", f)
        }
        D.isFormData(a) && D.isStandardBrowserEnv() && delete s["Content-Type"];
        var o = new XMLHttpRequest;
        if (e.auth) {
            var l = e.auth.username || ""
              , m = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
            s.Authorization = "Basic " + btoa(l + ":" + m)
        }
        var p = br(e.baseURL, e.url);
        o.open(e.method.toUpperCase(), yr(p, e.params, e.paramsSerializer), !0),
        o.timeout = e.timeout;
        function te() {
            if (!!o) {
                var y = "getAllResponseHeaders"in o ? Rr(o.getAllResponseHeaders()) : null
                  , S = !u || u === "text" || u === "json" ? o.responseText : o.response
                  , O = {
                    data: S,
                    status: o.status,
                    statusText: o.statusText,
                    headers: y,
                    config: e,
                    request: o
                };
                mr(function(M) {
                    i(M),
                    d()
                }, function(M) {
                    n(M),
                    d()
                }, O),
                o = null
            }
        }
        if ("onloadend"in o ? o.onloadend = te : o.onreadystatechange = function() {
            !o || o.readyState !== 4 || o.status === 0 && !(o.responseURL && o.responseURL.indexOf("file:") === 0) || setTimeout(te)
        }
        ,
        o.onabort = function() {
            !o || (n(new R("Request aborted",R.ECONNABORTED,e,o)),
            o = null)
        }
        ,
        o.onerror = function() {
            n(new R("Network Error",R.ERR_NETWORK,e,o,o)),
            o = null
        }
        ,
        o.ontimeout = function() {
            var S = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded"
              , O = e.transitional || Or;
            e.timeoutErrorMessage && (S = e.timeoutErrorMessage),
            n(new R(S,O.clarifyTimeoutError ? R.ETIMEDOUT : R.ECONNABORTED,e,o)),
            o = null
        }
        ,
        D.isStandardBrowserEnv()) {
            var ne = (e.withCredentials || wr(p)) && e.xsrfCookieName ? Er.read(e.xsrfCookieName) : void 0;
            ne && (s[e.xsrfHeaderName] = ne)
        }
        "setRequestHeader"in o && D.forEach(s, function(S, O) {
            typeof a == "undefined" && O.toLowerCase() === "content-type" ? delete s[O] : o.setRequestHeader(O, S)
        }),
        D.isUndefined(e.withCredentials) || (o.withCredentials = !!e.withCredentials),
        u && u !== "json" && (o.responseType = e.responseType),
        typeof e.onDownloadProgress == "function" && o.addEventListener("progress", e.onDownloadProgress),
        typeof e.onUploadProgress == "function" && o.upload && o.upload.addEventListener("progress", e.onUploadProgress),
        (e.cancelToken || e.signal) && (f = function(y) {
            !o || (n(!y || y && y.type ? new Ar : y),
            o.abort(),
            o = null)
        }
        ,
        e.cancelToken && e.cancelToken.subscribe(f),
        e.signal && (e.signal.aborted ? f() : e.signal.addEventListener("abort", f))),
        a || (a = null);
        var I = Sr(p);
        if (I && ["http", "https", "file"].indexOf(I) === -1) {
            n(new R("Unsupported protocol " + I + ":",R.ERR_BAD_REQUEST,e));
            return
        }
        o.send(a)
    }
    )
}
  , Cr = null
  , c = h
  , oe = nr
  , ue = N
  , Tr = Oe
  , xr = Ae
  , _r = {
    "Content-Type": "application/x-www-form-urlencoded"
};
function fe(r, e) {
    !c.isUndefined(r) && c.isUndefined(r["Content-Type"]) && (r["Content-Type"] = e)
}
function Pr() {
    var r;
    return (typeof XMLHttpRequest != "undefined" || typeof process != "undefined" && Object.prototype.toString.call(process) === "[object process]") && (r = se),
    r
}
function Nr(r, e, t) {
    if (c.isString(r))
        try {
            return (e || JSON.parse)(r),
            c.trim(r)
        } catch (i) {
            if (i.name !== "SyntaxError")
                throw i
        }
    return (t || JSON.stringify)(r)
}
var F = {
    transitional: Tr,
    adapter: Pr(),
    transformRequest: [function(e, t) {
        if (oe(t, "Accept"),
        oe(t, "Content-Type"),
        c.isFormData(e) || c.isArrayBuffer(e) || c.isBuffer(e) || c.isStream(e) || c.isFile(e) || c.isBlob(e))
            return e;
        if (c.isArrayBufferView(e))
            return e.buffer;
        if (c.isURLSearchParams(e))
            return fe(t, "application/x-www-form-urlencoded;charset=utf-8"),
            e.toString();
        var i = c.isObject(e), n = t && t["Content-Type"], a;
        if ((a = c.isFileList(e)) || i && n === "multipart/form-data") {
            var s = this.env && this.env.FormData;
            return xr(a ? {
                "files[]": e
            } : e, s && new s)
        } else if (i || n === "application/json")
            return fe(t, "application/json"),
            Nr(e);
        return e
    }
    ],
    transformResponse: [function(e) {
        var t = this.transitional || F.transitional
          , i = t && t.silentJSONParsing
          , n = t && t.forcedJSONParsing
          , a = !i && this.responseType === "json";
        if (a || n && c.isString(e) && e.length)
            try {
                return JSON.parse(e)
            } catch (s) {
                if (a)
                    throw s.name === "SyntaxError" ? ue.from(s, ue.ERR_BAD_RESPONSE, this, null, this.response) : s
            }
        return e
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: Cr
    },
    validateStatus: function(e) {
        return e >= 200 && e < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*"
        }
    }
};
c.forEach(["delete", "get", "head"], function(e) {
    F.headers[e] = {}
});
c.forEach(["post", "put", "patch"], function(e) {
    F.headers[e] = c.merge(_r)
});
var ee = F
  , Dr = h
  , gr = ee
  , $r = function(e, t, i) {
    var n = this || gr;
    return Dr.forEach(i, function(s) {
        e = s.call(n, e, t)
    }),
    e
}
  , Te = function(e) {
    return !!(e && e.__CANCEL__)
}
  , le = h
  , J = $r
  , Ur = Te
  , Br = ee
  , Lr = j;
function V(r) {
    if (r.cancelToken && r.cancelToken.throwIfRequested(),
    r.signal && r.signal.aborted)
        throw new Lr
}
var jr = function(e) {
    V(e),
    e.headers = e.headers || {},
    e.data = J.call(e, e.data, e.headers, e.transformRequest),
    e.headers = le.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers),
    le.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(n) {
        delete e.headers[n]
    });
    var t = e.adapter || Br.adapter;
    return t(e).then(function(n) {
        return V(e),
        n.data = J.call(e, n.data, n.headers, e.transformResponse),
        n
    }, function(n) {
        return Ur(n) || (V(e),
        n && n.response && (n.response.data = J.call(e, n.response.data, n.response.headers, e.transformResponse))),
        Promise.reject(n)
    })
}
  , E = h
  , xe = function(e, t) {
    t = t || {};
    var i = {};
    function n(o, l) {
        return E.isPlainObject(o) && E.isPlainObject(l) ? E.merge(o, l) : E.isPlainObject(l) ? E.merge({}, l) : E.isArray(l) ? l.slice() : l
    }
    function a(o) {
        if (E.isUndefined(t[o])) {
            if (!E.isUndefined(e[o]))
                return n(void 0, e[o])
        } else
            return n(e[o], t[o])
    }
    function s(o) {
        if (!E.isUndefined(t[o]))
            return n(void 0, t[o])
    }
    function u(o) {
        if (E.isUndefined(t[o])) {
            if (!E.isUndefined(e[o]))
                return n(void 0, e[o])
        } else
            return n(void 0, t[o])
    }
    function f(o) {
        if (o in t)
            return n(e[o], t[o]);
        if (o in e)
            return n(void 0, e[o])
    }
    var d = {
        url: s,
        method: s,
        data: s,
        baseURL: u,
        transformRequest: u,
        transformResponse: u,
        paramsSerializer: u,
        timeout: u,
        timeoutMessage: u,
        withCredentials: u,
        adapter: u,
        responseType: u,
        xsrfCookieName: u,
        xsrfHeaderName: u,
        onUploadProgress: u,
        onDownloadProgress: u,
        decompress: u,
        maxContentLength: u,
        maxBodyLength: u,
        beforeRedirect: u,
        transport: u,
        httpAgent: u,
        httpsAgent: u,
        cancelToken: u,
        socketPath: u,
        responseEncoding: u,
        validateStatus: f
    };
    return E.forEach(Object.keys(e).concat(Object.keys(t)), function(l) {
        var m = d[l] || a
          , p = m(l);
        E.isUndefined(p) && m !== f || (i[l] = p)
    }),
    i
}
  , _e = {
    version: "0.27.2"
}
  , Fr = _e.version
  , w = N
  , re = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(r, e) {
    re[r] = function(i) {
        return typeof i === r || "a" + (e < 1 ? "n " : " ") + r
    }
});
var ce = {};
re.transitional = function(e, t, i) {
    function n(a, s) {
        return "[Axios v" + Fr + "] Transitional option '" + a + "'" + s + (i ? ". " + i : "")
    }
    return function(a, s, u) {
        if (e === !1)
            throw new w(n(s, " has been removed" + (t ? " in " + t : "")),w.ERR_DEPRECATED);
        return t && !ce[s] && (ce[s] = !0,
        console.warn(n(s, " has been deprecated since v" + t + " and will be removed in the near future"))),
        e ? e(a, s, u) : !0
    }
}
;
function qr(r, e, t) {
    if (typeof r != "object")
        throw new w("options must be an object",w.ERR_BAD_OPTION_VALUE);
    for (var i = Object.keys(r), n = i.length; n-- > 0; ) {
        var a = i[n]
          , s = e[a];
        if (s) {
            var u = r[a]
              , f = u === void 0 || s(u, a, r);
            if (f !== !0)
                throw new w("option " + a + " must be " + f,w.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (t !== !0)
            throw new w("Unknown option " + a,w.ERR_BAD_OPTION)
    }
}
var Ir = {
    assertOptions: qr,
    validators: re
}
  , Pe = h
  , Mr = ye
  , de = rr
  , he = jr
  , q = xe
  , kr = Se
  , Ne = Ir
  , T = Ne.validators;
function _(r) {
    this.defaults = r,
    this.interceptors = {
        request: new de,
        response: new de
    }
}
_.prototype.request = function(e, t) {
    typeof e == "string" ? (t = t || {},
    t.url = e) : t = e || {},
    t = q(this.defaults, t),
    t.method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get";
    var i = t.transitional;
    i !== void 0 && Ne.assertOptions(i, {
        silentJSONParsing: T.transitional(T.boolean),
        forcedJSONParsing: T.transitional(T.boolean),
        clarifyTimeoutError: T.transitional(T.boolean)
    }, !1);
    var n = []
      , a = !0;
    this.interceptors.request.forEach(function(p) {
        typeof p.runWhen == "function" && p.runWhen(t) === !1 || (a = a && p.synchronous,
        n.unshift(p.fulfilled, p.rejected))
    });
    var s = [];
    this.interceptors.response.forEach(function(p) {
        s.push(p.fulfilled, p.rejected)
    });
    var u;
    if (!a) {
        var f = [he, void 0];
        for (Array.prototype.unshift.apply(f, n),
        f = f.concat(s),
        u = Promise.resolve(t); f.length; )
            u = u.then(f.shift(), f.shift());
        return u
    }
    for (var d = t; n.length; ) {
        var o = n.shift()
          , l = n.shift();
        try {
            d = o(d)
        } catch (m) {
            l(m);
            break
        }
    }
    try {
        u = he(d)
    } catch (m) {
        return Promise.reject(m)
    }
    for (; s.length; )
        u = u.then(s.shift(), s.shift());
    return u
}
;
_.prototype.getUri = function(e) {
    e = q(this.defaults, e);
    var t = kr(e.baseURL, e.url);
    return Mr(t, e.params, e.paramsSerializer)
}
;
Pe.forEach(["delete", "get", "head", "options"], function(e) {
    _.prototype[e] = function(t, i) {
        return this.request(q(i || {}, {
            method: e,
            url: t,
            data: (i || {}).data
        }))
    }
});
Pe.forEach(["post", "put", "patch"], function(e) {
    function t(i) {
        return function(a, s, u) {
            return this.request(q(u || {}, {
                method: e,
                headers: i ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: a,
                data: s
            }))
        }
    }
    _.prototype[e] = t(),
    _.prototype[e + "Form"] = t(!0)
});
var Hr = _
  , Jr = j;
function P(r) {
    if (typeof r != "function")
        throw new TypeError("executor must be a function.");
    var e;
    this.promise = new Promise(function(n) {
        e = n
    }
    );
    var t = this;
    this.promise.then(function(i) {
        if (!!t._listeners) {
            var n, a = t._listeners.length;
            for (n = 0; n < a; n++)
                t._listeners[n](i);
            t._listeners = null
        }
    }),
    this.promise.then = function(i) {
        var n, a = new Promise(function(s) {
            t.subscribe(s),
            n = s
        }
        ).then(i);
        return a.cancel = function() {
            t.unsubscribe(n)
        }
        ,
        a
    }
    ,
    r(function(n) {
        t.reason || (t.reason = new Jr(n),
        e(t.reason))
    })
}
P.prototype.throwIfRequested = function() {
    if (this.reason)
        throw this.reason
}
;
P.prototype.subscribe = function(e) {
    if (this.reason) {
        e(this.reason);
        return
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e]
}
;
P.prototype.unsubscribe = function(e) {
    if (!!this._listeners) {
        var t = this._listeners.indexOf(e);
        t !== -1 && this._listeners.splice(t, 1)
    }
}
;
P.source = function() {
    var e, t = new P(function(n) {
        e = n
    }
    );
    return {
        token: t,
        cancel: e
    }
}
;
var Vr = P
  , Wr = function(e) {
    return function(i) {
        return e.apply(null, i)
    }
}
  , zr = h
  , Xr = function(e) {
    return zr.isObject(e) && e.isAxiosError === !0
}
  , pe = h
  , Kr = ve
  , U = Hr
  , Qr = xe
  , Gr = ee;
function De(r) {
    var e = new U(r)
      , t = Kr(U.prototype.request, e);
    return pe.extend(t, U.prototype, e),
    pe.extend(t, e),
    t.create = function(n) {
        return De(Qr(r, n))
    }
    ,
    t
}
var v = De(Gr);
v.Axios = U;
v.CanceledError = j;
v.CancelToken = Vr;
v.isCancel = Te;
v.VERSION = _e.version;
v.toFormData = Ae;
v.AxiosError = N;
v.Cancel = v.CanceledError;
v.all = function(e) {
    return Promise.all(e)
}
;
v.spread = Wr;
v.isAxiosError = Xr;
X.exports = v;
X.exports.default = v;
var xhr = X.exports;

const request = xhr.create({
    baseURL: "https://aresocean.huawei.com",
    timeout: 3e3 * 10 * 10
});

const api = {
    download: (A,i,M=!0)=>request({
        method: "post",
        url: A,
        data: i,
        responseType: "arraybuffer",
        noCopy: M
    })
};

const  api_prefix = "/ocean/api/apr",
download = e=>api.download(`${api_prefix}/exportBetaFault/exportDownloadzip`, e, !1);
