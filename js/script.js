const targets = document.querySelectorAll('[data-target]')
const content = document.querySelectorAll('[data-content]')

targets.forEach(target => {
	target.addEventListener('click', () => {
		content.forEach(c => {
			c.classList.remove('active')
		})
		const t = document.querySelector(target.dataset.target)
		t.classList.add('active')
	})
})





const contenedorTjCpu = document.getElementById("contenedorTjCpus")

function crearTarjetasCpu(productoCpu){
	productoCpu.forEach(productoCpu => {
		const nuevoCpu = document.createElement("div");
		nuevoCpu.classList = "tarjetaProducto";
		nuevoCpu.innerHTML = `
		<img src= ${productoCpu.img}>
		<h4>${productoCpu.nombre}</h4>
		<span><i class="fa-solid fa-sack-dollar"></i> ${productoCpu.precio}<span>
		<button>Agregar al Carrito</button>
		`
		
		contenedorTjCpu.appendChild(nuevoCpu);
		nuevoCpu.getElementsByTagName("button")[0].addEventListener("click",()=> agregarAlCarritoCpu(productoCpu))
	})}

	crearTarjetasCpu(cpus)


const contenedorTjMb= document.getElementById("contenedorTjMbs")

function crearTarjetasMb(productoMb){
	productoMb.forEach(producto => {
		const nuevoMb = document.createElement("div");
		nuevoMb.classList = "tarjetaProducto";
		nuevoMb.innerHTML = `
		<img src= ${producto.img}>
		<h4>${producto.nombre}</h4>
		<span><i class="fa-solid fa-sack-dollar"></i> ${producto.precio}<span>
		<br>
		<span>No hay unindades Disponibles  <i class="fa-regular fa-face-sad-cry"></i><span>
		<button>Agregar al Carrito</button>
		`
		
		contenedorTjMb.appendChild(nuevoMb);
		nuevoMb.getElementsByTagName("button")[0].addEventListener("click",()=> {
			Swal.fire({
				title: 'Lo sentimos!',
				text: 'En este momento no disponemos de existencias de este producto',
				iconHtml: '<i class="fa-solid fa-face-sad-cry"></i>',
				confirmButtonText: 'Aceptar'
			  })
		});
	})}

	crearTarjetasMb(mb)

const contenedorTjRams= document.getElementById("contenedorTjRams")

function crearTarjetasRams(productoRam){
	productoRam.forEach(producto => {
		const nuevoRam = document.createElement("div");
		nuevoRam.classList = "tarjetaProducto";
		nuevoRam.innerHTML = `
		<img src= ${producto.img}>
		<h4>${producto.nombre}</h4>
		<span><i class="fa-solid fa-sack-dollar"></i> ${producto.precio}<span>
		<br>
		<span>No hay unindades Disponibles  <i class="fa-regular fa-face-sad-cry"></i><span>
		<button>Agregar al Carrito</button>
		`
		
		contenedorTjRams.appendChild(nuevoRam);
		nuevoRam.getElementsByTagName("button")[0].addEventListener("click",()=>{
			Swal.fire({
				title: 'Lo sentimos!',
				text: 'En este momento no disponemos de existencias de este producto',
				iconHtml: '<i class="fa-solid fa-face-sad-cry"></i>',
				confirmButtonText: 'Aceptar'
			  })
		});
	})}

	crearTarjetasRams(ram)

const contenedorTjGpus= document.getElementById("contenedorTjGpus")

function crearTarjetasGpu(productoGpu){
	productoGpu.forEach(producto => {
		const nuevoGpu = document.createElement("div");
		nuevoGpu.classList = "tarjetaProducto";
		nuevoGpu.innerHTML = `
		<img src= ${producto.img}>
		<h4>${producto.nombre}</h4>
		<span><i class="fa-solid fa-sack-dollar"></i> ${producto.precio}<span>
		<br>
		<span>No hay unindades Disponibles  <i class="fa-regular fa-face-sad-cry"></i><span>
		<button>Agregar al Carrito</button>
		`
		
		contenedorTjGpus.appendChild(nuevoGpu);
		nuevoGpu.getElementsByTagName("button")[0].addEventListener("click",()=> {
			Swal.fire({
				title: 'Lo sentimos!',
				text: 'En este momento no disponemos de existencias de este producto',
				iconHtml: '<i class="fa-solid fa-face-sad-cry"></i>',
				confirmButtonText: 'Aceptar'
			  })
		});
	})}

	crearTarjetasGpu(gpu)

const contenedorTjFuentes= document.getElementById("contenedorTjFuentes")

function crearTarjetasFuentes(productoFuente){
	productoFuente.forEach(producto => {
		const nuevoFuente = document.createElement("div");
		nuevoFuente.classList = "tarjetaProducto";
		nuevoFuente.innerHTML = `
		<img src= ${producto.img}>
		<h4>${producto.nombre}</h4>
		<span><i class="fa-solid fa-sack-dollar"></i> ${producto.precio}<span>
		<br>
		<span>No hay unindades Disponibles  <i class="fa-regular fa-face-sad-cry"></i><span>
		<button>Agregar al Carrito</button>
		`
		
		contenedorTjFuentes.appendChild(nuevoFuente);
		nuevoFuente.getElementsByTagName("button")[0].addEventListener("click",()=> {
			Swal.fire({
				title: 'Lo sentimos!',
				text: 'En este momento no disponemos de existencias de este producto',
				iconHtml: '<i class="fa-solid fa-face-sad-cry"></i>',
				confirmButtonText: 'Aceptar'
			  })
		});
	})}

	crearTarjetasFuentes(fuente)

const contenedorTjGabinetes= document.getElementById("contenedorTjGabinetes")

function crearTarjetasGabinetes(productoGabinete){
	productoGabinete.forEach(producto => {
		const nuevoGabinete = document.createElement("div");
		nuevoGabinete.classList = "tarjetaProducto";
		nuevoGabinete.innerHTML = `
		<img src= ${producto.img}>
		<h4>${producto.nombre}</h4>
		<span><i class="fa-solid fa-sack-dollar"></i> ${producto.precio}<span>
		<br>
		<span>No hay unindades Disponibles  <i class="fa-regular fa-face-sad-cry"></i><span>
		<button>Agregar al Carrito</button>
		`
		
		contenedorTjGabinetes.appendChild(nuevoGabinete);
		nuevoGabinete.getElementsByTagName("button")[0].addEventListener("click",()=> {
			Swal.fire({
				title: 'Lo sentimos!',
				text: 'En este momento no disponemos de existencias de este producto',
				iconHtml: '<i class="fa-solid fa-face-sad-cry"></i>',
				confirmButtonText: 'Aceptar'
			  })
		})
	})};

crearTarjetasGabinetes(gabinete)


	

	const cambio = document.querySelector("#cambioMoneda")

	fetch("./js/moneda.json")
	.then(response => response.json())
    .then(data => {
        const producto = data[0];
        const span = document.createElement("span");
        span.innerText = producto.venta;
        cambio.appendChild(span);
    });