var fuck = function(n, x, f) {
	var k = "DECODE";
	var x = x ? x: "";
	var f = f ? f: 0;
	var g = 4;
	x = md5(x);
	var w = md5(x.substr(0, 16));
	var u = md5(x.substr(16, 16));
	if (g) {
		if (k == "DECODE") {
			var b = md5(microtime());
			var d = b.length - g;
			var t = b.substr(d, g)
		}
	} else {
		var t = ""
	}
	var r = w + md5(w + t);
	var m;
	if (k == "DECODE") {
		f = f ? f + time() : 0;
		tmpstr = f.toString();
		if (tmpstr.length >= 10) {
			n = tmpstr.substr(0, 10) + md5(n + u).substr(0, 16) + n
		} else {
			var e = 10 - tmpstr.length;
			for (var p = 0; p < e; p++) {
				tmpstr = "0" + tmpstr
			}
			n = tmpstr + md5(n + u).substr(0, 16) + n
		}
		m = n
	}
	var h = new Array(256);
	for (var p = 0; p < 256; p++) {
		h[p] = p
	}
	var q = new Array();
	for (var p = 0; p < 256; p++) {
		q[p] = r.charCodeAt(p % r.length)
	}
	for (var o = p = 0; p < 256; p++) {
		o = (o + h[p] + q[p]) % 256;
		tmp = h[p];
		h[p] = h[o];
		h[o] = tmp
	}
	var l = "";
	m = m.split("");
	for (var v = o = p = 0; p < m.length; p++) {
		v = (v + 1) % 256;
		o = (o + h[v]) % 256;
		tmp = h[v];
		h[v] = h[o];
		h[o] = tmp;
		l += chr(ord(m[p]) ^ (h[(h[v] + h[o]) % 256]))
	}
	if (k == "DECODE") {
//		l = base64_encode(l);
		
		var ttt  = new Base64();
		l = ttt.encode(l);
		
		var c = new RegExp("=", "g");
		l = l.replace(c, "");
		l = t + l
	}
//	return l
//	
//	
//	if (k == "DECODE") {
//		var ttt  = new Base64();
//		l = ttt.encode(l);
////		l = base64_encode(l);
//		var c = new RegExp("=", "g");
//		l = l.replace(c, "");
//		l = t + l
//	}
	
//	l = l.replace(/(\/\/\w+\.sinaimg\.cn\/)(\w+)(\/.+\.(gif|jpg|jpeg))/, "$1large$3");
//	l = l.replace(/(\/\/\w+\.sinaimg\.cn\/)(\w+)(\/.+\.gif)/, "$1thumb180$3");
	
//	var sss = "javascript";
//	var www  = new Base64();
//	l = www.encode(sss);
//	
//	
//	var sss = "amF2YXNjcmlwdA==";
//	var www  = new Base64();
//	l = www.decode(sss);
	
	return l
}; 

var fuck2 = function(m, r, d) {
	var e = "DECODE";
	var r = r ? r: "";
	var d = d ? d: 0;
	var q = 4;
	r = md5(r);
	var o = md5(r.substr(0, 16));
	var n = md5(r.substr(16, 16));
	if (q) {
		if (e == "DECODE") {
			var l = m.substr(0, q)
		}
	} else {
		var l = ""
	}
	var c = o + md5(o + l);
	var k;
	if (e == "DECODE") {
		m = m.substr(q);
		var ttt  = new Base64();
		k = ttt.decode(m);
//		k = base64_decode(m)
	}
	var h = new Array(256);
	for (var g = 0; g < 256; g++) {
		h[g] = g
	}
	var b = new Array();
	for (var g = 0; g < 256; g++) {
		b[g] = c.charCodeAt(g % c.length)
	}
	for (var f = g = 0; g < 256; g++) {
		f = (f + h[g] + b[g]) % 256;
		tmp = h[g];
		h[g] = h[f];
		h[f] = tmp
	}
	var t = "";
	k = k.split("");
	for (var p = f = g = 0; g < k.length; g++) {
		p = (p + 1) % 256;
		f = (f + h[p]) % 256;
		tmp = h[p];
		h[p] = h[f];
		h[f] = tmp;
		t += chr(ord(k[g]) ^ (h[(h[p] + h[f]) % 256]))
	}
	if (e == "DECODE") {
		if ((t.substr(0, 10) == 0 || t.substr(0, 10) - time() > 0) && t.substr(10, 16) == md5(t.substr(26) + n).substr(0, 16)) {
			t = t.substr(26)
		} else {
			t = ""
		}
	}
	return t
};

function time() {
	var a = new Date().getTime();
	return parseInt(a / 1000)
}
function microtime(b) {
	var a = new Date().getTime();
	var c = parseInt(a / 1000);
	return b ? (a / 1000) : (a - (c * 1000)) / 1000 + " " + c
}
function chr(a) {
	return String.fromCharCode(a)
}
function ord(a) {
	return a.charCodeAt()
}
function md5(a) {
	return hex_md5(a)
}

