
var topex = ""; topey = "";
function Aleatorios(tope)
    {
        var i = 1;
       i = Math.floor((Math.random() * tope) + 1);
    return i;
}

function PosicionAleatoriaX(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;

}
function PosicionAleatoriaY(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function EnfermoAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}