/*Swiper JS 开始*/
var swiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  on:{
      init: function(){
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      } 
   }
});
/*Swiper JS 结束*/

/*添加音乐点击事件*/
var music = document.getElementById("music");
var music_bg = document.querySelectorAll(".music_bg")[0];
var music_tu = document.querySelectorAll(".music_tu")[0];
var audio = document.querySelectorAll("audio")[0];
var flag = 1;
music.onclick=function(){
	if(flag == 1){
		music_bg.style.display = "none";
		music_tu.style.animation = "none";
		audio.pause();
		flag = 0;
	}else{
		music_bg.style.display = "block";
		music_tu.style.animation = "music 2s linear infinite";
		audio.play();
		flag = 1;
	}
}
/*添加音乐点击事件 完成*/