function hex_md5(s) {
	return rstr2hex(raw_md5(s))
}

function rstr2hex(input) {
	var hex_tab = "0123456789abcdef",
	output = "",
	x, i;
	for (i = 0; i < input.length; i += 1) {
		x = input.charCodeAt(i);
		output += hex_tab.charAt(x >>> 4 & 15) + hex_tab.charAt(x & 15)
	}
	return output
}

function raw_md5(s) {
	return rstr_md5(str2rstr_utf8(s))
}
function rstr_md5(s) {
	return binl2rstr(binl_md5(rstr2binl(s), s.length * 8))
}

function rstr2binl(input) {
	var i, output = [];
	output[(input.length >> 2) - 1] = undefined;
	for (i = 0; i < output.length; i += 1) output[i] = 0;
	for (i = 0; i < input.length * 8; i += 8) output[i >> 5] |= (input.charCodeAt(i / 8) & 255) << i % 32;
	return output
}
function str2rstr_utf8(input) {
	return unescape(encodeURIComponent(input))
}
function binl_md5(x, len) {
	x[len >> 5] |= 128 << len % 32;
	x[(len + 64 >>> 9 << 4) + 14] = len;
	var i, olda, oldb, oldc, oldd, a = 1732584193,
	b = -271733879,
	c = -1732584194,
	d = 271733878;
	for (i = 0; i < x.length; i += 16) {
		olda = a;
		oldb = b;
		oldc = c;
		oldd = d;
		a = md5_ff(a, b, c, d, x[i], 7, -680876936);
		d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
		c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
		b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
		a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
		d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
		c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
		b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
		a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
		d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
		c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
		b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
		a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
		d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
		c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
		b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
		a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
		d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
		c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
		b = md5_gg(b, c, d, a, x[i], 20, -373897302);
		a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
		d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
		c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
		b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
		a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
		d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
		c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
		b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
		a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
		d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
		c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
		b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
		a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
		d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
		c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
		b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
		a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
		d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
		c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
		b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
		a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
		d = md5_hh(d, a, b, c, x[i], 11, -358537222);
		c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
		b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
		a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
		d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
		c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
		b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
		a = md5_ii(a, b, c, d, x[i], 6, -198630844);
		d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
		c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
		b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
		a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
		d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
		c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
		b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
		a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
		d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
		c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
		b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
		a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
		d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
		c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
		b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
		a = safe_add(a, olda);
		b = safe_add(b, oldb);
		c = safe_add(c, oldc);
		d = safe_add(d, oldd)
	}
	return [a, b, c, d]
}
function safe_add(x, y) {
	var lsw = (x & 65535) + (y & 65535),
	msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	return msw << 16 | lsw & 65535
}
function md5_ff(a, b, c, d, x, s, t) {
	return md5_cmn(b & c | ~b & d, a, b, x, s, t)
}
function md5_gg(a, b, c, d, x, s, t) {
	return md5_cmn(b & d | c & ~d, a, b, x, s, t)
}
function md5_hh(a, b, c, d, x, s, t) {
	return md5_cmn(b ^ c ^ d, a, b, x, s, t)
}
function md5_ii(a, b, c, d, x, s, t) {
	return md5_cmn(c ^ (b | ~d), a, b, x, s, t)
}
function md5_cmn(q, a, b, x, s, t) {
	return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b)
}
function bit_rol(num, cnt) {
	return num << cnt | num >>> 32 - cnt
}
function binl2rstr(input) {
	var i, output = "";
	for (i = 0; i < input.length * 32; i += 8) output += String.fromCharCode(input[i >> 5] >>> i % 32 & 255);
	return output
}

function Base64() {
 
    // private property
    _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
 
    // public method for encoding
    this.encode = function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        input = _utf8_encode(input);
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output = output +
            _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
            _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
        }
        return output;
    }
 
    // public method for decoding
    this.decode = function (input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < input.length) {
            enc1 = _keyStr.indexOf(input.charAt(i++));
            enc2 = _keyStr.indexOf(input.charAt(i++));
            enc3 = _keyStr.indexOf(input.charAt(i++));
            enc4 = _keyStr.indexOf(input.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
        }
        output = _utf8_decode(output);
        return output;
    }
 
    // private method for UTF-8 encoding
    _utf8_encode = function (string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
 
        }
        return utftext;
    }
 
    // private method for UTF-8 decoding
    _utf8_decode = function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;
        while ( i < utftext.length ) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            } else if((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i+1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = utftext.charCodeAt(i+1);
                c3 = utftext.charCodeAt(i+2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }
        return string;
    }
}
