console.log("Hiya!");


// $(document).ready(function(){
//
//   // var nbc = $("#calmBtn");
// console.log("Hellllo");
//   $("#calmBtn").on("click",function (e) {
//         e.preventDefault();
//
//         var calmSongs = [
//           {song: "velvetlight.mp3"}, {song: "boywithacoin.mp3"}
//         ];
//
//         var target = e.target;
//
//         var au = document.getElementById("calm");
//         //var so = $("#source");
//
//         console.log(au);
//
//         var controls = Math.floor(Math.random()*calmSongs.length);
//         console.log(controls);
//
//         var stp = "audio/" +calmSongs[controls].song;
//         console.log(stp);
//         au.src= stp;
//
//         // au.load();
//         au.play();
//   });
// });



// Granim

var granimInstance = new Granim({
    element: '#canvas-interactive',
    name: 'interactive-gradient',
    elToSetClassOn: '.canvas-interactive-wrapper',
    direction: 'diagonal',
    isPausedWhenNotInView: true,
    stateTransitionSpeed: 500,
    states : {
        "default-state": {
            gradients: [
                ['#B3FFAB', '#12FFF7'],
                ['#ADD100', '#7B920A'],
                ['#1A2980', '#26D0CE']
            ],
            transitionSpeed: 10000
        },
        "violet-state": {
            gradients: [
                ['#9D50BB', '#6E48AA'],
                ['#4776E6', '#8E54E9']
            ],
            transitionSpeed: 2000
        },
        "orange-state": {
            gradients: [ ['#FF4E50', '#F9D423'] ],
            loop: false
        }
    }
});

// With jQuery
$('#default-state-cta').on('click', function(event) {
    event.preventDefault();
    granimInstance.changeState('default-state');
    setClass('#default-state-cta')
});
$('#violet-state-cta').on('click', function(event) {
    event.preventDefault();
    granimInstance.changeState('violet-state');
    setClass('#violet-state-cta')
});
$('#orange-state-cta').on('click', function(event) {
    event.preventDefault();
    granimInstance.changeState('orange-state');
    setClass('#orange-state-cta')
});

function setClass(element) {
    $('.canvas-interactive-wrapper a').removeClass('active');
    $(element).addClass('active');
};
