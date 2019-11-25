(function(window) {
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

  const startSlide = (function(window) {
    if (window.location.search) {
      const P = Number(getQueryVariable(window, 'p'));
      return P > 6 ? 6 : P;
    }
    return 0;
  })(window);

  let horizontalSlide = startSlide;
  let verticalSlide = 0;
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

  const slide = (horizontal, vertical) => {
    history.pushState(null, '', `?p=${horizontal}`);
    if (!horizontal) history.pushState(null, '', '/');
    const projects = document.getElementsByClassName('projects-container');
    for (let key in projects) {
      if (!/^\d+$/.test(key)) continue;
      const project = projects[key];
      project.style.transform = `translate(${horizontal * -100}vw, ${vertical * -100}%)`;
      project.style.webkitTransform = `translate(${horizontal * -100}vw, ${vertical * -100}%)`;
      project.style.MozTransform = `translate(${horizontal * -100}vw, ${vertical * -100}%)`;
      project.style.OTransform = `translate(${horizontal * -100}vw, ${vertical * -100}%)`;
      project.style.msTransform = `translate(${horizontal * -100}vw, ${vertical * -100}%)`;
    }
  }

  const projects = document.getElementsByClassName('project-display');
  slide(horizontalSlide, verticalSlide);

  document.getElementById('slide-left').addEventListener('click', function() {
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

  document.getElementById('slide-right').addEventListener('click', function () {
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

  window.addEventListener('keyup', (event) => {
    if (event.keyCode === 37) document.getElementById('slide-left').click();
    else if (event.keyCode === 39) document.getElementById('slide-right').click();
    // else if (event.keyCode === 38 || event.keyCode === 40) $('#slide-info').click();
  });
})(window);
