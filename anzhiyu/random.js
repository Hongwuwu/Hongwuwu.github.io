var posts=["2026/02/08/hello-world/","2026/03/07/测试！这是一条由Claude编辑并发布的Blog！/","2026/04/26/需求工程-复习笔记/","2026/02/15/hexo/","2026/03/08/Vjepa/","2026/02/08/testPost/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };