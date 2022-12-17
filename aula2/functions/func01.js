const cars = ['porshe', 'civic', 'x4']

const input = document.querySelector('div#app input')
const button = document.querySelector('div#app button')

button.addEventListener('click', () => {
    cars.find((car) => {
      if (car === input.value) {
        console.log('ok')
        break
      } else {
        console.log('wtf')
      }
  })
})