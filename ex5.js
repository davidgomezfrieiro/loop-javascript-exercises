/**
 * Ejercicio 5: El siguiente bucle no se ejecuta nunca. 
 * Comrpruébalo con "node ex5.js"
 * ¿Sabrías decir porque?
 * // RESPUESTA: EL VALOR DE i ES IGUAL Al DE LA VARIABLE, POR LO QUE 5 < 5 ES FALSO
 * ---------------------------------------------------
 * Una vez lo averigues, arreglalo para que el bucle se ejecute exactamente 10 veces. 
 * Reestricción: SOLO puedes cambiar el valor de la variable 'veces' para conseguirlo
 */

 let veces = 10; 

 for (let i=0; i<veces; i++) {
     console.log("No me voy a ejecutar...")
 }