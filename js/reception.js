/*
 * reception of the lastName and the firstName and display in the webpage
 * or display a error.
*/

"use strict";

(()=>{
    const El_main= document.getElementsByTagName('main')[0];
    const EL_p= document.createElement('p');
    if(localStorage.getItem('lastName') && localStorage.getItem('firstName')){
        EL_p.textContent= `Félicitation ${localStorage.getItem('lastName')} ${localStorage.getItem('firstName')}, nous avons bien reçu votre message.`;
        EL_p.classList.add('success');

        localStorage.removeItem('lastName');
        localStorage.removeItem('firstName');
    }else{
        EL_p.textContent= `Une erreure est survenue pendant l'envoi de votre message.`;
        EL_p.classList.add('error');
    }
    El_main.appendChild(EL_p);
})()