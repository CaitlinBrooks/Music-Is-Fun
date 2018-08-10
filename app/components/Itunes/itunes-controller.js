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
    <div class="form-inline" onclick="app.controllers.itunesCtrl.getMusic(event)(${i})">
     <img src="${song.albumArt}" alt = "song.previewUrl">
     <p> ${song.title}</p> 
     <p> ${song.artist}</p>
     <p> ${song.price}</p>
    </div>
    `
    //I want to save a thumbnail, an artist, a preview, a collection (CD), and a price to update to the index and inject new data.
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