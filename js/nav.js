


    $(document).ready( function scroll_to(init_top, init_left){
      var init_top = $(".content").offset().top+0;
     var init_left = $(".content").offset().left+0;
var windowWidth = $(window).width()
      if(windowWidth>600){
        $(".content").addClass("zoom-out")
        $(".insight1").addClass("tenx")

  // $("#overview").css({"height":168 + 'vw', "width":200 + 'vw'})
      // $('html,body').animate({scrollTop: init_top,
      // scrollLeft:init_left}, 300)
      , true}

    })


var window_height = $(window).height();
var window_width= $(window).width();

  var image_width = $(".content").width()
  var image_height = $(".content").height()

  console.log(image_width)


  $('.content').on('click', function(e){
    var windowWidth = $(window).width()
    var offset_top = event.pageY;
    var offset_left = event.pageX;

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
  $(".content").css({"height":700 +'vh', "width":700 +'vw'})
    $(".insight1").removeClass("onex").addClass("tenx")

  // $(".click_layer").css({"height":168 +'vw' , "width":200 +'vw'})
  var top = Math.round(((offset_top*image_height)/overview_image_height)-(window_height/2));
   var top = Math.round(((offset_left*image_width)/overview_image_width)-(window_width/2));

  $('html, body').animate({scrollTop:offset_top, scrollLeft:offset_left},500);


  }


  })

    $('.insidecontent').hide()

  $('.filters-list a').on('click', function() {
    var filter = $(this).attr('data-filter')
    console.log(filter)
      $('.insidecontent').show()
    $('.all').hide()
    $(filter).show()
      $(".content").css("overflow", "hidden");

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

  $('.insidecontent').on('click', function() {
    var filter = $(this).attr('data-filter')
    console.log(filter)
      $('.insidecontent').hide()
    $('.all').hide()
    $(filter).hide()

    function enableScroll() {
        window.onscroll = function() {};
    }
    return true
  })

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
