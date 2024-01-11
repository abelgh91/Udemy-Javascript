/* 
	📌 Named Imports
*/
/*si queremos ponerle un alias a una funcion importada podemos poner
por ejemplo name as nameImported y utilizarlo en el archivo con
el nuevo nombre*/

// import { name as nameImported, getPost } from "./namedExports";
// console.log('mi nombre es '+ nameImported);
// console.log(getPost())

/* 
	📌 Namespace Imports
*/
/*con esta forma importamos todas las funciones y variables que 
hemos querido exportar y los compila dentro de otra variable creada
por nosotros con un alias*/

// import * as dates from './namedExports';
// console.log(dates.name)
// console.log(dates.getPost())

/* 
	📌 Default Imports
    en este caso en el archivo donde esté la funcion a importar
    solamente ponemos export default y no le ponemos nombre a la funcion
    ya que solo hay una funcion en ese archivo, el nombre se lo ponemos
    aqui a la hora de importarla, y no se ponen llaves. 

    Con la segunda forma (poniendo export default al final del archivo)
    podemos nombrar como queramos también a la funcion cuando vayamos
    a importarla
*/
// import  getUsuario  from './defaultExport';
// console.log(getUsuario());

/*solo importa código que no sean funciones, como por ejemplo un if() o cosas asi*/
import './emptyExport';