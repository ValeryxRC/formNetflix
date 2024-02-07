import React, { useState } from 'react';

const Plan =({selectedPlan, setSelectedPlan}) =>{
    
    /**Funcion que selecciona el plan al darle click en el */
    function selecionarPlan(num) {
        if (selectedPlan === num) {
            setSelectedPlan(null);
        } else {
            setSelectedPlan(num);
        }
    }

    return(
        <div id="background-Plan">
             <p id='num'>PASO 2 DE 3</p>
            <h3>Selecciona el plan ideal para ti.</h3>
            <div id='beneficios'>
                <span><p class="ch">✓</p>Ve todo lo que quieras</span>
                <span><p class="ch">✓</p>Recomendaciones exclusivas para ti.</span>
                <span><p class="ch">✓</p>Cambia de plan o cancélalo cuando quieras.</span>
            </div>
           
            <form name="plan">
               <table>
                    <tr id='divPlanes'>
                        <td><div id='vacio'></div></td>
                        <td onClick={() => selecionarPlan(1)} className={`selectable ${selectedPlan === 1 ? 'selected-red' : 'selected-tras'}`}><div><p>Básico con anuncios</p></div></td>
                        <td onClick={() => selecionarPlan(2)} className={`selectable ${selectedPlan === 2 ? 'selected-red' : 'selected-tras'}`}><div><p>Estándar</p></div></td>
                        <td onClick={() => selecionarPlan(3)} className={`selectable ${selectedPlan === 3 ? 'selected-red' : 'selected-tras'}`}><div><p>Premium</p></div></td>
                    </tr>
                    <tr id='precio'>
                        <td><p>Precio al mes</p></td>
                        <td onClick={() => selecionarPlan(1)} className={`selectable ${selectedPlan === 1 ? 'selected-red' : 'selected-tras'}`}><p>5,49 €</p></td>
                        <td onClick={() => selecionarPlan(2)} className={`selectable ${selectedPlan === 2 ? 'selected-red' : 'selected-tras'}`}><p>12,99 €</p></td>
                        <td onClick={() => selecionarPlan(3)} className={`selectable ${selectedPlan === 3 ? 'selected-red' : 'selected-tras'}`}><p>17,99 €</p></td>
                    </tr>
                    <tr id='calidad'>
                        <td><p>Calidad de vídeo</p></td>
                        <td onClick={() => selecionarPlan(1)} className={`selectable ${selectedPlan === 1 ? 'selected-red' : 'selected-tras'}`}><p>Buena</p></td>
                        <td onClick={() => selecionarPlan(2)} className={`selectable ${selectedPlan === 2 ? 'selected-red' : 'selected-tras'}`}><p>Muy buena</p></td>
                        <td onClick={() => selecionarPlan(3)} className={`selectable ${selectedPlan === 3 ? 'selected-red' : 'selected-tras'}`}><p>Excepcional</p></td>
                    </tr>
                    <tr id='resolucion'>
                        <td><p>Resolución</p></td>
                        <td onClick={() => selecionarPlan(1)} className={`selectable ${selectedPlan === 1 ? 'selected-red' : 'selected-tras'}`}><p>720p</p></td>
                        <td onClick={() => selecionarPlan(2)} className={`selectable ${selectedPlan === 2 ? 'selected-red' : 'selected-tras'}`}><p>1080p</p></td>
                        <td onClick={() => selecionarPlan(3)} className={`selectable ${selectedPlan === 3 ? 'selected-red' : 'selected-tras'}`}><p>4k+HDR</p></td>
                    </tr>
                    <tr id='dispositivo'>
                        <td><p>Multidispositivo: TV, ordenador, teléfono móvil y tableta</p></td>
                        <td onClick={() => selecionarPlan(1)} className={`selectable ${selectedPlan === 1 ? 'selected-red' : 'selected-tras'}`}><p>✓</p></td>
                        <td onClick={() => selecionarPlan(2)} className={`selectable ${selectedPlan === 2 ? 'selected-red' : 'selected-tras'}`}><p>✓</p></td>
                        <td onClick={() => selecionarPlan(3)} className={`selectable ${selectedPlan === 3 ? 'selected-red' : 'selected-tras'}`}><p>✓</p></td>
                    </tr>
                    <tr id='descarga'>
                        <td><p>Descargas</p></td>
                        <td onClick={() => selecionarPlan(1)} className={`selectable ${selectedPlan === 1 ? 'selected-red' : 'selected-tras'}`}><p>—</p></td>
                        <td onClick={() => selecionarPlan(2)} className={`selectable ${selectedPlan === 2 ? 'selected-red' : 'selected-tras'}`}><p>✓</p></td>
                        <td onClick={() => selecionarPlan(3)} className={`selectable ${selectedPlan === 3 ? 'selected-red' : 'selected-tras'}`}><p>✓</p></td>
                    </tr>
               </table>
            </form>
            <span id='error' class="selected-red"></span>
        </div>
    )
} 

export default Plan;