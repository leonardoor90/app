🍳 Recipe Finder App: Buscador de Receitas Inteligente


Confira o projeto funcionando no link: https://react-spoonacular-foodapp.web.app/ 

📄 Sobre o Projeto

O Recipe Finder App é um aplicativo web interativo desenvolvido em React para simplificar a busca e o gerenciamento de receitas. A aplicação consome a API Spoonacular para oferecer um vasto catálogo de pratos, permitindo que o usuário personalize sua experiência com gerenciamento de favoritos e alternância de temas.

Este projeto demonstra a proficiência em desenvolvimento front-end moderno, gerenciamento de estado (React Hooks) e otimização de performance.

🌟 Funcionalidades em Destaque

Funcionalidade

Descrição

Pesquisa Poderosa

Busca em tempo real de receitas através da Spoonacular API por palavras-chave.

Gestão de Favoritos

Adição e remoção de receitas de uma lista pessoal, garantindo que suas favoritas estejam sempre acessíveis.

Persistência de Dados

A lista de favoritos e a preferência de tema são salvas no Local Storage do navegador, persistindo entre as sessões.

Alternador de Tema

Alternância suave entre os modos Light (Claro) e Dark (Escuro) para maior conforto visual.

Performance Otimizada

Implementação dos hooks useCallback e useMemo para evitar re-renderizações desnecessárias e maximizar a eficiência.

🛠️ Stack Tecnológico

Categoria

Tecnologia

Framework/Lib

React (Hooks: useState, useEffect, useCallback, useMemo)

Linguagem

JavaScript (ES6+)

Estilização

CSS3 (com modularização de estilos)

API Externa

Spoonacular API

Hospedagem & Deploy

Firebase Hosting

💡 Como Executar Localmente

Para testar o projeto em sua máquina:

Clone o repositório:

git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
cd seu-repositorio


Instale as dependências do Node:

npm install
# ou
yarn install


Configuração da API:
Certifique-se de que sua chave da Spoonacular API esteja configurada corretamente na chamada de fetch dentro do componente Homepage.jsx.

Inicie o servidor de desenvolvimento:

npm start
# ou
yarn start


O aplicativo será iniciado em http://localhost:3000.

Gerar Build de Produção (para Deploy):

npm run build
# ou
yarn build


🤝 Contribuições

Contribuições são bem-vindas! Se você tiver sugestões, sinta-se à vontade para abrir uma Issue ou enviar um Pull Request.

Feito com ❤️ por Leonardo Ramos - /leonardoor90