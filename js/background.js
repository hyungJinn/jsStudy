const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
//console.log(bgImage);

document.body.appendChild(bgImage);
//append 가장 뒤에, prepend 가장 위에
