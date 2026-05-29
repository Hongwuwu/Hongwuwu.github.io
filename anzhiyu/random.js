var posts=["2026/05/27/Linux-Shell脚本编程-知识点速成/","2026/03/08/Vjepa/","2026/04/26/irweb-工业巡检智能助手部署手册/","2026/02/08/hello-world/","2026/02/08/testPost/","2026/05/14/数据库原理与应用-期末复习资料/","2026/03/07/测试！这是一条由Claude编辑并发布的Blog！/","2026/04/26/需求工程-复习笔记/","2026/05/29/龙芯部署记录/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };