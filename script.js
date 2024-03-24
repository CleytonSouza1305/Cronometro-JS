   const hour = document.getElementById('hour')
   const minute = document.getElementById('minute')
   const second = document.getElementById('second')
   const milisecond = document.getElementById('mili-second')

   let interval;
   let horas = 0
   let minutos = 0
   let segundos = 0
   let miliSegundos = 0
   let isPaused = false

const startBtn = document.getElementById('start').addEventListener('click', startimer)

function startimer() {
   interval = setInterval(() => {

      if (!isPaused) {
         miliSegundos += 10
         milisecond.innerHTML = miliSegundos

         if (miliSegundos === 1000) {
            segundos++
            second.innerHTML = '0' + segundos
            if (segundos >= 10) {
               second.innerHTML = segundos
            }
            miliSegundos = 0
         }

         if (segundos === 60) {
            minutos++
            minute.innerHTML = '0' + minutos
            if (minutos >= 10) {
               minute.innerHTML = minutos
            }
            segundos = 0
         }

         if (minutos === 60) {
            horas++
            hour.innerHTML = '0' + horas
            if (horas >= 10) {
               hour.innerHTML = horas
            }
            minutos = 0
         }
      }

   }, 10)

   const startBtn = document.getElementById('start').removeEventListener('click', startimer)
}

const stopBtn = document.getElementById('stop').addEventListener('click', function() {
   isPaused = true
   const startBtn = document.getElementById('start')

   startBtn.addEventListener('click', function() {
      isPaused = false
   })
})

const restartBtn = document.getElementById('restart')

function resetTimer() {
   const startBtn = document.getElementById('start')
   startBtn.innerHTML = 'Start' + '<i class="fa-solid fa-play"></i>'
   startBtn.addEventListener('click', startimer)

   clearInterval(interval)
   horas = 0
   minutos = 0
   segundos = 0
   miliSegundos = 0

   hour.textContent = '00'
   minute.textContent = '00'
   second.textContent = '00'
   milisecond.textContent = '000'
}

restartBtn.addEventListener('click', resetTimer)