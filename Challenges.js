/***** Ejercicio 1 **********
 * Imprime el color de todas las frutas por consola.
 */

const frutas = [
  { name: "peach", size: "litle", color: "peach" },
  { name: "watermelon", size: "big", color: "red" },
  { name: "strawberry", size: "litle", color: "red" },
  { name: "pineapple", size: "big", color: "yellow" },
  { name: "kiwi", size: "litle", color: "green" },
  { name: "tangerine", size: "litle", color: "orange" },
];

frutas.forEach((fruta) => {
  console.log(fruta.color);
});
 
//

/***** Ejercicio 2 **********
 * Crea un semaforo: si la luz está en verde los coches pueden pasar, si la luz está en ambar los coches deben pasar con precaución y si la luz está en rojo los coches se tienen que detener. 
 Haz que solo funcione con estos colores.
 */

function semaforo(luz) {
  switch (luz) {
    case "verde":
      return "Los coches pueden pasar";
    case "ambar":
      return "Los coches deben pasar con precaución";
    case "rojo":
      return "Los coches se tienen que detener";
    default:
      return "Color no válido";
  }
}

console.log(semaforo("verde"));
console.log(semaforo("ambar"));
console.log(semaforo("rojo"));




 //



/***** Ejercicio 3 **********

*"Tuesday" está en el lugar equivocado.
Extraelo utilizando el método .splice()

Pista: No deberías tener que escribir "Tuesday". Puedes guardar el valor extraído
en una variable.
*/


const weekDays = ["Sunday", "Tuesday", "Monday", "Wednesday"];

const [diaExtraido] = weekDays.splice(1, 1);
weekDays.splice(2, 0, diaExtraido);






console.log("Ejercicio #3 ", weekDays)


 //

 /***** Ejercicio 4 **********

Extrae cada elemento del inicio del array "num", multiplícalo por 7
y añádelo al array "numTimesSeven". No utilices loops.

*/

const num = [1, 2, 3];

const numTimesSeven = [];

numTimesSeven.push(num.shift() * 7);
numTimesSeven.push(num.shift() * 7);
numTimesSeven.push(num.shift() * 7);










console.log("Ejercicio #4 ", num.length === 0 && numTimesSeven[1] === 14 ? "is correct." : "is incorrect.");


 /***------------------------- */
/***** Ejercicio 5 **********

Comprueba si la id "1x3v6umb0i9p" existe dentro del array "listOfIDs".
Asigna la respuesta a "true" o a "false" en una variable llamada "includesID".



*/
