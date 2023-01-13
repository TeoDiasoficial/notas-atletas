function calculaNotas(objAtletas) {
  for (let i = 0; i < objAtletas.length; i++) {

    let atleta = objAtletas[i]['nome']
    let notas = objAtletas[i]['notas']
   
   var nome = ['nome']
  nome.sort(function(a, b)
              {return a-b});
    var Atletas = ['notas']
  notas.sort(function(a,b)
              {return a-b});

   
    let notasComputadas = notas.slice(1, 4)
    var acumulador = 0
    notasComputadas.forEach(notas => {
      acumulador = notas + acumulador
    })

    let mediaValida = acumulador / notasComputadas.length

    console.log(`
        Atleta: ${atleta}
        Notas Obtidas: ${notas}
        Media Válida: ${mediaValida}
      `)
  }
}

let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

calculaNotas(atletas);
