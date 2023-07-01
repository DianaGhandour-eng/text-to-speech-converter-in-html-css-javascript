let button = document.querySelector("button");
let text = document.querySelector("textarea");

button.addEventListener('click',()=>{
let talk = new SpeechSynthesisUtterance(text.value);
talk.lang = "en-US";
talk.lang = "ar-SA";
speechSynthesis.speak(talk)
})