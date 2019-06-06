var hisAge = function(number1) {
  if(number1 >= 21){
    //show the voting
    return true;
  }else{
    // dont show voting
    return false;
  }
};






$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();


    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var age = hisAge(number2);

    if(age){
      $("ul").show();
    }else {
      $("div#output").show ();
    }


  });
});
