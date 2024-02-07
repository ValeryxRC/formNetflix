import React, { useState } from 'react';

const Subscripcion =() =>{
    const[email, setEmail] = useState('');

    /*Funciones que muestran o ocultan informacion para completar en el input */
function rellenarSpan(){
    document.getElementById("result_email").innerHTML ="La direccion de correo es obligatoria"
}
function quitarSpan(){
    document.getElementById("result_email").innerHTML =""
}

/*Valida el formato del input */
const setValidEmail =() =>{
    let emailInput = document.getElementById("emailN");
    const isValid = emailInput.checkValidity();
    setEmail(isValid);
}

    return(
        <div id="background-Netflix"  class='registerNetflix'>
            <h3>Disfruta donde quieras. Cancela cuando quieras.</h3>
            <h4>¿Quieres ver algo ya? Escribe tu dirección de correo para crear una subscripción a Netflix o reactivarla.</h4>
            <form name="subscripcion">
                <div id="divEmail">
                    <label id="labelEMAIL" for="emailN"><span id="span_email">Dirección de correo</span>
                    <input onFocus={rellenarSpan} onBlur={quitarSpan} name="emailN" class="form-control-lg border-0" id="emailN" type="email" required onChange={setValidEmail}></input>
                    </label>
                </div>
                <span id="result_email"></span>
                <br></br>
            </form>
        </div>
    )
} 

export default Subscripcion;