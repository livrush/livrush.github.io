let counter = 0;

const getScreenWidth = () => window.innerWidth;

$(document).ready(function() {
  $('#slide-left').click(function() {
    const screenWidth = getScreenWidth();
    let updateAmount;
    if (screenWidth > 768) {
      updateAmount = 50;
    } else {
      updateAmount = 100;
    }

    if (counter > 0) {
      counter -= updateAmount;
      if (counter === 0) {
        $('.display-main').removeClass('half');
        $('.display-main-section').removeClass('full');
        $('.display-main').addClass('full');
        $('.display-main-section').addClass('half');
      }
    }

    $('.projects-container').css({
      transform: `translateX(-${counter}vw)`,
    });
    console.log('counter is:', counter);
  })

  $('#slide-right').click(function() {
    const screenWidth = getScreenWidth();
    let updateAmount;
    if (screenWidth > 768) {
      updateAmount = 50;
    } else {
      updateAmount = 100;
    }

    if (counter === 0) {
      $('.display-main').removeClass('full');
      $('.display-main-section').removeClass('half');
      $('.display-main').addClass('half');
      $('.display-main-section').addClass('full');
    } else if (counter > 49) {
      $('.projects-container').css({
        transform: `translateX(-${counter}vw)`,
      });
    }
    counter += updateAmount;
    console.log('counter is:', counter);
  })

})