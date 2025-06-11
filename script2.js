// Inicialização do Swiper
new Swiper('.swiper', {
  effect: 'fade',
  speed: 400,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    waitForTransition: true,
    pauseOnMouseEnter: true,
  },
  mousewheel: true,
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

//tempo juntos


const dataInicio = new Date("2023-06-09T00:00:00");

    function atualizarTempo() {
      const agora = new Date();
      let diferenca = agora - dataInicio;
      const segundosTotais = Math.floor(diferenca / 1000);

      const anos = Math.floor(segundosTotais / (60 * 60 * 24 * 365.25));
      const meses = Math.floor((segundosTotais % (60 * 60 * 24 * 365.25)) / (60 * 60 * 24 * 30.44));
      const dias = Math.floor((segundosTotais % (60 * 60 * 24 * 30.44)) / (60 * 60 * 24));
      const horas = Math.floor((segundosTotais % (60 * 60 * 24)) / (60 * 60));
      const minutos = Math.floor((segundosTotais % (60 * 60)) / 60);
      const segundos = segundosTotais % 60;

      const texto = `
        <div class="box">${anos} ${anos === 1 ? 'ano' : 'anos'}</div>
        <div class="box">${meses} ${meses === 1 ? 'mês' : 'meses'}</div>
        <div class="box">${dias} ${dias === 1 ? 'dia' : 'dias'}</div>
        <div class="box">${horas} ${horas === 1 ? 'hora' : 'horas'}</div>
        <div class="box">${minutos} ${minutos === 1 ? 'minuto' : 'minutos'}</div>
        <div class="box">${segundos} ${segundos === 1 ? 'segundo' : 'segundos'}</div>
      `;
      
      document.getElementById("tempo-juntos").innerHTML = texto;
    }

    setInterval(atualizarTempo, 1000);
    atualizarTempo(); // chama de imediato
