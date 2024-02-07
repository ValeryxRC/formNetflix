import React, { useState } from 'react';
import netflix from '../assets/iconNetflix.png';
const Resultado =({email, contraseña, ofertas, plan, name, apellido, tarjeta}) =>{
    return(
        <div id="passForm" class='result'>
            <div><img src={netflix}></img></div>
            <h3>!Gracias por suscribirte a Netflix¡</h3>
            <h4>Hola, {name} {apellido}:</h4>
            <h5>Ya puedes comenzar a disfrutar programas y películas.</h5>
            <p>Datos de Compra:</p>
            <p>Email: {email}</p>
            <p>contraseña: {contraseña}</p>
            <p>Plan Seleccionado: {plan}</p>
            <p>Tarjeta: {tarjeta}</p>
            <p>Recibir Noticias: {ofertas}</p>
        </div>
    )
} 

export default Resultado;