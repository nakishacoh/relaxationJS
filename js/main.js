console.log("Hiya!");


$(document).ready(function(){

  // var nbc = $("#calmBtn");
console.log("Hellllo");
  $("#calmBtn").on("click",function (e) {
        e.preventDefault();

        var calmSongs = [
          {song: "velvetlight.mp3"}, {song: "boywithacoin.mp3"}
        ];

        var target = e.target;

        var au = $("#calm");
        //var so = $("#source");

        console.log(au);

        var controls = Math.floor(Math.random()*calmSongs.length);
        console.log(controls);

        var stp = "audio/" +calmSongs[controls].song;
        console.log(stp);
        au.src= stp;

        au.load();
        au.play();
  });
});
