parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var t={size:500,backgroundColour:"#3171B8",textColour:"white",fontSize:{top:50,middle:170,bottom:50},font:"Helvetica"};function e(e){var o=e.canvasContext,n=t.size,a=t.backgroundColour;o.beginPath(),o.fillStyle=a,o.arc(n/2,n/2,n/2,0,2*Math.PI,!1),o.fill()}function o(e){var o=e.canvasContext,n=e.text,a=t.size,i=t.textColour,r=t.fontSize,c=t.font;o.fillStyle=i,o.font="100 ".concat(r.middle,"px ").concat(c);var l=o.measureText(n).width;o.fillText(n,a/2-l/2,a/2+r.middle/Math.PI)}function n(e){var o=e.canvasContext,n=e.text,a=t.size,i=t.textColour,r=t.fontSize,c=t.font;o.fillStyle=i,o.font="100 ".concat(r.top,"px ").concat(c);var l=o.measureText(n).width;o.fillText(n,a/2-l/2,a/2/2-r.top/Math.PI)}function a(e){var o=e.canvasContext,n=e.text,a=t.size,i=t.textColour,r=t.fontSize,c=t.font;o.fillStyle=i,o.font="100 ".concat(r.bottom,"px ").concat(c);var l=o.measureText(n).width;o.fillText(n,a/2-l/2,a-a/2/2+r.bottom)}function i(i){var r=i.top,c=i.middle,l=i.bottom,f=document.createElement("canvas"),d=t.size,x=window.devicePixelRatio||1;f.width=d*x,f.height=d*x;var v=f.getContext("2d");return v.scale(x,x),e({canvasContext:v}),n({canvasContext:v,text:r.toUpperCase()}),o({canvasContext:v,text:c.toUpperCase()}),a({canvasContext:v,text:l.toUpperCase()}),f}var r=document.querySelector(".content"),c=document.querySelector("form");c.addEventListener("input",function(t){var e=document.getElementById("download");e.removeAttribute("href");var o=new FormData(c),n=i(Object.fromEntries(o));r.firstChild&&r.firstChild.remove(),r.appendChild(n);var a=n.toDataURL("image/png");e.setAttribute("href",a)});
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.9f38901e.js.map