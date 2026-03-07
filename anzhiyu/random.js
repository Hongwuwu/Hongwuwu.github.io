var posts=["2026/03/07/A-Month-2/","2026/02/08/hello-world/","2026/02/08/testPost/","2026/02/15/hexo/","2026/03/07/测试！这是一条由Claude编辑并发布的Blog！/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };