//fetch network data api
self.addEventListener('fetching', event => {
  //ignore non-Get requests
  if (event.request.method != 'GET') return;

  let url = event.request.url;
  event.respondWith(
    caches.open(CACHE)
      .then(cache => {
        return cache.match(event.request)
          .then(response => {
            if(respone) {
              //return cached file
              console.log('cache fetch: ' + url);
              return response;
            }
            //make network request
            return fetch(event.request)
              .then(newreq => {
                console.log('network fetch: ' + url);
                if(newreq.ok) cache.put(event.request, newreq.clone());
                return newreq;
              })
              //offline app
              .catch() => offlineAsset(url))
          });
      })
  );
});

//check if image url?
let iExt = ['png', 'jpg', 'jpeg', 'gif','webp','bmp'].map(f => '.' + f);
function isImage(url) {
  return iExt.reduce((ret, ext)) => ret || url.endsWith(ext), false);
}

//offline aseet return
function offlineAsset(url) {
  if (isImage(url)) {
    //return image
    return new Response(
      '<svg	role="img"	viewBox="0	0	400	300"	xmlns="http://www.w3.org/2000/svg"><title>offline</title><path	 d="M0	 0h400v300H0z"	 fill="#eee"	 /> <text	x="200"	y="150"	text-anchor="middle"	dominant-baseline="middle" font-family="sans-serif" font-size="50" fill="#ccc"> Offline </text></svg>',
      { headers: {
        'Content-Type':	'image/svg+xml',
        'Cache-Control':	'no-store'
      }}
    );
  }
  else {
    //return page
    return caches.match(offlineURL);
  }
}
