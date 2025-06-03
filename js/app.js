const ENTRECOT = document.querySelector('#entrecot')
const MACARRONES = document.querySelector('#macarrones')
const RISOTTO = document.querySelector('#risotto')
const ALBONDIGAS = document.querySelector('#albondigas')
const VEGANO = document.querySelector('#vegano')
const GLUTEN = document.querySelector('#gluten')
const LACTOSA = document.querySelector('#lactosa')
const MENSAJE = document.querySelector('#mensaje')
const ENTRECOT1 = document.querySelector('#entrecot1').textContent
const MACARRONES1 = document.querySelector('#macarrones1').textContent
const RISOTTO1 = document.querySelector('#risotto1').textContent
const ALBONDIGAS1 = document.querySelector('#albondigas1').textContent

function ordenar() {
  console.log(ordenar)

  if (ENTRECOT.checked && VEGANO.checked) {
    MENSAJE.innerHTML =
      'El plato es incompatible con su preferencia, esperamos que elija  otro plato de su agrado'
  } else if (ENTRECOT.checked) {
    MENSAJE.innerHTML = 'Esperamos que disfrute nuestro ' + ENTRECOT1
  } else if (MACARRONES.checked && GLUTEN.checked) {
    MENSAJE.innerHTML =
      'El plato es incompatible con su intolerancia al glúten, esperamos que elija otro plato de su agrado.'
  } else if (MACARRONES.checked) {
    MENSAJE.innerHTML = 'Esperamos que disfrute nuestros ' + MACARRONES1
  } else if (RISOTTO.checked && LACTOSA.checked) {
    MENSAJE.innerHTML =
      'El plato es incompatible con su intolerancia a la lactosa, esperamos que elija otro plato de su agrado.'
  } else if (RISOTTO.checked) {
    MENSAJE.innerHTML = 'Esperamos que disfrute nuestro ' + RISOTTO1
  } else if (ALBONDIGAS.checked) {
    MENSAJE.innerHTML = 'Esperamos que disfrute nuestras ' + ALBONDIGAS1
  } else {
    MENSAJE.innerHTML = 'Por favor, seleccione un plato.'
  }
}
