$(document).ready(function(){
    $('.menu span:last-child').click(function(){
      $('.menu span').not(':last-child').toggleClass('hidden show') ;
    })
  })