const containerTarjetas=document.getElementById('containerTarjetas');
const palabra='presidente';
const listaLetras=[];
function deployCard(){
    palabra.split('').forEach(letter=>{
        const card=document.createElement('div')
        if(listaLetras.includes(letter)){
            card.textContent=letter;
            card.classList.add('letter');
            card.classList.add('active');
            containerTarjetas.appendChild(card)
        }else{
            card.textContent='';
        }
    });
}
document.addEventListener('keydown',(e)=>{
    if(e.keyCode>=65&&e.keyCode<=90){
        const key=e.key;
        if(!listaLetras.includes(key)){
            if(palabra.includes(key)){
                listaLetras.push(key);
                deployCard()
            }
        }
    }
})