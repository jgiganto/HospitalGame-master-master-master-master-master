function EnviarAsincrono() {      
    $("#formulario").submit(function () {
        $.ajax({
            type: 'POST',
            url: ('Inicio'),
            data: $(this).serialize(),
            success: function (data) {
                //alert("enviado0");
                //countdown('countdown1', 0, 5);                
                //sleep(1000);
                //$("#boton").click();   
            },
              error: function (data) {
                alert("error al enviar");
            }
        })
        return false;
    });
}

            //,
            //error: function (data) {
            //    alert("error al enviar");
            //}