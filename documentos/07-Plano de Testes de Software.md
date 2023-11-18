# Plano de Testes de Software

Pré-requisitos: [Especificação do Projeto](./02-Especificação%20do%20Projeto.md), [Projeto de Interface](./04-Projeto%20de%20Interface.md)

Os requisitos para realização dos testes de software são:

Site publicado na internet;
Navegador da internet: Chrome, Firefox ou Edge.

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

|**CT - 01** | **Teste da página “Login”**|
|:---|:---|
| Requisitos Associados | RF-01, RF-02|
| Objetivo do Teste | Os testes planejados para a página de login visam verificar a exibição da mensagem de erro "Dados inválidos" ao acionar o botão "Entrar" sem nenhum dato preenchido. Confirmar o redirecionamento adequado para a página principal após o login bem-sucedido, assegurar a exibição correta da mensagem de erro ao inserir um e-mail inválido ou senha incorreta, verificar o carregamento correto da página de cadastro ao clicar no botão "Cadastrar" e avaliar a funcionalidade dos elementos (botões, campos, links) e a responsividade da página em diferentes dispositivos. |
| Passos |**Passo 1**: Preencher o campo de e-mail com um e-mail válido. Preencher o campo de senha com uma senha válida e Clicar no botão "Entrar". **Passo 2**: Preencher o campo de e-mail com um e-mail inválido. Preencher o campo de senha com uma senha inválida e Clicar no botão "Entrar". **Passo 3**: Clicar no botão “Cadastrar” **Passo 4**: Verificar se todos os elementos (botões, campos, links) estão funcionando corretamente e são clicáveis. **Passo 5**: Testar a responsividade da página em diferentes dispositivos. |
| Critérios de êxito | O redirecionamento para a página principal é feito corretamente após preencher o campo e-mail e senha corretamente e clicar no botão “Entrar”. A mensagem de erro "Dados inválidos" é exibida quando os dados informados não correspondem aos exigidos no campo e-mail e senha A página de “Cadastro” é carregada corretamente quando clicar no botão “Cadastro”.A pagina carrega corretamente em diferentes dispositivos |
| Responsável por elaborar do caso de Teste | Elismar |



|**CT - 02** | **Teste da página "Cadastro"**|
|:---|:---|
| Requisitos Associados | RF-1, RF2 |
| Objetivo do Teste | Os testes planejados para a página de cadastro visam a validação do processo de registro de novos usuários. Isso inclui verificar se o cadastro é bem-sucedido ao preencher corretamente campos como nome, e-mail e senha, assegurando o redirecionamento adequado para a página inicial após o cadastro. Além disso, os testes visam validar restrições, como formatos inválidos de e-mail ou senhas com menos de 6 dígitos, exibindo corretamente mensagens de erro. O teste do botão Já Possui Conta “Entrar”. Por fim, o teste de usabilidade avalia a funcionalidade dos elementos da página e sua responsividade em diferentes dispositivos.|
| Passos | Passo 1: Preencher o campo Nome. Preencher o campo e-mail com um e-mail válido. Preencher o campo de senha com uma senha válida e Clicar no botão "Concordar e Cadastrar". Passo 2: Preencher o campo de e-mail com um e-mail inválido. Preencher o campo de senha com uma senha inválida e Clicar no botão "Concorda e Cadastrar". Passo 3: Clicar no botão Já Possui Conta? “Entrar” Passo 4: Verificar se todos os elementos (botões, campos, links) estão funcionando corretamente e são clicáveis. Passo 5: Testar a responsividade da página em diferentes dispositivos. |
| Critérios de êxito | O redirecionamento para a página principal é feito corretamente após preencher o campo Nome, e-mail e senha corretamente e clicar "Concorda e Cadastrar".A mensagem de erro "Dados inválido Dados inválidos, favor conferir" é exibida quando os dados informados não correspondem aos exigidos no campo e-mail e senha A página de ”Login” é carregada corretamente quando clicar no botão Já Possui Conta? “Entrar” A pagina carrega corretamente em diferentes dispositivos |
| Responsável pela elaborar do caso de Teste | Felipe |


|**CT - 03** | **Teste da página "Home"**|
|:---|:---|
| Requisitos Associados | RF-5, RF-10, RF-11 |
| Objetivo do Teste |  Os testes para a página inicial incluem verificações da navegação pelo menu, assegurando que os botões "Início", "Receitas", "Despesas", "Cartão", "Meu Perfil" e "Sair" redirecionem corretamente para suas respectivas seções. Além disso, validam a exibição correta e atualizada dos valores de "Saldo Atual", "Receitas", "Despesas" e "Cartão de Crédito". O o Gráfico de Despesas e Receitas confirma a representação precisa das informações financeiras visuais, enquanto a avaliação das opções de seleção, filtragem e limpeza de filtro garante que os dados sejam exibidos conforme as escolhas do usuário. Esses testes abrangentes visam garantir a funcionalidade, precisão e usabilidade da página inicial, e sua responsividade em diferentes dispositivos. |
| Passos | Passo 1: Clicar nos botões "Início", "Receitas", "Despesas", "Cartão", "Meu Perfil" e "Sair". Passo 2: Verificar se os valores de "Saldo Atual", "Receitas", "Despesas" e "Cartão de Crédito" são exibidos corretamente. Passo 3: Verificar a exibição do gráfico com informações das despesas e receitas. Passo 4: Utilizar a opção de selecionar o mês, o ano, filtrar e limpar filtro. Passo 5: Testar a responsividade da página em diferentes dispositivos. |
| Critérios de êxito | Redirecionamento adequado para as respectivas páginas associadas a cada botão do menu. O botão "Início" deve direcionar para a página inicial, "Receitas" para a seção de receitas, "Despesas" para a área de despesas, "Cartão" para a página do cartão, "Meu Perfil" para a seção de perfil do usuário e "Sair" para a saída do sistema redirecionando para pagina de “Login”.Exibição precisa e atualizada dos valores: “Saldo Atual”, “Receitas”, “Despesas” e  “Cartão”Apresentação correta e legível das informações do Total das Despesas e Total das Receitas em forma de gráfico, diferenciando as categorias por cores distintas, mostrando do lado lista de Despesas e Receitas Funcionalidade correta das opções de seleção, filtragem e limpeza de filtro, garantindo que os dados sejam exibidos conforme o mês e o ano escolhido. A pagina carrega corretamente em diferentes dispositivos |
| Responsável pela elaborar do caso de Teste | Pedro |
