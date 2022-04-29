

function obtenerDatos(){

        
    let ipComparar = $("#ipAComparar").val(); //Tomo con JQUERY lo ingresado en el formulario
      
    let validacion = isIP(ipComparar); //Llamo a la funcion para chequear que se trata realmente de una IP
    
    if(validacion == "Valid IP"){    
        
        /**Se valida q es una IP ingresada y la compara con las existentes en la funcion     
        comparadora la cual devuelve si esta duplicada o no como string**/  
        
        $("#mensajeIpAcomparar").fadeOut()
        
        let alerta = comparadora(ipComparar);
        
        modales(alerta)       
    }

    else{ 
        
        $("#mensajeIpAcomparar").fadeIn()

    }
}




/* RChequea que la extension
del string sea la correcta, de no ser así levanta un cartel
de error en el formulario pidiendo q se ingrese correctamente.
De lo contrario pasa a la función Busqueda el valor del Cell ID
y muestra en un modal lo recibido*/

function validacionCellID (){

    $("#mensajeCellId").fadeOut();
    let cellID = $("#cellId").val();
    cellID = cellID.toUpperCase()

    console.log(cellID)
    console.log(cellID.length)

    if(cellID.length >= 5 && cellID.length <= 7){
        
        console.log("entro en el if")
        $("#mensajeCellId").fadeOut();
        let  mensaje = Busqueda(cellID);
        modales(mensaje)
        
    }

    else{
    
       console.log("error")
       $("#mensajeCellId").fadeIn();
        
    }


}




////Esta Función valida que realmente sea una IP lo que se ingresa/////////

function isIP(ip){
    var arrIp = ip.split("."); //genera un array donde los elementos se separan por los puntos
    
    if (arrIp.length !== 4){ // si el tamaño del array no es 4 (cantidad de octetos) no es valido
        return "Invalid IP";
    }

    for (let oct of arrIp) {
        if ( isNaN(oct) || Number(oct) < 0 || Number(oct) > 255) /*chequeo q los elementos del array ademas de que sean 4 
                                                                     no sean un string y que sea un numero entre 0 y 255(rangos del octeto)*/
            return "Invalid IP";
    }
    return "Valid IP";
}



/////////// Comparo la IP ingresada con cada una de los elementos del arreglo //////////

function comparadora (ipComparar){
    
    for(const [c,v] of Object.entries(backUpCisco)){
        
        let ipRouters = v;
        for (const [id,ip] of Object.entries(ipRouters)){
            
            let Router = ip

            for(const[i,int] of Object.entries(Router) ){
                let interfaces = Object.values(int)

                let IP_Router = i /* Guardo La Ip del router que me servirá despues para mostrarla
                                     una vez q se encuentre la interfaz*/
                
                for(const[j,val] of Object.entries(interfaces)){
                                        
                    if(val.IP_Interface === ipComparar){            
                        return `Su IP esta duplicada con la interfaz: ${val.Description} BDI: ${val.BDI} en el Router: ${IP_Router}`;
                    }
                    
                }

                
            }
    
        }

    /* La parte del codigo a continuacion, realiza la comparación de las IP
    guardadas en el localstorage */
    
    }

    let newarreglo = JSON.parse(localStorage.getItem("InterfacesNuevas"));

    if(newarreglo == null){

        return "¡¡Su IP puede ser Utilizada!!";

    }
    else{

        for (let i of newarreglo){
            if (ipComparar == i.ipInterface){

                return `Su IP esta duplicada con la interfaz: ${i.descripcion} BDI: ${i.bdi} en el Router: ${i.ipRouter}`;

            }
            
        }

        return "¡¡Su IP puede ser Utilizada!!";

    }

    
}



//// recupero el objeto del localstorage y le pusheo la nueva interfaz (IP) ///

