let contador = 1;// na api o primeiro personagem começa com 1

const inc = ()=>{
    contador +=1;
    //console.log(contador);
    fetPersonagem(contador);
}

const dec = ()=>{
    if (contador > 1){
        contador -=1;
    //console.log(contador);
    fetPersonagem(contador);
    }
}

const fetPersonagem = async (contador)=>{
    let url = "https://rickandmortyapi.com/api/character/" + contador;
    const api = await fetch(url);
    const data = await api.json();
    console.log(data);

    /*Variaveis para colocar usar o innerHTML  */
    imageRES = document.getElementById("imagem");
    nomeRes = document.getElementById('nome');
    descricaoRes = document.getElementById('descricao');

    /* Inserindo no html */
    imageRES.src = data.image;
    nomeRes.innerText = data.name;
    descricaoRes.innerText = data.gender + ", " + data.status + ", " + data.species + ", " + data.type + ", " + data.origin.name;
}

fetPersonagem(contador);