$("button").click(function() {
    var people = $(".people").val();
    var place = $(".place").val();
    var answer;
    
    
    if (people <= 5000 && "rural" === place) {
        answer="Superman";

    } else if (people >= 5000 && "city" === place) {
       answer= "Wonder Woman";

    } else if (people >= 5000 && "city" === place) {
       answer="Batman";

    } else if (people <= 500 && "rural" === place) {
        answer="Aquaman";

    } else {
        // Oops You Did It Wrong
    }
    $(".super").text(answer);
});