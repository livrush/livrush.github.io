let horizontalSlide = 0;
let verticalSlide = 0;

const projects = [
  'fortune',
  'kana-prac',
  'ali-gle',
  'pafiume-cast',
  'pafiume-colors',
  'browser-gimei',
];

const getScreenWidth = () => window.innerWidth;

$(document).ready(function() {
  $('#slide-left').click(function() {
    if (horizontalSlide) {
      horizontalSlide += 1;
      verticalSlide = 0;
      $('.projects-container').css({
        // transform: `translateX(-${horizontalSlide * 100}vw)`,
        transform: `translate(${horizontalSlide * 100}vw, ${verticalSlide * 100}vh)`,
      });
      console.group('left');
      console.log('horizontal placement is:', horizontalSlide);
      console.log('vertical placement is:', verticalSlide);
      console.groupEnd();
    }
  });

  $('#slide-right').click(function() {
    if (horizontalSlide * -1 < projects.length - 1) {
      horizontalSlide -= 1;
      verticalSlide = 0;
      $('.projects-container').css({
        // transform: `translateX(-${horizontalSlide * 100}vw)`,
        transform: `translate(${horizontalSlide * 100}vw, ${verticalSlide * 100}vh)`,
      });
      console.group('right');
      console.log('horizontal placement is:', horizontalSlide);
      console.log('vertical placement is:', verticalSlide);
      console.groupEnd();
    };
  });

  $('#slide-info').click(function() {
    if (verticalSlide) verticalSlide += 1;
    else verticalSlide -= 1;

    $('.projects-container').css({
      transform: `translate(${horizontalSlide * 100}vw, ${verticalSlide * 100}vh)`,
    });
    console.group('info');
    console.log('horizontal placement is:', horizontalSlide);
    console.log('vertical placement is:', verticalSlide);
    console.groupEnd();
  });

});
