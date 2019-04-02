console.log("Hiya!");


$(document).ready(function(){

  // var nbc = $("#calmBtn");
console.log("Hellllo");
  $("#calmBtn").click(function (e) {
        e.preventDefault();

        var calmSongs = [
          {song: "velvetlight.mp3"}, {song: "boywithacoin.mp3"}
        ];

        var target = e.target;

        var audio = $("#calm");
        var source = $("#source");

        console.log(audio);

        var controls = Math.floor(Math.random()*calmSongs.length);

        source.src="audio/" +calmSongs[controls].song;

        audio.load();
        console.log("areyouhere");
        audio.play();
  });
});
