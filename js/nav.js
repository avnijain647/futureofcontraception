


    $(document).ready( function scroll_to(init_top, init_left){
      var init_top = $(".content").offset().top+0;
     var init_left = $(".content").offset().left+0;
var windowWidth = $(window).width()
      if(windowWidth>600){
        $(".content").addClass("zoom-out")
        $(".insight1").addClass("onex")

  // $("#overview").css({"height":168 + 'vw', "width":200 + 'vw'})
      // $('html,body').animate({scrollTop: init_top,
      // scrollLeft:init_left}, 300)
      , true}

    })


var window_height = $(window).height();
var window_width= $(window).width();

  var image_width = $(".content").width()
  var image_height = $(".content").height()

  // console.log(image_width)


  $('.content').on('click', function(e){
    var windowWidth = $(window).width()
    var offset_top = event.pageY;
    var offset_left = event.pageX;
$('.menu-display').css('display', 'none')
    var overview_image_width = $(".content").width()
    var overview_image_height = $(".content").height()


              if($('.zoom-out').is(':visible') && windowWidth>600){

              $(".content").removeClass("zoom-out").addClass("zoom-in")
              $(".content").css({"height":100 + 'vh', "width":window_width})
                // $(".click_layer").css({"height":84 + 'vw', "width":window_width})
              $(".insight1").removeClass("tenx").addClass("onex")

  }else if (windowWidth>600){


         var overview_image_width = $(".content").width()
         var overview_image_height = $(".content").height()


  $(".content").removeClass("zoom-in").addClass("zoom-out")
  $(".content").css({"height":100 +'vh', "width":100 +'vw'})
    // $(".insight1").removeClass("onex").addClass("tenx")

  // $(".click_layer").css({"height":168 +'vw' , "width":200 +'vw'})
  var top = Math.round(((offset_top*image_height)/overview_image_height)-(window_height/2));
   var top = Math.round(((offset_left*image_width)/overview_image_width)-(window_width/2));

  $('html, body').animate({scrollTop:offset_top, scrollLeft:offset_left},500);


  }


  })
  $('.bg-articles').hide()
    $('.articles').hide()

  $('.filters-list a').on('click', function() {
    var filter = $(this).attr('data-filter')
    console.log(filter)
      $('.bg-articles').show()
      $('.articles').show()
    $('.all').hide()
    $(filter).show()
    $(this).addClass('visited')
    $('.close').removeClass('show-menu')
      $('.menu-display').css('display', 'none')
  $('.content').addClass('opacity', 10000)
      function disableScroll() {
          // Get the current page scroll position
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

              // if any scroll is attempted, set this to the previous value
              window.onscroll = function() {
                  window.scrollTo(scrollLeft, scrollTop);
              };
      }


    return false
  })

  $('.bg-articles').on('click', function() {
    var filter = $(this).attr('data-filter')
    console.log(filter)
    $('.bg-articles').hide()
      $('.articles').hide()
    $('.all').hide()
    $(filter).hide()
    $('.close').removeClass('show-menu')
      $('.menu-display').css('display', 'none')
  $('.content').removeClass('opacity', 5000)
    // function enableScroll() {
    //     window.onscroll = function() {};
    // }
    return true
  })

  $('.menu').on('click', function() {
    $('.menu-display').css('display', 'block')
    $('.close').toggleClass('show-menu')
    return false
  })

  $('.close').on('click', function() {
    $('.menu-display').css('display', 'none')
    $('.close').toggleClass('show-menu')
    return false
  })

$(document).ready(function(){

a.nav = {
  navGallery:function(e){
    var that = $(this);
    var gallery = that.parents('.insight-macro');
    var current = $('.gallery .visible').index();
    var newCurrent = 0;
    // previous
    if(that.hasClass('prev')){
      if(current === 0){
        newCurrent = $('.gallery-image').length - 1;
      } else {
        newCurrent = current - 1;
      }
    } else {
      if(current === $('.gallery-image').length - 1){
        newCurrent = 0;
      } else {
        newCurrent = current + 1;
      }
    }
    $('.gallery-image').removeClass('visible').eq(newCurrent).addClass('visible');
    e.preventDefault();
  }

}

});





//   $('.next').on('click', function() {
//     var filter = $(this).attr('data-filter')
//     console.log(filter)
//     $(filter).addClass('visible')
//
//     if ($('.insight-macro-1').is(':visible')){
//   $('.insight-macro-1').removeClass('visible')
//   // $('.show-filters').text('Show Filters')
// } else {
//   // $('.filters-list').slideDown()
//   // $('.show-filters').text('Hide Filters')
// }
//     return false
//   })


  // document.addEventListener('scroll', function (event) {
  //     if (event.target.id === 'slide1') { // or any other filtering condition
  //         console.log('scrolling', event.target)
  //
  //         var pixel = $(document).scrollTop()
  //         // var documentHeight2 = $(".slide2_body").height()
  //         // var windowHeight2 = $('#slide2').height()
  //         //
  //         // var difference2 = documentHeight2 - windowHeight2
  //         // var percentage = 100 * pixel / difference2
  //    $('.content').css({'top': 0 * pixel , 'left': 0 * pixel  })
  //             // $('.scroll_side').css('left', -1 * pixel)
  //                 // $('.fixed_side').css('top', -1 * pixel)
  //           console.log(pixel)
  //     }
  // }, true /*Capture event*/)
