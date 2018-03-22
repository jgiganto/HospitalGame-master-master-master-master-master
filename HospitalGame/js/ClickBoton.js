function clickbutton(a,b,c) {
    // simulamos el click del mouse en el boton del formulario
    if (a == true) {
        a = false;
        $("#timer1").click();
        
    }
    if (b == true) {
        b = false;
        $("#timer2").click();
    }
    if (c == true) {
        c = false;
        $("#timer3").click();
    }
    
}   