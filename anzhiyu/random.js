var posts=["2026/02/08/hello-world/","2026/02/08/testPost/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };