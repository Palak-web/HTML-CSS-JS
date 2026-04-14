let isRunning = false
let timer = null

startBtn.addEventListener("click", function () {
  if (isRunning === false) {
    isRunning = true
    startBtn.textContent = "Stop"

    let delayTime = parseInt(delay.value)

    if (mode.value === "timeout") {
      timer = setTimeout(function () {
        buzzer.play()
        statusDiv.textContent = "Buzz!"
        isRunning = false
        startBtn.textContent = "Start"
        setTimeout(function () {
          statusDiv.textContent = "Waiting..."
        }, 2000)
      }, delayTime * 1000)
    } else {
      let repeatTime = parseInt(repeat.value)
      let count = 0
      timer = setInterval(function () {
        buzzer.play()
        count++
        if (count === repeatTime) {
          clearInterval(timer)
          statusDiv.textContent = "Done!!"
          isRunning = false
          startBtn.textContent = "Start"
          setTimeout(function () {
            statusDiv.textContent = "Waiting..."
          }, 2000)

        }
      }, delayTime * 1000)
    }
  } else {
    isRunning = false
    startBtn.textContent = "Start"
    clearTimeout(timer)
    clearInterval(timer)
  }
})
