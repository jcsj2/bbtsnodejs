## Desafio

### Construa uma API que consiga obter os dados de veículos com base num código FIPE. A API deve conter as seguintes rotas:
- /buscarPorCodigo/:codigoFipe (GET)
	- Ira buscar informações de veículo por um código FIPE. 
	- Deve-se utilizar o serviço https://brasilapi.com.br/api/fipe/preco/v1/CODIGOFIPE (utilizando o AXIOS -> GET) substituindo CODIGOFIPE pelo código FIPE encontrado aqui (https://www.tabelafipebrasil.com/fipe/carros). Essa API retorna uma lista com um conjunto de informações para cada Ano/Modelo do veículo. Basta apenas armazenar em uma nova lista o primeiro item (conjunto) dessa lista.
	- Deverá retornar no response a informação salva
- /gerarArquivo (POST)
	- Irá gerar um arquivo .txt contendo todas as informações consultadas e armazenadas na primeira rota
	- Deverá retornar no response a lista de informações coletadas que foi salva e utilizada para gerar o arquivo

#### O projeto já tem todas as dependencias/libs no package.json e também o arquivo index.js configurado, faltando apenas a implementação.
##### OBS: pode-se utilizar o comando "npm run dev", que já habilitará o restart automático do index.js
##### OBS2: Já existe um arquivo api.http para poderem testar a implementação. A porta do servidor é a 3000, mas podem ficar livres para trocar.