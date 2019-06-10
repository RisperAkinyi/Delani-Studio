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

    $(".pt1").mouseenter(function(){
        $(".parag1").show();
    })
    $(".pt1").mouseleave(function () { 
        $(".parag1").hide();        
    });
    $(".pt2").mouseenter(function(){
        $(".parag2").show();
    })
    $(".pt2").mouseleave(function () { 
        $(".parag2").hide();        
    });
    $(".pt3").mouseenter(function(){
        $(".parag3").show();
    })
    $(".pt3").mouseleave(function () { 
        $(".parag3").hide();        
    });
    $(".pt4").mouseenter(function(){
        $(".parag4").show();
    })
    $(".pt4").mouseleave(function () { 
        $(".parag4").hide();        
    });
    $(".pt5").mouseenter(function(){
        $(".parag5").show();
    })
    $(".pt5").mouseleave(function () { 
        $(".parag5").hide();        
    });
    $(".pt6").mouseenter(function(){
        $(".parag6").show();
    })
    $(".pt6").mouseleave(function () { 
        $(".parag6").hide();        
    });
    $(".pt7").mouseenter(function(){
        $(".parag7").show();
    })
    $(".pt7").mouseleave(function () { 
        $(".parag7").hide();        
    });
    $(".pt8").mouseenter(function(){
        $(".parag8").show();
    })
    $(".pt8").mouseleave(function () { 
        $(".parag8").hide();        
    });


    $("#button").click(function(){
        alert("Your message has been received...");
    });

    

    
});
