const addZero = (num) => (num < 10 ? '0' + num : num);

function atualizaHora(hora, minuto, segundo) {
   timer.innerHTML = `${addZero(hora)}:${addZero(minuto)}:${addZero(segundo)}`;
}

let [hora, minuto, segundo] = [0, 0, 0];
const timer = document.querySelector('.timer');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let clicouIniciar = false;

iniciar.addEventListener('click', () => {
   if (!clicouIniciar) {
      clicouIniciar = true;
      atualizaHora(hora, minuto, segundo);

      const inter = setInterval(() => {
         segundo++;
         atualizaHora(hora, minuto, segundo);

         if (segundo === 60) {
            segundo = 0;
            minuto++;
         }

         if (minuto === 60) {
            minuto = 0;
            hora++;
         }
      }, 1000);

      pausar.addEventListener('click', () => {
         clearInterval(inter);
         clicouIniciar = false;
      });
      zerar.addEventListener('click', () => {
         clicouIniciar = false;
         [hora, minuto, segundo] = [0, 0, 0];
         atualizaHora(hora, minuto, segundo);
         clearInterval(inter);
      });
   }
});
