$(".dont").click(function() {
    $("html").addClass("animated hinge slow");
    function myAlert(){
      alert("I told you not to press the button look what you did now, now you have to refresh the page.");
    } setTimeout(myAlert, 2050);
    });