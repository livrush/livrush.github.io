let horizontalSlide = 0;
let verticalSlide = 0;


const getScreenWidth = () => window.innerWidth;

$(document).ready(function() {
  $('#slide-left').click(function() {
    if (horizontalSlide) {
      horizontalSlide -= 1;
      verticalSlide = 0;
      $('.projects-container').css({
        // transform: `translateX(-${horizontalSlide * 100}vw)`,
        transform: `translate(-${horizontalSlide * 100}vw, ${verticalSlide}vh)`,
      });
      console.group('left');
      console.log('horizontal placement is:', horizontalSlide);
      console.log('vertical placement is:', verticalSlide);
      console.groupEnd();
    }
  });

  $('#slide-right').click(function() {
    const screenWidth = getScreenWidth();
    horizontalSlide += 1;
    verticalSlide = 0;
    $('.projects-container').css({
      // transform: `translateX(-${horizontalSlide * 100}vw)`,
      transform: `translate(-${horizontalSlide * 100}vw, ${verticalSlide}vh)`,
    });
    console.group('right');
    console.log('horizontal placement is:', horizontalSlide);
    console.log('vertical placement is:', verticalSlide);
    console.groupEnd();
  });

  $('#slide-info').click(function() {
    const screenWidth = getScreenWidth();
    if (verticalSlide) verticalSlide -= 100;
    else verticalSlide += 100;

    $('.projects-container').css({
      transform: `translate(-${horizontalSlide * 100}vw, -${verticalSlide}vh)`,
    });
    console.group('info');
    console.log('horizontal placement is:', horizontalSlide);
    console.log('vertical placement is:', verticalSlide);
    console.groupEnd();
  });

});
