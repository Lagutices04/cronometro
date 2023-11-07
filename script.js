/*let hr = mn = sg = ms ="0" + 0, iniciarTiempo;
//lo que es hora minuto y segundo los inicie en cero,todas estas variiables estan declaradas en una sola linea de codigo con el LET el ,0 iniciar tiempo es una funcion de intervalos de reflejo estara guardado en esta variable
 const botonIniciar  = document.querySelector(".iniciar");
 //un qurey selector de todo lo que pase en el html y css de la clase iniciar
 const botonDetener  = document.querySelector(".detener");
 const botonReiniciar  = document.querySelector(".reiniciar");

 botonIniciar.addEventListener("click", iniciar);
 //cuando se de click se escuchara el sono¿ido en el boton iniciar
 // la funcion sera iniciar,la cual dara la orden para que el cronometro arranque
 botonDetener.addEventListener("click", detener);
 botonReiniciar.addEventListener("click", reiniciar);

 function iniciar(){
    botonIniciar.classList.add("on");
    //cuanddo oproma boton quede deshabilitado,el intercambia clases, de boton iniciar ahora quedara en clase on
    iniciarTiempo = setInterval(()=>{
        //se guardara el intervalo de tiempo en esta variable
        ms++;
        // cuando inicie tiempo los milisegundos se sumaran de 1 en 1
        ms = ms < 10 ? "0" + ms : ms;
        //milisegundo es inferior a 10
        //si milisegundo es inferior a 10,pregunta pues añalade un cero a la izquierda
        //si no es inferior a diez,dejelo como esta
        //se pregunta en el milisegundo solo para que el numero no quede de un solo digito sino que añada un cero de ser necesario
        if(ms ==100){
          //cuando los milisegundos lleguen a 100,los segundos se empezaran a sumar de uno en uno
          sg++; 
          sg = sg <10 ? "0" + sg :sg;
          //añade un cero a la izquierda de ser necesario
          ms = "0" + 0;
          //se reiniciara los milisegundos en cero
        }
        if (seg == 60){
          //cuando los segundos lleguen a sesenta,los minutos se sumaran de uno en uno
          mn++;
          mn = mn <10 ? "0" + mn :mn;
          //se añade cero a la izquierda de ser necesario
          sg = "0" + 0;
          //los segundos lleguen a cero para que se re inicie 
        }
        if (mn ==60){
            hr++;
            hr = hr <10 ? "0" + hr : hr;
            mn ="0" + 0;
        }
        ingresarValor();
        //la pantalla se refrescara cada segundo
        //10x100 de los milisegundos se refrescara 
    }, 10);  
    function detener(){
        botonIniciar.classList.remove("on");
        //removera la clase que estaba agregando dinamicamente
        //debe para el tiempo que lleve hasta el tiempo contando
        //esto habilitara de nuevo el boton iniciar cronometro
        clearInterval(iniciarTiempo);
        // despues limpiara el intervalo    
    }
    function reiniciar(){
        botonIniciar.classList.remove("on");
        //dejara el tiempo en cero
        //activara boton de inicio
        clearInterval(iniciarTiempo);
        //para intervalo,no refrescara mas la pantalla
        hr = mn = sg = ms = "0" + 0;
        //añade otro cero
        ingresarValor();
    }
   function ingresarValor(){
    document.querySelector('.milisegundo').innerHTML = ms;
    //estos queryselector se añadiran en el html,por minuto segundo y hora
    document.querySelector('.segundo'),innerHTML = sg;
    document.querySelector('.minuto'),innerHTML = mn;
    document.querySelector('.hora'),innerHTML = hr; 
   }
} */

let hr = mn = sg = ms = "00";
let iniciarTiempo;

const botonIniciar = document.querySelector(".iniciar");
const botonDetener = document.querySelector(".detener");
const botonReiniciar = document.querySelector(".reiniciar");

botonIniciar.addEventListener("click", iniciar);
botonDetener.addEventListener("click", detener);
botonReiniciar.addEventListener("click", reiniciar);

function iniciar() {
    botonIniciar.classList.add("on");

    iniciarTiempo = setInterval(() => {
        ms++;

        ms = ms < 10 ? "0" + ms : ms;

        if (ms == 100) {
            sg++;
            sg = sg < 10 ? "0" + sg : sg;
            ms = "00";
        }

        if (sg == 60) {
            mn++;
            mn = mn < 10 ? "0" + mn : mn;
            sg = "00";
        }

        if (mn == 60) {
            hr++;
            hr = hr < 10 ? "0" + hr : hr;
            mn = "00";
        }

        ingresarValor();
    }, 10);
}

function detener() {
    botonIniciar.classList.remove("on");
    clearInterval(iniciarTiempo);
}

function reiniciar() {
    botonIniciar.classList.remove("on");
    clearInterval(iniciarTiempo);
    hr = mn = sg = ms = "00";
    ingresarValor();
}

function ingresarValor() {
    document.querySelector('.milisegundo').innerHTML = ms;
    document.querySelector('.segundo').innerHTML = sg;
    document.querySelector('.minuto').innerHTML = mn;
    document.querySelector('.hora').innerHTML = hr;
}

