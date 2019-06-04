$(document).ready(function(){


//click once on P to show css element and click again to hide it
  $(".firstParagraph").click(function(){
      $("p#first").removeClass();
      $("p#first").addClass("paragraphStyle");

      $(".firstParagraph").click(function(){
      $("p#first").removeClass();
    });
  });


//click on p to show css element
  $(".secondParagraph").click(function(){
    $("p#second").removeClass();
    $("p#second").addClass("paragraphStyle");
  });


});
