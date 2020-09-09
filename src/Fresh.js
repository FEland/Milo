import React from 'react'; 
// import Button from '@material-ui/core/Button';
// import Tooltip from '@material-ui/core/Tooltip';

function detectDevice(){
    let detectObj = {
      device: !!navigator.maxTouchPoints ? 'mobile' : 'computer',
      orientation: !navigator.maxTouchPoints ? 'desktop' : !window.screen.orientation.angle ? 'portrait' : 'landscape'
    }
    return detectObj
  }

function hasGetUserMedia() {
    return !!(navigator.mediaDevices &&
      navigator.mediaDevices.getUserMedia);
  }

function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}


export default function Fresh ( ) {
    // const [tikkun, setTikkun] = useState(false);

    // function importAll(r) {
    //     return r.keys().map(r);
    // }

    // const lol = importAll(require.context("./Slides3/", true, /00.jpg$/));


var recorder, gumStream;
// var recordButton = document.getElementById("recordButton");

// recordButton.addEventListener("click", toggleRecording);

function toggleRecording() {
    if (recorder && recorder.state === "recording") {
        recorder.stop();
        gumStream.getAudioTracks()[0].stop();
    } else {
        navigator.mediaDevices.getUserMedia({
            audio: true
        }).then(function(stream) {
            gumStream = stream;
            recorder = new MediaRecorder(stream);
            recorder.ondataavailable = function(e) {
                var url = URL.createObjectURL(e.data);
                var preview = document.createElement('audio');
                preview.controls = true;
                preview.src = url;
                document.body.appendChild(preview);
            };
            recorder.start();
        });
    }
}
    return (
            
        <div style={{'color': 'green'}}>
            <button id="recordButton">Record/Stop</button>
            <button type="button" onClick={toggleRecording}>
                start
            </button>
            {storageAvailable('localStorage') ? 'YES' : 'NO'}
            {hasGetUserMedia ? 'o' : "f"}
            {detectDevice().device === 'mobile' ? "BLA" : "laks"} {detectDevice().orientation }

            <h1 >Welcome to FE's Bar Mitzvah Website! </h1>
            <h2 >Explore the Links Above</h2>
        
        </div>
    );
}