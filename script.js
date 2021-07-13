var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
console.log(navMenuAnchorTags);
for(var i =0; i< navMenuAnchorTags.length;i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){

        event.preventDefault();
        var targetSectionId = this.textContent.trim().toLowerCase();
        console.log(targetSectionId)
        var targetSection = document.getElementById(targetSectionId);
        var interval = setInterval(function(){
            var targetSectionCoordinates = targetSection.getBoundingClientRect();
            if(targetSectionCoordinates.top <= 0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
        
        },10);
    });
}
// --------------------------------------------------------------------------
// auto skills bars fillup

var progressBars = document.querySelectorAll('.skills-progress > div');
var skillsContainer = document.getElementById('skills-container');
window.addEventListener('scroll',checkScroll);
var animation = false;


function initialiseZero(){
    for(let bar of progressBars){
        bar.style.width = 0 + "%";
    }
}

initialiseZero();

function fillbars(){
    for(let bar of progressBars){
        let targetWidth = bar.getAttribute('data-bar-width');
        let currenWidth = 0;
        let interval = setInterval(function(){

            if (currenWidth == targetWidth){
                clearInterval(interval);
                return;
            }
            currenWidth++;
            bar.style.width = currenWidth + "%";

        },5);
    }
}




function checkScroll(){
    // have to check whether the skill container is visible
    var skillsCoordinates = skillsContainer.getBoundingClientRect();
    if(!animation && skillsCoordinates.top <= window.innerHeight){
        animation = true;
        console.log('skills section visible');
        fillbars();
    }
    else if(skillsCoordinates.top > window.innerHeight){
        animation = false;
        initialiseZero();
    }
}
