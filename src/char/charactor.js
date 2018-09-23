require('../sass/charactor.scss');
// 將全域環境中的SpeechRecognition指好(依據不同瀏覽器)
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// 建立一個變數recognition來放為語音識別功能
const recognition = new SpeechRecognition();
// 讓語音識別回傳識別後的資訊（預設為false)
recognition.interimResults = true;

 let p = document.createElement('p');
 const words = document.querySelector('.words');
 words.appendChild(p);

 recognition.addEventListener('result', e =>{
     const transcript = Array.from(e.results)
     .map(result => result[0])
     .map(result => result.transcript)
     .join('');

     const poopScript = transcript.replace(/poop|poo|shit|dump/gi,'#');
     p.textContent = poopScript;
     if( e.results[0].isFinal){
         p = document.createElement('p');
         words.appendChild(p);
     }
 });
recognition.addEventListener('end', recognition.start);
recognition.start();
// function startGame() {
//     var button = document.querySelector('button');
//     let counter = 0;

//     button.addEventListener('click', () => {
//         ++counter;
//     });
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (counter > 5) {
//                 resolve();
//             } else {
//                 reject();
//             }
//         }, 2000);
//     });
// }

// startGame()
//     .then(() => alert('you win'))
//     .catch(() => alert('you lost'));