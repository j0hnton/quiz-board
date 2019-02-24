$(document).ready(function(){
    $("button#start").click(function(){
      $("#faded").toggle(3000);
      $("#fade").toggle(1000);
      $("#leave").toggle(1000);

  });

  $("#faded").submit(function(){

    var answer1 = $("input:radio[name=q1]:checked").val();
    var answer2 = $("input:radio[name=q2]:checked").val();
    var answer3 = $("input:radio[name=q3]:checked").val();
    var answer4 = $("input:radio[name=q4]:checked").val();
    var answer5 = $("input:radio[name=q5]:checked").val();

    var number1=parseInt(answer1);
    var number2=parseInt(answer2);
    var number3=parseInt(answer3);
    var number4=parseInt(answer4);
    var number5=parseInt(answer5);

    var show =((number1+number2+number3+number4+number5 )/50*100);
alert(show);

if(show>=80){
  alert("Excellent")

 if((show<79)(show>50)){
  alert("Fair")
}
else{
  alert("Poor. RETAKE THE TEST")
}
}
  event.preventDefault();
  });
});
