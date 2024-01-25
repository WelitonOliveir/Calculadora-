function calcularAreaTriangulo(){
  const base = parseFloat(prompt("Informe a base do triãngulo:"))
  const altura = parseFloat(prompt("Informe a altura do triangulo:"))
  return base* altura /2
}

function calcularAreaRetangulo(){
  const base = parseFloat(prompt("Informe  a base do retangulo:"))
  const altura = parseFloat(prompt("Informe a altura do retângulo:"))
  return base * altura / 2
}

function calcularAeraQuadrado(){
  const lado = parseFloat(prompt("Informe a base do quadrado:"))
  return lado * lado
}

function calcularAreaTrapezio(){
  const baseMaior = parseFloat(prompt("Informe a base deo trapezio:"))
  const baseMenor = parseFloat(prompt("Infome a base do trapzeio:"))
  const altura = parseFloat(prompt("Infomre a altura do trapezio:"))
  return (baseMaior + baseMenor) * altura /2
}
 function calcularAreacirculo(){
  const raio = parseFloat(prompt("Informe o raio do circulo:"))
  return (3.14 * raio *raio)
 }

 function exbirMenu(){
  return prompt(
    "Calculadora Geométrica\n "+
    "1. Calcular area triangulo\n"+
    "2. Calcular area de retangulo\n"+
    "3. Calcular area de quadrado\n"+
    "4. Calcular area de trapézio" +
    "5. Calcular area de circulo\n"+
    "6. Sair\n"
  )
 }

function executar(){
  let opcao = ""

  do{
    opcao = exbirMenu()
    switch(opcao){
      case "1":
        resultado = calcularAreaTriangulo()
        break
      case "2":
        resultado = calcularAreaRetangulo()
        break
      case "3":
        resultado = calcularAeraQuadrado()
        break
      case "4":
        resultado = calcularAreaTrapezio()
        break
      case "5":
        resultado = calcularAreacirculo()
        break
      case "6":
        alert("Saindo")
        break
        default:
          alert("Opção Invalido")
    }
    if(resultado) {
      alert("Resultado:" + resultado)
    }
  } while(opcao !== "6")
}
executar()