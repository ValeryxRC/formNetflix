import React, { useState } from 'react';

const Password =() =>{

    /*Funciones que informa del input al usuario */
    function rellenarSpan(){
        document.getElementById("sCorreo").innerHTML ="Direccion de correo";
    }
    function rellenarSpanP(){
        document.getElementById("sPass").innerHTML ="Añadir una contraseña";
    }
    /*Quita la Informacion mostrada */
    function quitarSpan(){
        document.getElementById("sCorreo").innerHTML =""
    }
    function quitarSpanP(){
        document.getElementById("sPass").innerHTML =""
    }

    /*Cambia estilos del input al escribir */
    function rellenarSpan1Correo(){
        if(document.getElementById("correo").value == ""){
            document.getElementById("spanCorreo").innerHTML = "La dirección de correo es obligatoría.";
            document.getElementById("divCorreo").style.borderColor = "red";
        } 
    }
    function rellenarSpan1Password(){
       if(document.getElementById("password").value == ""){
        document.getElementById("spanPassword").innerHTML = "La contraseña es obligatoría.";
        document.getElementById("divPassword").style.borderColor = "red";
       } 
    }
    
    /*Realiza las comprobacion y restriciones del input, si es correcto el dato introducido, de no ser asi se muestra un mensaje */
    const validarCorreo = () => {
        const correoInput = document.getElementById("correo");
        if (!correoInput.checkValidity()) { 
            document.getElementById("spanCorreo").innerHTML = "Entre 5 a 50 caracteres";
            document.getElementById("divCorreo").style.borderColor = "red";
        }else{
            document.getElementById("divCorreo").style.borderColor = "black";
            document.getElementById("spanCorreo").innerHTML = "";
        }
    };
    const validarPassword = () => {
        const passInput = document.getElementById("password");
        if (!passInput.checkValidity()) { 
            document.getElementById("spanPassword").innerHTML = "Entre 6 a 60 caracteres";
            document.getElementById("divPassword").style.borderColor = "red";
        }else{
            document.getElementById("divPassword").style.borderColor = "black";
            document.getElementById("spanPassword").innerHTML = "";
        }
    };


    return(
        <div id='passForm'>
            <p id='num'>PASO 1 DE 3</p>
            <h2>Crea una contraseña para empezar la suscripción. </h2>
            <p>!Faltan solo algunos pasos!</p>
            <p>También odiamos el papeleo.</p>
            <form name="password">
                <div id='divCorreo'><span class='s' id='sCorreo'></span>
                    <label for="correo">
                        <input id='correo' onKeyDown={rellenarSpan}  onClick={rellenarSpan1Correo} onBlur={quitarSpan} name='correo' type='email' required placeholder='Dirección de correo' pattern=".{5,50}" onChange={validarCorreo}></input>
                    </label>
                    <span id='spanCorreo'></span>
                </div>
                <div id='divPassword'><span class='s' id='sPass'></span>
                    <label for="password">
                        <input id='password' onKeyDown={rellenarSpanP}  onClick={rellenarSpan1Password} onBlur={quitarSpanP} name='password' type='password' required placeholder='Añadir una contraseña' pattern=".{6,60}" onChange={validarPassword}></input>
                    </label>
                    <span id='spanPassword'></span>
                </div>
                <div id='divCheck'>
                    <label><input type='checkbox' id='checkbox' name='checkbox'></input>No, no quiero ofertas especiales de Netflix por correo.</label>
                </div>
                
            </form>
        </div>
    )
} 

export default Password;