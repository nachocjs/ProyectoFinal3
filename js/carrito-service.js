function agregarAlCarritoCpu (productoCpu){
    const memoria = JSON.parse(localStorage.getItem("Cpu"));
    console.log(memoria)
    if (!memoria){
        const nuevoProducto = getNuevoProductoParaMemoria(productoCpu);
        localStorage.setItem("Cpu",JSON.stringify([nuevoProducto]));
    } else {
        const indiceProducto = memoria.findIndex(componente => componente.id === productoCpu.id)
        console.log(indiceProducto)
        const nuevaMemoria = memoria;
        if (indiceProducto ===-1){
        nuevaMemoria.push(getNuevoProductoParaMemoria(productoCpu))
    } else {
        nuevaMemoria[indiceProducto].cantidad ++;
    }
    localStorage.setItem("Cpu",JSON.stringify(nuevaMemoria))
};

actualizarNumeroCarrito();
}


function getNuevoProductoParaMemoria(productoCpu){
    const nuevoProductoCpu = productoCpu;
    nuevoProductoCpu.cantidad = 1;
    return nuevoProductoCpu;
    }
const cuentaCarritoElement = document.getElementById("cuentaCarrito")
function actualizarNumeroCarrito(){
    const memoria = JSON.parse(localStorage.getItem("Cpu"));
    const cuentaCpu = memoria.reduce((acc, current) => acc + current.cantidad,0);
    cuentaCarritoElement.innerText = cuentaCpu;
};

actualizarNumeroCarrito();

const totalCarritoElement = document.getElementById("tCarrito")
function actualizarTotalCarrito(){
    const total = JSON.parse(localStorage.getItem("Cpu"));
    const totalCarrito = total.reduce((acc, current) => acc + current.precio * current.cantidad,0);

    totalCarritoElement.innerText = totalCarrito;
};

actualizarTotalCarrito();