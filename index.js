function getQueryVariable(window, variable) {
  var query = window.location.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (decodeURIComponent(pair[0]) === variable) {
      return decodeURIComponent(pair[1]);
    }
  }
}

const startSlide = function(window) {
  if (window.location.search) {
    const P = Number(getQueryVariable(window, 'p'));
    return P > 6 ? 6 : P;
  }
  return 0;
}(window);
console.log(typeof startSlide, startSlide)

let horizontalSlide = startSlide;
let verticalSlide = 0;
let lastPanTimeStamp = 0;
const keyPressMap = [];
// const projects = [
//   'fortune',
//   'kana-prac',
//   'real-deal',
//   'ali-gle',
//   'pafiume-colors',
//   'browser-gimei',
  // 'pafiume-cast',
// ];

const getScreenWidth = () => window.innerWidth;

const slide = (horizontalSlide, verticalSlide) => {
  const projects = document.getElementsByClassName('projects-container');
  for (let key in projects) {
    if (!/^\d+$/.test(key)) continue;
    const project = projects[key];
    project.style.transform = `translate(${horizontalSlide * -100}vw, ${verticalSlide * -100}%)`;
    project.style.webkitTransform = `translate(${horizontalSlide * -100}vw, ${verticalSlide * -100}%)`;
    project.style.MozTransform = `translate(${horizontalSlide * -100}vw, ${verticalSlide * -100}%)`;
    project.style.OTransform = `translate(${horizontalSlide * -100}vw, ${verticalSlide * -100}%)`;
    project.style.msTransform = `translate(${horizontalSlide * -100}vw, ${verticalSlide * -100}%)`;
  }
}

const questionMarkPressed = () => {
  const timeMax = Math.max(keyPressMap[16], keyPressMap[191]);
  const timeMin = Math.min(keyPressMap[16], keyPressMap[191]);
  return timeMax - timeMin < 1000;
}

$(document).ready(function() {
  const projects = $('.project-display');
  slide(horizontalSlide, verticalSlide);

  $('#slide-left').click(function() {
    if (horizontalSlide) {
      horizontalSlide -= 1;
      verticalSlide = 0;
      slide(horizontalSlide, verticalSlide);
      console.group('left');
      console.log('horizontal placement is:', horizontalSlide);
      console.log('vertical placement is:', verticalSlide);
      console.groupEnd();
    }
  });

  $('#slide-right').click(function() {
    if (horizontalSlide < projects.length - 1) {
      horizontalSlide += 1;
      verticalSlide = 0;
      slide(horizontalSlide, verticalSlide);
      console.group('right');
      console.log('horizontal placement is:', horizontalSlide);
      console.log('vertical placement is:', verticalSlide);
      console.groupEnd();
    };
  });

  // TODO: update style so this is worth having //

  $('#slide-info').click(function() {
    if (verticalSlide) verticalSlide += 1;
    else verticalSlide -= 1;
    slide(horizontalSlide, verticalSlide);
    console.group('info');
    console.log('horizontal placement is:', horizontalSlide);
    console.log('vertical placement is:', verticalSlide);
    console.groupEnd();
  });

  window.addEventListener('keyup', (event) => {
    // console.log(event, event.key, event.which, event.keyCode);
    if (event.keyCode === 37) $('#slide-left').click();
    else if (event.keyCode === 39) $('#slide-right').click();
    // else if (event.keyCode === 38 || event.keyCode === 40) $('#slide-info').click();
  });
});

