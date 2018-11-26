'use strict'



//Ejercicio


/* 

   1. Crear un formulario campos: Nombre, apellidos, edad
   2. Boton de enviar el formulario: evento submit
   3.  mostrar datos por pantalla   
   4. tener un boton que al darle click nos muestra los datos actuales
   del formulario


*/


// confirm('Este programa le pedira sus datos personales');


function datosUsuarios() {
     
     window.addEventListener('load', () =>{//evento load, que se ejecuata cuando el DOM es cargado
   
          console.log('Dom cargado');


       var formulario = document.querySelector('#formulario');
       var box_dashed = document.querySelector('.dashed')
       
         box_dashed.style.display = 'none'; //Mantenemos la caja oculta

       formulario.addEventListener('submit', () =>{
         console.log('Evento submit capturado');



         var nombre = document.querySelector('#nombre').value;//con el metodo value capturamo lo que hay dentro de cada caja de texto
         var apellido = document.querySelector('#apellidos').value;
         var edad = parseInt(document.querySelector('#edad').value);


         //VALIDACION CON LAS CAJAS DE TEXTO(INPUT) 

           if (nombre.trim() == null || nombre.trim().length == 0) {//verifica si hay espacios o si el campo esta vacio
              


               //Alerta de error para verificar que faltan campos  que faltan campos(Libreria Sweet Alert2) 
                    swal({
                      type: 'error',
                      title: 'Oops...',
                      text: 'El nombre no es valido!',
                      footer: '<a href>Por qué tengo este problema?</a>'
                    })
           
                    
                   
           

                document.querySelector('#nombre').style.background = 'red';//si se cumple cual quiera de las condiciones el campo cambia su color  
                
                
                return false;
               }
     
           if (apellido.trim() == null || apellido.trim().length == 0) {//verifica si hay espacios o si el campo esta vacio


               //Alerta de error para verificar que faltan campos  que faltan campos(Libreria Sweet Alert2) 
               swal({
                    type: 'error',
                    title: 'Oops...',
                    text: 'El Apellido no es valido!',
                    footer: '<a href>Por qué tengo este problema?</a>'
                  })
         
                  
              

               
               document.querySelector('#apellido').style.background = 'red';//si se cumple cual quiera de las condiciones el campo cambia su color

              
              return false;
          }
          if (isNaN(edad)|| edad <= 0 || edad == null || edad >= 100) {//Verifica si lo que se introdujo no es un numero o si es menor a 0 o mayor o igual a 100



            //Alerta de error para verificar que faltan campos  que faltan campos(Libreria Sweet Alert2) 
 
               swal({
                    type: 'error',
                    title: 'Oops...',
                    text: 'El numero no es valido!',
                    footer: '<a href>Por qué tengo este problema?</a>'
                  })
         
                  
               


               
               document.querySelector('#edad').style.background = 'red';//si se cumple cual quiera de las condiciones el campo cambia su color

              
              return false;
          }

          else{


               $(document).ready(function () {
                    // $('#nombre').click(function () {//Funcion que limpia todos los campos, una vez el evento submit es lanzado
                      $('input[type="text"]').val('');
                    // });
                  });

               swal(
                    'Buen trabajo!',
                    'Introdujo todos los Datos!',//alerta que todos los cambios estan listos
                    'success'
                  ) 
          }



         var datosTotales = [nombre, apellido, edad];//arreglo multidimensional, para encapsular 3 variales          
         
         box_dashed.style.display = 'block';//al darle click al boton submit esta caja se muestra con los datos que le introducimos
         
         


         var indice;// declaracion de la variable para usarse dentro de bucle

         for (indice in datosTotales) {//ciclo for in para recorrer las 3 varaibles al mismo tiempo y mostrar su valor

              var parrafo = document.createElement('p')//creamos un parrafo             
             parrafo.append(datosTotales[indice])//por cada iteracion del bucle a cada parrafo le metemos los datos correspondientes
              box_dashed.append(parrafo)//metemos en la caja cada parrafo con su texto correspondiente
              
            }

          }); 


        
     });
}



datosUsuarios();//INVOCACION DE LA FUNCION

