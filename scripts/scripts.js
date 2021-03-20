
/* For Mapbox */
mapboxgl.accessToken = 'pk.eyJ1Ijoiam9uc2NhcmRlbmFzIiwiYSI6ImNrbWd4cjh2eDAxeG0ycHFtcnZka3Ixc2QifQ.ZxoR0Q_vx5w5P8POX-wuWQ';

function createMap(coordinates){
    let map = new mapboxgl.Map({
        container: 'mapBoxContainer',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: coordinates,
        zoom: 10
    });
}



$(function(){
    /*For Position Stack */
    $("#bookingLocationSubmitBtn").on( "click", function(){
        console.log("hello");
        let city = $("#bookCityInput").val();
        let state = $("#bookStateInput").val();;
        let zipCode = $("#bookZipInput").val();;

        let location = city + ", " + state + " " + zipCode;

        /* position Stack Call */
        $.ajax({
            url: 'http://api.positionstack.com/v1/forward',
             data: {
             access_key: 'c1741a4b2a059fc3f69f7155b17908e0',
             query: location,
            }
        }).done(function(data) {
             /*console.log(JSON.parse(data));*/
             /*let jsonData = JSON.parse(data);*/
             console.log(JSON.stringify(data));
             console.log("latitude: ", data.data[0].latitude);
             console.log("longitude: ", data.data[0].longitude);
            
            let bookLocationArr = [];
 
            bookLocationArr.push(data.data[0].longitude);
            bookLocationArr.push(data.data[0].latitude);

            console.log(bookLocationArr);

            $("#mapBoxContainer").css("display", "block"); 
            createMap(bookLocationArr);
            
             /*$("#mapBoxContainer").html(data);*/
        });
    });
    
})


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


