import { cueTimer } from "./modules/cuepoints.js";

document.addEventListener("DOMContentLoaded", init);

function init() {
    /**
     * Shortcut variables
     */
    const howlAudio = document.querySelector(".howl_audio");
    const fastf = document.getElementById("fastf");
    const slow = document.getElementById("slow");
    const normalplay = document.getElementById("normalplay");
    const pick = document.getElementById("pick");

    /**
     * prepare the audio and video for playing
     */
    howlAudio.src = "a/howl_og.mp4";
    howlAudio.load();
    howlAudio.volume = 0.5;

    //set video's initial volume
    vid.volume = 0.5;

    /**
     * create the button event listeners to control the audio
     */

    fastf.addEventListener("click", (e) => {
        howlAudio.playbackRate = 2;
    });

    slow.addEventListener("click", (e) => {
        howlAudio.playbackRate = 0.5;
    });

    normalplay.addEventListener("click", (e) => {
        howlAudio.playbackRate = 1;
    });

    /**
     * select lists emit a "change" event when the choice is changed
     */
    pick.addEventListener("change", (e) => {
        // save the audio's current place in the song.
        let time = howlAudio.currentTime;

        howlAudio.src = e.target.value;
        howlAudio.load();
        howlAudio.play();

        // set the new song to the same place as the previous one.
        howlAudio.currentTime = time;
    });
} // end init function

document.addEventListener("DOMContentLoaded", (e) => {

    var myCues = [
        { seconds: 2, callback: func1 },
        { seconds: 10, callback: func2 },
        { seconds: 20, callback: func3 },
        { seconds: 49, callback: func4 }
    ];

    //this activates the cuepoints module.
    // Pass it the ID of the video to watch
    // and the array of cuepoint objects.
    cueTimer.setup("vid", myCues);

    //shortcut variables
    const vid = document.querySelector("#vid");
    const selectList = document.querySelector("#video_select");

    // make the select list control what video format to play
    selectList.addEventListener("change", (e) => {
        selectVideo(e, vid);
    });

});

//the custom callback functions to trigger when a cuepoint is hit.
//You can code up whatever behavior you need in your own callbacks
//feel free to rename the functions to be more descriptive of what they do.
function func1() {
    document.querySelector("#vid").style = "outline : 3px solid #5C64E0";
}

function func2() {
    let pop = document.querySelector(".pop");
    pop.innerHTML = "<p>Check out his wiki page</p>";
    pop.classList.toggle("hide");
    setTimeout(() => {
        document.querySelector(".pop").classList.toggle("hide");
    }, 2000);
    document.querySelector("#vid").style = "outline: 0px solid #5C64E0";
    document.querySelector("#web").src =
        "https://en.wikipedia.org/wiki/Hayao_Miyazaki";
}

function func3() {
    const pop = document.querySelector(".pop");
    pop.innerHTML = "<p>Awards won</p>";
    pop.classList.toggle("hide");
    setTimeout(() => {
        document.querySelector(".pop").classList.toggle("hide");
    }, 2000);
    document.querySelector("#vid").style = "outline: 0px solid #5C64E0";
    document.querySelector("#web").src =
        "https://ghibli.fandom.com/wiki/Howl%27s_Moving_Castle/Accolade";
}

function func4() {
    document.querySelector("#web").src = "summary.html";
}