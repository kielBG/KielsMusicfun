document.addEventListener('DOMContentLoaded', function () {


//the set up to play
var conductor = new BandJS();
conductor.setTimeSignature(4,4);
conductor.setTempo(140);
var piano = conductor.createInstrument();
var drum = conductor.createInstrument('white', 'noises');
drum.setVolume(60)
piano.setVolume(100);

//verse 1 
piano.note('eighth', 'G4');
piano.note('eighth', 'E4');
piano.note('eighth', 'D4');
piano.note('eighth', 'C4');
piano.note('half', 'E4');
piano.rest('half');
piano.rest('quarter');
piano.rest('eighth');
piano.note('eighth', 'G4');
piano.note('eighth', 'G4');
piano.note('eighth', 'E4');
piano.note('eighth', 'D4');
piano.note('eighth', 'C4');
piano.note('half', 'E4');
piano.rest('half');
piano.rest('half');


//drums repeat
drum.repeatStart();
drum.rest('half');
drum.rest('eighth');
drum.note('eighth', 'A4');
drum.note('eighth', 'A4');
drum.rest('eighth');
drum.note('eighth', 'A4');
drum.rest('quarter');
drum.note('eighth', 'A4');
drum.note('eighth', 'A4');
drum.rest('eighth');
drum.note('eighth', 'A4');
drum.rest('eighth');
drum.repeat(7)

//thats what people say
piano.note('eighth', 'G4');
piano.note('eighth', 'E4');
piano.note('eighth', 'D4');
piano.note('eighth', 'C4');
piano.note('eighth', 'E4');
piano.note('eighth', 'D4');
piano.note('quarter', 'C4');
piano.rest('quarter');
piano.note('quarter', 'A3');
piano.note('quarter', 'G3');
piano.rest('quarter')
piano.note('eighth', 'G4');
piano.note('eighth', 'E4');
piano.note('eighth', 'D4');
piano.note('eighth', 'C4');
piano.note('eighth', 'E4');
piano.note('eighth', 'D4');
piano.note('quarter', 'C4');
piano.rest('quarter');
piano.note('quarter', 'A3');
piano.note('quarter', 'G3');

//too many dates
piano.note('eighth', 'G3');
piano.note('eighth', 'G3');
piano.note('eighth', 'G4');
piano.note('eighth', 'E4');
piano.note('eighth', 'D4');
piano.note('eighth', 'C4');
piano.note('half', 'E4');
piano.rest('half');
piano.rest('quarter');
piano.rest('eighth');
piano.note('eighth', 'G4');
piano.note('eighth', 'G4');
piano.note('eighth', 'E4');
piano.note('eighth', 'D4');
piano.note('eighth', 'C4');
piano.note('half', 'E4');
piano.rest('half');
piano.rest('eighth');

//at least.. thats what they say
piano.note('eighth', 'G3');
piano.note('quarter', 'G3');
piano.note('eighth', 'G4');
piano.note('eighth', 'E4');
piano.note('eighth', 'D4');
piano.note('eighth', 'C4');
piano.note('eighth', 'E4');
piano.note('eighth', 'D4');
piano.note('quarter', 'C4');
piano.rest('quarter');
piano.note('quarter', 'A3');
piano.note('quarter', 'G3');
piano.rest('quarter')
piano.note('eighth', 'G4');
piano.note('eighth', 'E4');
piano.note('eighth', 'D4');
piano.note('eighth', 'C4');
piano.note('eighth', 'E4');
piano.note('eighth', 'D4');
piano.note('quarter', 'C4');
piano.rest('quarter');
piano.note('quarter', 'A3');
piano.note('quarter', 'G3');

var player = conductor.finish();

const playButton = document.querySelector('#play')
playButton.addEventListener("click", function () {
    player.play();
})

})
