function ir(){

    var c=2468;
    var u="camilo";
    if(document.form.password.value==c && document.form.login.value==u){
        alert ("Bienvenido a tu ATM")
        window.location="Bienvenidos.html";
    }
    else{
        alert ("El usuario o contraseña son incorrectos.");
    }


}