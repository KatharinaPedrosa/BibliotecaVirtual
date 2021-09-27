function AdicionarLivros(){
const UsaOrdem = $('#Ordem').is(":checked");
const UsaPrecos = $('#precos').val();

    if(UsaPrecos == 1){
        if(!UsaOrdem){
            LivrosSemPreco(); 
        }else{
            LivroOrdemAlfabetica();
        }
    };
    
    //Se usa a Ordem
    if (UsaOrdem) { 
        LivroOrdemAlfabetica();
    } else if(UsaPrecos == 2) {
        LivrosMenorPreco();
    } else if(UsaPrecos == 3){ 
        LivrosMaiorPreco();
        }
    }