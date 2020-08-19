//Criar função somar que retorna
//Soma de todos os multiplos de 3 e 5

//Multiplos de 3
//3, 6, 9

//Multiplos de 5
//5, 10

//multiplos de 4
//4, 8

//somandos os multiplos
//armazenar os multiplos de 3
//armazenar os multiplos de 5
//somar os dois


somar(10);
function somar(limite) {

  let multiplos3 = 0;
  let multiplos5 = 0;
  let multiplos4 = 0;

  for (i=0; i<=limite; i++) {
    if(i % 3 === 0)
    multiplos3 += i;

    if(i%5 === 0)
    multiplos5 += i;

    if(i%4 === 0)
    multiplos4 += i;
  }

    console.log(multiplos3 + multiplos5 + multiplos4);
  

}