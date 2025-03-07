console.log("Wellcome to TrackSync");

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressBar = document.getElementById('myprogressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
        {songName: "Cartoon, Jéja - On & On", filePath: "songs/1.mp3", coverpath: "cover/ncs1.png"},
        {songName: "NIVIRO- NCS New years mix 2024" ,filePath: "songs/2.mp3", coverpath: "cover/ncs2.png"},
        {songName: "Warriyo,Laura Brehm-Mortals", filePath: "songs/3.mp3", coverpath: "cover/ncs3.png"},
        {songName: "DEAF KEV -invincible", filePath: "songs/4.mp3", coverpath: "cover/ncs4.png"},
        {songName: "Elektronomia-Sky High", filePath: "songs/5.mp3", coverpath: "cover/ncs5.png"},
        {songName: "TULE,Chris Linton-Fearless pt", filePath: "songs/6.mp3", coverpath: "cover/ncs6.png"},
        {songName: "Syn Cole-Feel Good", filePath: "songs/7.mp3", coverpath: "cover/ncs7.png"},
        {songName: "Uub Urban-Cradles", filePath: "songs/8.mp3", coverpath: "cover/ncs8.png"},
        {songName: "Whales,Jo.Cohen-We Are", filePath: "songs/9.mp3", coverpath: "cover/ncs9.png"},
        {songName: "Robin Hustin,Tobimorrow-Light It Up", filePath: "songs/10.mp3", coverpath: "cover/ncs10.png"},
]
songItems.forEach((element, i)=>{
    // element.getElementByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})
//audioElement.play()

//Handle play/pause click
masterplay.addEventListener('click' ,()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
//Listen to Evenet
audioElement.addEventListener('timeupdate', ()=>{ 
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myprogressBar.value = progress; 
})

myprogressBar.addEventListener('change',()=>{
    audioElement.currentTime = myprogressBar.value * audioElement.duration/100;
})
const makeALLPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.add('fa-circle-play');
         element.classList.remove('fa-circle-pause');
    })
}
Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeALLPlays();
        songIndex = parseInt(e.target.id);

        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
        audioElement.src = `${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
        audioElement.src = `${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
})




