const img = document.querySelector("img");
const music= document.querySelector("audio");
const play = document.getElementById("play");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const title = document.getElementById("title");
const artist = document.getElementById("artist");

const musics= [
    {
    name: "sample_audio_1",
    title: "title-1",
    artist: "artis-1",
    image: "music1",
    },
    {
    name: "sample_audio_2",
    title:  "title-2",
    artist: "artis-2",
    image: "music2",
    }, 
    {
    name: "sample_audio_3",
    title: "title-3",
    artist: "artis-3",
    image: "music3",
    }, 
    {
    name: "sample_audio_4",
    title: "title-4",
    artist: "artis-4",
    image: "music4",
    }, 
    {  
    name: "sample_audio_5",
    title: "title-5",
    artist: "artis-5",
    image: "music5",
    }

]

let isPlaying = false;
const playMusic = () => {
    music.play();
    isPlaying=true;
    play.classList.replace('fa-play', 'fa-pause');
    img.classList.add("anime")
}
const pauseMusic = () => {
    music.pause();
    isPlaying=false;
    play.classList.replace('fa-pause', 'fa-play');
    img.classList.remove("anime")
}


play.addEventListener('click', () => {
    isPlaying ? pauseMusic() : playMusic();
})

const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = 'audio/'+ songs.name + '.mp3';
    img.src = 'images/' + songs.image + '.jpg';
}

songIndex=0;
const nextSong = () => {
    songIndex= (songIndex +1) % musics.length;
    loadSong(musics[songIndex]);
    isPlaying ? playMusic() : pauseMusic();
}
const prevSong = () => {
    songIndex= (songIndex - 1 + musics.length) % musics.length;
    loadSong(musics[songIndex]);
    isPlaying ? playMusic() : pauseMusic();
}


next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);
