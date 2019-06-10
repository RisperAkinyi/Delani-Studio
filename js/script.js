$(document).ready(function(){
    $("#design").click(function () { 
        $("#design").hide();
        $("#info").show();
    });
    $("#info").click(function () { 
        $("#info").hide();
        $("#design").show();
    });

    $("#dvpt").click(function () { 
        $("#dvpt").hide();
        $("#info1").show();        
    });
    $("#info1").click(function () { 
        $("#info1").hide();
        $("#dvpt").show();        
    });

    $("#pm").click(function () { 
        $("#pm").hide();
        $("#info2").show();        
    });
    $("#info2").click(function () { 
        $("#info2").hide();
        $("#pm").show();        
    });

    $(".card").hover(function () {
        $(this).children(".parag1").fadeToggle().css({
            "opacity":".5"
            "text-align":"center"
            "
        });
      });

});
