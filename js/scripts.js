$(document).ready(function() {
  $("form").submit(function(event) {
    var q1  = $("input:radio[name=q1]:checked").val();
    var q2  = $("input:radio[name=q2]:checked").val();
    var q3  = $("input:radio[name=q3]:checked").val();
    var q4  = $("input:radio[name=q4]:checked").val();

    if (q1 === "kraken" && q2 === "black" && q3 === "summer" && q4 === "boat") {
    alert("You got Jack Sparrow");
  } else if (q1 === "kraken" && q2 === "black" && q3 === "summer") {
    alert("You got Jack Sparrow");
  } else if (q1 === "kraken" && q4 === "boat" && q3 === "summer") {
    alert("You got Jack Sparrow");
  } else if (q2 === "black" && q4 === "boat" && q3 === "summer") {
    alert("You got Jack Sparrow");
  }  else if (q2 === "black" && q4 === "boat" && q1 === "kraken") {
      alert("You got Jack Sparrow");
  } else {
    alert("you didn't get Jack")
  }

  event.preventDefault();
  });
  });
