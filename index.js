const pessoas = [
   {
    nome: "Carlos",
    peso: 150,
    altura: 1.88,
    sexo: "M"
   },
   {
    nome: "Juliana",
    peso: 150,
    altura: 1.88,
    sexo: "F"
   },
   {
    nome: "Julio",
    peso: 150,
    altura: 1.88,
    sexo: "M"
   },
   {
    nome: "Marcela",
    peso: 150,
    altura: 1.88,
    sexo: "F"
   },
   {
    nome: "Priscila",
    peso: 50,
    altura: 1.88,
    sexo: "F"
   }
]
    const imcFeminino = 30;
    const imcMasculino = 40;

    for( let i = 0; i < pessoas.length; i++) {
        
        const imc = pessoas[i].peso / (pessoas[i].altura * pessoas[i].altura);

        if( imc >= 30 && pessoas[i].sexo == "F" || imc >= 40 && pessoas[i].sexo == "M"  ) {
            console.log(`${pessoas[i].nome} você esta acima do peso`);
        } else {
            console.log(`${pessoas[i].nome} você não esta acima do peso`)
        }
    }
   
