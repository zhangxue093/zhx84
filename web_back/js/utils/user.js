var user ={
  // 登录界面
    login:function(userName,password,callback){
        $.post(url.user_login,{user_name:userName,password:password},function(res){
          callback(res);
        })
    },
  //  退出功能
     logout:function(callback){
      $.ajax({
        url:url.user_logout,
        type:'post',
        success:function(res){
        callback(res);
      }
      })
    },
    
    // 获取管理员信息
    getInfo:function(callback){
      $.ajax({
        url: url.user_xinxi,
        type:'get',
        success:function(res){
          callback(res) ;
          }
        
      })
    }

  }