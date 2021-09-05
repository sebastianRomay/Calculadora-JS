const boton = document.getElementById('boton')

boton.addEventListener('click', sumar)

function sumar() {
  const forma = document.getElementById("forma");
  let operandoA = forma["operandoA"];
  let operandoB = forma["operandoB"];
  let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
  if(isNaN(resultado)){
    resultado = 'la operacion no incluye numeros'}
  document.getElementById("resultado").innerHTML = `El resultado es: ${resultado}`;
  console.log(`El resultado es: ${resultado}`)
}

const boton2 = document.getElementById('boton2')

boton2.addEventListener('click', restar)

function restar() {
    const forma = document.getElementById("forma");
    let operandoA = forma["operandoA"];
    let operandoB = forma["operandoB"];
    let resultado = parseInt(operandoA.value) - parseInt(operandoB.value);
    if(isNaN(resultado)){
      resultado = 'la operacion no incluye numeros'}
    document.getElementById("resultado").innerHTML = `El resultado es: ${resultado}`;
    console.log(`El resultado es: ${resultado}`)
  }

const boton3 = document.getElementById('boton3')

boton3.addEventListener('click', multiplicar)

function multiplicar() {
    const forma = document.getElementById("forma");
    let operandoA = forma["operandoA"];
    let operandoB = forma["operandoB"];
    let resultado = parseInt(operandoA.value) * parseInt(operandoB.value);
    if(isNaN(resultado)){
      resultado = 'la operacion no incluye numeros'}
    document.getElementById("resultado").innerHTML = `El resultado es: ${resultado}`;
    console.log(`El resultado es: ${resultado}`)
  }

const boton4 = document.getElementById('boton4')

boton4.addEventListener('click', dividir)

function dividir() {
    const forma = document.getElementById("forma");
    let operandoA = forma["operandoA"];
    let operandoB = forma["operandoB"];
    let resultado = parseInt(operandoA.value) / parseInt(operandoB.value);
    if(isNaN(resultado)){
      resultado = 'la operacion no incluye numeros'}
    document.getElementById("resultado").innerHTML = `El resultado es: ${resultado}`;
    console.log(`El resultado es: ${resultado}`)
  }