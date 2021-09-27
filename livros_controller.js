function AdicionarLivros(){
    const DivLivros = $('#DivLivros');
    const UsaCategoria = $('#categoria').val();
    const UsaPrecos = $('#precos').val();
    if(UsaCategoria == 1 && UsaPrecos == 1 ){
        alert('Escolha no minimo um dos filtros');    
    } else { 
        DivLivros.append(`
                    <div class="card-deck">
                    <div class="card">
                    <img class="card-img-top" src="img/51VhxgeOG9L.jpg" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title"><b>Guia do Programador: JavaScript</b></h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Adicionado 3 meses atrás</small>
                    </div>
                    </div>
                    <div class="card">
                    <img class="card-img-top" src="img/91z1xY4ppaL.jpg" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title"><b>O Guia Definitivo: JavaScript</b></h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Adicionado 1 mês atrás</small>
                    </div>
                    </div>
                    <div class="card">
                    <img class="card-img-top" src="img/61UkXeOWqAL.jpg" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title"><b>Lógica de Programação e Algoritmos com JavaScript</b></h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Adicionado 3 semanas atrás</small>
                    </div>
                    </div>
                </div>
                <br>   
    `);
    }
}