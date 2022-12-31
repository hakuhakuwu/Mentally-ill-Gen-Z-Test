window.onload = function() {
    document.getElementById("refresh").style.display="none";
};


function clearBoxes(){
    var checkedBoxes = document.querySelectorAll('input:checked') 
    for (var i = 0; i < checkedBoxes.length; i++) { 
        checkedBoxes[i].checked = false;
    }
}

//Calculates your score
function calculateScore() {
    var totalChecked = document.querySelectorAll('input[type="checkbox"]:checked') 
    var score = 100 - totalChecked.length 

    //Associates your score with what it says about you
    var meaning;
    if (score >= 98) {
        meaning = "You&#39re either straight, sheltered, or have a good relationship with your dad."
    } else if (score >= 94) {
        meaning = "You don&#39t live completely under a rock or you had a friend who was in a bit deep so everything was absorbed through osmosis."
    } else if (score >= 77) {
        meaning = "This is about the average score range, so you had some unrestricted internet access but give or take you're fairly normal"
     } else if (score >= 58) {
        meaning = "God gives his hardest battles to his sillest soldiers. You&#39re like getting trampled by the knight."
    } else if (score >= 45) {
        meaning = "You need therapy and a comfort blanket. Do you need a father figure?"
    } else if (score >= 11) {
        meaning = "You might as well be a jellyfish because that brain of yours has been been abused beyond belief. Honey, are you ok??"
    } else {
        meaning = "You need to be put down like the feral dog that you are." 
    }

    var scoreDiv = document.getElementById("score"); 
    var meaningDiv = document.getElementById("meaning"); 
    scoreDiv.innerHTML = "Your Score: " + score.toString() 
    meaningDiv.innerHTML = meaning 
    document.getElementById("refresh").style.display="inline"; 
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
}


function clearPage() {
    clearBoxes() 
    var scoreDiv = document.getElementById("score"); 
    var meaningDiv = document.getElementById("meaning"); 
    scoreDiv.innerHTML = "" 
    meaningDiv.innerHTML = "" 
    document.getElementById("refresh").style.display="none"; 
}