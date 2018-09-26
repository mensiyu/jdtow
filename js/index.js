// load:等页面资源都加载完毕才执行JS代码
window.addEventListener('load',function(){
   // 拿到header
   var header = document.querySelector('#header');
   // 获取滚动条滚动的距离需要添加一个滚动条滚动的事件在事件里面去获取
   window.addEventListener('scroll',function(){
        // 在滚动条事件里面获取滚动的距离
        var scrolltop = document.documentElement.scrollTop;
          // console.log(scrolltop);

        // 获取轮播图的高度来计算
        var slideHeight = document.querySelector('#slide').offsetHeight;
        // 计算当前滚动里面的透明度值 距离/轮播图高度
        var opacity = scrolltop/slideHeight;
        console.log(opacity);

        // 判断是否大于1 超出就都是1
        if(opacity > 1){
          header.style.backgroundColor='rgba(224,24,27,1)';
        }else{
          // 如果透明度小于 就设置为当前计算的透明度
          header.style.backgroundColor='rgba(224,24,27,'+opacity+')';
        }
   });


   // 倒计时
    // 1. 获取未来的时间  new Date()参数 
    //今天中午12点的时间 月份是从0-11 月份减少1月  按照年月日时分秒每个数字用逗号隔开
    // getTime方法是获取一个时间的毫秒数 从1970 1.1. 0:00:00  - 今天中午12的时间差的毫秒数
    var futureTime = Math.floor(new Date(2018,08,22,12,00,00).getTime()/1000);//除一千是拿到秒数
    // 获取当前时间的秒数 
    var nowTime = Math.floor(new Date().getTime()/1000);
      // 获取未来时间-当前时间的秒杀的时间差 倒计时的总时间
      var time = futureTime - nowTime;
      // 找到计时器
      var spans = document.querySelectorAll('.down-time span');
      // 定义一个定时器 让总时间每隔1秒--
      setInterval(function(){
        time--;
        if (time<=0) {
          //写死的一个时间  真正开发使用重新请求后台的时间
          time = 7200;
        };
        // 求出当前秒数的小时 分钟 秒数  
      // 小时 因为1小时是3600秒 总秒数/3600就是小时数
      var hour = Math.floor(time/3600);
      //分钟 因为1分钟60 可能超过了1小时去掉小时部分 总时间%3600  用秒数/60
      var minute = Math.floor(time%3600/60);
      //秒数 总时间 % 60 只要除不尽60 都是秒数部分
      var second = Math.floor(time%60);
      // 把计算好的时分秒放到span里面 把小时的部分/10 就是 十位
      spans[0].innerHTML = Math.floor(hour/10);
      //小时部分的个位 小时 取模10 
      spans[1].innerHTML = Math.floor(hour%10);
      spans[3].innerHTML = Math.floor(minute/10);
      spans[4].innerHTML = Math.floor(minute%10);
      spans[6].innerHTML = Math.floor(second/10);
      spans[7].innerHTML = Math.floor(second%10);

      },1000)


})

        
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    
    // // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay:true,//等同于以下设置
  autoplay: {
    delay: 1000,
    stopOnLastSlide: false,// 如果设置为true，当切换到最后一个slide时停止自动切换。（loop模式下无效）
    disableOnInteraction: false,//当用户滑动的时候禁止自动轮播图 不需要禁止就为false
    },
    loop: true, // 是否开启无缝轮播图 开启无轮播图  如果不开 刷回去倒退回去
    // // 如果需要前进后退按钮
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    
    // // 如果需要滚动条
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  })        
  