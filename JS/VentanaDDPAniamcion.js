
  let flipbook = $('#flipbook');

  flipbook.turn({
    width: 1300,
    height: 400,
    autoCenter: true
  });

  function nextPageLoop() {
    let current = flipbook.turn('page');
    let total = flipbook.turn('pages');

    if (current < total) {
      flipbook.turn('next');
      setTimeout(nextPageLoop, 2000); // sigue normalmente cada 2s
    } else {
      // Si estamos en la última, esperamos 1s y volvemos animadamente a la primera
      setTimeout(() => {
        flipbook.turn('page', 1); // vuelve con animación
        setTimeout(nextPageLoop, 2000); // espera antes de continuar
      }, 1000); // pausa al final
    }
  }

  nextPageLoop(); // inicia el ciclo

