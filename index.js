let speech=new SpeechSynthesisUtterance();

let vocies=[];

let voiceSelect=document.querySelector('select');
window.speechSynthesis.onvoiceschanged=()=>{
    vocies=window.speechSynthesis.getVoices();
    speech.voice=vocies[0];

    vocies.forEach((voice,i)=>(voiceSelect.options[i])=new Option(voice.name,i));

};
voiceSelect.addEventListener('change',()=>{
    speech.voice=vocies[voiceSelect.value];
})
document.querySelector('.btn').addEventListener('click',()=>{
    speech.text=document.querySelector('.text').value;
    window.speechSynthesis.speak(speech);
});


let bars=document.querySelector('.bars');
let ul=document.getElementById('flex');

bars.addEventListener('click',()=>{
    ul.classList.toggle('add');
    let ham=bars.firstElementChild;
    if(ul.classList.contains('add')){
        ham.classList.replace('fa-bars','fa-xmark');
    }
    else{
        ham.classList.replace('fa-xmark','fa-bars');
    }
});
let btn=document.getElementById('btn');
let input=document.getElementById('input');
let text=document.querySelector('.text');
let query;

async function v(){
query=input.value;
    const url = `https://bing-web-search1.p.rapidapi.com/search?q=${query}&mkt=en-us&safeSearch=Off&textFormat=Raw&freshness=Day`;
text.innerHTML="";
const options = {
	method: 'GET',
	headers: {
		'X-BingApis-SDK': 'true',
		'X-RapidAPI-Key': '2f4809ca3cmsh7cc45ca409e5139p15cff4jsn11255b907f67',
		'X-RapidAPI-Host': 'bing-web-search1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
    let desc=result.value[0].description;
    console.log(desc);
    text.innerHTML=desc;

} catch (error) {
	console.error(error);
}
}
btn.addEventListener('click',()=>{
v();
})
