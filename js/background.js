const images = ["0.jpg", "1.jpg", "2.jpeg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//const bgImage = document.createElement("img");
const bgImage = document.querySelector("img");
//bgImage.style.cssText = 'width:100%;height:80%'
bgImage.src = `img/${chosenImage}`;

//document.body.appendChild(bgImage);
//bgImage.addEventListener();