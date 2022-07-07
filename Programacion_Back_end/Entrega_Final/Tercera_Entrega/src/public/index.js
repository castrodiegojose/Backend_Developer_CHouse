const socket = io();
//import carritoApi from '../services/mongoCarrito'

class UI {

    agregarProdCarrito(element) {
        console.log("agregando")
        if (element.name ==='agregarProdCarrito'){
            const elementoPadre = element.parentElement.parentElement
            const nombre= elementoPadre.querySelector('td#nombre').textContent
            const precio= elementoPadre.querySelector('td#precio').textContent
            const thumbnail = elementoPadre.querySelector('td#thumbnail').querySelector('img').src
            
            let newProductCarrito = { 
            nombre: nombre,
            precio: precio, 
            thumbnail: thumbnail
        }
        
        return newProductCarrito
    }
    else{console.log("el elemento no existe")}
}

eliminar(element){
    if (element.name ==='eliminarProdCarrito'){
        const elementoPadre = element.parentElement.parentElement
        const id = elementoPadre.querySelector('td#_id').textContent
        elementoPadre.remove()
        console.log(id)
        return id
    }
    
}

}

/// form productos//
const tabla = document.getElementById('tabla');
const agregarProdCarrito = document.getElementById("agregarProdCarrito");
const nombre = document.getElementById("nombre")
const precio = document.getElementById("precio")
const thumbnail = document.getElementById("foto")
const descripcion = document.getElementById("descripcion")
const codigo = document.getElementById("codigo")
const stock = document.getElementById("stock")
const mensajeProd = document.getElementById("no hay datos");

/// modificar para carrito ///
const carritoTabla = document.getElementById("Carritotabla");
const eliminarProdCarrito = document.getElementById("eliminarProdCarrito");
const guardarCarrito = document.getElementById("GuardarCarrito");
const eliminarCarrito = document.getElementById("EliminarCarrito");
const mensajeCarrito = document.getElementById("carrito vacio");


document.getElementById("tabla")
    .addEventListener('click', (e) =>{
        const ui = new UI();
        newProductCarrito = ui.agregarProdCarrito(e.target)
        console.log("new prod carrito:", newProductCarrito);
        socket.emit('new-prod-carrito', newProductCarrito);
          
        e.preventDefault();
    })

document.getElementById("Carritotabla")
    .addEventListener('click', (e) =>{
        const ui = new UI();
        idBorrar = ui.eliminar(e.target)
        socket.emit('carrito-delete-refresh', idBorrar);

    })
    
socket.on('carrito-refresh', (carrito)=>{
    let lastPord = carrito[0].productos.length - 1;
    
    let tablaInfo = carritoTabla.lastElementChild.innerHTML;
    tablaInfo += `                                                
                        <tr>
                            <td id="_id">${carrito[0].productos[lastPord]._id}</td
                            <td>${carrito[0].productos[lastPord].nombre}</td>
                            <td>${carrito[0].productos[lastPord].precio}</td>
                            <td>
                            <img src="${carrito[0].productos[lastPord].thumbnail}" size="5" alt="5">
                            </td>
                            <td>
                                <a type="submit" name="eliminarProdCarrito" class="btn btn-primary" style = "float: right;">Eliminar</a>
                            </tr> 
                        </tr>`;
    carritoTabla.lastElementChild.innerHTML = tablaInfo
  })

  socket.on('carrito-delete-refresh', (carrito)=>{
    let lastPord = carrito[0].productos.length - 1;
    
    let tablaInfo = carritoTabla.lastElementChild.innerHTML;
    tablaInfo = `                                                
                        <tr>
                            <td id="_id">${carrito[0].productos[lastPord]._id}</td
                            <td>${carrito[0].productos[lastPord].nombre}</td>
                            <td>${carrito[0].productos[lastPord].precio}</td>
                            <td>
                            <img src="${carrito[0].productos[lastPord].thumbnail}" size="5" alt="5">
                            </td>
                            <td>
                                <a type="submit" name="eliminarProdCarrito" class="btn btn-primary" style = "float: right;">Eliminar</a>
                            </tr> 
                        </tr>`;
    carritoTabla.lastElementChild.innerHTML = tablaInfo
  })