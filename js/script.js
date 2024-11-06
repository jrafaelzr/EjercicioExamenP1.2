function aplicarEstilos() {
    const contenedor = document.querySelector('.container');
    contenedor.style.marginTop = '50px';

    const titulo = document.querySelector('h2');
    titulo.classList.add('text-center', 'mb-4');
}

function obtenerProductos() {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(productos => mostrarProductos(productos));
}

function mostrarProductos(productos) {
    const listaProductos = document.getElementById('lista-productos');
    listaProductos.innerHTML = '';

    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];
        const tarjetaProducto = document.createElement('div');
        tarjetaProducto.classList.add('col-md-4');
        
        // Estilos y estructura de la tarjeta
        const tarjetaHTML = `
            <div class="card tarjeta-producto" style="margin-bottom: 20px;">
                <img src="${producto.image}" class="card-img-top" alt="${producto.title}" style="max-height: 200px; object-fit: cover;">
                <div class="card-body">
                    <h5 class="card-title">${producto.title}</h5>
                    <p class="card-text"><strong>Precio:</strong> L${producto.price.toFixed(2)}</p>
                    <p class="card-text"><strong>Categoría:</strong> ${producto.category}</p>
                    <p class="card-text">${producto.description}</p>
                </div>
            </div>
        `;
        
        tarjetaProducto.innerHTML = tarjetaHTML;
        listaProductos.appendChild(tarjetaProducto);
    }
}

// Llamadas iniciales para aplicar estilos y obtener productos
aplicarEstilos();
obtenerProductos();