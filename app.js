function splitScroll(){
  const controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene ({
    triggerElement: '.about',
    duration: '200%', // matches length of Y axis tween.
    triggerHook: 0
  })
  .setPin('.about-title')
  .addIndicators()
  .addTo(controller);
  }

splitScroll();
