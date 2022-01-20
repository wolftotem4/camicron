(()=>{var e={964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CppObject=void 0,t.CppObject=class{constructor(e,t){this.ptr=e,this.inst=t}checkAlive(){if(!this.ptr)throw Error("Call after destroyed")}getPointer(){return this.checkAlive(),this.ptr}}},77:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Image=void 0;const r=n(964),a=n(708),i=n(980);class o extends r.CppObject{static async createFromGrayBuffer(e,t,n,r=0){const a=await(0,i.getInstance)(),o=a.HEAPU8,s=new Uint8Array(n),c=e*t;if(c!==s.byteLength)throw Error("dataBuf does not match width and height");const u=a._malloc(c);return o.set(s,u),new this(a._Image_create(e,t,808466521,u,c,r),a)}static async createFromRGBABuffer(e,t,n,r=0){const a=await(0,i.getInstance)(),o=a.HEAPU8,s=new Uint8Array(n),c=e*t;if(4*c!==s.byteLength)throw Error("dataBuf does not match width and height");const u=a._malloc(c);for(let e=0;e<c;++e){const t=s[4*e],n=s[4*e+1],r=s[4*e+2];o[u+e]=19595*t+38469*n+7472*r>>16}return new this(a._Image_create(e,t,808466521,u,c,r),a)}destroy(){this.checkAlive(),this.inst._Image_destory(this.ptr),this.ptr=0}getSymbols(){this.checkAlive();const e=this.inst._Image_get_symbols(this.ptr);return a.Symbol.createSymbolsFromPtr(e,this.inst.HEAPU8.buffer)}}t.Image=o},203:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ImageScanner=void 0;const r=n(964),a=n(980),i=n(708);class o extends r.CppObject{static async create(){const e=await(0,a.getInstance)();return new this(e._ImageScanner_create(),e)}destroy(){this.checkAlive(),this.inst._ImageScanner_destory(this.ptr),this.ptr=0}setConfig(e,t,n){return this.checkAlive(),this.inst._ImageScanner_set_config(this.ptr,e,t,n)}enableCache(e=!0){this.checkAlive(),this.inst._ImageScanner_enable_cache(this.ptr,e)}recycleImage(e){this.checkAlive(),this.inst._ImageScanner_recycle_image(this.ptr,e.getPointer())}getResults(){this.checkAlive();const e=this.inst._ImageScanner_get_results(this.ptr);return i.Symbol.createSymbolsFromPtr(e,this.inst.HEAPU8.buffer)}scan(e){return this.checkAlive(),this.inst._ImageScanner_scan(this.ptr,e.getPointer())}}t.ImageScanner=o},708:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Symbol=void 0;const r=n(556);class a{constructor(e,t){this.ptr=e,this.ptr32=e>>2,this.buf=t,this.HEAP8=new Int8Array(t),this.HEAPU32=new Uint32Array(t),this.HEAP32=new Int32Array(t)}}class i extends a{get type(){return this.HEAPU32[this.ptr32]}get data(){const e=this.HEAPU32[this.ptr32+4],t=this.HEAPU32[this.ptr32+5];return Int8Array.from(this.HEAP8.subarray(t,t+e))}get points(){const e=this.HEAPU32[this.ptr32+7],t=this.HEAPU32[this.ptr32+8]>>2,n=[];for(let r=0;r<e;++r){const e=this.HEAP32[t+2*r],a=this.HEAP32[t+2*r+1];n.push({x:e,y:a})}return n}get next(){const e=this.HEAPU32[this.ptr32+11];return e?new i(e,this.buf):null}get time(){return this.HEAPU32[this.ptr32+13]}get cacheCount(){return this.HEAP32[this.ptr32+14]}get quality(){return this.HEAP32[this.ptr32+15]}}class o extends a{get head(){const e=this.HEAPU32[this.ptr32+2];return e?new i(e,this.buf):null}}class s{constructor(e){this.type=e.type,this.typeName=r.ZBarSymbolType[this.type],this.data=e.data,this.points=e.points,this.time=e.time,this.cacheCount=e.cacheCount,this.quality=e.quality}static createSymbolsFromPtr(e,t){if(0==e)return[];let n=new o(e,t).head;const r=[];for(;null!==n;)r.push(new s(n)),n=n.next;return r}decode(e){return new TextDecoder(e).decode(this.data)}}t.Symbol=s},556:(e,t)=>{"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),t.ZBarConfigType=t.ZBarSymbolType=void 0,(r=t.ZBarSymbolType||(t.ZBarSymbolType={}))[r.ZBAR_NONE=0]="ZBAR_NONE",r[r.ZBAR_PARTIAL=1]="ZBAR_PARTIAL",r[r.ZBAR_EAN8=8]="ZBAR_EAN8",r[r.ZBAR_UPCE=9]="ZBAR_UPCE",r[r.ZBAR_ISBN10=10]="ZBAR_ISBN10",r[r.ZBAR_UPCA=12]="ZBAR_UPCA",r[r.ZBAR_EAN13=13]="ZBAR_EAN13",r[r.ZBAR_ISBN13=14]="ZBAR_ISBN13",r[r.ZBAR_I25=25]="ZBAR_I25",r[r.ZBAR_CODE39=39]="ZBAR_CODE39",r[r.ZBAR_PDF417=57]="ZBAR_PDF417",r[r.ZBAR_QRCODE=64]="ZBAR_QRCODE",r[r.ZBAR_CODE128=128]="ZBAR_CODE128",r[r.ZBAR_SYMBOL=255]="ZBAR_SYMBOL",r[r.ZBAR_ADDON2=512]="ZBAR_ADDON2",r[r.ZBAR_ADDON5=1280]="ZBAR_ADDON5",r[r.ZBAR_ADDON=1792]="ZBAR_ADDON",(n=t.ZBarConfigType||(t.ZBarConfigType={}))[n.ZBAR_CFG_ENABLE=0]="ZBAR_CFG_ENABLE",n[n.ZBAR_CFG_ADD_CHECK=1]="ZBAR_CFG_ADD_CHECK",n[n.ZBAR_CFG_EMIT_CHECK=2]="ZBAR_CFG_EMIT_CHECK",n[n.ZBAR_CFG_ASCII=3]="ZBAR_CFG_ASCII",n[n.ZBAR_CFG_NUM=4]="ZBAR_CFG_NUM",n[n.ZBAR_CFG_MIN_LEN=32]="ZBAR_CFG_MIN_LEN",n[n.ZBAR_CFG_MAX_LEN=33]="ZBAR_CFG_MAX_LEN",n[n.ZBAR_CFG_UNCERTAINTY=64]="ZBAR_CFG_UNCERTAINTY",n[n.ZBAR_CFG_POSITION=128]="ZBAR_CFG_POSITION",n[n.ZBAR_CFG_X_DENSITY=256]="ZBAR_CFG_X_DENSITY",n[n.ZBAR_CFG_Y_DENSITY=257]="ZBAR_CFG_Y_DENSITY"},154:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),a(n(77),t),a(n(203),t),a(n(233),t),a(n(708),t)},980:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getInstance=void 0;const r=n(559);let a=null,i=(async()=>{if(a=await(0,r.loadWasmInstance)({}),!a)throw Error("WASM was not loaded");return a})();t.getInstance=async()=>await i},559:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.loadWasmInstance=void 0;const a=r(n(49)),i=r(n(518)),o=(e,t)=>("zbar.wasm"!=e&&console.error("Unexpected file:",e),a.default);t.loadWasmInstance=async e=>(e.locateFile=o,await(0,i.default)(e))},233:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.scanImageData=t.scanRGBABuffer=t.scanGrayBuffer=t.getDefaultScanner=void 0;const r=n(77),a=n(203).ImageScanner.create();t.getDefaultScanner=async()=>await a;const i=async(e,t)=>{void 0===t&&(t=await a);const n=t.scan(e);if(n<0)throw Error("Scan Failed");return 0===n?[]:e.getSymbols()};t.scanGrayBuffer=async(e,t,n,a)=>{const o=await r.Image.createFromGrayBuffer(t,n,e),s=await i(o,a);return o.destroy(),s},t.scanRGBABuffer=async(e,t,n,a)=>{const o=await r.Image.createFromRGBABuffer(t,n,e),s=await i(o,a);return o.destroy(),s},t.scanImageData=async(e,n)=>await(0,t.scanRGBABuffer)(e.data.buffer,e.width,e.height,n)},518:(e,t,n)=>{var r,a=(r=(r="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0)||"/index.js",function(e){var t,a,i=void 0!==(e=e||{})?e:{};i.ready=new Promise((function(e,n){t=e,a=n}));var o,s={};for(o in i)i.hasOwnProperty(o)&&(s[o]=i[o]);var c,u,f,l,h,d=[],p="object"==typeof window,_="function"==typeof importScripts,m="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,g="";m?(g=_?n(682).dirname(g)+"/":"//",c=function(e,t){return l||(l=n(595)),h||(h=n(682)),e=h.normalize(e),l.readFileSync(e,t?null:"utf8")},f=function(e){var t=c(e,!0);return t.buffer||(t=new Uint8Array(t)),t.buffer||G("Assertion failed: "+undefined),t},u=function(e,t,r){l||(l=n(595)),h||(h=n(682)),e=h.normalize(e),l.readFile(e,(function(e,n){e?r(e):t(n.buffer)}))},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),d=process.argv.slice(2),process.on("uncaughtException",(function(e){if(!(e instanceof Q))throw e})),process.on("unhandledRejection",(function(e){throw e})),i.inspect=function(){return"[Emscripten Module object]"}):(p||_)&&(_?g=self.location.href:"undefined"!=typeof document&&document.currentScript&&(g=document.currentScript.src),r&&(g=r),g=0!==g.indexOf("blob:")?g.substr(0,g.replace(/[?#].*/,"").lastIndexOf("/")+1):"",c=function(e){var t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),t.responseText},_&&(f=function(e){var t=new XMLHttpRequest;return t.open("GET",e,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}),u=function(e,t,n){var r=new XMLHttpRequest;r.open("GET",e,!0),r.responseType="arraybuffer",r.onload=function(){200==r.status||0==r.status&&r.response?t(r.response):n()},r.onerror=n,r.send(null)});var y,A,v=i.print||console.log.bind(console),b=i.printErr||console.warn.bind(console);for(o in s)s.hasOwnProperty(o)&&(i[o]=s[o]);s=null,i.arguments&&(d=i.arguments),i.thisProgram&&i.thisProgram,i.quit&&i.quit,i.wasmBinary&&(y=i.wasmBinary),i.noExitRuntime,"object"!=typeof WebAssembly&&G("no native wasm support detected");var w,I,R,B=!1,E="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function S(e,t,n){for(var r=t+n,a=t;e[a]&&!(a>=r);)++a;if(a-t>16&&e.subarray&&E)return E.decode(e.subarray(t,a));for(var i="";t<a;){var o=e[t++];if(128&o){var s=63&e[t++];if(192!=(224&o)){var c=63&e[t++];if((o=224==(240&o)?(15&o)<<12|s<<6|c:(7&o)<<18|s<<12|c<<6|63&e[t++])<65536)i+=String.fromCharCode(o);else{var u=o-65536;i+=String.fromCharCode(55296|u>>10,56320|1023&u)}}else i+=String.fromCharCode((31&o)<<6|s)}else i+=String.fromCharCode(o)}return i}function C(e){w=e,i.HEAP8=new Int8Array(e),i.HEAP16=new Int16Array(e),i.HEAP32=R=new Int32Array(e),i.HEAPU8=I=new Uint8Array(e),i.HEAPU16=new Uint16Array(e),i.HEAPU32=new Uint32Array(e),i.HEAPF32=new Float32Array(e),i.HEAPF64=new Float64Array(e)}i.INITIAL_MEMORY;var P,Z,O,D,F=[],N=[],U=[],T=0,H=null,x=null;function G(e){i.onAbort&&i.onAbort(e),b(e="Aborted("+e+")"),B=!0,e+=". Build with -s ASSERTIONS=1 for more info.";var t=new WebAssembly.RuntimeError(e);throw a(t),t}function M(e){return e.startsWith("data:application/octet-stream;base64,")}function j(e){return e.startsWith("file://")}function L(e){try{if(e==Z&&y)return new Uint8Array(y);if(f)return f(e);throw"both async and sync fetching of the wasm failed"}catch(e){G(e)}}function k(e){for(;e.length>0;){var t=e.shift();if("function"!=typeof t){var n=t.func;"number"==typeof n?void 0===t.arg?W(n)():W(n)(t.arg):n(void 0===t.arg?null:t.arg)}else t(i)}}function W(e){return P.get(e)}function Y(e){try{return A.grow(e-w.byteLength+65535>>>16),C(A.buffer),1}catch(e){}}i.preloadedImages={},i.preloadedAudios={},M(Z="zbar.wasm")||(O=Z,Z=i.locateFile?i.locateFile(O,g):g+O),D=m?function(){var e=process.hrtime();return 1e3*e[0]+e[1]/1e6}:function(){return performance.now()};var q,X={mappings:{},buffers:[null,[],[]],printChar:function(e,t){var n=X.buffers[e];0===t||10===t?((1===e?v:b)(S(n,0)),n.length=0):n.push(t)},varargs:void 0,get:function(){return X.varargs+=4,R[X.varargs-4>>2]},getStr:function(e){var t=function(e,t){return e?S(I,e,void 0):""}(e);return t},get64:function(e,t){return e}},$={f:function(e,t){var n;if(0===e)n=Date.now();else{if(1!==e&&4!==e)return 28,R[z()>>2]=28,-1;n=D()}return R[t>>2]=n/1e3|0,R[t+4>>2]=n%1e3*1e3*1e3|0,0},c:function(e,t,n){I.copyWithin(e,t,t+n)},d:function(e){var t,n=I.length,r=2147483648;if((e>>>=0)>r)return!1;for(var a=1;a<=4;a*=2){var i=n*(1+.2/a);if(i=Math.min(i,e+100663296),Y(Math.min(r,((t=Math.max(e,i))%65536>0&&(t+=65536-t%65536),t))))return!0}return!1},e:function(e){return 0},b:function(e,t,n,r,a){},a:function(e,t,n,r){for(var a=0,i=0;i<n;i++){var o=R[t>>2],s=R[t+4>>2];t+=8;for(var c=0;c<s;c++)X.printChar(e,I[o+c]);a+=s}return R[r>>2]=a,0}},z=(function(){var e={a:$};function t(e,t){var n,r=e.exports;i.asm=r,C((A=i.asm.g).buffer),P=i.asm.s,n=i.asm.h,N.unshift(n),function(e){if(T--,i.monitorRunDependencies&&i.monitorRunDependencies(T),0==T&&(null!==H&&(clearInterval(H),H=null),x)){var t=x;x=null,t()}}()}function n(e){t(e.instance)}function r(t){return function(){if(!y&&(p||_)){if("function"==typeof fetch&&!j(Z))return fetch(Z,{credentials:"same-origin"}).then((function(e){if(!e.ok)throw"failed to load wasm binary file at '"+Z+"'";return e.arrayBuffer()})).catch((function(){return L(Z)}));if(u)return new Promise((function(e,t){u(Z,(function(t){e(new Uint8Array(t))}),t)}))}return Promise.resolve().then((function(){return L(Z)}))}().then((function(t){return WebAssembly.instantiate(t,e)})).then((function(e){return e})).then(t,(function(e){b("failed to asynchronously prepare wasm: "+e),G(e)}))}if(T++,i.monitorRunDependencies&&i.monitorRunDependencies(T),i.instantiateWasm)try{return i.instantiateWasm(e,t)}catch(e){return b("Module.instantiateWasm callback failed with error: "+e),!1}(y||"function"!=typeof WebAssembly.instantiateStreaming||M(Z)||j(Z)||"function"!=typeof fetch?r(n):fetch(Z,{credentials:"same-origin"}).then((function(t){return WebAssembly.instantiateStreaming(t,e).then(n,(function(e){return b("wasm streaming compile failed: "+e),b("falling back to ArrayBuffer instantiation"),r(n)}))}))).catch(a)}(),i.___wasm_call_ctors=function(){return(i.___wasm_call_ctors=i.asm.h).apply(null,arguments)},i._ImageScanner_create=function(){return(i._ImageScanner_create=i.asm.i).apply(null,arguments)},i._ImageScanner_destory=function(){return(i._ImageScanner_destory=i.asm.j).apply(null,arguments)},i._ImageScanner_set_config=function(){return(i._ImageScanner_set_config=i.asm.k).apply(null,arguments)},i._ImageScanner_enable_cache=function(){return(i._ImageScanner_enable_cache=i.asm.l).apply(null,arguments)},i._ImageScanner_recycle_image=function(){return(i._ImageScanner_recycle_image=i.asm.m).apply(null,arguments)},i._ImageScanner_get_results=function(){return(i._ImageScanner_get_results=i.asm.n).apply(null,arguments)},i._ImageScanner_scan=function(){return(i._ImageScanner_scan=i.asm.o).apply(null,arguments)},i._Image_create=function(){return(i._Image_create=i.asm.p).apply(null,arguments)},i._Image_destory=function(){return(i._Image_destory=i.asm.q).apply(null,arguments)},i._Image_get_symbols=function(){return(i._Image_get_symbols=i.asm.r).apply(null,arguments)},i.___errno_location=function(){return(z=i.___errno_location=i.asm.t).apply(null,arguments)});function Q(e){this.name="ExitStatus",this.message="Program terminated with exit("+e+")",this.status=e}function K(e){function n(){q||(q=!0,i.calledRun=!0,B||(k(N),t(i),i.onRuntimeInitialized&&i.onRuntimeInitialized(),function(){if(i.postRun)for("function"==typeof i.postRun&&(i.postRun=[i.postRun]);i.postRun.length;)e=i.postRun.shift(),U.unshift(e);var e;k(U)}()))}e=e||d,T>0||(function(){if(i.preRun)for("function"==typeof i.preRun&&(i.preRun=[i.preRun]);i.preRun.length;)e=i.preRun.shift(),F.unshift(e);var e;k(F)}(),T>0||(i.setStatus?(i.setStatus("Running..."),setTimeout((function(){setTimeout((function(){i.setStatus("")}),1),n()}),1)):n()))}if(i._free=function(){return(i._free=i.asm.u).apply(null,arguments)},i._malloc=function(){return(i._malloc=i.asm.v).apply(null,arguments)},x=function e(){q||K(),q||(x=e)},i.run=K,i.preInit)for("function"==typeof i.preInit&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return K(),e.ready});e.exports=a},49:(e,t,n)=>{"use strict";e.exports=n.p+"static/235eff51d7a9ded7a612.bin"},595:()=>{},682:()=>{}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{"use strict";function e(e){return document.getElementById(e)}const t=document.createElement("canvas"),r=t.getContext("2d");var a=n(154);function i(t=!0){const n=e("overlay")?.classList;t?n?.remove("hide"):n?.add("hide")}const o=e("canvas"),s=e("video");async function c(t,n,r=!1){const o=await(0,a.scanImageData)(t);if(o.length){const t=function(e){let t;if(t=e.match(/^SMSTO:(\d+):(.+)$/))return{number:t[1],body:t[2]};throw new Error("unexpected msg pattern")}(o[0].decode());"1922"==t.number&&function(t){const n=/iPad|iPhone|iPod/.test(navigator.userAgent)?"&":"?";e("link").href=`sms:${t.number}${n}body=${encodeURIComponent(t.body).replace(/%20/g,"+")}`}(t),i(),n?.()}else if(!r)throw new Error("unable to decode QR code")}let u,f=!1;function l(){f&&(u=setInterval((()=>{!async function(e){const t=(o.width=s.videoWidth,o.height=s.videoHeight,o.getContext("2d")?.drawImage(s,0,0),o.getContext("2d")?.getImageData(0,0,o.width,o.height)||null);t&&c(t,e,!0)}((()=>{clearInterval(u)}))}),100))}(async function(){return await navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:{exact:"environment"}}})})().then((function(t){return new Promise(((n,r)=>{const a=e("video");a.srcObject=t,a.classList.remove("hide"),a.onloadedmetadata=()=>{a.play(),n()},a.onerror=()=>{r()}}))})).then((()=>{f=!0})).then(l).catch((t=>{if(e("access-error").classList.remove("hide"),"NotFoundError"!=t.name)return Promise.reject(t)})),e("scan")?.addEventListener("click",(function(){i(!1),l()})),function e(n,a){n.addEventListener("change",(()=>{n.files?.length&&async function(e){return new Promise(((n,a)=>{const i=new Image;i.onload=()=>{URL.revokeObjectURL(i.src),t.width=i.width,t.height=i.height,r.drawImage(i,0,0),n(r.getImageData(0,0,i.width,i.height))},i.onerror=function(e){a(e)},i.src=URL.createObjectURL(e)}))}(n.files[0]).then((e=>{a(e)})),n.replaceWith(n=function(){const e=document.createElement("input");return e.type="file",e.id="file",e.capture="environment",e.accept="image/*",e}()),e(n,a)}),{once:!0})}(e("file"),(e=>{c(e).catch((()=>{alert("無法解析 QR Code. 請重新嘗試.\nUnable to decode QR code.  Please try again")}))}))})()})();
//# sourceMappingURL=app.3c30597316537dd81c86.js.map