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
        console.log("this");
        console.log(this);
        console.log("navigator.camera");
        console.log(navigator.camera);
        console.log("cordova");
        console.log(cordova);
        console.log("cordova.file");
        console.log(cordova.file);
        console.log("cordova.file.externalRootDirectory");
        console.log(cordova.file.externalRootDirectory);
        console.log("window");
        console.log(window);
        console.log("cordova.file.externalDataDirectory");
        console.log(cordova.file.externalDataDirectory);
        document.getElementById('device').addEventListener("click", this.deviceClick, false);
        document.getElementById('alert').addEventListener("click", this.alertClick, false);
        document.getElementById('confirm').addEventListener("click", this.confirmClick, false);
        document.getElementById('prompt').addEventListener("click", this.promptClick, false);
        document.getElementById('beep').addEventListener("click", this.beepClick, false);
        document.getElementById('camera').addEventListener("click", this.cameraClick, false);
        document.getElementById("createFile").addEventListener("click", this.createFile);
        document.getElementById("writeFile").addEventListener("click", this.writeFile);
        document.getElementById("readFile").addEventListener("click", this.readFile);
        document.getElementById("removeFile").addEventListener("click", this.removeFile);
        document.getElementById("removeFile").addEventListener("click", this.removeFile);


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
                nativetransitions.curl(1, "down", function() {
                    document.getElementById('one').innerHTML = "Alert cordova-plugin-dialogs";
                });

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
    },


    cameraClick: function() {
        console.log("cameraClick");
        document.getElementById('one').innerHTML = "";

        navigator.camera.getPicture(function(imageURI) {
                var largeImage = document.getElementById('largeImage');
                largeImage.style.display = 'block';
                largeImage.src = "content:image/jpeg;base64," + imageURI; //"data:image/jpeg;base64,"
                console.log(imageURI);
                // console.log(largeImage.src);
                // window.resolveLocalFileSystemURL(imageURI, function success(fileEntry) {
                //
                //         // Do something with the FileEntry object, like write to it, upload it, etc.
                //         // writeFile(fileEntry, imgUri);
                //         console.log("got file: " + fileEntry.nativeURL);
                //         console.log(fileEntry);
                //         document.getElementById("cameraOptions").innerHTML = '<button type="button" class="button" id="upload" onclick="uploadImage(' + fileEntry.nativeURL + ')">upload</button> <button type = "button" class = "button" id = "New" >New</button><button type = "button" class = "button" id = " Delete">Delete</button>';
                //         // displayFileData(fileEntry.nativeURL, "Native URL");
                //
                //     },
                //     function() {
                //         // If don't get the FileEntry (which may happen when testing
                //         // on some emulators), copy to a new FileEntry.
                //         // createNewFileEntry(imgUri);
                //     });
            },
            function onFail(message) {
                console.log('Failed because: ' + message);
            }, {
                quality: 50,
                destinationType: navigator.camera.DestinationType.DATA_URL,
                sourceType: navigator.camera.PictureSourceType.CAMERA,
                saveToPhotoAlbum: true
            });
        document.getElementById('one').innerHTML = "Camera click";

    },

    createFile: function() {
        // var type = window.TEMPORARY;
        // var size = 5 * 1024 * 1024;
        window.resolveLocalFileSystemURL(cordova.file.externalRootDirectory + "example.txt", onResolveSuccess, fail);

        function onResolveSuccess(fileEntry) {
            console.log(fileEntry.name);
        }

        function fail(evt) {
            console.log(evt.target.error.code);
        }
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);

        function onFileSystemSuccess(fileSystem) {
            console.log(fileSystem.name);
        }

        // window.requestFileSystem(type, size, successCallback, errorCallback)
        //
        // function successCallback(fs) {
        //     console.log("fs");
        //     console.log(fs);
        //     console.log("fs.root");
        //     console.log(fs.root);
        //     console.log(fs.root.fullPath);
        //
        //     fs.root.getFile('log.txt', {
        //         create: true,
        //         exclusive: true
        //     }, function(fileEntry) {
        //         console.log('File creation successfull!');
        //         console.log("fileEntry");
        //         console.log(fileEntry);
        //     }, errorCallback);
        // }
        //
        // function errorCallback(error) {
        //     console.log("ERROR: " + error.code);
        // }
    },
    writeFile: function() {

    },
    readFile: function() {

    },
    removeFile: function() {

    },
    uploadImage: function(fe) {

        var win = function(r) {
            console.log("Code = " + r.responseCode);
            console.log("Response = " + r.response);
            console.log("Sent = " + r.bytesSent);
        }

        var fail = function(error) {
            alert("An error has occurred: Code = " + error.code);
            console.log("upload error source " + error.source);
            console.log("upload error target " + error.target);
        }

        var options = new FileUploadOptions();
        options.fileKey = "file";
        options.fileName = fe.substr(fileURL.lastIndexOf('/') + 1);
        options.mimeType = "text/plain";

        var params = {};
        params.value1 = "test";
        params.value2 = "param";

        options.params = params;

        var ft = new FileTransfer();
        ft.upload(fe, encodeURI("http://localhost:8081/"), win, fail, options);


    }



};

app.initialize();
