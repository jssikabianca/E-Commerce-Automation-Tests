# **E-Commerce Automation Tests**  

Este projeto contém testes automatizados para o site [Advantage Online Shopping](https://www.advantageonlineshopping.com/). Os testes são implementados com **Cypress** e seguem o formato **BDD** (Behavior Driven Development) usando **Cucumber**.  

## **Tecnologias Utilizadas**  
- **Cypress**: Framework de automação para testes de front-end.  
- **Cucumber**: Permite escrever testes em formato Gherkin (cenários em linguagem natural).  
- **Esbuild**: Ferramenta de bundling rápida e eficiente.  

## **Pré-requisitos**  
- **Node.js**: Certifique-se de ter o Node.js instalado. Você pode baixar e instalar através deste [link](https://nodejs.org/).  
- **NPM** ou **Yarn**: Instalado junto com o Node.js para gerenciar pacotes.  

## **Instalação e Configuração**  

```bash
# Clone este repositório
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_PROJETO>

# Instale as dependências do projeto
npm install

# Abra o Cypress no modo interativo
npx cypress open

# Execute os testes no modo headless (terminal)
npx cypress run

```
## **Estrutura do projeto**  
- features/: Diretório onde ficam os arquivos .feature com os cenários de teste em Gherkin.
- pages/: Contém os Page Objects, que encapsulam a lógica de interação com a interface da aplicação.
- support/: Configurações globais e customizações do Cypress.