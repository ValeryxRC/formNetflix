import React from "react";

const Form = () =>{

    const verificateText1 = (event) => {
        const text1 = event.target.value;
        console.log("text1= " + text1);
        validacioText1(text1);
    }
    function validacioText1(text1){
        if(/[a-zA-Z]{3,5}/.test(text1)){
            document.getElementById("text1").style.borderColor = "green";
            document.getElementById("text1").nextElementSibling.innerHTML = "<br>Formato Correcto:" + text1+"<br>";
            return true;
        }else {
            document.getElementById("text1").style.borderColor = "red";
            document.getElementById("text1").nextElementSibling.innerHTML = "<br>Formato Incorrecto Ingresa entre 3 y 5 letras:" + text1+"<br>";
            return false;
        }
    }



    const verificateEmail = (event) =>{
        const email = event.target.value;
        console.log("Email= " + email);
        validacioEmail(email);
    }
    function validacioEmail(email){
        let pattern =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(pattern.test(email)){
            document.getElementById("email").style.borderColor = "green";
            document.getElementById("email").nextElementSibling.innerHTML = "<br>Formato Correcto:" + email+"<br>";
            return true;
        }else {
            document.getElementById("email").style.borderColor = "red";
            document.getElementById("email").nextElementSibling.innerHTML = "<br>Formato Incorrecto ingresa un correo" + email+"<br>";
            return false;
        }
    }



    const verificateCheck =(event) =>{
        const checked = document.querySelectorAll('input[type="checkbox"]:checked');
        console.log("Valores:")
        for (var i = 0; i < checked.length; i++) {
            console.log(checked[i].value);
        }
        validacioChecked(checked);
    }
    function validacioChecked(checked){
        if(checked.length > 1){
            document.getElementById("validCheck").innerHTML = "<br>Correcto<br>";
            document.getElementById("validCheck").style.backgroundColor="#00e500a3";
            return true;
        } else{
            document.getElementById("validCheck").innerHTML = "<br>Selecciona minimo 2<br>";
            document.getElementById("validCheck").style.backgroundColor="#ff00009e";
            return false;
        }
    }



    const verificateSelect =(event)=>{
        const selected = document.getElementById('select').selectedOptions;
        console.log("Valores:")
        for (var i = 0; i < selected.length; i++) {
            console.log(selected[i].value);
        }
        validacioSelected(selected);
    }
    function validacioSelected(selected){
        if(selected.length > 1){
            document.getElementById("select").nextElementSibling.innerHTML = "<br>Correcto<br>";
            document.getElementById("select").style.backgroundColor="#00e500a3";
            document.getElementById("select").nextElementSibling.style.backgroundColor="#00e500a3";
            return true;
        } else{
            document.getElementById("select").nextElementSibling.innerHTML = "<br>Selecciona minimo 2<br>";
            document.getElementById("select").style.backgroundColor="#ff00009e";
            document.getElementById("select").nextElementSibling.style.backgroundColor="#ff00009e";
            return false;
        }
    }

    const verificateForm=(event)=>{
        let valid = true;
        valid = valid && validacioText1(document.getElementById("text1").value);
        valid = valid && validacioEmail(document.getElementById("email").value);
        valid = valid && validacioChecked(document.querySelectorAll('input[type="checkbox"]:checked'));
        valid = valid && validacioSelected(document.getElementById("select").selectedOptions);
        console.log(valid);
        if(valid) {
            console.log("Formulario Completado Correctamente");
            alert("Formulario Completado Correctamente")
        } else {
            alert("Por favor, completa correctamente todos los campos del formulario.");
            event.preventDefault(); // Evitar el envío del formulario si hay errores
        }
    }
    
    return (
    <div id="act1">
        <form name="form1" onSubmit={verificateForm}>
            <label id="lText1">Entre 3 y 5 letras:
                <input type="text" name="text1"  onBlur={verificateText1} id="text1" minLength="3"  max="5" ></input>
                <span></span>
            </label>
            <label>Format email 
                <input type="email" onKeyDown={verificateEmail} name="email" id="email"></input>
                <span></span>
            </label>
            <label>Select:
                <select name="select" id="select" multiple onChange={verificateSelect}>
                    <option value="1" >Opcion 1</option>
                    <option value="2" >Opcion 2</option>
                    <option value="3" >Opcion 3</option>
                    <option value="4" >Opcion 4</option>
                </select>
                <span></span>
            </label>
            <div>Checkbox:
                <label>check1<input name="check" onClick={verificateCheck} value="1" type="checkbox"></input></label>
                <label>check2<input name="check" onClick={verificateCheck} value="2" type="checkbox"></input></label>
                <label>check3<input name="check" onClick={verificateCheck} value="3" type="checkbox"></input></label>
                <span id="validCheck"></span>
            </div>
            <button id="submit">SUBMIT</button>
            <span></span>
        </form>
        
    </div>
    );
}

export default Form;
