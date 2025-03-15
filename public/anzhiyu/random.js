var posts=["2025/03/12/宝塔项目部署/","2025/03/12/部署与上线/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };