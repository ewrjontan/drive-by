
/* For Mapbox */
//mapboxgl.accessToken = 'pk.eyJ1Ijoiam9uc2NhcmRlbmFzIiwiYSI6ImNrbWd4cjh2eDAxeG0ycHFtcnZka3Ixc2QifQ.ZxoR0Q_vx5w5P8POX-wuWQ';
/*
function createMap(coordinates){
    let map = new mapboxgl.Map({
        container: 'mapBoxContainer',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: coordinates,
        zoom: 10
    });
}*/


/* Users */

class User {
    constructor(firstName, lastName, zipCode, rating, about){
        this.firstName = firstName;
        this.lastName = lastName;
        this.zipCode = zipCode;
        this.rating = rating;
        this.about = about;
    }
}

let user1 = new User("John", "Doe", "68123", 5, "I am a photographer, videographer and drone operator. Avid car enthusiast with a love for art and media. I will try my hardest to give you the content that you envision.");

let user2 = new User("Breana", "Taylor", "68102", 4, "I am a photographer, videographer and drone operator. Avid car enthusiast with a love for art and media. I will try my hardest to give you the content that you envision.");

let user3 = new User("Bruce", "Leeroy", "68128", 2, "I am a photographer, videographer and drone operator. Avid car enthusiast with a love for art and media. I will try my hardest to give you the content that you envision.");

let user4 = new User("Ash", "Ketchum", "07052", 3, "I am a photographer, videographer and drone operator. Avid car enthusiast with a love for art and media. I will try my hardest to give you the content that you envision.");

let user5 = new User("Kevin", "Bulbasaur", "65203", 5, "I am a photographer, videographer and drone operator. Avid car enthusiast with a love for art and media. I will try my hardest to give you the content that you envision.");

let user6 = new User("Mark", "Machuka", "68123", 4, "I am a photographer, videographer and drone operator. Avid car enthusiast with a love for art and media. I will try my hardest to give you the content that you envision.");

let user7 = new User("Toni", "Bologna", "65201", 1, "I am a photographer, videographer and drone operator. Avid car enthusiast with a love for art and media. I will try my hardest to give you the content that you envision.");

let user8 = new User("Mike", "Hawk", "07052", 3, "I am a photographer, videographer and drone operator. Avid car enthusiast with a love for art and media. I will try my hardest to give you the content that you envision.");

let user9 = new User("Katie", "Rath", "68154", 2, "I am a photographer, videographer and drone operator. Avid car enthusiast with a love for art and media. I will try my hardest to give you the content that you envision.");

let user10 = new User("John", "Smith", "65202", 4, "I am a photographer, videographer and drone operator. Avid car enthusiast with a love for art and media. I will try my hardest to give you the content that you envision.");

let userDatabaseArr = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];
let localUserArr = [];
let numOfLocals;


/* Zip Code Api variables */
let zipCodesdata;
//let zipCodeArr = [];
let zipCodeArr = ["68123", "68113", "68005", "68056", "68133", "68147", "68157", "68046", "68107", "68117", "68128", "68108", "51501", "68127", "68105", "51561", "68103", "68106", "68048", "68172", "68175", "68180", "68179", "68198", "68176", "68178", "68197", "68016", "68183", "68139", "68101", "68102", "68124", "68131", "68182", "68138", "68132", "68059", "68137", "68145", "51510", "68114", "51503", "68109", "68144", "51534", "68111", "68037", "68110", "68104", "51554", "51502", "68409", "68136", "68154", "68010", "68134", "68135", "68130", "68164", "68028", "68118", "51571", "68116", "68403", "68119", "68152", "68058", "68112", "51526", "68463", "68122", "68413", "51575", "51551", "68142", "68022", "51548", "68455", "68069", "68407", "51653", "51576", "51542", "68007", "51654", "51540", "68307", "68003", "68068", "68023", "68073", "68042", "51549", "68417", "68366", "51648", "51541", "68349", "68304"]



$(function(){
    /*for zip-codes api */
    $("#bookingLocationSubmitBtn").on( "click", function(){
        $('html,body').scrollTop(0);
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
        console.log("current zip in DB:", currentUserZip);

        if (zipCodeArr.includes(currentUserZip)){
            console.log("currentUserZip is in zip code array and pushed");
            //add user to array
            localUserArr.push(userArr[i]);
        }

    }
    numOfLocals = localUserArr.length;
    console.log(numOfLocals);
    document.getElementById("bookEnterLocationContainer").classList.add("d-none");
    document.getElementById("bookFirstParagraph").classList.add("d-none");
    //document.getElementById("bookLocalCreatorsContainer").classList.remove("d-none");

    document.getElementById("bookMainHeader").innerHTML = numOfLocals + " creators were found in your area.";

    displayCards(localUserArr);
}

function displayCards(localUserArr){

    for (let i=0; i < localUserArr.length; i++){
        let name = localUserArr[i].firstName + " " + localUserArr[i].lastName;
        let age = localUserArr[i].age;
        let rating = localUserArr[i].rating;
        let about = localUserArr[i].about;
        console.log(name);
        console.log(age);
        console.log(rating);

        let card = document.createElement('div');
        card.className = 'card mb-4 style="max-width: 800px;"';

        let rowNoGutters = document.createElement('div');
        rowNoGutters.className = "row no-gutters";

        let imageContainer = document.createElement('div');
        imageContainer.className = "col-md-4";

        let cardBodyContainer = document.createElement('div');
        cardBodyContainer.className = "col-md-8"

        /* for profile images in future 
        let cardImage = document.createElement('img');
        cardImage.className = "card-img-top";*/
        //src
        //alt

        let cardImage = document.createElement('i');
        cardImage.className = "card-img-top fas fa-user fa-7x text-center mt-5"

        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        let cardName = document.createElement('h5');
        cardName.className = 'card-title';
        cardName.innerHTML = name;

        let cardAbout = document.createElement('p');
        cardAbout.className = 'card-text';
        cardAbout.innerHTML = about;

        let cardFooter = document.createElement('p');
        cardFooter.className = 'card-text';

        let ratingText = document.createElement('small');
        ratingText.className = "text-muted";
        ratingText.innerHTML = rating + " Stars";

        imageContainer.appendChild(cardImage);

        cardFooter.appendChild(ratingText);

        cardBody.appendChild(cardName);
        cardBody.appendChild(cardAbout);
        cardBody.appendChild(cardFooter);

        cardBodyContainer.appendChild(cardBody);

        rowNoGutters.appendChild(imageContainer);
        rowNoGutters.appendChild(cardBodyContainer);

        card.appendChild(rowNoGutters);

        document.getElementById("bookLocalUserCardsContainer").appendChild(card);
    }

    document.getElementById("bookLocalUserCardsContainer").classList.remove("d-none");

    /*<div class="card mb-3" style="max-width: 800px;">
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img src="..." class="card-img" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>>*/

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


