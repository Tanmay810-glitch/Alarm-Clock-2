import { currentTime } from "./clock.js";
import {  displaySlides,setSlides  } from "./slider.js";
import {  playpauseTrack,playTrack,pauseTrack,nextTrack,prevTrack,seekTo,seekUpdate,setVolume } from "./player/musicplayer.js" 

currentTime();
window.setSlides = setSlides;

var currentIndex = 1;
displaySlides(currentIndex);

window.playpauseTrack = playpauseTrack;
window.playTrack = playTrack;
window.pauseTrack = pauseTrack;
window.nextTrack = nextTrack;
window.prevTrack = prevTrack;
window.seekTo = seekTo;
window.seekUpdate = seekUpdate;
window.setVolume = setVolume;


