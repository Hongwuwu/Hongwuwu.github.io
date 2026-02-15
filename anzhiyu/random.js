var posts=["2026/02/08/hello-world/","2026/02/08/testPost/","2026/02/15/hexo/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };