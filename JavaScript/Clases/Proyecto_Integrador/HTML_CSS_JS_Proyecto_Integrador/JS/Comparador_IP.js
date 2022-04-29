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




/*Eventos de clicks con jQuery para procesar la IP 
ingresada 
Tambien genero el evento de la tecla Enter*/

    $("#botonIngreso").click(function(){obtenerDatos()});


    $("#ipAComparar").keypress(function(e){
        if(e.key =='Enter'){
                    e.preventDefault();
                    obtenerDatos();
                }
    })



   /// Boton Busqueda de Sitios ///

    $("#botonBusqueda").click(function(){

        $("#formulario_busqueda").fadeIn(); // fadeIn del Formulario

        $("#botonCancelarCellid").click(function(){        
            $("#formulario_busqueda").fadeOut("slow"); // Boton cancelar para volver atras 
            $("#mensajeCellId").fadeOut();
        })
        
        /* Evento de Enter sobre el input o click sobre el boton
        Buscar, pongo en mayuscula todo para luego poder validar la cantidad
        de letras ingresadas que sean correspondiente a un Cell ID*/

        $("#cellId").keypress(function(e){
            if(e.key =='Enter'){
                e.preventDefault();
                let cellID = $("#cellId").val();
                cellID = cellID.toUpperCase()
                validacionCellID(cellID)
            }
        })

        $("#botonBuscar").click(function(){
            let cellID = $("#cellId").val();
            cellID = cellID.toUpperCase()
            validacionCellID(cellID)
        })

    })

})



