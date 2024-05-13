function frase(){
    document.getElementById("frase").innerHTML = "Obrigado pela preferencia, veja nosso catalogo de produtos na aba 'PRODUTOS', entre em contato conosco para comprar nossos produtos";
}

function limpar(){
    document.getElementById("frase").innerHTML = "";
}


function trocaImagemDireita(){
    const ima = document.querySelector("img");
    const imaTipo = ima.getAttribute("src");
    if(imaTipo === "../imagens/logo.jpg"){
        ima.setAttribute("src", "../imagens/Cadastro.jpg");
    } else if(imaTipo === "../imagens/Cadastro.jpg"){
        ima.setAttribute("src", "../imagens/Catalogo.jpg");
    }
}

function trocaImagemEsquerda(){
    const ima = document.querySelector("img");
    const imaTipo = ima.getAttribute("src");
    if(imaTipo === "../imagens/Catalogo.jpg"){
        ima.setAttribute("src", "../imagens/Cadastro.jpg");
    } else if(imaTipo === "../imagens/Cadastro.jpg"){
        ima.setAttribute("src", "../imagens/logo.jpg");
    }
}