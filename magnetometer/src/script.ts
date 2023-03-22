let textout : HTMLElement | null;
let mag : Magnetometer;

function contentLoaded() : void {
  console.log("Content loaded!");

  textout = document.getElementById('textout');

  if (null !== textout) {
    textout.textContent = `typeof(Gyroscope) is ${typeof(Gyroscope)} and typeof(Magnetometer) is ${typeof(Magnetometer)}`;

    mag = new Magnetometer();
    textout.textContent = `Magnetometer activated=${mag.activated} and hasReading=${mag.hasReading}`;
  }
}

//////////////////////////////////////////////////////////////////////////
//
//  Page load setup

document.addEventListener('DOMContentLoaded', contentLoaded, false);
