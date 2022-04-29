/* Direccion del documento JSON y creo el Array donde va a ir
la respuesta*/
const dir_backUpCisco = "JSON//BackUp_redCisco.json"
let backUpCisco = new Array();
 
 
/*Declaro variable universal a un arreglo de entrada 
para luego ser usado*/
  
let newarregloInterfaces = new Array();


$(document).ready(function(){


    /*Utilizo el metodo GET de Ajax para traer
    el back up y pushearlo en el arrary previamente creado*/

    $.ajax({
        method: "GET",
        url: dir_backUpCisco,
        dataType:'json',
    
        success: function(respuesta){
    
            backUpCisco.push(respuesta);
            
        }
    
    });


    $("#tituloPrincipal").fadeIn("slow");



 /// Boton Chequeo IP ///

 /*Eventos de clicks con jQuery para procesar la IP 
ingresada 
Tambien genero el evento de la tecla Enter*/    

    $("#botonChequeo").click(function(){
        $("#formulario_busqueda").fadeOut();
        $("#formulario").fadeOut();
        $("#formularioIP").fadeIn("slow");

        $("#botonCancelarIP").click(function(){  // Boton cancelar para volver atras
            $("#form2")[0].reset();
            $("#formulario").fadeOut();      
            $("#formularioIP").fadeOut("slow");  
            $("#mensajeIpAcomparar").fadeOut();
            
            
        })

        $("#botonIngreso").click(function(){obtenerDatos()});


        $("#ipAComparar").keypress(function(e){
            if(e.key =='Enter'){
                        e.preventDefault();
                        obtenerDatos();
                    }
        })

    })

    $("#botonIngreso").click(function(){obtenerDatos()});


    $("#ipAComparar").keypress(function(e){
        if(e.key =='Enter'){
                    e.preventDefault();
                    obtenerDatos();
                }
    })



   /// Boton Busqueda de Sitios ///

    $("#botonBusqueda").click(function(){
       
        $("#formulario").fadeOut();
        $("#formularioIP").fadeOut();
        $("#formulario_busqueda").fadeIn("slow"); // fadeIn del Formulario

        $("#botonCancelarCellid").click(function(){   // Boton cancelar para volver atras      
            $("#mensajeCellId").fadeOut();
            $("#formBusqueda")[0].reset();
            $("#formulario_busqueda").fadeOut("slow"); 
            
        })
        
        $("#botonBuscar").click(function(){
            
            validacionCellID()
        });
        
        $("#cellId").keypress(function(e){ // Se escucha el evento de presionar enter cuando se llena el formulario 
            if(e.key =='Enter'){
                e.preventDefault();
                validacionCellID()
            }
        })

        

    })

})