function storagelocal(){
    $("#formulario").fadeIn();
    $("#botonCancelar").click(function(){        
        $("#formulario").fadeOut("slow");
    })

            
    $("#botonAceptar").click(function(){

        // Recibo todas las variables del formulario
        
        let ipRout = $("#ipRouter").val();   
        let bdi = $("#bdi").val();
        let desc = $("#descripcion").val();
        let ipInt = $("#ipInterface").val();
        let ipMasc = $("#mascara").val();

        // Compruebo que no esten vacios los campos y que las IP esten bien ingresadas

        if( ipRout == "" || isIP(ipRout) == "Invalid IP"){
            $("#mensajeIpRouter").fadeIn();
            return false
        }
        else{
            $("#mensajeIpRouter").fadeOut();
            if(bdi==""){
                $("#mensajeBdi").fadeIn();
                return false
            }
            else{
                $("#mensajeBdi").fadeOut();
                if(desc==""){
                    $("#mensajeDescripcion").fadeIn();
                    return false
                }
                else{
                    $("#mensajeDescripcion").fadeOut();
                    if(ipInt=="" || isIP(ipInt)=="Invalid IP"){
                        $("#mensajeIpInterface").fadeIn();
                        return false
                    }
                    else{
                        
                        $("#mensajeIpInterface").fadeOut();
                        if(ipMasc=="" || isIP(ipMasc)=="Invalid IP"){
                            $("#mensajeIpMascara").fadeIn();
                            return false

                        }
                        else{

                            $("#mensajeIpMascara").fadeOut();

                            /* Creo una nueva clase con el constructor RouterInterface
                            y la ingreso dentro de un arreglo que va a tener las interfaces ingresadas 
                            y limpio los formularios */

                            let newInterface = new RouterInterfaces(ipRout,bdi,desc,ipInt,ipMasc)
                            let form = document.getElementById("form")
                            form.reset();
                            
                            /* Verifico si hay algo creado en el localStorage, si hay algo, traigo la info
                            del localStorage y pusheo la newInterface. Si no, pusheo la newInterface en 
                            el arreglo newarregloInterface y lo seteo en el localStorage*/

                            let verificacion = localStorage.getItem("InterfacesNuevas") 

                            if(verificacion == null){  

                                newarregloInterfaces.push(newInterface)
                                localStorage.setItem("InterfacesNuevas", JSON.stringify(newarregloInterfaces))

                                $("#mensaje").prepend(`
        
                                        <div class="modal">
                                            <div class="modal-content-ok">
                                                <div class="modal-title">Se egrego correctamente la interfaz al Local Storage!</div>
                                                <button class="modal-btn-closed" id="modal_btn_closed">x</button>
                                            </div>                
                                        </div>`
                                    )

                                $("#modal_btn_closed").click(function(){ 

                                    $("#mensaje").empty()
                                    
                                }) 
                            
                            }

                            else{
                                
                                let newarreglo = JSON.parse(localStorage.getItem("InterfacesNuevas"))
                                newarreglo.push(newInterface)
                                localStorage.setItem("InterfacesNuevas",JSON.stringify(newarreglo))

                                $("#mensaje").prepend(`
        
                                        <div class="modal">
                                            <div class="modal-content-ok">
                                                <div class="modal-title">Se egrego correctamente la interfaz al Local Storage!</div>
                                                <button class="modal-btn-closed" id="modal_btn_closed">x</button>
                                            </div>                
                                        </div>`
                                    )

                                $("#modal_btn_closed").click(function(){ 

                                    $("#mensaje").empty()
                                    
                                })

                                

                            }
                        
                        
                        
                        
                        }

                    }
                } 
            }
        }

        

    })

}
    
    


//// Funcion de Busqueda de sitios ////
function Busqueda(cellID){
    
    

    for(const [c,v] of Object.entries(backUpCisco)){

        let ipRouters = v;
        for (const [id,ip] of Object.entries(ipRouters)){
            
            let Router = ip

            for(const[i,int] of Object.entries(Router) ){
                let interfaces = Object.values(int)
                let IP_Router = i
                
                for(const[j,val] of Object.entries(interfaces)){
                    
                    let busquedaCellID = val.Description;
                    
                    /* indexOf me devuelve -1 si no se encuentra ciertas palabras
                    en una cadena de texto*/

                    if(busquedaCellID.indexOf(cellID) != -1){
                         
                        //$("#mensajeCellId").fadeOut();
                        return `su sitio esta en el Router: ${IP_Router}`;

                        
                    } 

                    
                    
                }

                
            }
    
        }

    
    }

        
                                
    return "su sitio no se encuentra";

                
           

}
        

        

//// Funcion creadora de Modales ////
function modales(alerta){

    if (alerta == "¡¡Su IP puede ser Utilizada!!"){

        $("#mensaje").prepend(`
        
        <div class="modal">
            <div class="modal-content-ok">
            <div class="modal-title">${alerta}</div>
            <button class="modal-btn-closed" id="modal_btn_closed">x</button>
            <button id="modal_btn_agregar">Desea agregarla?</button>
            </div>
        </div>`
        )

        $("#modal_btn_closed").click(function(){ 

        $("#mensaje").empty()
        
        }) 

        $("#modal_btn_agregar").click(function(){ 
            
            $("#mensaje").empty()
            storagelocal();
            
        }) 

    }
    
    else if(alerta.indexOf("Su IP esta duplicada con la interfaz:") != -1){

        $("#mensaje").prepend(`
        
            <div class="modal">
                <div class="modal-content-notok">
                    <div class="modal-title">${alerta}</div>
                    <button class="modal-btn-closed" id="modal_btn_closed">x</button>
                </div>                
            </div>`
        )

        $("#modal_btn_closed").click(function(){ 

            $("#mensaje").empty()
            
        })  
        
    }

    else if (alerta == "su sitio no se encuentra"){

        $("#mensaje").prepend(`
        
        <div class="modal">
            <div class="modal-content-notok">
            <div class="modal-title">${alerta}</div>
            <button class="modal-btn-closed" id="modal_btn_closed">x</button>
            
            </div>
        </div>`
        )

        $("#modal_btn_closed").click(function(){ 

        $("#mensaje").empty()
        
        }) 

        $("#modal_btn_agregar").click(function(){ 
            
            $("#mensaje").empty()
            storagelocal();
            
        }) 

    }
    
    else{

        $("#mensaje").prepend(`
        
            <div class="modal">
                <div class="modal-content-ok">
                    <div class="modal-title">${alerta}</div>
                    <button class="modal-btn-closed" id="modal_btn_closed">x</button>
                </div>                
            </div>`
        )

        $("#modal_btn_closed").click(function(){ 

            $("#mensaje").empty()
            
        })  
        
    }
       
    
}




