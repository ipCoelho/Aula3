// variáveis
const inputNome = document.getElementById("valueNome")
const peso = document.getElementById("valuePeso")
const altura = document.getElementById("valueAltura")
let resultado = document.getElementById("resultado")

// botões
const btnCalcular = document.getElementById("botao")

// funções
function calcularImc() {
    var imc = peso.value / altura.value ** 2
    imc.toFixed(2)
    nome = inputNome.value
    if (imc < 18.5) {
        resultado.textContent = nome+", seu IMC é "+imc+". "+"Você está abaixo do peso."
    } else { 
        if (imc >= 18.5 && imc <= 24.9) {
            resultado.textContent = nome+", seu IMC é "+imc+". "+"Parabéns! Você está no peso ideal."
        } else {
            if (imc >= 25 && imc <= 29.9) {
                resultado.textContent = nome+", seu IMC é "+imc+". "+"Você está acima do peso."
            } else {
                if (imc >= 30 && imc <= 34.9) {
                    resultado.textContent = nome+", seu IMC é "+imc+". "+"Cuidado. Você está em obesidade I."
                } else {
                    if (imc >= 35 && imc <= 39.9) {
                        resultado.textContent = nome+", seu IMC é "+imc+". "+"Cuidado. Você está em obesidade II."
                    } else {
                        if (imc > 40) {
                            resultado.textContent = nome+", seu IMC é "+imc+". "+"Cuidado. Você está em obesidade III."
                        }
                    }
                }
            }
        }
    }

    
    
}



// Adicionando um evento ao botão
btnCalcular.addEventListener("click", calcularImc)
