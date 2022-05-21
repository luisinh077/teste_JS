var pessoas = [
  {
    id: 1,
    name: "João da Silva",
    birthday: "2000-10-03",
    address: {
      street: "Rua A",
      addressNumber: "35",
      district: "Beija Flor",
      complement: null,
      postalcode: "13250-000",
      city: "Jundiaí",
      state: "SP",
    },
  },
  {
    id: 2,
    name: "Antônio José",
    birthday: "1983-01-09",
    address: {
      street: "Rua de Trás",
      addressNumber: "798",
      district: "São José",
      complement: "Apto 21",
      postalcode: "13250-010",
      city: "Itatiba",
      state: "SP",
    },
  },
  {
    id: 3,
    name: "Maria Antônia",
    birthday: "1996-12-15",
    address: {
      street: "Rua Floriano Peixoto",
      addressNumber: "340",
      district: "Centro",
      complement: "Bloco A Apto 45",
      postalcode: "19800-010",
      city: "Assis",
      state: "SP",
    },
  },
  {
    id: 4,
    name: "Italo Alves",
    birthday: "2007-06-03",
    address: {
      street: "Rua Alagoas",
      addressNumber: "35",
      district: "Centro",
      complement: null,
      postalcode: "86300-000",
      city: "Cornélio Procópio",
      state: "PR",
    },
  },
  {
    id: 5,
    name: "Miguel",
    birthday: "2010-12-10",
    address: {
      street: "Rua da Pedreira",
      addressNumber: "10",
      district: "Vila Tortuga",
      complement: null,
      postalcode: "28951-806",
      city: "Armação dos Búzios",
      state: "RJ",
    },
  },
]

nameAge(pessoas);
notComplement(pessoas);
ordenarNome(pessoas);
removePessoa(3);
nameCity(pessoas);

// Função para informar a idade da pessoa
function nameAge(pessoas) {
  pessoas.forEach(pessoa => {
    var dataAtual = new Date();
    var data = new Date(pessoa.birthday);

    console.log(`\nNOME..: ${pessoa.name} \nIDADE..: ${dataAtual.getFullYear() - data.getFullYear()}`);
  });
}

// Função para informar quantas pessoas sem complemento
function notComplement(pessoas) {
  var contador = 0;

  pessoas.forEach(pessoa => {
    if (pessoa.address.complement == null) {
      contador++;
    }
  });

  console.log(`\n${contador} pessoas não tem complemento!`);
}

// Função para ordenar array por nome
function ordenarNome(pessoas) {
  var auxArray = [];
  pessoas.forEach(pessoa => {
    auxArray.push(pessoa.name);
  });
  auxArray.sort();

  for (i = 0; i < pessoas.length; i++) {
    for (j = 0; j < pessoas.length; j++) {
      if (auxArray[i] == pessoas[j].name) {
        let auxText = [];

        if (pessoas[j].address.complement == null) {
          auxText.push("Não possui complemento")
        } else {
          auxText.push(pessoas[j].address.complement);
        }

        console.log(`
          \n\n============ ${i + 1}° Pessoa ============
          \nNome: ${pessoas[j].name}
          \nData Aniversário: ${pessoas[j].birthday}
          \nEndereço: ${pessoas[j].address.street}
          \nNúmero: ${pessoas[j].address.addressNumber}
          \nDistrito: ${pessoas[j].address.district}
          \nComplemento: ${auxText}
          \nCódigo Postal: ${pessoas[j].address.postalcode}
          \nCidade: ${pessoas[j].address.city}
          \nEstado: ${pessoas[j].address.state}
        `)
      }
    }
  }
}

// Função para remover uma pessoa e mostrar quem foi removido
function removePessoa(valor) {
  let auxPessoa = [], contador = 0;
  pessoas.forEach(pessoa => {
    if (valor == pessoa.id) {
      pessoas.splice(contador, 1);

      if (pessoa.address.complement == null) {
        auxPessoa.push("Não possui complemento");
      } else {
        auxPessoa.push(pessoa.address.complement);
      }

      console.log(`
        \n\n============ Pessoa Removida ============
        \nNome: ${pessoa.name}
        \nData Aniversário: ${pessoa.birthday}
        \nEndereço: ${pessoa.address.street}
        \nNúmero: ${pessoa.address.addressNumber}
        \nDistrito: ${pessoa.address.district}
        \nComplemento: ${auxPessoa}
        \nCódigo Postal: ${pessoa.address.postalcode}
        \nCidade: ${pessoa.address.city}
        \nEstado: ${pessoa.address.state}
      `)
    }
    contador++;
  });
}

// Função para informar nome e cidade de residência da pessoa
function nameCity(pessoas) {
  pessoas.forEach(pessoa => {
    console.log(`\nNOME..: ${pessoa.name} \nCIDADE..: ${pessoa.address.city}`);
  });
}