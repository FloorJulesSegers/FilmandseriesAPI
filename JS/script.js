var APIkey = "9628128";
var title = document.getElementById("title");
var genre = document.getElementById("genre");
var country= document.getElementById("country");
var writer = document.getElementById("writer");
var actors = document.getElementById("actors");
var plot = document.getElementById("plot");
var awards = document.getElementById("awards");
var released = document.getElementById("released");
var Image = document.getElementById("image");


var input = document.getElementById("myInput");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});

function getInputValue(){
   var inputVal = document.getElementById("myInput").value;

    axios.get(`http://www.omdbapi.com/?t=${inputVal}&apikey=${APIkey}&`)
    .then(function (response) {
    title.innerHTML= response.data.Title;
    genre.innerHTML= response.data.Genre;
    country.innerHTML= response.data.Country;
    writer.innerHTML= "By " +  response.data.Writer;
    actors.innerHTML= "Played by: " + response.data.Actors;
    plot.innerHTML= "Description: " + response.data.Plot;
    awards.innerHTML= "Awards: <br>" + response.data.Awards;
    released.innerHTML= "Released: <br>" + response.data.Released;
    Image.src= response.data.Poster;
    
    
    
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}


