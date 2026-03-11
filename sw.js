const cacheName="ps4-host-v1"

const files=[
"/",
"index.html",
"exploit.js"
]

self.addEventListener("install",e=>{
e.waitUntil(
caches.open(cacheName).then(cache=>cache.addAll(files))
)
})

self.addEventListener("fetch",e=>{
e.respondWith(
caches.match(e.request).then(res=>{
return res || fetch(e.request)
})
)
})
