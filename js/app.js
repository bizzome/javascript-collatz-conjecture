/* Se N é par, N/2 */
/* Se N é ímpar, 3N+1 */
/* Repetir com o resultado */
/** Sempre que for ímpar salvar, se for 1 parar */

let vezesRodou = 0;
let vezesImpar = 0;

const answer = document.querySelector('.answer p');
const btnSubmit = document.querySelector('.numberSubmit');
const txtNumber = document.querySelector('.number');

function addList(){
    vezesRodou = 0;
    vezesImpar = 0;
    answer.textContent = '';
    let number = Number(txtNumber.value);
    
    collatz(number);
    
    answer.textContent = "Answer: It was necessary " + vezesRodou + " executions. " 
                            + vezesImpar + " times the number was odd.";
}

function collatz(n){
    vezesRodou++;
    if(n==1 || n==0){
        return n;
    }else if(n%2 == 1){
        vezesImpar++;
        collatz(3*n+1);
    }else{
        collatz(n/2);
    }
};

btnSubmit.addEventListener('click', addList);