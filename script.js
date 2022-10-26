const gameContainer=document.getElementById('gameContainer');
const tarjetasContainer=document.getElementById('containerTarjetas')
const listaPalabras=['hola','mundo','presidente','barrio'];
let selectedWord=listaPalabras[Math.floor(Math.random()*listaPalabras.length)];
const wrongLettersEl=document.getElementById('wrongLetters');
const messageEl=document.getElementById('messageContainer');
const botonPlay=document.getElementById('botonPlay');
const correctLetters=[];
const wrongLetters=[];
function creatingCards(){
    tarjetasContainer.innerHTML=`
        ${
            selectedWord
            .split('')
            .map((letter,i)=>`
                <span class="letter" id="letter-${i}">
                    ${correctLetters.includes(letter)?letter:''}
                </span>
            `)
            .join('')
        }
    `;
    const innerWord=tarjetasContainer.innerText.replace(/\n/g,'');
};
function updateFromLettersEl(){
    wrongLettersEl.innerHTML=`
        ${wrongLetters.length}
    `;
    const message=undefined;
    messageEl.innerHTML=`
        ${wrongLetters.length>0?'<p>Errado<p>':'Excelente'}
    `;
}
updateFromLettersEl();
document.addEventListener('keydown',(e)=>{
    if(e.keyCode>=65 && e.keyCode<=90){
        const letter=e.key;
        if(selectedWord.includes(letter)){
            if(!correctLetters.includes(letter)){
                correctLetters.push(letter);
                creatingCards();
            }
        }
    }
})
botonPlay.addEventListener('click',()=>{
    correctLetters.splice(0);
    wrongLetters.splice(0);
    selectedWord=listaPalabras[Math.floor(Math.random()*listaPalabras.length)];
});
creatingCards();