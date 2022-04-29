//Interfaces de los Routers

class RouterInterfaces {

    constructor(ipRouter,bdi,descripcion,ipInterface,mascara){
        this.ipRouter = ipRouter
        this.bdi = bdi;
        this.descripcion = descripcion;
        this.ipInterface = ipInterface;
        this.mascara = mascara;
        this.estado = "en uso";
    }

    getEstadoDeIP(){ 

        return this.estado;
    }
}









