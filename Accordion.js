$("#x1").click(function(){
        $("#sp").remove();
        $("#x1").after("<span id='sp'>This is the expanded text</span>").html;
        $("#x1").click(function(){
              $("#sp").remove();
        });
    });
$("#x2").click(function(){
        $("#sp").remove();
        $("#x2").after("<span id='sp'>This is the expanded text</span>").text;
            $("#x2").click(function(){
              $("#sp").remove();
        });
    });
$("#x3").click(function(){
        $("#sp").remove();
        $("#x3").after("<span id='sp'>This is the expanded text</span>").text;
            $("#x3").click(function(){
              $("#sp").remove();
        });
    });