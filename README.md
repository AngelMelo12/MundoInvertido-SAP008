# O mensageiro do Mundo Invertido

# **Índice**

1. Pré-requisitos
2. Instalação do projeto
3. Introdução
4. Design do projeto

## 1 - Pré-requisitos

- Instalar o [Git bash](https://git-scm.com/download/win).
- Instalar o [Node.js](https://nodejs.org/en/)

## 2 - Instalação do projeto

- Utilizando o Git bash clone este projeto para uma pasta no seu computador.

```bash
git clone https://github.com/AngelMelo12/MundoInvertido-SAP008.git
```

- Na pasta em que você clonou o projeto, utilize o comando a seguir no Git bash:

```bash
npm install
```

- Opcional: Caso queira executar os testes utilize o seguinte comando:

```bash
npm test
```

- Para executar o projeto utilize o comando a seguir no Git bash:

```bash
npm start
```

- Após o processo de inicialização acesse o endereço que aparecer em seu terminal no seu navegador, por exemplo: [`http://localhost](http://localhost/):<numero>`

## 3 - Introdução

Após o Vecna atacar a cidade de Hawkins, muitas famílias que tiveram seus entes desaparecidos, ainda possuem esperança de reencontrá-los ou pelo menos tentar contato uma última vez.

Nesse último ataque, o mundo invertido recebeu vários moradores novos que atravessaram o portal, e como sabemos, esse mundo é fisicamente igual à realidade, com as mesmas construções, ruas, florestas e afins, mas com o espaço e o tempo distorcidos. 

Pensando em uma forma de ajudar essas pessoas a se comunicarem mesmo estando em mundos “diferentes”, criei esse meio de comunicação cifrada e decifrada, afim de que todos possam se comunicar diante desse desastre.

Esse site oferece dois campos de texto, um para você cifrar a sua mensagem, e o outro para decifrar mensagens de outras pessoas. Você também pode escolher o número de deslocamento, que altera a maneira de como estas mensagens serão cifradas e decifradas.

## 4 - Design do projeto

De início foi desenhado o layout do site da seguinte forma:

![esboco-1](https://uploaddeimagens.com.br/images/003/959/987/original/Esbo%C3%A7o_1._%281%29.jpg?1658972297)

O alfabeto com luzes fazia referência a quando o Will Byers desapareceu, e através de luzes conseguiu se comunicar com sua mãe Joyce.

Mas pensando em funcionalidade e clareza, decidi simplificá-lo:

![esboco-2](https://uploaddeimagens.com.br/images/003/959/990/original/Esbo%C3%A7o_2._%281%29.jpg?1658972604)

Essa decisão foi tomada pensando em facilitar a digitação das mensagens a serem cifradas e decifradas, assim como simplificar a montagem dos  arquivos HTML e CSS.
