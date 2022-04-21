# Funcionamento do temporizador

## Variáveis

- definiteTimeMS
- running
- lastTimeMS
- elapsedTimeMS
- finished

**definiteTimeMS** guarda um número inteiro que representa o tempo escolhido pelo usuário em milissegundos.
O usuário digitará no teclado por exemplo 1 minuto e 30 segundos, quando ele apertar em "pronto" será preciso ocorrer uma conversão de minutos e segundos para milissegundos e o resultado será atribuído à váriavel definiteTimeMS, será necessário esconder o #keyboard-container e exibir o #display-container.

**running** guarda  um valor boleano que informa se o temporizador está em execução(true) ou parado(false).

**lastTimeMS** guarda a data do frame anterior em milissegundos, pois o cálculo do tempo decorrido é realizado fazendo a diferença entre a data atual e a data do frame anterior: `Date.now() - lastTimeMS`

**elapsedTimeMS** guarda quanto tempo já se passou, a cada atualização de frame a função loop faz o cálculo do tempo decorrido desde a última atualização e soma o resultado a `elapsedTimeMS += Date.now() - lastTimeMS`

**finished** guarda o valor em boleano que informa se a contagem já terminou, valor padrão false, quando o tempo esgota finished passa a ser true.


## funções

- loop
- getRemainingTime
- updateDisplay
- start
- pause
- reset
- toggle

**loop** quando chamado verifica se running == true, se sim:
1. Adiciona o tempo decorrido à elapsedTimeMS
2. Atribui a data atual a lastTimeMS
3. Atualiza o display
4. E por fim pede ao navegador chamá-lo de novo já próximo frame

**getRemainingTime** retorna quanto tempo resta em milissegundos, ele retorna a diferença entre definiteTimeMS e elapsedTimeMS

**updateDisplay** atualiza o display para exibir o tempo restante

**start** atribui true a running, atribui a data atual a lastTimeMS e chama loop, isso fará que o cronometro inicie ou continue a contagem.

**pause** faz com que running receba false, assim a função loop não irá executar o bloco if e não irá solicitar ao navegador que a chame de volta.

**reset** chama pause, zera o elapsedTimeMS, e atualiza o display

**toggle** se running == true, chama pause, se não, chama start.
