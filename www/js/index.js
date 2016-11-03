/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        console.log("Device Ready");
        document.getElementById('device').addEventListener("click", this.deviceClick, false);
        document.getElementById('alert').addEventListener("click", this.alertClick, false);
        document.getElementById('confirm').addEventListener("click", this.confirmClick, false);
        document.getElementById('prompt').addEventListener("click", this.promptClick, false);
        document.getElementById('beep').addEventListener("click", this.beepClick, false);

    },
    deviceClick: function() {
        document.getElementById('one').innerHTML = "";
        console.log("Device Click");
        console.log(JSON.stringify(device));
        document.getElementById('one').innerHTML = "<p>device.cordova -" + device.cordova +
            "</p><p>device.model -" + device.model +
            "</p><p>device.platform -" + device.platform +
            "</p><p>device.uuid -" + device.uuid +
            "</p><p>device.version -" + device.version +
            "</p><p>device.manufacturer -" + device.manufacturer +
            "</p><p>device.isVirtual -" + device.isVirtual +
            "</p><p>device.serial -" + device.serial +
            "</p><p>DEVICE OBJECT CONTENT" + JSON.stringify(device, null, "\n");
    },

    alertClick: function() {
        console.log("alertClick");
        document.getElementById('one').innerHTML = "";
        // document.getElementById('one').innerHTML="alert";

        navigator.notification.alert(
            'This is alert!', // message
            function() {
                document.getElementById('one').innerHTML = "Alert cordova-plugin-dialogs";
            }, // callback
            'Alert', // title
            'Done' // buttonName
        );

    },
    confirmClick: function() {
        console.log("confirmClick");
        document.getElementById('one').innerHTML = "";
        // document.getElementById('one').innerHTML="confirm";

        navigator.notification.confirm(
            'This is Confirm!', // message
            function(results1) {
                document.getElementById('one').innerHTML = "<p>Confirm cordova-plugin-dialogs</p><p>Navigator Content" +
                    JSON.stringify(navigator, null, "5") +
                    "</p><p>Notification Content" + JSON.stringify(navigator.notification, null, "5") +
                    "</p><p>Results Content" + JSON.stringify(results1, null, "\t") + "</p>";
                switch (results1) {
                    case 0:
                        document.getElementById('one').innerHTML = "You click outside";
                        break;
                    case 1:
                        document.getElementById('one').innerHTML = "You click OK";
                        break;
                    case 2:
                        document.getElementById('one').innerHTML = "You click Cancel";
                        break;
                    default:

                }
            }, // callback to invoke with index of button pressed
            'Confirm', // title
            ['Ok', 'Cancel'] // buttonLabels
        );
    },
    promptClick: function() {
        console.log("promptClick");
        document.getElementById('one').innerHTML = "";
        // document.getElementById('one').innerHTML="prompt";
        navigator.notification.prompt(
            'Please enter your name', // message
            function(results) {
                document.getElementById('one').innerHTML = "<p>prompt</p><p>Results Content" + JSON.stringify(results) + "</p><p>You Enter " + results.input1 + "</p>";

            }, // callback to invoke
            'Registration', // title
            ['Ok', 'Exit'], // buttonLabels
            'Jane Doe' // defaultText
        );


    },
    beepClick: function() {
            console.log("beepClick");
            document.getElementById('one').innerHTML = "";
            navigator.notification.beep(1);
            document.getElementById('one').innerHTML = "beep";
        }
        // navigator.notification.alert
        // navigator.notification.confirm
        // navigator.notification.prompt
        // navigator.notification.beep
        // Update DOM on a Received Event
};

app.initialize();
