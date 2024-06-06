//lição 2
let nome = document.getElementById("nome")
let resposta = document.getElementById("resposta")

function clica()
{
    resposta.innerHTML = "Olá," + nome.value + " tudo bem?"
}

//lição 3
let metro = document.getElementById("centímetro")
let resultado = document.getElementById("resultadocm")

function converção()
{
    resultado.innerHTML = parseInt(centímetro.value) /10
}

//lição 4

//lição 5

let n1 = document.getElementById("numero")
let n2 = document.getElementById("numero1")
let n3 = document.getElementById("solução")

  function maior()
  {
    if(n1.value < 2 )
        {
            n1.innerHTML = "1 é menor que 2"
        }
       else
        {
            n1.innerHTML = "1 não é menor que 2"
        }
  }

//lição 6

//lição 7
var k = 1
while(k <= 100)
    {
        console.log(k)
        k = k + 1
    }

//lição 8
var d = 5
while(d <= 50)
    {
        console.log(d)
        d = d + 5
    }
//lição 9 
var f = 100;
while(f >= 0)
    {
        console.log(f)
        f = f - 10
    }
 