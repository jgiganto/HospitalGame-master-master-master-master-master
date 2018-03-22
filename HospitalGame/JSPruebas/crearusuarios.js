$(document).ready(function () {


    function timedAlert(msg, timing) {
        setTimeout(function () {
            alert(msg);
            $("#IDPaciente").val(msg);
            $("#Nombre").val(msg);
            $("#Apellido").val(msg);
            $("#Edad").val(msg);
            $("#Reloj").val(msg);
            $("#IDEnfermedad").val(msg);
            $("#Baja").val(msg);
            $("#Eliminado").val(msg);


            $("#boton").click();



        }, timing);


        function yourFunction(time, counter) {

            for (var i = 0; i <= counter; i++) {
                var msg = i, timing = i * time * 1000; //this is in seconds
                timedAlert(msg, timing);
            };
        }

        yourFunction(1, 3); // well here are the values of your choice.
    }

});