console.log("Welcome to spotify")

let sondIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay')
let progressBar = document.getElementById('progressbar')
let gif = document.getElementById('gif')
let songItems  = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Music 1", filePath: "song/1.mp3", coverPath: "covers/bg.jpg" },
    { songName: "Music 2", filePath: "song/2.mp3", coverPath: "covers/bg.jpg" },
    { songName: "Music 3", filePath: "song/3.mp3", coverPath: "covers/bg.jpg" },
    { songName: "Music 4", filePath: "song/4.mp3", coverPath: "covers/bg.jpg" },
    { songName: "Music 5", filePath: "song/1.mp3", coverPath: "covers/bg.jpg" },
    { songName: "Music 6", filePath: "song/2.mp3", coverPath: "covers/bg.jpg" },
    { songName: "Music 7", filePath: "song/3.mp3", coverPath: "covers/bg.jpg" },
    { songName: "Music 8", filePath: "song/4.mp3", coverPath: "covers/bg.jpg" },
]
//audioElement.play()
songItems.forEach((element)=>{
    //element.getElementsByClassName("img")[0].src=songs[1].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[1].songName;
})
//play pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;

    }
})
// listen to events
audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    progressBar.value = progress;
})
progressBar.addEventListener('change',()=>{
    audioElement.currentTime=(progressBar.value *audioElement.duration)/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach(()=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    
})
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach(()=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        e.target.classList.remove('fa-pause-circle');
        e.target.classList.add('fa-play-circle');
    })
})