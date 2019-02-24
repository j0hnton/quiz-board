$(document).ready(function(){
  $("#quiz").submit(function(event){
    event.preventDefault();
    var answer1 = ($("radio[name=q1]").val());
    var answer2 = ($("radio[name=q2]").val());
    var answer3 = ($("radio[name=q3]").val());
    var answer4 = ($("input:radio[name=q4]").val());
    var answer5 = ($("input:radio[name=q5]").val());

    var number1=parseInt(answer1);
    var number2=parseInt(answer2);
    var number3=parseInt(answer3);
    var number4=parseInt(answer4);
    var number5=parseInt(answer5);

    var display =((number1 + number2 + number3 + number4 + number5 )/50*100);

    $("#results").text(display+"%");
  });
});

$(document).ready(function(){
  $("button#start").click(function(){
    $("#faded").toggle(3000);
    $("#fade").toggle(1000);
    $("#leave").toggle(1000);
  })
})
