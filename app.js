alert("Boas vindas ao jogo do número secreto");

let numMaximo = 100;
let secretNumber = parseInt(Math.random() * numMaximo + 1);
let guess;
let atempts = 1;

// enquanto o chute não for igual ao n.s.
while (secretNumber != guess) {
  let guess = prompt(`Escolha um número entre 1 e ${numMaximo}`);
  // se guess for igual ao secret Number

  if (secretNumber == guess) {
    break;
  } else {
    if (secretNumber > guess) {
      alert(`O número secreto é maior que o ${guess}`);
    } else {
      alert(`O número secreto é menor que o ${guess}`);
    }
    //atempts = atempts + 1;
    atempts++;
  }
}

let palavraTentativa = atempts > 1 ? "tentativas" : "tentativa";
alert(
  `Isso aí! Você descobriu o número secreto (${secretNumber}) com ${atempts} ${palavraTentativa}!`
);

// if (atempts > 1) {
//   alert(
//     `Isso aí! Você descobriu o número secreto (${secretNumber}) com ${atempts} tentativas!`
//   );
// } else {
//   alert(
//     `Isso aí! Você descobriu o número secreto (${secretNumber}) com ${atempts} tentativa. Parabéns!`
//   );
// }
