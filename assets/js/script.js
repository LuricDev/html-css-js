const tweetar = document.querySelector('button');
const textarea = document.querySelector('textarea');
const feed = document.querySelector(".conteudoPrincipal__listaTweets")

function tweet(event) {
    event.preventDefault();
    
    const tweetTextarea = textarea.value; 
    criarTweet(tweetTextarea)
}

tweetar.addEventListener('click', tweet);

// Função para criar o tweet
function criarTweet(tweetTexto) {

    // Objeto
    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();

    const tweet = {
        nome: "Ricardo",
        foto: "./assets/img/ProfilePic.png",
        usuario: "@ricardo",
        texto: tweetTexto,
        horario: `${hora}:${minutos}`
    }

    listarTweet(tweet)
}

function listarTweet(tweet) {
    
    const {nome,foto,usuario,texto,horario} = tweet // Desestruturação do objeto tweet

    // Elementos para o tweet
    let li      = document.createElement("li")
    li.classList.add("conteudoPrincipal__tweet") //Adicionando a classe

    let img     = document.createElement("img")
    img.src = foto; // Adicionando a foto
    img.classList.add("tweet__fotoPerfil")

    let div     = document.createElement("div")
    div.classList.add("tweet__conteudo")
    let h2      = document.createElement("h2")
    h2.innerText = nome; // Adicionando o nome

    let span    = document.createElement("span")
    span.innerText = ` ${usuario} • ${horario}`

    let p       = document.createElement("p")
    p.innerText = texto

    // Adicionando elementos na div
    div.appendChild(h2)
    div.appendChild(span)
    div.appendChild(p)

    li.appendChild(img) // Coloca o img no li
    li.appendChild(div) // Coloca o div no li 

    feed.appendChild(li)
    textarea.value = ""
}