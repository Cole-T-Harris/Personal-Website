/**
 * Listen to scroll to change header opacity class
 */
function checkScroll(){
    var startY = $('.navbar').height() * 1.5; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
        $('.navbar').addClass("bg-dark");
    }
    else{
        $('.navbar').removeClass("scrolled");
        $('.navbar').removeClass("bg-dark");
    }
}

function adjustAboutBio() {
    //Adjust about paragraph classes based on window width
    if (window.innerWidth < 840) {
        $('#about-bio').removeClass("col-8");
        $('#about-bio').addClass("col");
    }
    else {
        $('#about-bio').addClass("col-8");
        $('#about-bio').removeClass("col");
    }
}

// Add active class if in that section of website
function addActive() {
    $('body').scrollspy({
        target: '#navigationBar'
    });
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
        adjustAboutBio();
        addActive();
    });
}



