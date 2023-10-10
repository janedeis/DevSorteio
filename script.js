function gerenateNumber(){
    const min = Math.ceil(document.querySelector(".input-min").value);
    const max = Math.floor(document.querySelector(".input-max").value);

    if(min >= max){
        alert("Valo Mínimo não poder ser Maior que o Valor Maximo!"+
         "\nTente Novamente Digite os Valor Mínimo e depois o valor Maximo")
    }else{
        const result = Math.floor(Math.random() * (min - max) +1 )+ min;
        alert("Numero Sorteado: " + result)
    }    
   
}

const  btnSortear = document.querySelector(".btn-sortear");

btnSortear.addEventListener("click", gerenateNumber);

