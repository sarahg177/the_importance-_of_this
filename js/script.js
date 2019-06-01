$(document).ready(function() {
    $(".box").on("click", function() {
       var classNames = $(this).attr("class").split(" ");
       var boxClass = classNames[0];
       var classNames = classNames[1];
       if ($(this).css("background-color") == "rgb (255, 0, 0)") {
           $("." + classNames).css("background-color" , "#000");
       } else {
           $("." + boxClass).css("background-color", "#000");
           $("." + classNames).css("background-color", "red");
       }
    });
});