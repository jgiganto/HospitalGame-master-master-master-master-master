 

    $(document).ready(function () {
        setTimeout(clickbutton, 10);

    function clickbutton() {
        // simulamos el click del mouse en el boton del formulario
        $("#timer1").click();
    }


        var saludo; var IDPaciente; var Nombre; var Apellido; var Edad; var Reloj;
        var IDEnfermedad; var Baja; var Eliminado;
        function countdown (element, minutes, seconds) {
            // Fetch the display element
            var el = document.getElementById(element);

            // Set the timer
            var interval = setInterval(function () {
                if (seconds == 0) {
                    if (minutes == 0) {
        (el.innerHTML = "STOP!");
    var i = Math.floor((Math.random() * 100) + 1);
                        $("#IDPaciente").val(i) ;
                        $("#Nombre").val(i);
                        $("#Apellido").val(i);
                        $("#Edad").val(i);
                        $("#Reloj").val(i);
                        $("#IDEnfermedad").val(i);
                        $("#Baja").val(i);
                        $("#Eliminado").val(i);
                        $("#boton").click();

                        clearInterval(interval);
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
        var start1 = document.getElementById('timer1');
        var start2 = document.getElementById('timer2');
        var start3 = document.getElementById('timer3');
        var i = Math.floor((Math.random() * 1) + 1);
        var j = Math.floor((Math.random() * 10) + 1);
        var k = Math.floor((Math.random() * 10) + 1);
        start1.onclick = function () {
        countdown('countdown1', 0, i);
    }

        start2.onclick = function () {
        countdown('countdown2', 0, j);
    }
        start3.onclick = function () {
        countdown('countdown3', 0, k);
    }


    });
 