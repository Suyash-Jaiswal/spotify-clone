console.log('welcome to spotify');
// inetialized the variable
let songindex=0;
let audioelement=new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let volumebar=document.getElementById('volumebar');
let gif=document.getElementById('gif');
let mastersongname=document.getElementById('mastersongname');
//let songitem=Array.from(document.getElementsByClassName('songitem'));
let songs=[
    {songname:"One Love", filepath:"songs/1.mp3", coverpath:"onelove.png.jpg"},
    {songname:"Mera Hit Hit Billu", filepath:"songs/2.mp3", coverpath:"merehithit.jpg"},
    {songname:"Juttni", filepath:"songs/3.mp3", coverpath:"Juttni.jpg"},
    {songname:"Millionaire", filepath:"songs/4.mp3", coverpath:"millionaire.jpg"},
    {songname:"Sugar crash!", filepath:"songs/5.mp3", coverpath:"sugar crash!.jpg"},

    
    {songname:"Dekha Ek Khwab", filepath:"songs/6.mp3", coverpath:"dekha ek khwaab.jpg"},
    {songname:"kisi ki muskurahaton pe ho nisar", filepath:"songs/7.mp3", coverpath:"kisi ki muskurahaton pe ho nisar.jpg"},
    {songname:"Levitating x Woh Ladki Jo", filepath:"songs/8.mp3", coverpath:"woh ladki.jpg"},
    {songname:"Mere Mehboob Qayamat Hogi", filepath:"songs/9.mp3", coverpath:"mere mehboob qayamat.jpg"},
    {songname:"Tere liye!", filepath:"songs/10.mp3", coverpath:"tere liye.jpg"},
];

//audioelement.play();
//handle paly/pause click
masterplay.addEventListener('click', ()=> {
    if(audioelement.paused || audioelement.currentTime <=0) {
        audioelement.play();
        masterplay.classList.remove('fa-play')
        masterplay.classList.add('fa-pause')
        gif.style.opacity=1;
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause')
        masterplay.classList.add('fa-play')
        gif.style.opacity = 0;
    }
});
 
//listen to events  
audioelement.addEventListener('timeupdate', () => {
    //update seek bar
    let progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    volumebar.value=progress; 
});
audioelement.addEventListener('loadedmetadata', () => {
    console.log('Audio duration:', audioelement.duration);
});
audioelement.addEventListener('loadedmetadata', () => {
    console.log('Audio duration:', audioelement.duration);
    volumebar.addEventListener('change', () => {
    console.log(volumebar.value);
    console.log(audioelement.duration);
    audioelement.currentTime = (volumebar.value * audioelement.duration)/100;
});
});

    //reset all button to 'play' icon
const makeallplays= () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.classList.remove('fa-pause');
    element.classList.add('fa-play');
    });
};
// add click event tp each song item
Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click',(e)=>{
        makeallplays();
        songindex=parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioelement.src= `songs/${songindex+1}.mp3`;
        mastersongname.innerText=songs[songindex].songname;
        audioelement.currentTime = 0;
        audioelement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        gif.style.opacity = 1;
    });
});

document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=9){
        songindex=0
    }
    else{
        songindex += 1;
    }
    audioelement.src= `songs/${songindex+1}.mp3`;
    mastersongname.innerText=songs[songindex].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0
    }
    else{
        songindex -= 1;
    }
    audioelement.src= `songs/${songindex+1}.mp3`;
    mastersongname.innerText=songs[songindex].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
})