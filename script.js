document.getElementById('button').addEventListener('click', calculator)
let age = 0
let day = ''

function calculator () {
  age = document.getElementById('age-input').value
  age = parseInt(age)
  day = document.getElementById('day-input').value

  if ((age < 18) && (day !== 'weekend')) {
    document.getElementById('result').innerHTML = 'You have to go to school today.'
  } else if ((age > 18) && (day !== 'weekend')) {
    document.getElementById('result').innerHTML = 'You have to go to work.'
  } else {
    document.getElementById('result').innerHTML = 'You get to relax for the weekend.'
  } document.getElementById('result').style.display = 'block'
}
