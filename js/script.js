// Header on Window  Scrool 
$(window).scroll(function(){
    var sticky = $('header'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 1000) sticky.addClass('myheader');
    else sticky.removeClass('myheader');
});


// To show and hide certificate
$(".view-certificate").click(function(){
    $(".certificate-box").show(400);
});

$(".close").click(function(){
    $(".certificate-box").hide(300);
});

// Projects Switch 
$(".btn1").click(function(){
    $(".box").show(300);
});

$(".btn2").click(function(){
    $(".box-1").show(300);
    $(".box-2").show(300);
    $(".box-3").hide(300);
    $(".box-4").show(300);
    $(".box-5").show(300);
    $(".box-6").show(300);
    $(".box-7").hide(300);
    $(".box-8").hide(300);
    $(".box-9").hide(300);
});
  
$(".btn3").click(function(){
    $(".box-1").hide(300);
    $(".box-2").hide(300);
    $(".box-3").show(300);
    $(".box-4").hide(300);
    $(".box-5").hide(300);
    $(".box-6").hide(300);
    $(".box-7").show(300);
    $(".box-8").show(300);
    $(".box-9").show(300);
});

$(".btn4").click(function(){
    $(".box-1").hide(300);
    $(".box-2").hide(300);
    $(".box-3").hide(300);
    $(".box-4").show(300);
    $(".box-5").hide(300);
    $(".box-6").hide(300);
    $(".box-7").hide(300);
    $(".box-8").hide(300);
    $(".box-9").hide(300);
});

// To toggle ul
$(".menuswitch").click(function(){
    
    $("nav").slideToggle();
    $("ul").slideToggle();
  });