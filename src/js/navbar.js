$(document).ready(function(){
    $('nav').click(function(){
      $('a').not(':last-child').toggleClass('hidden show') ;
    })
  })