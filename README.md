# skillmatch
 “SkillMatch JS: Simulador de Compatibilidade com Vaga Front-End Júnior”  

Desenvolvido como parte de atividade avaliatória de curso de JavaScript seguindo requisitos pré definidos (tarefas, funcionais, estruturais e para apresentação).

A atividade proposta foi a criação de um programa para o RH da empresa, reduzindo tempo de análise entre perfil técnico de candidatos com os requisitos para preecher as vagas disponíveis. A aplicção criada deverá retornar ao departamento de RH a compatibilidade prevista entre candidato e as vagas disponíveis, para isso analisar as habilidades (do candidato, exigidas pela vaga e as que estão faltando para indicar ao candidato o que precisa ser desenvolvido).

Para para resolver o desafio proposto criei o seguinte organograma de resolução: 
 1. Analisar o desafio: 
  -> Realizei uma leitura detalhada da requisição (projeto). 
  -> Identifiquei os dados que deveriam entrar na aplicação (por exemplo: curriculum candidatos, vagas disponíveis, habilidades), classifiquei-os  segundo o tipo (array, number ou boolean) e descrevi onde seriam utilizados. 
  -> Na sequência pontuei sobre o resultado esperado  e as regras e limites estabelecidas para o projeto.   
  ->Utilizei a ferramenta Kanban para organização criando 5 categorias (backlog, to do, doing, revisão e concluído) utilizando o Trello (acesse pelo link: https://trello.com/invite/b/6ad6b5f23ae8a46d42687f7a/ATTI1c436f91bd573efaf22f9da4d841613b2CA906B2/projeto-sr) e anotações manuais adicionais (imagem no Kanban).
  -> No repositório do GitHub, que poderá ser acessado através da URL:https://github.com/vetsara-maker/skillmatch.git
  Criei as branchs: main, developer, feature e README-developer (apenas para atualizar de forma mais clara o README.md) e fiz os commits conforme ia cumprindo as tarefas.

 2. Desenhei a lógica necessária: primeiro com um pseudocódigo (no próprio caderno), dividindo o problema maior em menores e escrevendo o caminho da resolução (segui como modelo os resultados esperados e enumerei as tarefas a serem desenvolvidas de 1-14).

 3. Executei o código no terminal do VS Code verificando a sintaxe correta JS. Iniciei pelo npm install prompt-sync e acessei o arquivo pelo node skillmatch.js 

 4. Testar e otimizar (refatorar: verificar se o código pode ficar mais claro). Nessa parte do planejamento verifiquei onde poderia reduzir o código e o que poderia ficar mais claro. Detectei que poderia estar evouíndo no tipo de retorno ao cliente, na estética e na otimização de métodos. Preciso seguir estudando para melhorar nesses aspectos, assim como praticar para ter a lógica estabelecida e não precisar pesquisar e revisitar anotações tantas vezes durante a realização de uma tarefa.

Sobre o desenvolvimento de soluções:
-> criei o arquivo database.js simulando entrada de dados no app em desenvolvimento, contendo as const: 1. habilidades (pesquisei quais as principais habilidades requisitadas para trabalhar na área tech) , 2. vagas
(pesquisei sobre vagas reais em aberto para Desenvolvedor Front-end e descrevi os campos requisitados no projeto- empresa, cargo, habilidades requisitadas) utilizando const e arrays. 3. perfil candidato, nesse caso optei por criar algo fictício pois meu perfil ENTJ impede-me de candidatar-me a algo sem que eu possua excelência nas habilidades requisitadas (como precisei os processos ainda não estão automatizados concluí que as minhas habilidades técnicas seriam insuficientes para qualquer vaga tech, por enquanto). Usei module.exports para deixar o arquivo disponível ao principal.
-> arquivo skillmatch.js: segui os requisitos técnicos do projeto utilizando métodos estudados em classe. Iniciei instalando o prompt-sync no terminal, requisitei o prompt-sync e o arquivo database.js no início do código. Utilizei classe, hierarquia, callback (chamando relatório), métodos (filter e includes para rastrear as habilidades que o candidato tem e as que as empresas solicitavam). 
Para calcular a compatibilidade entre candidato vaga utilizei a seguinte lógica: o total de habilidades do candidato que correspondiam a solicitação das empresas (habilidades em comum) e dividi pelo total de habilidades técnicas para a vagas requisitadas (.length), para percentual multipliquei por 100. 
Utilizei-me de algumas extensões do VisualCode para facilitar a leitura no terminal, tais como: go Live Preview, Prettier,  ESLint, Insert Unicode.

A evolução é o caminho certo para quem aprecia a aprendizagem contínua e resolução de problemas, então estou certa que seguirei aprendendo e evoluíndo. 
Até a próxima!
SR-maker

SR-maker
