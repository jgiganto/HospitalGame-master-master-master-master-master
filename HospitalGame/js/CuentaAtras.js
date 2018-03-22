
var interval1; var interval2; var interval3; var a; var b; var c;
a = false; b = false; c = false; var num = 0; var nombre = "";
var x = ""; var y = ""; var datos = "";
//var desplazamiento = ale
function countdown(element, minutes, seconds) {
    //datos = Aleatorios(50);//2
    
   
    x = PosicionAleatoriaX(50, 750);
    y = PosicionAleatoriaY(150, 420);

   
    nombre = NombresDrop();
    var drop = "<img src='/Imagenes/Enfermo4.png' id=" + nombre + "' class='ui-widget-header' style='position:fixed;top:" + y + "px;left:" + x + "px'/>";
    
    // Fetch the display element
    var el = document.getElementById(element);
    // Set the timer
    if (element == 'countdown1') {

        interval1 = setInterval(function () {
            if (seconds == 0) {
                if (minutes == 0) {
                    $("img[id^='droppable']").remove();
                    $("img[id^='draggable']").remove();
                    $("#medicina1").append(circuloam);
                    $("#medicina2").append(cuadradoam);
                    $("#medicina3").append(estrellaam);
                    $("#medicina4").append(trianguloam);
                    
                    clearInterval(interval1);
                    clearInterval(interval2);//1
                    $("#empezarpartida").prop("disabled", false);
                    $("#ranking").prop("disabled", false);
                    $("#inciosesion").prop("disabled", false);
                    (el.innerHTML = "STOP!");//AQUI SE EJECUTA CÓDIGO CUANDO FINALIZA LA CUENTA ATRAS 
                    //$("#dinamico").append(drop);
                    arrastrar();
                    //$("#IdUsuario").val(datos);                    
                    $("#Puntos").val(score);
                    //$("#Apellidos").val(datos);
                    //$("#Usuario").val(datos);
                    //$("#Pass").val(datos);
                    //datos = $("#minombre").val();                   
                    $("#Nombre").val(minombre);
                    $("#boton").click(); //enviar asincrono     
                    
                    return;
                } else {
                    minutes--;
                    seconds = 60;
                }
            }

            if (minutes > 0) {
                var minute_text = minutes + (minutes > 1 ? ' minutes' : ' minute');
            } else {
                var minute_text = '';
            }

            var second_text = seconds > 1 ? '' : '';
            
           
            
            el.innerHTML = minute_text + ' ' + seconds + ' ' + second_text + '';
            seconds--;
        }, 500);
    }

    if (element == 'countdown2') {

        interval2 = setInterval(function () {
            if (seconds == 0) {
                if (minutes == 0) {
                    clearInterval(interval2);
                    //(el.innerHTML = "STOP!");
                                     
                 
                    //$("#btnmostrar").click();//3   
                    $("#dinamico").append(drop);
                    
                    $("img[id^='droppable']").fadeOut(EnfermoAleatorio(4000, 6000), function () {
                        this.remove();
                    });
                    arrastrar();  
                    $("#med1").html(medic1);
                    $("#med2").html(medic2);
                    $("#med3").html(medic3);
                    $("#med4").html(medic4);
                    $("#timer2").click();
                    return;
                } else {
                    minutes--;
                    seconds = 60;
                }
            }

            if (minutes > 0) {
                var minute_text = minutes + (minutes > 1 ? ' minutes' : ' minute');
            } else {
                var minute_text = '';
            }

            var second_text = seconds > 1 ? '' : '';

            el.innerHTML = minute_text + ' ' + seconds + ' ' + second_text + '';
            seconds--;
        }, 400);
    }
    if (element == 'countdown3') {

        interval3 = setInterval(function () {
            if (seconds == 0) {
                if (minutes == 0) {
                    (el.innerHTML = "STOP!");//AQUI SE EJECUTA ALGO CUANDO FINALIZA LA CUENTA ATRAS                
                    clearInterval(interval3); //22:00 Jesús hay que hacer una variable interval por cada reloj captura con un if quien llego
                    // a cero y que llame a countdown
                    //alert("dentro");  
                    //c = true;
                    //clickbutton(a, b, c)
                    $("#timer3").click();
                    return;
                } else {
                    minutes--;
                    seconds = 60;
                }
            }

            if (minutes > 0) {
                var minute_text = minutes + (minutes > 1 ? ' minutes' : ' minute');
            } else {
                var minute_text = '';
            }

            var second_text = seconds > 1 ? '' : '';

            el.innerHTML = minute_text + ' ' + seconds + ' ' + second_text + '';
            seconds--;
        }, 1000);
    }

}