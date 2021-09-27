    //Atualizado
    function LivrosSemPreco (){
        const DivLivros = $('#DivLivros');
        const CardLivros = $('#CardLivros'); 
    //    CardLivros.delete();
        DivLivros.append(`
        <h3 style="color: azure;">Livros de Delphi! <span class="badge badge-secondary">Não tão novos</span></h3>                
        <br>
        <div id="CardLivros">    
        <div class="card-deck">
        <div class="card">
        <img class="card-img-top" src="img/51VhxgeOG9L.jpg" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title"><b>Guia do Programador: JavaScript</b></h5>
            <p class="card-text">Maurício Samy Silva é graduado em Engenharia Civil pelo Instituto Militar de Engenharia (IME). É um obstinado divulgador dos Padrões Web e desenvolve o site do Maujor e o Blog do Maujor. Em 2011, lançou o site destinado à divulgação da emergente tecnologia SVG. Maujor, como é conhecido na Internet, escreve para revistas de desenvolvimento web, é palestrante em eventos de TI e autor dos livros Construindo sites com CSS e (X)HTML, Criando sites com HTML, AJAX com jQuery, JavaScript, HTML5, CSS3, JQuery Mobile, JQuery UI, Fundamentos da SVG, Web Design Responsivo e Foundation for Sites; todos publicados pela Novatec Editora..</p>
            <p class="card-text"><b>Preço: </b>R$70,00</p>
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
                <p class="card-text"><b>Preço: </b>R$61,00</p>
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
            <p class="card-text"><b>Preço: </b>R$49,90</p>                    
            </div>
        <div class="card-footer">
            <small class="text-muted">Adicionado 3 semanas atrás</small>
        </div>
        </div>
        </div>
    </div>

    <br>
    <br>
    <h3 style="color: azure;">Livros de JavaScript! <span class="badge badge-secondary">Novos</span></h3>                
    <br>
    <div id="CardLivros">    
      <div class="card-deck">
      <div class="card">
      <img class="card-img-top" src="img/8573231858-marcelo-leao-axcel-books-borland-delphi-7-curso-completo-5e95f06d5d7e5-540x728.webp" alt="Card image cap">
          <div class="card-body">
          <h5 class="card-title"><b>Delphi 7 Curso Completo</b></h5>
          <p class="card-text">livro usado em bom estado de conservação com as páginas amareladas devido ação do tempo, leves desgastes nas bordas...o delphi deixou de ser simplesmente uma ferramenta de desenvolvimento para criação de aplicação com interface gráfica para o ambiente windows usando a linguem object pascal.</p>
          <p class="card-text"><b>Preço: </b>R$55,00</p>
          </div>
      <div class="card-footer">
          <small class="text-muted">Adicionado 12 anos atrás</small>
      </div>
      </div>
      <div class="card">
          <img class="card-img-top" src="img/D_NQ_NP_860231-MLB42116560620_062020-O.jpg" alt="Card image cap">
          <div class="card-body">
              <h5 class="card-title"><b>Usando Delphi 2</b></h5>
              <p class="card-text">O Guia de Referência mais Completo Formato: 17x24 cm, pg;883, brochura, livro usado, bordas ligeiramente desgastadas, capa desgastada, com carimbo e a etiqueta do antigo dono, amarelado pela ação do tempo.</p>
              <p class="card-text"><b>Preço: </b>R$73,00</p>
              </div>
          <div class="card-footer">
              <small class="text-muted">Adicionado 22 anos atrás</small>
          </div>
          </div>
      <div class="card">
      <img class="card-img-top" src="img/61NHirQPwLL.jpg" alt="Card image cap">
      <div class="card-body">
          <h5 class="card-title"><b>A Complete Guide - 2019 Edition</b></h5>
          <p class="card-text">Todas as ferramentas de que você precisa para uma Autoavaliação Embarcadero Delphi em profundidade. Apresentando 943 questões novas e atualizadas baseadas em casos, organizadas em sete áreas principais de design de processos.</p>
          <p class="card-text"><b>Preço: </b>R$99,90</p>                    
          </div>
      <div class="card-footer">
          <small class="text-muted">Adicionado 3 anos atrás</small>
      </div>
      </div>
      </div>
  </div>
        <br> 
        `);
    }
    //Atualizado
    function LivrosMenorPreco(){
        const DivLivros = $('#DivLivros');
        const CardLivros = $('#CardLivros');
    //    CardLivros.delete();
        DivLivros.append(`
        <h3 style="color: azure;">Livros de JavaScript! <span class="badge badge-secondary">Novos</span></h3>                
        <br>
        <div id="CardLivros">  
          <div class="card-deck">
          <div class="card">
          <img class="card-img-top" src="img/61UkXeOWqAL.jpg" alt="Card image cap">
          <div class="card-body">
              <h5 class="card-title"><b>Lógica de Programação e Algoritmos com JavaScript</b></h5>
              <p class="card-text">Maurício Samy Silva é graduado em Engenharia Civil pelo Instituto Militar de Engenharia (IME). É um obstinado divulgador dos Padrões Web e desenvolve o site do Maujor e o Blog do Maujor. Em 2011, lançou o site destinado à divulgação da emergente tecnologia SVG.</p>
              <p class="card-text"><b>Preço: </b>R$49,90</p>                    
              </div>
          <div class="card-footer">
              <small class="text-muted">Adicionado 3 semanas atrás</small>
          </div>
          </div>
          <div class="card">
          <img class="card-img-top" src="img/91z1xY4ppaL.jpg" alt="Card image cap">
          <div class="card-body">
              <h5 class="card-title"><b>O Guia Definitivo: JavaScript</b></h5>
              <p class="card-text">David Flanagan é programador e escritor. Outros de seus livros publicados pela O’Reilly incluem JavaScript Pocket Reference, The Ruby Programming Language e Java in a Nutshell.</p>
              <p class="card-text"><b>Preço: </b>R$61,00</p>
              </div>
          <div class="card-footer">
              <small class="text-muted">Adicionado 1 mês atrás</small>
          </div></div>
          <div class="card">
          <img class="card-img-top" src="img/51VhxgeOG9L.jpg" alt="Card image cap">
              <div class="card-body">
              <h5 class="card-title"><b>Guia do Programador: JavaScript</b></h5>
              <p class="card-text">Edécio Fernando Iepsen atua como professor da Faculdade de Tecnologia Senac Pelotas. É graduado em Tecnologia em Processamento de Dados (UCPel), e possui Mestrado em Ciência da Computação (UCPel) e Doutorado em Informática na Educação (UFRGS).</p>
              <p class="card-text"><b>Preço: </b>R$70,00</p>
              </div>
          <div class="card-footer">
              <small class="text-muted">Adicionado 3 meses atrás</small>
          </div>
          </div>
                </div>
            </div>

            <br>
            <br>
            <h3 style="color: azure;">Livros de Delphi! <span class="badge badge-secondary">Não tão novos</span></h3>                
            <br>
            <div id="CardLivros">    
              <div class="card-deck">
              <div class="card">
              <img class="card-img-top" src="img/8573231858-marcelo-leao-axcel-books-borland-delphi-7-curso-completo-5e95f06d5d7e5-540x728.webp" alt="Card image cap">
                  <div class="card-body">
                  <h5 class="card-title"><b>Delphi 7 Curso Completo</b></h5>
                  <p class="card-text">livro usado em bom estado de conservação com as páginas amareladas devido ação do tempo, leves desgastes nas bordas...o delphi deixou de ser simplesmente uma ferramenta de desenvolvimento para criação de aplicação com interface gráfica para o ambiente windows usando a linguem object pascal.</p>
                  <p class="card-text"><b>Preço: </b>R$71,00</p>
                  </div>
              <div class="card-footer">
                  <small class="text-muted">Adicionado 12 anos atrás</small>
              </div>
              </div>
              <div class="card">
                  <img class="card-img-top" src="img/D_NQ_NP_860231-MLB42116560620_062020-O.jpg" alt="Card image cap">
                  <div class="card-body">
                      <h5 class="card-title"><b>Usando Delphi 2</b></h5>
                      <p class="card-text">O Guia de Referência mais Completo Formato: 17x24 cm, pg;883, brochura, livro usado, bordas ligeiramente desgastadas, capa desgastada, com carimbo e a etiqueta do antigo dono, amarelado pela ação do tempo.</p>
                      <p class="card-text"><b>Preço: </b>R$73,00</p>
                      </div>
                  <div class="card-footer">
                      <small class="text-muted">Adicionado 22 anos atrás</small>
                  </div>
                  </div>
              <div class="card">
              <img class="card-img-top" src="img/61NHirQPwLL.jpg" alt="Card image cap">
              <div class="card-body">
                  <h5 class="card-title"><b>A Complete Guide - 2019 Edition</b></h5>
                  <p class="card-text">Todas as ferramentas de que você precisa para uma Autoavaliação Embarcadero Delphi em profundidade. Apresentando 943 questões novas e atualizadas baseadas em casos, organizadas em sete áreas principais de design de processos.</p>
                  <p class="card-text"><b>Preço: </b>R$99,90</p>                    
                  </div>
              <div class="card-footer">
                  <small class="text-muted">Adicionado 3 anos atrás</small>
              </div>
              </div>
              </div>
          </div>
                <br>
    `);   
    }
    //
    function LivrosMaiorPreco(){
        const DivLivros = $('#DivLivros');
        DivLivros.append(`
        <h3 style="color: azure;">Livros de Delphi! <span class="badge badge-secondary">Não tão novos</span></h3>                
        <br>
        <div id="CardLivros">  
            <div class="card-deck">
              <div class="card">
                <img class="card-img-top" src="img/61NHirQPwLL.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title"><b>A Complete Guide - 2019 Edition</b></h5>
                    <p class="card-text">Todas as ferramentas de que você precisa para uma Autoavaliação Embarcadero Delphi em profundidade. Apresentando 943 questões novas e atualizadas baseadas em casos, organizadas em sete áreas principais de design de processos.</p>
                    <p class="card-text"><b>Preço: </b>R$99,90</p>                    
                    </div>
                <div class="card-footer">
                    <small class="text-muted">Adicionado 3 anos atrás</small>
                </div>
                </div>
              <div class="card">
                  <img class="card-img-top" src="img/D_NQ_NP_860231-MLB42116560620_062020-O.jpg" alt="Card image cap">
                  <div class="card-body">
                      <h5 class="card-title"><b>Usando Delphi 2</b></h5>
                      <p class="card-text">O Guia de Referência mais Completo Formato: 17x24 cm, pg;883, brochura, livro usado, bordas ligeiramente desgastadas, capa desgastada, com carimbo e a etiqueta do antigo dono, amarelado pela ação do tempo.</p>
                      <p class="card-text"><b>Preço: </b>R$73,00</p>
                      </div>
                  <div class="card-footer">
                      <small class="text-muted">Adicionado 22 anos atrás</small>
                  </div>
                  </div>
            <div class="card">
            <img class="card-img-top" src="img/8573231858-marcelo-leao-axcel-books-borland-delphi-7-curso-completo-5e95f06d5d7e5-540x728.webp" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title"><b>Delphi 7 Curso Completo</b></h5>
                <p class="card-text">livro usado em bom estado de conservação com as páginas amareladas devido ação do tempo, leves desgastes nas bordas...o delphi deixou de ser simplesmente uma ferramenta de desenvolvimento para criação de aplicação com interface gráfica para o ambiente windows usando a linguem object pascal.</p>
                <p class="card-text"><b>Preço: </b>R$71,00</p>
                </div>
            <div class="card-footer">
                <small class="text-muted">Adicionado 12 anos atrás</small>
            </div>
            </div>
            </div>
        </div>

              <br>
              <br>
              <h3 style="color: azure;">Livros de JavaScript! <span class="badge badge-secondary">Novos</span></h3>                
              <br>                 
          <div class="card-deck">
            <div class="card">
              <img class="card-img-top" src="img/51VhxgeOG9L.jpg" alt="Card image cap">
                  <div class="card-body">
                  <h5 class="card-title"><b>Guia do Programador: JavaScript</b></h5>
                  <p class="card-text">Edécio Fernando Iepsen atua como professor da Faculdade de Tecnologia Senac Pelotas. É graduado em Tecnologia em Processamento de Dados (UCPel), e possui Mestrado em Ciência da Computação (UCPel) e Doutorado em Informática na Educação (UFRGS).</p>
                  <p class="card-text"><b>Preço: </b>R$70,00</p>
                  </div>
              <div class="card-footer">
                  <small class="text-muted">Adicionado 3 meses atrás</small>
              </div>
              </div>
              <div class="card">
                <img class="card-img-top" src="img/91z1xY4ppaL.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title"><b>O Guia Definitivo: JavaScript</b></h5>
                    <p class="card-text">David Flanagan é programador e escritor. Outros de seus livros publicados pela O’Reilly incluem JavaScript Pocket Reference, The Ruby Programming Language e Java in a Nutshell.</p>
                    <p class="card-text"><b>Preço: </b>R$61,00</p>
                    </div>
                <div class="card-footer">
                    <small class="text-muted">Adicionado 1 mês atrás</small>
                </div>
                </div>
            <div class="card">
              <img class="card-img-top" src="img/61UkXeOWqAL.jpg" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title"><b>Lógica de Programação e Algoritmos com JavaScript</b></h5>
                  <p class="card-text">Maurício Samy Silva é graduado em Engenharia Civil pelo Instituto Militar de Engenharia (IME). É um obstinado divulgador dos Padrões Web e desenvolve o site do Maujor e o Blog do Maujor. Em 2011, lançou o site destinado à divulgação da emergente tecnologia SVG.</p>
                  <p class="card-text"><b>Preço: </b>R$49,90</p>                    
                </div>
          <div class="card-footer">
              <small class="text-muted">Adicionado 3 semanas atrás</small>
          </div>
          </div>
                </div>
            </div>
            <br>  
    `);
    }
    //
    function LivroOrdemAlfabetica(){
        const DivLivros = $('#DivLivros');
        DivLivros.append(`

        `);
    }
