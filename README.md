# Projeto_PWEB
Projeto desenvolvido para disciplina de P_WEB referente a uma  loja de roupa.

# MVC:

Model - A representação específica do domínio das informações nas quais o aplicativo
opera. O modelo é outro nome para a camada de domínio. A lógica do domínio adiciona
significado aos dados brutos (por exemplo, calculando se hoje é o aniversário do usuário ou
os totais, impostos e taxas de remessa dos itens do carrinho de compras). Com isso, o
framework que será utilizado para este componente será o Node.

View - Renderiza o modelo em um formulário adequado para interação, geralmente um
elemento da interface do usuário. O MVC é frequentemente visto em aplicativos da Web,
onde a visualização é a página HTML e o código que reúne dados dinâmicos para a página.
Com isso, o framework que será utilizado para este componente será o React.

Controller - Processos e respostas a eventos, geralmente ações do usuário, e chama
mudanças no modelo e talvez na visualização.

Linguagem: Javascript.

# Frameworks:

Front-End: o framework escolhido para trabalhar o front-end da loja virtual
foi o React. O React (às vezes denominado React.js ou ReactJS) é uma biblioteca
JavaScript de código aberto para criar interfaces de usuário. Destinado, principalmente, ao
desenvolvimento de páginas web, é baseado em componentes para facilitar a renderização
desses componentes quando os dados forem alterados, tornando assim o código mais
previsível e mais fácil de ser depurado.

Back-End: o framework escolhido para trabalhar o back-end da loja virtual
foi o NodeJs. O Node.js é um interpretador, com código aberto, de código JavaScript de
modo assíncrono e orientado a eventos, focado em migrar a programação do Javascript do
lado do cliente para os servidores, criando assim aplicações de alta escalabilidade (como
um servidor web), capazes de manipular milhares de conexões/requisições simultâneas em
tempo real, numa única máquina física. O HTTP é um cidadão de primeira classe no
Node.js, projetado com streaming e baixa latência em mente. Isso torna o Node.js bem
adequado para a fundação de uma biblioteca ou estrutura da Web.

## INSTALAÇÕES APARTIR DO REPOSITRIO
### Node API
* instalar o node.js :https://nodejs.org/en/  
* instalar mongoDb;  
* iniciar terminal __mongod__;  
* dentro da pasta da node-api use __npm i__ instala dependencias encontradas no package.json;
### REACT
* precisa node instalado, o pacode npm normalmente vem junto com o node,
* npm install -g create-react-app
* dentro da pasta da react-api use __npm i__ instala dependencias encontradas no package.json;
* caso ainda precise se nao for reconhecido no package e dependendo do erro: npm install react-router-dom ou npm install axios
 

### PARA RODAR O QUE JÁ FOI DESENVOLVIDO

*Basta ter instalado o node e o react
*As pastas que apresentam o react, basta acessar e rodar no terminal o seguinte comando: react-scripts start dentro do src da pasta react.
*Para rodar a parte do node basta entrar na pasta src e rodar no terminal o seguinte comando: node "nomedoarquivo".js ou nodemon "nomedoarquivo".js


