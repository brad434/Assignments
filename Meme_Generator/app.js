const form = document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault();
    const url = document.querySelector("#url").value;
    const bottomText = document.querySelector("#botTxt").value;
    const topText = document.querySelector("#topTxt").value;
    const meme = document.querySelector(".meme");

    const container = document.createElement('div');
    container.style.position = 'relative';

    
    let img = document.createElement('img');
    img.src = url;
    container.appendChild(img);
    

    //TOP TEXT
    let upText = document.createElement('div');
    upText.textContent = topText;
    upText.style.position = 'absolute';
    upText.style.width = '100%';
    upText.style.textAlign = 'center';
    upText.style.top = 0;
    upText.style.left = 0;
    upText.style.fontSize = '2rem';
    upText.style.backgroundColor = 'white';

    container.appendChild(upText);
    
    //BOTTOM TEXT
    let dwText = document.createElement('div');
    dwText.textContent = bottomText;
    dwText.style.position = 'absolute';
    dwText.style.width = '400px';
    dwText.style.textAlign = 'center';
    dwText.style.bottom = 0;
    // dwText.style.left = 0;
    dwText.style.backgroundColor = 'white';
    dwText.style.fontSize = '2rem';


    container.appendChild(dwText);

    //CLOSE BUTTON
    const close = document.createElement('button');
    close.setAttribute('id', 'closeButton');
    close.textContent = 'Close';
    close.addEventListener('click', function(){
        container.remove();
    })

    container.appendChild(close);
    meme.appendChild(container);
});
