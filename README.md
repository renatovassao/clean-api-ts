# Clean API em Typescript

Essa é uma tentativa de escrever um código com as boas práticas de [Arquitetura Limpa](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) em Typescript, mas com algumas alterações para deixar o código mais funcional.

A ideia desse código é conseguir separar bem as camadas da aplicação, mas sempre pensando em utilizar funções ao invés de classes.

![Clean Arquitecture](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)

## Camadas

### Domain
Essa camada contém a parte mais importante do seu código, a qual vai tomar as decisões sobre as regras de negócio de sua API.

É nela que você coloca todas as suas entidades e suas regras de negócio, como validações e interações entre as entidades. Ela é a camada mais pura da aplicação, e não deve ter nenhuma noção sobre persistência ou outras questões externas à regra de negócio. Assim, ela é fácilmente compreendida e testável.

### Application
Nessa camada é tomada as decisões sobre persistência ou interações com infraestrutura, mas sempre com isolamento. Isso significa que a interação com as camadas acima desta são sempre feitas via funções injetadas nas mesma, e portanto as interfaces de tais funções também são definidas aqui. Aqui, é o lugar onde ficarão os casos de uso de sua aplicação.

### Presentation
Esta camada é responsável por transformar o resultado de um caso de uso da apliação em uma resposta para o mundo externo. Por exemplo, se o servidor for uma RESTful JSON API, aqui ficará o mapeamento dos casos de uso em respostas HTTP. Caso seu servidor for RPC ou GraphQL, nessa camada é tratada esses mapeamentos. Note que essa camada ainda é pura, dado que todas as tipagens para tais mapeamentos são definidas aqui.

### Infrastructure
Aqui ficam as integrações externas ao seu serviço. Implementações de persistência, chamadas para APIs externas ou outras coisas referentes a infraestrutura vem aqui. Como esta camada é uma das últimas, alterações de serviços externos ou banco de dados não infuenciam o resto do código.

### Web
Aqui vem a implementação do seu web server de fato. Neste exemplo, foi utilizado [Express.js](https://expressjs.com/pt-br/). Aqui também é onde as injeções de dependências são criadas, para ligar toda a configuração de sua aplicação

## TODO
- Teste de integração
  - Infraestrutura
  - Web

## Referências
- [Revisão de Injeção de Dependência](https://www.youtube.com/watch?v=qBYVW4ghMi8)
- [Arquiteturas comuns de aplicativo Web](https://docs.microsoft.com/pt-br/dotnet/architecture/modern-web-apps-azure/common-web-application-architectures)
- [Injeção Assíncrona](https://www.youtube.com/watch?v=o9qL4HcDpIQ)
- [Design Patters Funcionais](https://www.youtube.com/watch?v=srQt1NAHYC0)