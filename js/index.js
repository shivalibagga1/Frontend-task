$(".color-container div").click(function(){
  var color = $(this).attr("class");
  var imageClass = ".image-"+color;
  var nameClass = ".name-"+color;
  $(".color-container div").removeClass("active");
  $(this).addClass("active");
  $(".group").children("img").each(function(){
    $(this).hide();
  })
  $(imageClass).show();
  $(".name").children("div").each(function(){
    $(this).hide();
  })
  $(nameClass).show();
});
