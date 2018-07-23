var sections = $('section')
  , nav = $('.sidenavbar');
  
 
$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
 
  sections.each(function() {
    var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();
 
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});

$("a").click(function (e) {
    document.getElementById('sound1').play();
});
$( window ).on('load',function() {
   document.body.classList.remove('preload');
});
$("button").click(function (e) {
    document.getElementById('sound1').play();
});

$('#modalConfirmDelete').modal('show');
$(document).ready(function () {

});

$(".nav-item a").click(function () {

});
window.onscroll = function () {
    myFunction()
};
$( "#skills" ).one( "mouseenter", function() {
  $(this).removeClass('preload');
});


function myFunction() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {

        $('.go-to-top').show();
    } else {
        $('.go-to-top').hide();
        ;
    }
}
//var home = $('#home').offset().top;
//var about = $('#about').offset().top;
//var skills = $('#skills').offset().top;
//var work = $('#work').offset().top;
//var contact = $('#contact').offset().top;
//
//$(document).scroll(function () {
//    var scrollPos = $(document).scrollTop();
//    if (scrollPos >= home && scrollPos < about) {
//        
//        $('#navbar-skills > a').css('color', '#505865');
//        $('#navbar-about > a').css('color', '#505865');
//        $('#navbar-work > a').css('color', '#505865');
//        $('#navbar-contact > a').css('color', '#505865');
//        $('#navbar-home > a').css('color', '#fbc53c');
//    } else if (scrollPos >= about && scrollPos < skills) {
//        $('#navbar-home > a').css('color', '#505865');
//        $('#navbar-skills > a').css('color', '#505865');        
//        $('#navbar-work > a').css('color', '#505865');
//        $('#navbar-contact > a').css('color', '#505865');
//        $('#navbar-about > a').css('color', '#fbc53c');
//    } else if (scrollPos >= skills && scrollPos < work) {
//
//        $('#navbar-home > a').css('color', '#505865');
//        $('#navbar-about > a').css('color', '#505865');
//        $('#navbar-work > a').css('color', '#505865');
//        $('#navbar-contact > a').css('color', '#505865');
//        $('#navbar-skills > a').css('color', '#fbc53c');
////        $('#navbar-skills > a').animate({color:'#fbc53c'},100);
//    } else if (scrollPos >= work && scrollPos < contact) {
//        $('#navbar-skills > a').css('color', '#505865');
//        $('#navbar-home > a').css('color', '#505865');
//        $('#navbar-about > a').css('color', '#505865');
//        $('#navbar-contact > a').css('color', '#505865');
//        $('#navbar-work > a').css('color', '#fbc53c');
//    } else if (scrollPos >= contact) {
//        $('#navbar-skills > a').css('color', '#505865');
//        $('#navbar-home > a').css('color', '#505865');
//        $('#navbar-about > a').css('color', '#505865');
//        $('#navbar-work > a').css('color', '#505865');
//        $('#navbar-contact > a').css('color', '#fbc53c');
//    } else {
//        $('#navbar-skills > a').css('color', '#505865');      
//        $('#navbar-about > a').css('color', '#505865');
//        $('#navbar-work > a').css('color', '#505865');
//        $('#navbar-contact > a').css('color', '#505865');        
//         $('#navbar-home > a').css('color', '#fbc53c');
//    }
//});

$(document).scroll(function () {
    var visibleId = $('div:visible').prop('id');
    console.log(visibleId)
});

  