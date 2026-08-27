     let destacados = document.querySelectorAll('.destacado');
     destacados.forEach(function(elemento) {
        elemento.style.backgroundColor = 'yellow';
     });
     let enlaces = document.querySelectorAll('#menu a');
     enlaces.forEach(function(elemento) {
        elemento.classList.add('activo');
     });