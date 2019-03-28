
jQuery(function($){
  $.scrollTo(0);
  $('#link1').click(function(){ $.scrollTo($('#first'),700); });
  $('#link2').click(function(){ $.scrollTo($('#second'),700); });
  $('#link3').click(function(){ $.scrollTo($('#third'),700); });
});
