document.addEventListener("DOMContentLoaded", function() {
    // Array de productos (esto podría obtenerse desde una base de datos)
    const productos = [
        { nombre: "Manilla miyuki", imagen: "https://i.pinimg.com/originals/83/42/e2/8342e2a856afc9bad13c8db9a770bb0e.jpg", precio: "$10.000" },
        { nombre: "Bolso trapillo", imagen: "https://tejidoscrochetbb.com/wp-content/uploads/2023/03/2.jpg", precio: "$60.000" },
        { nombre: "Amigurumi conejo", imagen: "https://i.pinimg.com/originals/4f/dd/c8/4fddc8709f7b7061bb82fbe84784ff93.jpg", precio: "$40.000" },
    ];

       // Galeria de productos

    const galeriaProductos = {
        productos: [],
        crearProductoHTML: function() {},
        // Resto de funciones
        inicializar: function() {
          this.cargarProductos();
          this.configurarCategorias();
        }
      };
      
      document.addEventListener('DOMContentLoaded', () => {
        galeriaProductos.inicializar();
      });



    const productosContainer = document.querySelector('.productos');

    // Crear los elementos para cada prodducto
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('producto');
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>Precio: ${producto.precio}</p>
        `;
        productosContainer.appendChild(div);
    });

    // Formulario de contacto
    const formulario = document.getElementById('formContacto');
    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío del formulario
        alert('Mensaje enviado correctamente.');
        formulario.reset();
        

    });
    
});
