//we're importing three functions, which represent 
//localStorage.setItem, localStorage.getItem, localStorage.removeItem,
//with a try/catch block--------------->let's dive into it for further information
import { setLocalSt, getLocalSt, remLocalSt } from "./local-st-try-catch";
// also we're importing a vimeo library
import Player from '@vimeo/player'
// and throttle library
import throttle from "lodash.throttle";

// firstly we're instanciating tag of the video
const iframe = document.querySelector('iframe');
// then a key for setting the local storage
const KEY = "video-current-time"
// and creating an object, where we're placing our video-tag
const player = new Player(iframe);

//we're using a ternary operator, because our goal is straight and simple -
// if such element includes a key from the local storage, 
// player of the video receives saved information about him,
// if doesn't exist - false or null or any other result, which represents a misleading operation
Object.keys(localStorage).includes(KEY) ? player.setCurrentTime(getLocalSt(KEY)) : null;

// on function we're destructurized the player object, 
//receiving seconds, which is exactly what we need
const onSavedTime = ({ seconds }) => {
    //and setting into the local storage dynamic info about the video
    // whanever video executes
    setLocalSt(KEY, seconds);
}
// like in listener, but in slightly different way
// when video-player on timeupdate, 
// he performs a callback with 1 second - intervals(throttle)
player.on("timeupdate", throttle(onSavedTime, 1000));