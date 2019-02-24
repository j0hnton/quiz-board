$(document).ready(function(){
  $("#quiz").submit(function(event){
    event.preventDefault();
    var answer1 = ($("radio[name=q1]:checked").val());
    var answer2 = ($("radio[name=q2]:checked").val());
    var answer3 = ($("radio[name=q3]:checked").val());
    var answer4 = ($("input:radio[name=q4]:checked").val());
    var answer5 = ($("input:radio[name=q5]:checked").val());

    var number1=parseInt(answer1);
    var number2=parseInt(answer2);
    var number3=parseInt(answer3);
    var number4=parseInt(answer4);
    var number5=parseInt(answer5);

    var display =((number1 + number2 + number3 + number4 + number5 )/50*100);

    $("#results").text(display+"%");
  });
});
