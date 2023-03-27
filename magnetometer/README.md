# Magnetometer Test App
This project explores reading an Android phone's integrated magnetometer
via W3C Generic Sensor API. As of Chrome 111, this capability is hidden
as a preview feature that must be manually enabled by the user.

To activate magnetometer API, enter "chrome://flags" into the Chrome
address bar and change "Generic Sensor Extra Classes" to "Enabled"

Once magnetometer data and WebGL support are verified, proceed to the
second page where a virtual compass needle is rendered in 3D using
[three.js](https://threejs.org/).

This directory holds source code for the web app. It is also available
[live via GitHub pages](https://roger-random.github.io/nodejs_tests/)

This is an unpolished exploratory test app. In addition to exploring
magnetometer, I also tried using TypeScript. It worked for the first
page but I choked trying to integrate three.js for the second page.

Three.js docs mentioned it expects projects to use a bundler. I tried to
use [webpack](https://webpack.js.org/) and it is clear I don't understand
enough to set up a new project yet. That's on my todo list.

I tried using [serve-static](https://www.npmjs.com/package/serve-static)
to serve up the web app from within a Node.js Docker container. But Generic
Sensor API is locked to HTTPS sites and http://localhost so that was a bust.

The virtual compass needle has no compensation for screen orientation.
I turn off auto-rotate to lock my phone in portrait orientation.
