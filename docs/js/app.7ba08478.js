(function (t) {
  function e(e) {
    for (
      var i, a, r = e[0], l = e[1], c = e[2], u = 0, w = [];
      u < r.length;
      u++
    )
      (a = r[u]),
        Object.prototype.hasOwnProperty.call(n, a) && n[a] && w.push(n[a][0]),
        (n[a] = 0);
    for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (t[i] = l[i]);
    d && d(e);
    while (w.length) w.shift()();
    return o.push.apply(o, c || []), s();
  }
  function s() {
    for (var t, e = 0; e < o.length; e++) {
      for (var s = o[e], i = !0, r = 1; r < s.length; r++) {
        var l = s[r];
        0 !== n[l] && (i = !1);
      }
      i && (o.splice(e--, 1), (t = a((a.s = s[0]))));
    }
    return t;
  }
  var i = {},
    n = { app: 0 },
    o = [];
  function a(e) {
    if (i[e]) return i[e].exports;
    var s = (i[e] = { i: e, l: !1, exports: {} });
    return t[e].call(s.exports, s, s.exports, a), (s.l = !0), s.exports;
  }
  (a.m = t),
    (a.c = i),
    (a.d = function (t, e, s) {
      a.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: s });
    }),
    (a.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (a.t = function (t, e) {
      if ((1 & e && (t = a(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var s = Object.create(null);
      if (
        (a.r(s),
        Object.defineProperty(s, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var i in t)
          a.d(
            s,
            i,
            function (e) {
              return t[e];
            }.bind(null, i)
          );
      return s;
    }),
    (a.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return a.d(e, "a", e), e;
    }),
    (a.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (a.p = "/");
  var r = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = r.push.bind(r);
  (r.push = e), (r = r.slice());
  for (var c = 0; c < r.length; c++) e(r[c]);
  var d = l;
  o.push([0, "chunk-vendors"]), s();
})({
  0: function (t, e, s) {
    t.exports = s("56d7");
  },
  "0138": function (t, e, s) {},
  "034f": function (t, e, s) {
    "use strict";
    s("85ec");
  },
  "0b4c": function (t, e, s) {
    "use strict";
    s("ec63");
  },
  "0d33": function (t, e) {
    t.exports =
      "data:image/png;base64,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";
  },
  "0d56": function (t, e) {
    t.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAhCAYAAACxzQkrAAACl0lEQVR4Ac2WA9DsVhzFz72rz7Yxqm13UNsdd9D22cg+269v+Fh7O6ztfrZt26vkNnfy2czmzPzW2XNy7j+AJnX8gkAe+0a4OybJ/El4smCJSBa+mJYU+TsFNh8i50FcksCe/H5n0dkPhDgZ4PBFc8j1v5l/pzm7GFwE977pdzM7874Qhzc+M7/umb6HIdu1eMkZ3rIIR2i/jgQOUh3AXMuAnEHOEoUXPzevRcZBNsJzFRaWNdjEqmxdHJbUX8duKbrMv1txXv/K/CFe+Gz3WqQdYSNsqfuVTdbjpV/w71ac1yy7P6QAmVQfxRQxqs7SgYCCEW44DjJdIJUgUBqSdKOUW3uRPdCGavmZk9TXhBa7lX+38vAsL3yyfxX+Pce0wGtf7H93eMl0GoFADyjrpwUxEOgZU2ZIE1IaIhMainfzxh0+wTBRJeSA6MSf3U1oc1ix8uKBJCKNb+hR/xicTrwN7jo9uPqcDjyX/yt+7WrCikvigRgRxzfkSQ2jYbi89QaYiEGVORsZauu4hmY6U6s0Z1TPG5oQYsApYkgU5ZZ0o0tmFZlaDen5UXZs/N7/0NaCLnvqhKHO6+1VqSHlKDOO3/uqwSGZekyVSg1BQ+chxkgTb8jEG9KGCIaHWjNn6kd5ICMkqpVAoMoM6bUBiIGCKTPka9LjtnA33B2pLtzT16gfu2NkUGbojggT7os24R514Z7ce+Se2khHLgsRnjroCA+nLtwzwkvHM/CWDJTyXBKFpFTmEiQZnoHwJfMQnSXukojSNga7CLXFPWVvwEMU4Sk5CmikrXtDtLUbOY2AJY/h8xxV4Z6yN0OcvRuxju49BLK2n9h9T4pX4j/FphA4iQ5ziow8LV0GiLja0Ya7hyoeBvD7/wXHAX5Y/09SAAAAAElFTkSuQmCC";
  },
  "0f92": function (t, e, s) {
    t.exports = s.p + "img/d2.d6ec312b.svg";
  },
  2227: function (t, e) {
    t.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAYCAYAAAAYl8YPAAABXklEQVR4Aa3UNfMTQRjH8cUdSiro6ClxXgc1rwt3d2/wiuZvTdw95xpbfs/NWTy52Z35xp/P5JQ5jkPtZSKWaZrUtU6n02+1WjzWAEnx8JsGfnt1Lqaq6vVyuTzQNI3btr0wQLxYLJqYuTITy+fzo1UgyrKsADQAXp7CMpmMswpEEYT9G4AawIuTmLIO5rpuCBYKBVVRlAuJMF3XCZsEFazzAVZb559JksQNw6DXFL0mMB1gxVUxioZlWSbUC/uNkzGFPb/3c62CORhSgO0EHyYNhhJgm0IxOhnR2psZzMHoB9iv4MOkweBk7WUiF9QfAjaTzrnDhL0XsZnATgjfzFeCNvMkYQ8EbeZpD8P1lRjCbIThln0TVz19mAiiWRiEndm7Z88edTQasUajwXbt2uW1yuKcex08eJDB2MJHRQb9VK1Wq0KX/Coo67eD/vn9Rd/8PqKnFGYfwTjLsP4DdMQZrFFElk8AAAAASUVORK5CYII=";
  },
  "29a9": function (t, e) {
    t.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAEP0lEQVR4AWJkGGSABV1g1YJKEVkuJlMpADHlACzLEYXhf3Zn9zK2bdtOyq9cz7bN69i2bTvZV4htO5fv2p6ePifd1RfbmVW4p+q76P/803+18pxjC13sFA4598PU3vgXShJEj0Tnpj6urOvnSgACierBu4vcNx8pOqv9leI7KFbMHCv5T9FztL9SMu7NR0t2V2CYkYo9WHRU78sqyKv/L2rOqbGHSlwFNND12D0btqx/ev0N/NIGzgabnim64vF7iwsVJtCbD60/r//ZdczPr88Keu43Hyo6S4EQVG0N3jdKAHzKClFibBOiAxUmUBS8paNFyVnBkdChtlSYQA4ZIONgJe18KHDiJOCUGck5YSKwwwG2d/OdgOMn2H0nTQH2PhEI5di9CkeHYmhM/Xjv6lJ+aDVbPFHG1NXCJLz0dDQxxXmp+hs1Phjs62lnev1m3RPgp/vWlCrMCoEYkGTBeiyaD0g/PbmFtj9H/y+DfW4O4Li6JwixZiRQBD7DQmpkxlheStVLpic4X0QxHAgJDhsp/MyxvDJFX5LLQ9AMB0qQWDBYeGDfT4/nWV72kviEAETCFQpsmRvYUxWGqn8Gi8GUK8NiALLye8tLlT+BvX67z/dAjdXg7o5kZ8gdDSQ5yIAHeu9ViI1PwYslR8SeBr//muXlr96Fv/Fpu08h334JaGtOOF/6FZISbl8rIrXfIVL9dXLqlD7QaXldv0+Nf2/31X6LSGcDHOmnXCHzDl2z9Aq+YiFnk5+uXXaFIn6FGAEQBrbZBdjrMGDvw4Ed9gRCkVHdcYHtdlOa0vc5PDnau+NeQCiqfYkhuHG3DAkDccGWoCNONRxu4G12HtW32E5pp6nxlIx8g7fbNVkg+1BzshVyc8G5m4GFubIczdP/j+rRAnBOvtE8LwVK19/K2yKjQOYfn5AYHxBiFF+OaKz/FkbPCONNRCBQ4i2TMvC42S8t2XoaIGXmK5SoyaSXsKE4Xf4l2KdMAyFxoEEP3N1lzoEQ4N5ecF/vqN4/AO7p1nrKrWKN9vX2JA/EcBXxZ4gRoLkF9OlHoF9/Bv2m+PIzoKpqROdNm0Cff6K0XyB/T47W6avPwb//rn2JkWaXdOGH0gVP0NLpzH+CFk9jMW8SD84erxjHYu4kPWbrakxrg7OSY7wTLW88pPixfOETChPoi7JFd8jFSlw4LSvoub+qWHSHwmxZS074fY8ASM4KHqsMue77ChOoriD6YmskXAlByAZt0XDlJpVBgZF6/qIlY3rnqiWcPvl/Rc/58mVLxyigGak7blrrvlq2cE7LvGlMUyYy/8eQon3+dH69YtEcBYZxEFe33rA6N9ozsONe3WLKHp2DFxQM+AgxIdNykL4oFEJvbgQ1W+WW/b555EEAlWm/cdP1qwqF8HOJ2GVmF2DL4QB+ykBOYtVx4DvqRzgU8iMRtwd/DGQOiWAUAABGp10hTEe6wwAAAABJRU5ErkJggg==";
  },
  3086: function (t, e, s) {
    "use strict";
    s("3b7d");
  },
  3100: function (t, e, s) {
    "use strict";
    s("44a4");
  },
  "3b7d": function (t, e, s) {},
  "43b5": function (t, e, s) {
    "use strict";
    s("a692");
  },
  "44a4": function (t, e, s) {},
  "493f": function (t, e) {
    t.exports =
      "data:image/png;base64,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";
  },
  "4c4b": function (t, e, s) {},
  "50d7": function (t, e, s) {},
  "53ff": function (t, e, s) {
    t.exports = s.p + "img/goodmanwen.5637d700.png";
  },
  "56b4": function (t, e) {
    t.exports =
      "data:image/png;base64,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";
  },
  "56d7": function (t, e, s) {
    "use strict";
    s.r(e);
    s("e260"), s("e6cf"), s("cca6"), s("a79d");
    var i = s("2b0e"),
      n = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "v-app",
          [
            s("Interlude"),
            s("router-view", {
              directives: [
                {
                  name: "wechat-title",
                  rawName: "v-wechat-title",
                  value: t.$route.meta.title,
                  expression: "$route.meta.title",
                },
              ],
            }),
          ],
          1
        );
      },
      o = [],
      a = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            staticClass:
              "tw-w-screen tw-h-screen tw-overflow-hidden tw-fixed tw-bg-gray-900 tw-top-0 tw-left-0 tw-flex tw-justify-center tw-items-center animate__animated animate__faster",
            class: { animate__fadeOut: !t.show_loading_page },
            staticStyle: { "pointer-events": "auto" },
            style: { "z-index": t.zindex },
            on: {
              contextmenu: function (t) {
                t.preventDefault();
              },
            },
          },
          [t._m(0)]
        );
      },
      r = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "div",
            {
              staticClass:
                " tw-flex tw-items-center tw-justify-center tw-w-60 tw-h-60 ",
            },
            [
              s(
                "div",
                {
                  staticClass:
                    "tw-absolute tw-w-60 tw-h-60  tw-flex tw-justify-center tw-items-center",
                },
                [
                  s(
                    "div",
                    {
                      staticClass:
                        " tw-w-10 tw-h-16  tw-flex tw-flex-col-reverse turnaround",
                    },
                    [
                      s("div", {
                        staticClass:
                          "tw-w-5 tw-h-5 tw-rounded-full tw-bg-blue-500",
                      }),
                    ]
                  ),
                ]
              ),
              s(
                "div",
                {
                  staticClass:
                    "tw-absolute tw-w-60 tw-h-60  tw-flex tw-justify-center tw-items-center turnaround1",
                },
                [
                  s(
                    "div",
                    {
                      staticClass:
                        " tw-w-10 tw-h-16  tw-flex tw-flex-col-reverse",
                    },
                    [
                      s("div", {
                        staticClass:
                          "tw-w-5 tw-h-5 tw-rounded-full tw-bg-yellow-500",
                      }),
                    ]
                  ),
                ]
              ),
              s(
                "div",
                {
                  staticClass:
                    "tw-absolute tw-w-60 tw-h-60  tw-flex tw-justify-center tw-items-center turnaround2",
                },
                [
                  s(
                    "div",
                    {
                      staticClass:
                        " tw-w-10 tw-h-16  tw-flex tw-flex-col-reverse",
                    },
                    [
                      s("div", {
                        staticClass:
                          "tw-w-5 tw-h-5 tw-rounded-full tw-bg-purple-500 ",
                      }),
                    ]
                  ),
                ]
              ),
            ]
          );
        },
      ],
      l = {
        name: "Interlude",
        components: {},
        data: function () {
          return { timer: null, zindex: 9999 };
        },
        created: function () {},
        mounted: function () {},
        watch: {
          show_loading_page: function (t) {
            var e = this;
            t
              ? ((this.zindex = 9999),
                null != this.timer && clearTimeout(this.timer))
              : (this.timer = window.setTimeout(function () {
                  (e.zindex = -1), (e.timer = null);
                }, 700));
          },
        },
        computed: {
          show_loading_page: function () {
            return this.$store.state.show_loading_page;
          },
        },
        methods: {},
      },
      c = l,
      d = (s("5c3e"), s("2877")),
      u = Object(d["a"])(c, a, r, !1, null, "670888d4", null),
      w = u.exports,
      h = {
        name: "App",
        components: { Interlude: w },
        data: function () {
          return { authed: !1 };
        },
        created: function () {
          var t = this;
          this.$utils.dynamic_append_link(
            "https://cdn.jsdelivr.net/npm/animate.css@4.1.1/animate.min.css"
          ),
            (this.authed = this.$store.state.authed),
            this.$store.commit("refresh_sizes"),
            this.$store.commit("refresh_scroll"),
            (window.onresize = function () {
              t.$store.commit("refresh_sizes"),
                t.$store.commit("refresh_scroll");
            }),
            (window.onscroll = function () {
              t.$store.commit("refresh_scroll");
            });
        },
        mounted: function () {},
        watch: {},
        computed: {},
        methods: {},
      },
      f = h,
      m = (s("034f"), s("6544")),
      p = s.n(m),
      _ = s("7496"),
      g = Object(d["a"])(f, n, o, !1, null, null, null),
      v = g.exports;
    p()(g, { VApp: _["a"] });
    var y = s("f309");
    i["default"].use(y["a"]);
    var x = new y["a"]({}),
      b = (s("ba8c"), s("2106")),
      k = s.n(b),
      A = s("bc3a"),
      C = s.n(A),
      z = "/";
    z = "/";
    var S = function (t) {
        return t;
      },
      O = function (t) {
        return console.log("axios network error", t), t;
      },
      j = {
        get: function (t) {
          var e = C.a.create({ baseURL: z, timeout: 1e4 });
          return e.interceptors.request.use(S, O), e(t);
        },
        post: function (t) {
          var e = C.a.create({ baseURL: z, timeout: 1e4, method: "post" });
          return e.interceptors.request.use(S, O), e(t);
        },
        raw: function (t) {
          var e = C.a.create({ timeout: 1e4 });
          return e(t);
        },
      },
      I = s("8c4f"),
      M = s("b85c"),
      K = (s("a434"), s("2f62")),
      W =
        (s("d81d"),
        s("ac1f"),
        s("1276"),
        s("5319"),
        s("d3b7"),
        s("25f0"),
        function (t) {
          if ("string" != typeof t);
          else {
            var e,
              s = document.cookie.split(";").map(function (t) {
                return [
                  t.substr(0, t.indexOf("=")),
                  t.substr(t.indexOf("=") + 1, t.length - 1),
                ].map(function (t) {
                  return t.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
                });
              }),
              i = Object(M["a"])(s);
            try {
              for (i.s(); !(e = i.n()).done; ) {
                var n = e.value;
                if (n[0] == t) return n[1];
              }
            } catch (o) {
              i.e(o);
            } finally {
              i.f();
            }
          }
        }),
      D = function (t) {
        t.prototype.$cookies = {
          get: W,
          set: function (t, e, s) {
            var i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : "/";
            if (void 0 == s)
              document.cookie = t + "=" + this._strip(e) + ";path=" + i + ";";
            else {
              var n = new Date(),
                o = 0,
                a = s.toString(),
                r = a.charAt(a.length - 1);
              (o =
                "m" == r
                  ? 60 * parseFloat(a.substring(0, a.length - 1)) * 1e3
                  : "h" == r
                  ? 3600 * parseFloat(a.substring(0, a.length - 1)) * 1e3
                  : "d" == r
                  ? 86400 * parseFloat(a.substring(0, a.length - 1)) * 1e3
                  : 1e3 * parseFloat(a)),
                n.setTime(n.getTime() + o),
                (document.cookie =
                  t +
                  "=" +
                  this._strip(e) +
                  ";expires=" +
                  n.toGMTString() +
                  ";path=" +
                  i +
                  ";");
            }
          },
          remove: function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "/";
            this.set(t, "", -1, e);
          },
          keys: function () {
            var t = this;
            return document.cookie.split(";").map(function (e) {
              return t._strip(e.substr(0, e.indexOf("=")));
            });
          },
          items: function () {
            var t = this;
            return document.cookie.split(";").map(function (e) {
              return [
                e.substr(0, e.indexOf("=")),
                e.substr(e.indexOf("=") + 1, e.length - 1),
              ].map(t._strip);
            });
          },
          _strip: function (t) {
            return t.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
          },
        };
      },
      F = D,
      B = function () {
        var t = function () {
          return ((65536 * (1 + Math.random())) | 0).toString(16).substring(1);
        };
        return (
          t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
        );
      },
      E = function (t) {
        t.prototype.$utils = {
          goto: function (t, e) {
            var s =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            e == t.$route.path
              ? t.$router.go(0)
              : t.$router.push({ path: e, query: s });
          },
          dynamic_append_script: function (t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : function () {},
              s = document.createElement("script");
            (s.type = "text/javascript"),
              (s.src = t),
              document.body.appendChild(s),
              (s.onload = s.onreadystatechange = e());
          },
          dynamic_append_link: function (t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : function () {},
              s = document.createElement("link");
            (s.rel = "stylesheet"),
              (s.href = t),
              document.body.appendChild(s),
              (s.onload = s.onreadystatechange = e());
          },
          get_uuid: B,
        };
      },
      N = E;
    i["default"].use(K["a"]);
    var T = new K["a"].Store({
        state: {
          authed: JSON.parse(W("auth") || "false"),
          fullHeight: 0,
          fullWidth: 0,
          scrollHeight: 0,
          scrollWidth: 0,
          theme: "light",
          show_sidebar: !0,
          clean_messages: !1,
          n_spx: 60,
          n_spy: 60,
          spx_step: 40,
          spy_step: 40,
          window_list: [],
          current_focus: "",
          current_focus_type: "",
          desktop_keyboard_show: !1,
          filemap: [],
          show_loading_page: !0,
          start_load_time: 0,
          context_menu_show: !1,
          context_menu_x: 0,
          context_menu_y: 0,
          context_menu_bottom_bar_display_mode: !1,
          context_menu_bottom_bar_show_target: "terminal",
          display_article_num: 0,
        },
        mutations: {
          open_new_window: function (t, e) {
            var s = B(),
              i = {
                uuid: s,
                spx: t.n_spx,
                spy: t.n_spy,
                zindex: 999,
                minimized: !1,
              };
            "explorer" === e.type
              ? ((i.type = "explorer"), (i.openpath = e.openpath))
              : "text" === e.type
              ? ((i.type = "text"),
                (i.filesrc = e.filesrc),
                (i.filename = e.filename),
                (i.size = e.size))
              : "browser" === e.type
              ? ((i.type = "browser"),
                (i.default_width = Math.min(0.8 * t.fullWidth, 1580)))
              : "music" === e.type
              ? ((i.type = "music"),
                (i.default_width = 400),
                (i.default_width = 400),
                (i.fixedsize = !0))
              : "settings" === e.type
              ? (i.type = "settings")
              : "terminal" === e.type
              ? (i.type = "terminal")
              : "vscode" === e.type && (i.type = "vscode"),
              t.window_list.push(i),
              this.commit("refresh_window_focus", { uuid: s });
            var n = Math.min(0.6 * t.fullWidth, 1e3),
              o = 600,
              a = 100;
            t.fullHeight - t.n_spy - a < o
              ? (t.n_spy = (t.n_spy + t.spy_step + o + a) % t.fullHeight)
              : (t.n_spy = t.n_spy + t.spy_step),
              t.fullWidth - t.n_spx < n
                ? (t.n_spx = (t.n_spx + t.spx_step + n) % t.fullWidth)
                : (t.n_spx = t.n_spx + t.spx_step);
          },
          close_window_with_uuid: function (t, e) {
            for (var s = 0; s < t.window_list.length; s++)
              if (t.window_list[s].uuid === e.uuid) {
                t.window_list.splice(s, 1);
                break;
              }
          },
          minimize_window_with_uuid: function (t, e) {
            var s,
              i = Object(M["a"])(t.window_list);
            try {
              for (i.s(); !(s = i.n()).done; ) {
                var n = s.value;
                if (n.uuid === e.uuid) {
                  n.minimized = !0;
                  break;
                }
              }
            } catch (o) {
              i.e(o);
            } finally {
              i.f();
            }
          },
          refresh_window_focus: function (t, e) {
            var s = "";
            if (void 0 != e.type) {
              var i,
                n = Object(M["a"])(t.window_list);
              try {
                for (n.s(); !(i = n.n()).done; ) {
                  var o = i.value;
                  o.type === e.type && (s = o.uuid);
                }
              } catch (p) {
                n.e(p);
              } finally {
                n.f();
              }
            } else s = e.uuid;
            t.current_focus = s;
            var a,
              r = [],
              l = 0,
              c = !1,
              d = Object(M["a"])(t.window_list);
            try {
              for (d.s(); !(a = d.n()).done; ) {
                var u = a.value;
                u.uuid === s
                  ? ((t.current_focus_type = u.type),
                    (u.focus = !0),
                    r.push({ id: l, zindex: 1e3 }),
                    (c = !0))
                  : r.push({ id: l, zindex: u.zindex }),
                  (l += 1);
              }
            } catch (p) {
              d.e(p);
            } finally {
              d.f();
            }
            if (c) {
              var w = function (t, e) {
                return t.zindex === e.zindex ? 0 : t.zindex > e.zindex ? -1 : 1;
              };
              r.sort(w), (l = 999);
              for (var h = 0, f = r; h < f.length; h++) {
                var m = f[h];
                (t.window_list[m.id].zindex = l), (l -= 1);
              }
            } else t.current_focus_type = "";
          },
          refresh_sizes: function (t) {
            (t.fullHeight =
              document.documentElement.clientHeight ||
              document.body.clientHeight ||
              window.innerHeight),
              (t.fullWidth =
                document.documentElement.clientWidth ||
                document.body.clientHeight ||
                window.innerWidth),
              t.n_spx > t.fullWidth &&
                (t.n_spx = Math.max(t.fullWidth - 600, 0)),
              t.n_spy > t.fullHeight &&
                (t.n_spy = Math.max(t.fullHeight - 600, 0));
          },
          refresh_scroll: function (t) {
            (t.scrollHeight =
              document.documentElement.scrollHeight ||
              document.body.scrollHeight),
              (t.scrollWidth =
                document.documentElement.scrollWidth ||
                document.body.scrollWidth);
          },
          get_auth_status: function (t) {
            "true" == i["default"].prototype.$cookies.get("auth")
              ? (t.authed = !0)
              : (t.authed = !1);
          },
          set_auth_status: function (t, e) {
            1 == e &&
              (i["default"].prototype.$cookies.set("auth", "true", "10m"),
              this.commit("get_login_status"));
          },
          set_darkmode: function (t) {
            (t.theme = "dark"),
              i["default"].prototype.$cookies.set("theme", t.theme, "720d");
          },
          set_lightmode: function (t) {
            (t.theme = "light"),
              i["default"].prototype.$cookies.set("theme", t.theme, "720d");
          },
          change_side_bar_status: function (t) {
            t.show_sidebar = !t.show_sidebar;
          },
          close_side_bar: function (t) {
            t.show_sidebar = !1;
          },
          clean_all_messages: function (t) {
            !1 === t.clean_messages &&
              ((t.clean_messages = !0),
              window.setTimeout(function () {
                t.clean_messages = !1;
              }, 100));
          },
          switch_keyboard_status: function (t) {
            t.desktop_keyboard_show = !t.desktop_keyboard_show;
          },
          commit_filemap: function (t, e) {
            t.filemap = e;
          },
          show_interlude: function (t) {
            (t.start_load_time = new Date().getTime()),
              (t.show_loading_page = !0);
          },
          hide_interlude: function (t) {
            t.show_loading_page = !1;
          },
          switch_global_window_show_status: function (t, e) {
            var s,
              i = e.type,
              n = [],
              o = 0,
              a = !0,
              r = Object(M["a"])(t.window_list);
            try {
              for (r.s(); !(s = r.n()).done; ) {
                var l = s.value;
                l.type === i && (n.push(o), !1 === l.minimized && (a = !1)),
                  (o += 1);
              }
            } catch (m) {
              r.e(m);
            } finally {
              r.f();
            }
            if (a) {
              var c,
                d = Object(M["a"])(n);
              try {
                for (d.s(); !(c = d.n()).done; ) {
                  var u = c.value;
                  t.window_list[u].minimized = !1;
                }
              } catch (m) {
                d.e(m);
              } finally {
                d.f();
              }
            } else {
              var w,
                h = Object(M["a"])(n);
              try {
                for (h.s(); !(w = h.n()).done; ) {
                  var f = w.value;
                  t.window_list[f].minimized = !0;
                }
              } catch (m) {
                h.e(m);
              } finally {
                h.f();
              }
            }
          },
          close_global_window_same_type: function (t, e) {
            var s = e.type,
              i = 0;
            while (i < t.window_list.length)
              t.window_list[i].type === s
                ? t.window_list.splice(i, 1)
                : (i += 1);
          },
          show_context_menu: function (t) {
            this.commit("refresh_window_focus", { uuid: "ContextMenu" });
            var e = e || window.event || e.which;
            (t.context_menu_x = e.clientX),
              (t.context_menu_y = e.clientY),
              (t.context_menu_show = !0);
          },
          show_context_menu_bottom_bar: function (t, e) {
            this.commit("refresh_window_focus", {
              uuid: "ContextMenuBottomBar",
            });
            var s = s || window.event || s.which;
            (t.context_menu_x = s.clientX),
              (t.context_menu_y = s.clientY),
              (t.context_menu_show = !0),
              (t.context_menu_bottom_bar_display_mode = e.mode),
              (t.context_menu_bottom_bar_show_target = e.target);
          },
          hide_context_menu: function (t) {
            this.commit("refresh_window_focus", { uuid: "" }),
              (t.context_menu_show = !1);
          },
          switch_show_desktop: function (t) {
            if (0 !== t.window_list.length) {
              var e,
                s = !0,
                i = Object(M["a"])(t.window_list);
              try {
                for (i.s(); !(e = i.n()).done; ) {
                  var n = e.value;
                  if (!0 === n.minimized) {
                    s = !1;
                    break;
                  }
                }
              } catch (c) {
                i.e(c);
              } finally {
                i.f();
              }
              var o = !1;
              s
                ? (o = !0)
                : ((o = !1), this.commit("refresh_window_focus", { uuid: "" }));
              var a,
                r = Object(M["a"])(t.window_list);
              try {
                for (r.s(); !(a = r.n()).done; ) {
                  var l = a.value;
                  l.minimized = o;
                }
              } catch (c) {
                r.e(c);
              } finally {
                r.f();
              }
            }
          },
          display_article_num_changed: function (t, e) {
            t.display_article_num = e;
          },
        },
      }),
      L = T,
      R = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i(
          "div",
          {
            staticClass:
              "tw-w-screen tw-h-screen main-background tw-select-none tw-overflow-hidden",
          },
          [
            t.show_keyboard
              ? i(
                  "div",
                  {
                    ref: "background_image",
                    staticClass:
                      "tw-absolute tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-center tw-items-center",
                  },
                  [
                    i("div", { staticStyle: { height: "60vh" } }),
                    i("KeyBoard", {
                      staticClass: "tw-z-20",
                      on: { vkey_pressed: t.vkey_pressed },
                    }),
                  ],
                  1
                )
              : t._e(),
            i(
              "div",
              {
                ref: "content",
                staticClass: "tw-flex tw-flex-col tw-w-full tw-h-full",
              },
              [
                i(
                  "div",
                  {
                    ref: "background_image",
                    staticClass:
                      "tw-absolute tw-w-full tw-h-full tw-flex tw-flex-row tw-justify-center tw-items-center",
                  },
                  [
                    i("div", { staticClass: "tw-w-140" }),
                    i("img", {
                      staticClass: "tw-w-160",
                      staticStyle: { opacity: ".03", "min-width": "600px" },
                      attrs: { src: s("c1b6"), alt: "" },
                      on: { load: t.bgloaded },
                    }),
                  ]
                ),
                i(
                  "div",
                  {
                    ref: "header",
                    staticClass:
                      "tw-w-full tw-h-32 tw-flex-none tw-flex tw-flex-col tw-items-center tw-justify-center  tw-z-10",
                  },
                  [
                    i(
                      "div",
                      {
                        staticClass:
                          "tw-text-4xl tw-tracking-wider tw-light tw-font-sans",
                      },
                      [
                        t._v(
                          t._s(t.PrefixZero(t.date_hour, 2)) +
                            ":" +
                            t._s(t.PrefixZero(t.date_minute, 2))
                        ),
                      ]
                    ),
                    i("div", { staticClass: "tw-mt-1.5 tw-text-sm" }, [
                      t._v(
                        t._s(t.date_year) +
                          "/" +
                          t._s(t.date_month) +
                          "/" +
                          t._s(t.date_date) +
                          " " +
                          t._s(t.date_weekday_display)
                      ),
                    ]),
                  ]
                ),
                i(
                  "div",
                  {
                    ref: "middle",
                    staticClass:
                      "tw-w-full tw-h-20 tw-flex-grow tw-flex  tw-flex-col tw-justify-center tw-items-center  tw-z-10",
                    staticStyle: { "min-height": "300px" },
                  },
                  [
                    t.show_middle
                      ? i(
                          "div",
                          {
                            staticClass:
                              "tw-w-72 tw-h-40 tw-rounded-xl tw-flex tw-flex-col tw-flex-nowrap",
                            staticStyle: {
                              "background-color": "rgba(81,90,156)",
                            },
                          },
                          [
                            i(
                              "div",
                              {
                                staticClass:
                                  "tw-h-10 tw-flex \n        tw-justify-center tw-items-end ",
                              },
                              [
                                i(
                                  "div",
                                  {
                                    staticClass: "tw-h-full ",
                                    staticStyle: { width: "31%" },
                                  },
                                  [
                                    i(
                                      "div",
                                      { staticClass: "ratio-container" },
                                      [
                                        i("div", {
                                          staticClass:
                                            "ratio-content tw-rounded-lg \n              tw-bg-center\n              tw-bg-cover",
                                          style: {
                                            backgroundImage:
                                              "url(" + s("92ef") + ")",
                                          },
                                        }),
                                      ]
                                    ),
                                  ]
                                ),
                              ]
                            ),
                            i(
                              "div",
                              {
                                staticClass:
                                  "tw-h-full tw-flex tw-justify-center tw-items-center tw-text-2xl tw-tracking-wide tw-pt-4",
                              },
                              [t._v(t._s(t.user_name))]
                            ),
                            i(
                              "div",
                              {
                                staticClass: " tw-absolute tw-w-72 tw-h-40 ",
                                staticStyle: { "pointer-events": "none" },
                              },
                              [
                                i("div", {
                                  ref: "infinite_bar",
                                  staticClass: "tw-absolute tw-rounded-lg ",
                                  class: {
                                    "process-animation": t.relay,
                                    "tw-hidden": !t.show_loading_bar,
                                  },
                                  staticStyle: {
                                    bottom: "12px",
                                    height: "38px",
                                    width: "264px",
                                    left: "12px",
                                  },
                                }),
                              ]
                            ),
                            i(
                              "div",
                              {
                                staticClass:
                                  "tw-h-full tw-flex tw-justify-center tw-items-center tw-py-3 tw-px-3",
                              },
                              [
                                i("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: t.password,
                                      expression: "password",
                                    },
                                  ],
                                  ref: "password_input_bar",
                                  staticClass:
                                    "tw-w-full tw-h-full tw-rounded-lg",
                                  staticStyle: {
                                    "background-color": "rgba(180,190,220,.35)",
                                    "outline-color": "rgba(0,119,230)",
                                    "text-align": "center",
                                  },
                                  attrs: {
                                    type: "password",
                                    placeholder: "Enter your password",
                                    autofocus: "",
                                    autocomplete: "",
                                  },
                                  domProps: { value: t.password },
                                  on: {
                                    keyup: function (e) {
                                      return !e.type.indexOf("key") &&
                                        t._k(
                                          e.keyCode,
                                          "enter",
                                          13,
                                          e.key,
                                          "Enter"
                                        )
                                        ? null
                                        : t.login_clicked(e);
                                    },
                                    input: function (e) {
                                      e.target.composing ||
                                        (t.password = e.target.value);
                                    },
                                  },
                                }),
                              ]
                            ),
                          ]
                        )
                      : t._e(),
                    t.show_middle
                      ? i(
                          "button",
                          {
                            staticClass:
                              "tw-rounded-full tw-w-12 tw-h-12 tw-mt-2 tw-bg-blue-600 tw-flex tw-items-center tw-justify-center hover:tw-bg-blue-700 tw-outline-none animate__animated",
                            class: { animate__shakeX: t.button_shaking },
                            on: { click: t.login_clicked },
                          },
                          [
                            i("v-icon", { staticClass: "tw-text-gray-100" }, [
                              t._v("mdi-arrow-right"),
                            ]),
                          ],
                          1
                        )
                      : t._e(),
                    t.show_middle
                      ? t._e()
                      : i(
                          "div",
                          {
                            staticClass:
                              "tw-h-full tw-w-full  tw-flex tw-flex-row tw-flex-nowrap tw-justify-evenly tw-items-center",
                            staticStyle: {
                              "max-width": "650px",
                              "min-width": "300px",
                            },
                            on: { click: t.blanker },
                          },
                          [
                            i("RestartButton", {
                              attrs: { typename: "shutdown" },
                              nativeOn: {
                                click: function (e) {
                                  return t.halt_clicked(e);
                                },
                              },
                            }),
                            i("RestartButton", {
                              attrs: { typename: "restart" },
                              nativeOn: {
                                click: function (e) {
                                  return t.restart_clicked(e);
                                },
                              },
                            }),
                            i("RestartButton", {
                              attrs: { typename: "sleep" },
                              nativeOn: {
                                click: function (e) {
                                  return t.halt_clicked(e);
                                },
                              },
                            }),
                          ],
                          1
                        ),
                  ]
                ),
                i(
                  "div",
                  {
                    ref: "footer",
                    staticClass:
                      "tw-w-full tw-h-32 tw-flex-none tw-flex  tw-z-10 tw-flex-wrap",
                  },
                  [
                    t._m(0),
                    i("div", { staticClass: "tw-h-full tw-flex-grow" }),
                    i(
                      "div",
                      {
                        staticClass:
                          "tw-h-full flex-none tw-w-76 tw-flex tw-justify-center tw-items-center tw-pr-2",
                        staticStyle: { "min-width": "300px" },
                      },
                      [
                        i(
                          "button",
                          {
                            staticClass:
                              "tw-rounded-full tw-w-12 tw-h-12 tw-bg-mygray-light hover:tw-bg-mygray-dark active:tw-bg-mygray-darker tw-flex tw-justify-center tw-items-center  tw-outline-none",
                            on: {
                              click: function (e) {
                                return t.show_keyboard_clicked();
                              },
                            },
                          },
                          [
                            i("v-icon", { staticClass: "tw-text-gray-100 " }, [
                              t._v("mdi-keyboard"),
                            ]),
                          ],
                          1
                        ),
                        i(
                          "button",
                          {
                            staticClass:
                              "tw-rounded-full tw-w-12 tw-h-12 tw-bg-mygray-light hover:tw-bg-mygray-dark active:tw-bg-mygray-darker ml-8 tw-flex tw-justify-center tw-items-center tw-outline-none",
                            on: { click: t.show_middle_clicked },
                          },
                          [
                            i("v-icon", { staticClass: "tw-text-gray-100 " }, [
                              t._v("mdi-power"),
                            ]),
                          ],
                          1
                        ),
                      ]
                    ),
                  ]
                ),
              ]
            ),
          ]
        );
      },
      H = [
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "div",
            {
              staticClass:
                "tw-w-76 tw-h-full flex-none tw-flex tw-justify-center tw-items-center",
              staticStyle: { "min-width": "300px" },
            },
            [
              i("img", {
                staticClass: "tw-w-32",
                attrs: { src: s("73e8"), alt: "" },
              }),
              i(
                "div",
                {
                  staticClass: "flex-none tw-flex tw-flex-col-reverse tw-pl-3",
                },
                [
                  i("div", { staticClass: "tw-h-3" }),
                  i("div", { staticClass: "tw-absolute tw-text-gray-400" }, [
                    t._v("20.2 Community Edition"),
                  ]),
                ]
              ),
            ]
          );
        },
      ],
      P =
        (s("fb6a"),
        s("a15b"),
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "div",
            {
              staticClass:
                " tw-py-1.5 tw-px-2 tw-flex tw-flex-col tw-flex-nowrap tw-select-none",
              staticStyle: {
                width: "600px",
                height: "200px",
                "background-color": "rgba(0,14,40)",
              },
            },
            [
              s(
                "div",
                { ref: "line1", staticClass: " tw-h-11 tw-flex tw-flex-row " },
                [
                  s(
                    "div",
                    { staticClass: "tw-w-11 flex-none" },
                    [
                      s("Key-2", {
                        attrs: { letter: "Esc", key_down_status: t.KESC },
                        nativeOn: {
                          mousedown: function (e) {
                            return t.mousedown("ESC");
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  s(
                    "div",
                    { staticClass: "tw-ml-1 tw-w-11 flex-none" },
                    [
                      s("Key", {
                        attrs: {
                          letter: "Q",
                          key_down_status: t.KQ,
                          upperscale: t.upperscale,
                        },
                        nativeOn: {
                          mousedown: function (e) {
                            return t.mousedown("Q");
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  s(
                    "div",
                    { staticClass: "tw-ml-1 tw-w-11 flex-none" },
                    [
                      s("Key", {
                        attrs: {
                          letter: "W",
                          key_down_status: t.KW,
                          upperscale: t.upperscale,
                        },
                        nativeOn: {
                          mousedown: function (e) {
                            return t.mousedown("W");
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  s(
                    "div",
                    { staticClass: "tw-ml-1 tw-w-11 flex-none" },
                    [
                      s("Key", {
                        attrs: {
                          letter: "E",
                          key_down_status: t.KE,
                          upperscale: t.upperscale,
                        },
                        nativeOn: {
                          mousedown: function (e) {
                            return t.mousedown("E");
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  s(
                    "div",
                    { staticClass: "tw-ml-1 tw-w-11 flex-none" },
                    [
                      s("Key", {
                        attrs: {
                          letter: "R",
                          key_down_status: t.KR,
                          upperscale: t.upperscale,
                        },
                        nativeOn: {
                          mousedown: function (e) {
                            return t.mousedown("R");
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  s(
                    "div",
                    { staticClass: "tw-ml-1 tw-w-11 flex-none" },
                    [
                      s("Key", {
                        attrs: {
                          letter: "T",
                          key_down_status: t.KT,
                          upperscale: t.upperscale,
                        },
                        nativeOn: {
                          mousedown: function (e) {
                            return t.mousedown("T");
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  s(
                    "div",
                    { staticClass: "tw-ml-1 tw-w-11 flex-none" },
                    [
                      s("Key", {
                        attrs: {
                          letter: "Y",
                          key_down_status: t.KY,
                          upperscale: t.upperscale,
                        },
                        nativeOn: {
                          mousedown: function (e) {
                            return t.mousedown("Y");
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  s(
                    "div",
                    { staticClass: "tw-ml-1 tw-w-11 flex-none" },
                    [
                      s("Key", {
                        attrs: {
                          letter: "U",
                          key_down_status: t.KU,
                          upperscale: t.upperscale,
                        },
                        nativeOn: {
                          mousedown: function (e) {
                            return t.mousedown("U");
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  s(
                    "div",
                    { staticClass: "tw-ml-1 tw-w-11 flex-none" },
                    [
                      s("Key", {
                        attrs: {
                          letter: "I",
                          key_down_status: t.KI,
                          upperscale: t.upperscale,
                        },
                        nativeOn: {
                          mousedown: function (e) {
                            return t.mousedown("I");
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  s(
                    "div",
                    { staticClass: "tw-ml-1 tw-w-11 flex-none" },
                    [
                      s("Key", {
                        attrs: {
                          letter: "O",
                          key_down_status: t.KO,
                          upperscale: t.upperscale,
                        },
                        nativeOn: {
                          mousedown: function (e) {
                            return t.mousedown("O");
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  s(
                    "div",
                    { staticClass: "tw-ml-1 tw-w-11 flex-none" },
                    [
                      s("Key", {
                        attrs: {
                          letter: "P",
                          key_down_status: t.KP,
                          upperscale: t.upperscale,
                        },
                        nativeOn: {
                          mousedown: function (e) {
                            return t.mousedown("P");
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  s(
                    "div",
                    { staticClass: "tw-flex-grow  tw-ml-1" },
                    [
                      s("Key-2", {
                        attrs: { letter: "icon_back", key_down_status: t.KBAK },
                        nativeOn: {
                          mousedown: function (e) {
                            return t.mousedown("BAK");
                          },
                        },
                      }),
                    ],
                    1
                  ),
                ]
              ),
              s(
                "div",
                {
                  ref: "line2",
                  staticClass: " tw-h-11 tw-flex tw-flex-row  tw-mt-1",
                },
                [
                  s(
                    "div",
                    { staticClass: "tw-w-14 flex-none" },
                    [
                      s("Key-2", {
                        attrs: { letter: "Tab", key_down_status: t.KTAB },
                        nativeOn: {
                          mousedown: function (e) {
                            return t.mousedown("TAB");
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  s(
                    "div",
                    { staticClass: "tw-ml-1 tw-w-11 flex-none" },
                    [
                      s("Key", {
                        attrs: {
                          letter: "A",
                          key_down_status: t.KA,
                          upperscale: t.upperscale,
                        },
                        nativeOn: {
                          mousedown: function (e) {
                            return t.mousedown("A");
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  s(
                    "div",
                    { staticClass: "tw-ml-1 tw-w-11 flex-none" },
                    [
                      s("Key", {
                        attrs: {
                          letter: "S",
                          key_down_status: t.KS,
                          upperscale: t.upperscale,
                        },
                        nativeOn: {
                          mousedown: function (e) {
                            return t.mousedown("S");
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  s(
                    "div",
                    { staticClass: "tw-ml-1 tw-w-11 flex-none" },
                    [
                      s("Key", {
                        attrs: {
                          letter: "D",
                          key_down_status: t.KD,
                          upperscale: t.upperscale,
                        },
                        nativeOn: {
                          mousedown: function (e) {
                            return t.mousedown("D");
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  s(
                    "div",
                    { staticClass: "tw-ml-1 tw-w-11 flex-none" },
                    [
                      s("Key", {
                        attrs: {
                          letter: "F",
                          key_down_status: t.KF,
                          upperscale: t.upperscale,
                        },
                        nativeOn: {
                          mousedown: function (e) {
                            return t.mousedown("F");
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  s(
                    "div",
                    { staticClass: "tw-ml-1 tw-w-11 flex-none" },
                    [
                      s("Key", {
                        attrs: {
                          letter: "G",
                          key_down_status: t.KG,
                          upperscale: t.upperscale,
                        },
                        nativeOn: {
                          mousedown: function (e) {
                            return t.mousedown("G");
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  s(
                    "div",
                    { staticClass: "tw-ml-1 tw-w-11 flex-none" },
                    [
                      s("Key", {
                        attrs: {
                          letter: "H",
                          key_down_status: t.KH,
                          upperscale: t.upperscale,
                        },
                        nativeOn: {
                          mousedown: function (e) {
                            return t.mousedown("H");
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  s(
                    "div",
                    { staticClass: "tw-ml-1 tw-w-11 flex-none" },
                    [
                      s("Key", {
                        attrs: {
                          letter: "J",
                          key_down_status: t.KJ,
                          upperscale: t.upperscale,
                        },
                        nativeOn: {
                          mousedown: function (e) {
                            return t.mousedown("J");
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  s(
                    "div",
                    { staticClass: "tw-ml-1 tw-w-11 flex-none" },
                    [
                      s("Key", {
                        attrs: {
                          letter: "K",
                          key_down_status: t.KK,
                          upperscale: t.upperscale,
                        },
                        nativeOn: {
                          mousedown: function (e) {
                            return t.mousedown("K");
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  s(
                    "div",
                    { staticClass: "tw-ml-1 tw-w-11 flex-none" },
                    [
                      s("Key", {
                        attrs: {
                          letter: "L",
                          key_down_status: t.KL,
                          upperscale: t.upperscale,
                        },
                        nativeOn: {
                          mousedown: function (e) {
                            return t.mousedown("L");
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  s(
                    "div",
                    { staticClass: "tw-ml-1 tw-w-11 flex-none" },
                    [
                      s("Key", {
                        attrs: { letter: "'", key_down_status: t.KQT },
                        nativeOn: {
                          mousedown: function (e) {
                            return t.mousedown("QT");
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  s(
                    "div",
                    { staticClass: "tw-flex-grow  tw-ml-1" },
                    [
                      s("Key-2", {
                        attrs: {
                          letter: "icon_xxxx",
                          key_down_status: t.KXXXX,
                        },
                        nativeOn: {
                          mousedown: function (e) {
                            return t.mousedown("XXXX");
                          },
                        },
                      }),
                    ],
                    1
                  ),
                ]
              ),
              s(
                "div",
                {
                  ref: "line3",
                  staticClass: " tw-h-11 tw-flex tw-flex-row  tw-mt-1",
                },
                [
                  s(
                    "div",
                    {
                      staticClass: "flex-none",
                      staticStyle: { width: "72px" },
                    },
                    [
                      s("Key-2", {
                        attrs: {
                          letter: "icon_shift",
                          key_down_status: t.KSHIFT,
                        },
                        nativeOn: {
                          mousedown: function (e) {
                            return t.mousedown("SHIFT");
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  s(
                    "div",
                    { staticClass: "tw-ml-1 tw-w-11 flex-none" },
                    [
                      s("Key", {
                        attrs: {
                          letter: "Z",
                          key_down_status: t.KZ,
                          upperscale: t.upperscale,
                        },
                        nativeOn: {
                          mousedown: function (e) {
                            return t.mousedown("Z");
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  s(
                    "div",
                    { staticClass: "tw-ml-1 tw-w-11 flex-none" },
                    [
                      s("Key", {
                        attrs: {
                          letter: "X",
                          key_down_status: t.KX,
                          upperscale: t.upperscale,
                        },
                        nativeOn: {
                          mousedown: function (e) {
                            return t.mousedown("X");
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  s(
                    "div",
                    { staticClass: "tw-ml-1 tw-w-11 flex-none" },
                    [
                      s("Key", {
                        attrs: {
                          letter: "C",
                          key_down_status: t.KC,
                          upperscale: t.upperscale,
                        },
                        nativeOn: {
                          mousedown: function (e) {
                            return t.mousedown("C");
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  s(
                    "div",
                    { staticClass: "tw-ml-1 tw-w-11 flex-none" },
                    [
                      s("Key", {
                        attrs: {
                          letter: "V",
                          key_down_status: t.KV,
                          upperscale: t.upperscale,
                        },
                        nativeOn: {
                          mousedown: function (e) {
                            return t.mousedown("V");
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  s(
                    "div",
                    { staticClass: "tw-ml-1 tw-w-11 flex-none" },
                    [
                      s("Key", {
                        attrs: {
                          letter: "B",
                          key_down_status: t.KB,
                          upperscale: t.upperscale,
                        },
                        nativeOn: {
                          mousedown: function (e) {
                            return t.mousedown("B");
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  s(
                    "div",
                    { staticClass: "tw-ml-1 tw-w-11 flex-none" },
                    [
                      s("Key", {
                        attrs: {
                          letter: "N",
                          key_down_status: t.KN,
                          upperscale: t.upperscale,
                        },
                        nativeOn: {
                          mousedown: function (e) {
                            return t.mousedown("N");
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  s(
                    "div",
                    { staticClass: "tw-ml-1 tw-w-11 flex-none" },
                    [
                      s("Key", {
                        attrs: {
                          letter: "M",
                          key_down_status: t.KM,
                          upperscale: t.upperscale,
                        },
                        nativeOn: {
                          mousedown: function (e) {
                            return t.mousedown("M");
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  s(
                    "div",
                    { staticClass: "tw-ml-1 tw-w-11 flex-none" },
                    [
                      s("Key", {
                        attrs: { letter: ",", key_down_status: t.KDH },
                        nativeOn: {
                          mousedown: function (e) {
                            return t.mousedown("DH");
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  s(
                    "div",
                    { staticClass: "tw-ml-1 tw-w-11 flex-none" },
                    [
                      s("Key", {
                        attrs: { letter: ".", key_down_status: t.KJH },
                        nativeOn: {
                          mousedown: function (e) {
                            return t.mousedown("JH");
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  s(
                    "div",
                    { staticClass: "tw-flex-grow  tw-ml-1" },
                    [
                      s("Key-2", {
                        attrs: {
                          letter: "icon_enter",
                          key_down_status: t.KENTER,
                        },
                        nativeOn: {
                          mousedown: function (e) {
                            return t.mousedown("ENTER");
                          },
                        },
                      }),
                    ],
                    1
                  ),
                ]
              ),
              s(
                "div",
                {
                  ref: "line4",
                  staticClass: " tw-h-11 tw-flex tw-flex-row  tw-mt-1",
                },
                [
                  s(
                    "div",
                    { staticClass: "tw-w-11 flex-none" },
                    [
                      s("Key-2", {
                        attrs: { letter: "Ctrl", key_down_status: t.KCTRL },
                        nativeOn: {
                          mousedown: function (e) {
                            return t.mousedown("CTRL");
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  "default" === t.mode
                    ? s(
                        "div",
                        { staticClass: "tw-w-11 flex-none tw-ml-1" },
                        [
                          s("Key-2", {
                            attrs: { letter: "Win", key_down_status: t.KWIN },
                            nativeOn: {
                              mousedown: function (e) {
                                return t.mousedown("WIN");
                              },
                            },
                          }),
                        ],
                        1
                      )
                    : t._e(),
                  "default" != t.mode
                    ? s(
                        "div",
                        { staticClass: "tw-w-11 flex-none tw-ml-1" },
                        [
                          s("Key-2", {
                            attrs: { letter: "", key_down_status: t.KWIN },
                          }),
                        ],
                        1
                      )
                    : t._e(),
                  s(
                    "div",
                    { staticClass: "tw-w-11 flex-none tw-ml-1" },
                    [
                      s("Key-2", {
                        attrs: { letter: "AlT", key_down_status: t.KALT },
                        nativeOn: {
                          mousedown: function (e) {
                            return t.mousedown("ALT");
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  s(
                    "div",
                    { staticClass: "tw-w-11 flex-none tw-ml-1" },
                    [
                      s("Key-2", {
                        attrs: { letter: "12?", key_down_status: t.K12 },
                        nativeOn: {
                          mousedown: function (e) {
                            return t.mousedown("12");
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  s(
                    "div",
                    { staticClass: "tw-w-52 flex-none tw-ml-1" },
                    [
                      s("Key", {
                        attrs: { letter: "", key_down_status: t.KSPACE },
                        nativeOn: {
                          mousedown: function (e) {
                            return t.mousedown("SPACE");
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  s(
                    "div",
                    { staticClass: "tw-w-11 flex-none tw-ml-1" },
                    [
                      s("Key-2", {
                        attrs: {
                          letter: "icon_left",
                          key_down_status: t.KLEFT,
                        },
                        nativeOn: {
                          mousedown: function (e) {
                            return t.mousedown("LEFT");
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  s(
                    "div",
                    { staticClass: "tw-w-11 flex-none tw-ml-1" },
                    [
                      s("Key-2", {
                        attrs: {
                          letter: "icon_right",
                          key_down_status: t.KRIGHT,
                        },
                        nativeOn: {
                          mousedown: function (e) {
                            return t.mousedown("RIGHT");
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  s(
                    "div",
                    { staticClass: "tw-w-11 flex-none tw-ml-1" },
                    [
                      s("Key-2", {
                        attrs: { letter: "icon_up", key_down_status: t.KUP },
                        nativeOn: {
                          mousedown: function (e) {
                            return t.mousedown("UP");
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  s(
                    "div",
                    { staticClass: "tw-w-11 flex-none tw-ml-1" },
                    [
                      s("Key-2", {
                        attrs: {
                          letter: "icon_down",
                          key_down_status: t.KDOWN,
                        },
                        nativeOn: {
                          mousedown: function (e) {
                            return t.mousedown("DOWN");
                          },
                        },
                      }),
                    ],
                    1
                  ),
                ]
              ),
            ]
          );
        }),
      V = [],
      Y = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            ref: "outer",
            staticClass:
              "tw-w-full tw-h-11 key-background tw-rounded-md shadowed",
          },
          [
            s(
              "div",
              {
                ref: "inner",
                staticClass:
                  "tw-w-full tw-h-1/2 key-background2 tw-rounded-md ",
              },
              [
                s(
                  "div",
                  {
                    staticClass:
                      "tw-flex tw-justify-center tw-items-center tw-w-11 tw-h-11 tw-pt-1 tw-text-xl tw-font-light",
                  },
                  [
                    t._v(
                      " " +
                        t._s(
                          t.upperscale
                            ? t.letter.toUpperCase()
                            : t.letter.toLowerCase()
                        ) +
                        " "
                    ),
                  ]
                ),
              ]
            ),
          ]
        );
      },
      G = [],
      X = {
        name: "Key",
        components: {},
        data: function () {
          return {};
        },
        props: {
          letter: { type: String, default: "" },
          key_down_status: { type: Boolean, default: !1 },
          upperscale: { type: Boolean, default: !1 },
        },
        created: function () {},
        mounted: function () {},
        watch: {
          key_down_status: function (t) {
            t ? this.keydown() : this.keyup();
          },
        },
        computed: {},
        methods: {
          keydown: function () {
            this.$refs.outer.classList.remove("shadowed"),
              this.$refs.outer.classList.remove("key-background"),
              this.$refs.outer.classList.add("mt025"),
              this.$refs.outer.classList.add("key-background-pressed"),
              this.$refs.inner.classList.remove("key-background2"),
              this.$refs.inner.classList.add("key-background2-pressed");
          },
          keyup: function () {
            this.$refs.outer.classList.add("shadowed"),
              this.$refs.outer.classList.add("key-background"),
              this.$refs.outer.classList.remove("mt025"),
              this.$refs.outer.classList.remove("key-background-pressed"),
              this.$refs.inner.classList.add("key-background2"),
              this.$refs.inner.classList.remove("key-background2-pressed");
          },
        },
      },
      U = X,
      Q = (s("fbae"), Object(d["a"])(U, Y, G, !1, null, "532f389a", null)),
      Z = Q.exports,
      J = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            ref: "outer",
            staticClass:
              "tw-w-full tw-h-11 key-background tw-rounded-md shadowed",
          },
          [
            s(
              "div",
              {
                ref: "inner",
                staticClass:
                  "tw-w-full tw-h-1/2 key-background2 tw-rounded-md ",
              },
              [
                s(
                  "div",
                  {
                    staticClass:
                      "tw-flex tw-justify-center tw-items-center tw-w-11 tw-h-11 tw-pt-1 tw-font-light",
                  },
                  [
                    t.letter.length <= 5
                      ? s("span", [t._v(t._s(t.letter))])
                      : t._e(),
                    "icon_back" == t.letter
                      ? s(
                          "div",
                          [
                            s("v-icon", { staticClass: "tw-text-gray-100 " }, [
                              t._v("mdi-backspace-outline"),
                            ]),
                          ],
                          1
                        )
                      : t._e(),
                    "icon_xxxx" == t.letter
                      ? s(
                          "div",
                          [
                            s("v-icon", { staticClass: "tw-text-gray-100 " }, [
                              t._v("mdi-close-box-outline"),
                            ]),
                          ],
                          1
                        )
                      : t._e(),
                    "icon_shift" == t.letter
                      ? s(
                          "div",
                          [
                            s("v-icon", { staticClass: "tw-text-gray-100 " }, [
                              t._v("mdi-arrow-up-bold-outline"),
                            ]),
                          ],
                          1
                        )
                      : t._e(),
                    "icon_enter" == t.letter
                      ? s(
                          "div",
                          [
                            s("v-icon", { staticClass: "tw-text-gray-100 " }, [
                              t._v("mdi-subdirectory-arrow-left"),
                            ]),
                          ],
                          1
                        )
                      : t._e(),
                    "icon_left" == t.letter
                      ? s(
                          "div",
                          [
                            s("v-icon", { staticClass: "tw-text-gray-100 " }, [
                              t._v("mdi-arrow-left"),
                            ]),
                          ],
                          1
                        )
                      : t._e(),
                    "icon_right" == t.letter
                      ? s(
                          "div",
                          [
                            s("v-icon", { staticClass: "tw-text-gray-100 " }, [
                              t._v("mdi-arrow-right"),
                            ]),
                          ],
                          1
                        )
                      : t._e(),
                    "icon_up" == t.letter
                      ? s(
                          "div",
                          [
                            s("v-icon", { staticClass: "tw-text-gray-100 " }, [
                              t._v("mdi-arrow-up"),
                            ]),
                          ],
                          1
                        )
                      : t._e(),
                    "icon_down" == t.letter
                      ? s(
                          "div",
                          [
                            s("v-icon", { staticClass: "tw-text-gray-100 " }, [
                              t._v("mdi-arrow-down"),
                            ]),
                          ],
                          1
                        )
                      : t._e(),
                  ]
                ),
              ]
            ),
          ]
        );
      },
      q = [],
      $ = {
        name: "Key",
        components: {},
        data: function () {
          return {};
        },
        props: {
          letter: { type: String, default: "" },
          key_down_status: { type: Boolean, default: !1 },
        },
        created: function () {},
        mounted: function () {},
        watch: {
          key_down_status: function (t) {
            t ? this.keydown() : this.keyup();
          },
        },
        computed: {},
        methods: {
          keydown: function () {
            this.$refs.outer.classList.remove("shadowed"),
              this.$refs.outer.classList.remove("key-background"),
              this.$refs.outer.classList.add("mt025"),
              this.$refs.outer.classList.add("key-background-pressed"),
              this.$refs.inner.classList.remove("key-background2"),
              this.$refs.inner.classList.add("key-background2-pressed");
          },
          keyup: function () {
            this.$refs.outer.classList.add("shadowed"),
              this.$refs.outer.classList.add("key-background"),
              this.$refs.outer.classList.remove("mt025"),
              this.$refs.outer.classList.remove("key-background-pressed"),
              this.$refs.inner.classList.add("key-background2"),
              this.$refs.inner.classList.remove("key-background2-pressed");
          },
        },
      },
      tt = $,
      et = (s("3086"), s("132d")),
      st = Object(d["a"])(tt, J, q, !1, null, "6b557e46", null),
      it = st.exports;
    p()(st, { VIcon: et["a"] });
    var nt = {
        name: "KeyBoard",
        components: { Key: Z, Key2: it },
        data: function () {
          return {
            upperscale: !1,
            tmp_handler: null,
            key_hold: "Q",
            KESC: !1,
            KQ: !1,
            KW: !1,
            KE: !1,
            KR: !1,
            KT: !1,
            KY: !1,
            KU: !1,
            KI: !1,
            KO: !1,
            KP: !1,
            KBAK: !1,
            KTAB: !1,
            KA: !1,
            KS: !1,
            KD: !1,
            KF: !1,
            KG: !1,
            KH: !1,
            KJ: !1,
            KK: !1,
            KL: !1,
            KQT: !1,
            KXXXX: !1,
            KSHIFT: !1,
            KZ: !1,
            KX: !1,
            KC: !1,
            KV: !1,
            KB: !1,
            KN: !1,
            KM: !1,
            KDH: !1,
            KJH: !1,
            KENTER: !1,
            KCTRL: !1,
            KWIN: !1,
            KALT: !1,
            K12: !1,
            KSPACE: !1,
            KLEFT: !1,
            KRIGHT: !1,
            KUP: !1,
            KDOWN: !1,
          };
        },
        props: { mode: { type: String, default: "default" } },
        created: function () {},
        mounted: function () {},
        watch: {},
        computed: {},
        methods: {
          mousedown: function (t) {
            (this["K" + t] = !0),
              (this.key_hold = t),
              (this.tmp_handler = document.onmouseup),
              (document.onmouseup = this.mouseup_handler);
          },
          mouseup_handler: function () {
            (this["K" + this.key_hold] = !1),
              (document.onmouseup = this.tmp_handler),
              "SHIFT" == this.key_hold && (this.upperscale = !this.upperscale),
              this.$emit("vkey_pressed", this.key_hold, this.upperscale);
          },
        },
      },
      ot = nt,
      at = Object(d["a"])(ot, P, V, !1, null, "79539fae", null),
      rt = at.exports,
      lt = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "tw-flex tw-flex-col tw-items-center" },
          [
            "shutdown" == t.typename
              ? s(
                  "div",
                  {
                    staticClass:
                      "tw-w-20 tw-h-20  tw-rounded-full tw-flex tw-justify-center tw-items-center tw-bg-mygray-deeldark tw-border-2 tw-border-gray-600",
                  },
                  [
                    s(
                      "v-icon",
                      {
                        staticClass: "tw-w-full tw-h-full tw-text-gray-100 ",
                        attrs: { "x-large": "" },
                      },
                      [t._v("mdi-power")]
                    ),
                  ],
                  1
                )
              : t._e(),
            "shutdown" == t.typename
              ? s(
                  "div",
                  {
                    staticClass:
                      "tw-mt-4 tw-bg-mygray-deeldark tw-border-2 tw-border-gray-600 tw-rounded-lg tw-px-2 tw-py-0.5",
                    staticStyle: { "text-align": "center" },
                  },
                  [t._v("Shut down")]
                )
              : t._e(),
            "shutdown" != t.typename
              ? s(
                  "div",
                  {
                    on: {
                      mouseover: function (e) {
                        t.hover = !0;
                      },
                      mouseleave: function (e) {
                        t.hover = !1;
                      },
                    },
                  },
                  [
                    s(
                      "div",
                      {
                        ref: "ticon",
                        staticClass:
                          "tw-w-20 tw-h-20  tw-rounded-full tw-flex tw-justify-center tw-items-center",
                      },
                      [
                        "sleep" == t.typename
                          ? s(
                              "v-icon",
                              {
                                class: t.icolor_class,
                                attrs: { "x-large": "" },
                              },
                              [t._v("mdi-moon-waxing-crescent")]
                            )
                          : t._e(),
                        "restart" == t.typename
                          ? s(
                              "v-icon",
                              {
                                class: t.icolor_class,
                                attrs: { "x-large": "" },
                              },
                              [t._v("mdi-reload")]
                            )
                          : t._e(),
                      ],
                      1
                    ),
                    s("div", { staticClass: "tw-h-4 tw-w-20" }),
                    s(
                      "div",
                      {
                        ref: "text",
                        staticClass:
                          "tw-rounded-lg tw-px-2 tw-py-0.5 tw-text-gray-100",
                        staticStyle: { "text-align": "center" },
                      },
                      [t._v(t._s("sleep" == t.typename ? "Sleep" : "Restart"))]
                    ),
                  ]
                )
              : t._e(),
          ]
        );
      },
      ct = [],
      dt = {
        name: "Blank",
        components: {},
        data: function () {
          return {
            hover: !1,
            icolor_class: "tw-w-full tw-h-full tw-text-gray-100",
          };
        },
        props: { typename: { type: String, default: "shutdown" } },
        created: function () {},
        mounted: function () {},
        watch: {
          hover: function (t) {
            t
              ? (this.$refs.ticon.classList.add("tw-bg-mygray-purple"),
                (this.icolor_class = "tw-w-full tw-h-full tw-text-gray-900"),
                this.$refs.text.classList.remove("tw-text-gray-100"),
                this.$refs.text.classList.add("tw-text-gray-900"),
                this.$refs.text.classList.add("tw-bg-mygray-purple"))
              : (this.$refs.ticon.classList.remove("tw-bg-mygray-purple"),
                (this.icolor_class = "tw-w-full tw-h-full tw-text-gray-100"),
                this.$refs.text.classList.add("tw-text-gray-100"),
                this.$refs.text.classList.remove("tw-text-gray-900"),
                this.$refs.text.classList.remove("tw-bg-mygray-purple"));
          },
        },
        computed: {},
        methods: {},
      },
      ut = dt,
      wt = Object(d["a"])(ut, lt, ct, !1, null, "ef590dd2", null),
      ht = wt.exports;
    p()(wt, { VIcon: et["a"] });
    var ft = new Array(
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ),
      mt = {
        name: "LoginPage",
        components: { KeyBoard: rt, RestartButton: ht },
        data: function () {
          return {
            login_locked: !1,
            show_keyboard: !1,
            show_middle: !0,
            date_hour: 0,
            date_minute: 0,
            date_year: 1970,
            date_month: 1,
            date_date: 1,
            date_weekday: 0,
            user_name: "dawidolko",
            password: "12345678",
            password_answer: "12345678",
            relay: !1,
            show_loading_bar: !1,
            button_shaking: !1,
            timer: null,
            timer2: null,
          };
        },
        created: function () {
          var t = this;
          this.refresh_time(),
            window.setInterval(function () {
              t.refresh_time();
            }, 1e3);
        },
        mounted: function () {
          var t = this;
          this.$refs.password_input_bar;
          this.timer = window.setInterval(function () {
            (t.relay = !1),
              (t.$refs.infinite_bar.style.width = "0px"),
              (t.timer2 = window.setTimeout(function () {
                (t.relay = !0), (t.$refs.infinite_bar.style.width = "264px");
              }, 200));
          }, 800);
        },
        watch: {},
        computed: {
          date_weekday_display: function () {
            return ft[this.date_weekday];
          },
        },
        methods: {
          PrefixZero: function (t, e) {
            return (Array(e).join(0) + t).slice(-e);
          },
          login_clicked: function () {
            var t = this;
            if (this.password === this.password_answer)
              return (
                (this.login_locked = !1),
                (this.show_loading_bar = !0),
                void window.setTimeout(function () {
                  (t.show_loading_bar = !1),
                    clearInterval(t.timer),
                    clearTimeout(t.timer2),
                    t.$router.push({ name: "Desktop" });
                  var e = document.getElementById("app");
                  e.requestFullscreen();
                }, 1800)
              );
            if ("" === this.password) {
              this.login_locked = !0;
              for (
                var e = function (e) {
                    window.setTimeout(function () {
                      (t.password += t.password_answer[e]),
                        e === t.password_answer.length - 1 && t.login_clicked();
                    }, 100 * e);
                  },
                  s = 0;
                s < this.password_answer.length;
                s++
              )
                e(s);
            } else
              (this.show_loading_bar = !0),
                window.setTimeout(function () {
                  (t.show_loading_bar = !1), (t.button_shaking = !0);
                }, 3e3),
                window.setTimeout(function () {
                  t.button_shaking = !1;
                }, 3800);
          },
          vkey_pressed: function (t, e) {
            if (!this.login_locked) {
              if ((this.$refs.password_input_bar.focus(), "QT" === t)) t = "'";
              else if ("DH" === t) t = ",";
              else if ("JH" === t) t = ".";
              else if ("SPACE" === t) t = " ";
              else {
                if ("BAK" === t) {
                  var s = this.$refs.password_input_bar.selectionStart;
                  return void (this.password =
                    this.password.substr(0, Math.max(0, s - 1)) +
                    this.password.substr(s, this.password.length - s));
                }
                if ("LEFT" === t) {
                  var i = this.$refs.password_input_bar.selectionStart;
                  return void (this.$refs.password_input_bar.selectionStart =
                    this.$refs.password_input_bar.selectionEnd =
                      Math.max(i - 1, 0));
                }
                if ("RIGHT" === t) {
                  var n = this.$refs.password_input_bar.selectionStart;
                  return void (this.$refs.password_input_bar.selectionStart =
                    this.$refs.password_input_bar.selectionEnd =
                      Math.min(n + 1, this.password.length));
                }
                if ("ENTER" === t) return void this.login_clicked();
              }
              var o = 1 == t.length ? t : e ? t.toUpperCase() : t.toLowerCase();
              if (!this.login_locked && 1 === o.length) {
                var a = this.$refs.password_input_bar.selectionStart;
                this.password =
                  this.password.substr(0, a) +
                  o +
                  this.password.substr(a, this.password.length - a);
              }
            }
          },
          show_keyboard_clicked: function () {
            this.show_keyboard = !this.show_keyboard;
          },
          show_middle_clicked: function () {
            (this.show_middle = !this.show_middle),
              this.show_middle
                ? (this.login_locked = !1)
                : (this.login_locked = !0);
          },
          blanker: function () {
            this.show_middle || this.show_middle_clicked();
          },
          refresh_time: function () {
            var t = new Date();
            (this.date_year = t.getFullYear()),
              (this.date_month = t.getMonth() + 1),
              (this.date_date = t.getDate()),
              (this.date_weekday = t.getDay() - 1),
              (this.date_hour = t.getHours()),
              (this.date_minute = t.getMinutes());
          },
          bgloaded: function () {
            var t = this,
              e = new Date().getTime(),
              s = Math.max(e - this.$store.state.start_load_time, 0);
            (isNaN(s) || void 0 === s || null === s) && (s = 0);
            var i = Math.max(1800 - s, 0);
            window.setTimeout(function () {
              t.$store.commit("hide_interlude");
            }, i);
          },
          restart_clicked: function () {
            location.reload();
          },
          halt_clicked: function () {
            var t = this;
            (document.body.style.cursor = "progress"),
              window.setTimeout(function () {
                (document.body.style.cursor = "default"),
                  t.$router.push({ name: "Down" });
              }, 800);
          },
        },
      },
      pt = mt,
      _t = (s("3100"), Object(d["a"])(pt, R, H, !1, null, "74fdc2ab", null)),
      gt = _t.exports;
    p()(_t, { VIcon: et["a"] });
    var vt = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i(
          "div",
          {
            staticClass:
              " tw-antialiased tw-w-screen tw-h-screen tw-overflow-hidden tw-flex tw-justify-center tw-items-center",
            staticStyle: { "min-height": "600px", "min-width": "800px" },
          },
          [
            i("div", { staticClass: "tw-w-full tw-h-full tw-relative" }, [
              i(
                "div",
                {
                  ref: "background",
                  staticClass:
                    "tw-relative tw-pb-9/16 tw-h-full tw-select-none",
                },
                [
                  i("img", {
                    staticClass: "tw-absolute tw-h-full tw-object-cover",
                    attrs: { src: s("e091"), alt: "" },
                    on: { load: t.bgloaded },
                  }),
                ]
              ),
            ]),
            i(
              "div",
              {
                ref: "frontground",
                staticClass:
                  "tw-absolute tw-w-full tw-h-full tw-z-10 tw-overflow-hidden",
                staticStyle: { top: "0", left: "0", "pointer-events": "none" },
              },
              [
                t._e(),
                t._l(t.window_list, function (e) {
                  return i(
                    "div",
                    { key: e.uuid },
                    [
                      "explorer" === e.type
                        ? i("WindowFolder", {
                            attrs: {
                              uuid: e.uuid,
                              startpos_x: e.spx,
                              startpos_y: e.spy,
                              filemap: t.map,
                              openpath: e.openpath,
                              zindex: e.zindex,
                              minimized: e.minimized,
                            },
                          })
                        : t._e(),
                      "text" === e.type
                        ? i("WindowText", {
                            attrs: {
                              uuid: e.uuid,
                              startpos_x: e.spx,
                              startpos_y: e.spy,
                              filesrc: e.filesrc,
                              filename: e.filename,
                              size: e.size,
                              zindex: e.zindex,
                              minimized: e.minimized,
                            },
                          })
                        : t._e(),
                      "browser" === e.type
                        ? i("WindowBrowser", {
                            attrs: {
                              uuid: e.uuid,
                              startpos_x: e.spx,
                              startpos_y: e.spy,
                              zindex: e.zindex,
                              default_width: e.default_width,
                              minimized: e.minimized,
                            },
                          })
                        : t._e(),
                      "vscode" === e.type
                        ? i("WindowVSCode", {
                            attrs: {
                              uuid: e.uuid,
                              startpos_x: e.spx,
                              startpos_y: e.spy,
                              zindex: e.zindex,
                              minimized: e.minimized,
                            },
                          })
                        : t._e(),
                      "music" === e.type
                        ? i("WindowMusic", {
                            attrs: {
                              uuid: e.uuid,
                              startpos_x: e.spx,
                              startpos_y: e.spy,
                              zindex: e.zindex,
                              default_width: e.default_width,
                              default_height: e.default_height,
                              fixedsize: e.fixedsize,
                              minimized: e.minimized,
                            },
                          })
                        : t._e(),
                      "settings" === e.type
                        ? i("WindowSetting", {
                            attrs: {
                              uuid: e.uuid,
                              startpos_x: e.spx,
                              startpos_y: e.spy,
                              zindex: e.zindex,
                              minimized: e.minimized,
                            },
                          })
                        : t._e(),
                      "terminal" === e.type
                        ? i("WindowTerminal", {
                            attrs: {
                              uuid: e.uuid,
                              startpos_x: e.spx,
                              startpos_y: e.spy,
                              zindex: e.zindex,
                              minimized: e.minimized,
                            },
                          })
                        : t._e(),
                    ],
                    1
                  );
                }),
              ],
              2
            ),
            i(
              "div",
              {
                ref: "realbackground",
                staticClass: "tw-absolute tw-w-full tw-h-full realbackground",
                staticStyle: { top: "0", left: "0" },
                on: {
                  contextmenu: function (e) {
                    return e.preventDefault(), t.bg_mr_clicked(e);
                  },
                },
              },
              [
                i(
                  "div",
                  {
                    staticClass: "tw-absolute tw-w-full ",
                    staticStyle: {
                      "pointer-events": "auto",
                      height: "calc(100% - 100px)",
                    },
                    on: { click: t.background_clicked },
                  },
                  [
                    t.desktop_keyboard_show
                      ? i(
                          "div",
                          {
                            ref: "keyboard_div",
                            staticClass: "tw-absolute ",
                            staticStyle: {
                              "z-index": "1001",
                              width: "600px",
                              height: "200px",
                              top: "0px",
                              left: "0px",
                            },
                          },
                          [
                            i("KeyBoardMoveIcon", {
                              nativeOn: {
                                mousedown: function (e) {
                                  return t.keyboard_move_down(e);
                                },
                              },
                            }),
                            i("KeyBoard", {
                              attrs: { mode: "desktop" },
                              on: { vkey_pressed: t.vkey_pressed },
                            }),
                          ],
                          1
                        )
                      : t._e(),
                    t.context_menu_show &&
                    "ContextMenu" === t.$store.state.current_focus
                      ? i("ContextMenu")
                      : t._e(),
                    t.context_menu_show &&
                    "ContextMenuBottomBar" === t.$store.state.current_focus
                      ? i("ContextMenuBottomBar", {
                          attrs: {
                            mode: t.$store.state
                              .context_menu_bottom_bar_display_mode,
                            target:
                              t.$store.state
                                .context_menu_bottom_bar_show_target,
                          },
                        })
                      : t._e(),
                  ],
                  1
                ),
                i(
                  "div",
                  {
                    staticClass: "tw-absolute tw-w-1",
                    staticStyle: { height: "calc(100% - 20px)" },
                  },
                  [i("DesktopFileArray", { attrs: { filemap: t.map } })],
                  1
                ),
                i("BottomBar"),
                i("SideBar"),
              ],
              1
            ),
          ]
        );
      },
      yt = [],
      xt =
        (s("b0c0"),
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "div",
            {
              staticClass:
                "tw-absolute tw-bottom-0 tw-p-3 tw-w-full tw-select-none",
              staticStyle: { "min-width": "600px", "z-index": "1001" },
            },
            [
              s(
                "div",
                {
                  staticClass: "tw-h-12 tw-w-fulltw-rounded-xl",
                  staticStyle: {
                    "backdrop-filter": "blur(30px)",
                    "box-shadow": "0 4px 10px rgba(16,16,16,.3)",
                  },
                },
                [
                  s(
                    "div",
                    {
                      staticClass:
                        "tw-h-full tw-w-full tw-rounded-xl tw-flex tw-items-center tw-justify-center",
                      staticStyle: {
                        "background-color": "rgba(235,235,235,.42)",
                      },
                    },
                    [
                      s(
                        "div",
                        {
                          staticClass:
                            " tw-absolute tw-h-full  tw-flex tw-items-center tw-justify-center",
                          staticStyle: { left: "0" },
                        },
                        [
                          s(
                            "div",
                            {
                              staticClass:
                                "tw-w-full tw-h-full  tw-hidden sm:tw-block",
                            },
                            [
                              s(
                                "div",
                                {
                                  staticClass:
                                    " tw-w-full tw-h-full tw-flex tw-items-center  tw-px-2",
                                },
                                [
                                  s("Icon", {
                                    attrs: {
                                      srcc: "menu",
                                      mode: "large",
                                      noamine: !0,
                                      tagcont: "Starter",
                                    },
                                    on: { button_clicked: function (t) {} },
                                  }),
                                  s("Icon", {
                                    staticClass: " tw-ml-3",
                                    attrs: {
                                      srcc: "desktop",
                                      mode: "large",
                                      noamine: !0,
                                      tagcont: "Show Desktop",
                                    },
                                    on: { button_clicked: function (t) {} },
                                    nativeOn: {
                                      click: function (e) {
                                        return t.showdesktop_clicked(e);
                                      },
                                    },
                                  }),
                                  s("Icon", {
                                    staticClass: " tw-ml-3",
                                    attrs: {
                                      srcc: "tasks",
                                      mode: "large",
                                      noamine: !0,
                                      tagcont: "Multitasking View",
                                    },
                                    on: { button_clicked: function (t) {} },
                                    nativeOn: {
                                      click: function (e) {
                                        return t.exit_full_screen(e);
                                      },
                                    },
                                  }),
                                  s("div", { staticClass: "vl tw-mx-2" }),
                                ],
                                1
                              ),
                            ]
                          ),
                        ]
                      ),
                      s(
                        "div",
                        {
                          staticClass:
                            "tw-flex-none tw-w-100 tw-h-full tw-hidden lg:tw-block",
                        },
                        [
                          s(
                            "div",
                            {
                              staticClass:
                                " tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center",
                            },
                            [
                              t.has_explorer
                                ? s("Icon", {
                                    staticClass: " tw-ml-3",
                                    attrs: {
                                      srcc: "explorer",
                                      mode: "large",
                                      tagcont: "File Manager",
                                      cfocus:
                                        "explorer" ===
                                        t.$store.state.current_focus_type,
                                      fshow: t.has_explorer,
                                    },
                                    on: { button_clicked: t.explorer_clicked },
                                    nativeOn: {
                                      contextmenu: function (e) {
                                        return (
                                          e.preventDefault(),
                                          t.mr_clicked(
                                            e,
                                            "explorer",
                                            t.has_explorer
                                          )
                                        );
                                      },
                                    },
                                  })
                                : t._e(),
                              t.has_text
                                ? s("Icon", {
                                    staticClass: " tw-ml-3",
                                    attrs: {
                                      srcc: "doc",
                                      mode: "large",
                                      tagcont: "Text Editor",
                                      cfocus:
                                        "text" ===
                                        t.$store.state.current_focus_type,
                                      fshow: t.has_text,
                                    },
                                    on: { button_clicked: t.text_clicked },
                                    nativeOn: {
                                      contextmenu: function (e) {
                                        return (
                                          e.preventDefault(),
                                          t.mr_clicked(e, "text", t.has_text)
                                        );
                                      },
                                    },
                                  })
                                : t._e(),
                              s("Icon", {
                                staticClass: " tw-ml-3",
                                attrs: {
                                  srcc: "browser",
                                  mode: "large",
                                  tagcont: "Browser",
                                  cfocus:
                                    "browser" ===
                                    t.$store.state.current_focus_type,
                                  fshow: t.has_browser,
                                },
                                on: { button_clicked: t.browser_clicked },
                                nativeOn: {
                                  contextmenu: function (e) {
                                    return (
                                      e.preventDefault(),
                                      t.mr_clicked(e, "browser", t.has_browser)
                                    );
                                  },
                                },
                              }),
                              s("Icon", {
                                staticClass: " tw-ml-3",
                                attrs: {
                                  srcc: "music",
                                  mode: "large",
                                  tagcont: "Music",
                                  cfocus:
                                    "music" ===
                                    t.$store.state.current_focus_type,
                                  fshow: t.has_music,
                                },
                                on: { button_clicked: t.music_clicked },
                                nativeOn: {
                                  contextmenu: function (e) {
                                    return (
                                      e.preventDefault(),
                                      t.mr_clicked(e, "music", t.has_music)
                                    );
                                  },
                                },
                              }),
                              s("Icon", {
                                staticClass: " tw-ml-3",
                                attrs: {
                                  srcc: "vscode",
                                  mode: "large",
                                  tagcont: "vscode",
                                  cfocus:
                                    "vscode" ===
                                    t.$store.state.current_focus_type,
                                  fshow: t.has_vscode,
                                },
                                on: { button_clicked: t.vscode_clicked },
                                nativeOn: {
                                  contextmenu: function (e) {
                                    return (
                                      e.preventDefault(),
                                      t.mr_clicked(e, "vscode", t.has_vscode)
                                    );
                                  },
                                },
                              }),
                              s("Icon", {
                                staticClass: " tw-ml-3",
                                attrs: {
                                  srcc: "settings",
                                  mode: "large",
                                  tagcont: "Settings",
                                  cfocus:
                                    "settings" ===
                                    t.$store.state.current_focus_type,
                                  fshow: t.has_settings,
                                },
                                on: { button_clicked: t.settings_clicked },
                                nativeOn: {
                                  contextmenu: function (e) {
                                    return (
                                      e.preventDefault(),
                                      t.mr_clicked(
                                        e,
                                        "settings",
                                        t.has_settings
                                      )
                                    );
                                  },
                                },
                              }),
                              s("Icon", {
                                staticClass: " tw-ml-3",
                                attrs: {
                                  srcc: "shell",
                                  mode: "large",
                                  tagcont: "Terminal",
                                  cfocus:
                                    "terminal" ===
                                    t.$store.state.current_focus_type,
                                  fshow: t.has_terminal,
                                },
                                on: { button_clicked: t.terminal_clicked },
                                nativeOn: {
                                  contextmenu: function (e) {
                                    return (
                                      e.preventDefault(),
                                      t.mr_clicked(
                                        e,
                                        "terminal",
                                        t.has_terminal
                                      )
                                    );
                                  },
                                },
                              }),
                            ],
                            1
                          ),
                        ]
                      ),
                      s(
                        "div",
                        {
                          staticClass:
                            " tw-absolute tw-h-full tw-flex tw-items-center tw-justify-center tw-flex-row-reverse tw-pr-2",
                          staticStyle: { right: "0" },
                        },
                        [
                          s("Icon", {
                            attrs: {
                              mode: "small",
                              iconn: "bell",
                              smalltrue: !1,
                              tagcont: t.display_article_num + " Messages",
                            },
                            on: { button_clicked: t.bell_clicked },
                          }),
                          s("div", { staticClass: "tw-w-2" }),
                          s("Icon", {
                            attrs: {
                              srcc: "recycle",
                              mode: "large",
                              tagcont: "Recycle Bin",
                            },
                          }),
                          s(
                            "div",
                            {
                              staticClass:
                                "tw-w-20 tw-h-full tw-flex tw-flex-col tw-justify-start tw-items-center tw-py-1 ",
                            },
                            [
                              s(
                                "div",
                                {
                                  staticClass:
                                    "tw-flex-none tw-py-0 tw-my-0 tw-font-bold tw-text-xl",
                                },
                                [
                                  t._v(
                                    t._s(t.PrefixZero(t.date_hour, 2)) +
                                      ":" +
                                      t._s(t.PrefixZero(t.date_minute, 2))
                                  ),
                                ]
                              ),
                              s(
                                "div",
                                {
                                  staticClass:
                                    " tw-absolute tw-text-xs tw-font-bold",
                                  staticStyle: { top: "52%" },
                                },
                                [
                                  t._v(
                                    t._s(t.date_year) +
                                      "/" +
                                      t._s(t.date_month) +
                                      "/" +
                                      t._s(t.date_date)
                                  ),
                                ]
                              ),
                            ]
                          ),
                          s("Icon", {
                            attrs: {
                              mode: "small",
                              iconn: "power-standby",
                              smalltrue: !1,
                              tagcont: "Power",
                            },
                            nativeOn: {
                              click: function (e) {
                                return t.halt_clicked(e);
                              },
                            },
                          }),
                          s("div", { staticClass: "tw-w-2" }),
                          s("Icon", {
                            attrs: {
                              mode: "small",
                              iconn: "keyboard",
                              smalltrue: !1,
                              tagcont: "On-Screen Keyboard",
                            },
                            nativeOn: {
                              click: function (e) {
                                return t.keyboard_clicked(e);
                              },
                            },
                          }),
                          s("div", { staticClass: "vl tw-mx-2" }),
                          s("Icon", {
                            staticStyle: { "z-index": "20" },
                            attrs: {
                              mode: "small",
                              iconn: t.show_drawer
                                ? "chevron-right"
                                : "chevron-left",
                              tagcont: "Folder",
                            },
                            on: { button_clicked: t.arrow_clicked },
                          }),
                          s("div", { staticClass: "tw-w-2" }),
                          s("Icon", {
                            staticClass:
                              "hide_when_needed transform-drawer-1-normal",
                            attrs: {
                              mode: "small",
                              iconn: "battery-70",
                              highertag: !0,
                              tagcont: "Battery",
                            },
                          }),
                          s("div", { staticClass: "tw-w-2" }),
                          s("Icon", {
                            staticClass:
                              "hide_when_needed transform-drawer-2-normal",
                            attrs: {
                              mode: "small",
                              iconn: "wifi-arrow-up-down",
                              highertag: !0,
                              tagcont: "Network",
                            },
                          }),
                          s("div", { staticClass: "tw-w-2" }),
                          s("Icon", {
                            staticClass:
                              "hide_when_needed transform-drawer-3-normal",
                            attrs: {
                              mode: "small",
                              iconn: "volume-high",
                              highertag: !0,
                              tagcont: "Volume",
                            },
                          }),
                          s("div", {
                            staticClass:
                              "vl tw-mx-2 hide_when_needed transform-drawer-4-normal",
                          }),
                        ],
                        1
                      ),
                    ]
                  ),
                ]
              ),
            ]
          );
        }),
      bt = [],
      kt =
        (s("b64b"),
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "div",
            { staticClass: "tw-w-9 tw-h-9  tw-rounded-lg tw-select-none" },
            [
              i(
                "div",
                {
                  staticClass:
                    " tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center",
                },
                [
                  "small" === t.mode
                    ? i(
                        "button",
                        {
                          staticClass:
                            "tw-rounded-lg tw-flex tw-justify-center tw-items-center tw-bg-gray-700 hover:tw-bg-gray-800 tw-outline-none",
                          staticStyle: { width: "30px", height: "30px" },
                          on: {
                            mouseover: t.mouseover,
                            mouseleave: t.mouseleave,
                            click: t.emit_event,
                          },
                        },
                        [
                          i(
                            "v-icon",
                            {
                              staticClass: "tw-text-gray-100",
                              attrs: { small: t.smalltrue },
                            },
                            [t._v("mdi-" + t._s(t.iconn))]
                          ),
                        ],
                        1
                      )
                    : t._e(),
                  "large" === t.mode
                    ? i(
                        "button",
                        {
                          staticClass:
                            "tw-rounded-lg tw-flex tw-justify-center tw-items-center tw-outline-none tw-w-12 tw-h-9",
                          staticStyle: { width: "30px", height: "30px" },
                          on: {
                            mouseover: t.mouseover,
                            mouseleave: t.mouseleave,
                            click: t.emit_event,
                          },
                        },
                        [
                          i("img", {
                            ref: "shakeimg",
                            staticClass: "animate__animated",
                            attrs: { src: s("7644")("./" + t.srcc + ".png") },
                          }),
                        ]
                      )
                    : t._e(),
                  i("div", { staticClass: "tw-absolute " }, [
                    t.fshow
                      ? i("div", {
                          staticClass: "tw-absolute tw-w-5",
                          staticStyle: {
                            top: "21px",
                            left: "-10px",
                            height: "1.8px",
                            "background-color": "rgba(49,56,58)",
                          },
                          style: {
                            background: t.cfocus
                              ? " -webkit-gradient(linear, 0 0, 100% 0, from(rgba(82,153,195,.7)), color-stop(0.5,rgba(77,191,255)), to(rgba(82,153,195,.7))"
                              : "rgba(49,56,58)",
                          },
                        })
                      : t._e(),
                  ]),
                  i(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: t.show_tag,
                          expression: "show_tag",
                        },
                      ],
                      staticClass:
                        "tw-absolute tw-transform tw-rotate-45 tw-z-20",
                      style: t.highertag ? "top:-70%" : "top:-40%",
                    },
                    [
                      i("div", {
                        staticClass: " tw-w-4 tw-h-4",
                        staticStyle: {
                          "background-color": "rgba(166,166,166)",
                        },
                      }),
                    ]
                  ),
                  i(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: t.show_tag,
                          expression: "show_tag",
                        },
                      ],
                      staticClass: "tw-absolute tw-z-20",
                      style: t.highertag ? "top:-110%" : "top:-70%",
                    },
                    [
                      i(
                        "div",
                        {
                          staticClass:
                            "tw-h-6 tw-rounded-lg tw-text-sm  tw-flex tw-justify-center tw-items-center tw-font-bold tw-tracking-wide tw-px-2",
                          staticStyle: {
                            "background-color": "rgba(166,166,166)",
                            "text-wrap": "none",
                            "white-space": "nowrap",
                          },
                        },
                        [t._v(t._s(t.tagcont))]
                      ),
                    ]
                  ),
                ]
              ),
            ]
          );
        }),
      At = [],
      Ct = {
        name: "Icon",
        components: {},
        data: function () {
          return {
            show_tag: !1,
            current_timeout: null,
            prevent_continue_click: !1,
          };
        },
        props: {
          mode: { type: String, default: "small" },
          srcc: { type: String, default: "" },
          iconn: { type: String, default: "" },
          tagcont: { type: String, default: "" },
          smalltrue: { type: Boolean, default: !0 },
          highertag: { type: Boolean, default: !1 },
          noamine: { type: Boolean, default: !1 },
          realactivate: { type: Boolean, default: !1 },
          cfocus: { type: Boolean, default: !1 },
          fshow: { type: Boolean, default: !1 },
        },
        created: function () {},
        mounted: function () {},
        watch: {},
        computed: {},
        methods: {
          mouseover: function () {
            var t = this;
            null === this.current_timeout &&
              (this.current_timeout = window.setTimeout(function () {
                t.show_tag = !0;
              }, 700));
          },
          mouseleave: function () {
            var t = this.current_timeout;
            (this.current_timeout = null),
              null != t && clearTimeout(t),
              (this.show_tag = !1);
          },
          emit_event: function () {
            var t = this;
            if (
              ("bell" != this.iconn && this.$store.commit("close_side_bar"),
              !1 === this.prevent_continue_click &&
                ((this.prevent_continue_click = !0),
                window.setTimeout(function () {
                  t.$emit("button_clicked"), (t.prevent_continue_click = !1);
                }, 200),
                "large" === this.mode && !this.noamine))
            ) {
              var e = this.$refs.shakeimg;
              e.classList.add("animate__swing"),
                window.setTimeout(function () {
                  e.classList.remove("animate__swing");
                }, 400);
            }
          },
        },
      },
      zt = Ct,
      St = Object(d["a"])(zt, kt, At, !1, null, "3ca16659", null),
      Ot = St.exports;
    p()(St, { VIcon: et["a"] });
    var jt = {
        name: "BottomBar",
        components: { Icon: Ot },
        data: function () {
          return {
            date_hour: 0,
            date_minute: 0,
            date_year: 1970,
            date_month: 1,
            date_date: 1,
            date_weekday: 0,
            show_drawer: !0,
            has_text: !1,
            has_explorer: !1,
            has_music: !1,
            has_browser: !1,
            has_settings: !1,
            has_terminal: !1,
            has_vscode: !1,
          };
        },
        created: function () {
          var t = this;
          this.refresh_time(),
            window.setInterval(function () {
              t.refresh_time();
            }, 1e3);
        },
        mounted: function () {
          this.fullWidth < 1124 && this.arrow_clicked();
        },
        watch: {
          fullWidth: function () {
            this.show_drawer = !1;
            var t,
              e = document.getElementsByClassName("hide_when_needed"),
              s = 1,
              i = Object(M["a"])(e);
            try {
              for (i.s(); !(t = i.n()).done; ) {
                var n = t.value;
                n.classList.add("transform-drawer-" + s), (s += 1);
              }
            } catch (o) {
              i.e(o);
            } finally {
              i.f();
            }
          },
          global_window_list: function () {
            var t,
              e = {
                explorer: !1,
                text: !1,
                browser: !1,
                music: !1,
                settings: !1,
                terminal: !1,
                vscode: !1,
              },
              s = Object.keys(e),
              i = Object(M["a"])(this.$store.state.window_list);
            try {
              for (i.s(); !(t = i.n()).done; ) {
                var n = t.value;
                s.indexOf(n.type) >= 0 && (e[n.type] = !0);
              }
            } catch (l) {
              i.e(l);
            } finally {
              i.f();
            }
            for (var o = 0, a = s; o < a.length; o++) {
              var r = a[o];
              this["has_" + r] = e[r];
            }
          },
        },
        computed: {
          fullWidth: function () {
            return this.$store.state.fullWidth;
          },
          global_window_list: function () {
            return this.$store.state.window_list;
          },
          display_article_num: function () {
            return this.$store.state.display_article_num;
          },
        },
        methods: {
          PrefixZero: function (t, e) {
            return (Array(e).join(0) + t).slice(-e);
          },
          bell_clicked: function () {
            this.$store.commit("change_side_bar_status");
          },
          arrow_clicked: function () {
            if (this.show_drawer) {
              this.show_drawer = !1;
              var t,
                e = document.getElementsByClassName("hide_when_needed"),
                s = 1,
                i = Object(M["a"])(e);
              try {
                for (i.s(); !(t = i.n()).done; ) {
                  var n = t.value;
                  n.classList.add("transform-drawer-" + s), (s += 1);
                }
              } catch (d) {
                i.e(d);
              } finally {
                i.f();
              }
            } else {
              this.show_drawer = !0;
              var o,
                a = document.getElementsByClassName("hide_when_needed"),
                r = 1,
                l = Object(M["a"])(a);
              try {
                for (l.s(); !(o = l.n()).done; ) {
                  var c = o.value;
                  c.classList.remove("transform-drawer-" + r), (r += 1);
                }
              } catch (d) {
                l.e(d);
              } finally {
                l.f();
              }
            }
          },
          refresh_time: function () {
            var t = new Date();
            (this.date_year = t.getFullYear()),
              (this.date_month = t.getMonth() + 1),
              (this.date_date = t.getDate()),
              (this.date_weekday = t.getDay() - 1),
              (this.date_hour = t.getHours()),
              (this.date_minute = t.getMinutes());
          },
          browser_clicked: function () {
            this.has_browser
              ? this.window_type_all_hide_or_at_the_top({ type: "browser" }) &&
                this.$store.commit("switch_global_window_show_status", {
                  type: "browser",
                })
              : this.$store.commit("open_new_window", { type: "browser" }),
              this.$store.commit("refresh_window_focus", { type: "browser" });
          },
          music_clicked: function () {
            this.has_music
              ? this.window_type_all_hide_or_at_the_top({ type: "music" }) &&
                this.$store.commit("switch_global_window_show_status", {
                  type: "music",
                })
              : this.$store.commit("open_new_window", { type: "music" }),
              this.$store.commit("refresh_window_focus", { type: "music" });
          },
          settings_clicked: function () {
            this.has_settings
              ? this.window_type_all_hide_or_at_the_top({ type: "settings" }) &&
                this.$store.commit("switch_global_window_show_status", {
                  type: "settings",
                })
              : this.$store.commit("open_new_window", { type: "settings" }),
              this.$store.commit("refresh_window_focus", { type: "settings" });
          },
          terminal_clicked: function () {
            this.has_terminal
              ? this.window_type_all_hide_or_at_the_top({ type: "terminal" }) &&
                this.$store.commit("switch_global_window_show_status", {
                  type: "terminal",
                })
              : this.$store.commit("open_new_window", { type: "terminal" }),
              this.$store.commit("refresh_window_focus", { type: "terminal" });
          },
          vscode_clicked: function () {
            this.has_vscode
              ? this.window_type_all_hide_or_at_the_top({ type: "vscode" }) &&
                this.$store.commit("switch_global_window_show_status", {
                  type: "vscode",
                })
              : this.$store.commit("open_new_window", { type: "vscode" }),
              this.$store.commit("refresh_window_focus", { type: "vscode" });
          },
          text_clicked: function () {
            this.window_type_all_hide_or_at_the_top({ type: "text" }) &&
              this.$store.commit("switch_global_window_show_status", {
                type: "text",
              }),
              this.$store.commit("refresh_window_focus", { type: "text" });
          },
          explorer_clicked: function () {
            this.window_type_all_hide_or_at_the_top({ type: "explorer" }) &&
              this.$store.commit("switch_global_window_show_status", {
                type: "explorer",
              }),
              this.$store.commit("refresh_window_focus", { type: "explorer" });
          },
          keyboard_clicked: function () {
            this.$store.commit("switch_keyboard_status");
          },
          halt_clicked: function () {
            var t = this;
            (document.body.style.cursor = "progress"),
              window.setTimeout(function () {
                (document.body.style.cursor = "default"),
                  t.$router.push({ name: "LoginPage" });
              }, 800);
          },
          window_type_all_hide_or_at_the_top: function (t) {
            var e,
              s = 0,
              i = "",
              n = !0,
              o = Object(M["a"])(this.$store.state.window_list);
            try {
              for (o.s(); !(e = o.n()).done; ) {
                var a = e.value;
                a.zindex > s && !a.minimized && ((i = a.type), (s = a.zindex)),
                  a.type === t.type && n && (n = a.minimized);
              }
            } catch (r) {
              o.e(r);
            } finally {
              o.f();
            }
            return i === t.type || n;
          },
          showdesktop_clicked: function () {
            this.$store.commit("switch_show_desktop");
          },
          exit_full_screen: function () {
            document.exitFullscreen
              ? document.exitFullscreen().catch(function () {})
              : document.webkitExitFullscreen
              ? document.webkitExitFullscreen()
              : document.mozCancelFullScreen
              ? document.mozCancelFullScreen()
              : document.msExitFullscreen && document.msExitFullscreen();
          },
          mr_clicked: function (t, e, s) {
            t.stopPropagation(),
              this.$store.commit("show_context_menu_bottom_bar", {
                target: e,
                mode: s,
              });
          },
        },
      },
      It = jt,
      Mt = (s("d08e"), Object(d["a"])(It, xt, bt, !1, null, "a8a09bae", null)),
      Kt = Mt.exports,
      Wt = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            staticClass:
              "tw-w-1 tw-h-full tw-flex tw-flex-col tw-flex-wrap tw-justify-start tw-items-start tw-select-none",
          },
          t._l(t.folders, function (e, i) {
            return s("DesktopFileIcon", {
              key: i,
              attrs: { item_name: e.name, item_type: e.mode },
              on: { dbclicked: t.dbclicked },
            });
          }),
          1
        );
      },
      Dt = [],
      Ft = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i(
          "div",
          {
            staticClass:
              "tw-pt-4 tw-pb-1 tw-px-6 tw-flex tw-flex-col tw-justify-center tw-items-center",
            staticStyle: { height: "120px", width: "120px" },
            on: { click: t.oneClick },
          },
          [
            0 === t.item_type
              ? i("img", { staticClass: " tw-w-12", attrs: { src: s("d454") } })
              : t._e(),
            1 === t.item_type
              ? i("img", { staticClass: " tw-w-10", attrs: { src: s("8166") } })
              : t._e(),
            i(
              "div",
              {
                staticClass:
                  "tw-flex  tw-justify-center tw-items-start tw-overflow-hidden",
                staticStyle: { height: "46px", width: "72px" },
              },
              [
                i(
                  "div",
                  {
                    staticClass:
                      "tw-mt-1.5 tw-leading-4  tw-pt-1 tw-pb-0.5  tw-px-1 tw-rounded-md tw-text-sm",
                    class: { "tw-bg-blue-500": t.global_focus === t.uuid },
                    staticStyle: {
                      "text-align": "center",
                      "text-shadow": "0px 1px 4px rgba(16,16,16,.9)",
                      color: "#f2f2f2",
                      display: "-webkit-box",
                      "-webkit-box-orient": "vertical",
                      "-webkit-line-clamp": "2",
                      overflow: "hidden",
                    },
                  },
                  [t._v(t._s(t.item_name))]
                ),
              ]
            ),
          ]
        );
      },
      Bt = [],
      Et =
        (s("a9e3"),
        {
          name: "DesptopFileIcon",
          components: {},
          data: function () {
            return { result: [], delay: 200, clicks: 0, uuid: "" };
          },
          props: {
            item_name: { type: String, default: "" },
            item_type: { type: Number, default: 0 },
          },
          created: function () {
            this.uuid = this.$utils.get_uuid();
          },
          mounted: function () {},
          watch: {},
          computed: {
            global_focus: function () {
              return this.$store.state.current_focus;
            },
          },
          methods: {
            dbclicked: function () {
              this.$emit("dbclicked", this.folder);
            },
            oneClick: function () {
              if (
                (this.clicks++,
                this.$store.commit("refresh_window_focus", { uuid: this.uuid }),
                this.$store.commit("close_side_bar"),
                1 === this.clicks)
              ) {
                var t = this;
                this.timer = setTimeout(function () {
                  t.clicks = 0;
                }, this.delay);
              } else
                clearTimeout(this.timer),
                  this.$emit("dbclicked", this.item_name, this.item_type),
                  (this.clicks = 0);
            },
          },
        }),
      Nt = Et,
      Tt = Object(d["a"])(Nt, Ft, Bt, !1, null, "b1661808", null),
      Lt = Tt.exports,
      Rt = {
        name: "DesptopFileArray",
        components: { DesktopFileIcon: Lt },
        data: function () {
          return {};
        },
        props: { filemap: { default: [] } },
        created: function () {},
        mounted: function () {},
        watch: {},
        computed: {
          folders: function () {
            var t,
              e = [],
              s = Object(M["a"])(this.filemap);
            try {
              for (s.s(); !(t = s.n()).done; ) {
                var i = t.value;
                void 0 === i.children
                  ? e.push({ name: i.name, mode: 1 })
                  : e.push({ name: i.name, mode: 0 });
              }
            } catch (o) {
              s.e(o);
            } finally {
              s.f();
            }
            var n = function (t, e) {
              return t.mode > e.mode
                ? 1
                : t.mode < e.mode
                ? -1
                : t.name === e.name
                ? 0
                : t.name > e.name
                ? 1
                : -1;
            };
            return e.sort(n), e;
          },
        },
        methods: {
          dbclicked: function (t, e) {
            var s = this;
            (document.body.style.cursor = "progress"),
              window.setTimeout(function () {
                if (((document.body.style.cursor = "default"), 0 === e))
                  s.$store.commit("open_new_window", {
                    type: "explorer",
                    openpath: [t],
                  });
                else if (1 === e) {
                  var i,
                    n = Object(M["a"])(s.filemap);
                  try {
                    for (n.s(); !(i = n.n()).done; ) {
                      var o = i.value;
                      o.name === t &&
                        s.$store.commit("open_new_window", {
                          type: "text",
                          filesrc: o.path,
                          filename: o.name,
                          size: o.size,
                        });
                    }
                  } catch (a) {
                    n.e(a);
                  } finally {
                    n.f();
                  }
                }
              }, 500);
          },
        },
      },
      Ht = Rt,
      Pt = Object(d["a"])(Ht, Wt, Dt, !1, null, "5c159b72", null),
      Vt = Pt.exports,
      Yt = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            staticClass:
              "tw-absolute tw-right-0  tw-w-100 tw-p-3 tw-select-none",
            staticStyle: { height: "calc(100% - 56px)", "min-height": "300px" },
            style: { "z-index": t.show_sidebar_daemon ? 1e3 : 0 },
          },
          [
            s(
              "div",
              {
                class: {
                  "tw-h-full": !0,
                  "tw-w-full": !0,
                  "tw-rounded-xl": !0,
                  animate__animated: !0,
                  animate__slideInRight: !0,
                  animate__slideOutRight: !t.show_sidebar,
                  "tw-overflow-hidden": !0,
                },
                staticStyle: {
                  "backdrop-filter": "blur(30px)",
                  "box-shadow": "0 0px 30px rgba(16,16,16,.6)",
                },
              },
              [
                s(
                  "div",
                  {
                    staticClass:
                      "tw-h-full tw-w-full tw-rounded-xl tw-flex tw-flex-col tw-items-center tw-border tw-border-gray-500",
                    staticStyle: { "background-color": "rgba(235,235,235,.2)" },
                  },
                  [
                    s(
                      "div",
                      {
                        ref: "headline",
                        staticClass:
                          " tw-h-9 tw-w-full tw-flex tw-items-end tw-mt-4 tw-bg-opacity-100",
                      },
                      [
                        s(
                          "div",
                          {
                            staticClass:
                              "tw-flex-none tw-w-12 tw-h-full tw-flex tw-justify-center tw-items-center tw-pl-3",
                          },
                          [
                            s(
                              "button",
                              {
                                staticClass:
                                  " tw-w-9 tw-h-9 tw-bg-gray-50 hover:tw-bg-gray-200 tw-rounded-full tw-outline-none active:tw-bg-blue-300",
                                on: {
                                  click: function (e) {
                                    return t.reload_messages(!0);
                                  },
                                },
                              },
                              [
                                s(
                                  "v-icon",
                                  { staticClass: "tw-text-blue-400" },
                                  [t._v("mdi-bell")]
                                ),
                              ],
                              1
                            ),
                          ]
                        ),
                        s(
                          "div",
                          {
                            staticClass:
                              "tw-flex-grow tw-flex tw-justify-center tw-text-lg tw-font-bold",
                          },
                          [t._v(" Message Center")]
                        ),
                        s(
                          "div",
                          {
                            staticClass:
                              "tw-flex-none tw-w-12 tw-h-full tw-flex tw-justify-center tw-items-center tw-pr-3",
                          },
                          [
                            s(
                              "button",
                              {
                                staticClass:
                                  " tw-w-9 tw-h-9  hover:tw-bg-gray-200 tw-rounded-full tw-outline-none active:tw-bg-blue-300",
                                on: { click: t.clean_messages },
                              },
                              [
                                s(
                                  "v-icon",
                                  { staticClass: "tw-text-gray-800" },
                                  [t._v("mdi-delete-sweep")]
                                ),
                              ],
                              1
                            ),
                          ]
                        ),
                      ]
                    ),
                    t._m(0),
                    s(
                      "div",
                      { staticClass: "tw-w-full  tw-overflow-scroll" },
                      t._l(t.articles_display, function (e, i) {
                        return s("Message", {
                          key: i,
                          attrs: {
                            title: e.title,
                            content: e.content,
                            abstract: e.abstract,
                            time: e.time,
                            lastedittime: e.lastedittime,
                            filename: e.filename,
                            filesrc: e.filesrc,
                            filesize: e.filesize,
                          },
                          on: {
                            close_triggered: t.close_triggered,
                            delete_item: t.delete_item,
                          },
                        });
                      }),
                      1
                    ),
                  ]
                ),
              ]
            ),
          ]
        );
      },
      Gt = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "div",
            {
              staticClass:
                "tw-pt-4 tw-pb-1 px-3 tw-flex tw-flex-row tw-justify-start tw-flex-none tw-w-full",
            },
            [
              s("div", { staticClass: "tw-text-2xl tw-font-extrabold ml-4" }, [
                t._v("News"),
              ]),
            ]
          );
        },
      ],
      Xt = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return t.deleted
          ? t._e()
          : i(
              "div",
              {
                class: {
                  "tw-w-full": !0,
                  "tw-px-3": !0,
                  "tw-select-none": !0,
                  animate__animated: !0,
                  animate__slideOutRight: t.closed,
                  animate__fadeInDown: !0,
                  animate__faster: t.closed,
                  "tw-mt-3": !0,
                },
                on: { mouseover: t.mouseover, mouseleave: t.mouseleave },
              },
              [
                i(
                  "div",
                  {
                    staticClass:
                      "tw-w-full tw-h-full tw-bg-opacity-50 tw-bg-gray-50 tw-rounded-xl tw-overflow-hidden",
                  },
                  [
                    i(
                      "div",
                      {
                        staticClass:
                          "tw-w-full tw-h-8 tw-bg-opacity-40 tw-bg-gray-200 tw-flex tw-flex-row tw-items-center",
                      },
                      [
                        i("img", {
                          staticClass:
                            "tw-flex-none  tw-h-5 tw-w-6  tw-pl-2 tw-ml-2",
                          attrs: { src: s("2227"), alt: "" },
                        }),
                        i(
                          "div",
                          {
                            staticClass:
                              "tw-flex-none tw-text-xs tw-font-bold tw-ml-2",
                          },
                          [t._v(t._s(t.content))]
                        ),
                        i("div", { staticClass: "tw-flex-grow" }),
                        t.mouseon
                          ? t._e()
                          : i(
                              "div",
                              {
                                staticClass:
                                  "tw-text-gray-600 tw-text-xs tw-mr-3",
                              },
                              [t._v(" " + t._s(t.time) + " ")]
                            ),
                        t.mouseon
                          ? i("div", { staticClass: "tw-text-xs tw-mr-3" }, [
                              i(
                                "button",
                                {
                                  staticClass:
                                    " tw-w-5  tw-h-5 tw-bg-gray-50 tw-rounded-full tw-flex tw-justify-center tw-items-center hover:tw-bg-gray-200 hover:tw-shadow-md tw-outline-none",
                                  on: { click: t.close_triggered },
                                },
                                [
                                  i("v-icon", { attrs: { "x-small": "" } }, [
                                    t._v("mdi-close"),
                                  ]),
                                ],
                                1
                              ),
                            ])
                          : t._e(),
                      ]
                    ),
                    i(
                      "div",
                      {
                        staticClass:
                          "tw-flex-grow tw-flex tw-flex-row-reverse tw-w-full",
                      },
                      [
                        i(
                          "div",
                          {
                            staticClass:
                              "tw-p-2 tw-flex tw-flex-col tw-justify-center tw-items-center",
                          },
                          [
                            i(
                              "button",
                              {
                                staticClass:
                                  "tw-w-16 tw-h-9 tw-rounded-lg tw-flex  tw-justify-center tw-items-center tw-font-bold tw-text-sm tw-bg-opacity-40 tw-bg-gray-100 hover:tw-bg-opacity-80 hover:tw-shadow-sm tw-outline-none",
                                on: { click: t.view_triggered },
                              },
                              [t._v(" View ")]
                            ),
                          ]
                        ),
                        i(
                          "div",
                          { staticClass: " tw-flex-grow tw-flex tw-flex-col" },
                          [
                            i(
                              "div",
                              {
                                staticClass:
                                  " tw-flex tw-items-center tw-py-1 tw-px-4 tw-font-bold tw-mt-1 tw-tracking-wide tw-text-sm",
                                staticStyle: { "font-size": "15px !important" },
                              },
                              [t._v(t._s(t.title))]
                            ),
                            i(
                              "div",
                              {
                                staticClass:
                                  "tw-flex-gorw tw-text-sm tw-text-gray-600 tw-tracking-wide tw-h-12",
                              },
                              [
                                i(
                                  "div",
                                  {
                                    staticClass:
                                      "tw-h-11 tw-w-68 tw-px-4 tw-py-1",
                                    staticStyle: {
                                      "text-overflow": "ellipsis",
                                      display: "-webkit-box",
                                      "-webkit-box-orient": "vertical",
                                      "-webkit-line-clamp": "2",
                                      overflow: "hidden",
                                    },
                                  },
                                  [t._v(t._s(t.abstract))]
                                ),
                              ]
                            ),
                          ]
                        ),
                      ]
                    ),
                  ]
                ),
              ]
            );
      },
      Ut = [],
      Qt = {
        name: "Mssage",
        components: {},
        data: function () {
          return { mouseon: !1, closed: !1, deleted: !1 };
        },
        props: {
          title: { type: String, default: "" },
          abstract: { type: String, default: "" },
          content: { type: String, default: "" },
          time: { type: String, default: "" },
          lastedittime: { type: Number, default: 0 },
          filename: { type: String, default: "" },
          filesrc: { type: String, default: "" },
          filesize: { type: Number, default: 0 },
        },
        created: function () {},
        mounted: function () {},
        watch: {
          clean_messages: function (t) {
            var e = this;
            t &&
              ((this.closed = !0),
              window.setInterval(function () {
                e.deleted = !0;
              }, 500));
          },
        },
        computed: {
          clean_messages: function () {
            return this.$store.state.clean_messages;
          },
        },
        methods: {
          mouseover: function () {
            this.mouseon = !0;
          },
          mouseleave: function () {
            this.mouseon = !1;
          },
          view_triggered: function () {
            this.$store.commit("open_new_window", {
              type: "text",
              filesrc: this.filesrc,
              filename: this.filename,
              size: this.filesize,
            }),
              this.close_triggered();
          },
          close_triggered: function () {
            var t = this;
            this.$emit("close_triggered", this.lastedittime),
              this.$emit("delete_item", this.filesrc),
              (this.closed = !0),
              window.setInterval(function () {
                t.deleted = !0;
              }, 500);
          },
        },
      },
      Zt = Qt,
      Jt = Object(d["a"])(Zt, Xt, Ut, !1, null, "07b18082", null),
      qt = Jt.exports;
    p()(Jt, { VIcon: et["a"] });
    var $t = {
        name: "RightBar",
        components: { Message: qt },
        data: function () {
          return {
            show_sidebar: !0,
            show_sidebar_daemon: !0,
            daemon_timeout: null,
            max_articles: 5,
            articles: {},
            articles_display: {},
          };
        },
        created: function () {},
        mounted: function () {
          var t = this;
          window.setTimeout(function () {
            t.reload_messages();
          }, 2400);
        },
        watch: {
          sidebar_status: function (t) {
            this.show_sidebar = t;
          },
          show_sidebar: function (t) {
            var e = this;
            t
              ? (null != this.daemon_timeout &&
                  (clearTimeout(this.daemon_timeout),
                  (this.daemon_timeout = null)),
                (this.show_sidebar_daemon = !0))
              : (this.daemon_timeout = window.setTimeout(function () {
                  e.show_sidebar_daemon = !1;
                }, 800));
          },
          filemap: function (t) {
            var e = [],
              s = function t(s, i) {
                var n,
                  o = Object(M["a"])(s);
                try {
                  for (o.s(); !(n = o.n()).done; ) {
                    var a = n.value;
                    if (void 0 === a.children) {
                      var r = JSON.parse(JSON.stringify(a));
                      (r.content = i), e.push(r);
                    } else t(a.children, a.name);
                  }
                } catch (l) {
                  o.e(l);
                } finally {
                  o.f();
                }
              };
            s(t, "Desktop");
            var i = function (t, e) {
              return t.lastedittime > e.lastedittime
                ? -1
                : t.lastedittime === e.lastedittime
                ? 0
                : 1;
            };
            e.sort(i);
            for (
              var n = Math.min(e.length, this.max_articles),
                o = new Date().getTime() / 1e3,
                a = 0;
              a < n;
              a++
            ) {
              var r = e[a],
                l = o - r.lastedittime,
                c = "";
              (c =
                l < 60
                  ? Math.round(Math.max(l, 0)) + " seconds ago"
                  : l < 3600
                  ? Math.round(l / 60) + " minutes ago"
                  : l < 86400
                  ? Math.round(l / 3600) + " hours ago"
                  : l < 2678400
                  ? Math.round(l / 86400) + " days ago"
                  : l < 32140800
                  ? Math.round(l / 2635200) + " months ago"
                  : Math.round(l / 31536e3) + " years ago"),
                (this.articles[a] = {
                  title: r.title,
                  abstract: r.abstract,
                  content: r.content,
                  time: c,
                  lastedittime: r.lastedittime,
                  filename: r.name,
                  filesrc: r.path,
                  filesize: r.size,
                  hide: !1,
                });
            }
          },
        },
        computed: {
          sidebar_status: function () {
            return this.$store.state.show_sidebar;
          },
          not_show_sidebar: function () {
            return !this.show_sidebar;
          },
          filemap: function () {
            return this.$store.state.filemap;
          },
        },
        methods: {
          reload_messages: function () {
            var t = this,
              e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              s = this.$cookies.get("ignore_since");
            void 0 === s
              ? ((s = 0), this.$cookies.set("ignore_since", "0", "30d"))
              : (s = parseInt(s)),
              e && (this.$cookies.set("ignore_since", "0", "30d"), (s = 0));
            var i = 0,
              n = new Object(),
              o = function (e) {
                var o = t.articles[e];
                if (o.lastedittime <= s) return "continue";
                window.setTimeout(function () {
                  n[e] = o;
                  var s = JSON.parse(JSON.stringify(n));
                  (t.articles_display = s), t.refresh_count();
                }, 400 * (i + 1)),
                  (i += 1);
              };
            for (var a in this.articles) o(a);
          },
          clean_messages: function () {
            this.articles_display.length > 0 &&
              this.$cookies.set(
                "ignore_since",
                this.articles_display[0].lastedittime,
                "30d"
              ),
              this.$store.commit("clean_all_messages");
            for (
              var t = 0, e = Object.keys(this.articles_display);
              t < e.length;
              t++
            ) {
              var s = e[t];
              this.articles_display[s].hide = !0;
            }
            this.refresh_count();
          },
          close_triggered: function (t) {
            this.$cookies.set("ignore_since", t.toString(), "30d");
          },
          delete_item: function (t) {
            for (
              var e = 0, s = Object.keys(this.articles_display);
              e < s.length;
              e++
            ) {
              var i = s[e],
                n = this.articles_display[i];
              n.filesrc === t && (n.hide = !0);
            }
            this.refresh_count();
          },
          refresh_count: function () {
            for (
              var t = 0, e = 0, s = Object.keys(this.articles_display);
              e < s.length;
              e++
            ) {
              var i = s[e],
                n = this.articles_display[i];
              !1 === n.hide && (t += 1);
            }
            this.$store.commit("display_article_num_changed", t);
          },
        },
      },
      te = $t,
      ee = Object(d["a"])(te, Yt, Gt, !1, null, "7a483423", null),
      se = ee.exports;
    p()(ee, { VIcon: et["a"] });
    var ie = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("Window", {
          attrs: {
            startpos_x: t.startpos_x,
            startpos_y: t.startpos_y,
            uuid: t.uuid,
            zindex: t.zindex,
            minimized: t.minimized,
          },
          on: {
            height_changed: t.window_height_changed,
            width_changed: t.window_width_changed,
          },
          scopedSlots: t._u([
            {
              key: "header",
              fn: function () {
                return [
                  i(
                    "div",
                    {
                      staticClass:
                        " tw-ml-4 tw-font-bold tw-tracking-wider tw-flex tw-items-center tw-select-none",
                      staticStyle: { "pointer-events": "none" },
                    },
                    [
                      i("img", {
                        staticClass: " tw-w-8 tw-h-8",
                        staticStyle: { "pointer-events": "auto" },
                        attrs: { src: s("b42f"), alt: "" },
                      }),
                      i(
                        "div",
                        {
                          staticClass:
                            "tw-w-9 tw-h-9 tw-rounded-l-lg tw-flex tw-justify-center tw-items-center tw-ml-6",
                          staticStyle: {
                            "background-color": "#f0f0f0",
                            "pointer-events": "auto",
                          },
                          style: {
                            opacity: t.global_focus === t.uuid ? "1" : "0.85",
                          },
                        },
                        [
                          i("v-icon", { staticStyle: { color: "#b0b4bf" } }, [
                            t._v("mdi-chevron-left"),
                          ]),
                        ],
                        1
                      ),
                      i("div", {
                        staticClass: " tw-h-9 tw-w-0.5",
                        staticStyle: { "background-color": "#ebebeb" },
                      }),
                      i(
                        "div",
                        {
                          staticClass:
                            "tw-w-9 tw-h-9 tw-rounded-r-lg tw-flex tw-justify-center tw-items-center",
                          staticStyle: {
                            "background-color": "#f0f0f0",
                            "pointer-events": "auto",
                          },
                          style: {
                            opacity: t.global_focus === t.uuid ? "1" : "0.85",
                          },
                        },
                        [
                          i("v-icon", { staticStyle: { color: "#b0b4bf" } }, [
                            t._v("mdi-chevron-right"),
                          ]),
                        ],
                        1
                      ),
                      i(
                        "div",
                        {
                          staticClass:
                            "tw-h-9 tw-px-3  tw-flex tw-items-center tw-justify-center tw-bg-mygray-b2  tw-rounded-lg tw-ml-3",
                          staticStyle: { "pointer-events": "auto" },
                          style: {
                            opacity: t.global_focus === t.uuid ? "1" : "0.85",
                          },
                        },
                        [
                          i("v-icon", { attrs: { small: "" } }, [
                            t._v("mdi-home-heart"),
                          ]),
                        ],
                        1
                      ),
                      t._l(t.open_openpath, function (e, s) {
                        return i(
                          "div",
                          {
                            key: s,
                            staticClass:
                              "tw-h-9 tw-px-3 tw-flex tw-items-center tw-justify-center tw-rounded-lg tw-ml-3 tw-text-sm tw-text-gray-50 tw-font-normal",
                            class: {
                              "tw-bg-mygray-b2":
                                s != t.open_openpath.length - 1,
                              "tw-bg-mygray-b4":
                                s === t.open_openpath.length - 1,
                              "tw-text-mygray-b6":
                                s != t.open_openpath.length - 1,
                              "tw-text-gray-50":
                                s === t.open_openpath.length - 1,
                              "tw-font-semibold":
                                s != t.open_openpath.length - 1,
                              "hover:tw-bg-mygray-b3":
                                s != t.open_openpath.length - 1,
                              "hover:tw-bg-mygray-b5":
                                s === t.open_openpath.length - 1,
                            },
                            staticStyle: { "pointer-events": "auto" },
                            style: {
                              opacity: t.global_focus === t.uuid ? "1" : "0.85",
                            },
                            on: {
                              click: function (e) {
                                return t.switch_supr_class(s);
                              },
                            },
                          },
                          [t._v(" " + t._s(e) + " ")]
                        );
                      }),
                    ],
                    2
                  ),
                ];
              },
              proxy: !0,
            },
            {
              key: "content",
              fn: function () {
                return [
                  i(
                    "div",
                    {
                      staticClass:
                        "tw-w-full tw-rounded-b-2xl tw-flex tw-select-none",
                      style: { height: t.cont_height + "px" },
                      on: {
                        contextmenu: function (e) {
                          return e.preventDefault(), t.mr_clicked(e);
                        },
                      },
                    },
                    [
                      i(
                        "div",
                        {
                          ref: "leftbar",
                          staticClass:
                            "tw-flex-none tw-bg-white tw-rounded-bl-2xl tw-overflow-hidden tw-flex tw-flex-row tw-select-none",
                          staticStyle: {
                            "min-width": "160px",
                            "max-width": "260px",
                            width: "208px",
                          },
                          style: {
                            opacity: t.global_focus === t.uuid ? "1" : "0.85",
                          },
                        },
                        [
                          i(
                            "div",
                            {
                              staticClass:
                                " tw-flex-grow tw-h-full tw-flex tw-items-center tw-flex-col tw-px-3",
                            },
                            [
                              i("WindowFolderIcon", {
                                attrs: {
                                  icon: "clock-time-three",
                                  text: "Recently",
                                },
                              }),
                              i("WindowFolderIcon", {
                                attrs: { icon: "home-heart", text: "Home" },
                              }),
                              i("WindowFolderIcon", {
                                attrs: {
                                  icon: "television-guide",
                                  text: "Desktop",
                                },
                              }),
                              i("WindowFolderIcon", {
                                attrs: { icon: "filmstrip", text: "Videos" },
                              }),
                              i("WindowFolderIcon", {
                                attrs: { icon: "music", text: "Musics" },
                              }),
                              i("WindowFolderIcon", {
                                attrs: { icon: "image", text: "Pictures" },
                              }),
                              i("WindowFolderIcon", {
                                attrs: {
                                  icon: "file-document",
                                  text: "Documents",
                                },
                              }),
                              i("WindowFolderIcon", {
                                attrs: { icon: "delete", text: "Recycle Bin" },
                              }),
                              i("div", {
                                staticStyle: {
                                  width: "100%",
                                  height: "2px",
                                  "background-color": "#efefef",
                                  "margin-top": "1px",
                                  "margin-bottom": "1px",
                                },
                              }),
                              i("WindowFolderIcon", {
                                attrs: {
                                  icon: "desktop-mac-dashboard",
                                  text: "This PC",
                                },
                              }),
                              i("WindowFolderIcon", {
                                attrs: { icon: "harddisk", text: "Root" },
                              }),
                              i("div", {
                                staticStyle: {
                                  width: "100%",
                                  height: "2px",
                                  "background-color": "#efefef",
                                  "margin-top": "1px",
                                  "margin-bottom": "1px",
                                },
                              }),
                              i("WindowFolderIcon", {
                                attrs: { icon: "earth", text: "Network" },
                              }),
                            ],
                            1
                          ),
                          i(
                            "div",
                            {
                              staticClass: "tw-h-full tw-select-none",
                              staticStyle: { width: "1px" },
                            },
                            [
                              i("WindowSider", {
                                attrs: { mode: 1 },
                                nativeOn: {
                                  mousedown: function (e) {
                                    return t.right_resize(e);
                                  },
                                },
                              }),
                            ],
                            1
                          ),
                        ]
                      ),
                      i(
                        "div",
                        {
                          staticClass:
                            "tw-flex-grow  tw-h-full tw-rounded-br-2xl tw-flex tw-flex-col",
                        },
                        [
                          i(
                            "div",
                            {
                              ref: "main_body",
                              staticClass:
                                " tw-flex-grow tw-w-full tw-flex tw-flex-col",
                              staticStyle: { "background-color": "#f8f8f8" },
                              style: { width: t.cont_width + "px" },
                            },
                            [
                              i(
                                "div",
                                {
                                  staticClass:
                                    "tw-w-full tw-h-8 tw-border-b border tw-border-gray-300 tw-flex tw-items-center tw-text-mygray-b6 tw-tracking-tight tw-select-none",
                                  staticStyle: {
                                    "background-color": "#e9e9e9",
                                  },
                                },
                                [
                                  i(
                                    "div",
                                    {
                                      ref: "name_col",
                                      staticClass:
                                        "tw-h-full tw-flex tw-items-center",
                                      style: { width: t.name_col_width + "px" },
                                      on: {
                                        click: function (e) {
                                          return t.switch_selected("Name");
                                        },
                                      },
                                    },
                                    [
                                      i(
                                        "div",
                                        { staticClass: "tw-flex-none tw-ml-2" },
                                        [t._v("Name")]
                                      ),
                                      i(
                                        "div",
                                        {
                                          staticClass:
                                            "tw-flex-grow tw-flex tw-flex-row-reverse",
                                        },
                                        [
                                          "Name" === t.selected
                                            ? i("v-icon", [
                                                t._v(
                                                  t._s(t.mdi_computed_direction)
                                                ),
                                              ])
                                            : t._e(),
                                        ],
                                        1
                                      ),
                                    ]
                                  ),
                                  i("WindowFolderSlider", {
                                    nativeOn: {
                                      mousedown: function (e) {
                                        return t.right_resize_grid_1(e);
                                      },
                                    },
                                  }),
                                  i(
                                    "div",
                                    {
                                      ref: "date_col",
                                      staticClass:
                                        "tw-h-full tw-flex tw-items-center",
                                      style: { width: t.date_col_width + "px" },
                                      on: {
                                        click: function (e) {
                                          return t.switch_selected(
                                            "Date Modified"
                                          );
                                        },
                                      },
                                    },
                                    [
                                      i(
                                        "div",
                                        { staticClass: "tw-flex-none" },
                                        [t._v("Date Modified")]
                                      ),
                                      i(
                                        "div",
                                        {
                                          staticClass:
                                            "tw-flex-grow tw-flex tw-flex-row-reverse",
                                        },
                                        [
                                          "Date Modified" === t.selected
                                            ? i("v-icon", [
                                                t._v(
                                                  t._s(t.mdi_computed_direction)
                                                ),
                                              ])
                                            : t._e(),
                                        ],
                                        1
                                      ),
                                    ]
                                  ),
                                  i("WindowFolderSlider", {
                                    nativeOn: {
                                      mousedown: function (e) {
                                        return t.right_resize_grid_2(e);
                                      },
                                    },
                                  }),
                                  i(
                                    "div",
                                    {
                                      ref: "size_col",
                                      staticClass:
                                        "tw-h-full tw-flex tw-items-center",
                                      style: { width: t.size_col_width + "px" },
                                      on: {
                                        click: function (e) {
                                          return t.switch_selected("Size");
                                        },
                                      },
                                    },
                                    [
                                      i(
                                        "div",
                                        { staticClass: "tw-flex-none" },
                                        [t._v("Size")]
                                      ),
                                      i(
                                        "div",
                                        {
                                          staticClass:
                                            "tw-flex-grow tw-flex tw-flex-row-reverse",
                                        },
                                        [
                                          "Size" === t.selected
                                            ? i("v-icon", [
                                                t._v(
                                                  t._s(t.mdi_computed_direction)
                                                ),
                                              ])
                                            : t._e(),
                                        ],
                                        1
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              i(
                                "div",
                                {
                                  staticClass:
                                    "tw-flex-grow tw-w-full tw-flex ",
                                },
                                [
                                  i(
                                    "div",
                                    {
                                      ref: "name_col_cont",
                                      staticClass: " tw-h-full",
                                      style: {
                                        width: t.name_col_width + 4 + "px",
                                      },
                                    },
                                    t._l(t.current_dir_list, function (e, n) {
                                      return i(
                                        "div",
                                        {
                                          key: n,
                                          staticClass:
                                            " tw-w-full tw-text-sm tw-flex tw-items-center",
                                          staticStyle: { height: "28px" },
                                          style: {
                                            "background-color":
                                              t.current_focus === e.fileuuid
                                                ? "rgba(0,129,255)"
                                                : n % 2 === 0
                                                ? "rgba(255,255,255,0)"
                                                : "rgba(55,55,55,.04)",
                                          },
                                          on: {
                                            click: function (e) {
                                              return t.item_oneClick(n);
                                            },
                                          },
                                        },
                                        [
                                          i(
                                            "div",
                                            {
                                              staticClass:
                                                " tw-flex tw-justify-center tw-items-center tw-w-7 tw-flex-none tw-ml-7 tw-pb-0.5",
                                              style: {
                                                height:
                                                  void 0 === e.children
                                                    ? "24px"
                                                    : "18px",
                                              },
                                            },
                                            [
                                              i("img", {
                                                staticClass: "tw-h-full",
                                                attrs: {
                                                  src: s(
                                                    void 0 === e.children
                                                      ? "2227"
                                                      : "d454"
                                                  ),
                                                  alt: "",
                                                },
                                              }),
                                            ]
                                          ),
                                          i(
                                            "div",
                                            {
                                              staticClass:
                                                " tw-flex-grow tw-pr-1 tw-pl-2 tw-tracking-wide  tw-text-mygray-b6 tw-font-semibold",
                                              staticStyle: {
                                                "white-space": "nowrap",
                                                "text-overflow": "ellipsis",
                                                overflow: "hidden",
                                              },
                                              style: {
                                                color:
                                                  t.current_focus === e.fileuuid
                                                    ? "#fefefe !important"
                                                    : "",
                                              },
                                            },
                                            [t._v(" " + t._s(e.name))]
                                          ),
                                        ]
                                      );
                                    }),
                                    0
                                  ),
                                  i(
                                    "div",
                                    {
                                      ref: "date_col_cont",
                                      staticClass: "tw-h-full",
                                      style: {
                                        width: t.date_col_width + 10 + "px",
                                      },
                                    },
                                    t._l(t.current_dir_list, function (e, s) {
                                      return i(
                                        "div",
                                        {
                                          key: s,
                                          staticClass:
                                            " tw-w-full tw-text-sm tw-flex tw-items-center",
                                          staticStyle: { height: "28px" },
                                          style: {
                                            "background-color":
                                              t.current_focus === e.fileuuid
                                                ? "rgba(0,129,255)"
                                                : s % 2 === 0
                                                ? "rgba(255,255,255,0)"
                                                : "rgba(55,55,55,.04)",
                                          },
                                        },
                                        [
                                          i(
                                            "div",
                                            {
                                              staticClass:
                                                " tw-flex-grow tw-pr-1 tw-pl-3 tw-tracking-wide  tw-text-mygray-b7",
                                              staticStyle: {
                                                "white-space": "nowrap",
                                                "text-overflow": "ellipsis",
                                                overflow: "hidden",
                                              },
                                              style: {
                                                color:
                                                  t.current_focus === e.fileuuid
                                                    ? "#fefefe !important"
                                                    : "",
                                              },
                                            },
                                            [
                                              t._v(
                                                " " +
                                                  t._s(
                                                    t.time_format_converter(
                                                      e.lastedittime
                                                    )
                                                  )
                                              ),
                                            ]
                                          ),
                                        ]
                                      );
                                    }),
                                    0
                                  ),
                                  i(
                                    "div",
                                    {
                                      ref: "size_col_cont",
                                      staticClass: "tw-h-full",
                                      style: {
                                        width: t.size_col_width + 4 + "px",
                                      },
                                    },
                                    t._l(t.current_dir_list, function (e, s) {
                                      return i(
                                        "div",
                                        {
                                          key: s,
                                          staticClass:
                                            " tw-w-full tw-text-sm tw-flex tw-items-center",
                                          staticStyle: { height: "28px" },
                                          style: {
                                            "background-color":
                                              t.current_focus === e.fileuuid
                                                ? "rgba(0,129,255)"
                                                : s % 2 === 0
                                                ? "rgba(255,255,255,0)"
                                                : "rgba(55,55,55,.04)",
                                          },
                                        },
                                        [
                                          i(
                                            "div",
                                            {
                                              staticClass:
                                                " tw-flex-grow tw-pr-1 tw-pl-3 tw-tracking-wide  tw-text-mygray-b7",
                                              staticStyle: {
                                                "white-space": "nowrap",
                                                "text-overflow": "ellipsis",
                                                overflow: "hidden",
                                              },
                                              style: {
                                                color:
                                                  t.current_focus === e.fileuuid
                                                    ? "#fefefe !important"
                                                    : "",
                                              },
                                            },
                                            [
                                              t._v(
                                                " " +
                                                  t._s(
                                                    t.size_format_converter(
                                                      e.size
                                                    )
                                                  )
                                              ),
                                            ]
                                          ),
                                        ]
                                      );
                                    }),
                                    0
                                  ),
                                ]
                              ),
                            ]
                          ),
                          i(
                            "div",
                            {
                              staticClass:
                                " tw-flex-none tw-h-6 tw-w-full tw-rounded-br-2xl tw-flex tw-justify-center tw-items-center tw-text-sm tw-text-gray-900",
                            },
                            [
                              t._v(
                                " " +
                                  t._s(t.current_dir_list.length) +
                                  " Items "
                              ),
                            ]
                          ),
                        ]
                      ),
                    ]
                  ),
                ];
              },
              proxy: !0,
            },
          ]),
        });
      },
      ne = [],
      oe =
        (s("b680"),
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "div",
            {
              ref: "window_mainbody",
              staticClass: "tw-absolute animate__animated animate__faster",
              class: {
                animate__zoomOut: t.closed,
                animate__zoomOutDown: t.minimized,
                animate__zoomIn: !t.minimized,
              },
              staticStyle: {
                "min-width": "680px",
                "min-height": "600px",
                height: "600px",
                width: "1000px",
                "pointer-events": "auto",
              },
              style: {
                top: t.default_top + "px",
                left: t.default_left + "px",
                "z-index": t.zindex,
              },
              on: {
                click: t.window_clicked,
                contextmenu: function (e) {
                  return e.preventDefault(), t.mr_clicked(e);
                },
              },
            },
            [
              s(
                "div",
                {
                  staticClass:
                    "tw-flex tw-justify-center tw-items-center tw-flex-nowrap tw-w-full tw-h-full tw-border tw-border-gray-500 ",
                  class: { "tw-rounded-2xl": !t.full_windowed },
                  style: {
                    "box-shadow":
                      t.global_focus === t.uuid
                        ? "0 0px 30px rgba(16,16,16,.6)"
                        : "0 0px 15px rgba(16,16,16,.3)",
                    "background-color": t.blacktheme ? "#111111" : "#f8f8f8",
                  },
                },
                [
                  t._e(),
                  s(
                    "div",
                    {
                      staticClass:
                        "tw-flex-grow tw-flex tw-flex-col tw-justify-center tw-items-center tw-flex-nowrap tw-h-full",
                    },
                    [
                      t._e(),
                      s(
                        "div",
                        {
                          staticClass: "tw-w-full tw-h-12  tw-select-none",
                          class: { "tw-rounded-t-xl": !t.full_windowed },
                          style: {
                            "background-color": t.blacktheme
                              ? "#282828"
                              : "#fcfcfc",
                          },
                        },
                        [
                          s(
                            "div",
                            {
                              staticClass:
                                "tw-w-full tw-h-24 tw-absolute tw-overflow-hidden ",
                              class: { "tw-rounded-xl": !t.full_windowed },
                              staticStyle: {
                                left: "-0px",
                                "pointer-events": "none",
                                opacity: ".5",
                              },
                            },
                            [
                              s("div", {
                                staticClass: "tw-w-full tw-h-12 tw-absolute",
                                staticStyle: { "pointer-events": "none" },
                                style: {
                                  "box-shadow": t.blacktheme
                                    ? "0 0px 24px rgba(33,33,33,.8)"
                                    : "0 0px 24px rgba(212,212,212,.8)",
                                },
                              }),
                            ]
                          ),
                          s("WindowHeaderCursor", {
                            nativeOn: {
                              mousedown: function (e) {
                                return t.move_clicked(e);
                              },
                            },
                          }),
                          t.show_cursor_move
                            ? s("div", {
                                staticClass:
                                  "tw-w-full tw-h-12 cursor-move tw-absolute",
                                class: { "tw-rounded-t-xl": !t.full_windowed },
                              })
                            : t._e(),
                          s(
                            "div",
                            {
                              staticClass:
                                "tw-w-full tw-h-12 tw-absolute tw-overflow-hidden",
                              class: { "tw-rounded-t-xl": !t.full_windowed },
                              staticStyle: { "pointer-events": "none" },
                            },
                            [
                              s(
                                "div",
                                {
                                  staticClass:
                                    "tw-flex tw-flex-row-reverse tw-items-center tw-overflow-hidden tw-w-full tw-h-full red-200",
                                  class: {
                                    "tw-rounded-t-xl": !t.full_windowed,
                                  },
                                },
                                [
                                  s(
                                    "div",
                                    {
                                      staticClass:
                                        "tw-flex-none tw-h-full tw-w-40  tw-flex-row-reverse tw-flex tw-overflow-hidden",
                                      class: {
                                        "tw-rounded-t-3xl": !t.full_windowed,
                                      },
                                      staticStyle: {
                                        "padding-right": "2px",
                                        "pointer-events": "auto",
                                      },
                                      on: { click: t.refocus },
                                    },
                                    [
                                      s("WindowHeaderButton", {
                                        attrs: {
                                          bname: t.blacktheme ? "d2" : "b2",
                                          blacktheme: t.blacktheme,
                                        },
                                        on: { button_clicked: t.close_clicked },
                                      }),
                                      s("WindowHeaderButton", {
                                        attrs: {
                                          bname: t.blacktheme ? "d1" : "b1",
                                          blacktheme: t.blacktheme,
                                        },
                                        on: {
                                          button_clicked: t.fullwindow_clicked,
                                        },
                                      }),
                                      s("WindowHeaderButton", {
                                        attrs: {
                                          bname: t.blacktheme ? "d3" : "b3",
                                          blacktheme: t.blacktheme,
                                        },
                                        on: {
                                          button_clicked:
                                            t.minimizewindow_clicked,
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  s(
                                    "div",
                                    {
                                      ref: "user_header_content",
                                      staticClass: "tw-flex-grow",
                                    },
                                    [t._t("header")],
                                    2
                                  ),
                                ]
                              ),
                            ]
                          ),
                          s("div", {
                            ref: "header_content",
                            staticClass: "tw-w-full tw-h-full",
                          }),
                        ],
                        1
                      ),
                      s(
                        "div",
                        {
                          staticClass:
                            "tw-flex-grow tw-w-full tw-flex tw-justify-center tw-items-center",
                        },
                        [
                          s(
                            "div",
                            {
                              ref: "user_content",
                              staticClass: "tw-flex-none tw-w-full tw-h-full",
                            },
                            [t._t("content")],
                            2
                          ),
                        ]
                      ),
                      s(
                        "div",
                        {
                          staticClass: "tw-w-full tw-flex-none tw-select-none",
                          staticStyle: { height: "0" },
                        },
                        [
                          s(
                            "div",
                            {
                              staticClass:
                                "tw-absolute tw-w-full tw-flex tw-justify-center tw-items-center tw-flex-nowrap",
                              staticStyle: { height: "3px", bottom: "-3px" },
                            },
                            [
                              t.full_windowed || t.fixedsize
                                ? t._e()
                                : s("WindowSider", {
                                    attrs: { mode: 0 },
                                    nativeOn: {
                                      mousedown: function (e) {
                                        return t.bottom_resize(e);
                                      },
                                    },
                                  }),
                            ],
                            1
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                  s(
                    "div",
                    {
                      staticClass: "tw-h-full tw-flex-none tw-select-none",
                      staticStyle: { width: "0" },
                    },
                    [
                      s(
                        "div",
                        {
                          staticClass:
                            "tw-absolute tw-h-full tw-flex tw-flex-col tw-justify-center tw-items-center tw-flex-nowrap",
                          staticStyle: { right: "-3px", width: "3px" },
                        },
                        [
                          s("div", { staticClass: "tw-w-0.5 tw-h-0.5" }),
                          t.full_windowed || t.fixedsize
                            ? t._e()
                            : s("WindowSider", {
                                attrs: { mode: 1 },
                                nativeOn: {
                                  mousedown: function (e) {
                                    return t.right_resize(e);
                                  },
                                },
                              }),
                          t.full_windowed || t.fixedsize
                            ? t._e()
                            : s("WindowSider", {
                                attrs: { mode: 2 },
                                nativeOn: {
                                  mousedown: function (e) {
                                    return t.bottom_right_resize(e);
                                  },
                                },
                              }),
                        ],
                        1
                      ),
                    ]
                  ),
                ],
                1
              ),
            ]
          );
        }),
      ae = [],
      re = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", {
          staticClass: "tw-w-full tw-h-12 tw-rounded-t-xl tw-absolute",
        });
      },
      le = [],
      ce = {
        name: "WindowHeaderCursor",
        components: {},
        data: function () {
          return {};
        },
        created: function () {},
        mounted: function () {},
        watch: {},
        computed: {},
        methods: {},
      },
      de = ce,
      ue = Object(d["a"])(de, re, le, !1, null, "d1395770", null),
      we = ue.exports,
      he = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i(
          "div",
          {
            staticClass:
              "tw-w-12 tw-h-full tw-flex tw-items-center tw-justify-center",
            class: {
              "tw-pl-1": "b2" == t.bname,
              "hover:tw-bg-mygray-lighter": !t.blacktheme,
              "hover:tw-bg-mygray-b12": t.blacktheme,
            },
            on: { click: t.clicked },
          },
          [
            i("img", {
              attrs: { src: s("5981")("./" + t.bname + ".svg"), alt: "" },
            }),
          ]
        );
      },
      fe = [],
      me = {
        name: "Blank",
        components: {},
        data: function () {
          return {};
        },
        props: {
          bname: { type: String, default: "b1" },
          blacktheme: { type: Boolean, default: !1 },
        },
        created: function () {},
        mounted: function () {},
        watch: {},
        computed: {},
        methods: {
          clicked: function () {
            this.$emit("button_clicked");
          },
        },
      },
      pe = me,
      _e = Object(d["a"])(pe, he, fe, !1, null, "5ff5a72d", null),
      ge = _e.exports,
      ve = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            staticClass: "tw-select-none tw-flex-none",
            class: {
              "e-resize": 1 === t.mode,
              "s-resize": 0 === t.mode,
              "nw-resize": 2 === t.mode,
            },
            style:
              1 === t.mode
                ? "width:2px;height: calc(100% - 8px) "
                : 0 === t.mode
                ? "height:2px;width: calc(100% - 8px) "
                : "height:2px;width:2px",
          },
          [
            2 === t.mode
              ? s("div", {
                  staticClass: "tw-relative tw-w-2 tw-h-2",
                  staticStyle: { left: "-4px", top: "-4px" },
                })
              : t._e(),
          ]
        );
      },
      ye = [],
      xe = {
        name: "WindowSider",
        components: {},
        data: function () {
          return {};
        },
        props: { mode: { type: Number, default: 0 } },
        created: function () {},
        mounted: function () {},
        watch: {},
        computed: {},
        methods: {},
      },
      be = xe,
      ke = (s("c8c2"), Object(d["a"])(be, ve, ye, !1, null, "39f7ba02", null)),
      Ae = ke.exports,
      Ce = {
        name: "Window",
        components: {
          WindowSider: Ae,
          WindowHeaderCursor: we,
          WindowHeaderButton: ge,
        },
        data: function () {
          return {
            show_cursor_move: !1,
            closed: !1,
            full_windowed: !1,
            backup_width: "800px",
            backup_height: "600px",
            backup_top: "0px",
            backup_left: "0px",
            default_top: 60,
            default_left: 60,
          };
        },
        props: {
          uuid: String,
          startpos_x: { default: 60 },
          startpos_y: { default: 60 },
          zindex: { type: Number, default: 999 },
          minimized: { type: Boolean, default: !1 },
          default_width: { type: Number, default: -1 },
          default_height: { type: Number, default: -1 },
          fixedsize: { type: Boolean, default: !1 },
          blacktheme: { type: Boolean, default: !1 },
        },
        created: function () {},
        mounted: function () {
          this.default_width < 0
            ? ((this.$refs.window_mainbody.style.width =
                Math.max(Math.min(1e3, 0.6 * this.fullWidth), 680) + "px"),
              this.$emit(
                "width_changed",
                Math.max(Math.min(1e3, 0.6 * this.fullWidth), 680)
              ))
            : ((this.$refs.window_mainbody.style.width =
                this.default_width + "px"),
              this.$emit("width_changed", this.default_width)),
            this.$emit("height_changed", 600),
            (this.default_top = this.startpos_x),
            (this.default_left = this.startpos_y);
        },
        watch: {},
        computed: {
          fullHeight: function () {
            return this.$store.state.fullHeight;
          },
          fullWidth: function () {
            return this.$store.state.fullWidth;
          },
          global_focus: function () {
            return this.$store.state.current_focus;
          },
        },
        methods: {
          getOffset: function (t, e, s) {
            return t < e ? e : t > s ? s : t;
          },
          bottom_resize: function () {
            var t = this;
            if (!this.full_windowed && !this.fixedsize) {
              this.$emit("resize_start");
              var e = document.onmousedown,
                s = s || window.event || s.which,
                i = s.clientY,
                n = this.$refs.window_mainbody.style.top;
              (n = parseFloat(n.substr(0, n.length - 2))), (n = n + 600 - i);
              var o = this.fullHeight - i,
                a = this.$refs.window_mainbody.style.height;
              a = parseFloat(a.substr(0, a.length - 2));
              var r = function () {
                  var e = e || window.event || e.which,
                    s = e.clientY,
                    r = t.getOffset(s - i, n, o);
                  (t.$refs.window_mainbody.style.height = r + a + "px"),
                    t.$emit("height_changed", r + a);
                },
                l = function () {
                  (document.onmousemove = null),
                    (document.onmouseup = null),
                    (document.onmousedown = e),
                    t.$emit("resize_end");
                };
              (document.onmousemove = r),
                (document.onmouseup = l),
                (document.onmousedown = function () {});
            }
          },
          right_resize: function () {
            var t = this;
            if (!this.full_windowed && !this.fixedsize) {
              this.$emit("resize_start");
              var e = document.onmousedown,
                s = s || window.event || s.which,
                i = s.clientX,
                n = this.$refs.window_mainbody.style.left;
              (n = parseFloat(n.substr(0, n.length - 2))), (n = n + 680 - i);
              var o = this.fullWidth - i,
                a = this.$refs.window_mainbody.style.width;
              a = parseFloat(a.substr(0, a.length - 2));
              var r = function () {
                  var e = e || window.event || e.which,
                    s = e.clientX,
                    r = t.getOffset(s - i, n, o);
                  (t.$refs.window_mainbody.style.width = r + a + "px"),
                    t.$emit("width_changed", r + a);
                },
                l = function () {
                  (document.onmousemove = null),
                    (document.onmouseup = null),
                    (document.onmousedown = e),
                    t.$emit("resize_end");
                };
              (document.onmousemove = r),
                (document.onmouseup = l),
                (document.onmousedown = function () {});
            }
          },
          bottom_right_resize: function () {
            var t = this;
            if (!this.full_windowed && !this.fixedsize) {
              this.$emit("resize_start");
              var e = document.onmousedown,
                s = s || window.event || s.which,
                i = s.clientY,
                n = s.clientX,
                o = this.$refs.window_mainbody.style.left;
              (o = parseFloat(o.substr(0, o.length - 2))), (o = o + 680 - n);
              var a = this.$refs.window_mainbody.style.top;
              (a = parseFloat(a.substr(0, a.length - 2))), (a = a + 600 - i);
              var r = this.fullWidth - n,
                l = this.fullHeight - i,
                c = this.$refs.window_mainbody.style.width;
              c = parseFloat(c.substr(0, c.length - 2));
              var d = this.$refs.window_mainbody.style.height;
              d = parseFloat(d.substr(0, d.length - 2));
              var u = function () {
                  var e = e || window.event || e.which,
                    s = e.clientX,
                    u = e.clientY,
                    w = t.getOffset(s - n, o, r),
                    h = t.getOffset(u - i, a, l);
                  (t.$refs.window_mainbody.style.width = w + c + "px"),
                    (t.$refs.window_mainbody.style.height = h + d + "px"),
                    t.$emit("height_changed", h + d),
                    t.$emit("width_changed", w + c);
                },
                w = function () {
                  (document.onmousemove = null),
                    (document.onmouseup = null),
                    (document.onmousedown = e),
                    t.$emit("resize_end");
                };
              (document.onmousemove = u),
                (document.onmouseup = w),
                (document.onmousedown = function () {});
            }
          },
          move_clicked: function () {
            var t = this;
            if (
              (this.$store.commit("close_side_bar"),
              this.$emit("resize_start"),
              this.refocus(),
              this.full_windowed)
            )
              this.$emit("resize_end");
            else {
              var e = document.onmousedown;
              this.show_cursor_move = !0;
              var s = s || window.event || s.which,
                i = s.clientY,
                n = s.clientX,
                o = -s.clientX,
                a = -s.clientY,
                r = this.fullWidth,
                l = this.fullHeight,
                c = this.$refs.window_mainbody.style.left;
              c = parseFloat(c.substr(0, c.length - 2));
              var d = this.$refs.window_mainbody.style.top;
              d = parseFloat(d.substr(0, d.length - 2));
              var u = function () {
                  var e = e || window.event || e.which,
                    s = e.clientX,
                    u = e.clientY,
                    w = t.getOffset(s - n, o, r),
                    h = t.getOffset(u - i, a, l);
                  (t.$refs.window_mainbody.style.left = w + c + "px"),
                    (t.$refs.window_mainbody.style.top = h + d + "px");
                },
                w = function () {
                  (t.show_cursor_move = !1),
                    (document.onmousemove = null),
                    (document.onmouseup = null),
                    (document.onmousedown = e),
                    t.$emit("resize_end");
                };
              (document.onmousemove = u),
                (document.onmouseup = w),
                (document.onmousedown = function () {});
            }
          },
          close_clicked: function () {
            var t = this;
            (this.closed = !0),
              window.setTimeout(function () {
                t.$store.commit("close_window_with_uuid", { uuid: t.uuid });
              }, 400);
          },
          fullwindow_clicked: function () {
            if (this.full_windowed) {
              (this.full_windowed = !1),
                (this.$refs.window_mainbody.style.width = this.backup_width),
                (this.$refs.window_mainbody.style.height = this.backup_height),
                (this.$refs.window_mainbody.style.top = this.backup_top),
                (this.$refs.window_mainbody.style.left = this.backup_left);
              var t = parseFloat(
                  this.backup_height.substr(0, this.backup_height.length - 2)
                ),
                e = parseFloat(
                  this.backup_width.substr(0, this.backup_width.length - 2)
                );
              this.$emit("height_changed", t), this.$emit("width_changed", e);
            } else
              (this.full_windowed = !0),
                (this.backup_width = this.$refs.window_mainbody.style.width),
                (this.backup_height = this.$refs.window_mainbody.style.height),
                (this.backup_left = this.$refs.window_mainbody.style.left),
                (this.backup_top = this.$refs.window_mainbody.style.top),
                (this.$refs.window_mainbody.style.width =
                  this.fullWidth + "px"),
                (this.$refs.window_mainbody.style.height =
                  this.fullHeight - 75 + "px"),
                (this.$refs.window_mainbody.style.top = "0px"),
                (this.$refs.window_mainbody.style.left = "0px"),
                this.$emit("height_changed", this.fullHeight - 75),
                this.$emit("width_changed", this.fullWidth);
          },
          close_side_bar: function () {
            this.$store.commit("close_side_bar");
          },
          content_clicked: function () {},
          minimizewindow_clicked: function () {
            var t = this;
            this.$store.commit("minimize_window_with_uuid", {
              uuid: this.uuid,
            }),
              window.setTimeout(function () {
                t.$store.commit("refresh_window_focus", { uuid: "" });
              }, 400);
          },
          window_clicked: function () {
            this.$store.commit("close_side_bar"), this.refocus();
          },
          refocus: function () {
            this.$store.commit("refresh_window_focus", { uuid: this.uuid });
          },
          mr_clicked: function (t) {
            t.stopPropagation();
          },
        },
      },
      ze = Ce,
      Se = (s("cf8b"), Object(d["a"])(ze, oe, ae, !1, null, "22a20485", null)),
      Oe = Se.exports,
      je = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            staticClass:
              " tw-w-full hover:tw-bg-gray-200 tw-rounded-lg tw-flex tw-justify-start tw-items-center tw-py-1.5",
          },
          [
            s(
              "v-icon",
              {
                staticClass: " tw-flex tw-items-center tw-mb-0.5 tw-ml-1.5",
                staticStyle: { color: "rgba(66,77,104)" },
                attrs: { small: "" },
              },
              [t._v("mdi-" + t._s(t.icon))]
            ),
            s(
              "div",
              {
                staticClass:
                  "tw-flex tw-items-center tw-ml-2 tw-w-full tw-h-full",
                staticStyle: { color: "rgba(66,77,104)" },
              },
              [t._v(t._s(t.text))]
            ),
          ],
          1
        );
      },
      Ie = [],
      Me = {
        name: "WindowFolderIcon",
        components: {},
        data: function () {
          return {};
        },
        props: {
          text: { type: String, default: "Reecently" },
          icon: { type: String, default: "clock-time-three" },
        },
        created: function () {},
        mounted: function () {},
        watch: {},
        computed: {},
        methods: {},
      },
      Ke = Me,
      We = Object(d["a"])(Ke, je, Ie, !1, null, "aacf7d10", null),
      De = We.exports;
    p()(We, { VIcon: et["a"] });
    var Fe = function () {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      Be = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "tw-px-1 e-resize" }, [
            s("div", { staticClass: "vl" }),
          ]);
        },
      ],
      Ee = {
        name: "WindowFolderSlider",
        components: {},
        data: function () {
          return {};
        },
        props: {},
        created: function () {},
        mounted: function () {},
        watch: {},
        computed: {},
        methods: {},
      },
      Ne = Ee,
      Te = (s("cb48"), Object(d["a"])(Ne, Fe, Be, !1, null, "1b93c7bb", null)),
      Le = Te.exports,
      Re = {
        name: "WindowText",
        components: {
          Window: Oe,
          WindowSider: Ae,
          WindowFolderIcon: De,
          WindowFolderSlider: Le,
        },
        data: function () {
          return {
            result: [],
            delay: 200,
            clicks: 0,
            focus: !1,
            cont_margin: 50,
            cont_height: 550,
            cont_width: 800,
            body_margin: 228,
            selected: "Date Modified",
            direction_down: !0,
            name_col_width: 160,
            date_col_width: 110,
            size_col_width: 50,
            current_focus: "",
            file_filemap: [],
            open_openpath: [],
          };
        },
        props: {
          uuid: String,
          startpos_x: { default: 60 },
          startpos_y: { default: 60 },
          zindex: { type: Number, default: 999 },
          minimized: { type: Boolean, default: !1 },
          filemap: { default: [] },
          openpath: { default: [] },
        },
        created: function () {
          (this.file_filemap = this.filemap),
            (this.open_openpath = this.openpath);
        },
        mounted: function () {
          this.$store.commit("refresh_window_focus", { uuid: this.uuid });
        },
        watch: {
          filemap: function (t) {
            this.file_filemap = t;
          },
          openpath: function (t) {
            this.open_openpath = t;
          },
        },
        computed: {
          mdi_computed_direction: function () {
            return this.direction_down ? "mdi-chevron-down" : "mdi-chevron-up";
          },
          current_dir_list: function () {
            var t = this;
            if (this.file_filemap === [] || this.open_openpath === [])
              return [];
            var e,
              s = this.file_filemap,
              i = Object(M["a"])(this.open_openpath);
            try {
              for (i.s(); !(e = i.n()).done; ) {
                var n,
                  o = e.value,
                  a = Object(M["a"])(s);
                try {
                  for (a.s(); !(n = a.n()).done; ) {
                    var r = n.value;
                    if (r.name === o) {
                      s = r.children;
                      break;
                    }
                  }
                } catch (u) {
                  a.e(u);
                } finally {
                  a.f();
                }
              }
            } catch (u) {
              i.e(u);
            } finally {
              i.f();
            }
            var l = JSON.parse(JSON.stringify(s)),
              c = "name";
            "Name" === this.selected
              ? (c = "name")
              : "Date Modified" === this.selected
              ? (c = "lastedittime")
              : "Size" === this.selected && (c = "size");
            var d = function (e, s) {
              var i = 0;
              return (
                (i =
                  e.size < 0 && s.size >= 0
                    ? -1
                    : e.size >= 0 && s.size < 0
                    ? 1
                    : e[c] === s[c]
                    ? 0
                    : e[c] > s[c]
                    ? 1
                    : -1),
                t.direction_down ? -i : i
              );
            };
            return l.sort(d), l;
          },
          folder_name: function () {
            return 0 === this.open_openpath.length
              ? ""
              : this.open_openpath[this.open_openpath.length - 1];
          },
          global_focus: function () {
            return this.$store.state.current_focus;
          },
        },
        methods: {
          PrefixZero: function (t, e) {
            return (Array(e).join(0) + t).slice(-e);
          },
          getOffset: function (t, e, s) {
            return t < e ? e : t > s ? s : t;
          },
          window_height_changed: function (t) {
            this.cont_height = t - this.cont_margin;
          },
          window_width_changed: function (t) {
            this.cont_width = t - this.body_margin;
            var e =
              this.name_col_width + this.date_col_width + this.size_col_width;
            (this.name_col_width = (this.name_col_width * this.cont_width) / e),
              (this.date_col_width =
                (this.date_col_width * this.cont_width) / e),
              (this.size_col_width =
                (this.size_col_width * this.cont_width) / e);
          },
          right_resize: function () {
            var t = this,
              e = document.onmousedown,
              s = s || window.event || s.which,
              i = s.clientX,
              n = this.$refs.leftbar.style.width;
            n = parseFloat(n.substr(0, n.length - 2));
            var o = this.$refs.name_col.style.width;
            o = parseFloat(o.substr(0, o.length - 2));
            var a = this.$refs.date_col.style.width;
            a = parseFloat(a.substr(0, a.length - 2));
            var r = this.$refs.size_col.style.width;
            r = parseFloat(r.substr(0, r.length - 2));
            var l = o + a + r,
              c = Math.max(Math.min(l - a - r - 110, 260), 160),
              d = 160,
              u = function () {
                var e = e || window.event || e.which,
                  s = e.clientX,
                  a = t.getOffset(s - i + n, d, c);
                (t.$refs.leftbar.style.width = a + "px"),
                  (t.body_margin = a + 20);
                var r = o + n - a;
                (t.$refs.name_col.style.width = r + "px"),
                  (t.$refs.name_col_cont.style.width = r + "px");
              },
              w = function () {
                (document.onmousemove = null),
                  (document.onmouseup = null),
                  (document.onmousedown = e);
              };
            (document.onmousemove = u),
              (document.onmouseup = w),
              (document.onmousedown = function () {});
          },
          switch_selected: function (t) {
            (this.selected = t), (this.direction_down = !this.direction_down);
          },
          right_resize_grid_1: function () {
            var t = this,
              e = document.onmousedown,
              s = s || window.event || s.which,
              i = s.clientX,
              n = this.$refs.name_col.style.width;
            n = parseFloat(n.substr(0, n.length - 2));
            var o = this.$refs.date_col.style.width;
            o = parseFloat(o.substr(0, o.length - 2));
            var a = this.$refs.size_col.style.width;
            a = parseFloat(a.substr(0, a.length - 2));
            var r = n + o + a,
              l = 110,
              c = r - 190,
              d = function () {
                var e = e || window.event || e.which,
                  s = e.clientX,
                  a = t.getOffset(s - i + n, l, c),
                  d = Math.max(r - o - a, 70),
                  u = r - d - a;
                (t.$refs.name_col.style.width = a + "px"),
                  (t.$refs.size_col.style.width = d + "px"),
                  (t.$refs.date_col.style.width = u + "px"),
                  (t.$refs.name_col_cont.style.width = a + 4 + "px"),
                  (t.$refs.size_col_cont.style.width = d + 4 + "px"),
                  (t.$refs.date_col_cont.style.width = u + 10 + "px");
              },
              u = function () {
                (document.onmousemove = null),
                  (document.onmouseup = null),
                  (document.onmousedown = e);
              };
            (document.onmousemove = d),
              (document.onmouseup = u),
              (document.onmousedown = function () {});
          },
          right_resize_grid_2: function () {
            var t = this,
              e = document.onmousedown,
              s = s || window.event || s.which,
              i = s.clientX,
              n = this.$refs.name_col.style.width;
            n = parseFloat(n.substr(0, n.length - 2));
            var o = this.$refs.date_col.style.width;
            o = parseFloat(o.substr(0, o.length - 2));
            var a = this.$refs.size_col.style.width;
            a = parseFloat(a.substr(0, a.length - 2));
            var r = n + o + a,
              l = 120,
              c = r - n - 70,
              d = function () {
                var e = e || window.event || e.which,
                  s = e.clientX,
                  a = t.getOffset(s - i + o, l, c),
                  d = r - a - n;
                (t.$refs.date_col.style.width = a + "px"),
                  (t.$refs.size_col.style.width = d + "px"),
                  (t.$refs.date_col_cont.style.width = a + 10 + "px"),
                  (t.$refs.size_col_cont.style.width = d + 4 + "px");
              },
              u = function () {
                (document.onmousemove = null),
                  (document.onmouseup = null),
                  (document.onmousedown = e);
              };
            (document.onmousemove = d),
              (document.onmouseup = u),
              (document.onmousedown = function () {});
          },
          time_format_converter: function (t) {
            var e = new Date(1e3 * t);
            return (
              e.getFullYear() +
              "/" +
              this.PrefixZero(e.getMonth() + 1, 2) +
              "/" +
              this.PrefixZero(e.getDate(), 2) +
              " " +
              this.PrefixZero(e.getHours(), 2) +
              ":" +
              this.PrefixZero(e.getMinutes(), 2) +
              ":" +
              this.PrefixZero(e.getSeconds(), 2)
            );
          },
          size_format_converter: function (t) {
            return t < 0
              ? "-"
              : t >= 1 << 20
              ? (t / (1 << 20)).toFixed(1) + "MB"
              : t >= 1024
              ? (t / 1024).toFixed(1) + "KB"
              : t + "B";
          },
          item_oneClick: function (t) {
            if (
              ((this.current_focus = this.current_dir_list[t].fileuuid),
              this.clicks++,
              1 === this.clicks)
            ) {
              var e = this;
              this.timer = setTimeout(function () {
                e.clicks = 0;
              }, this.delay);
            } else {
              clearTimeout(this.timer);
              var s = this.current_dir_list[t];
              void 0 === s.children
                ? ((document.body.style.cursor = "progress"),
                  window.setTimeout(function () {
                    document.body.style.cursor = "default";
                  }, 500),
                  this.$store.commit("open_new_window", {
                    type: "text",
                    filesrc: s.path,
                    filename: s.name,
                    size: s.size,
                  }))
                : (this.open_openpath.push(s.name),
                  (this.file_filemap = s.children)),
                (this.clicks = 0);
            }
          },
          switch_supr_class: function (t) {
            var e = this.open_openpath.length - 1 - t;
            if (e > 0) {
              for (var s = 0; s < e; s++) this.open_openpath.pop();
              var i,
                n = this.filemap,
                o = Object(M["a"])(this.open_openpath);
              try {
                for (o.s(); !(i = o.n()).done; ) {
                  var a,
                    r = i.value,
                    l = Object(M["a"])(n);
                  try {
                    for (l.s(); !(a = l.n()).done; ) {
                      var c = a.value;
                      void 0 !== c.children && c.name === r && (n = c.children);
                    }
                  } catch (d) {
                    l.e(d);
                  } finally {
                    l.f();
                  }
                }
              } catch (d) {
                o.e(d);
              } finally {
                o.f();
              }
              this.file_filemap = n;
            }
          },
          mr_clicked: function () {
            this.$store.commit("show_context_menu");
          },
        },
      },
      He = Re,
      Pe = (s("8e1e"), Object(d["a"])(He, ie, ne, !1, null, "3ab2e317", null)),
      Ve = Pe.exports;
    p()(Pe, { VIcon: et["a"] });
    var Ye = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("Window", {
          attrs: {
            uuid: t.uuid,
            startpos_x: t.startpos_x,
            startpos_y: t.startpos_y,
            zindex: t.zindex,
            default_width: t.default_width,
            default_height: t.default_height,
            fixedsize: t.fixedsize,
            minimized: t.minimized,
          },
          scopedSlots: t._u([
            {
              key: "header",
              fn: function () {
                return [
                  i(
                    "div",
                    {
                      staticClass: "tw-flex tw-items-center tw-select-none",
                      staticStyle: { "pointer-events": "none" },
                    },
                    [
                      i("img", {
                        staticClass: " tw-w-8 tw-h-7 tw-ml-4",
                        staticStyle: { "pointer-events": "auto" },
                        attrs: { src: s("d213"), alt: "" },
                      }),
                      i(
                        "div",
                        {
                          staticClass:
                            " tw-ml-4 tw-font-bold tw-tracking-wider tw-w-14",
                          staticStyle: { "pointer-events": "auto" },
                        },
                        [t._v(" Music ")]
                      ),
                    ]
                  ),
                ];
              },
              proxy: !0,
            },
            {
              key: "content",
              fn: function () {
                return [
                  i(
                    "div",
                    {
                      staticClass:
                        " tw-w-full tw-h-full tw-overflow-hidden tw-rounded-b-2xl tw-flex tw-flex-col\n    tw-items-center tw-justify-center",
                      on: {
                        contextmenu: function (e) {
                          return e.preventDefault(), t.mr_clicked(e);
                        },
                      },
                    },
                    [
                      i("aplayer", {
                        staticStyle: {
                          width: "500px",
                          height: "500px",
                          overflow: "scroll",
                        },
                        attrs: {
                          autoplay: "",
                          music: t.firstmusic,
                          list: t.musiclist,
                          repeat: "repeat-all",
                        },
                      }),
                    ],
                    1
                  ),
                ];
              },
              proxy: !0,
            },
          ]),
        });
      },
      Ge = [],
      Xe = s("0f7d"),
      Ue = s.n(Xe),
      Qe = {
        name: "WindowMusic",
        components: { Window: Oe, Aplayer: Ue.a },
        data: function () {
          return { musiclist: [] };
        },
        props: {
          uuid: String,
          startpos_x: { default: 60 },
          startpos_y: { default: 60 },
          zindex: { type: Number, default: 999 },
          minimized: { type: Boolean, default: !1 },
          default_width: { type: Number, default: -1 },
          default_height: { type: Number, default: -1 },
          fixedsize: { type: Boolean, default: !1 },
        },
        created: function () {
          var t = this;
          this.$axios
            .raw("musics.json")
            .then(function (e) {
              (document.body.style.cursor = "normal"),
                "string" === typeof e.data &&
                  console.log("Load error, got string returned"),
                (t.musiclist = e.data);
            })
            .catch(function (t) {
              console.log("[WindowMusic] axios error: ", t);
            });
        },
        mounted: function () {},
        watch: {},
        computed: {
          firstmusic: function () {
            return this.musiclist.length > 0
              ? this.musiclist[0]
              : { title: "", artist: "", src: "", pic: "" };
          },
        },
        methods: {
          window_height_changed: function (t) {
            this.cont_height = t - this.cont_margin;
          },
          mr_clicked: function () {
            this.$store.commit("show_context_menu");
          },
        },
      },
      Ze = Qe,
      Je = Object(d["a"])(Ze, Ye, Ge, !1, null, "c9cb8326", null),
      qe = Je.exports,
      $e = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("Window", {
          attrs: {
            uuid: t.uuid,
            startpos_x: t.startpos_x,
            startpos_y: t.startpos_y,
            zindex: t.zindex,
            blacktheme: !0,
            minimized: t.minimized,
          },
          on: {
            resize_start: function (e) {
              t.show_blocker = !0;
            },
            resize_end: function (e) {
              t.show_blocker = !1;
            },
          },
          scopedSlots: t._u([
            {
              key: "header",
              fn: function () {
                return [
                  i(
                    "div",
                    {
                      staticClass: "tw-flex tw-items-center tw-select-none",
                      staticStyle: { "pointer-events": "none" },
                    },
                    [
                      i("img", {
                        staticClass: " tw-w-8 tw-h-7 tw-ml-4",
                        staticStyle: { "pointer-events": "none" },
                        attrs: { src: s("819e"), alt: "" },
                      }),
                      i(
                        "div",
                        {
                          staticClass:
                            " tw-ml-4 tw-font-semibold tw-tracking-wider tw-h-8 tw-rounded-lg tw-px-4 tw-py-1  tw-text-white tw-bg-mygray-b13 hover:tw-bg-mygray-b14 ",
                          staticStyle: {
                            "pointer-events": "auto",
                            "max-width": "400px",
                            "white-space": "nowrap",
                            "text-overflow": "ellipsis",
                            overflow: "hidden",
                          },
                        },
                        [t._v(" - linux.dawidolko.pl - Visual Studio Code ")]
                      ),
                    ]
                  ),
                ];
              },
              proxy: !0,
            },
            {
              key: "content",
              fn: function () {
                return [
                  i(
                    "div",
                    {
                      staticClass:
                        "tw-w-full tw-h-full tw-flex tw-overflow-hidden",
                      on: { click: t.go_focus },
                    },
                    [
                      i("iframe", {
                        staticClass: " zoomined-frame ",
                        attrs: {
                          src: "https://github1s.com/dawidolko/Simulaing-Linux-System-GUI/blob/main/src/components/Interlude.vue",
                          frameborder: "0",
                        },
                      }),
                      t.show_blocker
                        ? i(
                            "div",
                            {
                              staticClass:
                                "tw-w-full tw-h-full tw-absolute background-color",
                              staticStyle: { top: "0" },
                            },
                            [
                              i("span", { staticClass: "tw-hidden" }, [
                                t._v(
                                  " this div is to prevent iframe take control over mouse event "
                                ),
                              ]),
                            ]
                          )
                        : t._e(),
                    ]
                  ),
                ];
              },
              proxy: !0,
            },
          ]),
        });
      },
      ts = [],
      es = {
        name: "WindowTerminal",
        components: { Window: Oe },
        data: function () {
          return { show_blocker: !1 };
        },
        props: {
          uuid: String,
          startpos_x: { default: 60 },
          startpos_y: { default: 60 },
          zindex: { type: Number, default: 999 },
          minimized: { type: Boolean, default: !1 },
        },
        created: function () {},
        mounted: function () {},
        watch: {},
        computed: {},
        methods: {
          go_focus: function () {
            this.$store.commit("refresh_window_focus", { type: "vscode" });
          },
        },
      },
      ss = es,
      is = (s("97ee"), Object(d["a"])(ss, $e, ts, !1, null, "16f72a8c", null)),
      ns = is.exports,
      os = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("Window", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: t.loaded,
              expression: "loaded",
            },
          ],
          attrs: {
            startpos_x: t.startpos_x,
            startpos_y: t.startpos_y,
            uuid: t.uuid,
            zindex: t.zindex,
            minimized: t.minimized,
          },
          on: {
            height_changed: t.window_height_changed,
            width_changed: t.window_width_changed,
          },
          scopedSlots: t._u([
            {
              key: "header",
              fn: function () {
                return [
                  i(
                    "div",
                    {
                      staticClass: "tw-flex tw-items-center tw-select-none",
                      staticStyle: { "pointer-events": "none" },
                    },
                    [
                      i("img", {
                        staticClass: " tw-w-8 tw-h-7 tw-ml-4",
                        staticStyle: { "pointer-events": "auto" },
                        attrs: { src: s("493f"), alt: "" },
                      }),
                      i(
                        "div",
                        {
                          staticClass:
                            "tw-h-9 tw-flex tw-items-center tw-justify-center tw-rounded-lg tw-bg-mygray-b4 hover:tw-bg-mygray-b5 tw-ml-3",
                          staticStyle: { "pointer-events": "auto" },
                          style: {
                            opacity: t.global_focus === t.uuid ? "1" : "0.85",
                          },
                          on: { click: t.title_clicked },
                        },
                        [
                          i(
                            "div",
                            {
                              staticClass:
                                "tw-h-full tw-px-3  tw-text-sm tw-font-normal tw-text-gray-50 tw-pt-2",
                              staticStyle: {
                                "white-space": "nowrap",
                                "text-overflow": "ellipsis",
                                overflow: "hidden",
                                "max-width": "300px",
                              },
                            },
                            [t._v(t._s(t.filename))]
                          ),
                        ]
                      ),
                      i(
                        "div",
                        {
                          staticClass:
                            "tw-h-9 tw-px-3  tw-flex tw-items-center tw-justify-center tw-bg-mygray-b3  tw-rounded-lg tw-ml-3 hover:tw-bg-mygray-b1 tw-text-mygray-b8",
                          staticStyle: { "pointer-events": "auto" },
                        },
                        [
                          i("v-icon", { attrs: { small: "" } }, [
                            t._v("mdi-plus"),
                          ]),
                        ],
                        1
                      ),
                    ]
                  ),
                ];
              },
              proxy: !0,
            },
            {
              key: "content",
              fn: function () {
                return [
                  i(
                    "div",
                    {
                      staticClass:
                        "tw-w-full tw-h-full tw-rounded-b-2xl tw-flex tw-flex-col-reverse",
                      on: {
                        contextmenu: function (e) {
                          return e.preventDefault(), t.mr_clicked(e);
                        },
                      },
                    },
                    [
                      i(
                        "div",
                        {
                          staticClass:
                            "tw-h-8 tw-w-full tw-rounded-b-2xl tw-border-t tw-border-gray-200 tw-items-center tw-flex tw-flex-row-reverse",
                          staticStyle: { "background-color": "#fdfdfd" },
                        },
                        [
                          i(
                            "div",
                            {
                              staticClass:
                                "tw-flex-none tw-h-full tw-flex tw-justify-center tw-items-center tw-px-3 tw-py-1 tw-select-none ",
                            },
                            [
                              i(
                                "button",
                                {
                                  staticClass:
                                    "tw-flex tw-justify-center tw-items-center hover:tw-bg-mygray-b1 tw-px-2 rounded-lg tw-text-xs tw-text-gray-700 tw-w-full tw-h-full tw-outline-none",
                                },
                                [
                                  t._v(" None "),
                                  i(
                                    "v-icon",
                                    {
                                      staticClass: "tw-ml-1",
                                      attrs: { small: "" },
                                    },
                                    [t._v("mdi-chevron-down")]
                                  ),
                                ],
                                1
                              ),
                            ]
                          ),
                          i("div", { staticClass: "vl" }),
                          i(
                            "div",
                            {
                              staticClass:
                                "tw-flex-none tw-h-full tw-flex tw-justify-center tw-items-center tw-px-3 tw-py-1 tw-select-none",
                            },
                            [
                              i(
                                "button",
                                {
                                  staticClass:
                                    "tw-flex tw-justify-center tw-items-center hover:tw-bg-mygray-b1 tw-px-2 rounded-lg tw-text-xs tw-text-gray-700 tw-w-full tw-h-full tw-outline-none",
                                },
                                [
                                  t._v(" UTF-8 "),
                                  i(
                                    "v-icon",
                                    {
                                      staticClass: "tw-ml-1",
                                      attrs: { small: "" },
                                    },
                                    [t._v("mdi-chevron-down")]
                                  ),
                                ],
                                1
                              ),
                            ]
                          ),
                          i("div", { staticClass: "vl" }),
                          i(
                            "div",
                            {
                              staticClass:
                                "tw-flex-none tw-h-full tw-flex tw-justify-center tw-items-center tw-px-3 tw-py-1 tw-select-none",
                            },
                            [
                              i(
                                "div",
                                {
                                  staticClass:
                                    "tw-flex tw-justify-center tw-items-center rounded-lg tw-text-xs tw-text-gray-700 tw-w-full tw-h-full",
                                },
                                [t._v(" Browse ")]
                              ),
                            ]
                          ),
                          i(
                            "div",
                            {
                              staticClass:
                                "tw-flex-none tw-h-full tw-flex tw-justify-center tw-items-center tw-pr-24 tw-py-1 tw-select-none",
                            },
                            [
                              i(
                                "div",
                                {
                                  staticClass:
                                    "tw-flex tw-justify-center tw-items-center rounded-lg tw-text-xs tw-text-gray-700 tw-w-full tw-h-full",
                                },
                                [
                                  t._v(
                                    " " +
                                      t._s(t.size_format_converter(t.size)) +
                                      " "
                                  ),
                                ]
                              ),
                            ]
                          ),
                          i(
                            "div",
                            {
                              staticClass:
                                "tw-flex-grow tw-h-full tw-flex tw-flex-row tw-justify-start tw-py-1 tw-select-none tw-pl-4",
                            },
                            [
                              i(
                                "div",
                                {
                                  staticClass:
                                    "tw-flex tw-justify-start tw-items-center rounded-lg tw-text-xs tw-text-gray-700 tw-w-18 tw-h-full tw-flex-nowrap",
                                },
                                [
                                  t._v(
                                    " Ln " +
                                      t._s(t.line_num) +
                                      ", Col " +
                                      t._s(t.col_num) +
                                      " "
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ]
                      ),
                      i(
                        "div",
                        {
                          staticClass:
                            " tw-flex-grow tw-w-full tw-flex flex-row",
                        },
                        [
                          i(
                            "div",
                            {
                              staticClass: "tw-w-8 tw-h-full tw-px-1.5 tw-py-1",
                              staticStyle: {
                                "background-color": "#f0f0f0",
                                color: "#a1b9cf",
                              },
                            },
                            [
                              i("span", { staticClass: "tw-hidden" }, [
                                t._v("1"),
                              ]),
                            ]
                          ),
                          i(
                            "div",
                            {
                              staticClass:
                                "tw-w-full  tw-bg-white tw-pl-5 tw-pr-3 tw-py-1.5 change-srollbar",
                              staticStyle: { overflow: "auto" },
                              style: { height: t.cont_height + "px" },
                            },
                            [
                              i("markdown-it-vue", {
                                staticClass: "md-body zoomined-frame",
                                style: {
                                  width: t.cont_width + "px !important",
                                },
                                attrs: {
                                  content: t.content,
                                  options: { markdownIt: { html: !0 } },
                                },
                              }),
                            ],
                            1
                          ),
                        ]
                      ),
                    ]
                  ),
                ];
              },
              proxy: !0,
            },
          ]),
        });
      },
      as = [],
      rs = (s("159b"), s("48cd")),
      ls = s.n(rs),
      cs =
        (s("f417"),
        "## Failed to load the file, some kind of error may have occurred\n\nWe are very sorry about the inconvenience caused.\n\n Since it is not likely a probelm caused by the framework author, this is usually an error due to network reasons.\n\nIt is recommended to do the following setps:\n> 1.Reconnect the network cable and pray for the resume.\n> 2.Go to the author's blog and give the repo a star.\n> 3.Yes, this advice is just gibberish.The only reason why this exists is to prove to you that markdown can be recognized correctly even under case of article loading failure."),
      ds = {
        name: "WindowText",
        components: { Window: Oe, MarkdownItVue: ls.a },
        data: function () {
          return {
            content: "",
            cont_margin: 80,
            cont_height: 520,
            line_num: 0,
            col_num: 0,
            cont_width: 800,
            cont_width_margin: 76,
            loaded: !1,
            copy_lock: !1,
          };
        },
        props: {
          uuid: String,
          startpos_x: { default: 60 },
          startpos_y: { default: 60 },
          zindex: { type: Number, default: 999 },
          minimized: { type: Boolean, default: !1 },
          filesrc: { type: String, default: "" },
          filename: { type: String, default: "" },
          size: { type: Number, default: 0 },
        },
        created: function () {},
        mounted: function () {
          var t = this;
          this.$axios
            .raw(this.filesrc)
            .then(function (e) {
              (document.body.style.cursor = "normal"),
                "string" === typeof e.data &&
                  (console.log("Load error, got string returned"),
                  (t.content = cs)),
                (t.content = e.data.data),
                console.log(e.data.data),
                t.compute_line_col_num(e.data.data),
                t.$store.commit("refresh_window_focus", { uuid: t.uuid }),
                (t.loaded = !0);
            })
            .catch(function (e) {
              (document.body.style.cursor = "normal"),
                console.log("error:", e),
                t.$store.commit("refresh_window_focus", { uuid: t.uuid }),
                (t.content = cs),
                (t.loaded = !0);
            });
        },
        watch: {},
        computed: {
          global_focus: function () {
            return this.$store.state.current_focus;
          },
        },
        methods: {
          window_height_changed: function (t) {
            this.cont_height = t - this.cont_margin;
          },
          compute_line_col_num: function (t) {
            var e = t.split(/[(\r\n)\r\n]+/),
              s = 0;
            e.forEach(function (t, e) {
              t.length > s && (s = t.length);
            }),
              (this.line_num = e.length),
              (this.col_num = s);
          },
          size_format_converter: function (t) {
            return t < 0
              ? "-"
              : t >= 1 << 20
              ? (t / (1 << 20)).toFixed(1) + "MB"
              : t >= 1024
              ? (t / 1024).toFixed(1) + "KiB"
              : t + "Bytes";
          },
          window_width_changed: function (t) {
            this.cont_width = t - this.cont_width_margin;
          },
          title_clicked: function () {
            var t = this,
              e = document.getElementsByClassName("realbackground")[0];
            if (void 0 !== e && !this.copy_lock) {
              this.copy_lock = !0;
              var s = s || window.event || s.which,
                i = s.clientY,
                n = s.clientX,
                o = document.createElement("div");
              (o.innerText = "URL has been copied"),
                (o.style.cssText =
                  "z-index:1001;white-space:nowrap;top:" +
                  (i - 20) +
                  "px;left:" +
                  n +
                  "px"),
                (o.className =
                  "tw-px-2 tw-py-1 tw-absolute tw-rounded-md tw-bg-gray-200 tw-text-sm tw-tracking-wide tw-text-gray-900  tw-select-none animate__animated"),
                e.appendChild(o),
                (o.className += " animate__fadeOutUp"),
                navigator.clipboard.writeText(
                  document.location.protocol +
                    "//" +
                    window.location.host +
                    "/#/desktop/post/" +
                    this.filename
                ),
                window.setTimeout(function () {
                  o.remove(), (t.copy_lock = !1);
                }, 550);
            }
          },
          mr_clicked: function () {
            this.$store.commit("show_context_menu");
          },
        },
      },
      us = ds,
      ws = (s("a8e1"), Object(d["a"])(us, os, as, !1, null, "0dd68721", null)),
      hs = ws.exports;
    p()(ws, { VIcon: et["a"] });
    var fs = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("Window", {
          attrs: {
            uuid: t.uuid,
            startpos_x: t.startpos_x,
            startpos_y: t.startpos_y,
            zindex: t.zindex,
            blacktheme: !0,
            minimized: t.minimized,
          },
          on: { height_changed: t.height_changed },
          scopedSlots: t._u([
            {
              key: "header",
              fn: function () {
                return [
                  i(
                    "div",
                    {
                      staticClass: "tw-flex tw-items-center tw-select-none",
                      staticStyle: { "pointer-events": "none" },
                    },
                    [
                      i("img", {
                        staticClass: " tw-w-8 tw-h-7 tw-ml-4",
                        staticStyle: { "pointer-events": "none" },
                        attrs: { src: s("0d33"), alt: "" },
                      }),
                      i(
                        "div",
                        {
                          staticClass:
                            " tw-ml-4 tw-font-semibold tw-tracking-wider tw-h-8 tw-rounded-lg tw-px-4 tw-py-1  tw-text-white tw-bg-mygray-b13 hover:tw-bg-mygray-b14 ",
                          staticStyle: {
                            "pointer-events": "auto",
                            "max-width": "300px",
                            "white-space": "nowrap",
                            "text-overflow": "ellipsis",
                            overflow: "hidden",
                          },
                        },
                        [t._v(" guest@dawidolko-PC: ~/ ")]
                      ),
                    ]
                  ),
                ];
              },
              proxy: !0,
            },
            {
              key: "content",
              fn: function () {
                return [
                  i(
                    "div",
                    {
                      staticClass:
                        "tw-w-full tw-h-full tw-flex tw-flex-col tw-font-semibold tw-text-white  tw-leading-7 tw-tracking-wide tw-ml-1",
                    },
                    [
                      i("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: t.input_text,
                            expression: "input_text",
                          },
                        ],
                        ref: "textarea_ele",
                        staticClass: " tw-outline-none change-srollbar",
                        staticStyle: { height: "530px", resize: "none" },
                        attrs: { rows: "102400", autofocus: "" },
                        domProps: { value: t.input_text },
                        on: {
                          keydown: t.messageSendlisten,
                          contextmenu: function (e) {
                            return e.preventDefault(), t.mr_clicked();
                          },
                          input: function (e) {
                            e.target.composing ||
                              (t.input_text = e.target.value);
                          },
                        },
                      }),
                    ]
                  ),
                ];
              },
              proxy: !0,
            },
          ]),
        });
      },
      ms = [],
      ps = {
        name: "WindowTerminal",
        components: { Window: Oe },
        data: function () {
          return {
            input_text: "",
            protection_length: 17,
            path_stack: [],
            history_cmd_stack: [],
            history_cmd_index: -1,
            HISTSIZE: 99,
            terminal_bonus: !1,
          };
        },
        props: {
          uuid: String,
          startpos_x: { default: 60 },
          startpos_y: { default: 60 },
          zindex: { type: Number, default: 999 },
          minimized: { type: Boolean, default: !1 },
        },
        created: function () {},
        mounted: function () {
          this.input_text += this.header;
        },
        watch: {},
        computed: {
          filemap: function () {
            return this.$store.state.filemap;
          },
          header: function () {
            var t,
              e = "guest@dawidolko-PC: ~/",
              s = Object(M["a"])(this.path_stack);
            try {
              for (s.s(); !(t = s.n()).done; ) {
                var i = t.value;
                e += i + "/";
              }
            } catch (n) {
              s.e(n);
            } finally {
              s.f();
            }
            return (e += " "), e;
          },
        },
        methods: {
          height_changed: function (t) {
            var e = this;
            (this.$refs.textarea_ele.style.height = t - 70 + "px"),
              window.setTimeout(function () {
                var t = e.$refs.textarea_ele;
                t.scrollTop = t.scrollHeight;
              }, 150);
          },
          messageSendlisten: function (t) {
            var e = this;
            if (13 === t.keyCode)
              t.preventDefault(),
                this.new_cmd_commit(),
                (this.history_cmd_index = -1);
            else if (8 === t.keyCode) t.preventDefault(), this.trim_end();
            else if (38 === t.keyCode || 40 === t.keyCode)
              t.preventDefault(), this.cmd_backtracking(t);
            else {
              var s = this.$refs.textarea_ele.selectionStart;
              while (s < this.protection_length)
                (this.$refs.textarea_ele.selectionStart += 1), (s += 1);
            }
            window.setTimeout(function () {
              var t = e.$refs.textarea_ele;
              t.scrollTop = t.scrollHeight;
            }, 150);
          },
          trim_end: function () {
            this.input_text.length > this.protection_length &&
              (this.input_text = this.input_text.substring(
                0,
                this.input_text.length - 1
              ));
          },
          new_cmd_commit: function () {
            var t = this,
              e = this.input_text.substring(
                this.protection_length,
                this.input_text.length
              );
            if (
              ((this.protection_length += e.length),
              (e = e.replace(/^\s\s*/, "").replace(/\s\s*$/, "")),
              e.length > 0 &&
                e != this.history_cmd_stack[-1] &&
                (this.history_cmd_stack.length >= this.HISTSIZE &&
                  this.history_cmd_stack.pop(),
                this.history_cmd_stack.unshift(e)),
              !this.terminal_bonus)
            ) {
              if (8 === e.length && "rm -rf" === e.substr(0, 6))
                return (
                  (document.body.style.cursor = "progress"),
                  this.push_output(""),
                  (this.terminal_bonus = !0),
                  void window.setTimeout(function () {
                    (document.body.style.cursor = "default"),
                      t.$router.push({ name: "Down" });
                  }, 2800)
                );
              if (0 === e.length)
                return this.push_output(""), void this.cmd_reset();
              var s,
                i = "",
                n = "",
                o = !1,
                a = Object(M["a"])(e);
              try {
                for (a.s(); !(s = a.n()).done; ) {
                  var r = s.value;
                  " " != r
                    ? o
                      ? (n += r)
                      : (i += r)
                    : o
                    ? (n += r)
                    : (o = !0);
                }
              } catch (Q) {
                a.e(Q);
              } finally {
                a.f();
              }
              if ("ls" === i) {
                var l,
                  c = this.filemap,
                  d = Object(M["a"])(this.path_stack);
                try {
                  for (d.s(); !(l = d.n()).done; ) {
                    var u,
                      w = l.value,
                      h = Object(M["a"])(c);
                    try {
                      for (h.s(); !(u = h.n()).done; ) {
                        var f = u.value;
                        if (f.name === w) {
                          c = f.children;
                          break;
                        }
                      }
                    } catch (Q) {
                      h.e(Q);
                    } finally {
                      h.f();
                    }
                  }
                } catch (Q) {
                  d.e(Q);
                } finally {
                  d.f();
                }
                var m,
                  p = [],
                  _ = Object(M["a"])(c);
                try {
                  for (_.s(); !(m = _.n()).done; ) {
                    var g = m.value;
                    p.push(g.name);
                  }
                } catch (Q) {
                  _.e(Q);
                } finally {
                  _.f();
                }
                p.sort(),
                  (p = p.map(function (t) {
                    return t.indexOf(" ") < 0 ? t : '"' + t + '"';
                  })),
                  0 == p.length
                    ? this.push_output("")
                    : (this.push_output(""), this.push_output(p.join("    "))),
                  this.cmd_reset();
              } else if ("cd" === i) {
                if (null != /".+?"/.exec(n)) {
                  var v = /".+?"/.exec(n)[0];
                  n = v.substr(1, v.length - 2);
                } else n.indexOf(" ") > 0 && (n = n.substr(0, n.indexOf(" ")));
                var y,
                  x = this.filemap,
                  b = Object(M["a"])(this.path_stack);
                try {
                  for (b.s(); !(y = b.n()).done; ) {
                    var k,
                      A = y.value,
                      C = Object(M["a"])(x);
                    try {
                      for (C.s(); !(k = C.n()).done; ) {
                        var z = k.value;
                        if (z.name === A) {
                          x = z.children;
                          break;
                        }
                      }
                    } catch (Q) {
                      C.e(Q);
                    } finally {
                      C.f();
                    }
                  }
                } catch (Q) {
                  b.e(Q);
                } finally {
                  b.f();
                }
                if ("." === n)
                  return this.push_output(""), void this.cmd_reset();
                if (".." === n)
                  this.push_output(""),
                    this.path_stack.length >= 1
                      ? this.path_stack.pop()
                      : (this.push_output(""),
                        this.push_output("There's no super directory.")),
                    this.cmd_reset();
                else if ("" === n)
                  (this.path_stack = []),
                    this.push_output(""),
                    this.cmd_reset();
                else {
                  var S,
                    O = this.filemap,
                    j = Object(M["a"])(this.path_stack);
                  try {
                    for (j.s(); !(S = j.n()).done; ) {
                      var I,
                        K = S.value,
                        W = Object(M["a"])(O);
                      try {
                        for (W.s(); !(I = W.n()).done; ) {
                          var D = I.value;
                          if (D.name === K) {
                            O = D.children;
                            break;
                          }
                        }
                      } catch (Q) {
                        W.e(Q);
                      } finally {
                        W.f();
                      }
                    }
                  } catch (Q) {
                    j.e(Q);
                  } finally {
                    j.f();
                  }
                  var F,
                    B = Object(M["a"])(O);
                  try {
                    for (B.s(); !(F = B.n()).done; ) {
                      var E = F.value;
                      if (E.name === n)
                        return void 0 === E.children
                          ? (this.push_output(""),
                            this.push_output(
                              "CD's target must be a directory."
                            ),
                            void this.cmd_reset())
                          : (this.path_stack.push(E.name),
                            this.push_output(""),
                            void this.cmd_reset());
                    }
                  } catch (Q) {
                    B.e(Q);
                  } finally {
                    B.f();
                  }
                  this.push_output(""),
                    this.push_output(
                      'No such file or directory named "' + n + '".'
                    ),
                    this.cmd_reset();
                }
              } else if ("cat" === i) {
                if (null != /".+?"/.exec(n)) {
                  var N = /".+?"/.exec(n)[0];
                  n = N.substr(1, N.length - 2);
                } else n.indexOf(" ") > 0 && (n = n.substr(0, n.indexOf(" ")));
                var T,
                  L = this.filemap,
                  R = Object(M["a"])(this.path_stack);
                try {
                  for (R.s(); !(T = R.n()).done; ) {
                    var H,
                      P = T.value,
                      V = Object(M["a"])(L);
                    try {
                      for (V.s(); !(H = V.n()).done; ) {
                        var Y = H.value;
                        if (Y.name === P) {
                          L = Y.children;
                          break;
                        }
                      }
                    } catch (Q) {
                      V.e(Q);
                    } finally {
                      V.f();
                    }
                  }
                } catch (Q) {
                  R.e(Q);
                } finally {
                  R.f();
                }
                var G,
                  X = Object(M["a"])(L);
                try {
                  for (X.s(); !(G = X.n()).done; ) {
                    var U = G.value;
                    if (U.name === n)
                      return void 0 === U.children
                        ? (this.$store.commit("open_new_window", {
                            type: "text",
                            filesrc: U.path,
                            filename: U.name,
                            size: U.size,
                          }),
                          this.push_output(""),
                          void this.cmd_reset())
                        : (console.log(U),
                          this.push_output(""),
                          this.push_output(""),
                          this.push_output(
                            "Can not use cat command for checking out directories."
                          ),
                          void this.cmd_reset());
                  }
                } catch (Q) {
                  X.e(Q);
                } finally {
                  X.f();
                }
                this.push_output(""),
                  this.push_output(
                    'No such file or directory named "' + n + '".'
                  ),
                  this.cmd_reset();
              } else
                "halt" === i
                  ? ((document.body.style.cursor = "progress"),
                    this.push_output(""),
                    window.setTimeout(function () {
                      (document.body.style.cursor = "default"),
                        t.$router.push({ name: "Down" });
                    }, 2e3))
                  : "clear" === i
                  ? ((this.input_text = this.header),
                    (this.protection_length = this.header.length))
                  : (this.push_output(""),
                    this.push_output(""),
                    this.push_output(
                      "Command " + i + " not found or not yet implemented."
                    ),
                    this.push_output(
                      "Current available commands: ['ls', 'cd', 'cat', 'clear' ,'halt']."
                    ),
                    this.cmd_reset());
            }
          },
          cmd_backtracking: function (t) {
            if (!this.terminal_bonus) {
              var e = this.history_cmd_stack.length;
              if (0 !== e) {
                var s =
                  38 === t.keyCode
                    ? this.history_cmd_index + 1
                    : this.history_cmd_index - 1;
                s >= e && (s = e - 1), s < 0 && (s = 0);
                var i = this.history_cmd_stack[s];
                (this.input_text = this.input_text.substr(
                  0,
                  this.protection_length
                )),
                  (this.input_text += i),
                  (this.history_cmd_index = s);
              }
            }
          },
          push_output: function (t) {
            (this.input_text += t + "\n"),
              (this.protection_length += t.length + 1);
          },
          cmd_reset: function () {
            (this.input_text += this.header),
              (this.protection_length += this.header.length);
          },
          mr_clicked: function () {
            document.execCommand("copy");
            this.input_text.substring(
              this.$refs.textarea_ele.selectionStart,
              this.$refs.textarea_ele.selectionEnd
            );
            this.$refs.textarea_ele.selectionStart = this.input_text.length;
          },
        },
      },
      _s = ps,
      gs = (s("c2d5"), Object(d["a"])(_s, fs, ms, !1, null, "862901d2", null)),
      vs = gs.exports,
      ys = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("Window", {
          attrs: {
            startpos_x: t.startpos_x,
            startpos_y: t.startpos_y,
            uuid: t.uuid,
            zindex: t.zindex,
            default_width: t.default_width,
            minimized: t.minimized,
          },
          on: {
            resize_start: function (e) {
              t.show_blocker = !0;
            },
            resize_end: function (e) {
              t.show_blocker = !1;
            },
          },
          scopedSlots: t._u([
            {
              key: "header",
              fn: function () {
                return [
                  i(
                    "div",
                    {
                      staticClass:
                        " tw-ml-4 tw-font-bold tw-tracking-wider tw-flex tw-items-center tw-select-none",
                      staticStyle: { "pointer-events": "none" },
                    },
                    [
                      i("img", {
                        staticClass: " tw-w-7 tw-h-7",
                        staticStyle: { "pointer-events": "auto" },
                        attrs: { src: s("ec08"), alt: "" },
                      }),
                      i(
                        "div",
                        {
                          staticClass:
                            " tw-ml-4 tw-font-bold tw-tracking-wider ",
                          staticStyle: { "pointer-events": "none" },
                        },
                        [t._v(" Google Chrome ")]
                      ),
                    ]
                  ),
                ];
              },
              proxy: !0,
            },
            {
              key: "content",
              fn: function () {
                return [
                  i(
                    "div",
                    {
                      staticClass:
                        " tw-w-full  tw-h-full tw-rounded-b-2xl tw-overflow-hidden tw-flex tw-flex-col tw-items-center",
                    },
                    [
                      i(
                        "div",
                        {
                          staticClass:
                            "tw-h-11 tw-border-t tw-border-gray-400 tw-flex tw-items-center",
                          staticStyle: {
                            "background-color": "#fafafa",
                            width: "99%",
                          },
                        },
                        [
                          i("WindowBrowserButton", {
                            staticClass: "tw-ml-3",
                            attrs: {
                              disabled:
                                t.href_stack_pointer == t.href_stack.length - 1,
                              icon: "chevron-left",
                            },
                            on: { button_clicked: t.prev_clicked },
                          }),
                          i("WindowBrowserButton", {
                            staticClass: "tw-ml-3",
                            attrs: {
                              disabled: 0 === t.href_stack_pointer,
                              icon: "chevron-right",
                            },
                            on: { button_clicked: t.next_clicked },
                          }),
                          i("WindowBrowserButton", {
                            staticClass: "tw-ml-3",
                            attrs: { disabled: !1, icon: "refresh" },
                            on: { button_clicked: t.refresh_clicked },
                          }),
                          i(
                            "div",
                            {
                              ref: "llock",
                              staticClass:
                                "tw-absolute tw-w-8 tw-h-8  tw-flex tw-items-center tw-justify-center hover:tw-bg-mygray-b3 tw-rounded-lg",
                              staticStyle: { left: "calc(158px + 0.72%)" },
                              on: {
                                mouseleave: t.unshow_lock,
                                mouseenter: t.show_lock,
                              },
                            },
                            [
                              i("v-icon", { attrs: { small: "" } }, [
                                t._v(
                                  "mdi-" +
                                    t._s(
                                      t.no_http
                                        ? "alert-circle-outline"
                                        : "lock"
                                    )
                                ),
                              ]),
                              t.show_lock_tip
                                ? i(
                                    "div",
                                    {
                                      staticClass:
                                        "tw-absolute tw-py-1 tw-px-2 tw-border",
                                      staticStyle: {
                                        "background-color": "#545868",
                                        color: "#b2bbc6",
                                        "white-space": "nowrap",
                                      },
                                      style: {
                                        top: t.tipoffsetY + "px",
                                        left: t.tipoffsetX + "px",
                                      },
                                    },
                                    [t._v("Show Website Details")]
                                  )
                                : t._e(),
                            ],
                            1
                          ),
                          i("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: t.input_src,
                                expression: "input_src",
                              },
                            ],
                            staticClass:
                              "tw-flex-grow tw-ml-3 tw-h-9 focus:tw-bg-white tw-tracking-tight tw-px-10",
                            staticStyle: {
                              "outline-color": "#4285f4",
                              "text-color": "#939387",
                            },
                            domProps: { value: t.input_src },
                            on: {
                              keyup: function (e) {
                                return !e.type.indexOf("key") &&
                                  t._k(e.keyCode, "enter", 13, e.key, "Enter")
                                  ? null
                                  : t.inputSubmit(e);
                              },
                              input: function (e) {
                                e.target.composing ||
                                  (t.input_src = e.target.value);
                              },
                            },
                          }),
                          i(
                            "button",
                            {
                              staticClass:
                                "tw-absolute tw-w-9 tw-h-9 tw-flex tw-items-center tw-justify-center tw-outline-none",
                              staticStyle: { right: "calc(68px + 0.70%)" },
                            },
                            [
                              i("v-icon", { attrs: { small: "" } }, [
                                t._v("mdi-star-outline"),
                              ]),
                            ],
                            1
                          ),
                          i("WindowBrowserButton", {
                            staticClass: "tw-mx-4",
                            attrs: {
                              disabled: !1,
                              icon: "currency-eth",
                              mode: 1,
                            },
                          }),
                        ],
                        1
                      ),
                      i("div", {
                        staticClass: " tw-h-0 tw-border-b tw-border-gray-300",
                        staticStyle: { width: "99%" },
                      }),
                      i("iframe", {
                        ref: "iframe_main",
                        staticClass: "tw-w-full tw-h-full",
                        attrs: {
                          src: t.real_src,
                          frameborder: "0",
                          onload: "mouse_style_none",
                        },
                      }),
                      t.show_blocker
                        ? i(
                            "div",
                            {
                              staticClass:
                                "tw-w-full tw-h-full tw-absolute background-color",
                              staticStyle: { top: "0" },
                            },
                            [
                              i("span", { staticClass: "tw-hidden" }, [
                                t._v(
                                  " this div is to prevent iframe take control over mouse event while dragging window "
                                ),
                              ]),
                            ]
                          )
                        : t._e(),
                    ]
                  ),
                ];
              },
              proxy: !0,
            },
          ]),
        });
      },
      xs = [],
      bs = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", { staticClass: " tw-w-9 tw-h-9" }, [
          0 === t.mode
            ? s(
                "button",
                {
                  staticClass:
                    " tw-bg-mygray-b3 tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center tw-rounded-lg tw-border tw-border-gray-300 tw-outline-none",
                  class: { "hover:tw-bg-mygray-b1": !t.disabled },
                  on: { click: t.button_clicked },
                },
                [
                  s(
                    "v-icon",
                    {
                      class: {
                        "tw-text-mygray-b9": !t.disabled,
                        "tw-text-mygray-b10": t.disabled,
                      },
                    },
                    [t._v("mdi-" + t._s(t.icon))]
                  ),
                ],
                1
              )
            : t._e(),
          1 === t.mode
            ? s(
                "div",
                {
                  staticClass:
                    "hover:tw-bg-mygray-b3 tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center tw-rounded-lg",
                },
                [
                  s(
                    "v-icon",
                    { staticStyle: { color: "#5f6368" }, attrs: { small: "" } },
                    [t._v("mdi-" + t._s(t.icon))]
                  ),
                ],
                1
              )
            : t._e(),
        ]);
      },
      ks = [],
      As = {
        name: "WindowBrowserButton",
        components: {},
        data: function () {
          return {};
        },
        props: {
          mode: { type: Number, default: 0 },
          disabled: { type: Boolean, default: !1 },
          icon: { type: String, default: "" },
        },
        created: function () {},
        mounted: function () {},
        watch: {},
        computed: {},
        methods: {
          button_clicked: function () {
            this.disabled || this.$emit("button_clicked");
          },
        },
      },
      Cs = As,
      zs = Object(d["a"])(Cs, bs, ks, !1, null, "25730f67", null),
      Ss = zs.exports;
    p()(zs, { VIcon: et["a"] });
    var Os = {
        name: "WindowBrowser",
        components: { Window: Oe, WindowBrowserButton: Ss },
        data: function () {
          return {
            show_blocker: !1,
            tipoffsetY: 0,
            tipoffsetX: 0,
            show_lock_tip: !1,
            input_src: "https://www.google.com/webhp?igu=1",
            real_src: "https://www.google.com/webhp?igu=1",
            no_http: !1,
            href_stack: ["https://www.google.com/webhp?igu=1"],
            href_stack_pointer: 0,
          };
        },
        props: {
          uuid: String,
          startpos_x: { default: 60 },
          startpos_y: { default: 60 },
          zindex: { type: Number, default: 999 },
          minimized: { type: Boolean, default: !1 },
          default_width: { type: Number, default: 1e3 },
        },
        created: function () {},
        mounted: function () {},
        watch: {},
        computed: {},
        methods: {
          show_lock: function () {
            var t = t || window.event || t.which,
              e = t.clientX,
              s = t.clientY,
              i = this.getTop(this.$refs.llock),
              n = this.getLeft(this.$refs.llock),
              o = e - n,
              a = s - i;
            (this.tipoffsetX = o),
              (this.tipoffsetY = a),
              (this.show_lock_tip = !0);
          },
          unshow_lock: function () {
            this.show_lock_tip = !1;
          },
          getTop: function (t) {
            var e = t.offsetTop;
            return (
              null != t.offsetParent && (e += this.getTop(t.offsetParent)), e
            );
          },
          getLeft: function (t) {
            var e = t.offsetLeft;
            return (
              null != t.offsetParent && (e += this.getLeft(t.offsetParent)), e
            );
          },
          inputSubmit: function () {
            var t = this.input_src.substr(0, 7),
              e = this.input_src.substr(0, 8),
              s = !1;
            "http://" == t
              ? ((t = !0), (this.no_http = !0))
              : "https://" == e
              ? (e = !0)
              : (s = !0);
            var i = /^((https|http|ftp|rtsp|mms)?:\/\/)?[w.]*google\.com(\/)*$/;
            i.test(this.input_src) &&
              ((this.input_src = "https://www.google.com/webhp?igu=1"),
              (s = !1)),
              s
                ? ((this.real_src = "https://" + this.input_src),
                  (this.input_src = this.real_src))
                : (this.real_src = this.input_src),
              this.href_stack.push(this.real_src);
          },
          prev_clicked: function () {
            (this.href_stack_pointer = Math.min(
              this.href_stack_pointer + 1,
              this.href_stack.length - 1
            )),
              (this.real_src =
                this.href_stack[
                  this.href_stack.length - 1 - this.href_stack_pointer
                ]),
              (this.input_src = this.real_src),
              this.mouse_style();
          },
          next_clicked: function () {
            (this.href_stack_pointer = Math.max(
              this.href_stack_pointer - 1,
              0
            )),
              (this.real_src =
                this.href_stack[
                  this.href_stack.length - 1 - this.href_stack_pointer
                ]),
              (this.input_src = this.real_src),
              this.mouse_style();
          },
          mouse_style: function () {
            (document.body.style.cursor = "progress"),
              window.setTimeout(function () {
                document.body.style.cursor = "default";
              }, 500);
          },
          mouse_style_none: function () {
            document.body.style.cursor = "default";
          },
          refresh_clicked: function () {
            this.$refs.iframe_main.contentWindow.location.reload(!0);
          },
        },
      },
      js = Os,
      Is = (s("d1aa"), Object(d["a"])(js, ys, xs, !1, null, "2966b1c4", null)),
      Ms = Is.exports;
    p()(Is, { VIcon: et["a"] });
    var Ks = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("Window", {
          attrs: {
            uuid: t.uuid,
            startpos_x: t.startpos_x,
            startpos_y: t.startpos_y,
            zindex: t.zindex,
            minimized: t.minimized,
          },
          scopedSlots: t._u([
            {
              key: "header",
              fn: function () {
                return [
                  i(
                    "div",
                    {
                      staticClass: "tw-flex tw-items-center tw-select-none",
                      staticStyle: { "pointer-events": "none" },
                    },
                    [
                      i("img", {
                        staticClass: " tw-w-7 tw-h-7 tw-ml-4",
                        staticStyle: { "pointer-events": "auto" },
                        attrs: { src: s("6a88"), alt: "" },
                      }),
                      i(
                        "div",
                        {
                          staticClass:
                            " tw-ml-4 tw-font-bold tw-tracking-wider",
                          staticStyle: { "pointer-events": "auto" },
                        },
                        [t._v(" About dawidolko ")]
                      ),
                    ]
                  ),
                ];
              },
              proxy: !0,
            },
            {
              key: "content",
              fn: function () {
                return [
                  i(
                    "div",
                    {
                      staticClass:
                        " tw-w-full  tw-h-full tw-rounded-b-2xl tw-overflow-hidden tw-flex\n     tw-select-none",
                      on: {
                        contextmenu: function (e) {
                          return e.preventDefault(), t.mr_clicked(e);
                        },
                      },
                    },
                    [
                      i(
                        "div",
                        {
                          staticClass:
                            " tw-w-52 tw-bg-white tw-h-full tw-flex tw-flex-col tw-px-3 tw-py-2 tw-flex-none",
                        },
                        [
                          i("WindowSettingIcon", {
                            attrs: {
                              tag: "Profile",
                              img: "profile",
                              selected_tag: t.selected_tag,
                            },
                            nativeOn: {
                              click: function (e) {
                                (t.selected_tag = "Profile"),
                                  (t.selected_tag_2 = "About Me");
                              },
                            },
                          }),
                          i("WindowSettingIcon", {
                            attrs: {
                              tag: "Skills",
                              img: "skills",
                              selected_tag: t.selected_tag,
                            },
                            nativeOn: {
                              click: function (e) {
                                (t.selected_tag = "Skills"),
                                  (t.selected_tag_2 = "Badges");
                              },
                            },
                          }),
                          i("WindowSettingIcon", {
                            attrs: {
                              tag: "Resume",
                              img: "paint",
                              selected_tag: t.selected_tag,
                            },
                            nativeOn: {
                              click: function (e) {
                                t.selected_tag = "Resume";
                              },
                            },
                          }),
                        ],
                        1
                      ),
                      i(
                        "div",
                        { staticClass: " tw-flex-grow tw-h-full  tw-p-2" },
                        [
                          i(
                            "div",
                            { staticClass: "tw-w-full tw-h-full  tw-flex" },
                            [
                              i(
                                "div",
                                {
                                  staticClass:
                                    "tw-w-48 tw-flex-none tw-rounded-xl tw-bg-white tw-p-2",
                                },
                                [
                                  "Profile" === t.selected_tag
                                    ? i(
                                        "div",
                                        { staticClass: "tw-w-full tw-h-full" },
                                        [
                                          i("WindowSettingIcon", {
                                            attrs: {
                                              tag: "About Me",
                                              mdi: "beaker-question",
                                              selected_tag: t.selected_tag_2,
                                            },
                                            nativeOn: {
                                              click: function (e) {
                                                t.selected_tag_2 = "About Me";
                                              },
                                            },
                                          }),
                                          i("WindowSettingIcon", {
                                            attrs: {
                                              tag: "Github Stats",
                                              mdi: "card-account-details-star",
                                              selected_tag: t.selected_tag_2,
                                            },
                                            nativeOn: {
                                              click: function (e) {
                                                t.selected_tag_2 =
                                                  "Github Stats";
                                              },
                                            },
                                          }),
                                          i("WindowSettingIcon", {
                                            attrs: {
                                              tag: "CodeWars",
                                              mdi: "pistol",
                                              selected_tag: t.selected_tag_2,
                                            },
                                            nativeOn: {
                                              click: function (e) {
                                                t.selected_tag_2 = "CodeWars";
                                              },
                                            },
                                          }),
                                        ],
                                        1
                                      )
                                    : t._e(),
                                  "Skills" === t.selected_tag
                                    ? i(
                                        "div",
                                        { staticClass: "tw-w-full tw-h-full" },
                                        [
                                          i("WindowSettingIcon", {
                                            attrs: {
                                              tag: "Badges",
                                              mdi: "shield-half-full",
                                              selected_tag: t.selected_tag_2,
                                            },
                                            nativeOn: {
                                              click: function (e) {
                                                t.selected_tag_2 = "Badges";
                                              },
                                            },
                                          }),
                                          i("WindowSettingIcon", {
                                            attrs: {
                                              tag: "And Some Else",
                                              mdi: "card-account-details-star",
                                              selected_tag: t.selected_tag_2,
                                            },
                                            nativeOn: {
                                              click: function (e) {
                                                t.selected_tag_2 =
                                                  "And Some Else";
                                              },
                                            },
                                          }),
                                        ],
                                        1
                                      )
                                    : t._e(),
                                ]
                              ),
                              i("div", { staticClass: "vl" }),
                              i(
                                "div",
                                {
                                  staticClass:
                                    "tw-flex-grow tw-bg-white tw-h-full",
                                },
                                [
                                  "Profile" === t.selected_tag
                                    ? i(
                                        "div",
                                        { staticClass: " tw-w-full tw-h-full" },
                                        [
                                          "About Me" === t.selected_tag_2
                                            ? i(
                                                "div",
                                                {
                                                  ref: "overall_page",
                                                  staticClass:
                                                    "tw-w-full tw-h-full tw-items-center tw-flex tw-flex-col",
                                                  staticStyle: {
                                                    "text-align": "center",
                                                  },
                                                },
                                                [
                                                  i(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        " tw-w-20 tw-h-20 tw-rounded-full tw-overflow-hidden tw-mt-16",
                                                    },
                                                    [
                                                      i("img", {
                                                        staticClass:
                                                          "tw-bg-red-500",
                                                        attrs: {
                                                          src: s("53ff"),
                                                          alt: "",
                                                        },
                                                      }),
                                                    ]
                                                  ),
                                                  i(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "tw-mt-3 tw-text-gray-400",
                                                    },
                                                    [t._v("dawidolko")]
                                                  ),
                                                  i(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "tw-text-xl tw-mt-2 tw-tracking-wide",
                                                    },
                                                    [
                                                      t._v(
                                                        " Hi👋, this is dawidolko, your solution provider."
                                                      ),
                                                    ]
                                                  ),
                                                  i(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "tw-text-lg tw-mt-2 tw-tracking-wide",
                                                    },
                                                    [
                                                      t._v(
                                                        " As majored in 📊 Big Data & High Performance Computing, I am also interested in, and got an exellent ability in web developing. "
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              )
                                            : t._e(),
                                          "Github Stats" === t.selected_tag_2
                                            ? i(
                                                "div",
                                                {
                                                  ref: "github_page",
                                                  staticClass:
                                                    "tw-w-full tw-h-full tw-items-center tw-flex tw-flex-col tw-justify-center",
                                                  staticStyle: {
                                                    "text-align": "center",
                                                  },
                                                },
                                                [
                                                  i("img", {
                                                    staticClass:
                                                      "tw-w-140 tw-h-40",
                                                    attrs: {
                                                      src: "https://github-readme-stats.vercel.app/api?username=dawidolko&show_icons=true&line_height=24",
                                                      alt: "",
                                                    },
                                                  }),
                                                  i("img", {
                                                    staticClass:
                                                      "tw-mt-6  tw-w-120 tw-h-72",
                                                    attrs: {
                                                      src: "https://github-readme-stats.vercel.app/api/top-langs?username=dawidolko",
                                                      alt: "",
                                                    },
                                                  }),
                                                ]
                                              )
                                            : t._e(),
                                          "CodeWars" === t.selected_tag_2
                                            ? i(
                                                "div",
                                                {
                                                  ref: "github_page",
                                                  staticClass:
                                                    "tw-w-full tw-h-full tw-items-center tw-flex tw-flex-col",
                                                  staticStyle: {
                                                    "text-align": "center",
                                                  },
                                                },
                                                [
                                                  i(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        " tw-w-20 tw-h-20 tw-rounded-full tw-bg-red-50 tw-overflow-hidden tw-mt-16",
                                                    },
                                                    [
                                                      i("img", {
                                                        staticClass:
                                                          "tw-bg-red-500",
                                                        attrs: {
                                                          src: s("53ff"),
                                                          alt: "",
                                                        },
                                                      }),
                                                    ]
                                                  ),
                                                  i("img", {
                                                    staticClass: "tw-mt-10",
                                                    attrs: {
                                                      src: "https://www.codewars.com/users/dawidolko/badges/large",
                                                      alt: "",
                                                    },
                                                  }),
                                                ]
                                              )
                                            : t._e(),
                                        ]
                                      )
                                    : t._e(),
                                  "Skills" === t.selected_tag
                                    ? i(
                                        "div",
                                        { staticClass: "tw-w-full tw-h-full" },
                                        [
                                          "Badges" === t.selected_tag_2
                                            ? i(
                                                "div",
                                                {
                                                  ref: "overall_page",
                                                  staticClass:
                                                    "tw-w-full tw-h-full tw-items-center tw-flex tw-flex-col tw-justify-center",
                                                  staticStyle: {
                                                    "text-align": "center",
                                                  },
                                                },
                                                [
                                                  i(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "tw-text-xl tw-mt-2 tw-tracking-wide",
                                                    },
                                                    [t._v(" Frameworks ")]
                                                  ),
                                                  i(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "tw-flex tw-flex-wrap tw-px-4 tw-py-2 tw-items-center",
                                                    },
                                                    [
                                                      i("img", {
                                                        staticClass:
                                                          "tw-ml-3 tw-mt-2",
                                                        attrs: {
                                                          src: "https://img.shields.io/badge/fastapi%20-%2313988a.svg?&style=flat&logo=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgaWQ9InN2ZzgiCiAgIHZlcnNpb249IjEuMSIKICAgdmlld0JveD0iMCAwIDYuMzQ5OTk5OSA2LjM0OTk5OTkiCiAgIGhlaWdodD0iNi4zNDk5OTk5bW0iCiAgIHdpZHRoPSI2LjM0OTk5OTltbSI+CiAgPGRlZnMKICAgICBpZD0iZGVmczIiIC8+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNSI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODcuNTM5Mjg2LC04NC40MjYxOTEpIgogICAgIGlkPSJsYXllcjEiPgogICAgPHBhdGgKICAgICAgIGlkPSJwYXRoODE1IgogICAgICAgZD0ibSA4Ny41MzkyODYsODQuNDI2MTkxIGggNi4zNSB2IDYuMzUgaCAtNi4zNSB6IgogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2Utd2lkdGg6MC4yNjQ1ODMzMiIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0ic3Ryb2tlLXdpZHRoOjAuMjY0NTgzMzI7ZmlsbDojZmZmZmZmIgogICAgICAgaWQ9InBhdGg4MTciCiAgICAgICBkPSJtIDkwLjcxNDI4Niw4NC45NjA2NDkgYyAtMS40NTc4NTQsMCAtMi42NDA1NDIsMS4xODI2ODggLTIuNjQwNTQyLDIuNjQwNTQyIDAsMS40NTc4NTQgMS4xODI2ODgsMi42NDA1NDIgMi42NDA1NDIsMi42NDA1NDIgMS40NTc4NTQsMCAyLjY0MDU0MiwtMS4xODI2ODggMi42NDA1NDIsLTIuNjQwNTQyIDAsLTEuNDU3ODU0IC0xLjE4MjY4OCwtMi42NDA1NDIgLTIuNjQwNTQyLC0yLjY0MDU0MiB6IG0gLTAuMTM3NTgzLDQuNzU3MjA5IHYgLTEuNjU2MjkyIGggLTAuOTIwNzUgbCAxLjMyMjkxNiwtMi41NzcwNDIgdiAxLjY1NjI5MiBoIDAuODg2MzU0IHoiIC8+CiAgPC9nPgo8L3N2Zz4K",
                                                          alt: "",
                                                        },
                                                      }),
                                                      i("img", {
                                                        staticClass:
                                                          "tw-ml-3 tw-mt-2",
                                                        attrs: {
                                                          src: "https://img.shields.io/badge/vuejs%20-%2335495e.svg?&style=flat&logo=vue.js&logoColor=%234FC08D",
                                                          alt: "",
                                                        },
                                                      }),
                                                      i("img", {
                                                        staticClass:
                                                          "tw-ml-3 tw-mt-2",
                                                        attrs: {
                                                          src: "https://img.shields.io/badge/spring%20-%236DB33F.svg?&style=flat&logo=spring&logoColor=white",
                                                          alt: "",
                                                        },
                                                      }),
                                                      i("img", {
                                                        staticClass:
                                                          "tw-ml-3 tw-mt-2",
                                                        attrs: {
                                                          src: "https://img.shields.io/badge/TensorFlow%20-%23FF6F00.svg?&style=flat&logo=TensorFlow&logoColor=white",
                                                          alt: "",
                                                        },
                                                      }),
                                                      i("img", {
                                                        staticClass:
                                                          "tw-ml-3 tw-mt-2",
                                                        attrs: {
                                                          src: "https://img.shields.io/badge/numpy%20-%23013243.svg?&style=flat&logo=numpy&logoColor=white",
                                                          alt: "",
                                                        },
                                                      }),
                                                    ]
                                                  ),
                                                  i(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "tw-text-xl tw-mt-2 tw-tracking-wide",
                                                    },
                                                    [t._v(" Tools ")]
                                                  ),
                                                  i(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "tw-flex tw-flex-wrap tw-px-4 tw-py-2  tw-items-center",
                                                    },
                                                    [
                                                      i("img", {
                                                        staticClass:
                                                          "tw-ml-3 tw-mt-2 tw-h-5",
                                                        attrs: {
                                                          src: "https://img.shields.io/badge/-Redis-black?style=flat-square&logo=Redis",
                                                          alt: "",
                                                        },
                                                      }),
                                                      i("img", {
                                                        staticClass:
                                                          "tw-ml-3 tw-mt-2 tw-h-5",
                                                        attrs: {
                                                          src: "https://img.shields.io/badge/mysql-%2300f.svg?&style=flat&logo=mysql&logoColor=white",
                                                          alt: "",
                                                        },
                                                      }),
                                                      i("img", {
                                                        staticClass:
                                                          "tw-ml-3 tw-mt-2 tw-h-5",
                                                        attrs: {
                                                          src: "https://img.shields.io/badge/oracle%20-%23F00000.svg?&style=flat&logo=oracle&logoColor=white",
                                                          alt: "",
                                                        },
                                                      }),
                                                      i("img", {
                                                        staticClass:
                                                          "tw-ml-3 tw-mt-2 tw-h-5",
                                                        attrs: {
                                                          src: "https://img.shields.io/badge/-Celery-black?style=flat-square&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB/ElEQVR4Ae2UA4xdQRSGbxo2Zh2niG2W0dq2FdXbuLbdtW3btm3b/nveNLOMM/V8yXf53j2jfxTJH4dEIknqsrtC3iO9RJncZe8V027iFddh/i1v8MbX5pkvXt2LIa87FwJO7S58mPxKQqTJ3faIaTNm13VTr9G7FAYqjs4FfzIglxVP7nE4To6TEGlKjyNiOkyR1uOCnqVQDK3Go2shUFV4W9aAhHbr3vh2ayQINqbFDPFtVqy3AyvR6Jj354XnyFJSQ4msM3YJLtFGcJkOQoSqi295F5DffQejm0noWNgufkPZTVilfqnqD6HluggRaFCpFqmJxqmPGFiN5sXfKPsJrdBbJiHawFJ1RFabsGHvWQ7jDTh3oAGJnbZLbMUKNq7dAqk9zmz+e5ZCeAPOHGgAxaSMhGgTu2yYLbNf0bccwRvw6ODG023vofpDiugIkjEdxqiafIzhtYTdCXBSdhPbZH4ovNpwIqzKABE1hqBrYQZXaLGzKvuDazHUCD/eiHGymLzwoxHNFmeCS7VXg0q0eITERLFcD94FlxFbZ4WBtWiMbCSgc/9GxIlqMDkaVmkQTRESmgb6JnwKryC8ygh142/RvxqJ7qVgvhVXKvuJqDEyDKvSf05/9hKnvhc1wiuwVMMrq/OaV8vMN6/upZB3NBpnld+NRCKRfAftOqATvvOv0AAAAABJRU5ErkJggg==",
                                                          alt: "",
                                                        },
                                                      }),
                                                      i("img", {
                                                        staticClass:
                                                          "tw-ml-3 tw-mt-2 tw-h-5",
                                                        attrs: {
                                                          src: "https://img.shields.io/badge/-ElasticSearch-005571?style=flat&logo=elasticsearch",
                                                          alt: "",
                                                        },
                                                      }),
                                                      i("img", {
                                                        staticClass:
                                                          "tw-ml-3 tw-mt-2 tw-h-5",
                                                        attrs: {
                                                          src: "https://img.shields.io/badge/travisci%20-%232B2F33.svg?&style=flat&logo=travis&logoColor=white",
                                                          alt: "",
                                                        },
                                                      }),
                                                      i("img", {
                                                        staticClass:
                                                          "tw-ml-3 tw-mt-2 tw-h-5",
                                                        attrs: {
                                                          src: "https://img.shields.io/badge/docker%20-%230db7ed.svg?&style=flat&logo=docker&logoColor=white",
                                                          alt: "",
                                                        },
                                                      }),
                                                      i("img", {
                                                        staticClass:
                                                          "tw-ml-3 tw-mt-2 tw-h-5",
                                                        attrs: {
                                                          src: "https://img.shields.io/badge/nginx%20-%23009639.svg?&style=flate&logo=nginx&logoColor=white",
                                                          alt: "",
                                                        },
                                                      }),
                                                      i("img", {
                                                        staticClass:
                                                          "tw-ml-3 tw-mt-2",
                                                        attrs: {
                                                          src: "",
                                                          alt: "",
                                                        },
                                                      }),
                                                      i("img", {
                                                        staticClass:
                                                          "tw-ml-3 tw-mt-2",
                                                        attrs: {
                                                          src: "",
                                                          alt: "",
                                                        },
                                                      }),
                                                    ]
                                                  ),
                                                  i(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "tw-text-xl tw-mt-2 tw-tracking-wide",
                                                    },
                                                    [t._v(" Others ")]
                                                  ),
                                                  i(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "tw-flex tw-flex-wrap tw-px-4 tw-py-2 tw-mb-16  tw-items-center",
                                                    },
                                                    [
                                                      i("img", {
                                                        staticClass:
                                                          "tw-ml-3 tw-mt-2 tw-h-5",
                                                        attrs: {
                                                          src: "https://img.shields.io/badge/-Linux-black?style=flat-square&logo=Linux",
                                                          alt: "",
                                                        },
                                                      }),
                                                      i("img", {
                                                        staticClass:
                                                          "tw-ml-3 tw-mt-2 tw-h-5",
                                                        attrs: {
                                                          src: "https://img.shields.io/badge/-Debian-007CFF?style=flat-square&logo=debian",
                                                          alt: "",
                                                        },
                                                      }),
                                                      i("img", {
                                                        staticClass:
                                                          "tw-ml-3 tw-mt-2 tw-h-5",
                                                        attrs: {
                                                          src: "https://img.shields.io/badge/-Centos-262577?style=flat-square&logo=Centos",
                                                          alt: "",
                                                        },
                                                      }),
                                                      i("img", {
                                                        staticClass:
                                                          "tw-ml-3 tw-mt-2 tw-h-5",
                                                        attrs: {
                                                          src: "https://img.shields.io/badge/-Raspberry%20Pi-C51A4A?style=flat-square&logo=Raspberry-Pi",
                                                          alt: "",
                                                        },
                                                      }),
                                                    ]
                                                  ),
                                                ]
                                              )
                                            : t._e(),
                                          "And Some Else" === t.selected_tag_2
                                            ? i(
                                                "div",
                                                {
                                                  ref: "github_page",
                                                  staticClass:
                                                    "tw-w-full tw-h-full tw-items-center tw-flex tw-flex-col tw-justify-center tw-mb-16",
                                                  staticStyle: {
                                                    "text-align": "center",
                                                  },
                                                },
                                                [
                                                  i("img", {
                                                    attrs: {
                                                      src: s("934b"),
                                                      alt: "",
                                                    },
                                                  }),
                                                  i(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "tw-text-lg tw-mt-2 tw-tracking-wide tw-mb-10",
                                                    },
                                                    [
                                                      t._v(
                                                        " Thanks for watching this demo, hope you enjoy it. "
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              )
                                            : t._e(),
                                        ]
                                      )
                                    : t._e(),
                                  "Resume" === t.selected_tag
                                    ? i(
                                        "div",
                                        { staticClass: "tw-w-full tw-h-full" },
                                        [
                                          i(
                                            "div",
                                            {
                                              ref: "overall_page",
                                              staticClass:
                                                "tw-w-full tw-h-full tw-items-center tw-flex tw-flex-col tw-justify-center",
                                              staticStyle: {
                                                "text-align": "center",
                                              },
                                            },
                                            [
                                              i(
                                                "div",
                                                {
                                                  staticClass:
                                                    "tw-text-4xl tw-mt-2 tw-tracking-wider",
                                                },
                                                [t._v(" Coming Soon ")]
                                              ),
                                            ]
                                          ),
                                        ]
                                      )
                                    : t._e(),
                                ]
                              ),
                            ]
                          ),
                        ]
                      ),
                    ]
                  ),
                ];
              },
              proxy: !0,
            },
          ]),
        });
      },
      Ws = [],
      Ds = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i(
          "div",
          {
            staticClass:
              " tw-h-12  tw-w-full tw-rounded-xl hover:tw-bg-mygray-b3 tw-flex tw-items-center  tw-mt-0.5",
            class: {
              "hover:tw-bg-mygray-b3": t.selected_tag != t.tag,
              "hover:tw-bg-mygray-b11": t.selected_tag === t.tag,
              "tw-bg-mygray-b4": t.selected_tag === t.tag,
              "tw-text-white": t.selected_tag === t.tag,
              "tw-text-mygray-b6": t.selected_tag != t.tag,
            },
          },
          [
            "" === t.mdi
              ? i("img", {
                  staticClass: "tw-ml-4 tw-w-7",
                  attrs: { src: s("7644")("./" + t.img + ".png"), alt: "" },
                })
              : t._e(),
            "" != t.mdi
              ? i(
                  "v-icon",
                  {
                    staticClass: "tw-ml-4",
                    class: {
                      "tw-text-white": t.selected_tag === t.tag,
                      "tw-text-mygray-b6": t.selected_tag != t.tag,
                    },
                  },
                  [t._v("mdi-" + t._s(t.mdi))]
                )
              : t._e(),
            i("div", { staticClass: " tw-font-bold tw-ml-3" }, [
              t._v(t._s(t.tag)),
            ]),
          ],
          1
        );
      },
      Fs = [],
      Bs = {
        name: "WindowSettingsIcon",
        components: {},
        data: function () {
          return {};
        },
        props: {
          tag: { type: String, default: "" },
          selected_tag: { type: String, default: "_" },
          img: { type: String, default: "" },
          mdi: { type: String, default: "" },
        },
        created: function () {},
        mounted: function () {},
        watch: {},
        computed: {},
        methods: {},
      },
      Es = Bs,
      Ns = Object(d["a"])(Es, Ds, Fs, !1, null, "7a545910", null),
      Ts = Ns.exports;
    p()(Ns, { VIcon: et["a"] });
    var Ls = {
        name: "WindowSettings",
        components: { Window: Oe, WindowSettingIcon: Ts },
        data: function () {
          return { selected_tag: "Profile", selected_tag_2: "About Me" };
        },
        props: {
          uuid: String,
          startpos_x: { default: 60 },
          startpos_y: { default: 60 },
          zindex: { type: Number, default: 999 },
          minimized: { type: Boolean, default: !1 },
          default_width: { type: Number, default: 680 },
        },
        created: function () {},
        mounted: function () {},
        watch: {},
        computed: {},
        methods: {
          mr_clicked: function () {
            this.$store.commit("show_context_menu");
          },
        },
      },
      Rs = Ls,
      Hs = (s("43b5"), Object(d["a"])(Rs, Ks, Ws, !1, null, "57dc151e", null)),
      Ps = Hs.exports,
      Vs = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            staticClass:
              "tw-w-11 tw-h-11 tw-absolute tw-flex tw-justify-center tw-items-center cursor-move",
            staticStyle: { bottom: "6px", left: "56px" },
          },
          [
            s("v-icon", { staticClass: "tw-text-gray-100" }, [
              t._v("mdi-arrow-all"),
            ]),
          ],
          1
        );
      },
      Ys = [],
      Gs = {
        name: "KeyBoardMoveIcon",
        components: {},
        data: function () {
          return {};
        },
        created: function () {},
        mounted: function () {},
        watch: {},
        computed: {},
        methods: {},
      },
      Xs = Gs,
      Us = (s("cf86"), Object(d["a"])(Xs, Vs, Ys, !1, null, "026a7bf2", null)),
      Qs = Us.exports;
    p()(Us, { VIcon: et["a"] });
    var Zs = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            staticClass:
              "tw-w-44 tw-h-72  tw-absolute tw-rounded-xl tw-overflow-hidden tw-border tw-border-gray-400 tw-select-none",
            staticStyle: {
              "z-index": "9999",
              "backdrop-filter": "blur(35px)",
              "box-shadow": "0 0 10px rgba(16,16,16,.3)",
            },
            style: {
              left: t.context_menu_x + "px",
              top: t.context_menu_y + "px",
            },
            on: {
              click: function (e) {
                return t.fullclicked(e);
              },
            },
          },
          [
            s(
              "div",
              {
                staticClass:
                  "tw-absolute tw-w-full tw-h-full tw-py-2 tw-flex tw-flex-col",
                staticStyle: { "background-color": "rgba(235,235,235,.7)" },
              },
              [
                s("ContextMenuButton", {
                  attrs: { disabled: "", further_menu: "", text: "New" },
                }),
                s("ContextMenuButton", {
                  attrs: { disabled: "", further_menu: "", text: "View" },
                }),
                s("ContextMenuButton", {
                  attrs: { disabled: "", further_menu: "", text: "Sort by" },
                }),
                s("ContextMenuButton", {
                  attrs: { text: "Reload Deepin" },
                  nativeOn: {
                    click: function (e) {
                      return t.reload_clicked(e);
                    },
                  },
                }),
                s("ContextMenuButton", {
                  attrs: { disabled: "", text: "Paste" },
                }),
                s("ContextMenuButton", {
                  attrs: { text: "Open in Terminal" },
                  nativeOn: {
                    click: function (e) {
                      return t.terminal_clicked(e);
                    },
                  },
                }),
                s("div", {
                  staticClass: " tw-w-full",
                  staticStyle: {
                    height: "1.5px",
                    "background-color": "rgba(188,188,188,1)",
                  },
                }),
                s("ContextMenuButton", {
                  attrs: { disabled: "", text: "Wallpapers" },
                }),
                s("ContextMenuButton", {
                  attrs: { text: "Settings" },
                  nativeOn: {
                    click: function (e) {
                      return t.settings_clicked(e);
                    },
                  },
                }),
                s("ContextMenuButton", {
                  attrs: { text: "⭐ This Project" },
                  nativeOn: {
                    click: function (e) {
                      return t.open_project(e);
                    },
                  },
                }),
              ],
              1
            ),
          ]
        );
      },
      Js = [],
      qs = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            staticClass:
              "tw-pl-6 tw-pr-1.5 tw-flex tw-items-center tw-font-semibold",
            class: {
              "hover:tw-text-white": !t.disabled,
              "hover:tw-bg-mygray-b4": !t.disabled,
              "tw-text-mygray-b15": t.disabled,
              "tw-text-gray-900": !t.disabled,
            },
            staticStyle: { height: "30px" },
          },
          [
            s("div", [t._v(t._s(t.text))]),
            s("div", { staticClass: "tw-flex-grow tw-h-full" }),
            t.further_menu
              ? s(
                  "v-icon",
                  {
                    staticClass: "tw-flex-none",
                    class: {
                      "hover:tw-text-white": !t.disabled,
                      "tw-text-mygray-b15": t.disabled,
                      "tw-text-gray-900": !t.disabled,
                    },
                    attrs: { small: "" },
                  },
                  [t._v("mdi-chevron-right")]
                )
              : t._e(),
          ],
          1
        );
      },
      $s = [],
      ti = {
        name: "ContextMenuButton",
        components: {},
        data: function () {
          return {};
        },
        props: {
          text: { type: String, default: "111" },
          disabled: { type: Boolean, default: !1 },
          further_menu: { type: Boolean, default: !1 },
        },
        created: function () {},
        mounted: function () {},
        watch: {},
        computed: {},
        methods: {},
      },
      ei = ti,
      si = Object(d["a"])(ei, qs, $s, !1, null, "973e6d8c", null),
      ii = si.exports;
    p()(si, { VIcon: et["a"] });
    var ni = {
        name: "ContextMenu",
        components: { ContextMenuButton: ii },
        data: function () {
          return {};
        },
        created: function () {},
        mounted: function () {},
        watch: {},
        computed: {
          has_terminal: function () {
            var t,
              e = Object(M["a"])(this.$store.state.window_list);
            try {
              for (e.s(); !(t = e.n()).done; ) {
                var s = t.value;
                if ("terminal" === s.type) return !0;
              }
            } catch (i) {
              e.e(i);
            } finally {
              e.f();
            }
            return !1;
          },
          has_settings: function () {
            var t,
              e = Object(M["a"])(this.$store.state.window_list);
            try {
              for (e.s(); !(t = e.n()).done; ) {
                var s = t.value;
                if ("settings" === s.type) return !0;
              }
            } catch (i) {
              e.e(i);
            } finally {
              e.f();
            }
            return !1;
          },
          context_menu_x: function () {
            return this.$store.state.context_menu_x;
          },
          context_menu_y: function () {
            return this.$store.state.context_menu_y;
          },
        },
        methods: {
          fullclicked: function (t) {
            t.stopPropagation();
          },
          settings_clicked: function () {
            this.has_settings
              ? this.$store.commit("switch_global_window_show_status", {
                  type: "settings",
                })
              : this.$store.commit("open_new_window", { type: "settings" }),
              this.$store.commit("refresh_window_focus", { type: "settings" }),
              this.$store.commit("hide_context_menu");
          },
          terminal_clicked: function () {
            this.has_terminal
              ? this.$store.commit("switch_global_window_show_status", {
                  type: "terminal",
                })
              : this.$store.commit("open_new_window", { type: "terminal" }),
              this.$store.commit("refresh_window_focus", { type: "terminal" }),
              this.$store.commit("hide_context_menu");
          },
          open_project: function () {
            window.open(
              "https://github.com/dawidolko/Simulaing-Linux-System-GUI",
              "_blank"
            ),
              this.$store.commit("hide_context_menu");
          },
          reload_clicked: function () {
            location.reload();
          },
        },
      },
      oi = ni,
      ai = Object(d["a"])(oi, Zs, Js, !1, null, "7a2cfce2", null),
      ri = ai.exports,
      li = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            staticClass:
              "tw-w-44 tw-h-20  tw-absolute tw-rounded-xl tw-overflow-hidden tw-border tw-border-gray-400 tw-select-none",
            staticStyle: {
              "z-index": "9999",
              "backdrop-filter": "blur(35px)",
              "box-shadow": "0 0 10px rgba(16,16,16,.3)",
            },
            style: {
              left: t.context_menu_x + "px",
              top: t.context_menu_y_r + "px",
            },
            on: {
              click: function (e) {
                return t.fullclicked(e);
              },
            },
          },
          [
            s(
              "div",
              {
                staticClass:
                  "tw-absolute tw-w-full tw-h-full tw-py-2 tw-flex tw-flex-col",
                staticStyle: { "background-color": "rgba(235,235,235,.7)" },
              },
              [
                t.mode
                  ? t._e()
                  : s("ContextMenuButton", {
                      attrs: { text: "Open" },
                      nativeOn: {
                        click: function (e) {
                          return t.open_new_window(e);
                        },
                      },
                    }),
                t.mode
                  ? s("ContextMenuButton", {
                      attrs: { text: "Switch Visibility" },
                      nativeOn: {
                        click: function (e) {
                          return t.switch_visibility(e);
                        },
                      },
                    })
                  : t._e(),
                s("ContextMenuButton", {
                  attrs: { disabled: !t.mode, text: "Close All" },
                  nativeOn: {
                    click: function (e) {
                      return t.close_all(e);
                    },
                  },
                }),
              ],
              1
            ),
          ]
        );
      },
      ci = [],
      di = {
        name: "ContextMenuBottomBar",
        components: { ContextMenuButton: ii },
        data: function () {
          return {
            allow_open: ["terminal", "settings", "vscode", "music", "browser"],
          };
        },
        props: {
          target: { type: String, default: "terminal" },
          mode: { type: Boolean, default: !1 },
        },
        created: function () {},
        mounted: function () {},
        watch: {},
        computed: {
          context_menu_x: function () {
            return this.$store.state.context_menu_x;
          },
          context_menu_y: function () {
            return this.$store.state.context_menu_y;
          },
          context_menu_y_r: function () {
            return this.context_menu_y - 80;
          },
        },
        methods: {
          fullclicked: function (t) {
            t.stopPropagation();
          },
          open_new_window: function () {
            !this.mode &&
              this.allow_open.indexOf(this.target) >= 0 &&
              (this.$store.commit("open_new_window", { type: this.target }),
              this.$store.commit("refresh_window_focus", { type: this.target }),
              this.$store.commit("hide_context_menu"));
          },
          switch_visibility: function () {
            this.mode &&
              (this.mode
                ? this.$store.commit("switch_global_window_show_status", {
                    type: this.target,
                  })
                : this.$store.commit("open_new_window", { type: this.target }),
              this.$store.commit("refresh_window_focus", {
                type: this.target,
              })),
              this.$store.commit("hide_context_menu");
          },
          close_all: function () {
            this.mode &&
              this.$store.commit("close_global_window_same_type", {
                type: this.target,
              }),
              this.$store.commit("hide_context_menu");
          },
        },
      },
      ui = di,
      wi = Object(d["a"])(ui, li, ci, !1, null, "c41a7e54", null),
      hi = wi.exports,
      fi = {
        name: "Desktop",
        components: {
          BottomBar: Kt,
          SideBar: se,
          WindowText: hs,
          WindowMusic: qe,
          DesktopFileArray: Vt,
          WindowFolder: Ve,
          WindowVSCode: ns,
          WindowBrowser: Ms,
          WindowSetting: Ps,
          KeyBoard: rt,
          KeyBoardMoveIcon: Qs,
          WindowTerminal: vs,
          ContextMenu: ri,
          ContextMenuBottomBar: hi,
        },
        data: function () {
          return { map: [] };
        },
        created: function () {
          var t = this;
          this.$axios
            .raw("map.json")
            .then(function (e) {
              t.map_add_uuid(e.data),
                (t.map = e.data),
                t.$store.commit("commit_filemap", e.data),
                t.deal_with_postfilename();
            })
            .catch(function (t) {
              console.log("error:", t);
            });
        },
        mounted: function () {},
        watch: {
          desktop_keyboard_show: function (t) {
            var e = this;
            t &&
              this.$nextTick(function () {
                (e.$refs.keyboard_div.style.left =
                  e.$store.state.fullWidth / 2 - 300 + "px"),
                  (e.$refs.keyboard_div.style.top =
                    0.8 * (e.$store.state.fullHeight - 200) + "px");
              });
          },
        },
        computed: {
          window_list: function () {
            return this.$store.state.window_list;
          },
          desktop_keyboard_show: function () {
            return this.$store.state.desktop_keyboard_show;
          },
          context_menu_show: function () {
            return this.$store.state.context_menu_show;
          },
        },
        methods: {
          background_clicked: function () {
            this.$store.commit("close_side_bar"),
              this.$store.commit("refresh_window_focus", { uuid: "" });
          },
          map_add_uuid: function (t) {
            var e,
              s = Object(M["a"])(t);
            try {
              for (s.s(); !(e = s.n()).done; ) {
                var i = e.value;
                (i.fileuuid = this.$utils.get_uuid()),
                  i.size < 0 && this.map_add_uuid(i.children);
              }
            } catch (n) {
              s.e(n);
            } finally {
              s.f();
            }
          },
          vkey_pressed: function (t, e) {
            console.log(t, e);
          },
          keyboard_move_down: function () {
            var t = this,
              e = document.onmousedown,
              s = s || window.event || s.which,
              i = s.clientY,
              n = s.clientX,
              o = this.$refs.keyboard_div.style.top;
            o = parseFloat(o.substr(0, o.length - 2));
            var a = this.$refs.keyboard_div.style.left;
            a = parseFloat(a.substr(0, a.length - 2));
            var r = function () {
                var e = e || window.event || e.which,
                  s = e.clientY,
                  r = e.clientX,
                  l = s - i,
                  c = r - n;
                (t.$refs.keyboard_div.style.top = o + l + "px"),
                  (t.$refs.keyboard_div.style.left = a + c + "px");
              },
              l = function () {
                (document.onmousemove = null),
                  (document.onmouseup = null),
                  (document.onmousedown = e);
              };
            (document.onmousemove = r),
              (document.onmouseup = l),
              (document.onmousedown = function () {});
          },
          bgloaded: function () {
            var t = this,
              e = new Date().getTime(),
              s = Math.max(e - this.$store.state.start_load_time, 0);
            (isNaN(s) || void 0 === s || null === s) && (s = 0);
            var i = Math.max(2500 - s, 0);
            window.setTimeout(function () {
              t.$store.commit("hide_interlude");
            }, i);
          },
          bg_mr_clicked: function () {
            this.$store.commit("show_context_menu");
          },
          deal_with_postfilename: function () {
            var t = this.$route.params.postfilename;
            if (void 0 !== t) {
              var e = function e(s) {
                  var i,
                    n = Object(M["a"])(s);
                  try {
                    for (n.s(); !(i = n.n()).done; ) {
                      var o = i.value;
                      if (void 0 === o.children) {
                        if (o.name === t) return o;
                      } else {
                        var a = e(o.children);
                        if (null != a) return a;
                      }
                    }
                  } catch (r) {
                    n.e(r);
                  } finally {
                    n.f();
                  }
                  return null;
                },
                s = e(this.map);
              null != s
                ? this.$store.commit("open_new_window", {
                    type: "text",
                    filesrc: s.path,
                    filename: s.name,
                    size: s.size,
                  })
                : this.$store.commit("open_new_window", {
                    type: "text",
                    filesrc: "",
                    filename: "404 not found",
                    size: 0,
                  });
            }
          },
        },
      },
      mi = fi,
      pi = Object(d["a"])(mi, vt, yt, !1, null, "235d9d46", null),
      _i = pi.exports,
      gi = function () {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      vi = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "div",
            {
              staticClass:
                " tw-fixed tw-top-0 tw-left-0 tw-w-screen tw-h-screen tw-overflow-hidden",
              staticStyle: { "background-color": "rgba(16,16,16)" },
            },
            [
              s("div", {
                staticClass: "tw-mt-14 tw-ml-20 flash tw-bg-red-50",
                staticStyle: { height: "1.5px", width: "14px" },
              }),
            ]
          );
        },
      ],
      yi = {
        name: "Blank",
        components: {},
        data: function () {
          return {};
        },
        created: function () {},
        mounted: function () {
          var t = this;
          window.setTimeout(function () {
            t.$store.commit("hide_interlude");
          }, 2e3),
            window.setTimeout(function () {
              t.exitfullscreen();
            }, 4e3);
        },
        watch: {},
        computed: {},
        methods: {
          exitfullscreen: function () {
            document.exitFullscreen
              ? document.exitFullscreen()
              : document.mozCancelFullScreen
              ? document.mozCancelFullScreen()
              : document.webkitCancelFullScreen
              ? document.webkitCancelFullScreen()
              : document.msExitFullscreen && document.msExitFullscreen();
          },
        },
      },
      xi = yi,
      bi = (s("0b4c"), Object(d["a"])(xi, gi, vi, !1, null, "6906ce26", null)),
      ki = bi.exports;
    i["default"].use(I["a"]);
    var Ai = [
        {
          path: "/terminated",
          name: "Down",
          component: ki,
          meta: { title: "No signal" },
        },
        {
          path: "/login",
          name: "LoginPage",
          component: gt,
          meta: { title: "Deepin" },
        },
        {
          path: "/desktop/post/:postfilename",
          name: "DesktopWithPost",
          component: _i,
          meta: { title: "linux.dawidolko.pl - Simulaing System Linux" },
        },
        {
          path: "/desktop",
          name: "Desktop",
          component: _i,
          meta: { title: "linux.dawidolko.pl - Simulaing System Linux" },
        },
        { path: "*", redirect: "/login" },
      ],
      Ci = new I["a"]({ base: "/", routes: Ai });
    Ci.beforeEach(function (t, e, s) {
      L.commit("show_interlude"), s();
    });
    var zi = Ci,
      Si = s("7876"),
      Oi = s.n(Si);
    (i["default"].config.productionTip = !1),
      i["default"].use(k.a, C.a),
      (i["default"].prototype.$axios = j),
      i["default"].use(I["a"]),
      i["default"].use(Oi.a),
      i["default"].use(F),
      i["default"].use(N),
      new i["default"]({
        vuetify: x,
        router: zi,
        store: L,
        render: function (t) {
          return t(v);
        },
      }).$mount("#app");
  },
  5759: function (t, e, s) {},
  5981: function (t, e, s) {
    var i = {
      "./b1.svg": "bcae",
      "./b2.svg": "a73a",
      "./b3.svg": "b5a5",
      "./d1.svg": "a252",
      "./d2.svg": "0f92",
      "./d3.svg": "6b14",
    };
    function n(t) {
      var e = o(t);
      return s(e);
    }
    function o(t) {
      if (!s.o(i, t)) {
        var e = new Error("Cannot find module '" + t + "'");
        throw ((e.code = "MODULE_NOT_FOUND"), e);
      }
      return i[t];
    }
    (n.keys = function () {
      return Object.keys(i);
    }),
      (n.resolve = o),
      (t.exports = n),
      (n.id = "5981");
  },
  "59fa": function (t, e) {
    t.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAfCAYAAABtYXSPAAAD70lEQVR4AdWUA6xsSRdGV9U5fflsIxjbCMa2J86Lxrbtfxxn4kwwtm3bnmuzeapqT9V/T9LPr7ufd7Iua3+1uoSIbDJsXjJFa6cVrawldlrNMkXjprUP2/c/axP58N91Q8jqGLHvh+yqZAbzZsmnrS6ErFNCZsiuWCafuC3bh4rvh+b1QcgOc1QkM1I0x/zenZf1JROywxwVyQwVzJKfOrPrTSZkhzkqkgl7+kNHVpzIeiFkhzkqlvm+PSvWyXohZFctY6zUROIpGZFi4qRoArIM37TnpCdrHsn5Q/z/Nyyx09YoUzKuaoqevJf4o9/JRy2VnaEw7vc+JwXjppFKkCvZLfuypTv/6svLh38NS+dQqQKK0jNSkqGckXzJSWAwZ1KRyvnYj+/LJul1LthjhvyK5BMr2ZKV/mzJB9uKCQJ9o0ZG8la6R5KablnLYEHwe9bUN5rc+f2AyPGvOznopeoIPT/0O+kZTmTQy3QO1ybza3dOtHFycWLdZZ91CMOjIMXqCD2fdSkcYJxgPXvNo2qsA20FvAzWhHBVE86AE0FEecDVhKCdgEMhSZCpEUNZArAiVSMCsQg45zh9O+GUbVhjCZBYMA4yEcQa6mMYyJafB+eoqXRoVkrhhDXaG08uEe75HRZ/qHi0BUpWCL1CecltDQBo0hIB68qYFFuGQgJPtsI9LYpCKYiM/V0E8EiKc9UDEAOoVMakf7QCLVkQYF7T2FZYB5/3wuXfa8LPR0+D42cLAhSN4K8mv/cVSSyctst0tKLiEkBrVV4ZV14Zcgkc/obmwFc1z/499vvfQ3DmJ5rsKOwYw+3bOTKq/KnG10fMmZBh9oSIP/vyJE4q2p4wriebECnSlVEKFFgRSE23qRc+7FZc9KGmewfh8b+gcwhmN8LDu1ua60Ao73ezl5kdR1gn9OcMf/UPkC9ZBJ3uoUqTQTFWkRKa6iJmTKhj7qS6MRmQdGXSQcDD+zrOe0vzfrvipg/V2IQZePAAy6wmECmLCIr6WNNYr9FKvKhiUlGlZ0pYVcWRpj6CCQ0x4+rj8sqICKkMpBM/sL/jSr9dr/6liBXc7AW3nQLAMmNFxAcHIUVDXURTJmJiQ4RxghCyWaGUAu2JPA2ZaFJDRhdiEFRo8JhlHwh8HnccaDmqRbNoomPRJECBcSxTQlgR5YWYVB+pEY9ffq2dSCSCZhWlFM73Wa1wfmUdQ3lz7b99eRkuOPmhK5HvO5flO8+3HYHw+4qEnhHfGzIGc0mziFAjYdsUBigkhq2mZ1BUVwL0ZQ0GQpih9gr9uOZMRO9okvzWkydXNFgHrFFL8L001cdMboyZ2pwJv1vWpkRkk+E/rlIyWKnWWrwAAAAASUVORK5CYII=";
  },
  "5c3e": function (t, e, s) {
    "use strict";
    s("b9a2");
  },
  "6a88": function (t, e) {
    t.exports =
      "data:image/png;base64,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";
  },
  "6b14": function (t, e, s) {
    t.exports = s.p + "img/d3.ad56d8f9.svg";
  },
  "73e8": function (t, e, s) {
    t.exports = s.p + "img/deepin_text_1.5a28ffd5.png";
  },
  7644: function (t, e, s) {
    var i = {
      "./browser.png": "ec08",
      "./desktop.png": "0d56",
      "./doc.png": "493f",
      "./explorer.png": "b42f",
      "./folder.png": "d454",
      "./menu.png": "56b4",
      "./music.png": "d213",
      "./paint.png": "9464",
      "./profile.png": "8f11",
      "./recycle.png": "ad76",
      "./settings.png": "6a88",
      "./shell.png": "0d33",
      "./skills.png": "59fa",
      "./tasks.png": "29a9",
      "./text.png": "8166",
      "./text2.png": "2227",
      "./vscode.png": "819e",
    };
    function n(t) {
      var e = o(t);
      return s(e);
    }
    function o(t) {
      if (!s.o(i, t)) {
        var e = new Error("Cannot find module '" + t + "'");
        throw ((e.code = "MODULE_NOT_FOUND"), e);
      }
      return i[t];
    }
    (n.keys = function () {
      return Object.keys(i);
    }),
      (n.resolve = o),
      (t.exports = n),
      (n.id = "7644");
  },
  "792e": function (t, e, s) {},
  8166: function (t, e) {
    t.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKsAAADSCAMAAAACG8AiAAABGlBMVEUAAADh4eHb29vh4eHj4+Ph4eHb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vh4eHe3t7f39/m5ubo6Oiso8L4+Pj39/fb29v19fX29vbz8/Px8fHy8vL09PTv7+/5+fnw8PDu7u7h4eHq6urj4+Pr6+vt7e3i4uLn5+dhD3OBAAAARXRSTlMAAQECAwYWLTA8QUtTVlpbYGJkZmlscHN4foGGiIuOj5OanJ6kqa20uLvBxcnKzdHU2Nve4uPn6uvv8PL1+Pn6+/z9/pluGq41AAADB0lEQVR4Ae3ZhXLcMBDGcYfKzMzMzBAGaSVbPghc+/6vUTkzKiqJQt5V5/sPH/5Gs+bit6i1bgwX24u+LS4v9Z3Ru55dmd4elha/V7qVrFVL17ZFpVK3RTVK0dVtUAvdVtbUymMvb5lK7VEbq48ubpFa6hatdama6ILkAQgj4NRqdF7iAMStis5t3qqZrIrOShzWuFXRGYnLGreqqdObojpGq8eeFLiscavHHs/HqiaPJVP73FY1cTTV6ritHns40Wr4rWr8cZrVMli7f2NpIsmqOaz/Yr/mY1X0Rao1hv0s1BrFfhJqjWNlWuPYjzKtcewHmdY49r1Maxz7TqY1jn0r0xrHvpFpjWNfy7TGsa9kWuPYlzKtceyLfKyKnsu0xrHPpFhVAvapTGsc+0SA1dbOdlOwj0RY624S9iG3VVtTum4a9oEAa6UTsffZrbUru4nYe8xWW7ueSsXe5bOGIXDdVOwdZmvtejYZe5vV2ixsTydjbzFZw8J6rEq0KrrJZg1T0NHJ2OucVmtKjzXJ2GvByoetdCr2SrByYatO3+lE7KVg5cE2G1in3yuNVgnYC8HKhXVVz3N9gzXr9zudypWG9ngrI7bRusp7fZ018m95am1ob7DyaeuydBtV1uxWbX3GezfMGBuszFwPXj/rC1Z+70ZpHazyy8wKK6z7MrLuhxVWWGGFlcO60HKwwor9AKywwgorrLDCCiusHFZcb8EKK/YDsMIK62iRUWQziQ5kZD34/1hhhRVWWBdaDlZYsR9gsMIKK6ywwgorrLDCiustWGHFfgBWWGGFFdZDGVmPwAornsljBjI614YVVhwLYIUVVlhhhRVWWGGFFVZYYYUVVlhhhRXWExlZT8FqYSWTB9U01joPa91YqzysVWMd5GEd0FAxOp+HdZ7yeXhMq9ZeDtQejXjrKOWyrD5y8qkuWCmbZS0y2G0NqAhJPx5U9JuVXA7DGrBVDqsasAO5sxqo0ufABelf2LmeNGlvLkr1jdHs/KCqjQSlqavB/AyNFetEgvrb9gM1MGr3rsf/mQAAAABJRU5ErkJggg==";
  },
  "819e": function (t, e) {
    t.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFe0lEQVR4Ae3bc3Rjax9H8SdJc5tRbV7btm3btl/dsW3btm3btmfqjmeC37uHp+OcniY9mfZZ67P6b747RlXxKeKn+FzXRwKJ9aYh4riiU64jssYKS4EEsP04MFDEO/4aVyOsysKJSS13j09pk1mNv9fFNdpsNVbgm96B4BoMV9/28Vi+7SshFWZLSttsT2rb7I2EaJjUKu2W+MZbrJdqgDsxE3LM173E/stQ4dqX1Ha5yBFCbE1pk9UiqWXa3QnNttkupQAPYwlE00uCfhosic13agEAIcTOlLZZ7ZJbpT+U0GSbPdADPIc1kLMC/Hw0wK6zA2ghMgjRJbl1xpMJTbcHB1oAK97HNki+AmghsgnRlxAvJrXY5QiEADb8gAyI0QCa7L08aLZNbpMRY+YAwfg3ciEFGwDg1lDdrAFKowb2Q3wVgLvEQp4pIs0WIAItcQTiywDYxN0hxUwB4tAdLogfAmyGaQJcjsHwQIpagFsxGQIUZoB/5l2IAy/jf3hIlZ1nMzoeD2ARxOwBQlAX+yBIwz8IMTD+aayEmD1AFNrDCcnDiR64Sn3LIO9ZuPBvYjPEYIBD9l+HD+FdYDpjfBIgAX3ghpzHfLyg/jfP6uWru6+xG2LQbt4N/hpTf92NDNlUQAHm5mU/cc2LF9LwF0pdYLwdfyIbYtAcPMMAhRRs9sUtIB6rIF46jM5IPcf4kqiEvRADnOiKK4+P922A0hgP0Wk2nlLl5llOjA9DExyGGJCB/yBEG+/LAMDjWAXRaSd+Vj8OOXpr6AwXxICFeAk2bbg/AgD3YQFEp/3q7ymr1Hf9nQaGu9AH12mD/R0AuA1TILr9a5pwS8jP+CyUQ5g2trACAFdjKDwQXf47S9QvIxnVx9vxy/C6dpM3QwAgHt3hhujyv7mi/pgg6rt+FxruxmDcpA00UwAgEq3gzP9dYvC5xuegMiK1cWYMAISgDg5CdPvP0bvEiLx3idV4G0HasMIIUH6RHsG8Wvw3dEfQ7hLjhWeJ8errnjdrgwozwJfd9HBwDZZXv448qP43RxumP8QUVXbB7aYIoOOtbAjq4SBE/TycR/rZ+Y6AtfgAQYEQIArt4YQA+Gko9+2ZRiLkojaizBwgAb3hhpyFR3f17xlGIrgwHLeaMcA1GAEP5Lx+GHT8qY5BBqzAW7CZJcBdmAnxyvcDhPcBRiNkowrCCzvAI1gC0YOnt/3qX9NXMcBp8C4xADcUVoCnsAai03Y+rvpW/TkxhQvfFi6IAUvwKqz+DFAa4yE6TcMj6us+Fi6wQhga4jDEgAyURYi/AsTp/Nj6MNog+fhwDUqiLPZCDHCiJ672R4AgtIZ4YRd+RSlt9Fns+AFZEIMW4EXfBgDi0QNuyHnMBo8VfaznHa+x4VPsghiUxsvov2Ka7NA+FvfRs0AkWsEJyeMIOuMK9c98pYOFC/86NkEMOmSvtGRUcpusTN8FAEJQC/sg2I1/oYx27er2OJZBjAiqsEgSW2WIbwMADjyH7/EAbIohBt2NOWYJYGCIITdhfNENAKRiADxFMwAQg05wF80AQDia4YgfAmwyXwCgNKpiv48DLEhqnRlhvgDAZfgVOT4K4OHXopUUx5wBABu+RFoBB9jL+Ba8eIo2dwDAinewFUYD5DC8Kz+RfTqpdYZDccwfQPMMVuUzQAbD2/FPFI8ltkwP1sYGVADta3odAXYyvBk39QcSWqXbtZHmD6Dra3p7xcXCo3ne4VsZXje5TeadCS1327RxAR/g7K/pLWXnS2id9cJoDz983sjwKgy/KaFFmlXl51jLLggUccFVlpcPr79pAtf+eIb/L7l15rXxzXcz3MC5qbc7kFhv7uNxXNFhjyOiwRaLMnqKT/EpPv8H/jFQx4nJEagAAAAASUVORK5CYII=";
  },
  "85ec": function (t, e, s) {},
  "8e1e": function (t, e, s) {
    "use strict";
    s("5759");
  },
  "8f11": function (t, e) {
    t.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAdCAYAAABfeMd1AAAD0ElEQVR4AaTVQ2AlMQAG4Lpd1LZt2/ZDbdu4rW3btm3btm1b/77MocakPQzCL44QgE6fEydO+GZmZsLMzAzKysqwtbVFTk4OLl26ZM+mfKcZ9u3bF6WkpARpaelWj4yMDMaOHTusW8iECROGkYpaA82fWbNm1XcJefbsmToZms4A8ujo6ODly5cq1Mi0adP6sQAanjlz5tRQI/n5+btpkNzc3G1UyI8fP0STkpLO0iDh4eHXvn//Ls4aIZnz8vJAg/B4PHz79o0OGTp0KBVSU1NDh/z8+VP0wIED4TTImjVrMtkOV8Pz9u1bBUdHR1aAkZERXrx4Qb+EP3361HPSpEmsEDK0Hz586E2NkBVGNqSLi0uHgJWVFR48eKBH5qNLx8rHjx+lj8/cAI6xJ+Rl5FoBigoKODJ7PT4dv+vb5bOL9OZnxZaNfxNW4UnMLBSYhTYAWaZBeJYwDyTtd9+9M7t1Ch+SysRcsUCsEedgZ8808FWdUK0UgIMKedjYKxHzJIJwwbAW1AhZilOnTh3o7e39drFoLGaJBmChcARmCkXAxcEJ+Wq+zP8y4RisFInEIhEOSktL11y9etWmU+Thw4f6S5YsKXdycvpFlq+7uzumSvNwTigbByWzcSpwKEYnlGBb6TicCh2BLaIp2C+Ujim9uCD5ra2tf8yePbteUI9eK0RwTKtyOJzr8vLyUFFRgbGxMQS9QEBAABLcw5HmHIGb12/g69evZFfj1atXzDc1MRkZDhGIdwqBj48P7OzsQOogdxCXyz0jyKfYgISEhDyWlZVlrlYtLS0YGhrCz88PYWFhiIiIYL63bt1qQJ48eYIvX74gMTGxIV1QB1NOVVUVcnLMSiTxN0j9Inv37o05fvy41v9Wy9u4YiCIoaAddqIG5MpTG6yBibwqIEM2wIz5l42+574AJxsKM6DbW2DPca4oCpVlmfjx8SGw2+0Et9utAElRjKqqUhgR4zObl1jKB33fn/B7yp+enm6yLBMmNoIkYGSTaZq03+/F99h8il5ps9kQY6HwnjTyPIcCj4GcZEwgAd8hoghxj5MJvaF6xZCqrmvF0PGNYsj7pQPQz+d51k9QLaAqDKh2HEcMk9EwDMQwot2f+QD9PFaWDocDAe6JCEAqRjgmmyGBvDMMxJkbt+eetCCIv7OKpmmuaOBuwp9djjaiYoYlTiZ6eXlR27YeUkwhPf72DGhT+oX7VxPo3hHDKFaiLi8v1XWdgEVNi0ODb+XZ2RnHUAT54Op59zB4xUCOSgwB8SRoM+YMkmegr+fnZzbXNpblvxNd9BdKCik7Fbmy7QAAAABJRU5ErkJggg==";
  },
  "92ef": function (t, e, s) {
    t.exports = s.p + "img/avatar.41ef9008.jpg";
  },
  "934b": function (t, e, s) {
    t.exports = s.p + "img/holo.93148926.gif";
  },
  9464: function (t, e) {
    t.exports =
      "data:image/png;base64,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";
  },
  9670: function (t, e, s) {},
  "97ee": function (t, e, s) {
    "use strict";
    s("0138");
  },
  a252: function (t, e, s) {
    t.exports = s.p + "img/d1.9e76ba90.svg";
  },
  a692: function (t, e, s) {},
  a73a: function (t, e, s) {
    t.exports = s.p + "img/b2.22f16eef.svg";
  },
  a8e1: function (t, e, s) {
    "use strict";
    s("daeb");
  },
  ad76: function (t, e) {
    t.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAExUlEQVR4AZRRhVEoQQzNLu5SHEUgLTCGVsA4BVAN+jvAfV1ul9w7Af4omXnRl2RFEMvuydnS3Oz0Kv0v9b/4D2Xjwt3+1kbGgndl0sz01GQthUqpVGrX2hvOFfbFmJdCkJCVrUTM4ZiXsq1Jcj769ZXFOTBiTAqDC1HDyLlQyg2llMm5RNom+tSOVAf42iTUmAMu96C3AJVzWe0cn05iwePb58Vw5VIbthUkHzMZH/m6npcEUgaAzznUmAMuetDbydPb5w2bLPvg4v/HjakhH9pTRrK2RWAfgM851HzI4P73IePM7gYv7wgEQ4oJXJOb0OwCD2FY354agM+5HgncUrteQZ089DP7G6h/KEB9NVZVDY6bMXAcf8YkC17KMTPz3WO5fS2+9gr/o/A/ik9lZmY6hmXOMoTR3lw6VrmLCjuSRprRJwt/1KWMTO4GxcoSJECVVMynJ5Cc6MToeCeyuYxc8/kKAtFLYqHJM8wpAEoAMvIjNJmUGstJ5S5gYv4LCjqDXK4RP1+4gI3rT2Bs4ip5LyDmeHjgvqfR1NCEoFbky4TrHMZfNvNvimj5qh9UQuxwVBdqPgGus/0cX1n8cOEdZAp9GEy+i+1bOziyt1Aop/DuF8+yiDcxMP4yJma/5bVxoUFyAZV/A2A+m++FFjapIV/qp1OG3BbZQYHtB9L+7p0tUOYwbLsG21KwnAEMT3xImor0LZH3K+y+grlsvhO0vymCCJ29Fncrh3PFGaTJfTqbwjc/XaQOOVbdDp0Hy2u2EdqZE5txo+cXDI0UeC58JNq2oVarUrsiY/uZy722GCCVueY1F5HKDNFpANAqFDKPKieltz+Jk8cSTFCBdFv8HpomZwWzcznMpTJoa64Jdb6fZ65gEQDbKnRGNAVNjrsu/Ff9sqyJjRvinKYyAQryf+DX0d5uM3k4QYBO/6jbAsdupNAtmMtML6JIxsowNna6TsN+r55AJZjHzu0JDI9Okt8qpqZ9qXDTxhgmJkErMZkBx3PR0ZaA0k2C62FxkzOZ3OIOaElDj8ZNw2VFJmKuh3MnT0HXL+Jm96gk5xtiMQPz81VZDWE3R9avRzzaxhhDXhHNVgAmlwJAqazNKt3apJQNQzmclBgO79+DKinJhXr4Jdi2BjLC5BF0tDbh2MHbYZkxGIxhLCewloTYYgCOaqUz0WYfN5QL04gxsIE0lHD25D5qscBJCbja5yj8JBLtcXiNuxCPNUEAjChBLFJd7V0WIJX1ezd0GLCY3Dbj5L6Rhy6kI1zfZfKr0OZtYuL1XHZFRB0m1XX6Nog/qeUEVvpWACj31esuAeIMaGLSqqxg0kGwgpzw0CgoQaiVFoVre3CssAsC8Lqs6eUAuJM69YiXDILKJkPFGRyAJuL5KspT+tdvk2KaLKSZXbTQr5md2ASwJ2cz49eWBaBdo5MKx01FHKnQNm6JeIFR+g8A6go2K4/anlDEieJ1maBlOxDrGyl9kGiJHNc0ddyxmmW2g3KoCynRZR1zIeqs2BFx+ZL7AP2G+kaL34C2IgDtyZmU+/z2DfbxWr0Ky/KEKuohN3rTYDKwQ2UKdRo04b4/Wf6B0OfXAoBXP7v4pGPqT9qW4aCOVa3sB7x7LqhH7j696L/fAWwE5MbhvD6nAAAAAElFTkSuQmCC";
  },
  adce: function (t, e, s) {},
  b0a5: function (t, e, s) {},
  b42f: function (t, e) {
    t.exports =
      "data:image/png;base64,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";
  },
  b59a: function (t, e, s) {},
  b5a5: function (t, e, s) {
    t.exports = s.p + "img/b3.ccbca9ea.svg";
  },
  b9a2: function (t, e, s) {},
  ba8c: function (t, e, s) {},
  bcae: function (t, e, s) {
    t.exports = s.p + "img/b1.8a3846da.svg";
  },
  c1b6: function (t, e, s) {
    t.exports = s.p + "img/deepin_3.7afd7a6f.png";
  },
  c2d5: function (t, e, s) {
    "use strict";
    s("adce");
  },
  c8c2: function (t, e, s) {
    "use strict";
    s("d355");
  },
  cb48: function (t, e, s) {
    "use strict";
    s("b0a5");
  },
  cf86: function (t, e, s) {
    "use strict";
    s("792e");
  },
  cf8b: function (t, e, s) {
    "use strict";
    s("b59a");
  },
  d08e: function (t, e, s) {
    "use strict";
    s("9670");
  },
  d1aa: function (t, e, s) {
    "use strict";
    s("4c4b");
  },
  d213: function (t, e) {
    t.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAhCAYAAACxzQkrAAAFUElEQVR4Ac2XA5Q0yxXHf7e6RmvvfrYR27Zt5yg5jG07R7GTo9i2bX/GmqPurqqbnDmv17v9/N5vPPPvqtv/W/dOFzc2hCV4/rve3NF2YPwlduvcw6JKsptiWhaja9VXAXUGje2PQ7Xyg/g/gz8FvnmlAnrh+197ov2Op75X2DYzwHWEphHJ37e+t/n77S8D5lkH23Lm3W/qKZ48925GqgOpRlxnWJBD48+1s+1/BD60YUDSW7+djlTvlooBNVynFCDsnXiK+9ahTwIxqzAAWkm3+4ri1Fw/j57aneaH/vVsVEuosvxhAUKEdSJosNeoOoxECIagnkBgI1wI/PPvf3/P1r0LbcO1Y58ELq5IWTBiHQZRuWruS4GSlOky3fSYXnpNPxXTxqQf4x/J32hqg/XQknLqa7PMn0zepLeP6lvqraBmsoDwqngsaF4AtjXxcDTCYDTE0P8f/dEAnaabirRRljJWLPVQQ/Xz/Cb+FRsRUrj0k3mi8un3FG7RNgN8kiwgxTgXIjaj3XTw4LYHcbx0nJKUiIgwGARBUTwep46GxpSljSPFk/yi8Vs2QgHfVM5+d4rS9tM7T/Tf5qbAH65wSFxeuR8sHOXm5VtgiWhqTFVrVEOd+bDAdJhh2k8z6saphTq3r9yaohTYdEylhTbgzBdGX9//nFPsnb7pvxYdStWyGZ2ml1m/wB/ivzLuJpkN88z42dZrrDGpOgIBQRixW9lT2MFmYypCRjyaMvq3idcP7p/+sQUIKs7lOBTU8K/kDF9Y+B6xJutUkQARAE5bY7I0Zj5jv55iz/GFH2UB2TSn5J0K1RAz7x1gALNJWRucwtKY+SQTKROXZrAAAWPzzsar4K/kWXsED5tqlZX4pmfiYhaQCknORA6DJ0+XuWnwanK0sqoNKI25OHNIrM9zKAhBhDxd5mZQcrUrCIpPfOaQsUneGkJwQKbLdQjZVKusJSw1RsHnVxkBs65OEHqjNkZsN7GmFKVEULlqDhkhKhSWHEpVctJg8EHWNDuDcLA0zH06jrKj0EeqDhFh0tUybW4famENUWfH0hpyanLL3rO2yvqjdu7efpST5R0YycZQJl1jpTYnZ6Zs6do6sFRlLtg1aeiMSnSYIql6RCwOs0bXXehixPYSgKCBjFh1hTYPM1Cha7D/FYt9KLM3C2ZvsZd7du5jV6GHakioGMvoOmmohkA1pLhVe4FzycJVSlnHTXfS26z8IXNoRUADURv37TzMLSpbMCIIoMDltL5mkotJk9/URxmynZTFAnDZLfDz2uVMm89QO137tr1zuFb+draGCssPHrTd7Ch0X5EGJSPVtYs6VeVLc2c4m9S5aWWQWR+3AjyVzOHID0jLlsq9j39iX9r7+cli0rQAflUfagYhVkhXpeFC2li3tyQEflAdbT0y8v7vFNCixd7+ALuHt//5MvGPAWx2sA8RWVrPJg3+0pzlju1lIgwAk77JL2tTWW+5ZihgI6Jbbmfk2IHX7m+2f2blNsjT0BARjAAw7Tyfmz3HlEs5WOpmxsf8vDbOf+IaXi3XmGaCvfMxhnZufetx1/7xlHBhRUB4aabekrDE6STh/PQ5rBgCSqqBoAYQrimRWg7u3/eKIwv2vcDsmo1iOQ4XSk1I2iIyVCEFUpQsrdcW/dWUYwvFdwLVdXeuvfPJ94en43/MlDsPOxGuS9pdYO+F2ltP7eipbnpR8vh3veNOPzo6/KML/e1cVxSdcvz8zM9vdWb60cCF3KukZ772jQP/2tn3hks95WfVi5a4YPByDVKlSkGhnHq6Guk/9o3OvWXHTP0TgGMD/gf3SOvWvq1wwQAAAABJRU5ErkJggg==";
  },
  d355: function (t, e, s) {},
  d454: function (t, e, s) {
    t.exports = s.p + "img/folder.81c64b6d.png";
  },
  daeb: function (t, e, s) {},
  e091: function (t, e, s) {
    t.exports = s.p + "img/desktop_1.cf7e5143.jpg";
  },
  ec08: function (t, e) {
    t.exports =
      "data:image/png;base64,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";
  },
  ec63: function (t, e, s) {},
  fbae: function (t, e, s) {
    "use strict";
    s("50d7");
  },
});
