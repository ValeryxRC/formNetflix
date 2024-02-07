import React, { useState } from 'react';
import next from "../assets/next.png" 
import Subscripcion from './Subscripcion';
import Password from './Password';
import Plan from './Plan';
import Pago from './Pago';
import Resultado from './resultado';

const Proceso = () => {
  /*Datos que gestionan la transicion del step y muestra uno que otro paso */
  const [pasoActual, setPasoActual] = useState(1);
  const [paso1, setPaso1] = useState(false);
  const [paso5, setPaso5] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [precioPlan, setPrecioPlan] = useState(0);

  //Datos de Usuario
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [ofertas, setOfertas] = useState('');
  const [plan, setPlan] = useState('');
  const [name, setName] = useState('');
  const [apellido, setApellido] = useState('');
  const [tarjeta, setTarjeta] = useState('');

  /*Constante que al darle siguiente paso va verificando paso por paso las restriciones y guarda las variables introducidas por el usuario */
  const siguientePaso = () => {
        if (pasoActual == 1) {
            if(document.getElementById("emailN").checkValidity())setPasoActual(pasoActual + 1);
            else document.getElementById("result_email").innerHTML ="La direccion de correo no es valida";
            setPaso1(true);
        }
        if(pasoActual == 2){
            const correoInput = document.getElementById("correo");
            const passInput = document.getElementById("password");
            passInput.setCustomValidity('');
            if (!passInput.checkValidity() || !correoInput.checkValidity()) {
                if (passInput.validity.patternMismatch || passInput.value == "") { 
                    let longP = passInput.value;
                    passInput.setCustomValidity(" Aumenta la longitud de este texto a 6 caracteres o más (actualmente, el texto tiene " + longP.length + " carácter)."); // Mostramos un mensaje personalizado
                    document.getElementById("divPassword").style.borderColor = "red";
                }else {
                    document.getElementById("divPassword").style.borderColor = "black";
                    document.getElementById("spanPassword").innerHTML = "";
                } 
                passInput.reportValidity();
                if (!correoInput.checkValidity()) { 
                    document.getElementById("spanCorreo").innerHTML = "Entre 5 a 50 caracteres";
                    document.getElementById("divCorreo").style.borderColor = "red";
                }else{
                    document.getElementById("divCorreo").style.borderColor = "black";
                    document.getElementById("spanCorreo").innerHTML = "";
                }
            }else{
              let email =correoInput.value;
              let pass = passInput.value;
              setEmail(email);
              setContraseña(pass);
              let valor = document.getElementById('checkbox').checked ? 'NO' : 'SI';
              setOfertas(valor);
              setPasoActual(pasoActual + 1);
            } 
        }
        if(pasoActual == 3){
            if(selectedPlan != null) {
                setPlan(selectedPlan === 1 ? "Básico con anuncios" : selectedPlan === 2 ? "Estándar" : selectedPlan === 3 ? "Premium" : 0)
                setPasoActual(pasoActual+1);
                document.getElementById("error").innerHTML = "";
                const resultado = selectedPlan === 1 ? setPrecioPlan(5.49) : selectedPlan === 2 ? setPrecioPlan(12.99) : selectedPlan === 3 ? setPrecioPlan(17.99) : 0;
                document.getElementById("nextFormText").innerHTML = "Iniciar subscripción de Pago";
                document.getElementById("nextForm").style.width = '25%';
            }else document.getElementById("error").innerHTML = "*Seleccione un plan antes de continuar*";
        }
        if(pasoActual == 4){
          let form = document.getElementById('pago');
          let tarjetaInput = document.getElementById('Tarjeta');
          let vencimientoInput = document.getElementById('Vencimiento');
          const visaPattern = /^4\d{13,18}$/;
          const mastercardPattern = /^5\d{13,18}$/;
          const amexPattern = /^(34|37)\d{13,18}$/;
          if(form.checkValidity()){
            if(tarjetaInput.checkValidity() && (visaPattern.test(tarjetaInput.value) || mastercardPattern.test(tarjetaInput.value) || amexPattern.test(tarjetaInput.value))){
              if(vencimientoInput.checkValidity()) {
                  let [mes, año] = vencimientoInput.value.split('/').map(Number);
                  let añoActual = new Date().getFullYear().toString().slice(-2);
                  let mesActual = new Date().getMonth() + 1;
                  let añoMaximo = parseInt(añoActual) + 25;
                  año = parseInt(año);
                  if (año >= añoActual && año <= añoMaximo) {
                      if(año == añoActual && mes < mesActual){
                        vencimientoInput.setCustomValidity('Mes no valido');
                        vencimientoInput.reportValidity();
                      }else setPasoActual(pasoActual+1);
                      setPasoActual(pasoActual+1);
                  } else {
                    vencimientoInput.setCustomValidity('Año invalido');
                    vencimientoInput.reportValidity();
                  }
              } vencimientoInput.reportValidity();
              let nombre = document.getElementById('Nombre').value;
              setName(nombre);
              setApellido(document.getElementById('Apellido').value);
              setTarjeta(document.getElementById('Tarjeta').value)
            }else tarjetaInput.reportValidity();
          }else {
            form.reportValidity();
          }
         
      }
      /*Esconde el boton de retroceder al terminar el formulario */
      if(pasoActual+1 == 5){
        setPaso5(false);
        setPaso1(false);
      } 
  };

  const pasoAnterior = () => {
    /*Retrocede pasos y en el caso de estar en el primer paso esconde el boton de retroceder */
    document.getElementById("nextForm").style.width = '8%';
    document.getElementById("nextFormText").innerHTML = "Siguiente";
    if(pasoActual>1)setPasoActual(pasoActual - 1);
    if(pasoActual-1 == 1) setPaso1(false);
  };

  return (
    <div id='formNetflixStep'>
      {pasoActual === 1 && <Subscripcion/>}
      {pasoActual === 2 && <Password/>}
      {pasoActual === 3 && <Plan selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan}/>} 
      {pasoActual === 4 && <Pago precioPlan={precioPlan} setPasoActual={setPasoActual}/>}
      {pasoActual === 5 && <Resultado  email={email} contraseña={contraseña} ofertas={ofertas} plan={plan} name={name} apellido={apellido} tarjeta={tarjeta}/>}
      <div>
        {paso1 && <button onClick={pasoAnterior} id='backForm' class='btnF'>&lt; <p style={{verticalAlign: "middle", display: "inline-block"}}> Anterior</p></button>}
        {paso5 && <button onClick={siguientePaso} id='nextForm' class="btnF"><p id='nextFormText' style={{verticalAlign: "middle", display: "inline-block"}}>Siguiente </p> &gt;</button>}
      </div>
      
    </div>
  );
}

export default Proceso;
    