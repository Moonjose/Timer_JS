function relogio() { // Função relogio
  const relogio = document.querySelector('.relogio'); //Pega .relogio (p)
  const iniciar = document.querySelector('.iniciar');

  const bt = document.querySelector('button');
  let seconds = 0;
  let timer;

  function getTimeSeconds(seconds) { // Função que retorna o tempo em ms desde o marco 0 (00:00:00)
    const data = new Date(seconds * 1000); // Converter para segundos
    return data.toLocaleTimeString('pt-BR', { // Padrão BR, timezone UTC
      hour12: false,
      timeZone: 'UTC'
    });
  }

  function startTimer() { // Função que inicia timer
    timer = setInterval(function () {
      seconds++;
      relogio.innerHTML = getTimeSeconds(seconds);
    }, 1000);
  }

  document.addEventListener('click', function (e) { // Função listener para cliques
    const el = e.target;

    if (el.classList.contains('iniciar')) {
      clearInterval(timer);
      startTimer();
      relogio.classList.remove('pausado');
      iniciar.innerHTML = 'iniciar';
      bt.disabled = true;
    }
    if (el.classList.contains('pausar')) {
      clearInterval(timer);
      relogio.classList.add('pausado');
      iniciar.innerHTML = 'reiniciar';
      bt.disabled = false;
    }
    if (el.classList.contains('zerar')) {
      clearInterval(timer);
      seconds = 0;
      relogio.innerHTML = '00:00:00';
      relogio.classList.remove('pausado');
      iniciar.innerHTML = 'iniciar';
      bt.disabled = false;
    }
  });
};

relogio();
