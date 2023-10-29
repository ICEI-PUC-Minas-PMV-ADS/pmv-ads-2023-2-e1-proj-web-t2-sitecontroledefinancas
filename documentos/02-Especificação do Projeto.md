# Especificação do Projeto

## Perfis de Usuários

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil: Usuário Interessado em Controlar suas Finanças </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Pessoa adulta que atualmente gasta mais do que ganha</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td><ol>
<li>Deseja uma ferramenta que o ajude a rastrear todas as suas dívidas, incluindo empréstimos, faturas de cartão de crédito e parcelamentos.</li>
<li>Procura funcionalidade que o auxiliem a priorizar e criar um plano de pagamento das dívidas.</li>
<li>Pretende ter uma visão clara de seu saldo devedor e de como suas ações impactam sua jornada rumo ao equilíbrio financeiro.</li>
<li>Procura funcionalidades que permitam categorizar os gastos, identificando onde é possível economizar</li>
<li>Deseja uma solução que o auxilie em sua educação financeira e de pessoas próximas.</li>
<li>Gostaria de funcionalidades que o ajudassem a desenvolver comportamento poupador, com mensagens de incentivo e avisos.</li>
<li>Gostaria de visualizar em forma de gráfico seus principais investimentos a fim de equilibrá-los.</li>
<li>Pretende visualizar gráficos e relatórios para entender como pode começar a poupar dinheiro para atingir objetivos específicos</li></ol>
</td>
</tr>
</tbody>
</table>


--------------------------
## Histórias de Usuários


|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
| Usuario            | Cadastrar fontes de renda | Visualizar o meu orçamento disponivel |
| Usuário            | Cadastrar despesas        | Entender como gasto meus recursos |
| Usuário            | Categorizar minhas despesas de acordo com a relevância | Entender onde posso fazer concessões|
| Usuário            | Visualizar as informações em gráficos simples | Aprender melhor sobre minhas finanças|
| Usuário            | Poder acessar a página no meu celular | Consultar meu orçamento quando estiver fora de casa|
| Usuário            | Receber avisos quando meu orçamento estiver próximo do fim ao cadastrar uma despesa | Poder me precaver de gastos desnecessários|
| Usuário            | Ver na tela uma mensagem de incentivo caso não ultrapasse o orçamento do mês|Ajudar a reforçar o comportamento de poupar dos meus filhos|
| Usuário            | Cadastrar investimentos| Visualizar a evolução de meu patrimônio líquido|

## Requisitos do Projeto

### Requisitos Funcionais


|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 | O site deve permitir que o usuário faça o cadastro de sua conta na plataforma | Alta |
| RF-02 | O site deve permitir que o usuário faça login, tendo acesso apenas às suas próprias finança | Alta |
| RF-03 | O site deve permitir o cadastro de novas receitas | Alta |
| RF-04 | O site deve permitir o cadastro de novas despesas | Alta |
| RF-05 | O site deve permitir a visualização completa de receitas e despesas na página inicial do usuário logado | Alta |
| RF-06 | O site deve permitir que as despesas sejam categorizadas de acordo com critérios pré-estabelecidos | Alta |
| RF-07 | O site deve permitir que os usuários cadastrem novas categorias para as despesas | Alta |
| RF-08 | O site deve permitir que as categorias de despesas sejam classificadas entre essenciais e não essenciais | Alta |
| RF-09 | O site deve exibir um aviso caso as contas estiverem próximas de vencimento  | Baixa |
| RF-10 | O site deve exibir um gráfico com as entradas, despesas e investimentos cadastrados pelo usuário | Alta |
| RF-11 | O site deve permitir ao usuário visualizar as informações de acordo com critérios específicos (mês, ano, entradas, despesas, investimentos, classificação, etc) | Alta |
| RF-12 | O site deve exibir um aviso caso as despesas atinjam 80% da receita do mês | Baixa |
| RF-13 | O site deve exibir uma mensagem de incentivo caso as despesas não ultrapassem as entradas do mês | Baixa |


**Prioridade: Alta / Média / Baixa.

### Requisitos não Funcionais


|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 |  O código fonte e a implantação do site devem estar acessíveis publicamente na internet. (Github e Netilify ou outra plataforma) | Alta |
| RNF-02  | O site deve funcionar adequadamente na versão mais recente dos principais navegadores (Google Chrome, Firefox, Microsoft Edge e Safari) (>2%) | Média  |
| RNF-   | O site deve possuir design responsivo, se adequando corretamente a computadores, tablets e celulares | Alta |
| RNF-   | O site deve implementar padrões de acessibilidade recomendados pela W3C | Média |

**Prioridade: Alta / Média / Baixa.
