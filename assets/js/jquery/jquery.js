"use strict";

{
  document.addEventListener("DOMContentLoaded", () => {

    /* pickupカルーセルスライダー */ 
    function slickSp(){
      $('.pickup-container__pickup-images').slick({
        infinite: true,
        dots: true,
        centerMode: true,
        centerPadding: "20%",
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
      });
    }

    if (window.innerWidth <= 600) {
      console.log("slickSp");
      slickSp();

    }

    $(".pickup-container__pickup-images").slick({
      infinite: true,
      dots: true,
      centerMode: true,
      centerPadding: "10%",
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 3,
      responsive: [{
        breakpoint: 600, 
        settiings: {
          slidesToShow: 1
        }
      }],
    });
  });

  $(window).scroll(function() {
    // fadeinクラスに対して順に処理を行う
    $('.feature').each(function() {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // fadeinクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 200) {
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
      }
    });
  });
}