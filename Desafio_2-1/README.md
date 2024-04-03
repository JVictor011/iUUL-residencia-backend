# Validador de Dados de Usuários

Este projeto é um aplicativo JavaScript que valida dados de usuários fornecidos em um arquivo JSON de entrada. Ele foi desenvolvido para processar e validar informações básicas de usuários, como nome, CPF, data de nascimento, renda mensal e estado civil. Os dados válidos são registrados em um arquivo de saída, enquanto os erros de validação são registrados em um arquivo separado.

## Funcionalidades

-   Leitura de um arquivo JSON de entrada contendo dados de usuários.
-   Validação dos dados conforme regras definidas.
-   Registro dos dados válidos em um arquivo de saída.
-   Registro de erros de validação em um arquivo separado.
-   Exibição de resultados na interface do usuário.

## Campos e regras

| Campo              | Regras                                                                | Tipo   |
| ------------------ | --------------------------------------------------------------------- | ------ |
| Nome               | De 5 a 60 caracteres                                                  | String |
| CPF                | CPF válido                                                            | Number |
| Data de nascimento | Formato DDMMAAAA; O cliente deve ter pelo menos 18 anos na data atual | Date   |
| Renda mensal       | Valor com duas casas decimais e vírgula decimal (não obrigatório)     | Number |
| Estado civil       | C, S, V ou D (maiúsculo ou minúsculo); Não obrigatório                | String |

## Estrutura do Projeto

O projeto está estruturado da seguinte forma:

-   `validacao.js`: Arquivo principal que inicia a aplicação e chama a função de inicialização.
-   `app.js`: Arquivo que faz a leitura do JSON e inicializa o controller e o presenter.
-   `src/`: Diretório que contém os principais componentes da aplicação.
    -   `controller/`: Contém o controlador principal e códigos relacionados à lógica de negócio.
    -   `model/`: Contém o modelo de dados e regras de validação.
    -   `presenter/`: Contém o apresentador responsável por exibir os resultados na interface do usuário.
    -   `utils/`: Contém utilitários, como leitor e escritor de arquivos.
-   `view/`: Contém saídas do sistema.
