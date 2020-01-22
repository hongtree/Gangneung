$(document).ready(function () {

  var duration=500;
  var aside=$('.aside_menu aside');
  var asideButton= aside.find('#btn_menu')
  
  .click(function(){
    aside.toggleClass('open');

    if(aside.hasClass('open')){
      aside.stop().animate({left:'-30px'},duration,'easeOutBack');
      asideButton.find('.con').addClass('menu_on');
    }else{
      aside.stop().animate({left:'-70%'},duration,'easeOutBack');
      asideButton.find('.con').removeClass('menu_on');
    }
  });

    // scroll
    var speed = 700;
    function scrolling(obj) {
      if (!obj) {
        $('html, body').animate({ scrollTop: 0 }, speed);
      } else {
        var posTop = $(obj).offset().top;
        $('html, body').animate({ scrollTop: posTop }, speed)
      }
    };

    /* 스크롤 모션 */
    setGrid('.section_body');

    function setGrid(target) {
      var $win = $(window),
        $target = $(target);

        
      var scrollMotion = function () {
        var scrollTop = $win.scrollTop(),
          winH = $win.height();
          console.log(scrollTop);
          console.log(winH);
          
        $target.each(function (i) {
          var $this = $(this),
            position = this.getBoundingClientRect().top;  // 요소의 크기와 요소의 viewport에서의 상대적인 위치를 반환
            console.log(this);
            console.log(position);
          if (position < winH) {
            $this.addClass('show');
          } else {
            $this.removeClass('show');
          }
        });
      };

      scrollMotion();
      $(window).on('scroll', scrollMotion);
    }
    var currentPage = 1;

    
    // menu link
    $('.gnb ul li').click(function () {
      var direction = $(this).attr("href");
      scrolling(direction);
      moveSection($(this).parent().index()+1);
    });

    // scroll mousewheel
    var moveTop = null;
    $(".section").each(function () {
      // 개별적으로 Wheel 이벤트 적용
      $(this).on("mousewheel DOMMouseScroll", function (e) {
        e.preventDefault();
        var delta = 0;

        if (!event) event = window.event;
        if (event.wheelDelta) {
          delta = event.wheelDelta / 120;
          if (window.opera) delta = -delta;
        } else if (event.detail) delta = -event.detail / 3;

        // 마우스휠을 위에서 아래로
        if (delta < 0) {
          if ($(this).next() != undefined) {
            moveTop = $(this).next().offset().top; //타겟의 다음 좌표의
          }
          // 마우스휠을 아래에서 위로
        } else {
          if ($(this).prev() != undefined) {
            moveTop = $(this).prev().offset().top;
          }
        }
        // 화면 이동 0.8초(800)
        $("html,body").stop().animate({
          scrollTop: moveTop + 'px'
        }, {
            duration: 1000, complete: function () {
              moveSection();
            }
          });
      });
    });

    function moveSection(idx){
      if(moveTop == $('#section1').offset().top || idx==1){
        $('.gnb ul li').removeClass('active');
        $('.gnb ul li:nth-child(1)').addClass('active')
        $('#topBtn').css("display","none")
        $('.bar').css('background','#fff');
      }else if(moveTop == $('#section2').offset().top || idx==2){
        $('.gnb ul li').removeClass('active');
        $('.gnb ul li:nth-child(2)').addClass('active')
        $('.bar').css('background','#555');
        $('#topBtn').css("display","block")
      }else if(moveTop == $('#section3').offset().top || idx==3){
        $('.gnb ul li').removeClass('active');
        $('.gnb ul li:nth-child(3)').addClass('active')
      }else if(moveTop == $('#section4').offset().top || idx==4){
        $('.gnb ul li').removeClass('active');
        $('.gnb ul li:nth-child(4)').addClass('active')
      }else if(moveTop == $('#section5').offset().top || idx==5){
        $('.gnb ul li').removeClass('active');
        $('.gnb ul li:nth-child(5)').addClass('active')
      }else if(moveTop == $('#section6').offset().top || idx==6){
        $('.gnb ul li').removeClass('active');
        $('.gnb ul li:nth-child(6)').addClass('active')
      }else if(moveTop == $('#section7').offset().top || idx==7){
        $('.gnb ul li').removeClass('active');
        $('.gnb ul li:nth-child(7)').addClass('active')
      }
    }

    function sectMove(idx){
      if(idx == 1){
        scrolling($('#section1'));
        $('.gnb ul li').removeClass('active');
        $('.gnb ul li:nth-child(1)').addClass('active')
      }else if(idx == 2){
        scrolling($('#section2'));
        $('.gnb ul li').removeClass('active');
        $('.gnb ul li:nth-child(2)').addClass('active')
      }else if(idx == 3){
        scrolling($('#section3'));
        $('.gnb ul li').removeClass('active');
        $('.gnb ul li:nth-child(3)').addClass('active')
      }else if(idx == 4){
        scrolling($('#section4'));
        $('.gnb ul li').removeClass('active');
        $('.gnb ul li:nth-child(4)').addClass('active')
      }else if(idx == 5){
        scrolling($('#section5'));
        $('.gnb ul li').removeClass('active');
        $('.gnb ul li:nth-child(5)').addClass('active')
      }else if(idx == 6){
        scrolling($('#section6'));
        $('.gnb ul li').removeClass('active');
        $('.gnb ul li:nth-child(6)').addClass('active')
      }else if(idx == 7){
        scrolling($('#section7'));
        $('.gnb ul li').removeClass('active');
        $('.gnb ul li:nth-child(7)').addClass('active')
      }
  }

  boxTab("#cont6","strong > a", ".grap");
  // 박스탭 시작
  function boxTab(_this,_btn,_con){
    var _thisBox = $(_this);
    var _btn = _thisBox.find(_btn);
    _btn.parent().eq(0).find("a").addClass("ov");
    _thisBox.find(_con).eq(0).css("display","block");
    _btn.on("click",function(e){
      _thisBox.find(_con).css("display","");
      _btn.removeClass("ov");
      $(this).addClass("ov");
      $(this).parent().next().show();
      e.preventDefault();
    });
  }
  // 박스탭 끝

/* submenu------------------------------------------------------ */   
    $(".info").on("mouseover",function(){
      $(".on").stop().slideDown();
      $(".header").css("display","none");
      $(".section_body").stop().slideUp();
    })
    $(".on").on("mouseleave",function(){
      $(".on").stop().slideUp();
      $(".header").css("display","block");
      $(".section_body").stop().slideDown();
        
    })
    $(".mouse").on("click",function(){
    $("")
    })

    $(".menu2").on("click",function(e){
      $(this).children().slideDown();
      $(this).siblings().children(".menu2 .sub").slideUp();
    })
    $(".info").on("mouseover",function(){
      $(".on").stop().slideDown();
      $(".header").css("display","none");
      $(".section_body").stop().slideUp();
    })

     /* mainslide 시작------------------------------------------------------ */        
     $(".slideshow").each(function(){
      var slides = $(this).find("img");
      var count = slides.length;
      var currentIndex = 0;
      slides.eq(currentIndex).fadeIn();
      //5000ms마다 showNext함수를 실행
      setInterval(showNext,5000);
      //다음 슬라이드는 나타내는 함수 시작 
      function showNext(){
      //다음에 보여질 인덱스
      var nextIndex = (currentIndex+1) % count;
      //현재 슬라이드를 페이드아웃
      slides.eq(currentIndex).fadeOut();
      //다음 슬라이드를 페이드인
      slides.eq(nextIndex).fadeIn();
      //현재 표시된 슬아이의 인덱스를 저장
      currentIndex = nextIndex;    
      }
      //다음 슬라이드는 나타내는 함수 끝
      
  })
  $(".slideshow2").each(function(){
      var slides = $(this).find("img");
      var count = slides.length;
      var currentIndex = 0;
      slides.eq(currentIndex).fadeIn();
      //5500ms마다 showNext함수를 실행
      setInterval(showNext,5500);
      //다음 슬라이드는 나타내는 함수 시작 
      function showNext(){
      //다음에 보여질 인덱스
      var nextIndex = (currentIndex+1) % count;
      //현재 슬라이드를 페이드아웃
      slides.eq(currentIndex).fadeOut();
      //다음 슬라이드를 페이드인
      slides.eq(nextIndex).fadeIn();
      //현재 표시된 슬아이의 인덱스를 저장
      currentIndex = nextIndex;    
      }
      //다음 슬라이드는 나타내는 함수 끝
      
  })
/* star ------------------------------------------------------ */        
        
var canvas = document.getElementById("canvas"),
ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var stars = [], // Array that contains the stars
    FPS = 60, // Frames per second
    x = canvas.width; // Number of stars

// Push stars to array

for (var i = 0; i < x; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random(),
    vx: Math.floor(Math.random() * 10) - 5,
    vy: Math.floor(Math.random() * 10) - 5
  });
}

