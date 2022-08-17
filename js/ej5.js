window.onload = inicio;
function inicio(){
    document.querySelector(".start").addEventListener("click",cronometrar);
    document.querySelector(".stop").addEventListener("click",parar);
    document.querySelector(".reiniciar").addEventListener("click",reiniciar);
    h = 0;
    m = 0;
    s = 0;
    document.getElementById("reloj").innerHTML="00:00:00";
}         
function cronometrar(){
    escribir();
    tiempo = setInterval(escribir,1000);
    document.querySelector(".start").removeEventListener("click",cronometrar);
}
function escribir(){
    var hAux, mAux, sAux;
    s++;
    if (s>59){m++;s=0;}
    if (m>59){h++;m=0;}
    if (h>24){h=0;}

    if (s<10){sAux ="0"+s;}else{sAux = s;}
    if (m<10){mAux ="0"+m;}else{mAux = m;}
    if (h<10){hAux ="0"+h;}else{hAux = h;}

    document.getElementById("reloj").innerHTML = hAux + ":" + mAux + ":" + sAux; 
}
function parar(){
    clearInterval(tiempo);
    document.querySelector(".start").addEventListener("click",cronometrar);

}
function reiniciar(){
    clearInterval(tiempo);
    document.getElementById("reloj").innerHTML="00:00:00";
    h=0;
    m=0;
    s=0;
    document.querySelector(".start").addEventListener("click",cronometrar);
}