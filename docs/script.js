"use strict";
let textout;
function contentLoaded() {
    console.log("Content loaded!");
    textout = document.getElementById('textout');
    if (null !== textout) {
        textout.textContent = `typeof(Gyroscope) is ${typeof (Gyroscope)} and typeof(Magnetometer) is ${typeof (Magnetometer)}`;
    }
}
//////////////////////////////////////////////////////////////////////////
//
//  Page load setup
document.addEventListener('DOMContentLoaded', contentLoaded, false);
