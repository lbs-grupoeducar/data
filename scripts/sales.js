var acc = $('.sales');

  acc.each(function() {
    $(this).click(function() {
      $(this).toggleClass('activePanel');
      var panel = $(this).next();
      panel.slideToggle(400);
    });
  });

  acc[-1].click();
  acc[-1].click();

