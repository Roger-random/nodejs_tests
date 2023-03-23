"use strict";
let statusText;
let mag;
function dotTwo(n) {
    if ('number' === typeof (n)) {
        return n.toPrecision(2);
    }
    else {
        return "";
    }
}
function magnetometerReading() {
    if (statusText) {
        statusText.textContent = `Magnetometer: X=${dotTwo(mag.x)} Y=${dotTwo(mag.y)} Z=${dotTwo(mag.z)}`;
    }
}
function magnetometerError(e) {
    if (statusText) {
        statusText.textContent = `Error: ${e.error.message}`;
    }
}
function contentLoaded() {
    statusText = document.getElementById('statusText');
    if (statusText) {
        if ('undefined' !== typeof (Magnetometer)) {
            try {
                mag = new Magnetometer({ frequency: 10 });
                statusText.textContent = `Created`;
                mag.onerror = magnetometerError;
                mag.onreading = magnetometerReading;
                mag.start();
                statusText.textContent = `Started`;
            }
            catch (e) {
                if (e && typeof (e) === 'object' && 'message' in e) {
                    statusText.textContent = `Exception: ${e.message}`;
                }
                else {
                    statusText.textContent = 'Exception raised with no diagnostic message';
                }
            }
        }
        else {
            statusText.textContent = `API not available.`;
        }
    }
}
document.addEventListener('DOMContentLoaded', contentLoaded, false);
