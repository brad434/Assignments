
const form = document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault();
    const url = document.querySelector("#url").value;
    const bottomText = document.querySelector("#botTxt").value;
    const topText = document.querySelector("#topTxt").value;
    const meme = document.querySelector(".meme");

    const container = document.createElement('div');
    container.classList.add('memeContainer');
    

    //TOP TEXT
    let upText = document.createElement('div');
    upText.textContent = topText;
    upText.classList.add('topText');

    container.appendChild(upText);
    
    /*
    upText.style.position = 'absolute';
    upText.style.width = '100%';
    upText.style.textAlign = 'center';
    upText.style.top = 0;
    upText.style.left = 0;
    upText.style.fontSize = '2rem';
    upText.style.backgroundColor = 'white';
*/

    let img = document.createElement('img');
    img.src = url;
    container.appendChild(img);
    

    /*
    //TOP TEXT
    let upText = document.createElement('div');
    upText.textContent = topText;
    upText.classList.add('topText');
    /*
    upText.style.position = 'absolute';
    upText.style.width = '100%';
    upText.style.textAlign = 'center';
    upText.style.top = 0;
    upText.style.left = 0;
    upText.style.fontSize = '2rem';
    upText.style.backgroundColor = 'white';
*/
    
    //BOTTOM TEXT
    let dwText = document.createElement('div');
    dwText.classList.add('botText');
    dwText.textContent = bottomText;

    container.appendChild(dwText);

    /*
    dwText.style.position = 'absolute';
    dwText.style.width = '400px';
    dwText.style.textAlign = 'center';
    dwText.style.bottom = 0;
    // dwText.style.left = 0;
    dwText.style.backgroundColor = 'white';
    dwText.style.fontSize = '2rem';
*/


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

