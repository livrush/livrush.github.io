let counter = 0;

$(document).ready(function() {
  $('#slide-left').click(function() {
    if (counter > 0) {
      counter -= 50;
      if (counter === 0) {
        $('.display-main').removeClass('half');
        $('.display-main-section').removeClass('full');
        $('.display-main').addClass('full');
        $('.display-main-section').addClass('half');
      }
    }
    console.log('counter is:', counter);
  })

  $('#slide-right').click(function() {
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
    counter += 50;
    console.log('counter is:', counter);
  })

})