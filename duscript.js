function ob(id) {
    return document.getElementById(id);
}

function S(id) {
    return document.getElementById(id).style;
}

function on(id) {
    document.getElementById(id).style.visibility("visible");
}

function txt(obj,text) {
    document.getElementById(obj).innerHTML = text;
    
}

function On(obj) {
    document.getElementById(obj).style.visibility("block");
}

function off(obj) {
    document.getElementById(obj).style.display("hidden");
}

function Off(obj) {
    document.getElementById(obj).style.display("none");
}

function ON(obj) {
    document.getElementById(obj).disabled = false;    
}

function OFF(obj) {
    document.getElementById(obj).disabled = true;
}


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

function to(hash) {
    location.hash = hash;
}



