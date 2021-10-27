// comece a criar a sua função add na linha abaixo
function add(valor1, valor2)
{
  let x = valor1
  let z = valor2   
  let resultado = valor1 + valor2

 return resultado 
}

// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(valor1,valor2)
{
  let resultado = 0
   for (let contador = 0 ; contador < valor1 ; contador++) {
    resultado = add(resultado, valor2)                     }

 return resultado 
}

// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(valor1,valor2) 
{
  let resultado = 1
   for (let contador = 0 ; contador < valor2 ; contador++) {
    resultado = multiply(resultado, valor1)                }

 return resultado
}

// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(valor1) 
{
  for (let contador = valor1 - 1 ; contador >= 1 ; contador--) {
   valor1 = multiply(valor1, contador)                         }
 
 return valor1
}

// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci


// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(8) === 13, 'A função fibonacci não está funcionando como esperado');
