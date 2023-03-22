"use strict";
let statusText;
let mag;
function magnetometerReading() {
    if (statusText) {
        statusText.textContent = `Magnetometer Reading Callback: X=${mag.x} Y=${mag.y} Z=${mag.z} @ time=${mag.timestamp}`;
    }
}
function magnetometerError(e) {
    if (statusText) {
        statusText.textContent = `Magnetometer Error Callback: ${e.error.message}`;
    }
}
function contentLoaded() {
    statusText = document.getElementById('statusText');
    if (statusText) {
        if ('undefined' !== typeof (Magnetometer)) {
            try {
                mag = new Magnetometer({ frequency: 10 });
                statusText.textContent = `Magnetometer Created`;
                mag.onerror = magnetometerError;
                mag.onreading = magnetometerReading;
                mag.start();
                statusText.textContent = `Magnetometer Started`;
            }
            catch (e) {
                if (e && typeof (e) === 'object' && 'message' in e) {
                    statusText.textContent = `Magnetometer Exception: ${e.message}`;
                }
                else {
                    statusText.textContent = 'Magnetometer Exception raised with no diagnostic message';
                }
            }
        }
        else {
            statusText.textContent = `Magnetometer API not available`;
        }
    }
}
//////////////////////////////////////////////////////////////////////////
//
//  Page load setup
document.addEventListener('DOMContentLoaded', contentLoaded, false);
