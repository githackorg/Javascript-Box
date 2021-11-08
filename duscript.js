/*
    Copyright 2021. Eduardo Programador
    www.eduardoprogramador.com
    consultoria@eduardoprogramador.com
    All Rights Reserved

    This file contains functions
    for DOM HTML manipulations.

    1) Include it on your HTML File
    Eg.: <stript src="js/duscript.js"></script>

    Invoke the functions...
*/

/* 
    Returns a new HTML object
*/
function ob(id) {
    return document.getElementById(id);
}

/*
    Returns a new style for an HTML object
*/
function S(id) {
    return document.getElementById(id).style;
}

/* 
    turns the object visible
*/
function on(id) {
    document.getElementById(id).style.visibility("visible");
}

/* 
    appens some HTML text to an element
*/
function txt(obj,text) {
    document.getElementById(obj).innerHTML = text;
    
}

/* 
    turns the object visible
*/
function On(obj) {
    document.getElementById(obj).style.visibility("block");
}

/*
    turns the object invisible
*/
function off(obj) {
    document.getElementById(obj).style.display("hidden");
}

/*
    turns the object invisible removing the white spaces
*/
function Off(obj) {
    document.getElementById(obj).style.display("none");
}

/*
    enables an HTML element
*/
function ON(obj) {
    document.getElementById(obj).disabled = false;    
}


/* 
    disables an HTML element
*/
function OFF(obj) {
    document.getElementById(obj).disabled = true;
}


/*
    adds some event to an HTML element id
    Eg.: attach("myButtonId","click",function{
        some code...
    });
*/
function attach(obj,type,callback) {

    switch(type) {

        case "click":
            document.getElementById(obj).onclick = callback;
            break;

        case "scroll":
            document.getElementById(obj).onscroll = callback;
            break;

        case "focus":
            document.getElementById(obj).onfocus = callback;
            break;

    }
}

/* 
    Changes the location hash of the document
*/
function to(hash) {
    location.hash = hash;
}