// Draw the scene

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  ctx.globalCompositeOperation = "lighter";

  for (var i = 0, x = stars.length; i < x; i++) {
    var s = stars[i];

    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
    ctx.fill();
  }
}

  // Update star locations

  function update() {
    for (var i = 0, x = stars.length; i < x; i++) {
      var s = stars[i];

      s.x += s.vx / FPS;
      s.y += s.vy / FPS;

      if (s.x < 0 || s.x > canvas.width) s.x = -s.x;
      if (s.y < 0 || s.y > canvas.height) s.y = -s.y;
    }
  }

  // Update and draw

  function tick() {
    draw();
    update();
    requestAnimationFrame(tick);
  }
  tick();

  
  var texto=$('h2.typing-text-effect span.oculto').text();
  var texto_dividido = texto.split('');
  var numerar_texto=texto_dividido.length;
  var i=0;
  var funcion_intervalos = function()
  {
      if(i<numerar_texto)
      {
          var texto_nuevo=$('h2.typing-text-effect span.texto').html();
          $('h2.typing-text-effect span.texto').html(texto_nuevo+texto_dividido[i]);
      }else{
          clearInterval(interval);
      }
      i++;
  }

  var interval=setInterval(funcion_intervalos,150);
  var opacidad=true;
  setInterval(function(){
      if(opacidad==false)
      {
          $('h2.typing-text-effect span.guion').css({
              opacity: "10"
              
          });
          opacidad=true;
      }else{
          $('h2.typing-text-effect span.guion').css({
              opacity: "0"
          });
          opacidad=false;

      }
  },500);



});