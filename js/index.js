!
function() {
	function e(e) {
		return ("" + e).slice()
	}
	function r() {
		cQuery.isReady = !0, document.removeEventListener ? (document.removeEventListener("DOMContentLoaded", r, !1), window.removeEventListener("load", r, !1)) : document.detachEvent && window.detachEvent("onload", r), cQuery.event.trigger(document.documentElement, "ready")
	}
	function n() {
		cQuery.isLoaded = !0, document.removeEventListener ? window.removeEventListener("load", n, !1) : document.detachEvent && window.detachEvent("onload", n)
	}
	function i() {
		if (!cQuery.isReady) try {
			document.documentElement.doScroll("left"), r()
		} catch (e) {
			setTimeout(i, 1)
		}
	}
	if (!window.cQuery) {
		window.cQuery = function(e, t, r) {
			return cQuery.isCDom(e) ? e : new h(e, t, r)
		};
		var o = {
			isOpera: /opera/,
			isIE: /msie (\d+)/,
			isStdIE: /rv:(\d+)/,
			isFirefox: /firefox\/(\d+)/,
			isChrome: /chrome/,
			isSafari: /safari/,
			isIOS: /iphone|ipod|ipad/,
			isIPhone: /iphone/,
			isIPod: /ipod/,
			isIPad: /ipad/,
			isIPadUCWeb: /ucweb/,
			space: /\s+/g,
			trimMulti: /^[\s ]+|[\s ]+$/gm,
			trim: /^[\s ]+|[\s ]+$/g,
			stringifyJSON: /([\n\r\f\\\/\'\"])/g,
			errStack: [/^\s*at [^ ]* \((.*?):(\d+):\d+\)$/m, /^\s*at (.*?):(\d+):\d+$/m, /^\s*@(.*?):\d+$/m],
			isInt: /^-?([1-9]\d*)?\d$/,
			isFloat: /^-?(([1-9]\d*)?\d(\.\d*)?|\.\d+)$/,
			isDate: /^(\d{4})-(\d{1,2})-(\d{1,2})$/,
			isDateTime: /^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})(\.\d+)?$/,
			toReStringA: /([\.\\\/\+\*\?\[\]\{\}\(\)\^\$\|])/g,
			toReStringB: /[\r\t\n]/g,
			toDate: /^(\d{4})-(\d{1,2})-(\d{1,2})( \d{1,2}:\d{1,2}:\d{1,2}(\.\d+)?)?$/,
			toDateTime: /^(\d{4})-(\d{1,2})-(\d{1,2})( (\d{1,2}):(\d{1,2}):(\d{1,2})(\.\d+)?)?$/,
			toFormatString: /([yMdhmsS])\1*/g,
			toCurStringA: /(\d)(\d{3}(,|\.|$))/,
			toCurStringB: /^(-?)\./,
			toIntFix: /,/g,
			cssFix: /-(.)/g,
			offsetA: /^(none|hidden)$/i,
			ajax: /xml/i,
			tmplMapString: /[\r\n\'\"\\]/g,
			tmplCheckVari: /(^|[^\.])\b([a-z_$][\w$]*)/gi,
			tmplParse: /^[\s\S]*?(?=(\$\{|\{\{))/,
			tmplKey_$: /^\$\{([\s\S]+)\}$/,
			tmplKey_cmd: /^\{\{\s*(if|else|\/if|\/?loop|\/?each|\/?enum|tmpl)\b.*\}\}$/,
			tmplKey_if: /^\{\{\s*if\s+(.+?)\s*\}\}$/,
			tmplKey_else: /^\{\{\s*else(\s+(.+?))?\s*\}\}$/,
			tmplKey_loop: /^\{\{\s*loop(\s*\(([^,\)]+)(,([^,\)]+))?\))?\s+(.+?)\s*\}\}$/,
			tmplKey_each: /^\{\{\s*each(\s*\(([^,\)]+)(,([^,\)]+))?(,([^,\)]+))?\))?\s+(.+?)\s*\}\}$/,
			tmplKey_enum: /^\{\{\s*enum(\s*\(([^,\)]+)(,([^,\)]+))?\))?\s+(.+?)\s*\}\}$/,
			tmplKey_tmpl: /^\{\{\s*tmpl\s+(.+?)(,([^,]+?))?\s*\}\}$/,
			isSelfScript: /cQuery_110421(\.src)?\.js/i
		},
			a = {};
		cQuery.jsonpResponse = cQuery.undefined;
		var c = null,
			s = "";
		cQuery.isReady = !1, cQuery.isLoaded = !1, cQuery.undefined = function(e) {
			return e
		}(), cQuery.tmp = {}, cQuery.browser = function() {
			var e, t = {
				isOpera: !1,
				isIE: !1,
				isStdIE: !1,
				isAllIE: !1,
				isIE6: !1,
				isIE7: !1,
				isIE8: !1,
				isIE9: !1,
				isIE10: !1,
				isIE11: !1,
				isFirefox: !1,
				isFirefox2: !1,
				isFirefox3: !1,
				isFirefox4: !1,
				isChrome: !1,
				isSafari: !1,
				isIOS: !1,
				isIPhone: !1,
				isIPod: !1,
				isIPad: !1,
				isIPadUCWeb: !1
			},
				r = navigator.userAgent.toLowerCase(),
				n = (navigator.vendor || "").toLowerCase();
			return o.isOpera.test(r) ? (t.isOpera = !0, t) : (e = r.match(o.isIE)) ? (t.isIE = !0, t.isAllIE = !0, t["isIE" + e[1]] = !0, t) : r.indexOf("trident") > -1 && (e = r.match(o.isStdIE)) ? (t.isStdIE = !0, t.isAllIE = !0, t["isIE" + e[1]] = !0, t) : ((e = r.match(o.isFirefox)) ? (t.isFirefox = !0, t["isFirefox" + e[1]] = !0) : o.isChrome.test(r) ? t.isChrome = !0 : o.isSafari.test(r) && (t.isSafari = !0), o.isIOS.test(r) && (t.isIOS = !0, o.isIPhone.test(r) ? t.isIPhone = !0 : o.isIPod.test(r) ? t.isIPod = !0 : o.isIPad.test(r) && (t.isIPad = !0, o.isIPadUCWeb.test(n) && (t.isIPadUCWeb = !0))), t)
		}(), cQuery.type = function(e) {
			if (null == e) return String(e);
			var t = {
				"[object Boolean]": "boolean",
				"[object Number]": "number",
				"[object String]": "string",
				"[object Function]": "function",
				"[object Array]": "array",
				"[object Date]": "date",
				"[object RegExp]": "regexp",
				"[object Error]": "error"
			},
				r = Object.prototype.toString.call(e);
			if (r in t) return t[r];
			"[object Object]" == r && (r = e + "");
			var n = r.match(/^\[object (HTML\w+)\]$/);
			return n ? n[1] : "object"
		}, cQuery.uid = function(e) {
			var t;
			return e && cQuery.isCDom(e) && (e = e[0]), e && (e == window || e.nodeType) ? document.uniqueID ? t = e._uid_ = e == window ? "ms_window" : e == document ? "ms_document" : e.uniqueID : "_uid_" in e ? e._uid_ : t = e._uid_ = cQuery.uid() : "uid_" + (new Date).getTime() + (1e10 * Math.random()).toFixed(0)
		}, cQuery.crypto = {
			sha1: function(e) {
				function t(e, t) {
					return e << t | e >>> 32 - t
				}
				function r(e) {
					var t, r, n = "";
					for (t = 7; 0 <= t; t--) r = e >>> 4 * t & 15, n += r.toString(16);
					return n
				}
				var n, i, o, a, c, s, u, l = Array(80),
					f = 1732584193,
					d = 4023233417,
					h = 2562383102,
					p = 271733878,
					y = 3285377520,
					e = function(e) {
						for (var e = e.replace(/\r\n/g, "\n"), t = "", r = 0; r < e.length; r++) {
							var n = e.charCodeAt(r);
							128 > n ? t += String.fromCharCode(n) : (127 < n && 2048 > n ? t += String.fromCharCode(n >> 6 | 192) : (t += String.fromCharCode(n >> 12 | 224), t += String.fromCharCode(n >> 6 & 63 | 128)), t += String.fromCharCode(63 & n | 128))
						}
						return t
					}(e);
				o = e.length;
				var g = [];
				for (n = 0; n < o - 3; n += 4) i = e.charCodeAt(n) << 24 | e.charCodeAt(n + 1) << 16 | e.charCodeAt(n + 2) << 8 | e.charCodeAt(n + 3), g.push(i);
				switch (o % 4) {
				case 0:
					n = 2147483648;
					break;
				case 1:
					n = e.charCodeAt(o - 1) << 24 | 8388608;
					break;
				case 2:
					n = e.charCodeAt(o - 2) << 24 | e.charCodeAt(o - 1) << 16 | 32768;
					break;
				case 3:
					n = e.charCodeAt(o - 3) << 24 | e.charCodeAt(o - 2) << 16 | e.charCodeAt(o - 1) << 8 | 128
				}
				for (g.push(n); 14 != g.length % 16;) g.push(0);
				for (g.push(o >>> 29), g.push(o << 3 & 4294967295), e = 0; e < g.length; e += 16) {
					for (n = 0; 16 > n; n++) l[n] = g[e + n];
					for (n = 16; 79 >= n; n++) l[n] = t(l[n - 3] ^ l[n - 8] ^ l[n - 14] ^ l[n - 16], 1);
					for (i = f, o = d, a = h, c = p, s = y, n = 0; 19 >= n; n++) u = t(i, 5) + (o & a | ~o & c) + s + l[n] + 1518500249 & 4294967295, s = c, c = a, a = t(o, 30), o = i, i = u;
					for (n = 20; 39 >= n; n++) u = t(i, 5) + (o ^ a ^ c) + s + l[n] + 1859775393 & 4294967295, s = c, c = a, a = t(o, 30), o = i, i = u;
					for (n = 40; 59 >= n; n++) u = t(i, 5) + (o & a | o & c | a & c) + s + l[n] + 2400959708 & 4294967295, s = c, c = a, a = t(o, 30), o = i, i = u;
					for (n = 60; 79 >= n; n++) u = t(i, 5) + (o ^ a ^ c) + s + l[n] + 3395469782 & 4294967295, s = c, c = a, a = t(o, 30), o = i, i = u;
					f = f + i & 4294967295, d = d + o & 4294967295, h = h + a & 4294967295, p = p + c & 4294967295, y = y + s & 4294967295
				}
				return u = r(f) + r(d) + r(h) + r(p) + r(y), u.toLowerCase()
			}
		}, cQuery.isPlainObject = function(e) {
			if (!e || "object" !== cQuery.type(e) || e.nodeType || e == e.window) return !1;
			var t = Object.prototype.hasOwnProperty;
			try {
				if (e.constructor && !t.call(e, "constructor") && !t.call(e.constructor.prototype, "isPrototypeOf")) return !1
			} catch (r) {
				return !1
			}
			if (cQuery.isCDom(e)) return !1;
			var n;
			for (n in e) if (!t.call(e, n) && n in Object.prototype && e[n] !== Object.prototype[n]) return !1;
			return !0
		}, cQuery.isEmptyObject = function(e) {
			for (var t in e) return !1;
			return !0
		}, cQuery.isCDom = function(e) {
			return e && e.hasOwnProperty && !e.hasOwnProperty("_v") && cQuery.fn._v == e._v
		}, cQuery.stringifyJSON = function(e) {
			var t, r = window.JSON;
			try {
				if (r && r.stringify) t = r.stringify(e);
				else {
					var n, i, a = [],
						c = 0,
						s = {
							"\n": "\\n",
							"\r": "\\r",
							"\f": "\\f"
						};
					switch (cQuery.type(e)) {
					case null:
					case "undefined":
						t = "null";
						break;
					case "object":
						for (i in e) e.hasOwnProperty(i) && (a[c++] = cQuery.stringifyJSON(i) + ":" + cQuery.stringifyJSON(e[i]));
						t = "{" + a.join(",") + "}";
						break;
					case "array":
						for (c = 0, n = e.length; c < n; c++) a[c] = cQuery.stringifyJSON(e[c]);
						t = "[" + a.join(",") + "]";
						break;
					case "string":
						t = '"' + e.replace(o.stringifyJSON, function(e) {
							return s[e] || "\\" + e
						}) + '"';
						break;
					case "date":
						t = "new Date(" + e.getTime() + ")";
						break;
					case "number":
					case "boolean":
					case "function":
					case "regexp":
						t = e.toString();
						break;
					default:
						t = "null"
					}
				}
				return t
			} catch (u) {
				cQuery.fxWarning("stringifyJSON", "invalid Object")
			}
			return null
		}, cQuery.parseJSON = function(e) {
			if ("string" != cQuery.type(e) || !(e = e.trim())) return null;
			var t = null,
				r = window.JSON;
			try {
				if (r && r.parse) return t = r.parse(e)
			} catch (n) {
				cQuery.fxWarning("parseJSON", "Nonstandard JSON: " + e.slice(0, 100) + "...")
			}
			try {
				t = new Function("return (" + e + ");")()
			} catch (n) {
				cQuery.logicError("parseJSON", "invalid JSON: " + e.slice(0, 100) + "...")
			}
			return t
		}, cQuery.parseXML = function(e) {
			if ("string" != cQuery.type(e) || !e) return null;
			var t, r, n;
			return window.DOMParser ? (t = new DOMParser, r = t.parseFromString(e, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(e)), n = r.documentElement, n && n.nodeName && "parsererror" !== n.nodeName || cQuery.logicError("parseXML", "invalid XML: " + e.slice(0, 200) + "..."), r
		}, window.__bfi && "function" == cQuery.type(window.__bfi.push) || (window.__bfi = []);
		var u = window.__bfi,
			l = +new Date;
		cQuery.error = function(t, r, n) {
			var i = {
				version: 7,
				name: "",
				message: "",
				line: 0,
				column: 0,
				file: "",
				stack: "",
				category: "Logic-error",
				framework: "cQuery_110421",
				time: new Date - l
			};
			switch (cQuery.type(t)) {
			case "string":
				i.name = e(t || ""), i.message = e(r || ""), i.stack = cQuery.trace().join("\r\n");
				break;
			case "error":
				if (cQuery.config && cQuery.config("allowDebug"), i.name = e(t.name), i.message = e(t.message || t.description || ""), i.line = t.lineNumber || t.line || 0, i.column = t.number || 0, i.file = e(t.fileName || t.sourceURL || ""), i.stack = cQuery.trace(t).join("\r\n"), !i.file && t.stack) {
					for (var a = 0; a < o.errStack.length; a++) {
						var c = t.stack.match(o.errStackA);
						if (c) break
					}
					c && (i.file = c[1], i.line = parseInt(c[2], 10))
				}
			}
			n && n.category && (i.category = n.category), window.console && console.log && console.log("[ " + i.category + " ] ", i);
			var s = "error" == cQuery.type(t) && !n.skipThrow;
			if (s && (i.skip = !0), u.push(["_trackError", i]), s) throw t;
			return i
		}, cQuery.warning = cQuery.logicWarning = function(e, t, r) {
			return r = cQuery.extend({}, r, {
				category: "Logic-warning"
			}), cQuery.error(e, t, r)
		}, cQuery.fxWarning = function(e, t, r) {
			return r = cQuery.extend({}, r, {
				category: "Framework-warning"
			}), cQuery.error(e, t, r)
		}, cQuery.modWarning = cQuery.logicWarning = function(e, t, r) {
			return r = cQuery.extend({}, r, {
				category: "Widget-warning"
			}), cQuery.error(e, t, r)
		}, cQuery.fxError = function(e, t, r) {
			return r = cQuery.extend({}, r, {
				category: "Framework-error"
			}), cQuery.error(e, t, r)
		}, cQuery.modError = function(e, t, r) {
			return r = cQuery.extend({}, r, {
				category: "Widget-error"
			}), cQuery.error(e, t, r)
		}, cQuery.logicError = function(e, t, r) {
			return r = cQuery.extend({}, r, {
				category: "Logic-error"
			}), cQuery.error(e, t, r)
		}, cQuery.trace = function() {
			function e(t) {
				"error" == cQuery.type(t) && (t = {
					e: t
				}), t = t || {
					guess: !0
				};
				var r = t.e || null,
					n = !! t.guess,
					i = new e.implementation,
					o = i.run(r);
				return n ? i.guessAnonymousFunctions(o) : o
			}
			return e.implementation = function() {}, e.implementation.prototype = {
				run: function(e, t) {
					return e = e || this.createException(), t = t || this.mode(e), "other" === t ? this.other(arguments.callee) : this[t](e)
				},
				createException: function() {
					try {
						this.undef()
					} catch (e) {
						return e
					}
				},
				mode: function(e) {
					return e.arguments && e.stack ? "chrome" : e.stack && e.sourceURL ? "safari" : e.stack && e.number ? "ie" : e.stack && e.fileName ? "firefox" : e.message && e["opera#sourceloc"] ? e.stacktrace ? e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length ? "opera9" : "opera10a" : "opera9" : e.message && e.stack && e.stacktrace ? e.stacktrace.indexOf("called from line") < 0 ? "opera10b" : "opera11" : e.stack && !e.fileName ? "chrome" : "other"
				},
				instrumentFunction: function(t, r, n) {
					t = t || window;
					var i = t[r];
					t[r] = function() {
						return n.call(this, e().slice(4)), t[r]._instrumented.apply(this, arguments)
					}, t[r]._instrumented = i
				},
				deinstrumentFunction: function(e, t) {
					e[t].constructor === Function && e[t]._instrumented && e[t]._instrumented.constructor === Function && (e[t] = e[t]._instrumented)
				},
				chrome: function(e) {
					return (e.stack + "\n").replace(/^[\s\S]+?\s+at\s+/, " at ").replace(/^\s+(at eval )?at\s+/gm, "").replace(/^([^\(]+?)([\n$])/gm, "{anonymous}() ($1)$2").replace(/^Object.<anonymous>\s*\(([^\)]+)\)/gm, "{anonymous}() ($1)").replace(/^(.+) \((.+)\)$/gm, "$1@$2").split("\n").slice(0, -1)
				},
				safari: function(e) {
					return e.stack.replace(/\[native code\]\n/m, "").replace(/^(?=\w+Error\:).*$\n/m, "").replace(/^@/gm, "{anonymous}()@").split("\n")
				},
				ie: function(e) {
					return e.stack.replace(/^\s*at\s+(.*)$/gm, "$1").replace(/^Anonymous function\s+/gm, "{anonymous}() ").replace(/^(.+)\s+\((.+)\)$/gm, "$1@$2").split("\n").slice(1)
				},
				firefox: function(e) {
					return e.stack.replace(/(?:\n@:0)?\s+$/m, "").replace(/^(?:\((\S*)\))?@/gm, "{anonymous}($1)@").split("\n")
				},
				opera11: function(e) {
					for (var t = "{anonymous}", r = /^.*line (\d+), column (\d+)(?: in (.+))? in (\S+):$/, n = e.stacktrace.split("\n"), i = [], o = 0, a = n.length; a > o; o += 2) {
						var c = r.exec(n[o]);
						if (c) {
							var s = c[4] + ":" + c[1] + ":" + c[2],
								u = c[3] || "global code";
							u = u.replace(/<anonymous function: (\S+)>/, "$1").replace(/<anonymous function>/, t), i.push(u + "@" + s + " -- " + n[o + 1].replace(/^\s+/, ""))
						}
					}
					return i
				},
				opera10b: function(e) {
					for (var t = /^(.*)@(.+):(\d+)$/, r = e.stacktrace.split("\n"), n = [], i = 0, o = r.length; o > i; i++) {
						var a = t.exec(r[i]);
						if (a) {
							var c = a[1] ? a[1] + "()" : "global code";
							n.push(c + "@" + a[2] + ":" + a[3])
						}
					}
					return n
				},
				opera10a: function(e) {
					for (var t = "{anonymous}", r = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, n = e.stacktrace.split("\n"), i = [], o = 0, a = n.length; a > o; o += 2) {
						var c = r.exec(n[o]);
						if (c) {
							var s = c[3] || t;
							i.push(s + "()@" + c[2] + ":" + c[1] + " -- " + n[o + 1].replace(/^\s+/, ""))
						}
					}
					return i
				},
				opera9: function(e) {
					for (var t = "{anonymous}", r = /Line (\d+).*script (?:in )?(\S+)/i, n = e.message.split("\n"), i = [], o = 2, a = n.length; a > o; o += 2) {
						var c = r.exec(n[o]);
						c && i.push(t + "()@" + c[2] + ":" + c[1] + " -- " + n[o + 1].replace(/^\s+/, ""))
					}
					return i
				},
				other: function(e) {
					for (var t, r, n = "{anonymous}", i = /function\s*([\w\-$]+)?\s*\(/i, o = [], a = 10, c = Array.prototype.slice; e && e.arguments && o.length < a;) {
						t = i.test(e.toString()) ? RegExp.$1 || n : n, r = c.call(e.arguments || []), o[o.length] = t + "(" + this.stringifyArguments(r) + ")";
						try {
							e = e.caller
						} catch (s) {
							o[o.length] = "" + s;
							break
						}
					}
					return o
				},
				stringifyArguments: function(e) {
					for (var t = [], r = Array.prototype.slice, n = 0; n < e.length; ++n) {
						var i = e[n];
						void 0 === i ? t[n] = "undefined" : null === i ? t[n] = "null" : i.constructor && (t[n] = i.constructor === Array ? i.length < 3 ? "[" + this.stringifyArguments(i) + "]" : "[" + this.stringifyArguments(r.call(i, 0, 1)) + "..." + this.stringifyArguments(r.call(i, -1)) + "]" : i.constructor === Object ? "#object" : i.constructor === Function ? "#function" : i.constructor === String ? '"' + i + '"' : i.constructor === Number ? i : "?")
					}
					return t.join(",")
				},
				sourceCache: {},
				ajax: function(e) {
					var t = this.createXMLHTTPObject();
					if (t) try {
						return t.open("GET", e, !1), t.send(null), t.responseText
					} catch (r) {}
					return ""
				},
				createXMLHTTPObject: function() {
					for (var e, t = [function() {
						return new XMLHttpRequest
					}, function() {
						return new ActiveXObject("Msxml2.XMLHTTP")
					}, function() {
						return new ActiveXObject("Msxml3.XMLHTTP")
					}, function() {
						return new ActiveXObject("Microsoft.XMLHTTP")
					}], r = 0; r < t.length; r++) try {
						return e = t[r](), this.createXMLHTTPObject = t[r], e
					} catch (n) {}
				},
				isSameDomain: function(e) {
					return "undefined" != typeof location && -1 !== e.indexOf(location.hostname)
				},
				getSource: function(e) {
					return e in this.sourceCache || (this.sourceCache[e] = this.ajax(e).split("\n")), this.sourceCache[e]
				},
				guessAnonymousFunctions: function(e) {
					for (var t = 0; t < e.length; ++t) {
						var r = /\{anonymous\}\(.*\)@(.*)/,
							n = /^(.*?)(?::(\d+))(?::(\d+))?(?: -- .+)?$/,
							i = e[t],
							o = r.exec(i);
						if (o) {
							var a = n.exec(o[1]);
							if (a) {
								var c = a[1],
									s = a[2],
									u = a[3] || 0;
								if (c && this.isSameDomain(c) && s) {
									var l = this.guessAnonymousFunction(c, s, u);
									e[t] = i.replace("{anonymous}", l)
								}
							}
						}
					}
					return e
				},
				guessAnonymousFunction: function(e, t) {
					var r;
					try {
						r = this.findFunctionName(this.getSource(e), t)
					} catch (n) {
						r = "getSource failed with url: " + e + ", exception: " + n.toString()
					}
					return r
				},
				findFunctionName: function(e, t) {
					for (var r, n, i, o = /function\s+([^(]*?)\s*\(([^)]*)\)/, a = /['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*function\b/, c = /['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*(?:eval|new Function)\b/, s = "", u = Math.min(t, 20), l = 0; u > l; ++l) if (r = e[t - l - 1], i = r.indexOf("//"), i >= 0 && (r = r.substr(0, i)), r) {
						if (s = r + s, n = a.exec(s), n && n[1]) return n[1];
						if (n = o.exec(s), n && n[1]) return n[1];
						if (n = c.exec(s), n && n[1]) return n[1]
					}
					return "(?)"
				}
			}, e
		}(), cQuery.log = function(e, t) {
			if (window.console && console.log) {
				switch (arguments.length) {
				case 0:
					e = "timestamp", t = (new Date).toFormatString("yyyy-MM-dd hh:mm:ss,SSS");
					break;
				case 1:
					t = e, e = "log"
				}
				console.log("[ " + e + " ] ", t)
			}
		}, cQuery.logTrace = function() {
			var e = Array.prototype.slice.call(arguments),
				t = cQuery.trace.apply(null, e);
			cQuery.log("[ Trace ]");
			for (var r = 0, n = t.length; r < n; r++) cQuery.log(t[r])
		}, cQuery.debug = function() {
			if (window.console && console.log) {
				var e = Array.prototype.slice.call(arguments);
				console.log.apply ? console.log.apply(console, e) : console.log(e.join(" | "))
			}
		}, cQuery.extend = function() {
			var e, t = null,
				r = [].slice.call(arguments, 0),
				n = r.shift();
			for (null !== n && "boolean" != cQuery.type(n) || (t = n, n = r.shift()), r.length || (r[0] = n, n = cQuery); e = r.shift();) for (var i in e) if (!e.hasOwnProperty || e.hasOwnProperty(i) && n !== e[i]) {
				var o = cQuery.type(n[i]),
					a = cQuery.type(e[i]);
				if (t === !0) {
					var c = n.hasOwnProperty ? n.hasOwnProperty(i) : i in n;
					if (c && o == a) switch (o) {
					case "object":
						if (cQuery.isPlainObject(e[i])) cQuery.extend(t, n[i], e[i]);
						else try {
							n[i] = e[i]
						} catch (s) {}
						break;
					default:
						try {
							n[i] = e[i]
						} catch (s) {}
					} else try {
						n[i] = cQuery.copy(e[i])
					} catch (s) {}
				} else if (t === !1) {
					var c = i in n;
					if (!c) try {
						n[i] = e[i]
					} catch (s) {}
				} else try {
					n[i] = e[i]
				} catch (s) {}
			}
			return n
		}, cQuery.extend({
			COMMON_DONOTHING: function() {},
			AJAX_METHOD_GET: "GET",
			AJAX_METHOD_POST: "POST",
			AJAX_UNIQUETYPE_KEEPFIRST: "keepFirst",
			AJAX_UNIQUETYPE_KEEPLAST: "keepLast",
			KEY_ESC: 27,
			KEY_F1: 112,
			KEY_F2: 113,
			KEY_F3: 114,
			KEY_F4: 115,
			KEY_F5: 116,
			KEY_F6: 117,
			KEY_F7: 118,
			KEY_F8: 119,
			KEY_F9: 120,
			KEY_F10: 121,
			KEY_F11: 122,
			KEY_F12: 123,
			KEY_UP: 38,
			KEY_DOWN: 40,
			KEY_LEFT: 37,
			KEY_RIGHT: 39,
			KEY_ENTER: 13,
			KEY_SPACE: 32,
			KEY_TAB: 9,
			KEY_HOME: 36,
			KEY_END: 35,
			KEY_PAGEUP: 33,
			KEY_PAGEDOWN: 34,
			KEY_BACKSPACE: 8,
			TMPL_TYPE_STRICT: "strict",
			TMPL_TYPE_NORMAL: "normal"
		}), cQuery.sleep = function(e) {
			for (var t = +new Date; + new Date - t < e;)
		}, cQuery.loader = {
			_loaded: {},
			_jsonpBusy: !1,
			_jsonpQueue: [],
			_jsonpCache: {},
			pre: function(e, t) {
				var t = cQuery.extend(!0, {
					width: 0,
					height: 0,
					disabled: "disabled",
					style: {
						display: "none"
					},
					rel: "alternate stylesheet",
					onload: cQuery.COMMON_DONOTHING,
					onerror: cQuery.COMMON_DONOTHING
				}, t || {});
				if (this._loaded[e]) return void(t.onload && t.onload.apply());
				var r = t.onload;
				t.onload = function() {
					cQuery.loader._loaded[e] = !0, r && r.apply(n, arguments)
				};
				var n, i = this;
				n = cQuery.browser.isIE || cQuery.browser.isOpera ? i._createLink(e, t) : i._createObject(e, t)
			},
			js: function(e, t) {
				t = cQuery.extend({
					type: "text/javascript",
					charset: cQuery.config("charset"),
					async: !1,
					group: "",
					onload: cQuery.COMMON_DONOTHING,
					onerror: cQuery.COMMON_DONOTHING
				}, t || {});
				var r = document.createElement("script"),
					n = t.onload;
				return t.onload = function() {
					n.apply(r, arguments), r.onload = r.onreadystatechange = cQuery.COMMON_DONOTHING
				}, cQuery.extend(r, t), r.onreadystatechange = function() {
					switch (r.readyState) {
					case "loaded":
					case "complete":
						t.onload.apply(r, arguments)
					}
				}, r.src = e, this._appendToHead(r), r
			},
			jsText: function() {},
			css: function(e, t) {
				t = cQuery.extend({
					type: "text/css",
					charset: cQuery.config("charset"),
					rel: "stylesheet"
				}, t || {});
				var r = document.createElement("link");
				return cQuery.extend(r, t), r.href = e, this._appendToHead(r), r
			},
			image: function(e, t) {
				t = cQuery.extend({
					onload: cQuery.COMMON_DONOTHING,
					onerror: cQuery.COMMON_DONOTHING
				}, t || {});
				var r = new Image;
				return cQuery.extend(r, t), r.src = e, r
			},
			jsonp: function(e, t) {
				if (t = cQuery.extend({
					type: "text/javascript",
					charset: cQuery.config("charset"),
					async: !0,
					group: "",
					onload: cQuery.COMMON_DONOTHING,
					onerror: cQuery.COMMON_DONOTHING
				}, t || {}), e in this._jsonpCache) {
					var r = this._jsonpCache[e];
					r.onload[r.onload.length] = t.onload, r.onerror[r.onerror.length] = t.onerror, "loaded" == r.status && this._jsonpRun(e)
				} else {
					if (this._jsonpBusy) return void(this._jsonpQueue[this._jsonpQueue.length] = Array.prototype.slice.call(arguments));
					this._jsonpBusy = !0;
					var r = this._jsonpCache[e] = {
						status: "loading",
						onload: [t.onload],
						onerror: [t.onerror]
					};
					t.onload = this._jsonpRun.bind(this, e), r.script = this.js(e, t)
				}
			},
			_jsonpRun: function(e) {
				var t, r, n = this._jsonpCache[e];
				if (n.data || (n.data = cQuery.copy(cQuery.jsonpResponse), cQuery.jsonpResponse = cQuery.undefined, this._jsonpBusy = !1), n.data == cQuery.undefined) for (delete this._jsonpCache[e]; t = n.onerror.shift();) t();
				else for (n.status = "loaded"; t = n.onload.shift();) t(n.data);
				r = this._jsonpQueue.shift(), r && this.jsonp.apply(this, r)
			},
			_createLink: function(e, t) {
				var r = document.createElement("link");
				return cQuery.extend(!0, r, t), r.href = e, this._appendToHead(r), r
			},
			_createObject: function(e, t) {
				var r = document.createElement("object");
				return cQuery.extend(!0, r, t), r.data = e, this._appendToBody(r), r
			},
			_appendToHead: function(e, t) {
				var r = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
				return r.firstChild ? r.insertBefore(e, r.firstChild) : r.appendChild(e), t && r.removeChild(e), e
			},
			_appendToBody: function(e, t) {
				var r = document.body;
				if (!r) {
					var n = cQuery.uid();
					document.write('<input id="' + n + '" type="hidden"></input>');
					var i = document.getElementById(n);
					i.parentNode.removeChild(i), r = document.body
				}
				return r.firstChild ? r.insertBefore(e, r.firstChild) : r.appendChild(e), t && r.removeChild(e), e
			}
		}, cQuery.extend(!1, String.prototype, {
			trim: function(e) {
				return this.replace(e ? o.trimMulti : o.trim, "")
			},
			repeat: function(e) {
				var t = [];
				return t[e] = "", t.join(this)
			},
			isInt: function(e, t) {
				if (o.isInt.test(this)) {
					var r = parseInt(this, 10);
					return !("number" == typeof e && r < e) && !("number" == typeof t && r > t)
				}
				return !1
			},
			isFloat: function(e, t) {
				if (o.isFloat.test(this)) {
					var r = parseFloat(this, 10);
					return !("number" == typeof e && r < e) && !("number" == typeof t && r > t)
				}
				return !1
			},
			isDate: function() {
				var e = this.match(o.isDate);
				if (e) {
					var t = e[1].toInt(),
						r = e[2].toInt() - 1,
						n = e[3].toInt(),
						i = new Date(t, r, n);
					if (i.getFullYear() == t && i.getMonth() == r && i.getDate() == n) return !0
				}
				return !1
			},
			isDateTime: function() {
				var e = this.match(o.isDateTime);
				if (e) {
					var t = e[1].toInt(),
						r = e[2].toInt() - 1,
						n = e[3].toInt(),
						i = (e[4] || "").toInt() || 0,
						a = (e[5] || "").toInt() || 0,
						c = (e[6] || "").toInt() || 0,
						s = new Date(t, r, n, i, a, c);
					if (s.getFullYear() == t && s.getMonth() == r && s.getDate() == n && s.getHours() == i && s.getMinutes() == a && s.getSeconds() == c) return !0
				}
				return !1
			},
			toReString: function() {
				var e = {
					"\r": "\\r",
					"\n": "\\n",
					"\t": "\\t"
				};
				return this.replace(o.toReStringA, "\\$1").replace(o.toReStringB, function(t) {
					return e[t]
				})
			},
			toInt: function() {
				return parseInt(this.replace(o.toIntFix, ""), 10)
			},
			toBool: function() {
				return /^([tT]rue|1)$/.test(this)
			},
			toDate: function() {
				var e = this.match(o.toDate);
				if (e) {
					var t = e[1].toInt(),
						r = e[2].toInt() - 1,
						n = e[3].toInt(),
						i = new Date(t, r, n);
					if (i.getFullYear() == t && i.getMonth() == r && i.getDate() == n) return i
				}
				return null
			},
			toDateTime: function() {
				var e = this.match(o.toDateTime);
				if (e) {
					var t = e[1].toInt(),
						r = e[2].toInt() - 1,
						n = e[3].toInt(),
						i = (e[5] || "").toInt() || 0,
						a = (e[6] || "").toInt() || 0,
						c = (e[7] || "").toInt() || 0,
						s = new Date(t, r, n, i, a, c);
					if (s.getFullYear() == t && s.getMonth() == r && s.getDate() == n && s.getHours() == i && s.getMinutes() == a && s.getSeconds() == c) return s
				}
				return null
			},
			_wrap: function(e) {
				return e ? "<" + e + ">" + this + "</" + e + ">" : this
			}
		}), cQuery.extend(!1, Number.prototype, {
			toCurString: function(e) {
				for (var t = this.toFixed(arguments.length ? e : 2), r = o.toCurStringA; r.test(t);) t = t.replace(r, "$1,$2");
				return t = t.replace(o.toCurStringB, "$10.")
			}
		}), cQuery.extend(!1, Array.prototype, {
			unique: function() {
				if (this.length) for (var e = 0, t = this.length; e < t; e++) for (var r = e + 1; r < t; r++) this[e] === this[r] && (this.splice(r, 1), r--, t--);
				return this
			},
			each: Array.prototype.forEach ||
			function(e, t) {
				for (var r = 0, n = this.length; r < n; r++) e.call(t, this[r], r, this);
				return this
			},
			map: function(e, t) {
				for (var r = [], n = 0, i = 0, o = this.length; i < o; i++) r[n++] = e.call(t, this[i], i, this);
				return r
			},
			filter: function(e, t) {
				for (var r = [], n = 0, i = 0, o = this.length; i < o; i++) {
					var a = this[i];
					e.call(t, a, i, this) === !0 && (r[n++] = a)
				}
				return r
			},
			indexOf: function(e, t) {
				var r = this.length;
				for (t = Number(t) || 0, t = t < 0 ? Math.ceil(t) : Math.floor(t), t < 0 && (t += r); t < r; t++) if (this[t] === e) return t;
				return -1
			}
		}), cQuery.extend(!1, Date.prototype, {
			addYears: function(e) {
				var t = new Date((+this));
				return t.setYear(t.getFullYear() + e), t
			},
			addMonths: function(e) {
				var t = new Date((+this));
				return t.setMonth(t.getMonth() + e), t
			},
			addDays: function(e) {
				var t = new Date((+this));
				return t.setDate(t.getDate() + e), t
			},
			addHours: function(e) {
				var t = new Date((+this));
				return t.setHours(t.getHours() + e), t
			},
			addMinutes: function(e) {
				var t = new Date((+this));
				return t.setMinutes(t.getMinutes() + e), t
			},
			addSeconds: function(e) {
				var t = new Date((+this));
				return t.setSeconds(t.getSeconds() + e), t
			},
			toISOString: function() {
				return this.getUTCFullYear() + "-" + ("00" + (this.getUTCMonth() + 1)).slice(-2) + "-" + ("00" + this.getUTCDate()).slice(-2) + "T" + ("00" + this.getUTCHours()).slice(-2) + ":" + ("00" + this.getUTCMinutes()).slice(-2) + ":" + ("00" + this.getUTCSeconds()).slice(-2) + "Z"
			},
			toDate: function() {
				return new Date(this.getFullYear(), this.getMonth(), this.getDate())
			},
			toStdDateString: function() {
				return this.getFullYear() + "-" + (this.getMonth() + 1) + "-" + this.getDate()
			},
			toStdDateTimeString: function() {
				return this.getFullYear() + "-" + (this.getMonth() + 1) + "-" + this.getDate() + " " + this.getHours() + ":" + this.getMinutes() + ":" + this.getSeconds()
			},
			toEngDateString: function() {
				var e = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
				return e[this.getMonth()] + "-" + this.getDate() + "-" + this.getFullYear()
			},
			toFormatString: function(e) {
				var t = {
					y: this.getFullYear(),
					M: this.getMonth() + 1,
					d: this.getDate(),
					h: this.getHours(),
					m: this.getMinutes(),
					s: this.getSeconds(),
					S: this.getMilliseconds()
				},
					r = {
						y: 2
					};
				for (var n in t)!t.hasOwnProperty(n) || n in r || (r[n] = t[n].toString().length);
				return e.replace(o.toFormatString, function(e, n) {
					var i = t[n],
						o = Math.max(e.length, r[n]);
					return ("0".repeat(o) + i).slice(-o)
				})
			}
		}), cQuery.extend(!1, Function.prototype, {
			bind: function(e) {
				var t = this,
					r = Array.prototype.slice.call(arguments, 1);
				return function() {
					return t.apply(e, r.concat(Array.prototype.slice.call(arguments, 0)))
				}
			},
			pass: function() {
				var e = this,
					t = Array.prototype.slice.call(arguments, 0);
				return function() {
					return e.apply(this, t.concat(Array.prototype.slice.call(arguments, 0)))
				}
			},
			delay: function(e) {
				var t = setTimeout(this.wrap(), e);
				return t.clear = function() {
					clearTimeout(t)
				}, t
			},
			repeat: function(e) {
				var t = setInterval(this.wrap(), e);
				return t.clear = function() {
					clearInterval(t)
				}, t
			},
			wrap: function() {
				if (cQuery.browser.isIE) return this;
				var e = this;
				return function() {
					try {
						return e.apply(this)
					} catch (t) {
						return cQuery.logicError(t), null
					}
				}
			},
			run: function() {
				var e = this.wrap();
				e.apply(this)
			}
		}), cQuery.run = function() {
			for (var e = arguments, t = 0; t < e.length; t++) switch (cQuery.type(e[t])) {
			case "function":
				e[t].run();
				break;
			case "string":
				(function() {
					var r = new Function(e[t]);
					r.call(r)
				}).run();
				break;
			case "array":
				(function() {
					if (e[t].length) {
						var r = new Function(e[t].length - 1);
						r.apply(r, e[t].slice(0, -1))
					}
				}).run()
			}
		};
		try {
			window.replace = function() {
				return ""
			}, function() {
				function e() {
					var e = "{}";
					if ("userDataBehavior" == g) {
						p.load("jStorage");
						try {
							e = p.getAttribute("jStorage")
						} catch (t) {}
						try {
							_ = p.getAttribute("jStorage_update")
						} catch (r) {}
						h.jStorage = e
					}
					i(), c(), s()
				}
				function t() {
					var t;
					clearTimeout(v), v = setTimeout(function() {
						if ("localStorage" == g || "globalStorage" == g) t = h.jStorage_update;
						else if ("userDataBehavior" == g) {
							p.load("jStorage");
							try {
								t = p.getAttribute("jStorage_update")
							} catch (n) {}
						}
						if (t && t != _) {
							_ = t;
							var i, o = f.parse(f.stringify(d.__jstorage_meta.CRC32));
							e(), i = f.parse(f.stringify(d.__jstorage_meta.CRC32));
							var a, c = [],
								s = [];
							for (a in o) o.hasOwnProperty(a) && (i[a] ? o[a] != i[a] && "2." == String(o[a]).substr(0, 2) && c.push(a) : s.push(a));
							for (a in i) i.hasOwnProperty(a) && (o[a] || c.push(a));
							r(c, "updated"), r(s, "deleted")
						}
					}, 25)
				}
				function r(e, t) {
					if (e = [].concat(e || []), "flushed" == t) {
						e = [];
						for (var r in m) m.hasOwnProperty(r) && e.push(r);
						t = "deleted"
					}
					r = 0;
					for (var n = e.length; r < n; r++) {
						if (m[e[r]]) for (var i = 0, o = m[e[r]].length; i < o; i++) m[e[r]][i](e[r], t);
						if (m["*"]) for (i = 0, o = m["*"].length; i < o; i++) m["*"][i](e[r], t)
					}
				}
				function n() {
					var e = (+new Date).toString();
					"localStorage" == g || "globalStorage" == g ? h.jStorage_update = e : "userDataBehavior" == g && (p.setAttribute("jStorage_update", e), p.save("jStorage")), t()
				}
				function i() {
					if (h.jStorage) try {
						d = f.parse(String(h.jStorage))
					} catch (e) {
						h.jStorage = "{}"
					} else h.jStorage = "{}";
					y = h.jStorage ? String(h.jStorage).length : 0, d.__jstorage_meta || (d.__jstorage_meta = {}), d.__jstorage_meta.CRC32 || (d.__jstorage_meta.CRC32 = {})
				}
				function o() {
					if (d.__jstorage_meta.PubSub) {
						for (var e = +new Date - 2e3, t = 0, r = d.__jstorage_meta.PubSub.length; t < r; t++) if (d.__jstorage_meta.PubSub[t][0] <= e) {
							d.__jstorage_meta.PubSub.splice(t, d.__jstorage_meta.PubSub.length - t);
							break
						}
						d.__jstorage_meta.PubSub.length || delete d.__jstorage_meta.PubSub
					}
					try {
						h.jStorage = f.stringify(d), p && (p.setAttribute("jStorage", h.jStorage), p.save("jStorage")), y = h.jStorage ? String(h.jStorage).length : 0
					} catch (n) {}
				}
				function a(e) {
					if (!e || "string" != typeof e && "number" != typeof e) throw new TypeError("Key name must be string or numeric");
					if ("__jstorage_meta" == e) throw new TypeError("Reserved key name");
					return !0
				}
				function c() {
					var e, t, i, a, s = 1 / 0,
						u = !1,
						f = [];
					if (clearTimeout(l), d.__jstorage_meta && "object" == typeof d.__jstorage_meta.TTL) {
						e = +new Date, i = d.__jstorage_meta.TTL, a = d.__jstorage_meta.CRC32;
						for (t in i) i.hasOwnProperty(t) && (i[t] <= e ? (delete i[t], delete a[t], delete d[t], u = !0, f.push(t)) : i[t] < s && (s = i[t]));
						1 / 0 != s && (l = setTimeout(c, s - e)), u && (o(), n(), r(f, "deleted"))
					}
				}
				function s() {
					var e;
					if (d.__jstorage_meta.PubSub) {
						var t, r = w;
						for (e = d.__jstorage_meta.PubSub.length - 1; 0 <= e; e--) if (t = d.__jstorage_meta.PubSub[e], t[0] > w) {
							var r = t[0],
								n = t[1];
							if (t = t[2], b[n]) for (var i = 0, o = b[n].length; i < o; i++) b[n][i](n, f.parse(f.stringify(t)))
						}
						w = r
					}
				}
				var u, l, f = {
					parse: cQuery.parseJSON,
					stringify: cQuery.stringifyJSON
				},
					d = {
						__jstorage_meta: {
							CRC32: {}
						}
					},
					h = {
						jStorage: "{}"
					},
					p = null,
					y = 0,
					g = !1,
					m = {},
					v = !1,
					_ = 0,
					b = {},
					w = +new Date,
					Q = {
						isXML: function(e) {
							return !!(e = (e ? e.ownerDocument || e : 0).documentElement) && "HTML" !== e.nodeName
						},
						encode: function(e) {
							if (!this.isXML(e)) return !1;
							try {
								return (new XMLSerializer).serializeToString(e)
							} catch (t) {
								try {
									return e.xml
								} catch (r) {}
							}
							return !1
						},
						decode: function(e) {
							var t = "DOMParser" in window && (new DOMParser).parseFromString || window.ActiveXObject &&
							function(e) {
								var t = new ActiveXObject("Microsoft.XMLDOM");
								return t.async = "false", t.loadXML(e), t
							};
							return !!t && (e = t.call("DOMParser" in window && new DOMParser || window, e, "text/xml"), !! this.isXML(e) && e)
						}
					};
				u = {
					version: "0.4.3",
					set: function(e, t, n) {
						if (a(e), n = n || {}, "undefined" == typeof t) return this.deleteKey(e), t;
						if (Q.isXML(t)) t = {
							_is_xml: !0,
							xml: Q.encode(t)
						};
						else {
							if ("function" == typeof t) return;
							t && "object" == typeof t && (t = f.parse(f.stringify(t)))
						}
						d[e] = t;
						for (var i, o = d.__jstorage_meta.CRC32, c = f.stringify(t), s = c.length, u = 2538058380 ^ s, l = 0; 4 <= s;) i = 255 & c.charCodeAt(l) | (255 & c.charCodeAt(++l)) << 8 | (255 & c.charCodeAt(++l)) << 16 | (255 & c.charCodeAt(++l)) << 24, i = 1540483477 * (65535 & i) + ((1540483477 * (i >>> 16) & 65535) << 16), i ^= i >>> 24, i = 1540483477 * (65535 & i) + ((1540483477 * (i >>> 16) & 65535) << 16), u = 1540483477 * (65535 & u) + ((1540483477 * (u >>> 16) & 65535) << 16) ^ i, s -= 4, ++l;
						switch (s) {
						case 3:
							u ^= (255 & c.charCodeAt(l + 2)) << 16;
						case 2:
							u ^= (255 & c.charCodeAt(l + 1)) << 8;
						case 1:
							u ^= 255 & c.charCodeAt(l), u = 1540483477 * (65535 & u) + ((1540483477 * (u >>> 16) & 65535) << 16)
						}
						return u ^= u >>> 13, u = 1540483477 * (65535 & u) + ((1540483477 * (u >>> 16) & 65535) << 16), o[e] = "2." + ((u ^ u >>> 15) >>> 0), this.setTTL(e, n.TTL || 0), r(e, "updated"), t
					},
					get: function(e, t) {
						return a(e), e in d ? d[e] && "object" == typeof d[e] && d[e]._is_xml ? Q.decode(d[e].xml) : d[e] : "undefined" == typeof t ? null : t
					},
					deleteKey: function(e) {
						return a(e), e in d && (delete d[e], "object" == typeof d.__jstorage_meta.TTL && e in d.__jstorage_meta.TTL && delete d.__jstorage_meta.TTL[e], delete d.__jstorage_meta.CRC32[e], o(), n(), r(e, "deleted"), !0)
					},
					setTTL: function(e, t) {
						var r = +new Date;
						return a(e), t = Number(t) || 0, e in d && (d.__jstorage_meta.TTL || (d.__jstorage_meta.TTL = {}), 0 < t ? d.__jstorage_meta.TTL[e] = r + t : delete d.__jstorage_meta.TTL[e], o(), c(), n(), !0)
					},
					getTTL: function(e) {
						var t = +new Date;
						return a(e), e in d && d.__jstorage_meta.TTL && d.__jstorage_meta.TTL[e] ? (e = d.__jstorage_meta.TTL[e] - t) || 0 : 0
					},
					flush: function() {
						return d = {
							__jstorage_meta: {
								CRC32: {}
							}
						}, o(), n(), r(null, "flushed"), !0
					},
					storageObj: function() {
						function e() {}
						return e.prototype = d, new e
					},
					index: function() {
						var e, t = [];
						for (e in d) d.hasOwnProperty(e) && "__jstorage_meta" != e && t.push(e);
						return t
					},
					storageSize: function() {
						return y
					},
					currentBackend: function() {
						return g
					},
					storageAvailable: function() {
						return !!g
					},
					listenKeyChange: function(e, t) {
						a(e), m[e] || (m[e] = []), m[e].push(t)
					},
					stopListening: function(e, t) {
						if (a(e), m[e]) if (t) for (var r = m[e].length - 1; 0 <= r; r--) m[e][r] == t && m[e].splice(r, 1);
						else delete m[e]
					},
					subscribe: function(e, t) {
						if (e = (e || "").toString(), !e) throw new TypeError("Channel not defined");
						b[e] || (b[e] = []), b[e].push(t)
					},
					publish: function(e, t) {
						if (e = (e || "").toString(), !e) throw new TypeError("Channel not defined");
						d.__jstorage_meta || (d.__jstorage_meta = {}), d.__jstorage_meta.PubSub || (d.__jstorage_meta.PubSub = []), d.__jstorage_meta.PubSub.unshift([+new Date, e, t]), o(), n()
					},
					reInit: function() {
						e()
					}
				}, function() {
					var e = !1;
					if ("localStorage" in window) try {
						window.localStorage.setItem("_tmptest", "tmpval"), e = !0, window.localStorage.removeItem("_tmptest")
					} catch (r) {}
					if (e) try {
						window.localStorage && (h = window.localStorage, g = "localStorage", _ = h.jStorage_update)
					} catch (n) {} else if ("globalStorage" in window) try {
						window.globalStorage && (h = window.globalStorage[window.location.hostname], g = "globalStorage", _ = h.jStorage_update)
					} catch (o) {} else {
						if (p = document.createElement("link"), !p.addBehavior) return void(p = null);
						p.style.behavior = "url(#default#userData)", document.getElementsByTagName("head")[0].appendChild(p);
						try {
							p.load("jStorage")
						} catch (a) {
							p.setAttribute("jStorage", "{}"), p.save("jStorage"), p.load("jStorage")
						}
						e = "{}";
						try {
							e = p.getAttribute("jStorage")
						} catch (u) {}
						try {
							_ = p.getAttribute("jStorage_update")
						} catch (l) {}
						h.jStorage = e, g = "userDataBehavior"
					}
					i(), c(), "localStorage" == g || "globalStorage" == g ? "addEventListener" in window ? window.addEventListener("storage", t, !1) : document.attachEvent("onstorage", t) : "userDataBehavior" == g && setInterval(t, 1e3), s(), "addEventListener" in window && window.addEventListener("pageshow", function(e) {
						e.persisted && t()
					}, !1)
				}(), cQuery.storage = {
					set: function(e, t, r) {
						var n = u.set(e, t);
						return "number" == cQuery.type(r) && u.setTTL(e, 6e4 * r), n
					},
					get: u.get,
					remove: u.deleteKey,
					expire: function(e, t) {
						return u.setTTL(e, "number" == cQuery.type(t) ? 6e4 * t : 0)
					},
					clear: u.flush,
					keys: u.index,
					size: u.storageSize,
					isEnabled: u.storageAvailable()
				}
			}()
		} catch (f) {
			cQuery.storage = {
				set: function(e, t, r) {},
				get: function(e) {
					return null
				},
				remove: function(e) {},
				expire: function(e, t) {},
				clear: function() {},
				keys: function() {
					return []
				},
				size: function() {
					return 0
				},
				isEnabled: !1
			}, cQuery.fxError(f)
		}
		try {
			!
			function(e, t) {
				function r(e, t, r, n) {
					var i, o, a, c, s;
					if ((t ? t.ownerDocument || t : B) !== M && A(t), t = t || M, r = r || [], !e || "string" != typeof e) return r;
					if (1 !== (c = t.nodeType) && 9 !== c) return [];
					if (L && !n) {
						if (i = me.exec(e)) if (a = i[1]) {
							if (9 === c) {
								if (!(o = t.getElementById(a)) || !o.parentNode) return r;
								if (o.id === a) return r.push(o), r
							} else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && H(t, o) && o.id === a) return r.push(o), r
						} else {
							if (i[2]) return re.apply(r, t.getElementsByTagName(e)), r;
							if ((a = i[3]) && S.getElementsByClassName && t.getElementsByClassName) return re.apply(r, t.getElementsByClassName(a)), r
						}
						if (S.qsa && (!P || !P.test(e))) {
							if (o = i = R, a = t, s = 9 === c && e, 1 === c && "object" !== t.nodeName.toLowerCase()) {
								for (c = y(e), (i = t.getAttribute("id")) ? o = i.replace(be, "\\$&") : t.setAttribute("id", o), o = "[id='" + o + "'] ", a = c.length; a--;) c[a] = o + g(c[a]);
								a = fe.test(e) && t.parentNode || t, s = c.join(",")
							}
							if (s) try {
								return re.apply(r, a.querySelectorAll(s)), r
							} catch (u) {} finally {
								i || t.removeAttribute("id")
							}
						}
					}
					var l;
					e: {
						if (e = e.replace(se, "$1"), o = y(e), !n && 1 === o.length) {
							if (i = o[0] = o[0].slice(0), 2 < i.length && "ID" === (l = i[0]).type && S.getById && 9 === t.nodeType && L && T.relative[i[1].type]) {
								if (t = (T.find.ID(l.matches[0].replace(we, Qe), t) || [])[0], !t) {
									l = r;
									break e
								}
								e = e.slice(i.shift().value.length)
							}
							for (c = ye.needsContext.test(e) ? 0 : i.length; c-- && (l = i[c], !T.relative[a = l.type]);) if ((a = T.find[a]) && (n = a(l.matches[0].replace(we, Qe), fe.test(i[0].type) && t.parentNode || t))) {
								if (i.splice(c, 1), e = n.length && g(i), !e) {
									re.apply(r, n), l = r;
									break e
								}
								break
							}
						}
						O(e, o)(n, t, !L, r, fe.test(e)), l = r
					}
					return l
				}
				function n(e) {
					return ge.test(e + "")
				}
				function i() {
					function e(r, n) {
						return t.push(r += " ") > T.cacheLength && delete e[t.shift()], e[r] = n
					}
					var t = [];
					return e
				}
				function o(e) {
					return e[R] = !0, e
				}
				function a(e) {
					var t = M.createElement("div");
					try {
						return !!e(t)
					} catch (r) {
						return !1
					} finally {
						t.parentNode && t.parentNode.removeChild(t)
					}
				}
				function c(e, t, r) {
					e = e.split("|");
					var n, i = e.length;
					for (r = r ? null : t; i--;)(n = T.attrHandle[e[i]]) && n !== t || (T.attrHandle[e[i]] = r)
				}
				function s(e, t) {
					var r = e.getAttributeNode(t);
					return r && r.specified ? r.value : !0 === e[t] ? t.toLowerCase() : null
				}
				function u(e, t) {
					return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
				}
				function l(e) {
					if ("input" === e.nodeName.toLowerCase()) return e.defaultValue
				}
				function f(e, t) {
					var r = t && e,
						n = r && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || G) - (~e.sourceIndex || G);
					if (n) return n;
					if (r) for (; r = r.nextSibling;) if (r === t) return -1;
					return e ? 1 : -1
				}
				function d(e) {
					return function(t) {
						return "input" === t.nodeName.toLowerCase() && t.type === e
					}
				}
				function h(e) {
					return function(t) {
						var r = t.nodeName.toLowerCase();
						return ("input" === r || "button" === r) && t.type === e
					}
				}
				function p(e) {
					return o(function(t) {
						return t = +t, o(function(r, n) {
							for (var i, o = e([], r.length, t), a = o.length; a--;) r[i = o[a]] && (r[i] = !(n[i] = r[i]))
						})
					})
				}
				function y(e, t) {
					var n, i, o, a, c, s, u;
					if (c = q[e + " "]) return t ? 0 : c.slice(0);
					for (c = e, s = [], u = T.preFilter; c;) {
						n && !(i = ue.exec(c)) || (i && (c = c.slice(i[0].length) || c), s.push(o = [])), n = !1, (i = le.exec(c)) && (n = i.shift(), o.push({
							value: n,
							type: i[0].replace(se, " ")
						}), c = c.slice(n.length));
						for (a in T.filter)!(i = ye[a].exec(c)) || u[a] && !(i = u[a](i)) || (n = i.shift(), o.push({
							value: n,
							type: a,
							matches: i
						}), c = c.slice(n.length));
						if (!n) break
					}
					return t ? c.length : c ? r.error(e) : q(e, s).slice(0)
				}
				function g(e) {
					for (var t = 0, r = e.length, n = ""; t < r; t++) n += e[t].value;
					return n
				}
				function m(e, t, r) {
					var n = t.dir,
						i = r && "parentNode" === n,
						o = W++;
					return t.first ?
					function(t, r, o) {
						for (; t = t[n];) if (1 === t.nodeType || i) return e(t, r, o)
					} : function(t, r, a) {
						var c, s, u, l = K + " " + o;
						if (a) {
							for (; t = t[n];) if ((1 === t.nodeType || i) && e(t, r, a)) return !0
						} else for (; t = t[n];) if (1 === t.nodeType || i) if (u = t[R] || (t[R] = {}), (s = u[n]) && s[0] === l) {
							if (!0 === (c = s[1]) || c === k) return !0 === c
						} else if (s = u[n] = [l], s[1] = e(t, r, a) || k, !0 === s[1]) return !0
					}
				}
				function v(e) {
					return 1 < e.length ?
					function(t, r, n) {
						for (var i = e.length; i--;) if (!e[i](t, r, n)) return !1;
						return !0
					} : e[0]
				}
				function _(e, t, r, n, i) {
					for (var o, a = [], c = 0, s = e.length, u = null != t; c < s; c++)(o = e[c]) && (r && !r(o, n, i) || (a.push(o), u && t.push(c)));
					return a
				}
				function b(e, t, n, i, a, c) {
					return i && !i[R] && (i = b(i)), a && !a[R] && (a = b(a, c)), o(function(o, c, s, u) {
						var l, f, d, h = [],
							p = [],
							y = c.length;
						if (!(d = o)) {
							d = t || "*";
							for (var g = s.nodeType ? [s] : s, m = [], v = 0, b = g.length; v < b; v++) r(d, g[v], m);
							d = m
						}
						if (d = !e || !o && t ? d : _(d, h, e, s, u), g = n ? a || (o ? e : y || i) ? [] : c : d, n && n(d, g, s, u), i) for (l = _(g, p), i(l, [], s, u), s = l.length; s--;)(f = l[s]) && (g[p[s]] = !(d[p[s]] = f));
						if (o) {
							if (a || e) {
								if (a) {
									for (l = [], s = g.length; s--;)(f = g[s]) && l.push(d[s] = f);
									a(null, g = [], l, u)
								}
								for (s = g.length; s--;)(f = g[s]) && -1 < (l = a ? ie.call(o, f) : h[s]) && (o[l] = !(c[l] = f))
							}
						} else g = _(g === c ? g.splice(y, g.length) : g), a ? a(null, c, g, u) : re.apply(c, g)
					})
				}
				function w(e) {
					var t, r, n, i = e.length,
						o = T.relative[e[0].type];
					r = o || T.relative[" "];
					for (var a = o ? 1 : 0, c = m(function(e) {
						return e === t
					}, r, !0), s = m(function(e) {
						return -1 < ie.call(t, e)
					}, r, !0), u = [function(e, r, n) {
						return !o && (n || r !== D) || ((t = r).nodeType ? c(e, r, n) : s(e, r, n))
					}]; a < i; a++) if (r = T.relative[e[a].type]) u = [m(v(u), r)];
					else {
						if (r = T.filter[e[a].type].apply(null, e[a].matches), r[R]) {
							for (n = ++a; n < i && !T.relative[e[n].type]; n++);
							return b(1 < a && v(u), 1 < a && g(e.slice(0, a - 1).concat({
								value: " " === e[a - 2].type ? "*" : ""
							})).replace(se, "$1"), r, a < n && w(e.slice(a, n)), n < i && w(e = e.slice(n)), n < i && g(e))
						}
						u.push(r)
					}
					return v(u)
				}
				function Q(e, t) {
					var n = 0,
						i = 0 < t.length,
						a = 0 < e.length,
						c = function(o, c, s, u, l) {
							var f, d, h = [],
								p = 0,
								y = "0",
								g = o && [],
								m = null != l,
								v = D,
								b = o || a && T.find.TAG("*", l && c.parentNode || c),
								w = K += null == v ? 1 : Math.random() || .1;
							for (m && (D = c !== M && c, k = n); null != (l = b[y]); y++) {
								if (a && l) {
									for (f = 0; d = e[f++];) if (d(l, c, s)) {
										u.push(l);
										break
									}
									m && (K = w, k = ++n)
								}
								i && ((l = !d && l) && p--, o && g.push(l))
							}
							if (p += y, i && y !== p) {
								for (f = 0; d = t[f++];) d(g, h, c, s);
								if (o) {
									if (0 < p) for (; y--;)!g[y] && !h[y] && (h[y] = ee.call(u));
									h = _(h)
								}
								re.apply(u, h), m && !o && 0 < h.length && 1 < p + t.length && r.uniqueSort(u)
							}
							return m && (K = w, D = v), g
						};
					return i ? o(c) : c
				}
				function x() {}
				var E, S, k, T, C, j, O, D, N, A, M, I, L, P, $, F, H, R = "sizzle" + -new Date,
					B = e.document,
					K = 0,
					W = 0,
					X = i(),
					q = i(),
					U = i(),
					Y = !1,
					J = function() {
						return 0
					},
					z = typeof t,
					G = -2147483648,
					V = {}.hasOwnProperty,
					Z = [],
					ee = Z.pop,
					te = Z.push,
					re = Z.push,
					ne = Z.slice,
					ie = Z.indexOf ||
				function(e) {
					for (var t = 0, r = this.length; t < r; t++) if (this[t] === e) return t;
					return -1
				}, oe = "(?:\\\\.|[\\w-]|[^\-\ ])+".replace("w", "w#"), ae = "\\[[\ \\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\-\ ])+)[\ \\t\\r\\n\\f]*(?:([*^$|!~]?=)[\ \\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + oe + ")|)|)[\ \\t\\r\\n\\f]*\\]", ce = ":((?:\\\\.|[\\w-]|[^\-\ ])+)(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ae.replace(3, 8) + ")*)|.*)\\)|)", se = RegExp("^[\ \\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\ \\t\\r\\n\\f]+$", "g"), ue = /^[ \t\r\n\f]*,[ \t\r\n\f]*/, le = /^[ \t\r\n\f]*([>+~]|[ \t\r\n\f])[ \t\r\n\f]*/, fe = /[ \t\r\n\f]*[+~]/, de = RegExp("=[\ \\t\\r\\n\\f]*([^\\]'\"]*)[\ \\t\\r\\n\\f]*\\]", "g"), he = RegExp(ce), pe = RegExp("^" + oe + "$"), ye = {
					ID: /^#((?:\\.|[\w-]|[^- ])+)/,
					CLASS: /^\.((?:\\.|[\w-]|[^- ])+)/,
					TAG: RegExp("^(" + "(?:\\\\.|[\\w-]|[^\-\ ])+".replace("w", "w*") + ")"),
					ATTR: RegExp("^" + ae),
					PSEUDO: RegExp("^" + ce),
					CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\ \\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\ \\t\\r\\n\\f]*(?:([+-]|)[\ \\t\\r\\n\\f]*(\\d+)|))[\ \\t\\r\\n\\f]*\\)|)", "i"),
					bool: RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"),
					needsContext: RegExp("^[\ \\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\ \\t\\r\\n\\f]*((?:-\\d)?\\d*)[\ \\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
				}, ge = /^[^{]+\{\s*\[native \w/, me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ve = /^(?:input|select|textarea|button)$/i, _e = /^h\d$/i, be = /'|\\/g, we = RegExp("\\\\([\\da-f]{1,6}[\ \\t\\r\\n\\f]?|([\ \\t\\r\\n\\f])|.)", "ig"), Qe = function(e, t, r) {
					return e = "0x" + t - 65536, e !== e || r ? t : 0 > e ? String.fromCharCode(e + 65536) : String.fromCharCode(e >> 10 | 55296, 1023 & e | 56320)
				};
				try {
					re.apply(Z = ne.call(B.childNodes), B.childNodes), Z[B.childNodes.length].nodeType
				} catch (xe) {
					re = {
						apply: Z.length ?
						function(e, t) {
							te.apply(e, ne.call(t))
						} : function(e, t) {
							for (var r = e.length, n = 0; e[r++] = t[n++];);
							e.length = r - 1
						}
					}
				}
				j = r.isXML = function(e) {
					return !!(e = e && (e.ownerDocument || e).documentElement) && "HTML" !== e.nodeName
				}, S = r.support = {}, A = r.setDocument = function(e) {
					var t = e ? e.ownerDocument || e : B;
					return t !== M && 9 === t.nodeType && t.documentElement ? (M = t, I = t.documentElement, L = !j(t), S.attributes = a(function(e) {
						return e.innerHTML = "<a href='#'></a>", c("type|href|height|width", u, "#" === e.firstChild.getAttribute("href")), c("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", s, null == e.getAttribute("disabled")), e.className = "i", !e.getAttribute("className")
					}), S.input = a(function(e) {
						return e.innerHTML = "<input>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
					}), c("value", l, S.attributes && S.input), S.getElementsByTagName = a(function(e) {
						return e.appendChild(t.createComment("")), !e.getElementsByTagName("*").length
					}), S.getElementsByClassName = a(function(e) {
						return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
					}), S.getById = a(function(e) {
						return I.appendChild(e).id = R, !t.getElementsByName || !t.getElementsByName(R).length
					}), S.getById ? (T.find.ID = function(e, t) {
						if (typeof t.getElementById !== z && L) {
							var r = t.getElementById(e);
							return r && r.parentNode ? [r] : []
						}
					}, T.filter.ID = function(e) {
						var t = e.replace(we, Qe);
						return function(e) {
							return e.getAttribute("id") === t
						}
					}) : (delete T.find.ID, T.filter.ID = function(e) {
						var t = e.replace(we, Qe);
						return function(e) {
							return (e = typeof e.getAttributeNode !== z && e.getAttributeNode("id")) && e.value === t
						}
					}), T.find.TAG = S.getElementsByTagName ?
					function(e, t) {
						if (typeof t.getElementsByTagName !== z) return t.getElementsByTagName(e)
					} : function(e, t) {
						var r, n = [],
							i = 0,
							o = t.getElementsByTagName(e);
						if ("*" === e) {
							for (; r = o[i++];) 1 === r.nodeType && n.push(r);
							return n
						}
						return o
					}, T.find.CLASS = S.getElementsByClassName &&
					function(e, t) {
						if (typeof t.getElementsByClassName !== z && L) return t.getElementsByClassName(e)
					}, $ = [], P = [], (S.qsa = n(t.querySelectorAll)) && (a(function(e) {
						e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || P.push("\\[[\ \\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)"), e.querySelectorAll(":checked").length || P.push(":checked")
					}), a(function(e) {
						var r = t.createElement("input");
						r.setAttribute("type", "hidden"), e.appendChild(r).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && P.push("[*^$]=[\ \\t\\r\\n\\f]*(?:''|\"\")"), e.querySelectorAll(":enabled").length || P.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), P.push(",.*:")
					})), (S.matchesSelector = n(F = I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && a(function(e) {
						S.disconnectedMatch = F.call(e, "div"), F.call(e, "[s!='']:x"), $.push("!=", ce)
					}), P = P.length && RegExp(P.join("|")), $ = $.length && RegExp($.join("|")), H = n(I.contains) || I.compareDocumentPosition ?
					function(e, t) {
						var r = 9 === e.nodeType ? e.documentElement : e,
							n = t && t.parentNode;
						return e === n || !(!n || 1 !== n.nodeType || !(r.contains ? r.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
					} : function(e, t) {
						if (t) for (; t = t.parentNode;) if (t === e) return !0;
						return !1
					}, S.sortDetached = a(function(e) {
						return 1 & e.compareDocumentPosition(t.createElement("div"))
					}), J = I.compareDocumentPosition ?
					function(e, r) {
						if (e === r) return Y = !0, 0;
						var n = r.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(r);
						return n ? 1 & n || !S.sortDetached && r.compareDocumentPosition(e) === n ? e === t || H(B, e) ? -1 : r === t || H(B, r) ? 1 : N ? ie.call(N, e) - ie.call(N, r) : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
					} : function(e, r) {
						var n, i = 0;
						n = e.parentNode;
						var o = r.parentNode,
							a = [e],
							c = [r];
						if (e === r) return Y = !0, 0;
						if (!n || !o) return e === t ? -1 : r === t ? 1 : n ? -1 : o ? 1 : N ? ie.call(N, e) - ie.call(N, r) : 0;
						if (n === o) return f(e, r);
						for (n = e; n = n.parentNode;) a.unshift(n);
						for (n = r; n = n.parentNode;) c.unshift(n);
						for (; a[i] === c[i];) i++;
						return i ? f(a[i], c[i]) : a[i] === B ? -1 : c[i] === B ? 1 : 0
					}, t) : M
				}, r.matches = function(e, t) {
					return r(e, null, null, t)
				}, r.matchesSelector = function(e, t) {
					if ((e.ownerDocument || e) !== M && A(e), t = t.replace(de, "='$1']"), S.matchesSelector && L && (!$ || !$.test(t)) && (!P || !P.test(t))) try {
						var n = F.call(e, t);
						if (n || S.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
					} catch (i) {}
					return 0 < r(t, M, null, [e]).length
				}, r.contains = function(e, t) {
					return (e.ownerDocument || e) !== M && A(e), H(e, t)
				}, r.attr = function(e, r) {
					(e.ownerDocument || e) !== M && A(e);
					var n = T.attrHandle[r.toLowerCase()],
						n = n && V.call(T.attrHandle, r.toLowerCase()) ? n(e, r, !L) : t;
					return n === t ? S.attributes || !L ? e.getAttribute(r) : (n = e.getAttributeNode(r)) && n.specified ? n.value : null : n
				}, r.error = function(e) {
					throw Error("Syntax error, unrecognized expression: " + e)
				}, r.uniqueSort = function(e) {
					var t, r = [],
						n = 0,
						i = 0;
					if (Y = !S.detectDuplicates, N = !S.sortStable && e.slice(0), e.sort(J), Y) {
						for (; t = e[i++];) t === e[i] && (n = r.push(i));
						for (; n--;) e.splice(r[n], 1)
					}
					return e
				}, C = r.getText = function(e) {
					var t, r = "",
						n = 0;
					if (t = e.nodeType) {
						if (1 === t || 9 === t || 11 === t) {
							if ("string" == typeof e.textContent) return e.textContent;
							for (e = e.firstChild; e; e = e.nextSibling) r += C(e)
						} else if (3 === t || 4 === t) return e.nodeValue
					} else for (; t = e[n]; n++) r += C(t);
					return r
				}, T = r.selectors = {
					cacheLength: 50,
					createPseudo: o,
					match: ye,
					attrHandle: {},
					find: {},
					relative: {
						">": {
							dir: "parentNode",
							first: !0
						},
						" ": {
							dir: "parentNode"
						},
						"+": {
							dir: "previousSibling",
							first: !0
						},
						"~": {
							dir: "previousSibling"
						}
					},
					preFilter: {
						ATTR: function(e) {
							return e[1] = e[1].replace(we, Qe), e[3] = (e[4] || e[5] || "").replace(we, Qe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
						},
						CHILD: function(e) {
							return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || r.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && r.error(e[0]), e
						},
						PSEUDO: function(e) {
							var r, n = !e[5] && e[2];
							return ye.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : n && he.test(n) && (r = y(n, !0)) && (r = n.indexOf(")", n.length - r) - n.length) && (e[0] = e[0].slice(0, r), e[2] = n.slice(0, r)), e.slice(0, 3))
						}
					},
					filter: {
						TAG: function(e) {
							var t = e.replace(we, Qe).toLowerCase();
							return "*" === e ?
							function() {
								return !0
							} : function(e) {
								return e.nodeName && e.nodeName.toLowerCase() === t
							}
						},
						CLASS: function(e) {
							var t = X[e + " "];
							return t || (t = RegExp("(^|[\ \\t\\r\\n\\f])" + e + "([\ \\t\\r\\n\\f]|$)")) && X(e, function(e) {
								return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== z && e.getAttribute("class") || "")
							})
						},
						ATTR: function(e, t, n) {
							return function(i) {
								return i = r.attr(i, e), null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && -1 < i.indexOf(n) : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? -1 < (" " + i + " ").indexOf(n) : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
							}
						},
						CHILD: function(e, t, r, n, i) {
							var o = "nth" !== e.slice(0, 3),
								a = "last" !== e.slice(-4),
								c = "of-type" === t;
							return 1 === n && 0 === i ?
							function(e) {
								return !!e.parentNode
							} : function(t, r, s) {
								var u, l, f, d, h;
								r = o !== a ? "nextSibling" : "previousSibling";
								var p = t.parentNode,
									y = c && t.nodeName.toLowerCase();
								if (s = !s && !c, p) {
									if (o) {
										for (; r;) {
											for (l = t; l = l[r];) if (c ? l.nodeName.toLowerCase() === y : 1 === l.nodeType) return !1;
											h = r = "only" === e && !h && "nextSibling"
										}
										return !0
									}
									if (h = [a ? p.firstChild : p.lastChild], a && s) {
										for (s = p[R] || (p[R] = {}), u = s[e] || [], d = u[0] === K && u[1], f = u[0] === K && u[2], l = d && p.childNodes[d]; l = ++d && l && l[r] || (f = d = 0) || h.pop();) if (1 === l.nodeType && ++f && l === t) {
											s[e] = [K, d, f];
											break
										}
									} else if (s && (u = (t[R] || (t[R] = {}))[e]) && u[0] === K) f = u[1];
									else for (;
									(l = ++d && l && l[r] || (f = d = 0) || h.pop()) && ((c ? l.nodeName.toLowerCase() !== y : 1 !== l.nodeType) || !++f || (s && ((l[R] || (l[R] = {}))[e] = [K, f]), l !== t)););
									return f -= i, f === n || 0 === f % n && 0 <= f / n
								}
							}
						},
						PSEUDO: function(e, t) {
							var n, i = T.pseudos[e] || T.setFilters[e.toLowerCase()] || r.error("unsupported pseudo: " + e);
							return i[R] ? i(t) : 1 < i.length ? (n = [e, e, "", t], T.setFilters.hasOwnProperty(e.toLowerCase()) ? o(function(e, r) {
								for (var n, o = i(e, t), a = o.length; a--;) n = ie.call(e, o[a]), e[n] = !(r[n] = o[a])
							}) : function(e) {
								return i(e, 0, n)
							}) : i
						}
					},
					pseudos: {
						not: o(function(e) {
							var t = [],
								r = [],
								n = O(e.replace(se, "$1"));
							return n[R] ? o(function(e, t, r, i) {
								i = n(e, null, i, []);
								for (var o = e.length; o--;)(r = i[o]) && (e[o] = !(t[o] = r))
							}) : function(e, i, o) {
								return t[0] = e, n(t, null, o, r), !r.pop()
							}
						}),
						has: o(function(e) {
							return function(t) {
								return 0 < r(e, t).length
							}
						}),
						contains: o(function(e) {
							return function(t) {
								return -1 < (t.textContent || t.innerText || C(t)).indexOf(e)
							}
						}),
						lang: o(function(e) {
							return pe.test(e || "") || r.error("unsupported lang: " + e), e = e.replace(we, Qe).toLowerCase(), function(t) {
								var r;
								do
								if (r = L ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return r = r.toLowerCase(), r === e || 0 === r.indexOf(e + "-");
								while ((t = t.parentNode) && 1 === t.nodeType);
								return !1
							}
						}),
						target: function(t) {
							var r = e.location && e.location.hash;
							return r && r.slice(1) === t.id
						},
						root: function(e) {
							return e === I
						},
						focus: function(e) {
							return e === M.activeElement && (!M.hasFocus || M.hasFocus()) && !(!e.type && !e.href && !~e.tabIndex)
						},
						enabled: function(e) {
							return !1 === e.disabled
						},
						disabled: function(e) {
							return !0 === e.disabled
						},
						checked: function(e) {
							var t = e.nodeName.toLowerCase();
							return "input" === t && !! e.checked || "option" === t && !! e.selected
						},
						selected: function(e) {
							return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
						},
						empty: function(e) {
							for (e = e.firstChild; e; e = e.nextSibling) if ("@" < e.nodeName || 3 === e.nodeType || 4 === e.nodeType) return !1;
							return !0
						},
						parent: function(e) {
							return !T.pseudos.empty(e)
						},
						header: function(e) {
							return _e.test(e.nodeName)
						},
						input: function(e) {
							return ve.test(e.nodeName)
						},
						button: function(e) {
							var t = e.nodeName.toLowerCase();
							return "input" === t && "button" === e.type || "button" === t
						},
						text: function(e) {
							var t;
							return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
						},
						first: p(function() {
							return [0]
						}),
						last: p(function(e, t) {
							return [t - 1]
						}),
						eq: p(function(e, t, r) {
							return [0 > r ? r + t : r]
						}),
						even: p(function(e, t) {
							for (var r = 0; r < t; r += 2) e.push(r);
							return e
						}),
						odd: p(function(e, t) {
							for (var r = 1; r < t; r += 2) e.push(r);
							return e
						}),
						lt: p(function(e, t, r) {
							for (t = 0 > r ? r + t : r; 0 <= --t;) e.push(t);
							return e
						}),
						gt: p(function(e, t, r) {
							for (r = 0 > r ? r + t : r; ++r < t;) e.push(r);
							return e
						})
					}
				};
				for (E in {
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
				}) T.pseudos[E] = d(E);
				for (E in {
					submit: !0,
					reset: !0
				}) T.pseudos[E] = h(E);
				O = r.compile = function(e, t) {
					var r, n = [],
						i = [],
						o = U[e + " "];
					if (!o) {
						for (t || (t = y(e)), r = t.length; r--;) o = w(t[r]), o[R] ? n.push(o) : i.push(o);
						o = U(e, Q(i, n))
					}
					return o
				}, T.pseudos.nth = T.pseudos.eq, x.prototype = T.filters = T.pseudos, T.setFilters = new x, S.sortStable = R.split("").sort(J).join("") === R, A(), [0, 0].sort(J), S.detectDuplicates = Y, "function" == typeof define && define.amd ? define(function() {
					return r
				}) : e.Sizzle = r
			}(window)
		} catch (f) {
			cQuery.fxError(f)
		}
		cQuery.event = {
			_opt: function() {
				return {
					arguments: [],
					priority: 50
				}
			},
			_evts: {},
			_cEvts: {
				ready: {
					el: document.documentElement
				}
			},
			_sort: function(e) {
				e.sort(function(e, t) {
					var r = e.opt.priority,
						n = t.opt.priority;
					return r > n ? 1 : r == n ? 0 : -1
				})
			},
			add: function(e, t, r, n) {
				if ("array" === cQuery.type(e) || cQuery.isCDom(e) || (e = [e]), !(e.length < 1)) {
					if ("array" !== cQuery.type(t) && (t = [t]), this._fixTypes(t), "function" !== cQuery.type(r)) return void cQuery.logicError("event.add", "handler is not a function", {
						els: e,
						types: t,
						handler: r,
						opt: n
					});
					var i, o, a, c, s, u, l, f;
					n = cQuery.extend(!0, this._opt(), n);
					for (var d = 0, h = e.length; d < h; d++) {
						i = e[d];
						for (var p = 0, y = t.length; p < y; p++) {
							if (o = t[p], a = this._cEvts[o], a && (a.el && (i = a.el), a.type && (o = a.type)), c = cQuery.uid(i), s = this._evts[c] = this._evts[c] || {}, l = {
								opt: n,
								handler: r
							}, s[o]) u = s[o], u.push(l);
							else if (u = s[o] = [l], i.addEventListener) i.addEventListener(o, this._run, !1);
							else {
								var g = i["on" + o];
								"function" == cQuery.type(g) && u.unshift({
									opt: this._opt(),
									handler: g
								}), i["on" + o] = this._run
							}
							this._sort(u), i === window && "load" == o && cQuery.isLoaded && setTimeout(function() {
								f = cQuery.event.create(i, o), r.apply(i, [f].concat(n.arguments || []))
							}, 1)
						}
					}
				}
			},
			remove: function(e, t, r) {
				"array" === cQuery.type(e) || cQuery.isCDom(e) || (e = [e]), "array" !== cQuery.type(t) && (t = [t]), this._fixTypes(t);
				var n, i, o, a, c, s, u;
				e: for (var l = 0, f = e.length; l < f; l++) {
					n = e[l];
					for (var d = 0, h = t.length; d < h; d++) {
						if (i = t[d], o = this._cEvts[i], o && (o.el && (n = o.el), o.type && (i = o.type)), a = n._uid_, !a) continue e;
						if (c = this._evts[a], !c) continue e;
						if (s = c[i]) {
							for (u = s.length; u--;) s[u].handler == r && s.splice(u, 1);
							s.length || (n.removeEventListener ? n.removeEventListener(i, this._run, !1) : n["on" + i] = null, delete c[i])
						}
					}
				}
			},
			trigger: function(e, t, r) {
				"array" === cQuery.type(e) || cQuery.isCDom(e) || (e = [e]), "array" !== cQuery.type(t) && (t = [t]), this._fixTypes(t);
				for (var n, i, o, a, c = 0, s = e.length; c < s; c++) {
					n = e[c];
					for (var u = 0, l = t.length; u < l; u++) i = t[u], o = this._cEvts[i], o && (o.el && (n = o.el), o.type && (i = o.type)), a = this.create(n, i), this._run.call(n, a, r)
				}
			},
			create: function(e, t) {
				var r = null;
				if (document.createEvent) {
					r = document.createEvent("HTMLEvents"), r.initEvent(t, !0, !0);
					var n = 1;
					try {
						cQuery.extend(r, {
							target: e
						}), e == r.target && (n = 0)
					} catch (i) {}
					if (n) {
						r.skip = !0;
						try {
							e.dispatchEvent(r)
						} catch (i) {}
						try {
							delete r.skip
						} catch (o) {
							r.skip = !1
						}
					}
				} else if (document.createEventObject) {
					r = document.createEventObject();
					var n = 1;
					try {
						cQuery.extend(r, {
							srcElement: e,
							type: t
						}), e == r.srcElement && (n = 0)
					} catch (i) {}
					if (n) {
						r.skip = !0;
						try {
							e.fireEvent("on" + t, r)
						} catch (i) {}
						try {
							delete r.skip
						} catch (i) {
							r.skip = !1
						}
					}
				}
				return r
			},
			debug: function(e) {
				"array" === cQuery.type(e) || cQuery.isCDom(e) || (e = [e]);
				var t, r;
				cQuery.debug("-------------------- event --------------------");
				for (var n = 0, i = e.length; n < i; n++) t = e[n], r = t._uid_, eld = r ? this._evts[r] : null, cQuery.debug("[" + n + "]", t, eld || "null")
			},
			clone: function(e, t, r) {
				"array" === cQuery.type(t) || cQuery.isCDom(t) || (t = [t]);
				var n = e._uid_;
				if (n) {
					var i = this._evts[n];
					if (i) for (var o, a, c, s = 0, u = t.length; s < u; s++) if (o = t[s], o != e) {
						if (a = cQuery.uid(o), c = this._evts[a] = this._evts[a] || {}, r) {
							c = this._evts[a] = cQuery.extend(!0, c, i);
							for (var l in c) this._sort(c[l])
						} else {
							for (var l in c) c.hasOwnProperty(l) && (o.removeEventListener ? o.removeEventListener(l, this._run, !1) : o["on" + l] = null);
							c = this._evts[a] = cQuery.copy(i)
						}
						for (var l in c) if (c.hasOwnProperty(l) && !(r && l in i)) if (o.addEventListener) o.addEventListener(l, this._run, !1);
						else {
							var f = o["on" + l];
							"function" == cQuery.type(f) && typed.unshift({
								opt: this._opt(),
								handler: f
							}), o["on" + l] = this._run
						}
					}
				}
			},
			_type: function() {
				var e = {};
				return cQuery.browser.isIOS && (e.beforeunload = "pagehide"), e
			}(),
			_fixTypes: function(e) {
				for (var t = 0, r = e.length; t < r; t++) e[t] = this._type.hasOwnProperty(e[t]) ? this._type[e[t]] : e[t]
			},
			_run: function(e, t) {
				function r() {
					if (f < c.length) {
						s = c[f], cQuery.extend(s.opt, t);
						try {
							l = s.handler.apply(n, [e].concat(s.opt.arguments || [])), u === cQuery.undefined ? u = l : u !== !1 && (u = l)
						} catch (i) {
							cQuery.logicError(i, null, {
								skipThrow: h
							}), h || (h = !0)
						} finally {
							f++, r()
						}
					}
				}
				if (!e || !e.skip) {
					var n = this;
					if (!e) {
						var i = function() {
								switch (n.nodeType || -1) {
								case -1:
									return setInterval in n ? n : window;
								case 9:
									var e = n;
									break;
								default:
									var e = n.ownerDocument
								}
								return e.defaultView || e.parentWindow
							}();
						e = i.event
					}
					var o = cQuery.uid(this);
					if (o) {
						var a = cQuery.event._evts[o];
						if (a) {
							var c = cQuery.copy(a[e.type]);
							if (c) {
								e = cQuery.event.fixProperty(e, this), t = t || {};
								var s, u, l;
								if (cQuery.config && cQuery.config("allowDebug")) for (var f = 0, d = c.length; f < d; f++) s = c[f], cQuery.extend(s.opt, t), l = s.handler.apply(this, [e].concat(s.opt.arguments || [])), u === cQuery.undefined ? u = l : u !== !1 && (u = l);
								else {
									var f = 0,
										h = !1;
									r()
								}
								return u
							}
						}
					}
				}
			},
			fixProperty: function(e, t) {
				if (e.host = t, e.target || (e.target = e.srcElement || document), null !== e.target && 3 === e.target.nodeType && (e.target = e.target.parentNode), !e.relatedTarget && e.fromElement && (e.relatedTarget = e.fromElement === e.target ? e.toElement : e.fromElement), null == e.pageX && null != e.clientX) {
					var r = e.target.ownerDocument || document,
						n = r.documentElement,
						i = r.body;
					e.pageX = e.clientX + (n && n.scrollLeft || i && i.scrollLeft || 0) - (n && n.clientLeft || i && i.clientLeft || 0), e.pageY = e.clientY + (n && n.scrollTop || i && i.scrollTop || 0) - (n && n.clientTop || i && i.clientTop || 0)
				}
				return null != e.which || null == e.charCode && null == e.keyCode || (e.which = null != e.charCode ? e.charCode : e.keyCode), !e.metaKey && e.ctrlKey && (e.metaKey = e.ctrlKey), e.which || void 0 === e.button || (e.which = 1 & e.button ? 1 : 2 & e.button ? 3 : 4 & e.button ? 2 : 0), cQuery.extend(!1, e, this.fixMethod), e
			},
			fixMethod: {
				preventDefault: function() {
					this.returnValue = !1
				},
				stopPropagation: function() {
					this.cancelBubble = !0
				},
				stop: function() {
					this.preventDefault(), this.stopPropagation()
				}
			}
		}, cQuery.mod = {
			_mods: {},
			_instances: {},
			load: function(e, t, r) {
				var n = {},
					i = n[e] = {};
				i[t] = r, this.multiLoad(n)
			},
			multiLoad: function(e, t) {
				if (e) {
					var r, n, i, o, a, c, s = [],
						u = 0;
					for (r in e) if (e.hasOwnProperty(r)) {
						switch (i = e[r], o = this._mods[r], o || (o = this._mods[r] = {}), cQuery.type(i)) {
						case "string":
							a = i, i = {}, i[a] = null;
							break;
						case "array":
							a = i, i = {};
							for (var l = 0, f = a.length; l < f; l++) i[a[l]] = null;
							break;
						case "object":
							break;
						default:
							continue
						}
						for (n in i) if (a = i[n], c = o[n]) switch (c.status) {
						case "buffer":
							c.status = "loading", a && c.callback.push(a), cQuery.config("loadMultiMod") ? s[u++] = r + "-" + n : (u++, function(e) {
								cQuery.loader.js(cQuery.config("modPath") + r + "-" + n + ".js", {
									charset: "utf-8",
									onload: function() {
										u--, !u && t && t()
									}
								})
							}(c));
							break;
						case "loading":
							a && c.callback.push(a);
							break;
						case "loaded":
							a && a()
						} else c = o[n] = {
							name: r,
							version: n,
							status: "loading",
							callback: a ? [a] : []
						}, cQuery.config("loadMultiMod") ? s[u++] = r + "-" + n : (u++, function(e) {
							cQuery.loader.js(cQuery.config("modPath") + r + "-" + n + ".js", {
								charset: "utf-8",
								onload: function() {
									u--, !u && t && t()
								}
							})
						}(c))
					}
					u && cQuery.config("loadMultiMod") && (s.sort(), cQuery.loader.js(cQuery.config("modPath") + s.join("_") + ".js", {
						charset: "utf-8",
						onload: function() {
							t && t()
						}
					}))
				}
			},
			reg: function(e) {
				if (e) {
					var t = this._getModOpt(e.name, e.version, !0);
					t.status = "loaded", t.init = e.init, t.uninit = e.uninit, t.module = e.module, t.init && t.init();
					for (var r; r = t.callback.shift();) r();
					var n = this._getInstanceOpt(e.name, e.version);
					if (n) {
						var i, o, a;
						for (i in n) if (o = n[i].buffer) {
							for (delete n[i].buffer; r = o.shift();) switch (r.cmd) {
							case "new":
								a = this._getInstance.apply(this, r.args);
								break;
							case "get":
								a.get.apply(a, r.args);
								break;
							case "set":
								a.set.apply(a, r.args);
								break;
							case "method":
								a.method.apply(a, r.args)
							}
							n[i] = a
						}
					}
				}
			},
			_getModOpt: function(e, t, r) {
				r === cQuery.undefined && (r = cQuery.config("modBuffer"));
				var n = this._mods[e];
				if (!n) {
					if (!r) return null;
					n = this._mods[e] = {}
				}
				var i = n[t];
				if (!i) {
					if (!r) return null;
					i = n[t] = {
						name: e,
						version: t,
						status: "buffer",
						callback: []
					}
				}
				return i
			},
			_getInstanceOpt: function(e, t) {
				var r = this._instances[e];
				return r && t ? r[t] || null : r || null
			},
			debug: function(e) {
				"number" !== cQuery.type(e.length) && (e = [e]);
				var t, r;
				cQuery.debug("--------------------  mod  --------------------");
				for (var n = 0, i = e.length; n < i; n++) {
					t = e[n], r = t._uid_;
					var o, a, c, s, u = [],
						l = 0;
					if (r) for (o in this._instances) {
						c = this._instances[o];
						for (a in c) s = c[a], r in s && (u[l++] = s[r])
					}
					cQuery.debug("[" + n + "]", t, u.length ? u : "null")
				}
			},
			_destoryInstance: function(e) {
				var t;
				for (t in e) e.hasOwnProperty(t) && delete e[t]
			},
			unreg: function(e, t) {
				var r = this._getModOpt(e, t);
				if (r) {
					var n, i = this._getInstanceOpt(e, t);
					if (i) {
						var o, n;
						for (o in i) n = i[o], n.uninit();
						delete this._instances[e][t], cQuery.isEmptyObject(this._instances[e]) && delete this._instances[e]
					}
					r.uninit && r.uninit(), delete this._mods[e][t], cQuery.isEmptyObject(this._mods[e]) && delete this._mods[e]
				}
			},
			_getBufferInstance: function(e, t, r) {
				var n = {
					name: e,
					version: t,
					uid: r,
					buffer: [{
						cmd: "new",
						args: arguments
					}]
				};
				return n.get = function() {
					return this.buffer.push({
						cmd: "get",
						args: arguments
					}), null
				}, n.set = function() {
					return this.buffer.push({
						cmd: "set",
						args: arguments
					}), null
				}, n.method = function() {
					return this.buffer.push({
						cmd: "method",
						args: arguments
					}), null
				}, n.uninit = function() {
					return cQuery.mod._destoryInstance(this), delete cQuery.mod._instances[e][t][r], this
				}, n
			},
			_newByArray: function(e, t) {
				var r = cQuery.uid(),
					n = cQuery.uid();
				document.body;
				cQuery.tmp[r] = e, cQuery.tmp[n] = t;
				for (var i = [], o = 0, a = t.length; o < a; o++) i[o] = "args[" + o + "]";
				var c = new Function('var cls=cQuery.tmp["' + r + '"],args=cQuery.tmp["' + n + '"];var t=new cls(' + i.join(",") + ");return t;")();
				return delete cQuery.tmp[r], delete cQuery.tmp[n], c
			},
			_getInstance: function(e, t, r, n, i, o) {
				var a = this._getModOpt(e, t),
					c = Array.prototype.slice.call(arguments, 3, 5),
					s = this._newByArray(a.module, c),
					u = this._instances[e][t][r] || {};
				return cQuery.extend(u, {
					name: e,
					version: t,
					uid: r,
					buffer: !1,
					callback: "function" == cQuery.type(o) ? o : null
				}), u.set = function(r, n) {
					var i, o, a, c;
					switch (cQuery.type(r)) {
					case "string":
						if (!r || "_" == r[0]) return void cQuery.logicWarning("mod(" + e + ":" + t + ").set", "invalid property name " + r);
						i = {}, i[r] = n, c = Array.prototype.slice.call(arguments, 2);
						break;
					case "object":
						i = r, c = Array.prototype.slice.call(arguments, 1);
						break;
					default:
						return
					}
					for (o in i) {
						if ("_" != o[0]) return a = i[o], o in s ? o + "_set" in s ? "function" == cQuery.type(s[o + "_set"]) ? s[o + "_set"].apply(s, [a].concat(c)) : void cQuery.logicWarning("mod(" + e + ":" + t + ").set", o + "_set is not a function") : void cQuery.logicWarning("mod(" + e + ":" + t + ").set", "no " + o + " set permitions") : void cQuery.logicWarning("mod(" + e + ":" + t + ").set", o + " is not a public property");
						cQuery.logicWarning("mod(" + e + ":" + t + ").set", "invalid property name " + o)
					}
				}, u.get = function(e) {
					return "string" == cQuery.type(e) && e && "_" != e[0] ? e in s ? e + "_get" in s ? "function" == cQuery.type(s[e + "_get"]) ? s[e + "_get"].apply(s, Array.prototype.slice.call(arguments, 1)) : void cQuery.logicWarning("mod(" + a.name + ":" + a.version + ").get", e + "_set is not a function") : void cQuery.logicWarning("mod(" + a.name + ":" + a.version + ").get", "no " + e + " set permitions") : void cQuery.logicWarning("mod(" + a.name + ":" + a.version + ").get", e + " is not a public property") : void cQuery.logicWarning("mod(" + a.name + ":" + a.version + ").set", "invalid property name " + e)
				}, u.method = function(e) {
					if ("string" != cQuery.type(e) || !e || "_" == e[0]) return void cQuery.logicWarning("mod(" + a.name + ":" + a.version + ").method", "invalid method name " + property);
					if (e in s) {
						var t = s[e];
						return "function" == cQuery.type(t) ? t.apply(s, Array.prototype.slice.call(arguments, 1)) : void cQuery.logicWarning("mod(" + a.name + ":" + a.version + ").method", e + " is not a function")
					}
					return void cQuery.logicWarning("mod(" + a.name + ":" + a.version + ").method", e + " is not a public method")
				}, u.uninit = function() {
					return this.method("uninit"), cQuery.mod._destoryInstance(this), delete cQuery.mod._instances[e][t][r], this
				}, u.callback && u.callback.apply(u, c), u
			},
			instantiate: function(e, t, r) {
				var n = this._getModOpt(e, t);
				if (!n) return cQuery.logicWarning("mod(" + e + ":" + t + ").instantiate(" + r + ")", "module has not been loaded"), null;
				var i, o;
				return i = e in this._instances ? this._instances[e] : this._instances[e] = {}, i = t in i ? i[t] : i[t] = {}, r in i ? (cQuery.logicWarning("mod(" + e + ":" + t + ").instantiate(" + r + ")", "module has already been instantiated"), i[r]) : (o = "loaded" == n.status ? this._getInstance.apply(this, arguments) : this._getBufferInstance.apply(this, arguments), i[r] = o, o)
			}
		}, cQuery.ajax = function(e, t) {
			return cQuery.ajax.request(e, t)
		}, cQuery.extend(cQuery.ajax, {
			_xhrs: {},
			_uniques: {},
			_remove: function(e) {
				e in this._xhrs && delete this._xhrs[e], e in this._uniques && delete this._uniques[e]
			},
			_getXhr: function() {
				var e, t = ["MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
				try {
					e = new XMLHttpRequest
				} catch (r) {
					for (var n = 0; n < t.length; n++) try {
						e = new ActiveXObject(t[n]);
						break
					} catch (i) {}
				}
				return e ? e : (cQuery.fxError("ajax._getXhr", "create XMLHttpRequest object failed"), null)
			},
			request: function(e, t) {
				t = cQuery.extend({
					method: cQuery.AJAX_METHOD_GET,
					context: {},
					escape: !1,
					async: !0,
					cache: !1,
					header: {},
					unique: "",
					uniqueType: cQuery.AJAX_UNIQUETYPE_KEEPLAST,
					onsuccess: cQuery.COMMON_DONOTHING,
					onerror: cQuery.COMMON_DONOTHING,
					onabort: cQuery.COMMON_DONOTHING
				}, t);
				var r, n, i, a;
				switch (t.method) {
				case cQuery.AJAX_METHOD_GET:
				case cQuery.AJAX_METHOD_POST:
					break;
				default:
					return void cQuery.logicError("ajax", "invalid method")
				}
				if (!cQuery.isPlainObject(t.header)) return void cQuery.logicError("ajax", "invalid header");
				switch (cQuery.type(t.context)) {
				case "string":
					break;
				case "object":
					n = [], r = 0;
					for (i in t.context) if (t.context.hasOwnProperty(i)) {
						switch (a = t.context[i], cQuery.type(a)) {
						case "array":
						case "object":
							a = cQuery.stringifyJSON(a);
							break;
						case "date":
							a = a.toStdDateTimeString();
							break;
						default:
							a = a.toString()
						}
						t.escape && (a = escape(a)), n[r++] = encodeURIComponent(i) + "=" + encodeURIComponent(a)
					}
					t.context = n.join("&");
					break;
				default:
					return void cQuery.logicError("ajax", "invalid context")
				}
				if ("string" != cQuery.type(t.unique)) return void cQuery.logicError("ajax", "invalid unique");
				if ("function" != cQuery.type(t.onsuccess)) return void cQuery.logicError("ajax", "invalid onsuccess function");
				if ("function" != cQuery.type(t.onerror)) return void cQuery.logicError("ajax", "invalid onerror function");
				if ("function" != cQuery.type(t.onabort)) return void cQuery.logicError("ajax", "invalid onabort function");
				if (t.unique && t.unique in this._uniques) switch (t.uniqueType) {
				case cQuery.AJAX_UNIQUETYPE_KEEPFIRST:
					return void cQuery.log("ajax(" + t.unique + ")", "AJAX_UNIQUETYPE_KEEPFIRST");
				case cQuery.AJAX_UNIQUETYPE_KEEPLAST:
					cQuery.log("ajax(" + t.unique + ")", "AJAX_UNIQUETYPE_KEEPLAST"), this._uniques[t.unique].abort();
					break;
				default:
					return void cQuery.logicError("ajax", "invalid uniqueType")
				}
				var c = this._getXhr();
				if (!c) return null;
				var s = cQuery.uid();
				this._xhrs[s] = c, t.unique && (this._uniques[t.unique] = c), c.open(t.method, e || document.URL, t.async), "Content-Type" in t.header || c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8"), t.cache || "If-Modified-Since" in t.header || c.setRequestHeader("If-Modified-Since", "Thu, 01 Jan 1970 00:00:00 GMT");
				for (i in t.header) c.setRequestHeader(i, t.header[i]);
				c.onreadystatechange = function() {
					switch (c.readyState) {
					case 0:
						cQuery.ajax._remove(s), t.onabort.call(c);
						break;
					case 4:
						if (cQuery.ajax._remove(s), c.status >= 200 && c.status < 300 || 304 == c.status) {
							var e;
							e = o.ajax.test(c.getResponseHeader("content-type")) ? c.responseXML : c.responseText, t.onsuccess.call(c, c, e)
						} else t.onerror.call(c, c)
					}
				};
				try {
					c.send(t.context)
				} catch (u) {
					t.onerror.call(c, u)
				}
				return c
			},
			abort: function() {
				var e, t;
				for (e in this._xhrs) t = this._xhrs[e].abort(), this._remove(e)
			}
		}), cQuery.jsonp = function(e, t) {
			return cQuery.jsonp.request(e, t)
		}, cQuery.extend(cQuery.jsonp, {
			request: function(e, t) {
				return cQuery.loader.jsonp(e, t)
			}
		}), cQuery.fx = {
			_refs: {},
			add: function() {},
			remove: function() {},
			run: function() {}
		}, cQuery.tmpl = {
			_tmpls: {},
			_keyword1: ["break", "delete", "function", "return", "typeof", "case", "do", "if", "switch", "var", "catch", "else", "in", "this", "void", "continue", "false", "instanceof", "throw", "while", "debugger", "finally", "new", "true", "with", "default", "for", "null", "try"],
			_keyword2: ["abstract", "double", "goto", "native", "static", "boolean", "enum", "implements", "package", "super", "byte", "export", "import", "private", "synchronized", "char", "extends", "int", "protected", "throws", "class", "final", "interface", "public", "transient", "const", "float", "long", "short", "volatile"],
			_keywordHash: null,
			_stringMap: {
				"\r": "\\r",
				"\n": "\\n",
				'"': '\\"',
				"'": "\\'",
				"\\": "\\\\"
			},
			_init: function() {
				if (!this._keywordHash) {
					this._keywordHash = {};
					for (var e = 0, t = this._keyword1.length; e < t; e++) this._keywordHash[this._keyword1[e]] = !0;
					for (var e = 0, t = this._keyword2.length; e < t; e++) this._keywordHash[this._keyword2[e]] = !0
				}
			},
			_mapString: function(e) {
				var t = this._stringMap;
				return e.replace(o.tmplMapString, function(e) {
					return t[e] || e
				})
			},
			_parse: function(e) {
				var t, r = [],
					n = 0;
				e: for (;;) {
					if (t = "", e = e.replace(o.tmplParse, function(e, i) {
						return r[n++] = {
							type: "txt",
							value: e
						}, t = i, ""
					}), !t) {
						r[n++] = {
							type: "txt",
							value: e
						};
						break e
					}
					t: if ("${" == t) {
						for (var i = 1, a = 2, c = e.length; a < c; a++) {
							var s = e.substr(a, 1);
							switch (s) {
							case "{":
								i++;
								break;
							case "}":
								i--
							}
							if (!i) {
								r[n++] = {
									type: "vari",
									value: e.slice(0, a + 1)
								}, e = e.slice(a + 1);
								break t
							}
						}
						r[n++] = {
							type: "txt",
							value: e
						};
						break e
					}
					t: if ("{{" == t) {
						for (var i = 2, a = 2, c = e.length; a < c; a++) {
							var s = e.substr(a, 1);
							switch (s) {
							case "{":
								i++;
								break;
							case "}":
								i--
							}
							if (!i) {
								r[n++] = {
									type: "}" == e.substr(a - 1, 1) ? "cmd" : "txt",
									value: e.slice(0, a + 1)
								}, e = e.slice(a + 1);
								break t
							}
						}
						r[n++] = {
							type: "txt",
							value: e
						};
						break e
					}
				}
				return r
			},
			_checkVari: function() {
				for (var e, t = [], r = 0, n = this._keywordHash, i = 0, a = arguments.length; i < a; i++) e = arguments[i], e.replace(o.tmplCheckVari, function(e, i, o) {
					n.hasOwnProperty(o) || (t[r++] = "if (typeof " + o + '=="undefined") _undefined["' + o + '"]="";')
				});
				return t.join("")
			},
			_splitVari: function(e) {
				for (var t = [], r = 0, n = (e + " ,").split(""), i = [], o = 0, a = 0, c = n.length; a < c; a++) if ('"' != i[0] && "'" != i[0] || "\\" != n[a]) switch (n[a]) {
				case ",":
					i.length || (t[r++] = e.slice(o, a).trim(), o = a + 1);
					break;
				case "(":
				case "[":
				case "{":
					i.unshift(n[a]);
					break;
				case ")":
					"(" == i[0] && i.shift();
					break;
				case "]":
					"[" == i[0] && i.shift();
					break;
				case "}":
					"{" == i[0] && i.shift();
					break;
				case '"':
				case "'":
					i[0] == n[a] ? i.shift() : i.unshift(n[a])
				} else a++;
				return t
			},
			_makeFn: function(e) {
				var t = [],
					r = 0,
					n = [],
					i = 0;
				n[i++] = "var _o=[],_k=0,_undefined={};if(!$data){$data={};}if(!$opt){$opt={};}with(_undefined){with($opt){with($data){";
				for (var a = '_undefined["#tmp"]', c = 0, s = e.length; c < s; c++) switch (e[c].type) {
				case "txt":
					n[i++] = '_o[_k++]="' + this._mapString(e[c].value) + '";';
					break;
				case "vari":
					var u = e[c].value.match(o.tmplKey_$),
						l = this._checkVari(u[1]);
					n[i++] = l + "_o[_k++]=" + u[1] + ";";
					break;
				case "cmd":
					var f = e[c].value.match(o.tmplKey_cmd);
					if (!f) break;
					switch (f[1]) {
					case "if":
						var d = e[c].value.match(o.tmplKey_if);
						t[++r] = 1;
						var l = this._checkVari(d[1]);
						n[i++] = l + "try{" + a + "=" + d[1] + ";}catch($error){" + a + "=false;};if (" + a + "){";
						break;
					case "else":
						var d = e[c].value.match(o.tmplKey_else);
						if (d[1]) {
							t[r]++;
							var l = this._checkVari(d[2]);
							n[i++] = "}else{" + l + "try{" + a + "=" + d[2] + ";}catch($error){" + a + "=false;};if (" + a + "){"
						} else n[i++] = "}else{";
						break;
					case "/if":
						n[i++] = "}".repeat(t[r--]);
						break;
					case "loop":
						var d = e[c].value.match(o.tmplKey_loop),
							h = d[2] || "$index",
							p = d[4] || "$length",
							y = d[5],
							l = this._checkVari(y);
						switch (y = this._splitVari(y), y.length) {
						case 1:
							y = [0, y[0], 1];
							break;
						case 2:
							y = [y[0], y[1], 1]
						}
						var g;
						switch (y[2]) {
						case 0:
							y[2] = "", g = "<";
							break;
						case 1:
							y[2] = "++", g = "<";
							break;
						case -1:
							y[2] = "--", g = "<";
							break;
						default:
							if (y[2].toString().isFloat()) {
								var m = parseFloat(y[2], 10);
								g = m >= 0 ? "<" : ">", y[2] = "+=" + y[2]
							}
						}
						g ? n[i++] = l + "(function(){for (var " + h + "=" + y[0] + "," + p + "=" + y[1] + ";" + h + g + p + ";" + h + y[2] + "){" : n[i++] = l + "(function(){for (var " + h + "=" + y[0] + "," + p + "=" + y[1] + ",$step=" + y[2] + ";$step>=0^" + h + "<" + p + ";" + h + "+=$step){";
						break;
					case "/loop":
						n[i++] = "}})();";
						break;
					case "each":
						var d = e[c].value.match(o.tmplKey_each),
							h = d[2] || "$index",
							v = d[4] || "$value",
							p = d[6] || "$length",
							y = d[7],
							l = this._checkVari(y);
						n[i++] = l + "(function(){for (var " + h + "=0," + p + "=(" + y + ").length;" + h + "<" + p + ";" + h + "++){var " + v + "=" + y + "[" + h + "];with(" + v + "){";
						break;
					case "/each":
						n[i++] = "}}})();";
						break;
					case "enum":
						var d = e[c].value.match(o.tmplKey_enum),
							_ = d[2] || "$key",
							v = d[4] || "$value",
							y = d[5],
							l = this._checkVari(y);
						n[i++] = l + "(function(){for (var " + _ + " in " + y + "){var " + v + "=" + y + "[" + _ + "];with(" + v + "){";
						break;
					case "/enum":
						n[i++] = "}}})();";
						break;
					case "tmpl":
						var d = e[c].value.match(o.tmplKey_tmpl);
						d[3] = d[3] || "$data";
						var l = this._checkVari(d[1], d[3]);
						n[i++] = l + "_o[_k++]=cQuery.tmpl.render(" + d[1] + "," + d[3] + ");"
					}
				}
				n[i++] = '}}} return _o.join("");';
				var b = n.join("");
				try {
					var w = new Function("$data", "$opt", b)
				} catch (Q) {
					return cQuery.fxWarning("tmpl._makefn", "invalid source"), cQuery.logicError(Q), cQuery.log("tmpl._makefn", b), cQuery.COMMON_DONOTHING
				}
				return w
			},
			_makeFnStrict: function(e) {
				var t = [],
					r = 0,
					n = [],
					i = 0;
				n[i++] = "                var _o=[],_k=0;                if (!$data){                    $data={};                }                if (!$opt){                    $opt={};                }            ";
				for (var a = 0, c = e.length; a < c; a++) switch (e[a].type) {
				case "txt":
					n[i++] = '_o[_k++]="' + this._mapString(e[a].value) + '";';
					break;
				case "vari":
					var s = e[a].value.match(o.tmplKey_$);
					n[i++] = "_o[_k++]=" + s[1] + ";";
					break;
				case "cmd":
					var u = e[a].value.match(o.tmplKey_cmd);
					if (!u) break;
					switch (u[1]) {
					case "if":
						var l = e[a].value.match(o.tmplKey_if);
						t[++r] = 1, n[i++] = "if (" + l[1] + "){";
						break;
					case "else":
						var l = e[a].value.match(o.tmplKey_else);
						l[1] ? (t[r]++, n[i++] = "}else{ if (" + l[2] + "){") : n[i++] = "}else{";
						break;
					case "/if":
						n[i++] = "}".repeat(t[r--]);
						break;
					case "loop":
						var l = e[a].value.match(o.tmplKey_loop),
							f = l[2] || "$index",
							d = l[4] || "$length",
							h = l[5];
						switch (h = this._splitVari(h), h.length) {
						case 1:
							h = [0, h[0], 1];
						case 2:
							h = [h[0], h[1], 1]
						}
						var p;
						switch (h[2]) {
						case 0:
							h[2] = "", p = "<";
							break;
						case 1:
							h[2] = "++", p = "<";
							break;
						case -1:
							h[2] = "--", p = "<";
							break;
						default:
							if (h[2].toString().isFloat()) {
								var y = parseFloat(h[2], 10);
								p = y >= 0 ? "<" : ">", h[2] = "+=" + h[2]
							}
						}
						p ? n[i++] = "(function(){for (var " + f + "=" + h[0] + "," + d + "=" + h[1] + ";" + f + p + d + ";" + f + h[2] + "){" : n[i++] = "(function(){for (var " + f + "=" + h[0] + "," + d + "=" + h[1] + ",$step=" + h[2] + ";$step>=0^" + f + "<" + d + ";" + f + "+=$step){";
						break;
					case "/loop":
						n[i++] = "}})();";
						break;
					case "each":
						var l = e[a].value.match(o.tmplKey_each),
							f = l[2] || "$index",
							g = l[4] || "$value",
							d = l[6] || "$length",
							h = l[7];
						n[i++] = "(function(){for (var " + f + "=0," + d + "=(" + h + ").length;" + f + "<" + d + ";" + f + "++){var " + g + "=" + h + "[" + f + "];";
						break;
					case "/each":
						n[i++] = "}})();";
						break;
					case "enum":
						var l = e[a].value.match(o.tmplKey_enum),
							m = l[2] || "$key",
							g = l[4] || "$value",
							h = l[5];
						n[i++] = "(function(){for (var " + m + " in " + h + "){var " + g + "=" + h + "[" + m + "];";
						break;
					case "/enum":
						n[i++] = "}})();";
						break;
					case "tmpl":
						var l = e[a].value.match(o.tmplKey_tmpl);
						l[3] = l[3] || "$data", n[i++] = "_o[_k++]=cQuery.tmpl.renderStrict(" + l[1] + "," + l[3] + ");"
					}
				}
				n[i++] = 'return _o.join("");';
				var v = n.join("");
				try {
					var _ = new Function("$data", "$opt", v)
				} catch (b) {
					return cQuery.fxWarning("tmpl._makeFnStrict", "invalid source"), cQuery.logicError(b), cQuery.log("tmpl._makeFnStrict", v), cQuery.COMMON_DONOTHING
				}
				return _
			},
			_getCache: function(e) {
				var t = this._tmpls[e];
				return t || (t = this._tmpls[e] = {
					source: e
				}), t.tmpl || (t.tmpl = this._parse(e)), t
			},
			render: function(e, t, r) {
				this._init();
				var n = this._getCache(e);
				n.fn || (n.fn = this._makeFn(n.tmpl));
				try {
					var i = n.fn(t || {}, r || {})
				} catch (o) {
					return cQuery.logicError("tmpl.render", n.fn.toString().slice(0, 200) + "..."), ""
				}
				return i
			},
			renderStrict: function(e, t, r) {
				this._init();
				var n = this._getCache(e);
				n.fnStrict || (n.fnStrict = this._makeFnStrict(n.tmpl));
				try {
					var i = n.fnStrict(t || {}, r || {})
				} catch (o) {
					return cQuery.logicError("tmpl.renderStrict", n.fnStrict.toString().slice(0, 200) + "..."), ""
				}
				return i
			}
		}, cQuery.extend(cQuery, {
			ready: function(e, t) {
				cQuery.event.add(document.documentElement, "ready", e, t), cQuery.isReady && setTimeout(function() {
					var t = cQuery.event.create(document.documentElement, "ready");
					e.call(document.documentElement, t)
				}, 1)
			},
			_jQueryFn: [],
			jQueryReady: function(e) {
				if ("function" != cQuery.type(e)) return void cQuery.logicError("jQueryReady", "invalid function " + e);
				var r = this;
				switch (s) {
				case "":
					this._jQueryFn.push(e), s = "loading", cQuery.loader.js(cQuery.config("jQueryPath"), {
						onload: function() {
							s = "loaded", jQuery.extend(d);
							var e;
							for (window.$ = jQuery; e = r._jQueryFn.shift();) e(jQuery);
							window[cQuery.config("namespace")] = cQuery
						}
					});
					break;
				case "loading":
					this._jQueryFn.push(e);
					break;
				case "loaded":
					window.$ = jQuery, t(jQuery), window[cQuery.config("namespace")] = cQuery
				}
			},
			copy: function(e, t) {
				var r, n = cQuery.type(e);
				switch (n) {
				case "array":
					r = [];
					for (var i = 0, o = e.length; i < o; i++) try {
						r[i] = this.copy(e[i])
					} catch (a) {
						r[i] = null
					}
					break;
				case "object":
					if (e.nodeType || e.window == e) r = e;
					else if (cQuery.isCDom(e)) r = cQuery.fn.pushStack(e.toArray());
					else {
						r = {};
						for (var c in e) if (t || !e.hasOwnProperty || e.hasOwnProperty(c)) try {
							r[c] = this.copy(e[c])
						} catch (a) {
							r[c] = null
						}
					}
					break;
				default:
					r = e
				}
				return r
			},
			bindMethod: function(e, t, r) {
				"boolean" !== cQuery.type(e) && (r = t, t = e, e = !1);
				var n;
				r || (r = t);
				for (n in t) e && !t.hasOwnProperty(n) || "function" == cQuery.type(t[n]) && (t[n] = t[n].bind(r))
			},
			active: function() {
				return "activeElement" in document ? document.activeElement : c
			}
		});
		var d = {
			_pluginStatus: {},
			_pluginFn: {},
			plugin: function(e, t) {
				var r = d._pluginStatus[e],
					n = cQuery.type(t);
				if (!r || n) switch (r) {
				case "loading":
					d._pluginFn[e].push(t);
					break;
				case "loaded":
					t(jQuery);
					break;
				default:
					d._pluginStatus[e] = "loading", d._pluginFn[e] = "function" == n ? [t] : [], cQuery.loader.js(e, {
						onload: function() {
							d._pluginStatus[e] = "loaded";
							for (var t; t = d._pluginFn[e].shift();) t(jQuery)
						}
					})
				}
			}
		},
			h = function(e, t) {
				if (!e) return this;
				if (e == window || e.nodeType) return this[0] = e, this.length = 1, this;
				var r = cQuery.type(e);
				return "array" == r || "HTMLCollection" == r ? this.pushStack(e) : this.push.apply(this, Sizzle.apply(null, arguments))
			};
		cQuery.fn = h.prototype = {
			_v: Math.random(),
			length: 0,
			push: Array.prototype.push,
			pushStack: function(e) {
				var t = new h;
				return Array.prototype.push.apply(t, e), t
			},
			slice: function() {
				return this.pushStack(Array.prototype.slice.apply(this, arguments))
			},
			splice: function() {
				return this.pushStack(Array.prototype.splice.apply(this, arguments))
			},
			sort: Array.prototype.sort,
			find: function(e) {
				for (var t, r, n = [], i = 0, o = 0, a = this.length; o < a; o++) if (t = Sizzle(e, this[o])) {
					try {
						n[i] = Array.prototype.slice.call(t, 0)
					} catch (c) {
						r = [];
						for (var s = 0, u = t.length; s < u; s++) r[s] = t[s];
						n[i] = r
					}
					i++
				}
				return n = Array.prototype.concat.apply([], n), Sizzle.uniqueSort(n), this.pushStack(n)
			},
			filter: function(e) {
				var t = Sizzle.matches(e, this.toArray());
				return this.pushStack(t)
			},
			is: function(e) {
				return this.length && this.filter(e).length == this.length
			},
			toArray: function() {
				return Array.prototype.slice.call(this, 0)
			},
			get: function(e) {
				return "number" == cQuery.type(e) ? this[e >= 0 ? e : e + this.length] : this.toArray()
			},
			each: function(e, t) {
				for (var r = 0, n = this.length; r < n; r++) e.call(t, this.slice(r, r + 1), r, this);
				return this
			},
			first: function() {
				return this.slice(0, 1)
			},
			last: function() {
				return this.slice(-1)
			},
			indexOf: function(e) {
				if (e = cQuery(e), !e[0]) return cQuery.fxWarning("indexOf", "the cDom object is empty"), -1;
				for (var t = 0, r = this.length; t < r; t++) if (this[t] == e[0]) return t;
				return -1
			},
			uid: function() {
				var e = this[0];
				return e ? cQuery.uid(e) : (cQuery.fxWarning("uid", "the cDom object is empty"), this)
			},
			bind: function(e, t, r) {
				return cQuery.event.add(this, e, t, r), this
			},
			unbind: function(e, t) {
				return cQuery.event.remove(this, e, t), this
			},
			debug: function() {
				return cQuery.debug("==================== debug ===================="), cQuery.debug(this), cQuery.event.debug(this), cQuery.mod.debug(this), cQuery.debug("==============================================="), this
			},
			trigger: function(e, t) {
				return cQuery.event.trigger(this, e, t), this
			},
			clone: function(e, t) {
				for (var r, n, i = [], o = 0, a = 0; a < this.length; a++) r = this[a], n = r.cloneNode(e), t && cQuery.event.clone(r, n), i[o++] = n;
				return this.pushStack(i)
			},
			append: function(e) {
				var t = this[0];
				if (!t) return cQuery.fxWarning("append", "the cDom object is empty"), this;
				for (var r = cQuery.isCDom(e) ? e : [e], n = 0, i = r.length; n < i; n++) t.appendChild(r[n]);
				return this
			},
			appendTo: function(e) {
				for (var t = cQuery.isCDom(e) ? e[0] : e, r = 0, n = this.length; r < n; r++) t.appendChild(this[r]);
				return this
			},
			prepend: function(e) {
				var t = this[0];
				if (!t) return cQuery.fxWarning("prepend", "the cDom object is empty"), this;
				var r = cQuery.isCDom(e) ? e : [e],
					n = t.firstChild;
				if (n) for (var i = 0, o = r.length; i < o; i++) t.insertBefore(r[i], n);
				else this.append(e);
				return this
			},
			prependTo: function(e) {
				var t = cQuery.isCDom(e) ? e[0] : e,
					r = t.firstChild;
				if (r) for (var n = 0, i = this.length; n < i; n++) t.insertBefore(this[n], r);
				else this.appendTo(e);
				return this
			},
			insertBefore: function(e) {
				for (var t = cQuery.isCDom(e) ? e[0] : e, r = t.parentNode, n = 0, i = this.length; n < i; n++) r.insertBefore(this[n], t);
				return this
			},
			insertAfter: function(e) {
				var t = cQuery.isCDom(e) ? e[0] : e,
					r = t.parentNode,
					n = t.nextSibling;
				if (n) for (var i = 0, o = this.length; i < o; i++) r.insertBefore(this[i], n);
				else this.appendTo(r);
				return this
			},
			remove: function() {
				for (var e, t = 0, r = this.length; t < r; t++) e = this[t], e.parentNode && e.parentNode.removeChild(e);
				return this
			},
			_createNewHtml1: function(e, t, r) {
				for (var n, i; i = e.firstChild;) e.removeChild(i);
				if (n = e.ownerDocument.createElement("div"), n.innerHTML = t, n = n.getElementsByTagName(r)[0]) switch (n.tagName) {
				case "SELECT":
					for (; i = n.firstChild;) switch (i.tagName) {
					case "OPTION":
						cQuery.browser.isIE ? (n.options[0] = null, e.options.add(new Option(i.text, i.value))) : e.options.add(i);
						break;
					default:
						e.appendChild(i)
					}
					break;
				default:
					for (; i = n.firstChild;) e.appendChild(i)
				}
			},
			_createNewHtml2: function(e, t) {
				var r, n, i = [],
					o = 0,
					a = e.parentNode;
				for (r = e.ownerDocument.createElement("div"), r.innerHTML = t; n = r.firstChild;) a.insertBefore(n, e), i[o++] = n;
				return a.removeChild(e), i
			},
			_writeIframe: function(e, t, r) {
				var n = cQuery.config("blankPage") || "about:blank";
				e.src != n && (e.src = n);
				try {
					var i = e.contentWindow || e.window,
						o = i.document;
					o.open(), o.write(t), o.close(), r && "function" == cQuery.type(r) && r.call(e)
				} catch (a) {
					this._writeIframe.bind(this, e, t).delay()
				}
			},
			attr: function(e, t) {
				if ("string" != cQuery.type(e) || !e) return cQuery.logicError("attr", "invalid key"), null;
				if (t == cQuery.undefined) {
					var r = this[0];
					return r ? this[0].getAttribute(e) : ""
				}
				var n, i;
				for (n = 0, i = this.length; n < i; n++) this[n].setAttribute(e, t);
				return this
			},
			removeAttr: function(e) {
				if ("string" != cQuery.type(e) || !e) return cQuery.logicError("attr", "invalid key"), null;
				var t, r;
				for (t = 0, r = this.length; t < r; t++) this[t].removeAttribute(e);
				return this
			},
			value: function(e) {
				if (e == cQuery.undefined) {
					var t = this[0];
					return t ? this[0].value : ""
				}
				var r, n;
				for (r = 0, n = this.length; r < n; r++) this[r].value = e
			},
			html: function(e, t) {
				var r, n;
				if (e == cQuery.undefined) return r = this[0], r ? r.innerHTML : "";
				for (var i = 0, o = this.length; i < o; i++) if (r = this[i], 1 == r.nodeType) switch (n = r.tagName.toLowerCase(), ie = cQuery.browser.isIE ? "ie" : "!ie", n + "_" + ie) {
				case "thead_ie":
				case "tbody_ie":
				case "tfoot_ie":
					e = e._wrap(n);
				case "table_ie":
					e = e._wrap("table"), this._createNewHtml1(r, e, n);
					break;
				case "tr_ie":
					e = e._wrap("tr")._wrap("table"), this._createNewHtml1(r, e, n);
					break;
				case "optgroup_ie":
					e = e._wrap(n);
				case "select_ie":
					e = e._wrap("select"), this._createNewHtml1(r, e, n);
					break;
				case "style_ie":
					r.cssText = e;
					break;
				case "style_!ie":
					r.textContent = e;
					break;
				case "script_ie":
					r.text = e;
					break;
				case "script_!ie":
					r.text = e;
					break;
				case "iframe_ie":
				case "iframe_!ie":
					this._writeIframe(r, e, t);
					break;
				default:
					r.innerHTML = e
				}
				return this
			},
			ohtml: function(e) {
				var t, r, n, i, o, a = [],
					c = 0;
				if ("string" == cQuery.type(e)) {
					for (var s = 0; s < this.length; s++) if (t = this[s], 1 == t.nodeType) if (t.outerHTML) {
						if (r = t.parentNode, n = t.previousSibling, i = t.nextSibling, t.outerHTML = e, o = n || r.firstChild, o && o != i) for (o != n && (a[c++] = o);
						(o = o.nextSibling) && o != i;) a[c++] = o
					} else a = a.concat(this._createNewHtml2(t, e)), c = a.length;
					else a[c++] = [t];
					return cQuery.fn.pushStack(a)
				}
				return t = this[0], t.outerHTML ? t.outerHTML : (o = document.createElement("div"), o.appendChild(t.cloneNode(!0)), o.innerHTML)
			},
			text: function(e) {
				var t;
				if ("string" == cQuery.type(e)) {
					for (var r = 0; r < this.length; r++) switch (t = this[r], t.nodeType) {
					case 1:
						"innerText" in t ? t.innerText = e : "textContent" in t && (t.textContent = e);
					case 3:
						t.nodeValue = e
					}
					return this
				}
				return t = this[0], t ? "innerText" in t ? t.innerText : "textContent" in t ? t.textContent : "" : ""
			},
			_getCss: function() {
				var e, t = this[0];
				if (!t) return null;
				if (window.getComputedStyle) e = window.getComputedStyle(t, null);
				else {
					if (!t.currentStyle) return null;
					e = cQuery.copy(t.currentStyle);
					var r = t.runtimeStyle;
					for (var n in r) r[n] && (e[n] = r[n])
				}
				return e
			},
			css: function(e, t) {
				var r = cQuery.type(e);
				switch (arguments.length) {
				case 0:
				case 1:
					switch (r) {
					case "string":
						if (e && e.indexOf(":") == -1) {
							var n = this._getCss();
							return n && e in n ? n[e] : null
						}
						for (i = 0, a = this.length; i < a; i++) this[i].style.cssText = e || "";
					case "undefined":
						return this._getCss();
					case "object":
						var i, a, c, n = {};
						for (c in e) e.hasOwnProperty(c) && (n[c.replace(o.cssFix, function(e, t) {
							return t.toUpperCase()
						})] = e[c]);
						for (i = 0, a = this.length; i < a; i++) cQuery.extend(this[i].style, n)
					}
					break;
				case 2:
					if ("string" != r) return cQuery.logicError("css", "invalid key"), this;
					var i, a;
					for (e = e.replace(o.cssFix, function(e, t) {
						return t.toUpperCase()
					}), i = 0, a = this.length; i < a; i++) this[i].style[e] = t
				}
				return this
			},
			click: function() {
				for (var e = 0, t = this.length; e < t; e++) {
					var r = this[e];
					if ("click" in r && "function" == cQuery.type(r.click)) r.click();
					else if ("fireEvent" in r) r.fireEvent("onclick");
					else {
						if (!("createEvent" in document)) {
							cQuery.fxError("click", "can't emulate mouse click event");
							continue
						}
						var n = r.ownerDocument,
							i = n.createEvent("MouseEvents");
						i.initMouseEvent("click", !0, !0, n.defaultView, 1, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), r.dispatchEvent(i)
					}
				}
				return this
			},
			mask: function() {
				var e = this[0];
				if (!e) return cQuery.logicError("mask", "the cDom object is empty"), this;
				this.unmask();
				var t = {};
				t.cssText = e.style.cssText, t.nextSibling = e.nextSibling, t.parentNode = e.parentNode, e.style.position = "absolute", e.style.display = "block", cQuery.container.append(e), e.style.left = (document.documentElement.scrollLeft || document.body.scrollLeft || 0) + Math.max(0, (document.documentElement.clientWidth - e.offsetWidth) / 2) + "px", e.style.top = (document.documentElement.scrollTop || document.body.scrollTop || 0) + Math.max(0, (document.documentElement.clientHeight - e.offsetHeight) / 2) + "px";
				var r = "background:#000;position:absolute;left:0;top:0;width:" + Math.max(document.documentElement.clientWidth, document.documentElement.scrollWidth, document.body.clientWidth, document.body.scrollWidth) + "px;height:" + Math.max(document.documentElement.clientHeight, document.documentElement.scrollHeight, document.body.clientHeight, document.body.scrollHeight) + "px;";
				return t.maskDiv = document.createElement("div"), t.maskDiv.style.cssText = r + "filter:progid:DXImageTransform.Microsoft.Alpha(opacity=50);opacity:0.5;", cQuery(t.maskDiv).insertBefore(e), cQuery.browser.isIE && (t.maskIframe = document.createElement("iframe"), t.maskIframe.style.cssText = r + "filter:progid:DXImageTransform.Microsoft.Alpha(opacity=0);opacity:0;", cQuery(t.maskIframe).insertBefore(t.maskDiv)), this.data("__mask__", t), this
			},
			unmask: function() {
				var e = this[0];
				if (!e) return cQuery.logicError("unmask", "the cDom object is empty"), this;
				var t = this.data("__mask__");
				t && (this[0].style.cssText = t.cssText, t.nextSibling ? this.first().insertBefore(t.nextSibling) : this.first().appendTo(t.parentNode), cQuery(t.maskDiv).remove(), t.maskIframe && cQuery(t.maskIframe).remove(), this.removeData("__mask__"))
			},
			cover: function() {
				if (cQuery.browser.isIE6) {
					var e = this[0];
					if (!e) return cQuery.logicError("cover", "the cDom object is empty"), this;
					this.uncover();
					var t = {},
						r = this.offset(),
						n = this.offsetParent().offset(),
						i = e.ownerDocument.createElement("iframe");
					i.frameBorder = 0;
					var o = this.css("zIndex");
					return i.style.cssText = "background:#FFF;position:absolute;left:" + (r.left - n.left) + "px;top:" + (r.top - n.top) + "px;width:" + r.width + "px;height:" + r.height + "px;filter:progid:DXImageTransform.Microsoft.Alpha(opacity=0);opacity:0;" + (isNaN(o) ? "" : "z-index:" + (parseInt(o, 10) - 1)), cQuery(i).insertBefore(e), t.cover = i, this.data("__cover__", t), this
				}
			},
			uncover: function() {
				var e = this[0];
				if (!e) return cQuery.logicError("uncover", "the cDom object is empty"), this;
				var t = this.data("__cover__");
				return t && (cQuery(t.cover).remove(), this.removeData("__cover__")), this
			},
			offset: function(e, t) {
				if (e) {
					if (cQuery.isPlainObject(e)) {
						var r;
						t = e, t.left = "left" in t ? "number" == cQuery.type(t.left) ? t.left + "px" : t.left : "", t.top = "top" in t ? "number" == cQuery.type(t.top) ? t.top + "px" : t.top : "", t.right = "right" in t ? "number" == cQuery.type(t.right) ? t.right + "px" : t.right : "", t.bottom = "bottom" in t ? "number" == cQuery.type(t.bottom) ? t.bottom + "px" : t.bottom : "";
						for (var n = 0, i = this.length; n < i; n++) r = this.slice(n, n + 1), cQuery.extend(r[0].style, t), "static" == r.css("position") && (r[0].style.position = "absolute");
						return this
					}
					if (e = cQuery(e), !e[0]) return this;
					"number" == cQuery.type(t) && (t = {
						position: t
					}), t = cQuery.extend({
						position: 0,
						left: 0,
						top: 0,
						right: 0,
						bottom: 0
					}, t || {});
					var r, o, a, c, s = e[0].ownerDocument,
						u = s.documentElement.scrollLeft || s.body.scrollLeft || 0,
						l = s.documentElement.scrollTop || s.body.scrollTop || 0,
						f = arguments.callee.caller == e.offsetA;
					o = f ? e.offsetA() : e.offset();
					for (var n = 0, i = this.length; n < i; n++) {
						switch (r = this.slice(n, n + 1), c = f ? r.offsetA() : r.offset(), t.position) {
						case 1:
							c.left = o.left, c.top = o.top - c.height;
							break;
						case 1.5:
							c.left = o.left + o.width, c.top = o.top - c.height;
							break;
						case 2:
							c.left = o.left + o.width, c.top = o.top + o.height - c.height;
							break;
						case 3:
							c.left = o.left + o.width, c.top = o.top + o.height / 2 - c.height / 2;
							break;
						case 4:
							c.left = o.left + o.width, c.top = o.top;
							break;
						case 4.5:
							c.left = o.left + o.width, c.top = o.top + o.height;
							break;
						case 5:
							c.left = o.left, c.top = o.top + o.height;
							break;
						case 6:
							c.left = o.left + o.width / 2 - c.width / 2, c.top = o.top + o.height;
							break;
						case 7:
							c.left = o.left + o.width - c.width, c.top = o.top + o.height;
							break;
						case 7.5:
							c.left = o.left - c.width, c.top = o.top + o.height;
							break;
						case 8:
							c.left = o.left - c.width, c.top = o.top;
							break;
						case 9:
							c.left = o.left - c.width, c.top = o.top + o.height / 2 - c.height / 2;
							break;
						case 10:
							c.left = o.left - c.width, c.top = o.top + o.height - c.height;
							break;
						case 10.5:
							c.left = o.left - c.width, c.top = o.top - c.height;
							break;
						case 11:
							c.left = o.left + o.width - c.width, c.top = o.top - c.height;
							break;
						case 12:
							c.left = o.left + o.width / 2 - c.width / 2, c.top = o.top - c.height;
							break;
						default:
							var d = s.defaultView || s.parentWindow;
							f && (d = function() {
								try {
									for (;;) {
										var e = d.parent;
										if (!e || e == d || !e.document) break;
										d = e
									}
								} catch (t) {}
								return d
							}());
							var h = d.document.documentElement.clientWidth,
								p = d.document.documentElement.clientHeight;
							c.left = o.left + c.width + t.left - t.right < h + u || o.left - u <= h / 2 ? o.left : o.left + o.width - c.width, c.top = o.top + o.height + c.height + t.top - t.bottom < p + l || o.top - l <= p / 2 ? o.top + o.height : o.top - c.height
						}
						switch (c.left += t.left - t.right, c.top += t.top - t.bottom, r.css("position")) {
						case "static":
							r[0].style.position = "absolute";
							break;
						case "relative":
							a = r.offsetParent().offset(), c.left -= a.left, c.top -= a.top;
							break;
						case "fixed":
							c.left -= u, c.top -= l
						}
						r.offset({
							left: c.left,
							top: c.top
						})
					}
					return this
				}
				var y = {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
					width: 0,
					height: 0
				};
				if (!this[0]) return y;
				var s = this[0].ownerDocument;
				if (!s) return y;
				var g, m = s.documentElement;
				if ("getBoundingClientRect" in m) return y = this[0].getBoundingClientRect(), y = cQuery.copy(y, !0), g = (this[0] == m ? 0 : m.scrollLeft || s.body.scrollLeft || 0) - m.clientLeft, y.left += g, y.right += g, g = (this[0] == m ? 0 : m.scrollTop || s.body.scrollTop || 0) - m.clientTop, y.top += g, y.bottom += g, y.width = y.right - y.left, y.height = y.bottom - y.top, y;
				for (g = this[0]; g && (g != s || g != m);) g != this[0] && (y.left -= g.scrollLeft, y.top -= g.scrollTop), y.left += y.offsetLeft, y.top += y.offsetTop, g = g.offsetParent();
				return y.left += m.clientLeft, y.top += m.clientTop, y.width = y.offsetWidth, y.height = y.offsetHeight, y.right = y.left + y.width, y.bottom = y.left + y.height, y
			},
			offsetA: function(e, t) {
				if (e) return cQuery.isPlainObject(e) ? this.offset(e) : this.offset(e, t);
				var r = this.first();
				if (!r[0]) return {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
					width: 0,
					height: 0
				};
				for (var n, i = {
					thin: 2,
					medium: 4,
					thick: 6
				}, a = r.offset(), c = 0, s = 0, u = r[0].ownerDocument, l = u.defaultView || u.parentWindow;) {
					if (r = function() {
						try {
							var e = l.frameElement;
							return !!e && cQuery(e)
						} catch (t) {
							return !1
						}
					}(), !r) break;
					if (c -= u.documentElement.scrollLeft || u.body.scrollLeft, s -= u.documentElement.scrollTop || u.body.scrollTop, !o.offsetA.test(r.css("borderLeftStyle"))) {
						var f = r.css("borderLeftWidth").toLowerCase();
						f = f in i ? i[f] : parseInt(f, 10), c += f
					}
					if (!o.offsetA.test(r.css("borderTopStyle"))) {
						var d = r.css("borderTopWidth").toLowerCase();
						d = d in i ? i[d] : parseInt(d, 10), s += d
					}
					n = r.offset(), c += n.left, s += n.top, u = r[0].ownerDocument, l = u.defaultView || u.parentWindow
				}
				return a.left += c, a.right += c, a.top += s, a.bottom += s, a
			},
			data: function(e, t) {
				var r = this[0];
				if (!r) return cQuery.fxWarning("data", "the cDom object is empty"), this;
				var n = cQuery.uid(r),
					i = a[n];
				return i || (i = a[n] = {}), e ? "string" == !cQuery.type(e) ? (cQuery.logicError("data", "invalid key " + e), this) : t === cQuery.undefined ? i[e] : (i[e] = t, this) : cQuery.copy(i)
			},
			removeData: function(e) {
				var t = this[0];
				if (!t) return cQuery.fxWarning("removeData", "the cDom object is empty"), this;
				var r = cQuery.uid(t),
					n = a[r];
				switch (n || (n = a[r] = {}), cQuery.type(e)) {
				case "string":
					delete n[e];
					break;
				case "array":
					for (var i = 0, o = e.length; i < o; i++) delete n[e[i]];
					break;
				case "undefined":
					n = a[r] = {};
					break;
				default:
					cQuery.logicError("removeData", "invalid key " + e)
				}
				return this
			},
			contains: function(e) {
				var t = this[0];
				if (!t) return cQuery.fxWarning("contains", "the cDom object is empty"), !1;
				if (e = cQuery(e), !e[0]) return !1;
				for (var r = 0, n = e.length; r < n; r++) if (!Sizzle.contains(t, e[r])) return !1;
				return !0
			},
			regMod: function(e, t, r, n) {
				var i, o;
				return (i = this[0]) ? (o = cQuery.uid(i), cQuery.mod.instantiate(e, t, o, i, r, n)) : (cQuery.fxWarning("regMod(" + e + "," + t + ")", "the cDom object is empty"), null)
			},
			allRegMod: function(e, t, r, n) {
				var i, o, a, c, s = [];
				for (i = 0, o = this.length; i < o; i++) a = this[i], c = cQuery.uid(a), s[i] = cQuery.mod.instantiate(e, t, c, a, r, n);
				return s
			},
			unregMod: function(e, t) {
				var r = this.getMod(e, t);
				return r ? r.uninit() : cQuery.fxWarning("unregMod", "Failed to get instance"), this
			},
			allUnregMod: function(e, t) {
				var r, n, i, o;
				for (r = 0, n = this.length; r < n; r++) i = this.slice(r, r + 1), o = i.getMod(e, t), o && o.uninit();
				return instances
			},
			getMod: function(e, t) {
				var r = this[0];
				if (!r) return cQuery.fxWarning("getMod", "the cDom object is empty"), this;
				if (!e || "string" != cQuery.type(e)) return cQuery.logicError("getMod", "invalid mod name " + e), null;
				var n = cQuery.uid(r);
				if (t) {
					var i = cQuery.mod._getInstanceOpt(e, t);
					return i && n in i ? i[n] : null
				}
				var o = cQuery.mod._getInstanceOpt(e);
				if (o) {
					var a = [];
					for (var t in o) if (o.hasOwnProperty(t)) {
						var i = o[t];
						i && n in i && a.push(i[n])
					}
					return a
				}
				return null
			},
			hasClass: function(e) {
				var t = this[0];
				if (!t) return cQuery.fxWarning("hasClass", "the cDom object is empty"), this;
				var r, n, i = e.trim().split(o.space),
					a = " " + t.className.replace(o.space, " ") + " ";
				for (r = 0, n = i.length; r < n; r++) if (a.indexOf(" " + i[r] + " ") > -1) return !0;
				return !1
			},
			addClass: function(e) {
				var t, r, n, i, a, c, s;
				if (!e) return this;
				for (c = e.trim().split(o.space), t = 0, n = this.length; t < n; t++) if (a = this[t], s = a.className) for (s = " " + s.replace(o.space, " ") + " ", r = 0, i = c.length; r < i; r++) s.indexOf(" " + c[t] + " ") == -1 && (a.className += " " + c[r]);
				else a.className = e;
				return this
			},
			removeClass: function(e) {
				var t, r, n, i;
				for (e && (n = new RegExp("(^|\\s)(" + e.trim().toReString().replace(o.space, "|") + ")(?=\\s|$)", "g")), t = 0, r = this.length; t < r; t++) i = this[t], i.className = e ? i.className.replace(n, "").trim() : "";
				return this
			},
			toggleClass: function(e) {
				var t, r, n, i, a;
				if (e) {
					for (cn = e.trim().split(o.space), t = 0, n = this.length; t < n; t++) {
						a = this[t];
						var c = a.className;
						if (c) for (c = " " + c.replace(o.space, " ") + " ", r = 0, i = cn.length; r < i; r++) c.indexOf(" " + cn[r] + " ") == -1 ? c += " " + cn[r] : c = c.replace(" " + cn[r] + " ", " ");
						else a.className = e
					}
					return this
				}
			}
		}, cQuery.cookie = {
			set: function(e, t, r, n) {
				n = n || {}, null === r && (r = "", n.expires = -1);
				var i = "";
				if (n.expires && ("number" == typeof n.expires || n.expires.toUTCString)) {
					var o;
					"number" == typeof n.expires ? (o = new Date, o.setTime(o.getTime() + 24 * n.expires * 60 * 60 * 1e3)) : o = n.expires, i = "; expires=" + o.toUTCString()
				}
				var a = n.path ? "; path=" + n.path : "",
					c = n.domain ? "; domain=" + n.domain : "",
					s = n.secure ? "; secure" : "";
				if (t) {
					var u = cQuery.cookie.get(e, !1) || "";
					u && (u = (u + "&").replace(new RegExp("(^|&)\\s*" + encodeURIComponent(t).toReString() + "=[^&]+&"), "$1")), document.cookie = [encodeURIComponent(e), "=", u, encodeURIComponent(t), "=", encodeURIComponent(r), i, a, c, s].join("")
				} else document.cookie = [encodeURIComponent(e), "=", encodeURIComponent(r), i, a, c, s].join("")
			},
			get: function(e, t) {
				var r = document.cookie.match(new RegExp("(?:^|;)\\s*" + encodeURIComponent(e).toReString() + "=([^;]+)"));
				return t === !1 ? r ? r[1] : null : (r && t && (r = r[1].match(new RegExp("(?:^|&)\\s*" + encodeURIComponent(t).toReString() + "=([^&]+)"))), r ? decodeURIComponent(r[1]) : null)
			},
			del: function(e, t, r) {
				r = r || {};
				var n = r.path ? "; path=" + r.path : "",
					i = r.domain ? "; domain=" + r.domain : "";
				if (t) {
					var o = cQuery.cookie.get(e, !1);
					if (null === o) return;
					if (o = o.replace(new RegExp("(^|&)\\s*" + encodeURIComponent(t).toReString() + "=[^&]+"), "").replace(/^\s*&/, "")) return void(document.cookie = encodeURIComponent(e) + "=" + o)
				}
				var a = new Date;
				a.setTime(a.getTime() - 1), document.cookie = encodeURIComponent(e) + "=" + i + n + "; expires=" + a.toGMTString()
			}
		}, ["firstChild", "lastChild", "previousSibling", "nextSibling", "parentNode", "offsetParent"].each(function(e) {
			cQuery.fn[e] = function() {
				for (var t, r = [], n = 0, i = 0; i < this.length; i++) t = this[i][e], t && (r[n++] = t);
				return this.pushStack(r)
			}
		}), ["childNodes"].each(function(e) {
			cQuery.fn[e] = function() {
				for (var t, r = [], n = 0, i = 0; i < this.length; i++) t = this[i][e], t && (r[n++] = Array.prototype.slice.call(t, 0));
				return r = Array.prototype.concat.apply([], r), this.pushStack(r)
			}
		}), function() {
			if ("complete" === document.readyState || window.$LAB && $LAB.isReady) return void setTimeout(r, 1);
			if (document.addEventListener) document.addEventListener("DOMContentLoaded", r, !1), window.addEventListener("load", r, !1);
			else if (document.attachEvent) {
				window.attachEvent("onload", r);
				var e;
				try {
					e = null == window.frameElement
				} catch (t) {}
				document.documentElement.doScroll && e && setTimeout(i, 1)
			}
		}(), function() {
			window.$LAB && $LAB.isLoaded ? cQuery.isLoaded = !0 : document.addEventListener ? window.addEventListener("load", n, !1) : document.attachEvent && window.attachEvent("onload", n)
		}(), function() {
			var e = document.createElement("container");
			e.style.cssText = "position:absolute;top:0;left:0;width:0;height:0;z-index:100;";
			var t = document.body;
			t || document.write('<span id="__body__" style="display:none;">cQuery</span>'), t = document.body.firstChild, t ? document.body.insertBefore(e, t) : document.body.appendChild(e), t = document.getElementById("__body__"), t && t.parentNode.removeChild(t), cQuery.container = cQuery(e)
		}(), function() {
			function e() {
				c = this
			}
			if (!("activeElement" in document)) {
				var t = cQuery("html");
				t.bind("mousedown", function(t) {
					var r = cQuery(t.target);
					r.bind("focus", e), setTimeout(function() {
						r.unbind("focus", e)
					})
				})
			}
		}(), function() {
			function e() {
				var e = "";
				try {
					e = location.href
				} catch (t) {
					e = document.URL
				}
				return e = e.replace(/#.*$/, "")
			}
			function t() {
				var t = e();
				r[o] = {
					time: +new Date,
					length: history.length,
					url: t,
					referrer: document.referrer,
					storage: n
				}, cQuery.storage.set("__history__", r)
			}
			var r = cQuery.storage.get("__history__", {}),
				n = {};
			cQuery.pageStorage = {
				get: function(e) {
					return e in n ? n[e] : cQuery.undefined
				},
				set: function(e, t) {
					return n[e] = t, !0
				},
				remove: function(e) {
					delete n[e]
				},
				keys: function() {
					var e = [],
						t = 0;
					for (var r in n) e[t++] = r;
					return e
				},
				clear: function() {
					return n = {}, !0
				},
				reset: function() {
					return n = {}, r = {}, !0
				}
			};
			for (var i in r) r[i].time + 36e5 < +new Date && delete r[i];
			var o = function() {
					var t = window.name = window.name || cQuery.uid();
					return t += " " + e() + " " + document.referrer, t = cQuery.crypto.sha1(t)
				}(),
				a = r.hasOwnProperty(o);
			if (a && (n = r[o].storage || {}), cQuery.isNavigator = !0, cQuery.isBack = !1, cQuery.isRefresh = !1, window.performance && performance.navigation.type) switch (performance.navigation.type) {
			case 1:
				cQuery.isNavigator = !1, cQuery.isRefresh = !0;
				break;
			case 2:
				cQuery.isNavigator = !1, cQuery.isBack = !0
			} else a && (cQuery.isNavigator = !1, cQuery.isBack = !0);
			cQuery(window).bind("unload", cQuery.COMMON_DONOTHING), cQuery(window).bind("beforeunload", t, {
				priority: 99
			})
		}(), function() {
			function e(e, t) {
				if (n.hasOwnProperty(e)) {
					switch (e) {
					case "namespace":
						t != n[e] && (window[n[e]] = i, t && (i = window[t], window[t] = cQuery));
						break;
					case "allowDebug":
						cQuery.cookie.set("cQuery", "allowDebug", t ? "true" : "false", {
							expires: 3
						})
					}
					return n[e] = t, !0
				}
				return !1
			}
			var t = "http:";
			try {
				t = "https:" == document.location.protocol ? "https:" : "http:"
			} catch (r) {
				t = "https:" == document.URL.match(/[^:]+/) + ":" ? "https:" : "http:"
			}
			var n = {
				namespace: "$",
				loadAsync: !0,
				jQueryPath: t + "//webresource.c-ctrip.com/code/cquery/jquery/jquery-1.9.1.js",
				modPath: t + "//webresource.c-ctrip.com/code/cquery/mod/",
				loadMultiMod: !0,
				modBuffer: !0,
				charset: (document.charset || document.characterSet || "utf-8").toLowerCase(),
				now: new Date,
				blankPage: "about:blank",
				allowDebug: (cQuery.cookie.get("cQuery", "allowDebug") || "").toBool() || !1
			};
			cQuery.config = function(t, r) {
				var i = cQuery.type(t);
				switch (i) {
				case "string":
					return arguments.length > 1 ? e(t, r) : n[t];
				case "object":
					var o, a = !0;
					for (var c in t) t.hasOwnProperty(c) && (o++, a = a && e(c, t[c]));
					return o && a
				}
			}, "gbk" == cQuery.config("charset") && cQuery.config("charset", "gb2312");
			var i = window[cQuery.config("namespace")];
			window[cQuery.config("namespace")] = cQuery, function() {
				for (var e = document.getElementsByTagName("script"), t = 0, r = e.length; t < r; t++) if (o.isSelfScript.test(e[t].src)) {
					var n = e[t].text.trim();
					if (n) {
						var i = cQuery.parseJSON(n);
						i && cQuery.config(i)
					}
					return
				}
			}()
		}()
	}
}(), function() {
	for (var e = document.getElementsByTagName("script") || [], t = /_bfa\.min\.js/i, r = 0; r < e.length; r++) if (t.test(e[r].src)) return;
	if (!(window.$_bf || window.$LAB || window.CtripJsLoader)) {
		var n = new Date,
			i = "?v=" + n.getFullYear() + n.getMonth() + "_" + n.getDate() + ".js",
			o = document.createElement("script");
		o.type = "text/javascript", o.charset = "utf-8", o.async = !0;
		try {
			var a = "https:" == document.location.protocol
		} catch (c) {
			var a = "https:" == document.URL.match(/[^:]+/) + ":"
		}
		o.src = a ? "https://s.c-ctrip.com/_bfa.min.js" + i : "http://webresource.c-ctrip.com/code/ubt/_bfa.min.js" + i;
		var s = document.getElementsByTagName("script")[0];
		s.parentNode.insertBefore(o, s)
	}
}();
(function() {
	function n(n) {
		function t(t, r, e, u, i, o) {
			for (; i >= 0 && i < o; i += n) {
				var a = u ? u[i] : i;
				e = r(e, t[a], a, t)
			}
			return e
		}
		return function(r, e, u, i) {
			e = b(e, i, 4);
			var o = !k(r) && m.keys(r),
				a = (o || r).length,
				c = n > 0 ? 0 : a - 1;
			return arguments.length < 3 && (u = r[o ? o[c] : c], c += n), t(r, e, u, o, c, a)
		}
	}
	function t(n) {
		return function(t, r, e) {
			r = x(r, e);
			for (var u = O(t), i = n > 0 ? 0 : u - 1; i >= 0 && i < u; i += n) if (r(t[i], i, t)) return i;
			return -1
		}
	}
	function r(n, t, r) {
		return function(e, u, i) {
			var o = 0,
				a = O(e);
			if ("number" == typeof i) n > 0 ? o = i >= 0 ? i : Math.max(i + a, o) : a = i >= 0 ? Math.min(i + 1, a) : i + a + 1;
			else if (r && i && a) return i = r(e, u), e[i] === u ? i : -1;
			if (u !== u) return i = t(l.call(e, o, a), m.isNaN), i >= 0 ? i + o : -1;
			for (i = n > 0 ? o : a - 1; i >= 0 && i < a; i += n) if (e[i] === u) return i;
			return -1
		}
	}
	function e(n, t) {
		var r = I.length,
			e = n.constructor,
			u = m.isFunction(e) && e.prototype || a,
			i = "constructor";
		for (m.has(n, i) && !m.contains(t, i) && t.push(i); r--;) i = I[r], i in n && n[i] !== u[i] && !m.contains(t, i) && t.push(i)
	}
	var u = this,
		i = u._,
		o = Array.prototype,
		a = Object.prototype,
		c = Function.prototype,
		f = o.push,
		l = o.slice,
		s = a.toString,
		p = a.hasOwnProperty,
		h = Array.isArray,
		v = Object.keys,
		y = c.bind,
		d = Object.create,
		g = function() {},
		m = function(n) {
			return n instanceof m ? n : this instanceof m ? void(this._wrapped = n) : new m(n)
		};
	"undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = m), exports._ = m) : u._ = m, m.VERSION = "1.8.3";
	var b = function(n, t, r) {
			if (void 0 === t) return n;
			switch (null == r ? 3 : r) {
			case 1:
				return function(r) {
					return n.call(t, r)
				};
			case 2:
				return function(r, e) {
					return n.call(t, r, e)
				};
			case 3:
				return function(r, e, u) {
					return n.call(t, r, e, u)
				};
			case 4:
				return function(r, e, u, i) {
					return n.call(t, r, e, u, i)
				}
			}
			return function() {
				return n.apply(t, arguments)
			}
		},
		x = function(n, t, r) {
			return null == n ? m.identity : m.isFunction(n) ? b(n, t, r) : m.isObject(n) ? m.matcher(n) : m.property(n)
		};
	m.iteratee = function(n, t) {
		return x(n, t, 1 / 0)
	};
	var _ = function(n, t) {
			return function(r) {
				var e = arguments.length;
				if (e < 2 || null == r) return r;
				for (var u = 1; u < e; u++) for (var i = arguments[u], o = n(i), a = o.length, c = 0; c < a; c++) {
					var f = o[c];
					t && void 0 !== r[f] || (r[f] = i[f])
				}
				return r
			}
		},
		j = function(n) {
			if (!m.isObject(n)) return {};
			if (d) return d(n);
			g.prototype = n;
			var t = new g;
			return g.prototype = null, t
		},
		w = function(n) {
			return function(t) {
				return null == t ? void 0 : t[n]
			}
		},
		A = Math.pow(2, 53) - 1,
		O = w("length"),
		k = function(n) {
			var t = O(n);
			return "number" == typeof t && t >= 0 && t <= A
		};
	m.each = m.forEach = function(n, t, r) {
		t = b(t, r);
		var e, u;
		if (k(n)) for (e = 0, u = n.length; e < u; e++) t(n[e], e, n);
		else {
			var i = m.keys(n);
			for (e = 0, u = i.length; e < u; e++) t(n[i[e]], i[e], n)
		}
		return n
	}, m.map = m.collect = function(n, t, r) {
		t = x(t, r);
		for (var e = !k(n) && m.keys(n), u = (e || n).length, i = Array(u), o = 0; o < u; o++) {
			var a = e ? e[o] : o;
			i[o] = t(n[a], a, n)
		}
		return i
	}, m.reduce = m.foldl = m.inject = n(1), m.reduceRight = m.foldr = n(-1), m.find = m.detect = function(n, t, r) {
		var e;
		if (e = k(n) ? m.findIndex(n, t, r) : m.findKey(n, t, r), void 0 !== e && e !== -1) return n[e]
	}, m.filter = m.select = function(n, t, r) {
		var e = [];
		return t = x(t, r), m.each(n, function(n, r, u) {
			t(n, r, u) && e.push(n)
		}), e
	}, m.reject = function(n, t, r) {
		return m.filter(n, m.negate(x(t)), r)
	}, m.every = m.all = function(n, t, r) {
		t = x(t, r);
		for (var e = !k(n) && m.keys(n), u = (e || n).length, i = 0; i < u; i++) {
			var o = e ? e[i] : i;
			if (!t(n[o], o, n)) return !1
		}
		return !0
	}, m.some = m.any = function(n, t, r) {
		t = x(t, r);
		for (var e = !k(n) && m.keys(n), u = (e || n).length, i = 0; i < u; i++) {
			var o = e ? e[i] : i;
			if (t(n[o], o, n)) return !0
		}
		return !1
	}, m.contains = m.includes = m.include = function(n, t, r, e) {
		return k(n) || (n = m.values(n)), ("number" != typeof r || e) && (r = 0), m.indexOf(n, t, r) >= 0
	}, m.invoke = function(n, t) {
		var r = l.call(arguments, 2),
			e = m.isFunction(t);
		return m.map(n, function(n) {
			var u = e ? t : n[t];
			return null == u ? u : u.apply(n, r)
		})
	}, m.pluck = function(n, t) {
		return m.map(n, m.property(t))
	}, m.where = function(n, t) {
		return m.filter(n, m.matcher(t))
	}, m.findWhere = function(n, t) {
		return m.find(n, m.matcher(t))
	}, m.max = function(n, t, r) {
		var e, u, i = -(1 / 0),
			o = -(1 / 0);
		if (null == t && null != n) {
			n = k(n) ? n : m.values(n);
			for (var a = 0, c = n.length; a < c; a++) e = n[a], e > i && (i = e)
		} else t = x(t, r), m.each(n, function(n, r, e) {
			u = t(n, r, e), (u > o || u === -(1 / 0) && i === -(1 / 0)) && (i = n, o = u)
		});
		return i
	}, m.min = function(n, t, r) {
		var e, u, i = 1 / 0,
			o = 1 / 0;
		if (null == t && null != n) {
			n = k(n) ? n : m.values(n);
			for (var a = 0, c = n.length; a < c; a++) e = n[a], e < i && (i = e)
		} else t = x(t, r), m.each(n, function(n, r, e) {
			u = t(n, r, e), (u < o || u === 1 / 0 && i === 1 / 0) && (i = n, o = u)
		});
		return i
	}, m.shuffle = function(n) {
		for (var t, r = k(n) ? n : m.values(n), e = r.length, u = Array(e), i = 0; i < e; i++) t = m.random(0, i), t !== i && (u[i] = u[t]), u[t] = r[i];
		return u
	}, m.sample = function(n, t, r) {
		return null == t || r ? (k(n) || (n = m.values(n)), n[m.random(n.length - 1)]) : m.shuffle(n).slice(0, Math.max(0, t))
	}, m.sortBy = function(n, t, r) {
		return t = x(t, r), m.pluck(m.map(n, function(n, r, e) {
			return {
				value: n,
				index: r,
				criteria: t(n, r, e)
			}
		}).sort(function(n, t) {
			var r = n.criteria,
				e = t.criteria;
			if (r !== e) {
				if (r > e || void 0 === r) return 1;
				if (r < e || void 0 === e) return -1
			}
			return n.index - t.index
		}), "value")
	};
	var F = function(n) {
			return function(t, r, e) {
				var u = {};
				return r = x(r, e), m.each(t, function(e, i) {
					var o = r(e, i, t);
					n(u, e, o)
				}), u
			}
		};
	m.groupBy = F(function(n, t, r) {
		m.has(n, r) ? n[r].push(t) : n[r] = [t]
	}), m.indexBy = F(function(n, t, r) {
		n[r] = t
	}), m.countBy = F(function(n, t, r) {
		m.has(n, r) ? n[r]++ : n[r] = 1
	}), m.toArray = function(n) {
		return n ? m.isArray(n) ? l.call(n) : k(n) ? m.map(n, m.identity) : m.values(n) : []
	}, m.size = function(n) {
		return null == n ? 0 : k(n) ? n.length : m.keys(n).length
	}, m.partition = function(n, t, r) {
		t = x(t, r);
		var e = [],
			u = [];
		return m.each(n, function(n, r, i) {
			(t(n, r, i) ? e : u).push(n)
		}), [e, u]
	}, m.first = m.head = m.take = function(n, t, r) {
		if (null != n) return null == t || r ? n[0] : m.initial(n, n.length - t)
	}, m.initial = function(n, t, r) {
		return l.call(n, 0, Math.max(0, n.length - (null == t || r ? 1 : t)))
	}, m.last = function(n, t, r) {
		if (null != n) return null == t || r ? n[n.length - 1] : m.rest(n, Math.max(0, n.length - t))
	}, m.rest = m.tail = m.drop = function(n, t, r) {
		return l.call(n, null == t || r ? 1 : t)
	}, m.compact = function(n) {
		return m.filter(n, m.identity)
	};
	var S = function(n, t, r, e) {
			for (var u = [], i = 0, o = e || 0, a = O(n); o < a; o++) {
				var c = n[o];
				if (k(c) && (m.isArray(c) || m.isArguments(c))) {
					t || (c = S(c, t, r));
					var f = 0,
						l = c.length;
					for (u.length += l; f < l;) u[i++] = c[f++]
				} else r || (u[i++] = c)
			}
			return u
		};
	m.flatten = function(n, t) {
		return S(n, t, !1)
	}, m.without = function(n) {
		return m.difference(n, l.call(arguments, 1))
	}, m.uniq = m.unique = function(n, t, r, e) {
		m.isBoolean(t) || (e = r, r = t, t = !1), null != r && (r = x(r, e));
		for (var u = [], i = [], o = 0, a = O(n); o < a; o++) {
			var c = n[o],
				f = r ? r(c, o, n) : c;
			t ? (o && i === f || u.push(c), i = f) : r ? m.contains(i, f) || (i.push(f), u.push(c)) : m.contains(u, c) || u.push(c)
		}
		return u
	}, m.union = function() {
		return m.uniq(S(arguments, !0, !0))
	}, m.intersection = function(n) {
		for (var t = [], r = arguments.length, e = 0, u = O(n); e < u; e++) {
			var i = n[e];
			if (!m.contains(t, i)) {
				for (var o = 1; o < r && m.contains(arguments[o], i); o++);
				o === r && t.push(i)
			}
		}
		return t
	}, m.difference = function(n) {
		var t = S(arguments, !0, !0, 1);
		return m.filter(n, function(n) {
			return !m.contains(t, n)
		})
	}, m.zip = function() {
		return m.unzip(arguments)
	}, m.unzip = function(n) {
		for (var t = n && m.max(n, O).length || 0, r = Array(t), e = 0; e < t; e++) r[e] = m.pluck(n, e);
		return r
	}, m.object = function(n, t) {
		for (var r = {}, e = 0, u = O(n); e < u; e++) t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
		return r
	}, m.findIndex = t(1), m.findLastIndex = t(-1), m.sortedIndex = function(n, t, r, e) {
		r = x(r, e, 1);
		for (var u = r(t), i = 0, o = O(n); i < o;) {
			var a = Math.floor((i + o) / 2);
			r(n[a]) < u ? i = a + 1 : o = a
		}
		return i
	}, m.indexOf = r(1, m.findIndex, m.sortedIndex), m.lastIndexOf = r(-1, m.findLastIndex), m.range = function(n, t, r) {
		null == t && (t = n || 0, n = 0), r = r || 1;
		for (var e = Math.max(Math.ceil((t - n) / r), 0), u = Array(e), i = 0; i < e; i++, n += r) u[i] = n;
		return u
	};
	var E = function(n, t, r, e, u) {
			if (!(e instanceof t)) return n.apply(r, u);
			var i = j(n.prototype),
				o = n.apply(i, u);
			return m.isObject(o) ? o : i
		};
	m.bind = function(n, t) {
		if (y && n.bind === y) return y.apply(n, l.call(arguments, 1));
		if (!m.isFunction(n)) throw new TypeError("Bind must be called on a function");
		var r = l.call(arguments, 2),
			e = function() {
				return E(n, e, t, this, r.concat(l.call(arguments)))
			};
		return e
	}, m.partial = function(n) {
		var t = l.call(arguments, 1),
			r = function() {
				for (var e = 0, u = t.length, i = Array(u), o = 0; o < u; o++) i[o] = t[o] === m ? arguments[e++] : t[o];
				for (; e < arguments.length;) i.push(arguments[e++]);
				return E(n, r, this, this, i)
			};
		return r
	}, m.bindAll = function(n) {
		var t, r, e = arguments.length;
		if (e <= 1) throw new Error("bindAll must be passed function names");
		for (t = 1; t < e; t++) r = arguments[t], n[r] = m.bind(n[r], n);
		return n
	}, m.memoize = function(n, t) {
		var r = function(e) {
				var u = r.cache,
					i = "" + (t ? t.apply(this, arguments) : e);
				return m.has(u, i) || (u[i] = n.apply(this, arguments)), u[i]
			};
		return r.cache = {}, r
	}, m.delay = function(n, t) {
		var r = l.call(arguments, 2);
		return setTimeout(function() {
			return n.apply(null, r)
		}, t)
	}, m.defer = m.partial(m.delay, m, 1), m.throttle = function(n, t, r) {
		var e, u, i, o = null,
			a = 0;
		r || (r = {});
		var c = function() {
				a = r.leading === !1 ? 0 : m.now(), o = null, i = n.apply(e, u), o || (e = u = null)
			};
		return function() {
			var f = m.now();
			a || r.leading !== !1 || (a = f);
			var l = t - (f - a);
			return e = this, u = arguments, l <= 0 || l > t ? (o && (clearTimeout(o), o = null), a = f, i = n.apply(e, u), o || (e = u = null)) : o || r.trailing === !1 || (o = setTimeout(c, l)), i
		}
	}, m.debounce = function(n, t, r) {
		var e, u, i, o, a, c = function() {
				var f = m.now() - o;
				f < t && f >= 0 ? e = setTimeout(c, t - f) : (e = null, r || (a = n.apply(i, u), e || (i = u = null)))
			};
		return function() {
			i = this, u = arguments, o = m.now();
			var f = r && !e;
			return e || (e = setTimeout(c, t)), f && (a = n.apply(i, u), i = u = null), a
		}
	}, m.wrap = function(n, t) {
		return m.partial(t, n)
	}, m.negate = function(n) {
		return function() {
			return !n.apply(this, arguments)
		}
	}, m.compose = function() {
		var n = arguments,
			t = n.length - 1;
		return function() {
			for (var r = t, e = n[t].apply(this, arguments); r--;) e = n[r].call(this, e);
			return e
		}
	}, m.after = function(n, t) {
		return function() {
			if (--n < 1) return t.apply(this, arguments)
		}
	}, m.before = function(n, t) {
		var r;
		return function() {
			return --n > 0 && (r = t.apply(this, arguments)), n <= 1 && (t = null), r
		}
	}, m.once = m.partial(m.before, 2);
	var M = !{
		toString: null
	}.propertyIsEnumerable("toString"),
		I = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
	m.keys = function(n) {
		if (!m.isObject(n)) return [];
		if (v) return v(n);
		var t = [];
		for (var r in n) m.has(n, r) && t.push(r);
		return M && e(n, t), t
	}, m.allKeys = function(n) {
		if (!m.isObject(n)) return [];
		var t = [];
		for (var r in n) t.push(r);
		return M && e(n, t), t
	}, m.values = function(n) {
		for (var t = m.keys(n), r = t.length, e = Array(r), u = 0; u < r; u++) e[u] = n[t[u]];
		return e
	}, m.mapObject = function(n, t, r) {
		t = x(t, r);
		for (var e, u = m.keys(n), i = u.length, o = {}, a = 0; a < i; a++) e = u[a], o[e] = t(n[e], e, n);
		return o
	}, m.pairs = function(n) {
		for (var t = m.keys(n), r = t.length, e = Array(r), u = 0; u < r; u++) e[u] = [t[u], n[t[u]]];
		return e
	}, m.invert = function(n) {
		for (var t = {}, r = m.keys(n), e = 0, u = r.length; e < u; e++) t[n[r[e]]] = r[e];
		return t
	}, m.functions = m.methods = function(n) {
		var t = [];
		for (var r in n) m.isFunction(n[r]) && t.push(r);
		return t.sort()
	}, m.extend = _(m.allKeys), m.extendOwn = m.assign = _(m.keys), m.findKey = function(n, t, r) {
		t = x(t, r);
		for (var e, u = m.keys(n), i = 0, o = u.length; i < o; i++) if (e = u[i], t(n[e], e, n)) return e
	}, m.pick = function(n, t, r) {
		var e, u, i = {},
			o = n;
		if (null == o) return i;
		m.isFunction(t) ? (u = m.allKeys(o), e = b(t, r)) : (u = S(arguments, !1, !1, 1), e = function(n, t, r) {
			return t in r
		}, o = Object(o));
		for (var a = 0, c = u.length; a < c; a++) {
			var f = u[a],
				l = o[f];
			e(l, f, o) && (i[f] = l)
		}
		return i
	}, m.omit = function(n, t, r) {
		if (m.isFunction(t)) t = m.negate(t);
		else {
			var e = m.map(S(arguments, !1, !1, 1), String);
			t = function(n, t) {
				return !m.contains(e, t)
			}
		}
		return m.pick(n, t, r)
	}, m.defaults = _(m.allKeys, !0), m.create = function(n, t) {
		var r = j(n);
		return t && m.extendOwn(r, t), r
	}, m.clone = function(n) {
		return m.isObject(n) ? m.isArray(n) ? n.slice() : m.extend({}, n) : n
	}, m.tap = function(n, t) {
		return t(n), n
	}, m.isMatch = function(n, t) {
		var r = m.keys(t),
			e = r.length;
		if (null == n) return !e;
		for (var u = Object(n), i = 0; i < e; i++) {
			var o = r[i];
			if (t[o] !== u[o] || !(o in u)) return !1
		}
		return !0
	};
	var N = function(n, t, r, e) {
			if (n === t) return 0 !== n || 1 / n === 1 / t;
			if (null == n || null == t) return n === t;
			n instanceof m && (n = n._wrapped), t instanceof m && (t = t._wrapped);
			var u = s.call(n);
			if (u !== s.call(t)) return !1;
			switch (u) {
			case "[object RegExp]":
			case "[object String]":
				return "" + n == "" + t;
			case "[object Number]":
				return +n !== +n ? +t !== +t : 0 === +n ? 1 / +n === 1 / t : +n === +t;
			case "[object Date]":
			case "[object Boolean]":
				return +n === +t
			}
			var i = "[object Array]" === u;
			if (!i) {
				if ("object" != typeof n || "object" != typeof t) return !1;
				var o = n.constructor,
					a = t.constructor;
				if (o !== a && !(m.isFunction(o) && o instanceof o && m.isFunction(a) && a instanceof a) && "constructor" in n && "constructor" in t) return !1
			}
			r = r || [], e = e || [];
			for (var c = r.length; c--;) if (r[c] === n) return e[c] === t;
			if (r.push(n), e.push(t), i) {
				if (c = n.length, c !== t.length) return !1;
				for (; c--;) if (!N(n[c], t[c], r, e)) return !1
			} else {
				var f, l = m.keys(n);
				if (c = l.length, m.keys(t).length !== c) return !1;
				for (; c--;) if (f = l[c], !m.has(t, f) || !N(n[f], t[f], r, e)) return !1
			}
			return r.pop(), e.pop(), !0
		};
	m.isEqual = function(n, t) {
		return N(n, t)
	}, m.isEmpty = function(n) {
		return null == n || (k(n) && (m.isArray(n) || m.isString(n) || m.isArguments(n)) ? 0 === n.length : 0 === m.keys(n).length)
	}, m.isElement = function(n) {
		return !(!n || 1 !== n.nodeType)
	}, m.isArray = h ||
	function(n) {
		return "[object Array]" === s.call(n)
	}, m.isObject = function(n) {
		var t = typeof n;
		return "function" === t || "object" === t && !! n
	}, m.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(n) {
		m["is" + n] = function(t) {
			return s.call(t) === "[object " + n + "]"
		}
	}), m.isArguments(arguments) || (m.isArguments = function(n) {
		return m.has(n, "callee")
	}), "function" != typeof / . / && "object" != typeof Int8Array && (m.isFunction = function(n) {
		return "function" == typeof n || !1
	}), m.isFinite = function(n) {
		return isFinite(n) && !isNaN(parseFloat(n))
	}, m.isNaN = function(n) {
		return m.isNumber(n) && n !== +n
	}, m.isBoolean = function(n) {
		return n === !0 || n === !1 || "[object Boolean]" === s.call(n)
	}, m.isNull = function(n) {
		return null === n
	}, m.isUndefined = function(n) {
		return void 0 === n
	}, m.has = function(n, t) {
		return null != n && p.call(n, t)
	}, m.noConflict = function() {
		return u._ = i, this
	}, m.identity = function(n) {
		return n
	}, m.constant = function(n) {
		return function() {
			return n
		}
	}, m.noop = function() {}, m.property = w, m.propertyOf = function(n) {
		return null == n ?
		function() {} : function(t) {
			return n[t]
		}
	}, m.matcher = m.matches = function(n) {
		return n = m.extendOwn({}, n), function(t) {
			return m.isMatch(t, n)
		}
	}, m.times = function(n, t, r) {
		var e = Array(Math.max(0, n));
		t = b(t, r, 1);
		for (var u = 0; u < n; u++) e[u] = t(u);
		return e
	}, m.random = function(n, t) {
		return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1))
	}, m.now = Date.now ||
	function() {
		return (new Date).getTime()
	};
	var B = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"'": "&#x27;",
		"`": "&#x60;"
	},
		T = m.invert(B),
		R = function(n) {
			var t = function(t) {
					return n[t]
				},
				r = "(?:" + m.keys(n).join("|") + ")",
				e = RegExp(r),
				u = RegExp(r, "g");
			return function(n) {
				return n = null == n ? "" : "" + n, e.test(n) ? n.replace(u, t) : n
			}
		};
	m.escape = R(B), m.unescape = R(T), m.result = function(n, t, r) {
		var e = null == n ? void 0 : n[t];
		return void 0 === e && (e = r), m.isFunction(e) ? e.call(n) : e
	};
	var q = 0;
	m.uniqueId = function(n) {
		var t = ++q + "";
		return n ? n + t : t
	}, m.templateSettings = {
		evaluate: /<%([\s\S]+?)%>/g,
		interpolate: /<%=([\s\S]+?)%>/g,
		escape: /<%-([\s\S]+?)%>/g
	};
	var K = /(.)^/,
		z = {
			"'": "'",
			"\\": "\\",
			"\r": "r",
			"\n": "n",
			" ": "u2028",
			" ": "u2029"
		},
		D = /\\|'|\r|\n| | /g,
		L = function(n) {
			return "\\" + z[n]
		};
	m.template = function(n, t, r) {
		!t && r && (t = r), t = m.defaults({}, t, m.templateSettings);
		var e = RegExp([(t.escape || K).source, (t.interpolate || K).source, (t.evaluate || K).source].join("|") + "|$", "g"),
			u = 0,
			i = "__p+='";
		n.replace(e, function(t, r, e, o, a) {
			return i += n.slice(u, a).replace(D, L), u = a + t.length, r ? i += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'" : e ? i += "'+\n((__t=(" + e + "))==null?'':__t)+\n'" : o && (i += "';\n" + o + "\n__p+='"), t
		}), i += "';\n", t.variable || (i = "with(obj||{}){\n" + i + "}\n"), i = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n";
		try {
			var o = new Function(t.variable || "obj", "_", i)
		} catch (a) {
			throw a.source = i, a
		}
		var c = function(n) {
				return o.call(this, n, m)
			},
			f = t.variable || "obj";
		return c.source = "function(" + f + "){\n" + i + "}", c
	}, m.chain = function(n) {
		var t = m(n);
		return t._chain = !0, t
	};
	var P = function(n, t) {
			return n._chain ? m(t).chain() : t
		};
	m.mixin = function(n) {
		m.each(m.functions(n), function(t) {
			var r = m[t] = n[t];
			m.prototype[t] = function() {
				var n = [this._wrapped];
				return f.apply(n, arguments), P(this, r.apply(m, n))
			}
		})
	}, m.mixin(m), m.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(n) {
		var t = o[n];
		m.prototype[n] = function() {
			var r = this._wrapped;
			return t.apply(r, arguments), "shift" !== n && "splice" !== n || 0 !== r.length || delete r[0], P(this, r)
		}
	}), m.each(["concat", "join", "slice"], function(n) {
		var t = o[n];
		m.prototype[n] = function() {
			return P(this, t.apply(this._wrapped, arguments))
		}
	}), m.prototype.value = function() {
		return this._wrapped
	}, m.prototype.valueOf = m.prototype.toJSON = m.prototype.value, m.prototype.toString = function() {
		return "" + this._wrapped
	}, "function" == typeof define && define.amd && define("underscore", [], function() {
		return m
	})
}).call(this);
!
function(t) {
	function e(t, e) {
		this._init(t, e)
	}
	function i(t) {
		function e() {
			var t = this;
			i.each(function(e, i) {
				e[0] == t ? (e.addClass("hot_selected"), s[i].style.display = "") : (e.removeClass("hot_selected"), s[i].style.display = "none")
			})
		}
		var i = t.find("span"),
			s = t.find("ul");
		if (i.length) {
			for (var a = 30, n = 0, r = i.length; n < r; n++) a += i[n].offsetWidth;
			var o = t.find("div").first();
			o[0] && a > 278 && o.css("width", a + "px"), i.bind("mousedown", e), e.apply(i[0])
		}
	}
	var s = {
		name: "address",
		version: "1.0",
		module: e
	},
		a = 100,
		n = {
			change: 1,
			userinput: 1,
			enter: 1,
			suggestion: 1,
			filter: 1
		},
		r = "_" + s.name;
	t.extend(e.prototype, {
		delay: 0,
		source: null,
		source_get: function(e) {
			return e ? e in this.source ? t.copy(this.source[e]) : null : t.copy(this.source)
		},
		source_set: function(e) {
			e ? this.source = t.extend(this.source || {}, e) : this.source = null, this._refresh()
		},
		jsonpSource: null,
		jsonpFilter: null,
		jsonpFilter_get: function() {
			return this.jsonpFilter
		},
		jsonpFilter_set: function(t) {
			this.jsonpFilter = t
		},
		display: {
			left: 0,
			right: 1,
			suggestion: 1,
			value: 1
		},
		offset: null,
		offset_set: function(e) {
			e ? this.offset = t.copy(e) : this.offset = null, this._refresh()
		},
		offset_get: function(e) {
			return t.copy(this.offset)
		},
		minLength: 1,
		isAutoCorrect: !1,
		template: {
			suggestion: "",
			suggestionStyle: "",
			suggestionInit: i,
			filter: '                <div class="poi_suggest">                    <table cellspacing="0" cellpadding="2">                    {{if length < 1  || isUseLastData}}                    <tbody>                        <tr>                            <th class="error">å¯¹ä¸èµ·ï¼Œæš‚ä¸æ”¯æŒè¯¥åœ°ç‚¹</th>                        </tr>                    </tbody>                    {{/if}}                    {{if exname}}                    <tbody>                        <tr>                            <th>æ‚¨è¦æ‰¾çš„æ˜¯ä¸æ˜¯ <b>${exname}</b></th>                        </tr>                    </tbody>                    {{/if}}                    {{if length > 0}}                    {{enum(k, v) result}}                    <tbody>                        {{each(i, val, len) v}}                        <tr>                            <td class="{{if i===0}}icon_${k} {{/if}}{{if (k===\'scenic\' || k===\'province\' || k===\'country\') && !val.isNearBy}}item_scenic {{/if}}{{if val.isNearBy}}airport_nearby {{/if}}{{if k===\'city\' && !val.hasAirportCity && !val.isNearBy}}no_airport{{/if}}"{{if val.value}} data="${val.value}"{{/if}}{{if val.log}} log="${val.log}"{{/if}}>${getPoiItemName(i, k, val)}</td>                        </tr>                        {{/each}}                    </tbody>                    {{/enum}}                    {{/if}}                    </table>                </div>            ',
			filterStyle: ".poi_suggest{font-family:Tahoma,Arial,b8bf53,sans-serif;width:auto;position:absolute;left:0;top:0;*top:-1px;zoom:1;font-size:12px;border:1px solid #999;background-color:#fff}.poi_suggest tbody,.poi_suggest tr,.poi_suggest td{display:block}.poi_suggest table{width:300px}.poi_suggest td{padding:6px 30px 6px 10px;text-align:left;white-space:nowrap;cursor:pointer;background-color:#fff;color:#545454}.poi_suggest th{padding:6px 30px 6px 10px;font-weight:normal;background-color:#fff;color:#545454;text-align:left}.poi_suggest th b{color:#2577e3}.poi_suggest th.error{color:#c01111}.poi_suggest td b{color:#06c}.poi_suggest .active td{background-color:#2577e3;color:#fff}.poi_suggest .active td b{color:#fff}.poi_suggest .airport_nearby{background-image:url(http://pic.c-ctrip.com/fltdomestic111027/icon_search_pop.png);background-repeat:no-repeat;background-position:12px -344px;*background-position:12px -346px;color:#000}.poi_suggest .airport_nearby{padding-left:30px}.poi_suggest .active .airport_nearby{background-position:12px -379px;*background-position:12px -381px;color:#fff}.poi_suggest .icon_city,.poi_suggest .icon_airport,.poi_suggest .icon_scenic,.poi_suggest .icon_province,.poi_suggest .icon_country{background-image:url(http://pic.c-ctrip.com/fltdomestic111027/icon_search_pop.png);background-repeat:no-repeat;border-top:1px solid #ccc}.poi_suggest .item_first{border-top:0}.poi_suggest .icon_city{background-position:98% 5px}.poi_suggest .active .icon_city{background-position:98% -30px}.poi_suggest .icon_airport{background-position:98% -65px}.poi_suggest .active .icon_airport{background-position:98% -100px}.poi_suggest .icon_scenic{background-position:98% -135px}.poi_suggest .active .item_scenic,.poi_suggest .active .no_airport{background-color:#fff;cursor:default;color:#545454}.poi_suggest .active .item_scenic b,.poi_suggest .active .no_airport b{color:#06c}.poi_suggest .icon_country{background-position:98% -205px}.item_city .active .icon_country{background-position:98% -240px}.poi_suggest .icon_province{background-position:98% -275px}.item_city .active .icon_province{background-position:98% -310px}"
		},
		defaultSuggestionInit: i,
		defaultSuggestionInit_get: function() {
			return i
		},
		bind: function(t, e, i) {
			return this._event("bind", t, e, i), this
		},
		unbind: function(t, e) {
			return this._event("unbind", t, e), this
		},
		trigger: function(t, e) {
			return "userinput" === t && (e.arguments.status = null === this._lastFilterRendarData ? 0 : this._lastFilterRendarData.isUseLastData ? 1 : this._lastFilterRendarData.exname ? 2 : 0), this._event("trigger", t, e), this
		},
		focus: function(e) {
			if (this._enabled) {
				var i = this;
				e = t.extend({
					isHidden: !1,
					isSelected: !1
				}, e), e.isHidden && (i.hidden(), i._enabled = !1, setTimeout(function() {
					i._enabled = !0
				})), e.isSelected ? i.target[0].select() : i.target[0].focus()
			}
		},
		hidden: function() {
			this._isFocus && (this._hideSuggestion(), this._hideFilter(), this._tmpValue = this._lastValue = this._fixVal(this.target.value()))
		},
		select: function(t) {
			this._select(t)
		},
		_enable: !1,
		_parentDocument: null,
		_parentWindow: null,
		_iframeDocument: null,
		_iframeWindow: null,
		_iframeObject: null,
		_iframeContainter: null,
		_lastIframeSize: null,
		_iframeClock: null,
		_iframeStyle: "width:0;height:0;position:absolute;top:-100000px;left:-100000px;z-index:200;",
		_placeHolder: t.browser.isIE ? '<pre style="display:none;">placeholder</pre>' : "",
		_isFocus: !1,
		_focusClock: null,
		_checkClock: null,
		_tmpValue: null,
		_lastValue: null,
		_isCharIn: !1,
		_suggestionContainer: null,
		_suggestionStyle: "position:absolute;top:-100000px;left:-100000px;z-index:200;",
		_isSuggestionRender: !1,
		_filterContainer: null,
		_filterStyle: "position:absolute;top:-100000px;left:-100000px;z-index:200;",
		_displayRegExp: null,
		_displayHash: null,
		_colsHash: null,
		_lastFilterRendarData: null,
		_lastSelect: null,
		_suggestionEnable: !1,
		_filterEnable: !1,
		_filterCount: 0,
		_selectFlag: !1,
		_getLengthRe: /[^-ÿ]/g,
		_init: function(e, i) {
			var s = this;
			this._enabled = !0, this.target = t(e), i.delay && "number" == t.type(i.delay) && i.delay > 0 && (this.delay = i.delay), this.source = i.source || this.source, this.jsonpSource = i.jsonpSource || this.jsonpSource, this.charset = i.charset || cQuery.config("charset"), this.source || this.jsonpSource && t.loader.jsonp(this.jsonpSource, {
				charset: this.charset,
				onload: function(t) {
					this.source_set(t)
				}.bind(this)
			}), this.jsonpFilter = i.jsonpFilter || this.jsonpFilter, i.display && (this.display = t.extend(!0, {}, this.display, i.display)), this.relate = i.relate || this.relate, this.offset = "offset" in i ? i.offset : this.offset, this.minLength = "minLength" in i ? i.minLength : this.minLength, this.priority = "priority" in i ? i.priority : this.priority, this.isAutoCorrect = "isAutoCorrect" in i ? i.isAutoCorrect : this.isAutoCorrect, i.template && (this.template = t.extend(!0, {}, this.template, i.template)), this.isIframe = function() {
				if (i.hasOwnProperty("isIframe") && !i.isIframe) return !1;
				var e = s.target[0].ownerDocument,
					a = e.defaultView || e.parentWindow;
				try {
					var n = a.frameElement || !! i.isIframe && s.target[0];
					return n && (s._parentDocument = n.ownerDocument, s._parentWindow = s._parentDocument.defaultView || s._parentDocument.parentWindow, s._iframeObject = t(s._parentDocument.createElement("iframe")), s._iframeObject.css(s._iframeStyle), s._iframeObject[0].frameBorder = 0, s._iframeObject.prependTo(s._parentDocument.body), s._iframeObject.html('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="content-type" content="text/html; charset=utf-8" /><title>address</title><style>html,body{padding:0;margin:0;overflow:hidden;}</style></head><body></div></body></html>', function() {
						s._iframeWindow = s._iframeObject[0].contentWindow || s._iframeObject[0].window, s._iframeDocument = s._iframeWindow.document, s._iframeContainer = t(s._iframeDocument.createElement("container")), s._iframeContainer.css("position", "absolute"), s._iframeContainer.appendTo(s._iframeDocument.body)
					})), !! n
				} catch (r) {
					return !1
				}
			}(), t.bindMethod(this), this.target.attr("autoComplete", "on"), this._initEvent(i.onlyFilter)
		},
		_initEvent: function(t) {
			this.target.bind("keydown", this._keydown), this.target.bind("keypress", this._keypress), this.target.bind("mouseup", this._mouseup), this.target.bind("focus", this._focus), this.target.bind("blur", this._blur)
		},
		_initCols: function() {
			if (!this._colsHash) {
				var t = {};
				if (this.source && this.source.alias) {
					for (var e = 0, i = this.source.alias.length; e < i; e++) t[this.source.alias[e]] = e;
					this._colsHash = t, t = null
				}
			}
		},
		_initDisplay: function() {
			if (this._initCols(), !this._displayHash && this._colsHash) {
				var t, e, i = this._displayHash = {};
				for (t in this.display) if (e = this.display[t], /^\d$/.test(e)) i[t] = parseInt(e, 10);
				else {
					if (!(e in this._colsHash)) {
						i[t] = null;
						continue
					}
					i[t] = this._colsHash[e]
				}
			}
		},
		_refresh: function() {
			this._colsHash = null, this._tmpValue = this._lastValue = null, this._isSuggestionRender = !1, this._isFocus && this._inputCheck()
		},
		_focus: function(t) {
			if (this._enabled) {
				if (this._isFocus) return void(!this.source || this._suggestionEnable || this._filterEnable || this._showSuggestion());
				if (this._isFocus = !0, this.target.attr("autoComplete", "off"), this._isCharIn = !1, this._tmpValue = this._lastValue = null, this._clearFilter(), t && t.type && this._inputCheck(), clearTimeout(this._checkClock), clearInterval(this._focusClock), this._focusClock = setInterval(this._focusInterval, a), this.isIframe && (clearInterval(this._iframeClock), this._iframeClock = setInterval(this._fixIframeSize, a)), t && t.type) {
					var e = this.target[0];
					switch (t.type) {
					case "mousedown":
						setTimeout(function() {
							e.select()
						});
						break;
					case "focus":
						e.select()
					}
				}
			}
		},
		_blur: function() {
			if (this._enabled && this._isFocus) {
				if (this._isFocus = !1, this.target.attr("autoComplete", "on"), !this._selectFlag) {
					var t = this.target.value() || "";
					if (this._filterEnable) if (this._lastSelect && (null === this._lastFilterRendarData || this._lastFilterRendarData.length > 0 && this._lastFilterRendarData.isUseLastData !== !0)) {
						var e = this._lastSelect.attr("data"),
							i = this._lastSelect[0];
						this._select(e), this.trigger("userinput", {
							arguments: {
								eventType: "blur",
								target: i,
								value: t,
								autoCorrectValue: this.target.value(),
								data: e
							}
						})
					} else this._unselect(), this.trigger("userinput", {
						arguments: {
							eventType: "blur",
							target: null,
							value: t,
							autoCorrectValue: this.target.value(),
							data: null
						}
					});
					else "" === t.trim() && this._unselect()
				}
				this._hideSuggestion(), this._hideFilter(), clearTimeout(this._checkClock), clearInterval(this._focusClock), this.isIframe && clearInterval(this._iframeClock)
			}
		},
		_keypress: function() {
			this._isCharIn = !0
		},
		_keydown: function(e) {
			switch (this._isFocus || this._focus(), e.keyCode) {
			case 13:
				if (this._filterEnable && this._lastSelect) {
					var i = this.target.value(),
						s = this._lastSelect.attr("data"),
						a = this._lastSelect[0];
					this._select(s);
					var n = this.target.value();
					this.trigger("userinput", {
						arguments: {
							eventType: "keydown",
							target: a,
							value: i,
							autoCorrectValue: n,
							data: s
						}
					});
					break
				}
				this.trigger("enter", {
					arguments: this.target.value()
				});
				break;
			case 38:
			case 40:
				if (38 != e.keyCode && 40 != e.keyCode) return !0;
				if (this._filterEnable) {
					var r = (this._lastSelect, this._lastFilterRendarData);
					if (r) {
						var o = 38 === e.keyCode ? -1 : 1,
							l = this._filterContainer.find("table:first")[0];
						if (!l) return !1;
						var h = this._filterContainer.find("tr.active"),
							u = 0;
						h.length > 0 && (u = h[0].rowIndex);
						for (var c, f = 10; f-- && (u += o, o > 0 ? u >= l.rows.length && (u = 0) : u < 0 && (u = l.rows.length - 1), c = t(l.rows[u].cells[0]), c.hasClass("no_airport") || c.hasClass("item_scenic") || c.hasClass("error")););
						h.length > 0 && (this._lastSelect = h.find("[data]:first")), this._showHover(l.rows[u].cells[0])
					}
				}
				break;
			default:
				return t.browser.isIPadUCWeb && (this._isCharIn = !0), !0
			}
			return e.stop(), !1
		},
		_mouseup: function() {
			var t = this.target[0];
			t.releaseCapture && t.releaseCapture()
		},
		_getLength: function(t) {
			return t.replace(this._getLengthRe, "  ").length
		},
		_focusInterval: function() {
			var t = this._fixVal(this.target.value());
			this.source && this._tmpValue !== t && (this._tmpValue = t, this.delay ? (clearTimeout(this._checkClock), this._checkClock = setTimeout(this._inputCheck, this.delay)) : this._inputCheck())
		},
		_fixVal: function(t) {
			return t.trim().replace(/[\|@ ]/g, "")
		},
		_inputCheck: function() {
			var t = this._fixVal(this.target.value());
			this.source && this._lastValue !== t && (null !== this._lastValue && (this._isCharIn = !0), this._lastValue = t, this._getLength(t) >= this.minLength && this._isCharIn ? this._showFilter(t) : this._showSuggestion())
		},
		_showSuggestion: function() {
			if (this._lastFilterRendarData = null, this._suggestionEnable = !0, this._hideFilter(), this._clearFilter(), !this._suggestionContainer) {
				if (this.isIframe) {
					var e = this._iframeDocument.createElement("div");
					e.id = "address_suggestionContainer_" + this.target.uid()
				} else {
					var e = document.createElement("div");
					e.id = "address_suggestionContainer_" + this.target.uid(), e.className = "address_suggestionContainer", e.style.cssText = this._suggestionStyle
				}
				this._suggestionContainer = t(e), this._suggestionContainer.bind("mousedown", this._filterMousedown)
			}
			if (this._suggestionContainer.appendTo(this.isIframe ? this._iframeContainer : t.container), !this._isSuggestionRender) {
				this._isSuggestionRender = !0;
				var i = [],
					s = 0,
					a = this._suggestionContainer[0].id;
				"string" == t.type(this.template.suggestionStyle) && (i[s++] = this._placeHolder + "<style>" + this.template.suggestionStyle.replace(/(\s*)([^\{\}]+)\{/g, function(t, e, i) {
					return e + i.replace(/([^,]+)/g, "#" + a + " $1") + "{"
				}) + "</style>");
				var n = {
					data: this.source.suggestion
				};
				i[s++] = t.tmpl.render(this.template.suggestion, n), this._suggestionContainer.html(i.join("")), "function" == t.type(this.template.suggestionInit) && this.template.suggestionInit(this._suggestionContainer), this.trigger("suggestion", {
					arguments: [this._suggestionContainer]
				})
			}
			if (this.isIframe) this._fixIframeSize(), this._iframeObject.offsetA(this.target, this.offset);
			else {
				var r = this.target.offset();
				r.left = r.left - 45, r.top = r.top + 57, this._suggestionContainer.offset(r), this._suggestionContainer.cover()
			}
		},
		_fixIframeSize: function() {
			if (this.isIframe) {
				var t = this._iframeContainer[0],
					e = t.offsetWidth + "px",
					i = t.offsetHeight + "px";
				this._lastIframeSize && e == this._lastIframeSize.width && i == this._lastIframeSize.height || (this._lastIframeSize = {
					width: e,
					height: i
				}, this._iframeObject.css(this._lastIframeSize))
			}
		},
		_hideSuggestion: function() {
			if (this._suggestionEnable = !1, this._suggestionContainer) {
				try {
					this._suggestionContainer.remove()
				} catch (t) {}
				this.isIframe ? (this._iframeObject.css(this._iframeStyle), this._lastIframeSize = null) : (this._suggestionContainer.css(this._suggestionStyle), this._suggestionContainer.uncover())
			}
		},
		_showFilter: function(e) {
			if (this._filterEnable = !0, this._filterCount++, this._hideSuggestion(), !this._filterContainer) {
				if (this.isIframe) {
					var i = this._iframeDocument.createElement("div");
					i.id = "address_filterContainer_" + this.target.uid()
				} else {
					var i = document.createElement("div");
					i.id = "address_filterContainer_" + this.target.uid(), i.style.cssText = this._filterStyle
				}
				this._filterContainer = t(i), this._filterContainer.bind("mouseover", this._filterMouseover), this._filterContainer.bind("mousedown", this._filterMousedown)
			}
			e = e.match(/\((.+?æœºåœº)\)/) || e.match(/\(([A-Z]{3})\)/) ? RegExp.$1 : e.split("(").shift(), this.jsonpFilter && this._filterDataByJsonp(this.jsonpFilter, e, !1, !1)
		},
		_clearFilter: function() {
			this._lastSelect = null
		},
		_filterMouseover: function(t) {
			for (var e = t.target; e && "TD" !== e.tagName;) e = e.parentNode;
			if (e) {
				var i = e.getAttribute("data");
				if (i) return void this._showHover(e)
			}
		},
		_filterMousedown: function(e) {
			var i = this,
				s = e.target,
				a = "TD",
				n = "mousedown";
			for (this._suggestionEnable && (n = "suggestionMousedown", a = "A"), this._filterEnable && (n = "filterMousedown"); s && s.tagName != a;) s = s.parentNode;
			if (s) {
				var r = s.getAttribute("data");
				if (r) {
					var o = this.target.value(),
						l = function() {
							var t = i.target.value();
							i.trigger("userinput", {
								arguments: {
									eventType: n,
									target: s,
									value: o,
									autoCorrectValue: t,
									data: r
								}
							})
						};
					t.browser.isIE ? (s.onclick = function() {
						i._select(r), l()
					}, this._isSuggestionRender = !1) : (this._select(r), l())
				}
			}
			return e.stop(), this.target[0].setCapture && this.target[0].setCapture(), !1
		},
		_hideFilter: function() {
			if (this._filterEnable = !1, this._filterContainer) {
				try {
					this._filterContainer.remove()
				} catch (t) {}
				this.isIframe ? (this._iframeObject.css(this._iframeStyle), this._lastIframeSize = null) : (this._filterContainer.css(this._filterStyle), this._filterContainer.uncover())
			}
		},
		_filterDataByJsonp: function(e, i, s, a, n) {
			this._initDisplay();
			var r = this._filterCount;
			if (i = ("" + i).substr(0, 150), e = t.tmpl.render(e, {
				key: encodeURIComponent(i),
				accurate: s ? 1 : 0
			}), t.loader.jsonp(e, {
				charset: this.charset,
				onload: function(e) {
					if ((this._filterEnable || a) && r == this._filterCount) {
						var i = this._getList(e);
						if (i && i.length < 1 && this._lastFilterRendarData && (i = t.copy(this._lastFilterRendarData), i.isUseLastData = !0), this._lastFilterRendarData = i, a && "function" === t.type(n)) {
							if (i.length < 1) n(null);
							else for (var s in i.result) {
								n(i.result[s][0].value);
								break
							}
							return
						}
						this._updateFilter(i)
					}
				}.bind(this)
			}), a) return !1
		},
		_updateFilter: function(e) {
			var i = [];
			"string" == t.type(this.template.filterStyle) && (i.push(this._placeHolder), i.push("<style>"), i.push(this.template.filterStyle), i.push("</style>")), i.push(t.tmpl.render(this.template.filter, e)), this._filterContainer.html(i.join("")), this.trigger("filter", {
				arguments: [this._filterContainer]
			}), this._showHover(), this.isIframe ? (this._filterContainer.appendTo(this._iframeContainer), this._fixIframeSize(), this._iframeObject.offsetA(this.target, this.offset)) : (this._filterContainer.appendTo(t.container), this._filterContainer.offset(this.target, this.offset), this._filterContainer.cover())
		},
		_showHover: function(e) {
			if (e = e ? t(e) : this._filterContainer.find("*[data]:first"), this._lastSelect) {
				if (e.length > 0 && this._lastSelect[0] == e[0]) return;
				this._lastSelect.parentNode().removeClass("active")
			}
			e.length > 0 ? (e.parentNode().addClass("active"), this._lastSelect = e) : this._lastSelect = null
		},
		_checkCountry: function(t) {
			return "ä¸­å›½" === t || "ä¸­åœ‹" === t
		},
		_getExtInfo: function(t, e, i) {
			var s, a;
			for (a = new RegExp("(" + t.replace(/(\(|\)|\\|\[|\])/g, "\\$1") + ")", "i"); void 0 !== (s = e.shift());) if (s && a.test(s)) return s = s.replace(a, "<b>$1</b>"), i ? "(" + s + ")" : s;
			return ""
		},
		_getList: function(t) {
			if (!t) return null;
			var e, i, s, a, n, r = {},
				o = 0,
				l = "";
			if (n = (t.Key || "").trim().replace(/\s{2,}/g, " "), t = t.Data, null !== t && t.length > 0) {
				a = /^[a-z ]+$/i.test(n);
				for (var h = 0, u = t.length; h < u && !(o++ > 11); h++) {
					switch (e = t[h], i = {}, s = null, e.Country ? i.isChina = this._checkCountry(e.Country) : 1 !== e.Type && 2 !== e.Type || (i.isChina = this._checkCountry(1 === e.Type ? e.Name : e.Datas[0].Country)), i.name = e.Name, i.extInfo = "", i.isChina || (i.country = e.Country || "", i.province = e.Province || ""), i.log = [e.Type, e.Name].join("|"), e.EName = (e.EName || "").trim().toLowerCase(), e.Spell = (e.Spell || "").trim().toLowerCase(), e.ShortSpell = (e.ShortSpell || "").trim().toUpperCase(), 3 !== e.Type && (a ? (i.extInfo = this._getExtInfo(n, [e.ShortSpell], a), "" === i.extInfo && (i.extInfo = this._getExtInfo(n, [e.Code], i.isChina), "" !== i.extInfo && (i.code = "")), "" === i.extInfo && (i.extInfo = this._getExtInfo(n, [e.EName, e.Spell], a))) : (i.name = this._getExtInfo(n, [e.Name], a), "" === i.name && (l = i.name = e.Name))), e.Type) {
					case 5:
					case 4:
					case 0:
						if (s = 0 === e.Type ? "scenic" : "city", "undefined" == typeof i.code && "city" === s && (i.code = e.Code), 5 === e.Type && (i.value = [e.EName || e.Spell, e.Name + "(" + e.Code + ")", e.CityId, e.Code, e.TimeZone].join("|")), i.hasAirportCity = 5 === e.Type, !i.hasAirportCity) {
							if ("undefined" == typeof e.Datas || e.Datas.length < 1) {
								s = null;
								break
							}
							r[s] = (r[s] || []).concat(i);
							var c, f, _ = [],
								g = {},
								p = {};
							if (e.Datas.length > 1) for (var d = 0, m = e.Datas.length; d < m; d++) c = e.Datas[d], f = c.Datas[0].Name, g[f] = (g[f] || 0) + 1, p[f] = {
								name: c.Datas[0].EName || c.Datas[0].Spell,
								code: c.Datas[0].Code,
								TimeZone: c.Datas[0].TimeZone,
								id: c.Datas[0].CityId
							};
							for (var y, v, d = 0, m = e.Datas.length; d < m; d++) c = e.Datas[d], y = {}, y.name = c.Datas[0].Name, y.airportName = c.Name, y.dist = c.Dist, y.isNearBy = !0, y.log = [e.Type, e.Name].join("|"), y.value = [c.Datas[0].EName || c.Datas[0].Spell, y.name + "(" + c.Name + ")(" + c.Code + ")", c.Datas[0].CityId, c.Datas[0].Code, c.Code, c.Datas[0].TimeZone].join("|"), v = y.name, g[v] && g[v] > 1 && (_.push({
								isCity: !0,
								isNearBy: !0,
								log: [e.Type, e.Name].join("|"),
								value: [p[v].name, v + "(" + p[v].code + ")", p[v].id, p[v].code, p[v].TimeZone].join("|"),
								name: v
							}), ++o, delete g[y.name]), _.push(y), ++o;
							r[s] = (r[s] || []).concat(_), s = null
						}
						break;
					case 3:
						s = "airport", i.name = e.Datas[0].Name, i.airportName = a ? e.Name : this._getExtInfo(n, [e.Name], a), i.code = a ? this._getExtInfo(n, [e.Code], !1) : e.Code, "" === i.code && (i.extInfo = this._getExtInfo(n, [e.ShortSpell, e.Spell], a), i.code = e.Code), i.value = [e.Datas[0].EName || e.Datas[0].Spell, e.Datas[0].Name + "(" + e.Name + ")(" + e.Code + ")", e.Datas[0].CityId, e.Datas[0].Code, e.Code, e.Datas[0].TimeZone].join("|");
						break;
					case 2:
					case 1:
						s = 2 === e.Type ? "province" : "country", i.country = e.Datas[0].Country, i.isCountry = 1 === e.Type, r[s] = (r[s] || []).concat(i);
						for (var C = [], d = 0, m = e.Datas.length; d < m; d++) C.push({
							name: i.name,
							isNearBy: !0,
							extInfo: i.extInfo,
							log: [e.Type, e.Name].join("|"),
							value: [e.Datas[d].EName || e.Datas[d].Spell, e.Datas[d].Name + "(" + e.Datas[d].Code + ")", e.Datas[d].CityId, e.Datas[d].Code, e.Datas[d].TimeZone].join("|"),
							isCountry: 1 === e.Type,
							sName: e.Datas[d].Name
						}), ++o;
						r[s] = (r[s] || []).concat(C), s = null
					}
					null !== s && (r[s] = (r[s] || []).concat([i]))
				}
			}
			return {
				result: r,
				length: o,
				exname: l
			}
		},
		_getItemName: function(t, e, i) {
			var s = "";
			switch (e) {
			case "city":
				s += i.isNearBy ? "é‚»è¿‘æœºåœº: " + i.name + " " + (i.isCity ? " æ‰€æœ‰æœºåœº" : " " + i.airportName + (i.dist ? " - " + i.dist + "å…¬é‡Œ" : "")) : i.name + " " + (i.isChina ? "" : i.country + " " + i.province + " " + (i.code || "")) + " " + i.extInfo, i.hasAirportCity || i.isNearBy || (s += " - è¯¥åŸŽå¸‚æ— æœºåœº");
				break;
			case "airport":
				s = i.name + " " + i.airportName, i.isChina || (s += " " + i.country), s += " " + i.code + " " + i.extInfo;
				break;
			case "scenic":
				s += i.isNearBy ? "é‚»è¿‘æœºåœº: " + i.name + (i.isCity ? " æ‰€æœ‰æœºåœº" : " " + i.airportName + (i.dist ? " - " + i.dist + "å…¬é‡Œ" : "")) : i.name + " " + i.extInfo, i.isNearBy || i.isChina || (s += " " + i.country), i.isNearBy || (s += " - è¯¥åœ°ç‚¹ä¸ºæ™¯ç‚¹");
				break;
			case "province":
			case "country":
				s += i.isNearBy ? "ç›¸å…³åŸŽå¸‚: " + i.sName : (i.isCountry || i.isChina ? "" : i.country + " ") + i.name + " " + i.extInfo + " - è¯¥åœ°ç‚¹ä¸º" + ("province" === e ? "çœä»½" : "å›½å®¶")
			}
			return s
		},
		_select: function(e) {
			var i = this;
			this._selectFlag = !0, setTimeout(function() {
				i._selectFlag = !1
			}), this._initDisplay();
			var s = e,
				a = s.split("|");
			if (a.length > 1 && (s = a[this._displayHash ? this._displayHash.value : 1] || ""), this._suggestionEnable) {
				var n = "";
				4 === a.length && (n = a.pop());
				try {
					a.push(a[1].match(/\(([a-z]{3})\)/i)[1])
				} catch (r) {}
				"" !== n && a.push(n), e = a.join("|")
			}
			var o = s.replace(/(\S*)\([A-Z]+\)/, "$1");
			if (this._tmpValue = this._lastValue = o, this.target.value(o), this._clearFilter(), this._hideSuggestion(), this._hideFilter(), this.relate) for (var l in this.relate) if (this.relate.hasOwnProperty(l)) {
				var h = t(this.relate[l]);
				if (0 === h.length) continue;
				if (/^\d$/.test(l)) l = parseInt(l, 10);
				else {
					if (!(l in this._colsHash)) continue;
					l = this._colsHash[l]
				}
				h.value(a[l] || "")
			}
			this.trigger("change", {
				arguments: {
					value: s,
					data: e
				}
			})
		},
		_unselect: function() {
			if (this._tmpValue = this._lastValue = null, this.target.value(""), this._clearFilter(), this._hideSuggestion(), this._hideFilter(), this.relate) for (var e in this.relate) if (this.relate.hasOwnProperty(e)) {
				var i = t(this.relate[e]);
				if (i.length < 1) continue;
				i.value("")
			}
			this.trigger("change", {
				arguments: {
					value: "",
					data: ""
				}
			})
		},
		_event: function(e, i) {
			switch (t.type(i)) {
			case "string":
				i = [i];
				break;
			case "array":
				break;
			default:
				return
			}
			for (var s, a = 0, o = i.length; a < o; a++) s = i[a].trim(), s && "string" == t.type(s) && s in n && this.target[e].apply(this.target, [s + r].concat(Array.prototype.slice.call(arguments, 2)))
		}
	}), window.getPoiItemName = e.prototype._getItemName, t.mod.reg(s)
}(cQuery);
!
function(e, t) {
	function n(e) {
		return "string" == typeof e
	}
	function r(e) {
		var t = g.call(arguments, 1);
		return function() {
			return e.apply(this, t.concat(g.call(arguments)))
		}
	}
	function o(e) {
		return e.replace(/^[^#]*#?(.*)$/, "$1")
	}
	function a(e) {
		return e.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/, "$1")
	}
	function i(r, o, a, i, c) {
		var u, s, p, h, d;
		return i !== f ? (p = a.match(r ? /^([^#]*)\#?(.*)$/ : /^([^#?]*)\??([^#]*)(#?.*)/), d = p[3] || "", 2 === c && n(i) ? s = i.replace(r ? R : E, "") : (h = l(p[2]), i = n(i) ? l[r ? A : w](i) : i, s = 2 === c ? i : 1 === c ? e.extend({}, i, h) : e.extend({}, h, i), s = b(s), r && (s = s.replace(m, y))), u = p[1] + (r ? "#" : s || !p[1] ? "?" : "") + s + d) : u = o(a !== f ? a : t[S][q]), u
	}
	function c(e, t, r) {
		return t === f || "boolean" == typeof t ? (r = t, t = b[e ? A : w]()) : t = n(t) ? t.replace(e ? R : E, "") : t, l(t, r)
	}
	function u(t, r, o, a) {
		return n(o) || "object" == typeof o || (a = o, o = r, r = f), this.each(function() {
			var n = e(this),
				i = r || v()[(this.nodeName || "").toLowerCase()] || "",
				c = i && n.attr(i) || "";
			n.attr(i, b[t](c, o, a))
		})
	}
	var f, s, l, p, h, d, v, m, g = Array.prototype.slice,
		y = decodeURIComponent,
		b = e.param,
		$ = e.bbq = e.bbq || {},
		x = e.event.special,
		j = "hashchange",
		w = "querystring",
		A = "fragment",
		N = "elemUrlAttr",
		S = "location",
		q = "href",
		C = "src",
		E = /^.*\?|#.*$/g,
		R = /^.*\#/,
		U = {};
	b[w] = r(i, 0, a), b[A] = s = r(i, 1, o), s.noEscape = function(t) {
		t = t || "";
		var n = e.map(t.split(""), encodeURIComponent);
		m = new RegExp(n.join("|"), "g")
	}, s.noEscape(",/"), e.deparam = l = function(t, n) {
		var r = {},
			o = {
				"true": !0,
				"false": !1,
				"null": null
			};
		return e.each(t.replace(/\+/g, " ").split("&"), function(t, a) {
			var i, c = a.split("="),
				u = y(c[0]),
				s = r,
				l = 0,
				p = u.split("]["),
				h = p.length - 1;
			if (/\[/.test(p[0]) && /\]$/.test(p[h]) ? (p[h] = p[h].replace(/\]$/, ""), p = p.shift().split("[").concat(p), h = p.length - 1) : h = 0, 2 === c.length) if (i = y(c[1]), n && (i = i && !isNaN(i) ? +i : "undefined" === i ? f : o[i] !== f ? o[i] : i), h) for (; l <= h; l++) u = "" === p[l] ? s.length : p[l], s = s[u] = l < h ? s[u] || (p[l + 1] && isNaN(p[l + 1]) ? {} : []) : i;
			else e.isArray(r[u]) ? r[u].push(i) : r[u] !== f ? r[u] = [r[u], i] : r[u] = i;
			else u && (r[u] = n ? f : "")
		}), r
	}, l[w] = r(c, 0), l[A] = p = r(c, 1), e[N] || (e[N] = function(t) {
		return e.extend(U, t)
	})({
		a: q,
		base: q,
		iframe: C,
		img: C,
		input: C,
		form: "action",
		link: q,
		script: C
	}), v = e[N], e.fn[w] = r(u, w), e.fn[A] = r(u, A), $.pushState = h = function(e, r) {
		n(e) && /^#/.test(e) && r === f && (r = 2);
		var o = e !== f,
			a = s(t[S][q], o ? e : {}, o ? r : 2);
		t[S][q] = a + (/#/.test(a) ? "" : "#")
	}, $.getState = d = function(e, t) {
		return e === f || "boolean" == typeof e ? p(e) : p(t)[e]
	}, $.removeState = function(t) {
		var n = {};
		t !== f && (n = d(), e.each(e.isArray(t) ? t : arguments, function(e, t) {
			delete n[t]
		})), h(n, 2)
	}, x[j] = e.extend(x[j], {
		add: function(t) {
			function n(e) {
				var t = e[A] = s();
				e.getState = function(e, n) {
					return e === f || "boolean" == typeof e ? l(t, e) : l(t, n)[e]
				}, r.apply(this, arguments)
			}
			var r;
			return e.isFunction(t) ? (r = t, n) : (r = t.handler, void(t.handler = n))
		}
	})
}(jQuery, this), function(e, t, n) {
	function r(e) {
		return e = e || t[i][u], e.replace(/^[^#]*#?(.*)$/, "$1")
	}
	var o, a = e.event.special,
		i = "location",
		c = "hashchange",
		u = "href",
		f = e.browser,
		s = document.documentMode,
		l = f.msie && (s === n || s < 8),
		p = "on" + c in t && !l;
	e[c + "Delay"] = 100, a[c] = e.extend(a[c], {
		setup: function() {
			return !p && void e(o.start)
		},
		teardown: function() {
			return !p && void e(o.stop)
		}
	}), o = function() {
		function n() {
			f = s = function(e) {
				return e
			}, l && (a = e('<iframe src="javascript:0"/>').hide().insertAfter("body")[0].contentWindow, s = function() {
				return r(a.document[i][u])
			}, (f = function(e, t) {
				if (e !== t) {
					var n = a.document;
					n.open().close(), n[i].hash = "#" + e
				}
			})(r()))
		}
		var o, a, f, s, p = {};
		return p.start = function() {
			if (!o) {
				var a = r();
				f || n(), function l() {
					var n = r(),
						p = s(a);
					n !== a ? (f(a = n, p), e(t).trigger(c)) : p !== a && (t[i][u] = t[i][u].replace(/#.*/, "") + "#" + p), o = setTimeout(l, e[c + "Delay"])
				}()
			}
		}, p.stop = function() {
			a || (o && clearTimeout(o), o = 0)
		}, p
	}()
}(jQuery, this);
!
function(e) {
	e.fn.customScrollbar = function(i, t) {
		var o = {
			skin: void 0,
			hScroll: !0,
			vScroll: !0,
			updateOnWindowResize: !1,
			animationSpeed: 300,
			onCustomScroll: void 0,
			swipeSpeed: 1,
			wheelSpeed: 40,
			fixedThumbWidth: void 0,
			fixedThumbHeight: void 0,
			preventDefaultScroll: !1
		},
			s = function(i, t) {
				this.$element = e(i), this.options = t, this.addScrollableClass(), this.addSkinClass(), this.addScrollBarComponents(), this.options.vScroll && (this.vScrollbar = new n(this, new r)), this.options.hScroll && (this.hScrollbar = new n(this, new l)), this.$element.data("scrollable", this), this.initKeyboardScrolling(), this.bindEvents()
			};
		s.prototype = {
			addScrollableClass: function() {
				this.$element.hasClass("scrollable") || (this.scrollableAdded = !0, this.$element.addClass("scrollable"))
			},
			removeScrollableClass: function() {
				this.scrollableAdded && this.$element.removeClass("scrollable")
			},
			addSkinClass: function() {
				"string" != typeof this.options.skin || this.$element.hasClass(this.options.skin) || (this.skinClassAdded = !0, this.$element.addClass(this.options.skin))
			},
			removeSkinClass: function() {
				this.skinClassAdded && this.$element.removeClass(this.options.skin)
			},
			addScrollBarComponents: function() {
				this.assignViewPort(), 0 == this.$viewPort.length && (this.$element.wrapInner('<div class="viewport" />'), this.assignViewPort(), this.viewPortAdded = !0), this.assignOverview(), 0 == this.$overview.length && (this.$viewPort.wrapInner('<div class="overview" />'), this.assignOverview(), this.overviewAdded = !0), this.addScrollBar("vertical", "prepend"), this.addScrollBar("horizontal", "append")
			},
			removeScrollbarComponents: function() {
				this.removeScrollbar("vertical"), this.removeScrollbar("horizontal"), this.overviewAdded && this.$element.unwrap(), this.viewPortAdded && this.$element.unwrap()
			},
			removeScrollbar: function(e) {
				this[e + "ScrollbarAdded"] && this.$element.find(".scroll-bar." + e).remove()
			},
			assignViewPort: function() {
				this.$viewPort = this.$element.find(".viewport")
			},
			assignOverview: function() {
				this.$overview = this.$viewPort.find(".overview")
			},
			addScrollBar: function(e, i) {
				0 == this.$element.find(".scroll-bar." + e).length && (this.$element[i]("<div class='scroll-bar " + e + "'><div class='thumb'></div></div>"), this[e + "ScrollbarAdded"] = !0)
			},
			resize: function(e) {
				this.vScrollbar && this.vScrollbar.resize(e), this.hScrollbar && this.hScrollbar.resize(e)
			},
			scrollTo: function(e) {
				this.vScrollbar && this.vScrollbar.scrollToElement(e), this.hScrollbar && this.hScrollbar.scrollToElement(e)
			},
			scrollToXY: function(e, i) {
				this.scrollToX(e), this.scrollToY(i)
			},
			scrollToX: function(e) {
				this.hScrollbar && this.hScrollbar.scrollOverviewTo(e, !0)
			},
			scrollToY: function(e) {
				this.vScrollbar && this.vScrollbar.scrollOverviewTo(e, !0)
			},
			scrollByX: function(e) {
				this.hScrollbar && this.scrollToX(this.hScrollbar.overviewPosition() + e)
			},
			scrollByY: function(e) {
				this.vScrollbar && this.scrollToY(this.vScrollbar.overviewPosition() + e)
			},
			remove: function() {
				this.removeScrollableClass(), this.removeSkinClass(), this.removeScrollbarComponents(), this.$element.data("scrollable", null), this.removeKeyboardScrolling(), this.vScrollbar && this.vScrollbar.remove(), this.hScrollbar && this.hScrollbar.remove()
			},
			setAnimationSpeed: function(e) {
				this.options.animationSpeed = e
			},
			isInside: function(i, t) {
				var o = e(i),
					s = e(t),
					n = o.offset(),
					l = s.offset();
				return n.top >= l.top && n.left >= l.left && n.top + o.height() <= l.top + s.height() && n.left + o.width() <= l.left + s.width()
			},
			initKeyboardScrolling: function() {
				var e = this;
				this.elementKeydown = function(i) {
					document.activeElement === e.$element[0] && (e.vScrollbar && e.vScrollbar.keyScroll(i), e.hScrollbar && e.hScrollbar.keyScroll(i))
				}, this.$element.attr("tabindex", "-1").keydown(this.elementKeydown)
			},
			removeKeyboardScrolling: function() {
				this.$element.removeAttr("tabindex").unbind("keydown", this.elementKeydown)
			},
			bindEvents: function() {
				this.options.onCustomScroll && this.$element.on("customScroll", this.options.onCustomScroll)
			}
		};
		var n = function(e, i) {
				this.scrollable = e, this.sizing = i, this.$scrollBar = this.sizing.scrollBar(this.scrollable.$element), this.$thumb = this.$scrollBar.find(".thumb"), this.setScrollPosition(0, 0), this.resize(), this.initMouseMoveScrolling(), this.initMouseWheelScrolling(), this.initTouchScrolling(), this.initMouseClickScrolling(), this.initWindowResize()
			};
		n.prototype = {
			resize: function(e) {
				this.overviewSize = this.sizing.size(this.scrollable.$overview), this.calculateViewPortSize(), this.sizing.size(this.scrollable.$viewPort, this.viewPortSize), this.ratio = this.viewPortSize / this.overviewSize, this.sizing.size(this.$scrollBar, this.viewPortSize), this.thumbSize = this.calculateThumbSize(), this.sizing.size(this.$thumb, this.thumbSize), this.maxThumbPosition = this.calculateMaxThumbPosition(), this.maxOverviewPosition = this.calculateMaxOverviewPosition(), this.enabled = this.overviewSize > this.viewPortSize, void 0 === this.scrollPercent && (this.scrollPercent = 0), this.enabled ? this.rescroll(e) : this.setScrollPosition(0, 0), this.$scrollBar.toggle(this.enabled)
			},
			calculateViewPortSize: function() {
				var e = this.sizing.size(this.scrollable.$element);
				if (e > 0 && !this.maxSizeUsed) this.viewPortSize = e, this.maxSizeUsed = !1;
				else {
					var i = this.sizing.maxSize(this.scrollable.$element);
					this.viewPortSize = Math.min(i, this.overviewSize), this.maxSizeUsed = !0
				}
			},
			calculateThumbSize: function() {
				var e, i = this.sizing.fixedThumbSize(this.scrollable.options);
				return e = i ? i : this.ratio * this.viewPortSize, Math.max(e, this.sizing.minSize(this.$thumb))
			},
			initMouseMoveScrolling: function() {
				var i = this;
				this.$thumb.mousedown(function(e) {
					i.enabled && i.startMouseMoveScrolling(e)
				}), this.documentMouseup = function(e) {
					i.stopMouseMoveScrolling(e)
				}, e(document).mouseup(this.documentMouseup), this.documentMousemove = function(e) {
					i.mouseMoveScroll(e)
				}, e(document).mousemove(this.documentMousemove), this.$thumb.click(function(e) {
					e.stopPropagation()
				})
			},
			removeMouseMoveScrolling: function() {
				this.$thumb.unbind(), e(document).unbind("mouseup", this.documentMouseup), e(document).unbind("mousemove", this.documentMousemove)
			},
			initMouseWheelScrolling: function() {
				var e = this;
				this.scrollable.$element.mousewheel(function(i, t, o, s) {
					if (e.enabled) {
						var n = e.mouseWheelScroll(o, s);
						e.stopEventConditionally(i, n)
					}
				})
			},
			removeMouseWheelScrolling: function() {
				this.scrollable.$element.unbind("mousewheel")
			},
			initTouchScrolling: function() {
				if (document.addEventListener) {
					var e = this;
					this.elementTouchstart = function(i) {
						e.enabled && e.startTouchScrolling(i)
					}, this.scrollable.$element[0].addEventListener("touchstart", this.elementTouchstart), this.documentTouchmove = function(i) {
						e.touchScroll(i)
					}, this.scrollable.$element[0].addEventListener("touchmove", this.documentTouchmove), this.elementTouchend = function(i) {
						e.stopTouchScrolling(i)
					}, this.scrollable.$element[0].addEventListener("touchend", this.elementTouchend)
				}
			},
			removeTouchScrolling: function() {
				document.addEventListener && (this.scrollable.$element[0].removeEventListener("touchstart", this.elementTouchstart), document.removeEventListener("touchmove", this.documentTouchmove), this.scrollable.$element[0].removeEventListener("touchend", this.elementTouchend))
			},
			initMouseClickScrolling: function() {
				var e = this;
				this.scrollBarClick = function(i) {
					e.mouseClickScroll(i)
				}, this.$scrollBar.click(this.scrollBarClick)
			},
			removeMouseClickScrolling: function() {
				this.$scrollBar.unbind("click", this.scrollBarClick)
			},
			initWindowResize: function() {
				if (this.scrollable.options.updateOnWindowResize) {
					var i = this;
					this.windowResize = function() {
						i.resize()
					}, e(window).resize(this.windowResize)
				}
			},
			removeWindowResize: function() {
				e(window).unbind("resize", this.windowResize)
			},
			isKeyScrolling: function(e) {
				return null != this.keyScrollDelta(e)
			},
			keyScrollDelta: function(e) {
				for (var i in this.sizing.scrollingKeys) if (i == e) return this.sizing.scrollingKeys[e](this.viewPortSize);
				return null
			},
			startMouseMoveScrolling: function(i) {
				this.mouseMoveScrolling = !0, e("body").addClass("not-selectable"), this.setUnselectable(e("body"), "on"), this.setScrollEvent(i), i.preventDefault()
			},
			stopMouseMoveScrolling: function(i) {
				this.mouseMoveScrolling = !1, e("body").removeClass("not-selectable"), this.setUnselectable(e("body"), null)
			},
			setUnselectable: function(e, i) {
				e.attr("unselectable") != i && (e.attr("unselectable", i), e.find(":not(input)").attr("unselectable", i))
			},
			mouseMoveScroll: function(e) {
				if (this.mouseMoveScrolling) {
					var i = this.sizing.mouseDelta(this.scrollEvent, e);
					this.scrollThumbBy(i), this.setScrollEvent(e)
				}
			},
			startTouchScrolling: function(e) {
				e.touches && 1 == e.touches.length && (this.setScrollEvent(e.touches[0]), this.touchScrolling = !0, e.stopPropagation())
			},
			touchScroll: function(e) {
				if (this.touchScrolling && e.touches && 1 == e.touches.length) {
					var i = -this.sizing.mouseDelta(this.scrollEvent, e.touches[0]) * this.scrollable.options.swipeSpeed,
						t = this.scrollOverviewBy(i);
					t && this.setScrollEvent(e.touches[0]), this.stopEventConditionally(e, t)
				}
			},
			stopTouchScrolling: function(e) {
				this.touchScrolling = !1, e.stopPropagation()
			},
			mouseWheelScroll: function(e, i) {
				var t = -this.sizing.wheelDelta(e, i) * this.scrollable.options.wheelSpeed;
				if (0 != t) return this.scrollOverviewBy(t)
			},
			mouseClickScroll: function(e) {
				var i = this.viewPortSize - 20;
				e["page" + this.sizing.scrollAxis()] < this.$thumb.offset()[this.sizing.offsetComponent()] && (i = -i), this.scrollOverviewBy(i)
			},
			keyScroll: function(e) {
				var i = e.which;
				if (this.enabled && this.isKeyScrolling(i)) {
					var t = this.scrollOverviewBy(this.keyScrollDelta(i));
					this.stopEventConditionally(e, t)
				}
			},
			scrollThumbBy: function(e) {
				var i = this.thumbPosition();
				i += e, i = this.positionOrMax(i, this.maxThumbPosition);
				var t = this.scrollPercent;
				if (this.scrollPercent = i / this.maxThumbPosition, t != this.scrollPercent) {
					var o = i * this.maxOverviewPosition / this.maxThumbPosition;
					return this.setScrollPosition(o, i), this.triggerCustomScroll(t), !0
				}
				return !1
			},
			thumbPosition: function() {
				return this.$thumb.position()[this.sizing.offsetComponent()]
			},
			scrollOverviewBy: function(e) {
				var i = this.overviewPosition() + e;
				return this.scrollOverviewTo(i, !1)
			},
			overviewPosition: function() {
				return -this.scrollable.$overview.position()[this.sizing.offsetComponent()]
			},
			scrollOverviewTo: function(e, i) {
				e = this.positionOrMax(e, this.maxOverviewPosition);
				var t = this.scrollPercent;
				if (this.scrollPercent = e / this.maxOverviewPosition, t != this.scrollPercent) {
					var o = this.scrollPercent * this.maxThumbPosition;
					return i ? this.setScrollPositionWithAnimation(e, o) : this.setScrollPosition(e, o), this.triggerCustomScroll(t), !0
				}
				return !1
			},
			positionOrMax: function(e, i) {
				return e < 0 ? 0 : e > i ? i : e
			},
			triggerCustomScroll: function(e) {
				this.scrollable.$element.trigger("customScroll", {
					scrollAxis: this.sizing.scrollAxis(),
					direction: this.sizing.scrollDirection(e, this.scrollPercent),
					scrollPercent: 100 * this.scrollPercent
				})
			},
			rescroll: function(e) {
				if (e) {
					var i = this.positionOrMax(this.overviewPosition(), this.maxOverviewPosition);
					this.scrollPercent = i / this.maxOverviewPosition;
					var t = this.scrollPercent * this.maxThumbPosition;
					this.setScrollPosition(i, t)
				} else {
					var t = this.scrollPercent * this.maxThumbPosition,
						i = this.scrollPercent * this.maxOverviewPosition;
					this.setScrollPosition(i, t)
				}
			},
			setScrollPosition: function(e, i) {
				this.$thumb.css(this.sizing.offsetComponent(), i + "px"), this.scrollable.$overview.css(this.sizing.offsetComponent(), -e + "px")
			},
			setScrollPositionWithAnimation: function(e, i) {
				var t = {},
					o = {};
				t[this.sizing.offsetComponent()] = i + "px", this.$thumb.animate(t, this.scrollable.options.animationSpeed), o[this.sizing.offsetComponent()] = -e + "px", this.scrollable.$overview.animate(o, this.scrollable.options.animationSpeed)
			},
			calculateMaxThumbPosition: function() {
				return Math.max(0, this.sizing.size(this.$scrollBar) - this.thumbSize)
			},
			calculateMaxOverviewPosition: function() {
				return Math.max(0, this.sizing.size(this.scrollable.$overview) - this.sizing.size(this.scrollable.$viewPort))
			},
			setScrollEvent: function(e) {
				var i = "page" + this.sizing.scrollAxis();
				this.scrollEvent && this.scrollEvent[i] == e[i] || (this.scrollEvent = {
					pageX: e.pageX,
					pageY: e.pageY
				})
			},
			scrollToElement: function(i) {
				var t = e(i);
				if (this.sizing.isInside(t, this.scrollable.$overview) && !this.sizing.isInside(t, this.scrollable.$viewPort)) {
					var o = t.offset(),
						s = this.scrollable.$overview.offset();
					this.scrollable.$viewPort.offset();
					this.scrollOverviewTo(o[this.sizing.offsetComponent()] - s[this.sizing.offsetComponent()], !0)
				}
			},
			remove: function() {
				this.removeMouseMoveScrolling(), this.removeMouseWheelScrolling(), this.removeTouchScrolling(), this.removeMouseClickScrolling(), this.removeWindowResize()
			},
			stopEventConditionally: function(e, i) {
				(i || this.scrollable.options.preventDefaultScroll) && (e.preventDefault(), e.stopPropagation())
			}
		};
		var l = function() {};
		l.prototype = {
			size: function(e, i) {
				return i ? e.width(i) : e.width()
			},
			minSize: function(e) {
				return parseInt(e.css("min-width")) || 0
			},
			maxSize: function(e) {
				return parseInt(e.css("max-width")) || 0
			},
			fixedThumbSize: function(e) {
				return e.fixedThumbWidth
			},
			scrollBar: function(e) {
				return e.find(".scroll-bar.horizontal")
			},
			mouseDelta: function(e, i) {
				return i.pageX - e.pageX
			},
			offsetComponent: function() {
				return "left"
			},
			wheelDelta: function(e, i) {
				return e
			},
			scrollAxis: function() {
				return "X"
			},
			scrollDirection: function(e, i) {
				return e < i ? "right" : "left"
			},
			scrollingKeys: {
				37: function(e) {
					return -10
				},
				39: function(e) {
					return 10
				}
			},
			isInside: function(i, t) {
				var o = e(i),
					s = e(t),
					n = o.offset(),
					l = s.offset();
				return n.left >= l.left && n.left + o.width() <= l.left + s.width()
			}
		};
		var r = function() {};
		return r.prototype = {
			size: function(e, i) {
				return i ? e.height(i) : e.height()
			},
			minSize: function(e) {
				return parseInt(e.css("min-height")) || 0
			},
			maxSize: function(e) {
				return parseInt(e.css("max-height")) || 0
			},
			fixedThumbSize: function(e) {
				return e.fixedThumbHeight
			},
			scrollBar: function(e) {
				return e.find(".scroll-bar.vertical")
			},
			mouseDelta: function(e, i) {
				return i.pageY - e.pageY
			},
			offsetComponent: function() {
				return "top"
			},
			wheelDelta: function(e, i) {
				return i
			},
			scrollAxis: function() {
				return "Y"
			},
			scrollDirection: function(e, i) {
				return e < i ? "down" : "up"
			},
			scrollingKeys: {
				38: function(e) {
					return -10
				},
				40: function(e) {
					return 10
				},
				33: function(e) {
					return -(e - 20)
				},
				34: function(e) {
					return e - 20
				}
			},
			isInside: function(i, t) {
				var o = e(i),
					s = e(t),
					n = o.offset(),
					l = s.offset();
				return n.top >= l.top && n.top + o.height() <= l.top + s.height()
			}
		}, this.each(function() {
			if (void 0 == i && (i = o), "string" == typeof i) {
				var n = e(this).data("scrollable");
				n && n[i](t)
			} else {
				if ("object" != typeof i) throw "Invalid type of options";
				i = e.extend(o, i), new s(e(this), i)
			}
		})
	}
}(jQuery), function(e) {
	function i(i) {
		var t = i || window.event,
			o = [].slice.call(arguments, 1),
			s = 0,
			n = 0,
			l = 0;
		return i = e.event.fix(t), i.type = "mousewheel", t.wheelDelta && (s = t.wheelDelta / 120), t.detail && (s = -t.detail / 3), l = s, void 0 !== t.axis && t.axis === t.HORIZONTAL_AXIS && (l = 0, n = s), void 0 !== t.wheelDeltaY && (l = t.wheelDeltaY / 120), void 0 !== t.wheelDeltaX && (n = t.wheelDeltaX / 120), o.unshift(i, s, n, l), (e.event.dispatch || e.event.handle).apply(this, o)
	}
	var t = ["DOMMouseScroll", "mousewheel"];
	if (e.event.fixHooks) for (var o = t.length; o;) e.event.fixHooks[t[--o]] = e.event.mouseHooks;
	e.event.special.mousewheel = {
		setup: function() {
			if (this.addEventListener) for (var e = t.length; e;) this.addEventListener(t[--e], i, !1);
			else this.onmousewheel = i
		},
		teardown: function() {
			if (this.removeEventListener) for (var e = t.length; e;) this.removeEventListener(t[--e], i, !1);
			else this.onmousewheel = null
		}
	}, e.fn.extend({
		mousewheel: function(e) {
			return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
		},
		unmousewheel: function(e) {
			return this.unbind("mousewheel", e)
		}
	})
}(jQuery);
!
function(o) {
	var t;
	o.fn.goToTop = function(e) {
		var i = o.extend({}, o.fn.goToTop.def, e),
			n = o(window);
		$body = o(window.opera ? "CSS1Compat" == document.compatMode ? "html" : "body" : "html,body");
		var a = o(this);
		clearTimeout(t), t = setTimeout(function() {
			var t = n.scrollTop() >= i.startline;
			t ? (a.stop().show(), o(".collection_tip").css("bottom", "256px")) : (a.stop().hide(), o(".collection_tip").css("bottom", "211px"))
		}, 100), o(this).click(function(t) {
			var e = o(i.targetObg).offset().top;
			$body.stop().animate({
				scrollTop: e
			}, i.duration), o(this).blur(), t.preventDefault(), t.stopPropagation()
		})
	}, o.fn.goToTop.def = {
		pageWidth: 910,
		pageWidthJg: 2,
		pageHeightJg: 100,
		startline: 30,
		duration: 200,
		targetObg: "body"
	}
}(jQuery);
"use strict";
!
function(t, i) {
	function n(i, n) {
		if (this.$input = t(i), !this.$input.length) throw new Error("Invalid input element.");
		this.options = t.extend({}, s, n), this.init(this.options)
	}
	var s = {
		isTagSame: function(t, i) {
			return t === i
		},
		generateTag: function(t, i) {
			return "<li>" + t + '<i class="' + i.closeIconClass + '">&times;</i></li>'
		},
		capacity: null,
		containerClass: "c-tag-box",
		tagClass: "c-tag",
		closeIconClass: "c-tag-close"
	};
	t(i);
	n.prototype = {
		constructor: n,
		init: function(i) {
			this.tags = i.tags ? i.tags : [], this.isTagSame = i.isTagSame, this.generateTag = i.generateTag, this.capacity = i.capacity, null != i.capacity && this.tags.length > i.capacity && this.tags.splice(i.capacity);
			var n = this.$input.offsetParent(),
				s = this.$input.position(),
				a = this.$tagContainer = t("<div>").addClass(i.containerClass);
			a.css({
				position: "absolute",
				zIndex: 101,
				left: s.left,
				top: s.top
			}), n.append(a), this.refresh(), i.afterInit && i.afterInit(this), this.bindEvents()
		},
		addItem: function(i, n) {
			var s = this.isTagSame,
				a = !0;
			return this.tags.length === this.capacity ? void this.$input.trigger("capacityoverflow", [this]) : (n && t.each(this.tags, function(t, n) {
				if (s(n, i)) return a = !1, !1
			}), void(a && (this.tags.push(i), this.refresh(), this.$input.trigger("itemadd", [this, i]), this.tags.length === this.capacity && this.$input.trigger("capacityfill", [this]))))
		},
		removeItem: function(t) {
			var i = this.findItem(t);
			i >= 0 && this.removeItemAt(i)
		},
		clear: function() {
			this.tags.length && (this.tags = [], this.refresh(), this.$input.trigger("itemremove", [this]))
		},
		getAll: function() {
			return this.tags
		},
		findItem: function(i) {
			var n = -1,
				s = this.isTagSame;
			return t.each(this.tags, function(t, a) {
				if (s(a, i)) return n = t, !1
			}), n
		},
		removeItemAt: function(t) {
			null == t || t >= this.tags.length || (this.tags.splice(t, 1), this.refresh(), this.$input.trigger("itemremove", [this, t]))
		},
		refresh: function() {
			var i = this,
				n = this.options;
			this.$tagContainer.html(""), t.each(this.tags, function(s, a) {
				t(i.generateTag(a, n)).data("tagIndex", s).appendTo(i.$tagContainer)
			})
		},
		bindEvents: function() {
			function i() {
				a && clearTimeout(a), a = setTimeout(function() {
					var t = (n.$input.offsetParent(), n.$input.position());
					n.$tagContainer.css({
						left: t.left,
						top: t.top
					})
				}, 200)
			}
			var n = this,
				s = this.options;
			this.$tagContainer.on("click", "." + s.closeIconClass, function(i) {
				i.preventDefault(), i.stopPropagation();
				var a = t(this).closest("." + s.tagClass);
				n.removeItemAt(a.data("tagIndex"))
			}), t(window).on("resize", i);
			var a
		},
		destroy: function() {
			this.$tagContainer.remove(), this.$input.data("inputTag", null)
		}
	}, t.fn.inputTag = function(i, s) {
		if ("string" == typeof i) {
			var a = this.data("inputTag");
			return a && a[i] && a[i].apply(a, s)
		}
		return this.each(function() {
			if ("input" === this.tagName.toLowerCase()) {
				var s = t(this),
					a = s.data("inputTag");
				a || s.data("inputTag", new n(s, i))
			}
		})
	}
}(jQuery, document);
!
function(t, e, r, n) {
	"use strict";

	function a(r, n, a, o) {
		function i() {
			p = e.devicePixelRatio > 1, l(a), n("delay") >= 0 && setTimeout(function() {
				u(!0)
			}, n("delay")), (n("delay") < 0 || n("combined")) && (o.e = m(n("throttle"), function(t) {
				"resize" === t.type && (b = v = -1), u(t.all)
			}), o.a = function(t) {
				l(t), a.push.apply(a, t)
			}, o.g = function() {
				return a
			}, u(), t(n("appendScroll")).on("scroll." + r.name + " resize." + r.name, o.e))
		}
		function l(e) {
			if (e = t(e).filter(function() {
				return !t(this).data(n("handledName")) && (t(this).attr(n("attribute")) || t(this).attr(n("loaderAttribute")))
			}).data("plugin_" + r.name, r), n("defaultImage") || n("placeholder")) for (var a = 0; a < e.length; a++) {
				var o = t(e[a]),
					i = e[a].tagName.toLowerCase(),
					l = "background-image";
				"img" == i && n("defaultImage") && !o.attr("src") ? o.attr("src", n("defaultImage")) : "img" == i || !n("placeholder") || o.css(l) && "none" != o.css(l) || o.css(l, "url(" + n("placeholder") + ")")
			}
		}
		function u(e) {
			if (!a.length) return void(n("autoDestroy") && r.destroy());
			for (var o = !1, i = n("imageBase") ? n("imageBase") : "", l = 0; l < a.length; l++)(function(r) {
				if (d(r) || e) {
					var a, l = t(r),
						u = r.tagName.toLowerCase(),
						f = l.attr(n("attribute"));
					l.data(n("handledName")) || n("visibleOnly") && !l.is(":visible") || !(f && ("img" == u && i + f != l.attr("src") || "img" != u && i + f != l.css("background-image")) || (a = l.attr(n("loaderAttribute")))) || (o = !0, l.data(n("handledName"), !0), c(l, u, i, a))
				}
			})(a[l]);
			o && (a = t(a).filter(function() {
				return !t(this).data(n("handledName"))
			}))
		}
		function c(e, r, a, o) {
			++h;
			var i = function() {
					g("onError", e), A()
				};
			if (g("beforeLoad", e), o) e.off("error").one("error", i), e.one("load", function() {
				n("removeAttribute") && e.removeAttr(n("loaderAttribute")), g("afterLoad", e), A()
			}), g(o, e, function(t) {
				t ? e.load() : e.error()
			}) || e.error();
			else {
				var l = t(new Image);
				l.one("error", i), l.one("load", function() {
					e.hide(), "img" == r ? e.attr("src", l.attr("src")) : e.css("background-image", "url(" + l.attr("src") + ")"), e[n("effect")](n("effectTime")), n("removeAttribute") && e.removeAttr(n("attribute") + " " + n("retinaAttribute")), g("afterLoad", e), l.remove(), A()
				}), l.attr("src", a + e.attr(n(p && e.attr(n("retinaAttribute")) ? "retinaAttribute" : "attribute"))), l.complete && l.load()
			}
		}
		function d(t) {
			var e = t.getBoundingClientRect(),
				r = n("scrollDirection"),
				a = n("threshold"),
				o = s() + a > e.top && -a < e.bottom,
				i = f() + a > e.left && -a < e.right;
			return "vertical" == r ? o : "horizontal" == r ? i : o && i
		}
		function f() {
			return b >= 0 ? b : b = t(e).width()
		}
		function s() {
			return v >= 0 ? v : v = t(e).height()
		}
		function m(t, e) {
			var a, o = 0;
			return function(i, l) {
				function u() {
					o = +new Date, e.call(r, i)
				}
				var c = +new Date - o;
				a && clearTimeout(a), c > t || !n("enableThrottle") || l ? u() : a = setTimeout(u, t - c)
			}
		}
		function A() {
			--h, a.size() || h || g("onFinishedAll")
		}
		function g(t, e, a) {
			return !!(t = n(t)) && (t.apply(r, [].slice.call(arguments, 1)), !0)
		}
		var h = 0,
			b = -1,
			v = -1,
			p = !1;
		!
		function() {
			"event" == n("bind") ? i() : t(e).load(i)
		}()
	}
	function o(e, r) {
		var o = this,
			i = t.extend({}, o.configuration, r),
			l = {};
		return o.config = function(t, e) {
			return e === n ? i[t] : (i[t] = e, o)
		}, o.addItems = function(e) {
			return l.a && l.a("string" === t.type(e) ? t(e) : e), o
		}, o.getItems = function() {
			return l.g ? l.g() : {}
		}, o.update = function(t) {
			return l.e && l.e({}, !t), o
		}, o.loadAll = function() {
			return l.e && l.e({
				all: !0
			}, !0), o
		}, o.destroy = function() {
			return t(o.config("appendScroll")).off("." + o.name, l.e), l = {}, n
		}, a(o, o.config, e, l), o.config("chainable") ? e : o
	}
	t.fn.Lazy = t.fn.lazy = function(t) {
		return new o(this, t)
	}, t.extend(o.prototype, {
		name: "lazy",
		configuration: {
			chainable: !0,
			autoDestroy: !0,
			bind: "load",
			threshold: 500,
			visibleOnly: !1,
			appendScroll: e,
			scrollDirection: "both",
			imageBase: null,
			defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
			placeholder: null,
			delay: -1,
			combined: !1,
			attribute: "data-src",
			retinaAttribute: "data-retina",
			loaderAttribute: "data-loader",
			removeAttribute: !0,
			handledName: "handled",
			effect: "show",
			effectTime: 0,
			enableThrottle: !0,
			throttle: 250,
			beforeLoad: null,
			afterLoad: null,
			onError: null,
			onFinishedAll: null
		}
	})
}(jQuery, window, document);
"use strict";
!
function(t, i) {
	function e(i, e) {
		if (this.$slider = t(i), this.$bar = this.$slider.find(".range"), this.$thumb = this.$slider.find(".ico_range"), !this.$slider.length) throw new Error("Invalid element.");
		t.extend(this, h, e), this.init()
	}
	var s, h = {
		min: 0,
		max: 100,
		size: 100,
		value: 0,
		thumbAlignment: "boundary",
		thumbRadius: 11,
		minThumbRadius: 2
	},
		n = t(i),
		r = function(t, i, e) {
			return Math.min(Math.max(i, t), e)
		},
		u = function(t, i, e, s) {
			t.css({
				width: e.barWidth
			}), s ? i.css({
				width: 2 * s,
				height: 2 * s,
				left: e.thumbLeft,
				top: e.height / 2 - s
			}) : i.css("left", e.thumbLeft)
		};
	e.prototype = {
		constructor: e,
		init: function() {
			var t = this.$slider,
				i = this.$thumb,
				e = this.state = {};
			this.resetState(t, this.$bar, i, e), this.bindEvents(t, this.$bar, i, e)
		},
		resetState: function(t, i, e, h) {
			var n = Math.max(this.thumbRadius, this.minThumbRadius);
			h.width = t.width() + parseInt(t.css("border-left-width")) + parseInt(t.css("border-right-width")), h.height = t.height(), this.value = r(this.min, this.max, this.value), h.thumbRadius = this.thumbRadius = n, h.percent = this.value / this.size, h.barWidth = h.width * h.percent, "center" === this.thumbAlignment ? (h.realWidth = h.width, h.left = h.realWidth * (this.min / this.size) - n, h.right = h.realWidth * (this.max / this.size) - n, h.thumbLeft = h.realWidth * (this.value / this.size) - n) : (h.realWidth = h.width - 2 * n, h.left = h.realWidth * (this.min / this.size), h.right = h.realWidth * (this.max / this.size), h.thumbLeft = h.realWidth * (this.value / this.size)), s = function(t) {
				return "center" === t ?
				function(t) {
					return (t.thumbLeft + t.thumbRadius) / t.width
				} : function(t) {
					return t.thumbLeft / t.realWidth
				}
			}(this.thumbAlignment), u(i, e, h, n)
		},
		bindEvents: function(i, e, h, a) {
			function d() {
				f.resetState(i, e, h, a)
			}
			var o, c, l, f = this,
				m = (this.thumbRadius, !1),
				b = 0,
				g = 0;
			h.on("mousedown", function(t) {
				t.preventDefault(), f.frozen || (m = !0, b = t.pageX, o = a.thumbLeft, i.addClass("active"), i.trigger("slidestart", [f]))
			}), n.on("mousemove", function(t) {
				m && (g = t.pageX, c = g - b, a.thumbLeft = r(a.left, o + c, a.right), a.percent = s(a), f.value = f.size * a.percent, a.barWidth = a.width * a.percent, u(e, h, a), i.trigger("slidechange", [f]))
			}).on("mouseup", function(t) {
				m && (m = !1, i.removeClass("active"), i.trigger("slideend", [f]))
			}), t(window).on("resize", function() {
				l && clearTimeout(l), l = setTimeout(d, 200)
			})
		},
		get: function(t) {
			return t ? this[t] : this
		},
		set: function(i, e) {
			var s = this;
			i && ("string" == typeof i ? this[i] = e : t.isPlainObject(i) && t.each(i, function(t, i) {
				s[t] = i
			}), this.resetState(this.$slider, this.$bar, this.$thumb, this.state))
		},
		freeze: function() {
			this.frozen = !0
		},
		unfreeze: function() {
			this.frozen = !1
		},
		val: function(t) {
			return "percent" === t ? this.state.percent : this.value
		},
		destroy: function() {
			this.data("slider", null)
		}
	}, t.fn.slider = function(i) {
		return this.each(function() {
			var s = t(this),
				h = s.data("slider");
			h || s.data("slider", new e(s, i))
		})
	}
}(jQuery, document);
!
function(t) {
	var e = "object" == typeof self && self.self == self && self || "object" == typeof global && global.global == global && global;
	if ("function" == typeof define && define.amd) define(["underscore", "jquery", "exports"], function(i, n, s) {
		e.Backbone = t(e, s, i, n)
	});
	else if ("undefined" != typeof exports) {
		var i, n = require("underscore");
		try {
			i = require("jquery")
		} catch (s) {}
		t(e, exports, n, i)
	} else e.Backbone = t(e, {}, e._, e.jQuery || e.Zepto || e.ender || e.$)
}(function(t, e, i, n) {
	var s = e.Events = {},
		r = /\s+/,
		a = function(t, e, n, s, o) {
			var h, c = 0;
			if (n && "object" == typeof n) {
				void 0 !== s && "context" in o && void 0 === o.context && (o.context = s);
				for (h = i.keys(n); c < h.length; c++) e = a(t, e, h[c], n[h[c]], o)
			} else if (n && r.test(n)) for (h = n.split(r); c < h.length; c++) e = t(e, h[c], s, o);
			else e = t(e, n, s, o);
			return e
		};
	s.on = function(t, e, i) {
		return o(this, t, e, i)
	};
	var o = function(t, e, i, n, s) {
			if (t._events = a(h, t._events || {}, e, i, {
				context: n,
				ctx: t,
				listening: s
			}), s) {
				var r = t._listeners || (t._listeners = {});
				r[s.id] = s
			}
			return t
		};
	s.listenTo = function(t, e, n) {
		if (!t) return this;
		var s = t._listenId || (t._listenId = i.uniqueId("l")),
			r = this._listeningTo || (this._listeningTo = {}),
			a = r[s];
		if (!a) {
			var h = this._listenId || (this._listenId = i.uniqueId("l"));
			a = r[s] = {
				obj: t,
				objId: s,
				id: h,
				listeningTo: r,
				count: 0
			}
		}
		return o(t, e, n, this, a), this
	};
	var h = function(t, e, i, n) {
			if (i) {
				var s = t[e] || (t[e] = []),
					r = n.context,
					a = n.ctx,
					o = n.listening;
				o && o.count++, s.push({
					callback: i,
					context: r,
					ctx: r || a,
					listening: o
				})
			}
			return t
		};
	s.off = function(t, e, i) {
		return this._events ? (this._events = a(c, this._events, t, e, {
			context: i,
			listeners: this._listeners
		}), this) : this
	}, s.stopListening = function(t, e, n) {
		var s = this._listeningTo;
		if (!s) return this;
		for (var r = t ? [t._listenId] : i.keys(s), a = 0; a < r.length; a++) {
			var o = s[r[a]];
			if (!o) break;
			o.obj.off(e, n, this)
		}
		return i.isEmpty(s) && (this._listeningTo = void 0), this
	};
	var c = function(t, e, n, s) {
			if (t) {
				var r, a = 0,
					o = s.context,
					h = s.listeners;
				if (e || n || o) {
					for (var c = e ? [e] : i.keys(t); a < c.length; a++) {
						e = c[a];
						var l = t[e];
						if (!l) break;
						for (var u = [], f = 0; f < l.length; f++) {
							var d = l[f];
							n && n !== d.callback && n !== d.callback._callback || o && o !== d.context ? u.push(d) : (r = d.listening, r && 0 === --r.count && (delete h[r.id], delete r.listeningTo[r.objId]))
						}
						u.length ? t[e] = u : delete t[e]
					}
					return i.size(t) ? t : void 0
				}
				for (var g = i.keys(h); a < g.length; a++) r = h[g[a]], delete h[r.id], delete r.listeningTo[r.objId]
			}
		};
	s.once = function(t, e, n) {
		var s = a(l, {}, t, e, i.bind(this.off, this));
		return this.on(s, void 0, n)
	}, s.listenToOnce = function(t, e, n) {
		var s = a(l, {}, e, n, i.bind(this.stopListening, this, t));
		return this.listenTo(t, s)
	};
	var l = function(t, e, n, s) {
			if (n) {
				var r = t[e] = i.once(function() {
					s(e, r), n.apply(this, arguments)
				});
				r._callback = n
			}
			return t
		};
	s.trigger = function(t) {
		if (!this._events) return this;
		for (var e = Math.max(0, arguments.length - 1), i = Array(e), n = 0; n < e; n++) i[n] = arguments[n + 1];
		return a(u, this._events, t, void 0, i), this
	};
	var u = function(t, e, i, n) {
			if (t) {
				var s = t[e],
					r = t.all;
				s && r && (r = r.slice()), s && f(s, n), r && f(r, [e].concat(n))
			}
			return t
		},
		f = function(t, e) {
			var i, n = -1,
				s = t.length,
				r = e[0],
				a = e[1],
				o = e[2];
			switch (e.length) {
			case 0:
				for (; ++n < s;)(i = t[n]).callback.call(i.ctx);
				return;
			case 1:
				for (; ++n < s;)(i = t[n]).callback.call(i.ctx, r);
				return;
			case 2:
				for (; ++n < s;)(i = t[n]).callback.call(i.ctx, r, a);
				return;
			case 3:
				for (; ++n < s;)(i = t[n]).callback.call(i.ctx, r, a, o);
				return;
			default:
				for (; ++n < s;)(i = t[n]).callback.apply(i.ctx, e);
				return
			}
		};
	s.bind = s.on, s.unbind = s.off;
	var d = e.Router = function(t) {
			t || (t = {}), t.routes && (this.routes = t.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
		},
		g = /\((.*?)\)/g,
		p = /(\(\?)?:\w+/g,
		v = /\*\w+/g,
		m = /[\-{}\[\]+?.,\\\^$|#\s]/g;
	i.extend(d.prototype, s, {
		initialize: function() {},
		route: function(t, n, s) {
			i.isRegExp(t) || (t = this._routeToRegExp(t)), i.isFunction(n) && (s = n, n = ""), s || (s = this[n]);
			var r = this;
			return e.history.route(t, function(i) {
				var a = r._extractParameters(t, i);
				r.execute(s, a, n) !== !1 && (r.trigger.apply(r, ["route:" + n].concat(a)), r.trigger("route", n, a), e.history.trigger("route", r, n, a))
			}), this
		},
		execute: function(t, e, i) {
			t && t.apply(this, e)
		},
		navigate: function(t, i) {
			return e.history.navigate(t, i), this
		},
		_bindRoutes: function() {
			if (this.routes) {
				this.routes = i.result(this, "routes");
				for (var t, e = i.keys(this.routes); null != (t = e.pop());) this.route(t, this.routes[t])
			}
		},
		_routeToRegExp: function(t) {
			return t = t.replace(m, "\\$&").replace(g, "(?:$1)?").replace(p, function(t, e) {
				return e ? t : "([^/?]+)"
			}).replace(v, "([^?]*?)"), new RegExp("^" + t + "(?:\\?([\\s\\S]*))?$")
		},
		_extractParameters: function(t, e) {
			var n = t.exec(e).slice(1);
			return i.map(n, function(t, e) {
				return e === n.length - 1 ? t || null : t ? decodeURIComponent(t) : null
			})
		}
	});
	var _ = e.History = function() {
			this.handlers = [], this.checkUrl = i.bind(this.checkUrl, this), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
		},
		y = /^[#\/]|\s+$/g,
		b = /^\/+|\/+$/g,
		x = /#.*$/;
	_.started = !1, i.extend(_.prototype, s, {
		interval: 50,
		atRoot: function() {
			var t = this.location.pathname.replace(/[^\/]$/, "$&/");
			return t === this.root && !this.getSearch()
		},
		matchRoot: function() {
			var t = this.decodeFragment(this.location.pathname),
				e = t.slice(0, this.root.length - 1) + "/";
			return e === this.root
		},
		decodeFragment: function(t) {
			return decodeURI(t.replace(/%25/g, "%2525"))
		},
		getSearch: function() {
			var t = this.location.href.replace(/#.*/, "").match(/\?.+/);
			return t ? t[0] : ""
		},
		getHash: function(t) {
			var e = (t || this).location.href.match(/#(.*)$/);
			return e ? e[1] : ""
		},
		getPath: function() {
			var t = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
			return "/" === t.charAt(0) ? t.slice(1) : t
		},
		getFragment: function(t) {
			return null == t && (t = this._usePushState || !this._wantsHashChange ? this.getPath() : this.getHash()), t.replace(y, "")
		},
		start: function(t) {
			if (_.started) throw new Error("Backbone.history has already been started");
			if (_.started = !0, this.options = i.extend({
				root: "/"
			}, this.options, t), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._hasHashChange = "onhashchange" in window && (void 0 === document.documentMode || document.documentMode > 7), this._useHashChange = this._wantsHashChange && this._hasHashChange, this._wantsPushState = !! this.options.pushState, this._hasPushState = !(!this.history || !this.history.pushState), this._usePushState = this._wantsPushState && this._hasPushState, this.fragment = this.getFragment(), this.prevFragment = null, this.root = ("/" + this.root + "/").replace(b, "/"), this._wantsHashChange && this._wantsPushState) {
				if (!this._hasPushState && !this.atRoot()) {
					var e = this.root.slice(0, -1) || "/";
					return this.location.replace(e + "#" + this.getPath()), !0
				}
				this._hasPushState && this.atRoot() && this.navigate(this.getHash(), {
					replace: !0
				})
			}
			if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
				this.iframe = document.createElement("iframe"), this.iframe.src = "javascript:0", this.iframe.style.display = "none", this.iframe.tabIndex = -1;
				var n = document.body,
					s = n.insertBefore(this.iframe, n.firstChild).contentWindow;
				s.document.open(), s.document.close(), s.location.hash = "#" + this.fragment
			}
			var r = window.addEventListener ||
			function(t, e) {
				return attachEvent("on" + t, e)
			};
			if (this._usePushState ? r("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? r("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), !this.options.silent) return this.loadUrl()
		},
		stop: function() {
			var t = window.removeEventListener ||
			function(t, e) {
				return detachEvent("on" + t, e)
			};
			this._usePushState ? t("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && t("hashchange", this.checkUrl, !1), this.iframe && (document.body.removeChild(this.iframe), this.iframe = null), this._checkUrlInterval && clearInterval(this._checkUrlInterval), _.started = !1
		},
		route: function(t, e) {
			this.handlers.unshift({
				route: t,
				callback: e
			})
		},
		checkUrl: function(t) {
			var e = this.getFragment();
			return e === this.fragment && this.iframe && (e = this.getHash(this.iframe.contentWindow)), e !== this.fragment && (this.prevFragment = this.fragment, this.iframe && this.navigate(e), void this.loadUrl())
		},
		loadUrl: function(t) {
			return !!this.matchRoot() && (t = this.fragment = this.getFragment(t), i.some(this.handlers, function(e) {
				if (e.route.test(t)) return e.callback(t), !0
			}))
		},
		navigate: function(t, e) {
			if (!_.started) return !1;
			e && e !== !0 || (e = {
				trigger: !! e
			}), t = this.getFragment(t || "");
			var i = this.root;
			"" !== t && "?" !== t.charAt(0) || (i = i.slice(0, -1) || "/");
			var n = i + t;
			if (t = this.decodeFragment(t.replace(x, "")), this.prevFragment = this.fragment, this.fragment !== t) {
				if (this.fragment = t, this._usePushState) this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, n);
				else {
					if (!this._wantsHashChange) return this.location.assign(n);
					if (this._updateHash(this.location, t, e.replace), this.iframe && t !== this.getHash(this.iframe.contentWindow)) {
						var s = this.iframe.contentWindow;
						e.replace || (s.document.open(), s.document.close()), this._updateHash(s.location, t, e.replace)
					}
				}
				return e.trigger ? this.loadUrl(t) : void 0
			}
		},
		_updateHash: function(t, e, i) {
			if (i) {
				var n = t.href.replace(/(javascript:|#).*$/, "");
				t.replace(n + "#" + e)
			} else t.hash = "#" + e
		}
	}), e.history = new _;
	var w = function(t, e) {
			var n, s = this;
			n = t && i.has(t, "constructor") ? t.constructor : function() {
				return s.apply(this, arguments)
			}, i.extend(n, s, e);
			var r = function() {
					this.constructor = n
				};
			return r.prototype = s.prototype, n.prototype = new r, t && i.extend(n.prototype, t), n.__super__ = s.prototype, n
		};
	return d.extend = _.extend = w, e
});