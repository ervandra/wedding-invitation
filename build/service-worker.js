"use strict";var precacheConfig=[["/index.html","6617f3762616031558d5ef68d4d293b3"],["/static/css/main.5f3590f5.css","4ff0fb3075d70d391c414803ddfdee66"],["/static/js/main.ad33f610.js","b21c55bb1b688871cdf740cd0bb12744"],["/static/media/Dosis.0f6ef243.woff","0f6ef2439aa7cd5ad98573242f80c2bb"],["/static/media/Dosis.30d7bc4d.eot","30d7bc4d2cbb1d2317c4d53d66314550"],["/static/media/Dosis.946a429c.svg","946a429cda122468fb222d9456465a9e"],["/static/media/Dosis.f8904192.ttf","f8904192d7402b49c0dbe62efb44eed1"],["/static/media/Dosis.f9c97aec.woff2","f9c97aeca20af6e2b1c1de09b8c2a07f"],["/static/media/MrsSaint.6486f222.woff2","6486f2227096990f7a0cc06b5d77ad2a"],["/static/media/MrsSaint.671fae60.eot","671fae609690bdab5630cf634369de4b"],["/static/media/MrsSaint.824ef2fe.svg","824ef2fe4b8b2b147509cc91886a201b"],["/static/media/MrsSaint.d382555a.woff","d382555ab7f2aa5865b67d224dff5f6d"],["/static/media/MrsSaint.e04853d7.ttf","e04853d72aa013687c50143a727bf9e5"],["/static/media/bg1.f0edd521.jpg","f0edd5215f9448e632151278aec4dcce"],["/static/media/bg2.b9b5f9a4.jpg","b9b5f9a4cc824be4ff3112750eed2dff"],["/static/media/bg3.f99a5eb9.jpg","f99a5eb9f97b22469d65ece65135deca"],["/static/media/bg5.d90c0c68.jpg","d90c0c68646e27a68ba05ccda69ad8ee"],["/static/media/bg6.fa5371d6.jpg","fa5371d6d885a55a8fc4038b40b1ad2d"],["/static/media/daon-bawah.fa89b567.png","fa89b567867edc36904babeafd19fca5"],["/static/media/daon-eddie.dd072410.png","dd07241027d80e32cc61a2c699b5b25a"],["/static/media/daon-intan.2f78df2e.png","2f78df2e0a172aec8e15b4ded4e5663a"],["/static/media/default-skin.b257fa9c.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/static/media/eddie.bfb1ac53.jpg","bfb1ac5381d1e43dfc540085a7c9fdd6"],["/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/static/media/gelas.f4fffa45.svg","f4fffa4507008906a7eb5d212d913344"],["/static/media/intan.ffb118c9.jpg","ffb118c93688047fd4dbdc2438f3dc1f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});