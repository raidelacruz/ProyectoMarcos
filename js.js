function colapsarSidebar() {
        // 1. Buscamos el contenedor principal
        const contenedor = document.querySelector('.container');
        
        // 2. Le alternamos la clase 'is-collapsed'
        contenedor.classList.toggle('is-collapsed');
      }