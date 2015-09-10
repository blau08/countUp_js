var countUp = function(number1, number2) {

  var output = [];
  for(var i=number1; i <= number2; i+=number1) {
    output.push(i);
  }
  return output;
}

$(document).ready(function() {
  $("form#countUp").submit(function(event) {
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    // var side3 = parseInt($("input#side3").val());
    var result = countUp(side1, side2);
    $(".output").text([side1 + " up to " + side2])
    $(".not").text(result);
    $("#result").show()
    event.preventDefault();
  });
});
