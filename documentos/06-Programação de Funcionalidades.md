# Programação de Funcionalidades

Implementação da aplicação descritas por meio dos requisitos codificados. 


### Cadastro de usuários

![Tela de cadastro de usuários](./img/funcionalidade-cadastro.png)


#### Requisito atendido

RF-01: O site deve permitir que o usuário faça o cadastro de sua conta na plataforma


#### Artefatos da funcionalidade

<ul>
  <li>cadastro/index.html</li>
  <li>cadastro.css</li>
  <li>cadastro.js</li>
</ul>


#### Estrutura de Dados

Objetos e arrays para salvar as informações dos usuários cadastrados no localStorage.

#### Instruções de acesso

Ao acessar a aplicação sem estar logado, a mesma irá redirecionar para a página de login. Pode-se clicar no botção com o texto CADASTRAR para ser redirecionado para a tela de cadastro. 

Para realizar o cadastro, deve-se preencher o nome, e-mail e senha. O nome precisa ter no minimo 3 caracteres, o e-mail deve ser um e-mail válido, e a senha precisa ter no mínimo 6 caracteres.


#### Responsável

Rafael Maltez

--


### Login de usuários

![Tela de login de usuários](./img/funcionalidade-login.png)


#### Requisito atendido

RF-02: O site deve permitir que o usuário faça login, tendo acesso apenas às suas próprias finanças


#### Artefatos da funcionalidade

<ul>
  <li>login/index.html</li>
  <li>login.css</li>
  <li>login.js</li>
</ul>


#### Estrutura de Dados

Objetos e arrays para recuperar as informações dos usuários cadastrados no localStorage.

#### Instruções de acesso

Ao acessar a aplicação sem estar logado, a mesma irá redirecionar para a página de login. Deve-se utilizar um e-mail e senha previamente cadastrados para realizar o acesso.

#### Responsável

Elismar Ramos

--

### Cadastro de Receitas

![Tela de cadastro de receitas](./img/funcionalidade-cadastro-receitas.png)


#### Requisito atendido

RF-03: O site deve permitir o cadastro de novas receitas


#### Artefatos da funcionalidade

<ul>
  <li>receitas/index.html</li>
  <li>receitas/nova/index.html</li>
  <li>receitas.css</li>
  <li>novareceita.css</li>
  <li>receitas.js</li>
  <li>novareceita.js</li>
</ul>


#### Estrutura de Dados

Objetos e arrays para cadastrar e recuperar as informações das receitas cadastradas associadas ao usuário logado, a partir das informações armazenadas no localStorage.

#### Instruções de acesso

Após fazer login na aplicação,clicar no menu lateral no item Receitas e em seguida no card escrito NOVA RECEITA. Preencher o formulário com as informações solicitadas e clicar no botão de confirmação.

#### Responsável

Felipe Gomes

--

