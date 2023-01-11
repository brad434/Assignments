const form = document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault();
    const url = document.querySelector("#url").value;
    const bottomText = document.querySelector("#botTxt").value;
    const topText = document.querySelector("#topTxt").value;
    const meme = document.querySelector(".meme");

    console.log(url,topText,bottomText);
    console.log(urlPhoto);

    function urlPhoto(){
        let image = document.createElement('img');
        image.src = url;
        meme.appendChild(image);
    }

    function placeTopText(){
        meme.appendChild = topText;
    }

    urlPhoto();
    placeTopText();
})