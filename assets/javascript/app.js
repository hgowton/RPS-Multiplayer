$(document).ready(function() {

    var config = {
        apiKey: "AIzaSyDwM_amJwRmdfKu2cezanMqbjuvJXGTc4w",
        authDomain: "bootcamp-first-attempt.firebaseapp.com",
        databaseURL: "https://bootcamp-first-attempt.firebaseio.com",
        projectId: "bootcamp-first-attempt",
        storageBucket: "bootcamp-first-attempt.appspot.com",
        messagingSenderId: "1002927761886",
        appId: "1:1002927761886:web:f25488293b98c8eadc954f"
    };
    
    firebase.initializeApp(config);
    
    // Create a variable to reference the database.
    var database = firebase.database();

    //userNames
    var userOneName = "";
    var userTwoName = "";
    var userOneWins = 0;
    var userTwoWins = 0;
    var userOneLoses = 0;
    var userTwoLoses = 0;
    var userOneSelection = "";
    var userTwoSelection = "";

    //Store connections --> users to the firebase directory
    var connectionsRef = database.ref("/connections");

    //Updates based on client's connected or disconnected state -- allows users to leave and new users to join the game
    var connectedRef = database.ref(".info/connected");

    //When a user's connection changes
    connectedRef.on("value", function(snap) {

        //If a user connects
        if(snap.val()) {
            //Add user to connected list
            var con = connectionsRef.push(true)

            //Remove user from the connection list when they disconnect
            con.onDisconnect().remove();
        }
    });


    //Snapshot of changes to users
    database.ref().on("value", function(snapshot) {
        //If a userone or two are identified, load information
        $("#observers").text(snapshot.numChildren());

    })

    //Assign UserOne Name
    $("#userOneJoin").on("click", function () {
        

    })


    


})