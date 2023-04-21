document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    var cep = document.getElementById("cep").value; // Obtém o valor do campo de CEP
    var url = "https://viacep.com.br/ws/" + cep + "/json/"; // URL da API de consulta de CEP

    // Faz a requisição à API
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Exibe o resultado em um modal
        var modal = document.getElementById("myModal");
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = `
          <h2>Resultado</h2>
          <p>CEP: ${data.cep}</p>
          <p>Logradouro: ${data.logradouro}</p>
          <p>Bairro: ${data.bairro}</p>
          <p>Cidade: ${data.localidade}</p>
          <p>Estado: ${data.uf}</p>
        `;
        modal.style.display = "block";

        // Fecha o modal quando o usuário clicar no botão de fechar
        var span = document.getElementsByClassName("close")[0];
        span.onclick = function() {
          modal.style.display = "none";
        }

        // Fecha o modal quando o usuário clicar fora do modal
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
         
          }
        }
      })
      .catch(error => {
          // Exibe mensagem de erro em caso de falha na consulta
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = "<p>Erro ao consultar o CEP. Verifique se o valor digitado é válido.</p>";
      });
  });