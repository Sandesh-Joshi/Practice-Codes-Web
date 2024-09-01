let progress=document.getElementById("progress");
let song=document.getElementById("song");
let icon_control=document.getElementById("icon_control");

song.onloadedmetadata= function(){
    progress.max=song.duration;
    progress.value=song.currentTime;

}
function playpause(){
    if(icon_control.classList.contains("fa-pause")){
    song.pause();
    icon_control.classList.remove("fa-pause");
    icon_control.classList.add("fa-play");
    }
    else{
        song.play();
        icon_control.classList.add("fa-pause");
        icon_control.classList.remove("fa-play");
    }
}
if(song.play()){
    setInterval(()=>{
        progress.value=song.currentTime;
    },500);
}
progress.onchange = function(){
    song.play();
    song.currentTime=progress.value;
    icon_control.classList.add("fa-pause");
    icon_control.classList.remove("fa-play");
}