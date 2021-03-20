/*
$(function(){
    console.log('Hello world');


})*/


/*-- For Logo Shift upon navbar hitting top of view port --*/
/*let navbarLogo = document.getElementById("navbarLogo");

let logoShiftOnScroll = function () {
    let yPos = window.scrollY;
    console.log(yPos);

    if (yPos >= 48) {
        navbarLogo.classList.remove("d-none");
        navbarLogo.classList.add("d-inline");
    } else {
        navbarLogo.classList.remove("d-inline");
        navbarLogo.classList.add("d-none");
    }
};

window.addEventListener("scroll", logoShiftOnScroll);*/

/* For Mapbox */

mapboxgl.accessToken = 'pk.eyJ1Ijoiam9uc2NhcmRlbmFzIiwiYSI6ImNrbWd4cjh2eDAxeG0ycHFtcnZka3Ixc2QifQ.ZxoR0Q_vx5w5P8POX-wuWQ';


let map = new mapboxgl.Map({
    container: 'mapBoxContainer',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-95.9345, 41.2565],
    zoom: 10
});