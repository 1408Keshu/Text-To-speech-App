let speech = new SpeechSynthesisUtterance(); 
//a new instance representing a speech request (contains various methods and properties to control speech synthesis process)


//adding different voices to select option
let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () =>{

    voices = window.speechSynthesis.getVoices();//adding updated list of voice in the voice Array
    speech.voice = voices[0]; //default voice to the speech
    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name,i)));
};

// speeach in different voice after changing voice
voiceSelect.addEventListener("change",()=>{
    speech.voice = voices[voiceSelect.value];
});

//event listener to listen button to play the speech
document.querySelector('button').addEventListener('click',function(){
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})
