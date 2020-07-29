//
// var totalSlides = [$('.one'), $('.two'), $('.three')]
// var currentSlide = 0
// console.log(currentSlide)
//
//
//
// var nextSlide = function () {
// 	// increment our currentSlide value by reassigning it and incrementing it by 1
//   currentSlide = currentSlide + 1
// var leftPosition = (-currentSlide * 100) + '%'
// $('.holder').css('left', leftPosition )
// console.log(currentSlide)
// }
//
// setInterval(function (){
//
// nextSlide()
//
//
// }, 3000)



var currentSlide = 0
var currentSlideUser = 0

// here we find how many slides we have using the .length property
// this is useful because we can use it as our max slide value
var totalSlides = [$('.one'), $('.two'), $('.three')].length
var totalSlidesUser = [$('.user-one'), $('.user-two')].length
// this function moves to our slide. we pass in an argument to it (slide)
// which is the number for the slide we want to go to

var moveSlide = function (slide) {

  var leftPosition = (-slide * 100) + '%'

  $('.holder').css('left', leftPosition)

}

// usermoveslide
var moveSlideUser = function (slideUser) {

  var leftPositionUser = (-slideUser * 100) + '%'

  $('.user-holder').css('left', leftPositionUser)

  // var slideNumber = slide + 1

	// $('.steps').text(slideNumber + ' / ' + totalSlides)
}


var nextSlide = function () {
  currentSlide = currentSlide + 1

  if (currentSlide >= totalSlides) {
  	currentSlide = 0
  }
  moveSlide(currentSlide)
}
// usernextslide
var nextSlideuser = function () {
  currentSlideUser = currentSlideUser + 1

  if (currentSlideUser >= totalSlidesUser) {
  	currentSlideUser = 0
  }
  moveSlideUser(currentSlideUser)
}


// 2. a function that deals with taking us to the previous slide

var previousSlide = function () {

  currentSlide = currentSlide - 1

  if (currentSlide < 0) {

  	currentSlide = totalSlides - 1
  }

  moveSlide(currentSlide)

}

// userpreviousslide
var previousSlideuser = function () {

  currentSlideUser = currentSlideUser - 1

  if (currentSlideUser < 0) {

  	currentSlideUser = totalSlidesUser - 1
  }

  moveSlideUser(currentSlideUser)

}


$('.next').on('click', function() {

  nextSlide()


  $('html, .slideshow').animate({scrollTop:200},500);
})

$('.user-next').on('click', function() {

    nextSlideuser()

  $('html, .slideshow').animate({scrollTop:200},500);
})



$('.prev').on('click', function() {

  $('html, .slideshow').animate({scrollTop:200},500);
  previousSlide()

})

$('.user-prev').on('click', function() {

  $('html, .slideshow').animate({scrollTop:200},500);

  previousSlideuser()
})

// here we set a slideNumber variable which increments by 1 because
// our array starts at 0
// var slideNumber = currentSlide + 1
// here we set the text for the steps using currentSlide and total nubmer
// $('.steps').text(slideNumber + ' / ' + totalSlides)
