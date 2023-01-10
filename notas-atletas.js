// Funcao responsavel pelo calculo das notas
function calculaNotas(objGinastas) {
 // Percorre a lista de ginastas
 for (let i = 0; i < objGinastas.length; i++) {

   let ginasta = objGinastas[i]['nome']
   let notas = objGinastas[i]['notas']

   // Ordenando as notas
   notas = notas.sort()

   // Eliminando a maior e menor nota
   let notasComputadas = notas.slice(1,4)
  
   // Calculando a media
   // Acumulador para salvar a soma das notas
   var acumulador = 0
   // Metodo forEach para somar as notas
   notasComputadas.forEach(nota => {
     acumulador = nota + acumulador
   })

   // Calculo da media utilizando o acumulador e a quantidade de notas
   let mediaValida = acumulador / notasComputadas.length


   // Imprime o Resultado
   console.log(`
     Ginasta: ${ginasta}
     Notas Obtidas: ${notas}
     Média Válida: ${mediaValida}
   `)
  }
}

// Insercao de Ginastas e Notas
let ginastas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

// Chamada da Funcao
calculaNotas(ginastas);
