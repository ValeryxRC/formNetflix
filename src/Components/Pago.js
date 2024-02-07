import React, { useState } from 'react';
import visa from '../assets/visa.png';
import mastercard from '../assets/mastercard.png';
import america from '../assets/americaExpress.png';
import cvv3 from '../assets/cvv3.png';
import cvv4 from '../assets/cvv4.png';

const Pago =({precioPlan, setPasoActual}) =>{
    const [typeTarjeta, setTarjetaType] = useState('');
    /*Mensajes Informativos del Input en base su id */
   function rellenarSpan  (event){
       let id = "s" + event.target.id;

        switch (id) {
            case 'sNombre':
                document.getElementById(id).innerHTML="Nombre";
                break;
            case 'sApellido':
                document.getElementById(id).innerHTML="Apellidos";
                break;
            case 'sTarjeta':
                document.getElementById(id).innerHTML="Número de tarjeta";
                break;
            case 'sVencimiento':
                document.getElementById(id).innerHTML="Fecha de vencimiento de tu tarjeta";
                break;
            case 'sSeguridad':
                document.getElementById(id).innerHTML="Código de seguridad";
                break;
        
            default:
                break;
        }
    }
    /*Quitar la informacion conforme el usuario escribe o deja de escribir */
    const quitarSpan = (event) =>{
        let id = "s" +event.target.id;
        document.getElementById(id).innerHTML=" ";
    }

    /*Comprobaciones de las retricciones del input en base al id */
    function validar (event){
        let input = event.target;
        let id = event.target.id;
        let div = "div" + id;
        let span = "span" + id;
        input.setCustomValidity('');
        switch(id){
            case 'Nombre':
                if (!input.checkValidity()) { 
                    document.getElementById(span).innerHTML = "Minimo 3 caracteres, no se permite numeros";
                    document.getElementById(div).style.borderColor = "red";
                }else{
                    document.getElementById(div).style.borderColor = "#6cdd47";
                    document.getElementById(span).innerHTML = "";
                }
                break;
            case 'Apellido':
                if (!input.checkValidity()) { 
                    document.getElementById(span).innerHTML = "Minimo 1 caracter, no se permite numeros";
                    document.getElementById(div).style.borderColor = "red";
                }else{
                    document.getElementById(div).style.borderColor = "#6cdd47";
                    document.getElementById(span).innerHTML = "";
                }
                break;
            case 'Tarjeta':
                const visaPattern = /^4\d{13,18}$/;
                const mastercardPattern = /^5\d{13,18}$/;
                const amexPattern = /^(34|37)\d{13,18}$/;
                if(visaPattern.test(input.value) || mastercardPattern.test(input.value) || amexPattern.test(input.value)){
                    if (visaPattern.test(input.value)) {
                        setTarjetaType(visa);
                    } else if (mastercardPattern.test(input.value)) {
                        setTarjetaType(mastercard);
                    } else if (amexPattern.test(input.value)) {
                        setTarjetaType(america);
                    }
                    document.getElementById(div).style.borderColor = "#6cdd47";
                    document.getElementById(span).innerHTML = "";
                }else {
                    setTarjetaType('');
                    document.getElementById(span).innerHTML = "Tarjeta invalida";
                    document.getElementById(div).style.borderColor = "red";
                }
                  
                break;
            case 'Vencimiento':
                if (!input.checkValidity()) {
                    document.getElementById(span).innerHTML = "Formato de fecha inválido (MM/AA)";
                    document.getElementById(div).style.borderColor = "red";
                } else {
                    let [mes, año] = input.value.split('/').map(Number);
                    let añoActual = new Date().getFullYear().toString().slice(-2);
                    let mesActual = new Date().getMonth() + 1;
                    let añoMaximo = parseInt(añoActual) + 25;
                    año = parseInt(año);
                    if (año >= añoActual && año <= añoMaximo) {
                        if(año == añoActual && mes < mesActual){
                            document.getElementById(span).innerHTML = "Mes de vencimiento no válida";
                            document.getElementById(div).style.borderColor = "red";
                        }else{
                            document.getElementById(div).style.borderColor = "#6cdd47";
                            document.getElementById(span).innerHTML = "";
                        }
                    } else {
                        document.getElementById(span).innerHTML = "Año de vencimiento no válida";
                        document.getElementById(div).style.borderColor = "red";
                    }
                }                
                break;
            case 'Seguridad':
                if (!input.checkValidity()) { 
                    document.getElementById(span).innerHTML = "Escribe el codigo CVV valido";
                    document.getElementById(div).style.borderColor = "red";
                }else{
                    document.getElementById(div).style.borderColor = "#6cdd47";
                    document.getElementById(span).innerHTML = "";
                }
                break;
            default:
                break;
        }
    }

    /*Muestra o esconde un texto de ayuda con el codigo CVV */
    function mostrarAyuda(){
        if(document.getElementById('helpI').style.visibility == 'hidden') document.getElementById('helpI').style.visibility = 'visible';
        else document.getElementById('helpI').style.visibility = 'hidden';
    }

    /*Opcion de Cambiar el plan seleccionado y lo retrocede hata que vuelva a seleccionar el plan  */
    function cambiarPlan(){
        document.getElementById("nextForm").style.width = '8%';
        document.getElementById("nextFormText").innerHTML = "Siguiente";
        setPasoActual(3);
    }

    return(
        <div id='Pago-background'>
            <p id='num'>PASO 3 DE 3</p>
            <h2>Configura tu tarjeta de crédito o débito</h2>
            <div id='tarjetas'><img src={visa}></img><img src={mastercard}></img><img src={america}></img></div>
            <div id='form'>
            <form id='pago' name="pago">
                <div class="pagoF">
                    <div id='divNombre'><span class='s' id='sNombre'></span>
                        <label for="nombre">
                            <input id='Nombre'  onInvalid={(e) => e.target.setCustomValidity('Nombre inválido')}  pattern="[A-Za-z\s]{3,}" onKeyDown={rellenarSpan}  onBlur={quitarSpan} name='nombre' type='text' required placeholder='Nombre' onChange={validar}></input>
                        </label>
                        <span id='spanNombre' class='divSpan'></span>
                    </div>
                    <div id='divApellido'><span class='s' id='sApellido'></span>
                        <label for="apellido">
                            <input id='Apellido' onInvalid={(e) => e.target.setCustomValidity('Apellido inválido')} pattern="[A-Za-z\s]{1,}"  onKeyDown={rellenarSpan}  onBlur={quitarSpan} name='apelido' type='text' required placeholder='Apellidos' onChange={validar}></input>
                        </label>
                        <span id='spanApellido' class='divSpan'></span>
                    </div>
                    <div id='divTarjeta'><span class='s' id='sTarjeta'></span>
                        <label for="tarjeta">
                            <input id='Tarjeta' onInvalid={(e) => e.target.setCustomValidity('Tarjeta inválido')} onKeyDown={rellenarSpan} onBlur={quitarSpan} name='tarjeta' type='text' required placeholder='Número de tarjeta' onChange={validar}></input>
                        </label>
                        <span id='spanTarjeta' class='divSpan'></span>
                    </div><div><img id='tarjetaType' src={typeTarjeta}></img></div>
                    <div id='divVencimiento'><span class='s' id='sVencimiento'></span>
                        <label for="vencimiento">
                            <input id='Vencimiento' onInvalid={(e) => e.target.setCustomValidity('Fecha inválida')} onKeyDown={rellenarSpan}  onBlur={quitarSpan} name='vencimiento' placeholder='Fecha de vencimiento (MM/AA)' type='text' pattern='^(0[1-9]|1[0-2])\/([0-9]{2})$' onChange={validar}></input>
                        </label>
                        <span id='spanVencimiento' class='divSpan'></span>
                    </div>
                    <div id='divSeguridad'><span class='s' id='sSeguridad'></span>
                        <label>
                            <input id='Seguridad' onInvalid={(e) => e.target.setCustomValidity('CVV inválido')} pattern='^\d{3,4}$' onKeyDown={rellenarSpan}  onBlur={quitarSpan} name='seguridad' type='text' required placeholder='Código de seguridad (CVV)' onChange={validar}></input>
                            <p id='ayuda' onClick={mostrarAyuda}>?</p>
                        </label>
                        <span id='spanSeguridad'  class='divSpan'></span>
                    </div>
                    <div id='regresar'>
                        <div><p id='precio'>{precioPlan}€ al mes</p><p id='plan'>Plan select</p></div>
                        <div id='cambiarDiv'><a onClick={cambiarPlan}>Cambiar</a></div>
                    </div>
                </div>
                <div class="pagoF">
                    <div id='helpI' class="helpImg">
                        <p>El código de seguridad de la tarjeta (CVV) es el número de 3 o 4 cifras que aparece en el anverso o reverso de la mayoría de las tarjetas.</p>
                        <img src={cvv3}></img>
                        <img src={cvv4}></img>
                    </div>
                </div>
            </form>
            </div>
        </div>
    )
} 

export default Pago;