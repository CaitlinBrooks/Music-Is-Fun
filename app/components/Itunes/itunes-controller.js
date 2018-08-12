import ItunesService from "./itunes-service.js";
import { Song } from "../../models/Song.js";

//PRIVATE

const itunesService = new ItunesService()

function draw(songs) {
  //YOUR CODING STARTS HERE
  //draw the items to the page
  let template = ''
  for (let i = 0; i < songs.length; i++) {
    const song = songs[i];
    template += `
    <li class="media">
    <img class="mr-3 mt-2 ml-3" src="${song.albumArt}" alt="placehold.it">
    <div class="media-body">
        <h5 class="mt-0 mt-2 mb-1">${song.title}</h5>
        <p> ${song.artist}</p>
        <audio controls>
            <source src="${song.preview}" type="audio/mpeg">
        </audio>
        <p>$ ${song.price}</p>
    </div>
</li>
    `
    // function isMusic(song) {
    //   return song == .mp4;
    // }
  }
  document.getElementById('song-list').innerHTML = template
  console.log(songs)
}


//PUBLIC
class ItunesController {
  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    // @ts-ignore
    $('#get-music-button').text('LOADING....');
    itunesService.getMusicByArtist(artist).then(results => {
      draw(results)
      //changes button back to GET MUSIC once songs are loaded
      // @ts-ignore
      $('#get-music-button').text('GET MUSIC');
    })
  }


}


export default ItunesController