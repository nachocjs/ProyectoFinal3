const contenedorTjCpu = document.getElementById("contenedorCarritoCpu")


function crearTarjetasCpu(){
    const productoCpu = JSON.parse(localStorage.getItem("Cpu"))
	productoCpu.forEach(productoCpu => {
		const nuevoCpu = document.createElement("div");
		nuevoCpu.classList = "tarjetaCarrito";
		nuevoCpu.innerHTML = `
		<img class="imgCarreta" src= ${productoCpu.img}>
		<h4>${productoCpu.nombre}</h4>
		<span><i class="fa-solid fa-sack-dollar"></i> ${productoCpu.precio}<span>
        <br>
        <span>Tienes ${productoCpu.cantidad} productos seleccionados<span>
        <br>
        <span>El Total de esta item es: <i class="fa-solid fa-sack-dollar"></i>  ${productoCpu.cantidad * productoCpu.precio}<span>
		`
		contenedorTjCpu.appendChild(nuevoCpu);
	})}

	crearTarjetasCpu();

	const cambio = document.querySelector("#cambioMoneda")

	fetch("./js/moneda.json")
	.then(response => response.json())
    .then(data => {
        const producto = data[0];
        const span = document.createElement("span");
        span.innerText = producto.venta;
        cambio.appendChild(span);
    });

	const vaciar = document.querySelector("#btnBorrar")

	function vaciarCarrito () {
		localStorage.removeItem("Cpu")
	}

	vaciar.addEventListener("click",vaciarCarrito)