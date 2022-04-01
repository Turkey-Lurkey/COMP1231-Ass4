"use strict";

$(document).ready(function() {
    
    //checkbox - sample provided
    $('#optin').click(function(e) {
        doOnClick(e);
    });


    /* STUDENTS: add your jQuery selectors that invoke your event handlers here */

    $("body").ready(function(e) {
        doOnLoad(e);
    });

    $("#mylink").click(function(e) {
        doOnClick(e);
    });

    $("#mypara").mouseover(function(e) {
        doOnMouseOver(e);
    });

    $("#mypara").mouseout(function(e) {
        doOnMouseOut(e);
    });

    $("#myform").submit(function(e) { 
        doOnSubmit(e);
    })

    $("#myname").focus(function(e) {
        doOnFocus(e);
    });

    $("#myname").blur(function(e) {
        doOnBlur(e);
    });

    $("#mydirection").change(function(e) {
        doOnChange(e);
        let direction = ($("#mydirection").val());
        if (direction == "N")
            updateStatusBox("images/n.png", "<strong>North</strong>");
        else if (direction == "E")
            updateStatusBox("images/e.png", "<strong>East</strong>");
        else if (direction == "S")
            updateStatusBox("images/s.png", "<strong>South</strong>");
        else if (direction == "W") 
        updateStatusBox("images/w.png", "<strong>West</strong>");
    });

});



/***************************************************
 * jQuery Event handler that respond to click event
 * @param myObj
 ******************/
function doOnClick(myObj) {
	if (typeof console == "object") {
		console.log("A 'click' event occured."); 
		console.log(myObj);
	}
	updateStatusBox("images/click.png", "<strong>Click</strong> event occured.");
}

/********************************************************
 * Helper function used to update the image displayed on index page
 * @param img
 * @param msg
 */
function updateStatusBox(img, msg) {
	document.getElementById('statuscaption').innerHTML = msg;
	document.getElementById('event_image').src = img;
}

/* STUDENTS: Implement your jQuery event handlers here - Sample for click event has been provided above */

function doOnLoad(myObj) {
    if (typeof console == "object") {
        console.log("The page has loaded successfully.");
        console.log(myObj);
    }
    updateStatusBox("images/load.png", "<strong>Load</strong> event occured.");
}

function doOnMouseOver(myObj) {
    if (typeof console == "object") {
        console.log("Mouse over event occured.");
        console.log(myObj);
    }
    updateStatusBox("images/mouseover.png", "<strong>Mouse over</strong> event occured.");
}

function doOnMouseOut(myObj) {
    if (typeof console == "object") {
        console.log("Mouse out event occured.");
        console.log(myObj);
    }
    updateStatusBox("images/mouseout.png", "<strong>Mouse out</strong> event occured.");
}

function doOnSubmit(myObj) {
    if (typeof console == "object") {
        console.log("Submit event occured.");
        console.log(myObj);
    }
    updateStatusBox("images/submit.png", "<strong>Submit</strong> event occured.");
}

function doOnChange(myObj) {
    if (typeof console == "object") {
        console.log("Change event occured.");
        console.log(myObj);
    }
    updateStatusBox("images/change.png", "<strong>Change</strong> event occured.");
}

function doOnBlur(myObj) {
    if (typeof console == "object") {
        console.log("Change event occured.");
        console.log(myObj);
    }
    updateStatusBox("images/blur.png", "<strong>Blur</strong> event occured.");
}

function doOnFocus(myObj) {
    if (typeof console == "object") {
        console.log("Focus event occured.");
        console.log(myObj);
    }
    updateStatusBox("images/focus.png", "<strong>Focus</strong> event occured.");
}