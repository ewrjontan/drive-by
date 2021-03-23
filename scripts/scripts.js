
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


/* Users */

let user1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    zipCode: "68123"
};

let user2 = {
    firstName: "Jeremiah",
    lastName: "Johnson",
    age: 25,
    zipCode: "68102"
};

let user3 = {
    firstName: "Mark",
    lastName: "Matuza",
    age: 38,
    zipCode: "68154"
};

let userDatabaseArr = [user1, user2, user3];
let localUserArr = [];

/* Zip Code Api variables */
let zipCodesdata;
//let zipCodeArr = [];
let zipCodeArr = ["68123", "68113", "68005", "68056", "68133", "68147", "68157", "68046", "68107", "68117", "68128", "68108", "51501", "68127", "68105", "51561", "68103", "68106", "68048", "68172", "68175", "68180", "68179", "68198", "68176", "68178", "68197", "68016", "68183", "68139", "68101", "68102", "68124", "68131", "68182", "68138", "68132", "68059", "68137", "68145", "51510", "68114", "51503", "68109", "68144", "51534", "68111", "68037", "68110", "68104", "51554", "51502", "68409", "68136", "68154", "68010", "68134", "68135", "68130", "68164", "68028", "68118", "51571", "68116", "68403", "68119", "68152", "68058", "68112", "51526", "68463", "68122", "68413", "51575", "51551", "68142", "68022", "51548", "68455", "68069", "68407", "51653", "51576", "51542", "68007", "51654", "51540", "68307", "68003", "68068", "68023", "68073", "68042", "51549", "68417", "68366", "51648", "51541", "68349", "68304"]



$(function(){
    /*for zip-codes api */
    $("#bookingLocationSubmitBtn").on( "click", function(){
        let bookZipInput = $("#bookZipInput").val();;
        let zipCodeURL = "https://api.zip-codes.com/ZipCodesAPI.svc/1.0/FindZipCodesInRadius?zipcode=" + bookZipInput + "&minimumradius=0&maximumradius=30&country=US&key=8JX5Z0F8EZ2RILIO7LO3";
        console.log("zipcode:", bookZipInput);
       
        const zipCodesAPI = {
            "async": true,
            "crossDomain": true,
            "url": zipCodeURL,
            "method": "GET"
        };
        
        /*$.ajax(zipCodesAPI).done(function (response) {
            zipCodesdata = response;
            //console.log(zipCodesdata);

            createZipArr(zipCodesdata.DataList);


            //console.log(zipCodesdata.DataList[1].Code);
            //console.log(zipCodesdata.DataList.length);

            
        }); */

        //temporary test
        console.log(zipCodeArr);
        findLocals(userDatabaseArr, zipCodeArr);
    })
});
    

function createZipArr(input){
    for (let i=0; i<input.length; i++){
        console.log(input[i].Code);
        zipCodeArr.push(input[i].Code);
    }

    console.log(zipCodeArr);
    findLocals(userDatabaseArr, zipCodeArr);
}

function findLocals(userArr, zipCodeArr){
    for (let i=0; i<userArr.length; i++){
        let currentUserZip = userArr[i].zipCode;
        console.log(currentUserZip);

        if (zipCodeArr.includes(currentUserZip)){
            console.log("currentUserZip is in zip code array");
            //add user to array
        }

    }
}
    
    
    
    /*For Position Stack */
    /*$("#bookingLocationSubmitBtn").on( "click", function(){
        console.log("hello");
        let city = $("#bookCityInput").val();
        let state = $("#bookStateInput").val();;
        let zipCode = $("#bookZipInput").val();;

        let location = city + ", " + state + " " + zipCode;*/

        /* Position Stack API Call */
        /*$.ajax({
            url: 'http://api.positionstack.com/v1/forward',
             data: {
             access_key: 'c1741a4b2a059fc3f69f7155b17908e0',
             query: location,
            }
        }).done(function(data) {
             console.log(JSON.stringify(data));
             console.log("latitude: ", data.data[0].latitude);
             console.log("longitude: ", data.data[0].longitude);*/
            
             /*Displaying Map*/
            /*let bookLocationArr = [];
 
            bookLocationArr.push(data.data[0].longitude);
            bookLocationArr.push(data.data[0].latitude);

            console.log(bookLocationArr);

            $("#mapBoxContainer").css("display", "block"); 
            createMap(bookLocationArr);
        });
    });   */







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


