$(document).ready(function(){
    $('.menu span').click(function(){
      $('a').not(':last-child').toggleClass('hidden show') ;
    })
  })