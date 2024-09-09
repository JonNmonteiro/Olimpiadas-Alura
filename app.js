
// function filtrarDados(valor) {
//     const resultadosFiltrados = dados.filter(dado => {
//       // Adapte a condição de filtragem de acordo com seus dados
//       return dado.nome.toLowerCase().includes(valor.toLowerCase());
//     })};

// function pesquisar() {
//     console.log(dados);

//     let section =document.getElementById("resultados-pesquisa");
//     const filtroInput = document.getElementById('nome');
//     let dadosFiltrados = filtrarDados(filtroInput);

//     dadosFiltrados.forEach(dadosFiltrados => {
//     section.innerHTML += 
//             `<div class="item-resultado">
//                     <h2>
//                     <a href="#" target="_blank">${dados.titulo}</a> 
//                     </h2>
//                     <p class="descricao-meta">${dados.descricao}
//                     </p>
//                     <a href="${dados.link}" target="_blank">Mais informações</a> 
//                 </div>
//     `;
//     })};


  const resultadosSection = document.getElementById('resultados-pesquisa');
  const filtroInput = document.getElementById('nome');

  function filtrarDados(valor) {
    const resultadosFiltrados = dados.filter(dad=> {
      // Adapte a condição de filtragem de acordo com seus dados
      //return dad.titulo.includes(valor);
      if (dad.titulo.toLowerCase().includes(valor.toLowerCase()) || dad.descricao.toLowerCase().includes(valor.toLowerCase())) {
        return dad;
      }
    
    });

    // Limpa a seção de resultados antes de adicionar novos elementos
    let resultados ="<p></p>"; 
    // Adiciona os resultados filtrados à seção
    resultadosFiltrados.forEach(resultadosFiltrados => {
      // ... código para adicionar o dado à seção (similar ao exemplo anterior)
      resultados += `<div class="item-resultado">
                     <h2>
                    <a href="#" target="_blank">${resultadosFiltrados.titulo}</a> 
                     </h2>
                     <p class="descricao-meta">${resultadosFiltrados.descricao}
                     </p>
                     <a href="${resultadosFiltrados.link}" target="_blank">Mais informações</a> 
                 </div>
     `;


    });
    resultadosSection.innerHTML = resultados;
  }


  // Chamada inicial para renderizar todos os dados
  //filtrarDados('');

  function pesquisar() {
    filtrarDados(filtroInput.value);
  };
  //openDB(); 