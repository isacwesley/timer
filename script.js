function criaHora(segundos) {
   const data = new Date(segundos * 1000);
   return data.toLocaleTimeString('pt-br', {
      timeZone: 'UTC',
      hour12: false,
   });
}

const timer = document.querySelector('.timer');
let clicouIniciar = false;
let segundo = 0;
let inter;

function zerarTimer() {
   timer.innerHTML = '00:00:00';
   segundo = 0;
}
zerarTimer()

document.addEventListener('click', (e) => {
   const el = e.target;
   if (el.classList.contains('iniciar') && !clicouIniciar) {
      clicouIniciar = true;
      timer.classList.remove('parado');
      inter = setInterval(() => {
         segundo++;
         timer.innerHTML = criaHora(segundo);
      }, 1000);
   }
   if (el.classList.contains('pausar')) {
      clearInterval(inter);
      timer.classList.add('parado');
      clicouIniciar = false;
   }
   if (el.classList.contains('zerar')) {
      timer.classList.remove('parado');
      zerarTimer();
      clearInterval(inter);
      clicouIniciar = false;
   }
});
