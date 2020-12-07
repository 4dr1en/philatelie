/*
 *set the lastname and the firstmame into the web-storage
*/

"use strict";

(()=>{
    const EL_form= document.getElementsByTagName('form')[0];

    EL_form.addEventListener('submit', e=>{
        const lastName= document.getElementById('lastName').value;
        const firstName= document.getElementById('firstName').value;
        localStorage.setItem("lastName", lastName);
        localStorage.setItem("firstName", firstName);
    });

})()